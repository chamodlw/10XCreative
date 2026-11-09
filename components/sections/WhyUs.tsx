"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function WhyUs() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] relative overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Video / Image Thumbnail with Pulsing Red Play Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative mb-10 sm:mb-0"
          >
            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-black/5"
              data-cursor="play"
            >
              <video
                src="/video/how%20we%20works.mp4"
                muted
                loop
                autoPlay
                playsInline
                suppressHydrationWarning
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#E3222A] text-white shadow-[0_0_35px_rgba(227,34,42,0.8)] group-hover:scale-110 transition-transform">
                  <span className="absolute inset-0 rounded-full bg-[#E3222A] animate-pulse-ring" />
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
              </div>
            </div>

            {/* Bottom tag - hangs half outside the video on mobile, sits inside it from sm up */}
            <div
              onClick={() => setVideoModalOpen(true)}
              data-cursor="play"
              className="absolute z-10 left-4 right-4 bottom-0 translate-y-1/2 sm:left-6 sm:right-6 sm:bottom-6 sm:translate-y-0 p-4 rounded-xl bg-white sm:bg-white/90 backdrop-blur-md border border-black/5 sm:border-white/20 shadow-xl sm:shadow-none flex items-center justify-between gap-3 cursor-pointer"
            >
              <div>
                <span className="text-[11px] font-bold text-[#E3222A] uppercase tracking-wider block">Watch Reel</span>
                <span className="text-sm font-bold text-[#0F0F10]">How We Drive 10X Digital Acceleration</span>
              </div>
              <span className="text-xs font-mono text-[#6B6B6B] shrink-0">01:45</span>
            </div>
          </motion.div>

          {/* Right: Content & Vision / Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <SectionTitle
              badge="The 10X Edge"
              title="READY TO MAKE YOUR MARK IN THE DIGITAL WORLD?"
              highlightWord="DIGITAL"
              subtitle="From startups to established enterprises, we've partnered with businesses across industries to amplify their digital presence and achieve exceptional growth."
              className="mb-8"
            />

            <div>
              <Button href="/contact" variant="primary" size="lg" icon magnetic>
                Request a Quote Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
              <video
                src="/video/how%20we%20works.mp4"
                controls
                autoPlay
                playsInline
                suppressHydrationWarning
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
