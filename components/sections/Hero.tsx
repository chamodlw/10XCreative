"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  useEffect(() => {
    // Ensure muted state is synchronized
    if (desktopVideoRef.current) desktopVideoRef.current.muted = isMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = isMuted;
  }, [isMuted]);

  const marqueeItems = [
    "PAID ADVERTISING",
    "SOCIAL MEDIA MARKETING",
    "INFLUENCER MARKETING",
    "CONTENT CREATION",
    "GRAPHIC DESIGNING",
    "WEB DESIGNING",
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0F0F10]">
      {/* Background Videos - Fully Displayed without obstructive heavy overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop Video (hidden on mobile, displayed on md+) */}
        <video
          ref={desktopVideoRef}
          src="/hero-video.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="hidden md:block w-full h-full object-cover"
        />

        {/* Mobile Video (displayed on mobile, hidden on md+) */}
        <video
          ref={mobileVideoRef}
          src="/hero-video-mobile.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="block md:hidden w-full h-full object-cover"
        />

        {/* Top gradient from #dfd9d2 fading to transparent over the top of the video */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-48 bg-gradient-to-b from-[#dfd9d2] via-[#dfd9d2]/70 to-transparent pointer-events-none" />

        {/* Very subtle gradient at bottom only so CTAs and Marquee sit cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0F0F10]/80 via-[#0F0F10]/40 to-transparent pointer-events-none" />
      </div>

      {/* Bottom Controls Bar: Sound Icon on Left, 2 CTA Buttons in Center/Right, just top of marquee */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-5 sm:pb-7 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto">
        {/* Left Bottom: Sound Toggle Icon */}
<div className="order-2 md:order-1 flex items-center justify-center md:justify-start w-full md:w-auto">          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#E3222A]" />
                <span className="text-[11px] uppercase tracking-wider font-bold">Unmute Video</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#FFFFFF]" />
                <span className="text-[11px] uppercase tracking-wider font-bold">Sound Playing</span>
              </>
            )}
          </button>
        </div>

        {/* Center / Right: 2 CTA Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 flex flex-row items-center justify-center gap-3.5 w-full md:w-auto"
        >
          <Button
            href="/contact"
            variant="primary"
            size="md"
            magnetic
            icon
            className="text-xs sm:text-sm tracking-wider whitespace-nowrap shadow-[0_8px_25px_rgba(227,34,42,0.6)] !py-3 !px-4 sm:!px-6"
          >
            <span className="sm:hidden">Let’s Chat</span>
            <span className="hidden sm:inline">Let’s Chat & Grow</span>
          </Button>

          <Button
            href="/portfolio"
            variant="white"
            size="md"
            icon
            className="text-xs sm:text-sm tracking-wider whitespace-nowrap backdrop-blur-md bg-white/95 hover:bg-white text-[#0F0F10] shadow-xl !py-3 !px-4 sm:!px-6"
          >
            <span className="sm:hidden">Our Work</span>
            <span className="hidden sm:inline">View Our Work</span>
          </Button>
        </motion.div>

      </div>

      {/* Infinite Marquee Strip at the Bottom */}
      <div className="w-full bg-[#0F0F10] text-white py-3.5 border-y border-white/10 relative z-20">
        <Marquee speed={22}>
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-4">
              <span className="font-display text-sm sm:text-base tracking-widest uppercase">
                {item}
              </span>
              <span className="text-[#E3222A] text-sm">⚡</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
