import "./globals.css";
import NavigationShell from "./components/navigation.shell";
import NavigationConditional from "./components/navigation-conditional";
import type { Metadata } from "next";

// Load client-side AuthGuard wrapper (this is a Client Component)
import AuthGuardWrapper from "./components/auth-guard-wrapper.client";

export const metadata: Metadata = {
  title: "AfterCredits - Memory Timeline",
  description: "Capture and cherish your special moments together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <div className="flex flex-col">
          <NavigationConditional>
            <NavigationShell />
          </NavigationConditional>
          {/* Auth guard runs on client to ensure unauthenticated users are redirected to /login */}
          <AuthGuardWrapper />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
