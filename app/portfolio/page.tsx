"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextLightbox = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
  };

  const prevLightbox = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex(
      (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-12">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> OUR PORTFOLIO & WORK ARCHIVE
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            WORK THAT COMMANDS <span className="text-[#E3222A]">ATTENTION</span>.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Browse our full archive of performance ad campaigns, viral video commercials, brand identities, and high-performance websites delivered for visionary businesses.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 mb-12">
        <div className="flex flex-wrap items-center gap-2 border-b border-black/10 pb-4">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#E3222A] text-white shadow-md"
                    : "bg-white text-[#6B6B6B] hover:text-[#0F0F10] border border-black/5"
                }`}
                data-cursor="link"
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => openLightbox(idx)}
                className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 bg-white p-3.5 hover:-translate-y-1.5"
                data-cursor="view"
              >
                {/* 4:3 Image Container on Top */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Dark Gradient Overlay at Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10]/90 via-[#0F0F10]/20 to-transparent" />

                  {/* Top Category Badge (Unchanged) */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 text-[#0F0F10] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Client Name on Bottom Gradient of Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">
                      {item.client}
                    </span>
                    <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Bottom Content Area: Project Title and Details */}
                <div className="p-4 pt-5 pb-2 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0F0F10] group-hover:text-[#E3222A] transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B6B6B] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-black/5 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-[#F7F7F5] group-hover:bg-[#E3222A] group-hover:text-white text-[#0F0F10] flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 select-none"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevLightbox}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
              aria-label="Previous work"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
              aria-label="Next work"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl mb-4 bg-black/40">
                <Image
                  src={filteredItems[selectedItemIndex].image}
                  alt={filteredItems[selectedItemIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-full text-center text-white">
                <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-white/60 mb-1">
                  <span className="text-[#E3222A] font-bold">
                    {filteredItems[selectedItemIndex].client}
                  </span>
                  <span>•</span>
                  <span>{filteredItems[selectedItemIndex].category}</span>
                  <span>•</span>
                  <span>
                    {selectedItemIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mb-1">
                  {filteredItems[selectedItemIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#25D366] font-semibold">
                  ⚡ {filteredItems[selectedItemIndex].results}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
