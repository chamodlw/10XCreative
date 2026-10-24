"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setShowBackToTop(latest > 0.15);
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 1. Thin red scroll-progress bar at the top of the viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#E3222A] origin-left z-[9990] shadow-[0_0_8px_rgba(227,34,42,0.6)]"
        style={{ scaleX }}
      />

      {/* 2. Floating Circular Progress "Back to top" button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          data-cursor="link"
          className="fixed bottom-6 right-24 z-40 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-[#0F0F10] text-white shadow-xl hover:bg-[#E3222A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E3222A]"
        >
          {/* Circular SVG progress ring */}
          <svg className="w-11 h-11 -rotate-90 pointer-events-none absolute inset-0">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="transparent"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="transparent"
              stroke="#E3222A"
              strokeWidth="2.5"
              strokeDasharray="119.38"
              strokeDashoffset={119.38 - (119.38 * percent) / 100}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </>
  );
}
