"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SubServiceVisual from "@/components/service-page/SubServiceVisuals";
import { SUB_SERVICES, type CapabilityKey, type SubService } from "@/data/subServices";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sub-service breakdown for a capability page: intro + quick-jump chips,
 * then one row per sub-service with an animated graphic. Rows alternate
 * the graphic between the right and left side.
 */
export default function SubServiceShowcase({ capability }: { capability: CapabilityKey }) {
  const content = SUB_SERVICES[capability];
  const total = content.items.length;

  return (
    <MotionConfig reducedMotion="user">
      <section className="py-8 sm:py-14 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col items-start gap-8 mb-16 sm:mb-24">
          <SectionTitle
            badge={content.badge}
            title={content.title}
            highlightWord={content.highlightWord}
            subtitle={content.subtitle}
            className="max-w-3xl"
          />
          <div className="flex flex-wrap gap-2.5 max-w-5xl">
            {content.items.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-cursor="link"
                className="group inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white border border-black/10 shadow-sm text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#0F0F10] hover:bg-[#E3222A] hover:text-white hover:border-[#E3222A] transition-colors"
              >
                <span className="text-[#E3222A] group-hover:text-white/80 font-mono">{String(i + 1).padStart(2, "0")}</span>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {content.items.map((item, i) => (
            <SubServiceRow key={item.id} item={item} index={i} total={total} />
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}

function SubServiceRow({ item, index, total }: { item: SubService; index: number; total: number }) {
  const flipped = index % 2 === 1; // graphic on the left
  const num = String(index + 1).padStart(2, "0");

  return (
    <article id={item.id} className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: flipped ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className={flipped ? "lg:order-2" : ""}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="font-display text-6xl sm:text-7xl leading-none text-transparent [-webkit-text-stroke:1.5px_#E3222A]">{num}</span>
          <motion.span
            className="h-px flex-1 max-w-[120px] bg-[#0F0F10]/20 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          />
          <span className="text-xs font-mono text-[#6B6B6B]">
            {num} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] text-[#0F0F10] mb-5">
          {item.title}
        </h3>

        {item.tags && (
          <div className="flex flex-wrap gap-2 mb-5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#FFF1F1] border border-[#FFD5D7] text-[#E3222A] text-[11px] font-bold uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-xl">{item.desc}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
          {item.points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="flex items-start gap-2.5 text-sm font-semibold text-[#0F0F10]"
            >
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E3222A] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              {p}
            </motion.li>
          ))}
        </ul>

        <Link
          href="/contact"
          data-cursor="link"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F0F10] hover:text-[#E3222A] transition-colors"
        >
          Discuss this service
          <span className="w-8 h-8 rounded-full bg-[#0F0F10] text-white flex items-center justify-center group-hover:bg-[#E3222A] group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </motion.div>

      {/* Graphic */}
      <motion.div
        initial={{ opacity: 0, x: flipped ? -60 : 60, rotate: flipped ? -3 : 3, scale: 0.94 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: EASE }}
        className={`relative ${flipped ? "lg:order-1" : ""}`}
      >
        <div
          className={`absolute -z-10 w-2/3 h-2/3 rounded-[2rem] border-2 border-[#E3222A]/30 ${
            flipped ? "-left-4 -bottom-4" : "-right-4 -bottom-4"
          }`}
        />
        <SubServiceVisual kind={item.visual} />
      </motion.div>
    </article>
  );
}
