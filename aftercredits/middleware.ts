import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "./src/utils/supabase/middleware";

const PUBLIC_ROUTES = ["/login"];

// Debugging helper to verify middleware runs
if (process.env.NODE_ENV !== "production") {
  try {
    // eslint-disable-next-line no-console
    console.log("🔐 Middleware loaded (aftercredits/middleware.ts)");
  } catch {}
}

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  try {
    const isPublic = PUBLIC_ROUTES.some(
      (route) => path === route || path.startsWith(`${route}/`)
    );
    if (isPublic) {
      return NextResponse.next();
    }

    // Ensure Supabase environment variables exist in the Edge runtime
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) {
      // eslint-disable-next-line no-console
      console.error('Supabase env vars missing in middleware environment');
      return NextResponse.redirect(new URL('/login', req.url));
    }

    const { supabase, supabaseResponse } = createClient(req);
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    // Debug output to help diagnose why middleware might not be redirecting
    if (process.env.NODE_ENV !== "production") {
      try {
        // eslint-disable-next-line no-console
        console.log("🔐 middleware check:", {
          path,
          user: user ? user.id : null,
          error: error?.message || null,
        });
      } catch {}
    }

    if (!user || error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return supabaseResponse;
  } catch (err: any) {
    try {
      // eslint-disable-next-line no-console
      console.error('Middleware invocation failed:', err?.message || String(err));
    } catch {}
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes (they handle auth independently)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api/).*)",
  ],
};
