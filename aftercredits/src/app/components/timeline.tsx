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
            ? new Date(m.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "",
          location: m.location ?? null,
          // API returns signed urls as `imageSrc` when available, otherwise `imageUrl` (legacy)
          image: m.imageSrc ?? m.imageUrl ?? null,
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Main Content */}
      <main className="py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Film className="w-8 h-8 text-yellow-500" />
            <h2 className="text-5xl font-bold text-yellow-500 tracking-wider">
              AFTER CREDITS
            </h2>
            <Film className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-gray-400 text-sm tracking-widest mb-4">
            6 FRAMES OF TIME
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-600"></div>
            <div className="w-2 h-2 bg-yellow-500 rotate-45"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
        </div>

        {/* Film Strip and Memories */}
        <div className="relative px-8">
          {/* Film Strip Top */}
          <div className="flex gap-10 mb-2 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gray-800 flex-shrink-0 border border-gray-700"
              ></div>
            ))}
          </div>

          {/* Memories Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-pink-300 rounded-lg flex items-center justify-center hover:border-amber-400 transition shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-16"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {loading ? (
                // simple loading placeholders
                [...Array(4)].map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-80">
                    <div className="relative border-4 border-yellow-600 rounded-lg overflow-hidden shadow-2xl animate-pulse bg-gray-800 h-[420px]" />
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
                    className="flex-shrink-0 w-80 group cursor-pointer"
                    onClick={() => onMemoryClick(memory.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onMemoryClick(memory.id);
                    }}
                  >
                    <div className="relative border-4 border-yellow-600 rounded-lg overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                      {/* Image */}
                      <div className="aspect-[3/4] overflow-hidden bg-gray-800">
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
                      <div className="bg-gradient-to-b from-gray-900 to-black p-4 border-t-2 border-yellow-600">
                        <h3 className="text-yellow-500 text-sm font-bold mb-1 tracking-wide">
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-pink-300 rounded-lg flex items-center justify-center hover:border-amber-400 transition shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Film Strip Bottom */}
          <div className="flex gap-1 mt-2 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-gray-800 flex-shrink-0 border border-gray-700"
              ></div>
            ))}
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

      {/* Help Button */}
      <button className="fixed bottom-8 right-8 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition">
        ?
      </button>
    </div>
  );
}
