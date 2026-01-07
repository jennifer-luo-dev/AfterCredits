import { createClient as createBrowserSupabaseClient } from "./client";
import { User } from "@supabase/supabase-js";

const supabase = createBrowserSupabaseClient();

export async function getCurrentUser(): Promise<User | null> {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error.message);
      return null;
    }

    if (user) {
      // optional debug
      console.log("Logged in user:", user.email);
      return user;
    }

    return null;
  } catch (err) {
    console.error("Unexpected error fetching current user:", err);
    return null;
  }
}
