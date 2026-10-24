"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "link" | "view" | "play" | "text">("default");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const pIdCounter = useRef(0);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring coordinates for outer ring
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer:fine and not prefers-reduced-motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);
    document.body.classList.add("custom-cursor-enabled");

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Detect cursor targets via element attributes or tag names
      const target = e.target as HTMLElement | null;
      if (target) {
        const customCursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
        if (customCursorAttr === "view") {
          setCursorType("view");
        } else if (customCursorAttr === "play") {
          setCursorType("play");
        } else if (customCursorAttr === "text") {
          setCursorType("text");
        } else if (
          target.closest("a, button, input[type='submit'], [role='button']") ||
          customCursorAttr === "link"
        ) {
          setCursorType("link");
        } else if (target.closest("input, textarea")) {
          setCursorType("text");
        } else {
          setCursorType("default");
        }
      }

      // Spark particle trail on fast movements
      const dist = Math.hypot(clientX - lastPos.current.x, clientY - lastPos.current.y);
      if (dist > 35) {
        lastPos.current = { x: clientX, y: clientY };
        const newParticle: Particle = {
          id: pIdCounter.current++,
          x: clientX,
          y: clientY,
        };
        setParticles((prev) => [...prev.slice(-3), newParticle]);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  // Clean up older particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 400);
    return () => clearTimeout(timer);
  }, [particles]);

  if (!isEnabled) return null;

  return (
    <>
      {/* 1. Spark trail particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2, y: -8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9997] w-1.5 h-1.5 rounded-full bg-[#E3222A] shadow-[0_0_8px_#E3222A]"
          style={{ left: p.x - 3, top: p.y - 3 }}
        />
      ))}

      {/* 2. Inner instant red dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-[#E3222A] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mouseX,
          top: mouseY,
          width: cursorType === "text" ? 2 : 8,
          height: cursorType === "text" ? 18 : 8,
          borderRadius: cursorType === "text" ? 2 : 9999,
          display: cursorType === "view" || cursorType === "play" ? "none" : "block",
        }}
      />

      {/* 3. Outer spring follower ring / badge */}
      <motion.div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-display"
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          scale: isMouseDown ? 0.85 : 1,
          width:
            cursorType === "view" || cursorType === "play"
              ? 84
              : cursorType === "link"
              ? 64
              : cursorType === "text"
              ? 30
              : 38,
          height:
            cursorType === "view" || cursorType === "play"
              ? 84
              : cursorType === "link"
              ? 64
              : cursorType === "text"
              ? 30
              : 38,
          backgroundColor:
            cursorType === "view" || cursorType === "play"
              ? "rgba(227, 34, 42, 0.92)"
              : cursorType === "link"
              ? "rgba(227, 34, 42, 0.2)"
              : "transparent",
          borderColor:
            cursorType === "view" || cursorType === "play"
              ? "#E3222A"
              : cursorType === "link"
              ? "#E3222A"
              : "#0F0F10",
          borderWidth: cursorType === "view" || cursorType === "play" ? 0 : 1.5,
          borderStyle: "solid",
          borderRadius: 9999,
          backdropFilter:
            cursorType === "view" || cursorType === "play"
              ? "blur(4px)"
              : cursorType === "link"
              ? "invert(10%)"
              : "none",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorType === "view" && (
          <span className="text-[12px] font-bold tracking-widest text-white flex items-center gap-1 select-none">
            VIEW <span className="text-yellow-300">⚡</span>
          </span>
        )}
        {cursorType === "play" && (
          <span className="text-[12px] font-bold tracking-widest text-white flex items-center gap-1 select-none">
            PLAY ▶
          </span>
        )}
      </motion.div>
    </>
  );
}
