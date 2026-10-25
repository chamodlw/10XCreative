"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { Volume2, VolumeX } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

const SOCIAL_LINKS = [
  {
    href: CONTACT.socials.instagram,
    label: "Instagram",
    icon: FaInstagram,
    color: "#E1306C",
  },
  {
    href: CONTACT.socials.facebook,
    label: "Facebook",
    icon: FaFacebookF,
    color: "#1877F2",
  },
  {
    href: CONTACT.socials.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    href: CONTACT.socials.tiktok,
    label: "TikTok",
    icon: FaTiktok,
    color: "#000000",
  },
];

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
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#dfd9d2]">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#dfd9d2]">
        {/* Poster fallback before video loads */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: "url('/hero-video-screenshot.jpg')" }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center block md:hidden"
          style={{ backgroundImage: "url('/hero-video-mobile-screenshot.jpg')" }}
        />

        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          src="/hero-video.mp4"
          poster="/hero-video-screenshot.jpg"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="hidden md:block w-full h-full object-cover relative z-[1]"
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          src="/hero-video-mobile.mp4"
          poster="/hero-video-mobile-screenshot.jpg"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="block md:hidden w-full h-full object-cover relative z-[1]"
        />

        {/* Top gradient #dfd9d2 → transparent */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-48 bg-gradient-to-b from-[#dfd9d2] via-[#dfd9d2]/80 to-transparent pointer-events-none z-[2]" />

        {/* Bottom gradient #dfd9d2 → transparent (matches header colour) */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#dfd9d2] via-[#dfd9d2]/80 to-transparent pointer-events-none z-[2]" />
      </div>

      {/* ── Left-side vertical social icons ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3"
      >
        {/* Top tick mark */}
        <div className="w-px h-10 bg-[#0F0F10]/30" />

        {SOCIAL_LINKS.map(({ href, label, icon: Icon, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 hover:bg-white/40 transition-all duration-200 shadow-sm"
          >
            <Icon style={{ color, width: 13, height: 13 }} />
          </a>
        ))}

        {/* Bottom tick mark */}
        <div className="w-px h-10 bg-[#0F0F10]/30" />
      </motion.div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-5 sm:pb-7 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto">

        {/* Left Bottom: Sound Toggle */}
        <div className="order-2 md:order-1 flex items-center justify-center md:justify-start w-full md:w-auto">
          <button
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
                <Volume2 className="w-4 h-4 text-white" />
                <span className="text-[11px] uppercase tracking-wider font-bold">Sound Playing</span>
              </>
            )}
          </button>
        </div>

        {/* Right: 2 CTA Buttons */}
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
            <span className="sm:hidden">Let's Chat</span>
            <span className="hidden sm:inline">Let's Chat & Grow</span>
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

      {/* Infinite Marquee Strip */}
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
