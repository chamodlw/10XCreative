"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import type { CaseImage } from "@/data/portfolio";

const LAYOUT = {
  posters: { grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", aspect: "aspect-[4/5]", fit: "object-cover", sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" },
  portrait: { grid: "grid-cols-2 lg:grid-cols-4", aspect: "aspect-[9/16]", fit: "object-cover object-top", sizes: "(max-width: 1024px) 50vw, 25vw" },
  wide: { grid: "grid-cols-1 md:grid-cols-2", aspect: "aspect-[16/9]", fit: "object-contain", sizes: "(max-width: 768px) 100vw, 50vw" },
} as const;

export default function CaseGallery({ images, layout }: { images: CaseImage[]; layout: keyof typeof LAYOUT }) {
  const [index, setIndex] = useState<number | null>(null);
  const cfg = LAYOUT[layout];
  const single = images.length === 1;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  return (
    <>
      <div className={`grid gap-4 sm:gap-5 ${single ? "grid-cols-1" : cfg.grid}`}>
        {images.map((img, i) => (
          <figure key={img.src} className={single && layout === "wide" ? "md:max-w-3xl" : undefined}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              data-cursor="view"
              aria-label={`Open image: ${img.alt}`}
              className={`group relative block w-full ${cfg.aspect} rounded-2xl overflow-hidden bg-white border border-black/5`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={single ? "(max-width: 768px) 100vw, 768px" : cfg.sizes}
                className={`${cfg.fit} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
              />
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0F0F10]/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3.5 h-3.5" />
              </span>
            </button>
            {img.caption && <figcaption className="mt-2.5 text-xs text-[#6B6B6B] leading-snug">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 select-none"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={images[index].alt}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E3222A] text-white flex items-center justify-center transition-colors z-30"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
            <div className="relative w-full max-w-5xl h-[75vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={images[index].src} alt={images[index].alt} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="absolute bottom-6 left-0 right-0 text-center text-xs uppercase tracking-wider text-white/60">
              {images[index].caption ?? images[index].alt} · {index + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
