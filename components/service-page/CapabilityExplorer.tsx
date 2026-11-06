"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export interface ExplorerItem {
  icon: ReactNode;
  title: string;
  desc: string;
  metric: string;
  features: string[];
}

interface CapabilityExplorerProps {
  badge: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  items: ExplorerItem[];
  ctaLabel: string;
}

/**
 * Interactive two-pane capability explorer: a numbered tab list on the left
 * and an animated detail panel on the right.
 */
export default function CapabilityExplorer({
  badge,
  title,
  highlightWord,
  subtitle,
  items,
  ctaLabel,
}: CapabilityExplorerProps) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <section className="py-24 sm:py-32 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <SectionTitle
          badge={badge}
          title={title}
          highlightWord={highlightWord}
          subtitle={subtitle}
          className="mb-14 max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-10">
          {/* ── Tab list ── */}
          <div role="tablist" aria-label={title} className="flex flex-col gap-2">
            {items.map((it, i) => {
              const isActive = i === active;
              return (
                <button
                  key={it.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`relative text-left rounded-2xl px-5 sm:px-6 py-5 border transition-colors duration-300 overflow-hidden ${
                    isActive
                      ? "border-[#0F0F10] bg-[#0F0F10] text-white"
                      : "border-black/5 bg-[#F7F7F5] text-[#0F0F10] hover:border-black/20"
                  }`}
                  data-cursor="link"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-2xl w-9 shrink-0 ${
                        isActive ? "text-[#E3222A]" : "text-black/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg sm:text-xl uppercase tracking-tight leading-tight flex-1">
                      {it.title}
                    </span>
                    <ArrowUpRight
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                        isActive ? "rotate-45 text-[#E3222A]" : "opacity-40"
                      }`}
                    />
                  </div>
                  {isActive && (
                    <motion.span
                      layoutId="explorer-bar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#E3222A]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Detail panel ── */}
          <div className="relative rounded-3xl bg-[#F7F7F5] border border-black/5 p-8 sm:p-12 min-h-[440px] overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-[#E3222A]/10 blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col h-full"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <motion.div
                    initial={{ rotate: -20, scale: 0.6 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="w-16 h-16 rounded-2xl bg-[#E3222A] text-white flex items-center justify-center shadow-lg shadow-[#E3222A]/30 [&_svg]:w-7 [&_svg]:h-7"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-right">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#6B6B6B] mb-1">
                      Proven Result
                    </span>
                    <span className="font-display text-3xl sm:text-4xl text-[#0F0F10] uppercase">
                      {item.metric}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#0F0F10] leading-[0.95] mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl">{item.desc}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {item.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-black/5 text-sm font-semibold text-[#0F0F10]"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0F0F10] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-auto self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F0F10] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E3222A] transition-colors"
                >
                  {ctaLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
