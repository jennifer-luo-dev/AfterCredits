"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, Film, Calendar, MapPin } from "lucide-react";

type MemoryItem = {
  id: number;
  title: string;
  date: string;
  location?: string | null;
  image?: string | null;
};

const memoryData = {
  title: "FIRST DATE AT SUNSET BEACH",
  date: "WEDNESDAY, JUNE 14, 2023",
  location: "MALIBU BEACH, CALIFORNIA",
  sceneNotes:
    "Our first official date. We walked along the shore, talked for hours, and watched the sun dip into the ocean.",
  commentary:
    "The moment I knew this was something special. The way you laughed at my terrible jokes and how comfortable everything felt.",
  photos: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      label: "STILL 01",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
      label: "STILL 02",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
      label: "STILL 03",
    },
  ],
};

export default function MemoryDetailView({ id }: { id: Number }) {
  const [memory, setMemory] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function getMemory() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/memory/${id}`);
        if (!res.ok) throw new Error(`Failed to load memory: ${res.status}`);
        const data = await res.json();
        if (mounted) setMemory(data);
      } catch (err: any) {
        console.error("Error loading memory", err);
        if (mounted) setError(err?.message ?? String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    }
    getMemory();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-400">{error}</div>;
  if (!memory)
    return (
      <div className="p-8 text-center text-gray-400">No memory found.</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-8 text-sm uppercase tracking-wider">
          <ArrowLeft className="w-4 h-4" />
          BACK TO REEL
        </button>

        {/* Memory Card */}
        <div className="border-2 border-red-900/50 rounded-lg bg-black/40 backdrop-blur-sm p-8 space-y-8">
          {/* Header Section */}
          <div className="text-center pb-6 border-b border-red-900/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Film className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xs font-semibold text-yellow-600 uppercase tracking-widest">
                FEATURE PRESENTATION
              </h2>
              <Film className="w-5 h-5 text-yellow-600" />
            </div>

            <h1 className="text-3xl font-bold text-yellow-600 mb-4 tracking-wide">
              {memory.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="uppercase tracking-wide">
                  {memory.date
                    ? new Date(memory.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="uppercase tracking-wide">
                  {memory.location || ""}
                </span>
              </div>
            </div>
          </div>

          {/* Scene Notes */}
          <div>
            <h3 className="text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">
              SCENE NOTES
            </h3>
            <div className="bg-black/60 border border-red-900/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                {memory.description?.split("\n\n")[0] || "No scene notes."}
              </p>
            </div>
          </div>

          {/* Director's Commentary */}
          <div>
            <h3 className="text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-3">
              DIRECTOR'S COMMENTARY
            </h3>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              {memory.description?.split("\n\n")[1] || "No commentary."}
            </p>
          </div>

          {/* Film Stills */}
          <div>
            <h3 className="text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4 text-center">
              FILM STILLS
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {memory.imageSrc || memory.imageUrl ? (
                <div className="group col-span-3">
                  <div className="border-4 border-yellow-600 rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
                    <img
                      src={memory.imageSrc ?? memory.imageUrl}
                      alt={memory.title}
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="group col-span-3 text-gray-400">
                  No photos for this memory.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Help Button */}
      <button className="fixed bottom-8 right-8 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 transition">
        ?
      </button>
    </div>
  );
}
