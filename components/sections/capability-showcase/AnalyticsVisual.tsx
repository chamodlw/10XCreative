"use client";

import { motion } from "framer-motion";

/* 04 · ANALYTICS - drawing line chart + overlapping donut card */

export default function AnalyticsVisual() {
  const path = "M0,150 C40,140 60,120 90,125 C120,130 140,90 175,85 C210,80 230,100 260,70 C290,40 320,45 360,20";
  const points: [number, number][] = [
    [90, 125],
    [175, 85],
    [260, 70],
    [360, 20],
  ];

  return (
    <div className="relative mx-auto max-w-[540px] aspect-[1/1] sm:aspect-[5/4]">
      {/* Main chart card */}
      <div className="absolute inset-x-0 top-6 sm:inset-x-4 h-[62%] rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-5 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 block">
              Attributed Revenue
            </span>
            <span className="font-display text-3xl text-white">+42% CVR</span>
          </div>
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/70">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#E3222A] opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#E3222A]" />
            </span>
            Live
          </span>
        </div>

        <svg viewBox="0 0 360 160" className="w-full h-[calc(100%-4rem)] overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="an-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E3222A" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#E3222A" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 80, 120].map((y) => (
            <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
          ))}
          <motion.path
            d={`${path} L360,160 L0,160 Z`}
            fill="url(#an-fill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.path
            d={path}
            fill="none"
            stroke="#E3222A"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          {points.map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="5"
              fill="#0F0F10"
              stroke="#E3222A"
              strokeWidth="2.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.4 }}
            />
          ))}
        </svg>
      </div>

      {/* Donut */}
      <div className="absolute bottom-[8%] left-0 sm:-left-6 w-[50%] rounded-3xl bg-white p-5 shadow-2xl z-10">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B] block mb-2">
          Channel Attribution
        </span>
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 42 42" className="w-16 h-16 sm:w-20 sm:h-20 -rotate-90 shrink-0">
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#ECECEA" strokeWidth="6" />
            {[
              { v: 45, o: 0, c: "#E3222A" },
              { v: 30, o: 45, c: "#0F0F10" },
              { v: 25, o: 75, c: "#B8B8B8" },
            ].map((s, i) => (
              <motion.circle
                key={i}
                cx="21"
                cy="21"
                r="15.9"
                fill="none"
                stroke={s.c}
                strokeWidth="6"
                strokeDashoffset={-s.o}
                initial={{ strokeDasharray: "0 100" }}
                whileInView={{ strokeDasharray: `${s.v} ${100 - s.v}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.25 }}
              />
            ))}
          </svg>
          <div className="space-y-1 text-[10px] font-bold uppercase tracking-wider text-[#0F0F10]">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#E3222A]" />Meta 45%</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#0F0F10]" />Google 30%</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#B8B8B8]" />Organic 25%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
