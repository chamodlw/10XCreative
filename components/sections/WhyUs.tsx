"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
            className="lg:col-span-6 relative"
          >
            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group border border-black/5"
              data-cursor="play"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="10X Creative Growth Video"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#E3222A] text-white shadow-[0_0_35px_rgba(227,34,42,0.8)] group-hover:scale-110 transition-transform">
                  <span className="absolute inset-0 rounded-full bg-[#E3222A] animate-pulse-ring" />
                  <Play className="w-8 h-8 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#E3222A] uppercase tracking-wider block">Watch Reel</span>
                  <span className="text-sm font-bold text-[#0F0F10]">How We Drive 10X Digital Acceleration</span>
                </div>
                <span className="text-xs font-mono text-[#6B6B6B]">01:45</span>
              </div>
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
              badge="WHY CHOOSE US"
              title="READY TO MAKE YOUR MARK IN THE DIGITAL WORLD?"
              highlightWord="DIGITAL"
              subtitle="From startups to established enterprises, we've partnered with businesses across industries to amplify their digital presence and achieve exceptional growth."
              className="mb-8"
            />

            <p className="text-sm font-bold text-[#E3222A] uppercase tracking-wider mb-8">
              ⚡ Partner with 10X Creative and experience the difference.
            </p>

            {/* Vision and Mission Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-[#E3222A]/30 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E3222A] mb-2 flex items-center gap-1.5">
                  <span>⚡</span> OUR VISION
                </div>
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                  To be the most trusted name in results-driven marketing, helping businesses in Sri Lanka and worldwide scale to bold new heights.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-[#E3222A]/30 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E3222A] mb-2 flex items-center gap-1.5">
                  <span>⚡</span> OUR MISSION
                </div>
                <p className="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed">
                  To empower ambitious businesses with innovative, data-driven marketing strategies that maximize customer acquisition and deliver unmatched ROI.
                </p>
              </div>
            </div>

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
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="10X Creative Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
