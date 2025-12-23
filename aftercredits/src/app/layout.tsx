"use client";
import "./globals.css";
import NavigationShell from "./components/navigation.shell";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleViewChange = (view: string) => {
    console.log("View Changed to ", view);
  };
  const handleSignOut = () => {
    console.log("Signing out...");
  };
  return (
    <html lang="en">
      <body>
        <NavigationShell />
        <main>{children}</main>
      </body>
    </html>
  );
}
