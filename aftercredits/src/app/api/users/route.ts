import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Get authenticated user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user data from the database via Prisma (bypass Supabase table permissions/issues)
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!userData) {
      // If a Supabase-authenticated user exists but no application profile exists yet,
      // treat it as unauthorized so the client redirects to login/signup flow.
      return NextResponse.json(
        { error: "User profile not found" },
        { status: 401 }
      );
    }

    return NextResponse.json({ user: userData }, { status: 200 });
  } catch (error) {
    // console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Get authenticated user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, username } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required and must be a string" },
        { status: 400 }
      );
    }

    if (!username || typeof username !== "string") {
      return NextResponse.json(
        { error: "Username is required and must be a string" },
        { status: 400 }
      );
    }

    // Check if user already exists using Prisma
    const existingUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    if (existingUser) {
      // Update existing user
      try {
        const updatedUser = await prisma.user.update({
          where: { id: user.id },
          data: { name, username },
        });
        return NextResponse.json({ user: updatedUser }, { status: 200 });
      } catch (updateError: any) {
        return NextResponse.json(
          { error: "Failed to update user", details: updateError.message },
          { status: 500 }
        );
      }
    } else {
      // Create new user using Prisma
      try {
        const newUser = await prisma.user.create({
          data: { id: user.id, name, username },
        });
        return NextResponse.json({ user: newUser }, { status: 201 });
      } catch (insertError: any) {
        return NextResponse.json(
          { error: "Failed to create user", details: insertError.message },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    // console.error("Error creating/updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
