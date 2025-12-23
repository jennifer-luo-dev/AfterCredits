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
  const path = url.searchParams.get("path");
  if (!path)
    return NextResponse.json({ error: "missing path" }, { status: 400 });

  if (!supabaseAdmin)
    return NextResponse.json(
      { error: "service key not configured" },
      { status: 500 }
    );

  try {
    const { data, error } = await supabaseAdmin.storage
      .from("memories")
      .createSignedUrl(path, 60 * 15);
    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ url: data.signedUrl });
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { error: "Failed to create signed URL" },
      { status: 500 }
    );
  }
}
