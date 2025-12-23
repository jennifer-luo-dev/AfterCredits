import { NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createSupabaseClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    : null;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const folderPath = url.searchParams.get("path");
  if (!folderPath)
    return NextResponse.json({ error: "missing path" }, { status: 400 });

  if (!supabaseAdmin)
    return NextResponse.json(
      { error: "service key not configured" },
      { status: 500 }
    );

  try {
    // List all files in the folder
    const { data: files, error: listError } = await supabaseAdmin.storage
      .from("memories")
      .list(folderPath);

    if (listError)
      return NextResponse.json({ error: listError.message }, { status: 500 });

    // Filter out placeholder files and get signed URLs for each image
    const imageFiles = files.filter(
      (file) =>
        !file.name.startsWith(".") &&
        file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)
    );

    const signedUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const filePath = `${folderPath}/${file.name}`;
        const { data, error } = await supabaseAdmin.storage
          .from("memories")
          .createSignedUrl(filePath, 60 * 15);

        if (error) {
          // console.error(`Failed to sign URL for ${filePath}:`, error);
          return null;
        }

        return {
          name: file.name,
          url: data.signedUrl,
        };
      })
    );

    const validUrls = signedUrls.filter((item) => item !== null);

    return NextResponse.json({ images: validUrls });
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { error: "Failed to list folder" },
      { status: 500 }
    );
  }
}
