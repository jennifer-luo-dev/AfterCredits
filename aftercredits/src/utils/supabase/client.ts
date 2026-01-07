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

export const createClient = () => 
  createBrowserClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        // Get cookie value from document.cookie
        if (typeof document === 'undefined') return undefined;
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
      },
      set(name: string, value: string, options: any) {
        // Set cookie in document.cookie
        if (typeof document === 'undefined') return;
        let cookie = `${name}=${value}`;
        if (options?.maxAge) cookie += `; max-age=${options.maxAge}`;
        if (options?.path) cookie += `; path=${options.path}`;
        if (options?.domain) cookie += `; domain=${options.domain}`;
        if (options?.sameSite) cookie += `; samesite=${options.sameSite}`;
        if (options?.secure) cookie += '; secure';
        document.cookie = cookie;
      },
      remove(name: string, options: any) {
        // Remove cookie by setting expired date
        if (typeof document === 'undefined') return;
        let cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        if (options?.path) cookie += `; path=${options.path}`;
        if (options?.domain) cookie += `; domain=${options.domain}`;
        document.cookie = cookie;
      },
    },
  });
