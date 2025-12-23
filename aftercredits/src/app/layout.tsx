import "./globals.css";
import NavigationShell from "./components/navigation.shell";

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
