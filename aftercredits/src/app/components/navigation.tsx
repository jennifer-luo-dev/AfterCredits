"use client";
import { useRouter } from "next/navigation";
import { Film, MessageCircle, Plus, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useView } from "../context/ViewContext";
import { createClient } from "../../utils/supabase/client";

export function Navigation({ unreadCount = 0 }: { unreadCount?: number }) {
  const { view, setView } = useView();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        // console.error("Error signing out:", error);
        return;
      }

      // Redirect to login page after successful sign out
      // Use both router navigation and a hard reload as a fallback to clear client state/cookies
      router.replace("/login");
      try {
        // force full reload to ensure cookies/session removal is respected by middleware
        window.location.href = "/login";
      } catch (e) {
        // ignore in SSR
      }
      router.refresh();
    } catch (err) {
      // console.error("Sign out error:", err);
    }
  };

  return (
    <nav className="bg-gradient-to-b from-card to-card/80 border-b-2 border-primary/40 sticky top-0 z-50 shadow-2xl shadow-primary/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center">
          <button
            onClick={() => {
              setView("timeline");
              router.push("/");
            }}
            className="flex items-center gap-3 group hover:cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-destructive border-2 border-accent/60 flex items-center justify-center group-hover:from-primary/80 group-hover:to-destructive/80 transition-all shadow-lg shadow-primary/20">
              <Film className="w-6 h-6 text-accent" />
            </div>
            <div className="xs:hidden xs:block text-left">
              <div className="text-sm uppercase tracking-widest text-accent">
                Cinema
              </div>
              <div className="text-xs text-muted-foreground tracking-wide">
                Our Timeline
              </div>
            </div>
          </button>

          <div className="ml-auto flex items-center gap-3">
            <Button
              variant={view === "timeline" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setView("timeline");
                router.push("/");
              }}
              className="gap-2 flex uppercase tracking-wider text-xs border border-primary/30 hover:border-primary/60 cursor-pointer"
            >
              <Film className="w-4 h-4" />
              <span className="sm:hidden sm:inline">Reel</span>
            </Button>

            <Button
              variant={view === "messages" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setView("messages");
                router.push("/notes");
              }}
              className="gap-2 flex relative uppercase tracking-wider text-xs border border-primary/30 hover:border-primary/60 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="sm:hidden sm:inline">Notes</span>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-background rounded-full flex items-center justify-center text-xs border border-background">
                  {unreadCount}
                </span>
              )}
            </Button>

            <Button
              variant={view === "new-memory" ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setView("new-memory");
                router.push("/newframe");
              }}
              className="gap-2 flex uppercase tracking-wider text-xs border border-primary/30 hover:border-primary/60 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span className="sm:hidden sm:inline">New Frame</span>
            </Button>

            <div className="ml-2 pl-2 border-l border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="gap-2 text-muted-foreground hover:text-foreground uppercase tracking-wider text-xs border border-transparent hover:border-primary/30 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
