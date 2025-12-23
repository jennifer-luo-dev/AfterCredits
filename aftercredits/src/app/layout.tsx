import "./globals.css";
import NavigationShell from "./components/navigation.shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AfterCredits - Memory Timeline",
  description: "Capture and cherish your special moments together",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationShell />
        <main>{children}</main>
      </body>
    </html>
  );
}
