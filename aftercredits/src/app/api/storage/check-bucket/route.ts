import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET() {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "Supabase credentials not configured" },
        { status: 500 }
      );
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data, error } = await supabase.storage.getBucket("memories");

    if (error) {
      return NextResponse.json(
        { error: error.message, exists: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ exists: true, bucket: data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, exists: false },
      { status: 500 }
    );
  }
}
