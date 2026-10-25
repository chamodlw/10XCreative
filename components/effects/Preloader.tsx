"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const pathname = usePathname();
  const [initialLoading, setInitialLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // Initial page load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Listen for navigation clicks across the application
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore non-navigation or external links
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.includes("wa.me") ||
        target.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://")
      ) {
        return;
      }

      const targetPath = href.split("?")[0].split("#")[0];
      if (targetPath && targetPath !== pathname) {
        setIsNavigating(true);
      }
    };

    const handlePopState = () => {
      setIsNavigating(true);
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  // When pathname changes, smoothly fade out loader after brief interval
  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pathname, isNavigating]);

  const showLoader = initialLoading || isNavigating;

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="theme-page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0F0F10] text-white select-none overflow-hidden"
        >
          {/* Glowing Radial Ambience */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#E3222A]/20 blur-[130px] pointer-events-none" />
          <div className="absolute w-[250px] h-[250px] rounded-full bg-[#E3222A]/30 blur-[60px] pointer-events-none animate-pulse" />

          {/* Center Branded Loader Assembly */}
          <div className="relative flex flex-col items-center">
            {/* Rotating Orbit Ring around Favicon */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
              {/* Outer SVG rotating dash ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-[spin_5s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="rgba(227, 34, 42, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="14 10"
                />
              </svg>

              {/* Inner counter-rotating ring with spark marker */}
              <svg
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_3s_linear_infinite_reverse]"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="6 30"
                />
              </svg>

              {/* Glowing Glass Icon Disc with favicon.png */}
              <motion.div
                animate={{
                  scale: [0.94, 1.05, 0.94],
                  filter: [
                    "drop-shadow(0 0 12px rgba(227, 34, 42, 0.5))",
                    "drop-shadow(0 0 30px rgba(227, 34, 42, 0.85))",
                    "drop-shadow(0 0 12px rgba(227, 34, 42, 0.5))",
                  ],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-center p-3 overflow-hidden"
              >
                {/* Diagonal subtle light sheen sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  animate={{ x: ["-150%", "150%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />

                <Image
                  src="/favicon.png"
                  alt="10X Creative"
                  width={64}
                  height={64}
                  priority
                  className="object-contain w-12 h-12 sm:w-14 sm:h-14 relative z-10"
                />
              </motion.div>
            </div>

            {/* Typography & Spark */}
            <div className="flex items-center gap-2 mt-6">
              <span className="font-display text-lg tracking-[0.2em] text-white uppercase">
                10X CREATIVE
              </span>
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-base text-[#E3222A]"
              >
                ⚡
              </motion.span>
            </div>

            {/* High-Tech Animated Loading Line */}
            <div className="w-44 h-1 bg-white/10 rounded-full overflow-hidden mt-4 relative">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#E3222A] to-transparent rounded-full shadow-[0_0_10px_#E3222A]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
