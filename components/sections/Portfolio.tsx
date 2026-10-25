"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, PortfolioItem } from "@/data/portfolio";

export default function Portfolio() {
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
    <section className="py-24 sm:py-32 bg-[#F7F7F5] relative overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            badge="OUR PORTFOLIO"
            title="FEATURED WORK THAT DRIVES REAL GROWTH."
            highlightWord="GROWTH"
            subtitle="Explore our cross-industry portfolio across paid ads, brand identities, viral reels, and high-converting web experiences."
          />
          <div className="shrink-0 hidden md:block">
            <Button href="/portfolio" variant="outline" size="md" icon>
              View Full Gallery
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/10 pb-4">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
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

        {/* Portfolio Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.slice(0, 6).map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
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
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0F0F10] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Client Name on Bottom Gradient of Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white drop-shadow-md block">
                      {item.client}
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

        {/* View More Button below */}
        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="primary" size="md" icon magnetic>
            View More Work in Portfolio
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <LightboxModal
            item={filteredItems[selectedItemIndex]}
            onClose={closeLightbox}
            onNext={nextLightbox}
            onPrev={prevLightbox}
            index={selectedItemIndex}
            total={filteredItems.length}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function LightboxModal({
  item,
  onClose,
  onNext,
  onPrev,
  index,
  total,
}: {
  item: PortfolioItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 select-none"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Nav controls */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden shadow-2xl mb-4 bg-black/40">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Caption */}
        <div className="w-full text-center text-white">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-white/60 mb-1">
            <span className="text-[#E3222A] font-bold">{item.client}</span>
            <span>•</span>
            <span>{item.category}</span>
            <span>•</span>
            <span>{index + 1} of {total}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#25D366] font-semibold">
            ⚡ {item.results}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
