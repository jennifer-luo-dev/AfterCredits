"use client";
import { usePathname } from "next/navigation";

export default function NavigationConditional({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Don't show navigation on login/signup pages
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  
  if (isAuthPage) {
    return null;
  }
  
  return <>{children}</>;
}
