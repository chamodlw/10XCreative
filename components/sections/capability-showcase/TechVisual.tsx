"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CoffeeSite from "./CoffeeSite";

/* 03 · TECH BUILD - MacBook with auto-scrolling sample site,
   overlapping typing code editor */

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

  return (
    <div className="relative mx-auto max-w-[560px]">
      {/* MacBook screen (back) */}
      <div className="ml-auto w-[88%]">
        <div className="rounded-[14px] bg-[#1A1A1A] p-[2.2%] shadow-2xl border border-black/20">
          <CoffeeSite reduce={reduce} />
        </div>
      </div>

      {/* Code editor (front) */}
      <div className="relative z-10 -mt-[14%] w-[66%] rounded-2xl bg-white shadow-2xl border border-black/5 overflow-hidden">
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
    </div>
  );
}
