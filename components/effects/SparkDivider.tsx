"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SparkDividerProps {
  className?: string;
  dark?: boolean;
}

export default function SparkDivider({ className = "", dark = false }: SparkDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sparkLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const sparkOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full py-6 flex items-center overflow-hidden ${className}`}
    >
      {/* Background divider line */}
      <div
        className={`w-full h-[1px] ${
          dark ? "bg-white/10" : "bg-black/10"
        }`}
      />

      {/* Travelling spark element */}
      <motion.div
        className="absolute -translate-x-1/2 flex items-center justify-center pointer-events-none"
        style={{ left: sparkLeft, opacity: sparkOpacity }}
      >
        <span className="text-xs text-[#E3222A] filter drop-shadow-[0_0_6px_#E3222A]">⚡</span>
        <div className="absolute w-8 h-[2px] bg-gradient-to-r from-transparent via-[#E3222A] to-transparent" />
      </motion.div>
    </div>
  );
}
