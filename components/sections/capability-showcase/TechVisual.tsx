"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CoffeeSite from "./CoffeeSite";

/* 03 · TECH BUILD — MacBook with auto-scrolling sample site,
   typing code editor + Lighthouse score ring */

const CODE_LINES = [
  { indent: 0, parts: [["#E3222A", "export default"], ["#0F0F10", " function"], ["#6B6B6B", " MyCoffee() {"]] },
  { indent: 1, parts: [["#E3222A", "return"], ["#6B6B6B", " ("]] },
  { indent: 2, parts: [["#0F0F10", "<Hero"], ["#B8141C", " origin"], ["#6B6B6B", "="], ["#E3222A", "\"Ceylon\""], ["#0F0F10", " />"]] },
  { indent: 2, parts: [["#0F0F10", "<Menu"], ["#B8141C", " items"], ["#6B6B6B", "={"], ["#0F0F10", "brews"], ["#6B6B6B", "}"], ["#0F0F10", " />"]] },
  { indent: 2, parts: [["#0F0F10", "<Checkout"], ["#B8141C", " gateway"], ["#6B6B6B", "="], ["#E3222A", "\"PayHere\""], ["#0F0F10", " />"]] },
  { indent: 1, parts: [["#6B6B6B", ");"]] },
  { indent: 0, parts: [["#6B6B6B", "}"]] },
];

export default function TechVisual() {
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setCycle((c) => c + 1), 7000);
    return () => clearInterval(t);
  }, [reduce]);

  const radius = 42;
  const circ = 2 * Math.PI * radius;

  return (
    <div className="relative mx-auto max-w-[560px] aspect-square">
      {/* MacBook (back) */}
      <div className="absolute top-0 right-0 w-[88%]">
        <div className="rounded-t-[14px] bg-[#1A1A1A] p-[2.2%] pb-[2.8%] shadow-2xl border border-black/20">
          <CoffeeSite reduce={reduce} />
        </div>
        <div className="relative h-3 sm:h-3.5 -mx-[6%] rounded-b-[14px] bg-gradient-to-b from-[#D9D9DB] to-[#A9A9AD] shadow-xl">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-1.5 rounded-b-md bg-[#8E8E93]/60" />
        </div>
      </div>

      {/* Code editor (front) */}
      <div className="absolute bottom-0 left-0 w-[66%] rounded-2xl bg-white shadow-2xl border border-black/5 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/5 bg-[#F7F7F5]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]">app/page.tsx</span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E3222A]">Next.js</span>
        </div>
        <div className="p-3 sm:p-4 font-mono text-[9px] sm:text-[11px] leading-5 sm:leading-6">
          {CODE_LINES.map((line, i) => (
            <div key={`${cycle}-${i}`} className="flex overflow-hidden whitespace-nowrap">
              <span className="w-5 shrink-0 text-black/25 select-none">{i + 1}</span>
              <motion.span
                className="overflow-hidden inline-block"
                style={{ paddingLeft: `${line.indent * 0.9}rem` }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: reduce ? 0 : 0.35, delay: reduce ? 0 : i * 0.22 }}
              >
                {line.parts.map(([color, text], j) => (
                  <span key={j} style={{ color }}>
                    {text}
                  </span>
                ))}
              </motion.span>
            </div>
          ))}
        </div>
      </div>

      {/* Lighthouse ring */}
      <div className="absolute bottom-4 right-1 sm:right-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border border-black/5">
        <svg viewBox="0 0 100 100" className="absolute inset-2 -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#ECECEA" strokeWidth="7" />
          <motion.circle
            key={`ring-${cycle}`}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E3222A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ * 0.02 }}
            transition={{ duration: 1.4, delay: reduce ? 0 : 1.8, ease: "easeOut" }}
          />
        </svg>
        <div className="text-center relative">
          <span className="font-display text-2xl sm:text-3xl text-[#0F0F10] block leading-none">98</span>
          <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#6B6B6B]">Lighthouse</span>
        </div>
      </div>
    </div>
  );
}
