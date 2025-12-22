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
    const { title, date, location, description, imageUrl, imagePath } = body;

    const data: any = {
      title,
      location: location ?? null,
      description: description ?? null,
      imageUrl: imageUrl ?? null,
    };
    if (date) data.date = new Date(date);
    if (imagePath !== undefined) data.imagePath = imagePath;

    const memory = await prisma.memory.update({
      where: { id: parsedId },
      data: data as any,
    });

    return NextResponse.json(memory);
  } catch (err) {
    console.error(err);
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

    // If service role key present, attempt to generate signed url
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY && memory.imagePath) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabaseAdmin = createClient(
          SUPABASE_URL,
          SUPABASE_SERVICE_ROLE_KEY
        );
        const { data, error } = await supabaseAdmin.storage
          .from("memories")
          .createSignedUrl(memory.imagePath, 60 * 15);
        if (!error && data?.signedUrl) {
          return NextResponse.json({ ...memory, imageSrc: data.signedUrl });
        }
      } catch (err) {
        console.warn("Failed to create signed URL for", memory.imagePath, err);
      }
    }

    // Fallback to public URL or imageUrl
    const imageSrc =
      memory.imageUrl ??
      (process.env.NEXT_PUBLIC_SUPABASE_URL && memory.imagePath
        ? `${
            process.env.NEXT_PUBLIC_SUPABASE_URL
          }/storage/v1/object/public/memories/${encodeURIComponent(
            memory.imagePath
          )}`
        : null);

    return NextResponse.json({ ...memory, imageSrc });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to load memory" },
      { status: 500 }
    );
  }
}
