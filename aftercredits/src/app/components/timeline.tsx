"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Film,
  StickyNote,
  Plus,
  Share2,
} from "lucide-react";

type MemoryItem = {
  id: number;
  title: string;
  date: string;
  location?: string | null;
  image?: string | null;
};

const Strip = () => {
  return (
    <div className="border-b border-t bg-[#1D1618] py-2 border-[#A78A73] relative z-0">
      <div className="flex gap-4 overflow-hidden px-4">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-[#291D1F] flex-shrink-0 border border-[#5C4841]"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default function Timeline() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [memories, setMemories] = useState<MemoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    async function getMemories() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/memory");
        if (!res.ok) throw new Error(`Failed to load memories: ${res.status}`);
        const data = await res.json();

        const mapped: MemoryItem[] = (data || []).map((m: any) => ({
          id: m.id,
          title: (m.title ?? "").toUpperCase(),
          date: m.date
            ? new Date(m.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              })
            : "",
          location: m.location ?? null,
          image: m.imageSignedUrls?.[0] ?? null,
        }));

        if (mounted) setMemories(mapped);
      } catch (err: any) {
        console.error("Error loading memories", err);
        if (mounted) setError(err?.message ?? String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    }

    getMemories();
    return () => {
      mounted = false;
    };
  }, []);
  const router = useRouter();

  const onMemoryClick = (id: number) => {
    router.push(`/memory/${id}`);
  };

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return; // null guard

    const scrollAmount = 400;

    if (direction === "left") {
      containerRef.current.scrollLeft -= scrollAmount;
    } else {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-#251a1d via-#1a1315 to-#251a1d text-white flex flex-col overflow-hidden">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto py-16">
        {/* Title Section */}
        <div className="text-center mb-30">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Film className="w-8 h-8" style={{ color: "var(--accent)" }} />
            <h2
              className="text-3xl tracking-wider"
              style={{ color: "var(--accent)" }}
            >
              AFTER CREDITS
            </h2>
            <Film className="w-8 h-8" style={{ color: "var(--accent)" }} />
          </div>
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            {memories.length} FRAMES OF TIME
          </p>
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-16 h-px"
              style={{
                background: `linear-gradient(to right, transparent, var(--primary))`,
              }}
            ></div>
            <div
              className="w-2 h-2 rotate-45"
              style={{ backgroundColor: "var(--accent)" }}
            ></div>
            <div
              className="w-16 h-px"
              style={{
                background: `linear-gradient(to left, transparent, var(--primary))`,
              }}
            ></div>
          </div>
        </div>

        {/* Film Strip and Memories */}
        <div className="relative px-8 flex justify-center">
          <div className="w-3/5 relative">
            {/* Top Strip */}
            <div className="relative z-0">
              <Strip />
            </div>

            {/* Memories Container */}
            <div className="relative -mt-2 -mb-2">
              {/* Left Arrow */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-6 h-6 border rounded-lg flex items-center justify-center transition shadow-lg cursor-pointer"
                style={{ borderColor: "var(--primary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--primary)")
                }
              >
                <ChevronLeft className="w-3 h-3" />
              </button>

              {/* Scrollable Container */}
              <div
                ref={containerRef}
                className="flex gap-6 overflow-x-auto overflow-y-visible scroll-smooth scrollbar-hide px-16 py-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {loading ? (
                  // simple loading placeholders
                  [...Array(6)].map((_, i) => (
                    <div key={i} className="flex-shrink-0 w-3xs">
                      <div
                        className="relative border-4 overflow-hidden shadow-2xl animate-pulse bg-gray-800 h-[420px]"
                        style={{ borderColor: "var(--border-accent)" }}
                      />
                    </div>
                  ))
                ) : error ? (
                  <div className="text-red-400">
                    Error loading memories: {error}
                  </div>
                ) : memories.length === 0 ? (
                  <div className="flex items-center justify-center w-full py-24 text-gray-400">
                    No memories yet — add your first memory to see it here.
                  </div>
                ) : (
                  memories.map((memory) => (
                    <div
                      key={memory.id}
                      className="flex-shrink-0 w-3xs group cursor-pointer relative z-0 hover:z-20"
                      onClick={() => onMemoryClick(memory.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") onMemoryClick(memory.id);
                      }}
                    >
                      <div className="relative bg-[#291D1F] border-3 border-(--border-accent) overflow-hidden shadow-2xl transition-transform group-hover:scale-105 group-hover:border-accent">
                        {/* Image */}
                        <div className="aspect-[3/4] overflow-hidden m-1">
                          <img
                            src={memory.image ?? "/logo512.png"}
                            alt={memory.title}
                            onError={(e) => {
                              // If the image fails to load (missing object or bad URL),
                              // fall back to a local placeholder to avoid showing the alt
                              // text as a broken image.
                              (e.currentTarget as HTMLImageElement).src =
                                "/logo512.png";
                            }}
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            onClick={() => router.push("/memorydetail")}
                          />
                        </div>

                        {/* Info Section */}
                        <div
                          className="p-4 border-t flex flex-col text-center"
                          style={{ borderColor: "var(--accent)" }}
                        >
                          <h3
                            className="text-xs mb-1 tracking-wide"
                            style={{ color: "var(--accent)" }}
                          >
                            {memory.title}
                          </h3>
                          <p className="text-gray-400 text-xs mb-1">
                            {memory.date}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {memory.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-6 h-6 border rounded-lg flex items-center justify-center transition shadow-lg cursor-pointer"
                style={{ borderColor: "var(--primary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--primary)")
                }
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Bottom Strip */}
            <div className="relative z-0">
              <Strip />
            </div>
          </div>
        </div>

        {/* Scroll Instruction */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            SCROLL TO VIEW MORE FRAMES
            <ChevronRight className="w-4 h-4" />
          </p>
        </div>
      </main>
    </div>
  );
}
