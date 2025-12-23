import "./globals.css";
import NavigationShell from "./components/navigation.shell";
import type { Metadata } from "next";

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
        <NavigationShell />
        <main>{children}</main>
      </body>
    </html>
  );
}
