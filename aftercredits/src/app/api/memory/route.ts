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
        if (!m.imagePath) return m;
        try {
          // Check if imagePath is a folder by trying to list its contents
          const { data: files, error: listError } = await supabaseAdmin.storage
            .from("memories")
            .list(m.imagePath);

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
                return { ...m, imageSrc: data.signedUrl };
              }
            }
          } else if (!listError) {
            // imagePath is likely a single file, not a folder - try to create signed URL directly
            const { data, error } = await supabaseAdmin.storage
              .from("memories")
              .createSignedUrl(m.imagePath, 60 * 15);
            if (!error && data?.signedUrl) {
              return { ...m, imageSrc: data.signedUrl };
            }
          }

          console.warn("Could not create signed URL for", m.imagePath);
          return m;
        } catch (err) {
          console.warn("Failed to create signed URL", err);
          return m;
        }
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
    const { title, date, location, description, imagePath, imageUrl, userId } =
      body;

    const data: any = {
      title,
      location: location ?? null,
      description: description ?? null,
      imageUrl: imageUrl ?? null,
      imagePath: imagePath ?? null,
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
