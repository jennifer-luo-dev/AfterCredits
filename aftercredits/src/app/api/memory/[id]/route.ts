import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

// PUT /api/memory/:id - update a memory
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const parsedId = Number(id);
    const body = await request.json();
    const { title, date, location, description, imagePaths } = body;

    const data: any = {
      title,
      location: location ?? null,
      description: description ?? null,
      imagePaths: imagePaths ?? [],
    };
    if (date) data.date = new Date(date);

    const memory = await prisma.memory.update({
      where: { id: parsedId },
      data: data as any,
    });

    return NextResponse.json(memory);
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { error: "Failed to update memory" },
      { status: 500 }
    );
  }
}

// GET /api/memory/:id - get a single memory
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const parsedId = Number(id);
    const memory = await prisma.memory.findUnique({ where: { id: parsedId } });
    if (!memory)
      return NextResponse.json({ error: "Not found" }, { status: 404 });

    // If service role key present, generate signed URLs
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabaseAdmin = createClient(
          SUPABASE_URL,
          SUPABASE_SERVICE_ROLE_KEY
        );

        const result: any = { ...memory };

        // Handle imagePaths array (multiple images)
        if (
          memory.imagePaths &&
          Array.isArray(memory.imagePaths) &&
          memory.imagePaths.length > 0
        ) {
          const signedUrls = await Promise.all(
            memory.imagePaths.map(async (path: string) => {
              try {
                const { data, error } = await supabaseAdmin.storage
                  .from("memories")
                  .createSignedUrl(path, 60 * 15);
                if (!error && data?.signedUrl) {
                  return data.signedUrl;
                }
                // console.warn("Could not create signed URL for", path);
                return null;
              } catch (err) {
                // console.warn("Failed to create signed URL for", path, err);
                return null;
              }
            })
          );
          result.imageSignedUrls = signedUrls.filter((url) => url !== null);
        }

        return NextResponse.json(result);
      } catch (err) {
        // console.warn("Failed to create signed URLs", err);
      }
    }

    return NextResponse.json(memory);
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { error: "Failed to load memory" },
      { status: 500 }
    );
  }
}
