"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-24 sm:py-32 bg-[#0F0F10] text-white relative overflow-hidden" id="testimonials">
      {/* Background radial red glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#E3222A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative oversized quote watermark */}
      <div className="absolute -top-10 left-10 text-white/[0.03] select-none pointer-events-none font-serif text-[300px] leading-none">
        “
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionTitle
            badge="CLIENT ENDORSEMENTS"
            title="TRUSTED BY INDUSTRY LEADERS."
            highlightWord="LEADERS"
            subtitle="Here is what our visionary partners say about our work ethic, strategic insights, and campaign ROI."
            dark
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              type="button"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#E3222A] hover:bg-[#E3222A] flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous testimonial"
              data-cursor="link"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#E3222A] hover:bg-[#E3222A] flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next testimonial"
              data-cursor="link"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Active Card */}
        <div className="relative min-h-[340px] sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative"
            >
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-6 text-[#E3222A]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E3222A]" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-2xl text-white/90 leading-relaxed font-normal mb-8 italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E3222A] shrink-0">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-wider text-white">
                    {current.author}
                  </h4>
                  <p className="text-xs text-white/60">
                    <span className="text-[#E3222A] font-semibold">{current.role}</span> • {current.company}
                  </p>
                </div>
                <div className="ml-auto hidden sm:block text-white/20">
                  <Quote className="w-10 h-10 text-[#E3222A]/40" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIdx === idx ? "w-8 bg-[#E3222A]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
