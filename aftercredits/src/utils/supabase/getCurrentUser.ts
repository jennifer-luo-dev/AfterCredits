import { createClient as createBrowserSupabaseClient } from "./client";
import { User } from "@supabase/supabase-js";

const supabase = createBrowserSupabaseClient();

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }

  if (user) {
    console.log("Logged in user:", user.email);
    return user;
  } else {
    console.log("No user is logged in");
    return null;
  }
}
