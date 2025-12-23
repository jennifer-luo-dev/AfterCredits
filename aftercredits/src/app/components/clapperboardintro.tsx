"use client";
import React, { useState, useEffect } from "react";

export default function ClapperboardIntro({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [stage, setStage] = useState("counting"); // counting, final, clack, black, credits, complete
  // call onComplete once when the animation reaches the 'complete' stage
  useEffect(() => {
    if (stage === "complete") {
      const t = setTimeout(() => {
        onComplete?.();
      }, 0);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [stage, onComplete]);
  const [takeNumber, setTakeNumber] = useState(1);

  useEffect(() => {
    if (stage === "counting") {
      // Compute the number of days since 10/03/2025 in timezone America/New_York (EST/EDT)
      const start = { year: 2025, month: 10, day: 3 }; // MM/DD/YYYY -> Oct 3, 2025

      const getYMDInZone = (d: Date, tz = "America/New_York") => {
        const fmt = new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          year: "numeric",
          month: "numeric",
          day: "numeric",
        });
        const parts = fmt.formatToParts(d);
        let y = 0,
          m = 0,
          dayn = 0;
        for (const p of parts) {
          if (p.type === "year") y = Number(p.value);
          if (p.type === "month") m = Number(p.value);
          if (p.type === "day") dayn = Number(p.value);
        }
        return { y, m, d: dayn };
      };

      const nowParts = getYMDInZone(new Date());
      const nowUtc = Date.UTC(nowParts.y, nowParts.m - 1, nowParts.d);
      const startUtc = Date.UTC(start.year, start.month - 1, start.day);

      let target = Math.max(
        1,
        Math.floor((nowUtc - startUtc) / (24 * 60 * 60 * 1000))
      );

      // If target is 1 or less, skip counting animation and move to final quickly
      if (target <= 1) {
        setTakeNumber(1);
        setTimeout(() => setStage("final"), 300);
        return;
      }

      // Aim for ~2500ms total count duration (similar to previous behavior)
      const totalMs = 2500;
      const intervalMs = Math.max(
        10,
        Math.floor(totalMs / Math.max(1, target))
      );

      let current = 1;
      setTakeNumber(current);

      const countInterval = setInterval(() => {
        current += 1;
        setTakeNumber(current);
        if (current >= target) {
          clearInterval(countInterval);
          setTimeout(() => setStage("final"), 300);
        }
      }, intervalMs);

      return () => clearInterval(countInterval);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "final") {
      const timer = setTimeout(() => setStage("clack"), 1000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "clack") {
      const timer = setTimeout(() => setStage("credits"), 400);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === "credits") {
      const timer = setTimeout(() => setStage("complete"), 3500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const showClapper =
    stage !== "black" && stage !== "credits" && stage !== "complete";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] pointer-events-none"></div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none"></div>

      {/* Clapperboard */}
      {showClapper && (
        <div className="relative">
          {/* Top clapper stick */}
          <div
            className="absolute -top-20 left-0 right-0 h-16 bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-t-xl shadow-2xl border-4 border-black transition-transform duration-200"
            style={{
              transformOrigin: "bottom left",
              transform:
                stage === "clack"
                  ? "rotateX(-25deg) translateY(-8px)"
                  : "rotateX(0deg)",
            }}
          >
            {/* Black and white stripes */}
            <div className="absolute inset-0 flex rounded-t-lg overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`}
                ></div>
              ))}
            </div>

            {/* Clapper details */}
            <div className="absolute inset-0 flex items-center justify-between px-4 text-xs font-bold">
              <span className="text-black mix-blend-difference">PROD</span>
              <span className="text-black mix-blend-difference">SCENE</span>
              <span className="text-black mix-blend-difference">TAKE</span>
            </div>
          </div>

          {/* Main board */}
          <div className="w-96 h-64 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl shadow-2xl border-4 border-black relative overflow-hidden">
            {/* Diagonal stripes on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-yellow-400 to-yellow-300 flex flex-col">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex-1 border-b-2 border-black"></div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-yellow-400 to-yellow-300 flex flex-col">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex-1 border-b-2 border-black"></div>
              ))}
            </div>

            {/* Content area */}
            <div className="absolute inset-8 bg-white rounded-lg shadow-inner flex flex-col items-center justify-center space-y-4 p-6">
              <div className="text-gray-700 font-bold text-sm tracking-wider uppercase">
                Production
              </div>

              <div className="text-center">
                <div className="text-rose-500 font-bold text-3xl mb-3 tracking-wide uppercase">
                  Take
                </div>
                <div
                  className={`text-9xl font-black text-gray-900 transition-all duration-75 ${
                    stage === "final" ? "scale-110 text-rose-500" : ""
                  } ${stage === "counting" ? "number-flash" : ""}`}
                  key={takeNumber}
                >
                  {takeNumber}
                </div>
              </div>

              <div className="flex gap-8 text-xs text-gray-600 font-bold">
                <div>
                  <div className="text-gray-400 uppercase text-[10px]">
                    Scene
                  </div>
                  <div>♥ 001</div>
                </div>
                <div>
                  <div className="text-gray-400 uppercase text-[10px]">
                    Roll
                  </div>
                  <div>A</div>
                </div>
                <div>
                  <div className="text-gray-400 uppercase text-[10px]">
                    Camera
                  </div>
                  <div>001</div>
                </div>
              </div>
            </div>

            {/* Corner details */}
            <div className="absolute top-2 left-10 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute top-2 right-10 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute bottom-2 left-10 w-4 h-4 bg-black rounded-full"></div>
            <div className="absolute bottom-2 right-10 w-4 h-4 bg-black rounded-full"></div>
          </div>
        </div>
      )}

      {/* Opening credits */}
      {stage === "credits" && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-center space-y-8 animate-fadeIn">
            <div
              className="text-amber-400 text-7xl font-serif tracking-wider animate-fadeInUp"
              style={{ animationDelay: "0.3s", animationFillMode: "both" }}
            >
              After Credits
            </div>
            <div
              className="text-white text-2xl font-light tracking-widest opacity-80 animate-fadeInUp"
              style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            >
              Every moment deserves a sequel
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes numberFlash {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out;
        }

        .number-flash {
          animation: numberFlash 0.1s ease-in-out;
        }

        .bg-radial-gradient {
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 70%
          );
        }
      `}</style>
    </div>
  );
}
