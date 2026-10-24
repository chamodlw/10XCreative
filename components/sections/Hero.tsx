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

        {/* Very subtle subtle gradient at bottom only so CTAs and Marquee sit cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0F0F10]/80 via-[#0F0F10]/40 to-transparent pointer-events-none" />
      </div>

      {/* Floating Sound Toggle at Top Right */}
      <div className="relative z-20 pt-28 sm:pt-32 px-6 sm:px-12 flex justify-end">
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#E3222A]" />
              <span className="text-[11px] uppercase tracking-wider">Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="text-[11px] uppercase tracking-wider">Sound Playing</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Bottom Bar with Action CTA Buttons */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-10 sm:pb-14 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            magnetic
            icon
            className="text-sm tracking-wider shadow-[0_10px_30px_rgba(227,34,42,0.6)]"
          >
            Schedule a Free Consultation
          </Button>
          <Button
            href="/portfolio"
            variant="white"
            size="lg"
            icon
            className="text-sm tracking-wider backdrop-blur-md bg-white/90 hover:bg-white text-[#0F0F10] shadow-xl"
          >
            View Our Work
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
