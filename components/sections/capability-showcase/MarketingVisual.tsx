"use client";

import { motion, useReducedMotion } from "framer-motion";

/* 01 · MARKETING — live campaign dashboard with growing bars */

export default function MarketingVisual() {
  const reduce = useReducedMotion();
  const bars = [32, 45, 38, 58, 52, 70, 66, 88];

  return (
    <div className="relative mx-auto max-w-[520px] aspect-[1/1] sm:aspect-[5/4]">
      {/* Main dashboard card */}
      <div className="absolute inset-x-0 top-8 bottom-8 sm:inset-x-6 rounded-3xl bg-white border border-black/5 shadow-2xl p-6 sm:p-8 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B6B6B] block">
              Campaign Revenue
            </span>
            <span className="font-display text-3xl sm:text-4xl text-[#0F0F10]">LKR 12.4M</span>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold">
            ▲ 4.8x ROAS
          </span>
        </div>

        <div className="flex-1 flex items-end gap-2 sm:gap-3">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-t-lg origin-bottom ${
                i === bars.length - 1 ? "bg-[#E3222A]" : "bg-[#0F0F10]/85"
              }`}
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              animate={reduce ? undefined : { scaleY: [1, 0.86, 1] }}
              transition={{
                scaleY: reduce
                  ? { duration: 0.6, delay: i * 0.08 }
                  : { duration: 2.6, delay: i * 0.18, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}
        </div>

        <div className="flex justify-between mt-3 text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]">
          <span>Wk 1</span>
          <span>Wk 8</span>
        </div>
      </div>

      {/* Floating channel chips */}
      {[
        { label: "Meta Ads", cls: "top-0 left-0 sm:-left-2", delay: 0 },
        { label: "Google PMax", cls: "top-1/3 -right-1 sm:-right-4", delay: 0.6 },
        { label: "TikTok", cls: "bottom-0 left-10", delay: 1.2 },
      ].map((chip) => (
        <motion.div
          key={chip.label}
          className={`absolute ${chip.cls} px-4 py-2.5 rounded-2xl bg-[#0F0F10] text-white text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2`}
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 3.2, delay: chip.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#E3222A] animate-pulse" />
          {chip.label}
        </motion.div>
      ))}

      {/* CPL pill */}
      <motion.div
        className="absolute bottom-2 right-0 sm:right-2 px-4 py-3 rounded-2xl bg-[#E3222A] text-white shadow-xl"
        animate={reduce ? undefined : { rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-2xl block leading-none">-38%</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Cost Per Lead</span>
      </motion.div>
    </div>
  );
}
