import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createSupabaseClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    : null;

// GET /api/memory - list memories
export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");
  // Build options dynamically and avoid strict typing issues
  const findOptions: any = { orderBy: { createdAt: "desc" } };
  if (userId) findOptions.where = { userId };
  const memories = await prisma.memory.findMany(findOptions);

  // If we have a SUPABASE_SERVICE_ROLE_KEY, generate short-lived signed urls for private images
  if (supabaseAdmin) {
    const withUrls = await Promise.all(
      memories.map(async (m: any) => {
        const result: any = { ...m };

        // Handle imagePath (legacy single image)
        if (m.imagePath) {
          try {
            // Check if imagePath is a folder by trying to list its contents
            const { data: files, error: listError } =
              await supabaseAdmin.storage.from("memories").list(m.imagePath);

            if (!listError && files && files.length > 0) {
              // imagePath is a folder - get the first file
              const firstFile = files.find(
                (f: any) => f.name !== ".emptyFolderPlaceholder"
              );
              if (firstFile) {
                const filePath = `${m.imagePath}/${firstFile.name}`;
                const { data, error } = await supabaseAdmin.storage
                  .from("memories")
                  .createSignedUrl(filePath, 60 * 15);
                if (!error && data?.signedUrl) {
                  result.imageSrc = data.signedUrl;
                }
              }
            } else if (!listError) {
              // imagePath is likely a single file, not a folder - try to create signed URL directly
              const { data, error } = await supabaseAdmin.storage
                .from("memories")
                .createSignedUrl(m.imagePath, 60 * 15);
              if (!error && data?.signedUrl) {
                result.imageSrc = data.signedUrl;
              }
            }

            if (!result.imageSrc) {
              console.warn("Could not create signed URL for", m.imagePath);
            }
          } catch (err) {
            console.warn("Failed to create signed URL", err);
          }
        }

        // Handle imagePaths array (multiple images)
        if (
          m.imagePaths &&
          Array.isArray(m.imagePaths) &&
          m.imagePaths.length > 0
        ) {
          try {
            const signedUrls = await Promise.all(
              m.imagePaths.map(async (path: string) => {
                try {
                  const { data, error } = await supabaseAdmin.storage
                    .from("memories")
                    .createSignedUrl(path, 60 * 15);
                  if (!error && data?.signedUrl) {
                    return data.signedUrl;
                  }
                  console.warn("Could not create signed URL for", path);
                  return null;
                } catch (err) {
                  console.warn("Failed to create signed URL for", path, err);
                  return null;
                }
              })
            );
            // Filter out any null values from failed URL generations
            result.imageSignedUrls = signedUrls.filter((url) => url !== null);
          } catch (err) {
            console.warn("Failed to process imagePaths array", err);
          }
        }

        return result;
      })
    );
    return NextResponse.json(withUrls);
  }

  // No service role key available. Attempt a best-effort public URL fallback
  // (this will only work if your "memories" bucket is public). For private
  // buckets you should set SUPABASE_SERVICE_ROLE_KEY in your environment so
  // the server can generate signed URLs.
  const withFallback = memories.map((m: any) => ({
    ...m,
    imageSrc:
      m.imageUrl ??
      (SUPABASE_URL && m.imagePath
        ? `${SUPABASE_URL}/storage/v1/object/public/memories/${encodeURIComponent(
            m.imagePath
          )}`
        : null),
  }));

  return NextResponse.json(withFallback);
}

// POST /api/memory - create a memory
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, date, location, description, imagePaths, userId } = body;

    const data: any = {
      title,
      location: location ?? null,
      description: description ?? null,
      imagePaths: imagePaths ?? [],
      userId: userId ?? null,
    };

    console.log("REQ BODY:", body);
    // Memory model requires a DateTime `date`. Default to now if missing.
    data.date = date ? new Date(date) : new Date();

    const memory = await prisma.memory.create({ data });

    return NextResponse.json(memory, { status: 201 });
  } catch (err: any) {
    console.error("Failed to create memory:", err);
    // Return the actual error message so the client can show helpful info
    const message = err?.message ?? "Failed to create memory";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
