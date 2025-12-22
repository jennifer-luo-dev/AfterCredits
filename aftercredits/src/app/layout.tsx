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
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}
