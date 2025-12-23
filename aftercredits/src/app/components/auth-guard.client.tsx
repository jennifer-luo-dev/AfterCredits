"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only run guard on client and for non-public routes
    const PUBLIC = ["/login", "/signup"];
    if (PUBLIC.some((p) => pathname === p || pathname.startsWith(`${p}/`)))
      return;

    let canceled = false;

    (async () => {
      try {
        const res = await fetch("/api/users", {
          method: "GET",
          credentials: "include",
        });
        if (canceled) return;
        if (res.status === 401) {
          router.replace("/login");
        }
      } catch (err) {
        // On network or other errors, redirect to login
        router.replace("/login");
      }
    })();

    return () => {
      canceled = true;
    };
  }, [pathname, router]);

  return null;
}
