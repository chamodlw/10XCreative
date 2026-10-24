"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = 25,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const fromX = direction === "left" ? "0%" : "-50%";
  const toX = direction === "left" ? "-50%" : "0%";

  return (
    <div
      className={`relative w-full overflow-hidden flex select-none ${className} ${
        pauseOnHover ? "group" : ""
      }`}
    >
      <motion.div
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 whitespace-nowrap ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        animate={{
          x: [fromX, toX],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
