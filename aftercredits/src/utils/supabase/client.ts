import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing Supabase URL. Set NEXT_PUBLIC_SUPABASE_URL in your environment."
  );
}
if (!supabaseKey) {
  throw new Error(
    "Missing Supabase public key. Set NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment."
  );
}

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey);
