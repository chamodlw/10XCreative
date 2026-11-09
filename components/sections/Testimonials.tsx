"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { TESTIMONIALS, TestimonialItem } from "@/data/testimonials";

export default function Testimonials() {
  // Page index: with 6 items, page 0 = items [0,1,2], page 1 = items [3,4,5]
  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 8000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentCards = TESTIMONIALS.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="py-24 sm:py-32 bg-[#0F0F10] text-white relative overflow-hidden" id="testimonials">
      {/* Background radial red glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#E3222A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#E3222A]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative oversized quote watermark */}
      <div className="absolute -top-10 left-8 text-white/[0.02] select-none pointer-events-none font-serif text-[280px] leading-none">
        “
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header row with arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionTitle
            badge="CLIENT ENDORSEMENTS"
            title="TRUSTED BY INDUSTRY LEADERS."
            highlightWord="LEADERS"
            subtitle="Here is what our visionary partners say about our work ethic, strategic insights, and verifiable campaign ROI."
            dark
          />

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/50 tracking-wider mr-2 hidden sm:inline-block">
              0{currentPage + 1} / 0{totalPages}
            </span>
            <button
              onClick={handlePrev}
              type="button"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#E3222A] hover:bg-[#E3222A] flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous testimonials"
              data-cursor="link"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#E3222A] hover:bg-[#E3222A] flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next testimonials"
              data-cursor="link"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Grid in Single View on Wide Screens */}
        <div className="relative min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            >
              {currentCards.map((item: TestimonialItem, idx: number) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#E3222A]/50 backdrop-blur-md shadow-xl hover:shadow-[0_12px_40px_rgba(227,34,42,0.15)] transition-all duration-400 hover:-translate-y-1.5"
                >
                  {/* Glowing corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E3222A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E3222A]/20 transition-colors" />

                  {/* Top: Rating stars & Pillar tag */}
                  <div>
                    <div className="flex items-center justify-between mb-5 gap-2">
                      <div className="flex items-center gap-1 text-[#E3222A]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#E3222A]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                        {item.tag}
                      </span>
                    </div>

                    {/* Quotation text */}
                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-[#E3222A]/25 mb-2 -scale-x-100" />
                      <p className="text-sm sm:text-base text-white/85 leading-relaxed italic whitespace-pre-line">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Client Profile with Company Logo & Verification Badge */}
                  <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-white shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        sizes="80px"
                        className="object-contain p-1.5"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-display text-base uppercase tracking-wider text-white leading-tight">
                          {item.author}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">
                        <span className="text-[#E3222A] font-semibold">{item.role}</span> • {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === idx ? "w-10 bg-[#E3222A]" : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
