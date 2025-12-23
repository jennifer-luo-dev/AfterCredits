"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, Film, Calendar, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

type MemoryItem = {
  id: number;
  title: string;
  date: string;
  location?: string | null;
  image?: string | null;
};

export default function MemoryDetailView({ id }: { id: Number }) {
  const [memory, setMemory] = useState<any | null>(null);
  const [allImages, setAllImages] = useState<
    Array<{ name: string; url: string }>
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    async function getMemory() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/memory/${id}`);
        if (!res.ok) throw new Error(`Failed to load memory: ${res.status}`);
        const data = await res.json();
        if (mounted) {
          setMemory(data);

          // Use imageSignedUrls from the API response
          if (data.imageSignedUrls && Array.isArray(data.imageSignedUrls)) {
            const images = data.imageSignedUrls.map(
              (url: string, idx: number) => ({
                name: `Image ${idx + 1}`,
                url: url,
              })
            );
            setAllImages(images);
          }
        }
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
  if (error)
    return (
      <div className="p-8 text-center" style={{ color: "var(--destructive)" }}>
        {error}
      </div>
    );
  if (!memory)
    return (
      <div className="p-8 text-center text-gray-400">No memory found.</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-#251a1d via-#1a1315 to-#251a1d text-white">
      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-8 w-full">
        {/* Back Button */}
        <button
          className="flex items-center gap-2 text-gray-400 hover:text-white hover:cursor-pointer transition mb-8 text-sm uppercase tracking-wider"
          onClick={() => {
            router.push("/");
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO REEL
        </button>

        {/* Memory Card */}
        <div
          className="border-2 rounded-lg bg-black/40 backdrop-blur-sm p-8 space-y-8"
          style={{ borderColor: "var(--primary)" }}
        >
          {/* Header Section */}
          <div
            className="text-center pb-6"
            style={{ borderBottom: `1px solid var(--border)` }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Film className="w-5 h-5" style={{ color: "var(--accent)" }} />
              <h2
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                FEATURE PRESENTATION
              </h2>
              <Film className="w-5 h-5" style={{ color: "var(--accent)" }} />
            </div>

            <h1
              className="text-xl mb-4 tracking-wide"
              style={{ color: "var(--accent)" }}
            >
              {memory.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="uppercase tracking-wide">
                  {memory.date
                    ? new Date(memory.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
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
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              SCENE NOTES
            </h3>
            <div
              className="rounded-lg p-4"
              style={{ borderColor: "var(--border)", borderWidth: "1px" }}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {memory.description?.split("\n\n")[0] || "No scene notes."}
              </p>
            </div>
          </div>

          {/* Director's Commentary */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              DIRECTOR'S COMMENTARY
            </h3>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              {memory.description?.split("\n\n")[1] || "No commentary."}
            </p>
          </div>

          {/* All Stills Grid */}
          {allImages.length > 0 && (
            <div>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4 text-center"
                style={{ color: "var(--accent)" }}
              >
                ALL STILLS
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((image, idx) => (
                  <div key={idx} className="group">
                    <div className="p-1 border-(--border-accent) border-3 overflow-hidden shadow-lg transition-transform hover:scale-105 hover:border-accent hover:cursor-pointer">
                      <img
                        src={image.url}
                        alt={`${memory.title} - Still ${idx + 1}`}
                        className="w-full object-cover aspect-square"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
