// app/api/notes/route.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
  throw new Error(
    "Missing Supabase URL. Set NEXT_PUBLIC_SUPABASE_URL in your environment."
  );
}
if (!SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "Missing Supabase key. Set SUPABASE_SERVICE_ROLE_KEY in your environment."
  );
}

const supabaseAdmin = createSupabaseClient(
  SUPABASE_URL!,
  SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * Helper: get authenticated user from Authorization header
 */
async function getUserFromRequest(req: Request) {
  // 1) Prefer Authorization header token
  const authHeader = req.headers.get("authorization");
  if (authHeader) {
    const token = authHeader.replace("Bearer ", "");
    try {
      const { data, error } = await supabaseAdmin.auth.getUser(token);
      if (!error && data?.user) return data.user;
    } catch {}
  }

  // 2) Fallback to session cookie (server-side)
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      SUPABASE_URL!,
      SUPABASE_SERVICE_ROLE_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll ? cookieStore.getAll() : [];
          },
        },
      }
    );

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (!error && user) return user;
  } catch {}

  return null;
}

/**
 * GET /api/notes
 * Returns all notes for the authenticated user
 */
export async function GET(req: Request) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const notes = await prisma.note.findMany({
      orderBy: { date: "asc" },
      select: { id: true, userId: true, message: true, date: true },
    });

    const userIds = Array.from(new Set(notes.map((n) => n.userId)));
    const users = userIds.length
      ? await prisma.user.findMany({
          where: { id: { in: userIds } },
          select: { id: true, name: true, username: true },
        })
      : [];

    const userMap = new Map(users.map((u) => [u.id, u]));

    const notesWithUser = notes.map((n) => ({
      ...n,
      user: userMap.get(n.userId) ?? null,
    }));

    return NextResponse.json(notesWithUser);
  } catch (error) {
    console.error("GET /notes error:", error);
    return NextResponse.json(
      { error: "Failed to fetch notes" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/notes
 * Creates a new note for the authenticated user
 */
export async function POST(req: Request) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { message, memoryId } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const note = await prisma.note.create({
      data: {
        message,
        userId: user.id,
      },
      select: { id: true, userId: true, message: true, date: true },
    });

    const noteUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { id: true, name: true, username: true },
    });

    return NextResponse.json({ ...note, user: noteUser }, { status: 201 });
  } catch (error) {
    console.error("POST /notes error:", error);
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    );
  }
}
