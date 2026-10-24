"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem("10x_preloader_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeen || prefersReducedMotion) {
      setLoading(false);
      return;
    }

    // Animate progress 0 to 100 in ~1.2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("10x_preloader_seen", "true");
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0F0F10] text-white overflow-hidden"
        >
          {/* Subtle background red glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#E3222A]/15 blur-[120px] pointer-events-none" />

          {/* Logo container using 10x-Logo2 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-64 h-24 mb-8"
          >
            <Image
              src="/10x-logo2-white.png"
              alt="10X Creative"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Spark Lightning Icon with Pulse */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              filter: ["drop-shadow(0 0 5px #E3222A)", "drop-shadow(0 0 20px #E3222A)", "drop-shadow(0 0 5px #E3222A)"],
            }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-4xl text-[#E3222A] mb-6"
          >
            ⚡
          </motion.div>

          {/* Loading Progress Percentage & Bar */}
          <div className="w-48 flex flex-col items-center">
            <div className="flex items-center justify-between w-full text-xs font-mono tracking-widest text-[#6B6B6B] mb-2">
              <span>UNLEASHING DIGITAL</span>
              <span className="text-[#E3222A] font-bold">{Math.min(progress, 100)}%</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#E3222A]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
