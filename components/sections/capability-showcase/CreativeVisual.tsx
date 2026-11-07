"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

/* 02 · CREATIVE - phone with cycling reels + orbiting palette */

// Real client reels from /public/video/Creative-reels - each plays a short clip.
const REELS = [
  { src: "/video/Creative-reels/Travelco.mp4", client: "Travelco Holidays", start: 0 },
  { src: "/video/Creative-reels/Nile constecution.mp4", client: "Nile Construction", start: 0 },
  { src: "/video/Creative-reels/Travelco 2.mp4", client: "Travelco Holidays", start: 0 },
];
const REEL_CLIP_SECONDS = 4.5;

export default function CreativeVisual() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  // Don't fetch any video until the phone scrolls near the viewport.
  const inView = useInView(phoneRef, { once: true, margin: "200px" });

  useEffect(() => {
    if (reduce || !inView) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % REELS.length), REEL_CLIP_SECONDS * 1000);
    return () => clearInterval(t);
  }, [reduce, inView]);

  const swatches = ["#E3222A", "#F7F7F5", "#F59E0B", "#B8141C", "#ECECEA", "#3A3A40"];

  return (
    <div className="relative mx-auto w-full max-w-[480px] aspect-square flex items-center justify-center">
      {/* Orbit ring */}
      <motion.div
        className="absolute inset-8 sm:inset-6 rounded-full border border-dashed border-white/15"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {swatches.map((c, i) => {
          const angle = (i / swatches.length) * Math.PI * 2;
          // Rounded so server and client produce identical style strings.
          const x = Math.round((50 + Math.cos(angle) * 50) * 100) / 100;
          const y = Math.round((50 + Math.sin(angle) * 50) * 100) / 100;
          return (
            <span
              key={c}
              className="absolute w-9 h-9 sm:w-11 sm:h-11 -ml-[18px] -mt-[18px] sm:-ml-[22px] sm:-mt-[22px] rounded-full border-2 border-[#0F0F10] shadow-lg"
              style={{ backgroundColor: c, left: `${x}%`, top: `${y}%` }}
            />
          );
        })}
      </motion.div>

      {/* Phone */}
      <div
        ref={phoneRef}
        className="relative w-[190px] sm:w-[220px] aspect-[9/19] rounded-[2.2rem] bg-[#1A1A1A] p-2 shadow-[0_30px_80px_-10px_rgba(227,34,42,0.45)] border border-white/10"
      >
        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-black">
          {/* Notch */}
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black z-20" />

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={idx}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {inView ? (
                <video
                  src={REELS[idx].src}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay={!reduce}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    if (REELS[idx].start) e.currentTarget.currentTime = REELS[idx].start;
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#E3222A] to-[#7A0A10]">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              )}
              {/* Story-style header (kept at top so the reel's own captions stay visible) */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
              <div className="absolute top-10 inset-x-3 flex items-center gap-2 text-white">
                <span className="w-7 h-7 shrink-0 rounded-full bg-[#E3222A] ring-2 ring-white flex items-center justify-center text-[9px] font-bold">
                  10X
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-[11px] font-bold truncate">{REELS[idx].client}</span>
                  <span className="block text-[9px] text-white/70">Produced by 10X Creative</span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Story-style progress bars */}
          <div className="absolute top-7 inset-x-3 flex gap-1 z-10">
            {REELS.map((_, i) => (
              <span key={i} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                {i < idx && <span className="block h-full w-full bg-white" />}
                {i === idx && (
                  <motion.span
                    key={`p-${idx}`}
                    className="block h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: reduce ? 0 : REEL_CLIP_SECONDS, ease: "linear" }}
                  />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat */}
      <motion.div
        className="absolute bottom-6 right-0 sm:right-4 px-4 py-3 rounded-2xl bg-white text-[#0F0F10] shadow-xl"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-2xl text-[#E3222A] block leading-none">10M+</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Viral Views</span>
      </motion.div>
      <motion.div
        className="absolute hidden sm:block top-8 left-4 px-4 py-3 rounded-2xl bg-[#E3222A] text-white shadow-xl"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-2xl block leading-none">1.5s</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Thumb-Stop Hook</span>
      </motion.div>
    </div>
  );
}
