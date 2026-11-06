"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES, type CapabilityLink } from "@/data/capabilities";
import { SUB_SERVICES } from "@/data/subServices";

/**
 * Closing block on each capability page: large editorial rows linking to
 * the other three capabilities. Hovering a row floods it dark and reveals
 * that capability's sub-services.
 */
export default function ExploreCapabilities({ current }: { current: CapabilityLink["key"] }) {
  const others = CAPABILITIES.filter((c) => c.key !== current);

  return (
    <section className="pb-24 sm:pb-32 pt-8 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFD5D7]">
            <span>⚡</span> KEEP EXPLORING
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-[#0F0F10]">
            Explore other <span className="text-[#E3222A]">capabilities</span>
          </h2>
        </div>
      </div>

      <div className="border-t border-[#0F0F10]/15">
        {others.map((c, i) => {
          const subs = SUB_SERVICES[c.key].items;
          return (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={c.href}
                data-cursor="link"
                className="group relative block border-b border-[#0F0F10]/15 overflow-hidden"
              >
                {/* hover flood */}
                <span className="absolute inset-0 bg-[#0F0F10] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#E3222A]/0 group-hover:bg-[#E3222A]/30 blur-3xl transition-colors duration-500" />

                <div className="relative flex items-center gap-4 sm:gap-8 py-8 sm:py-10 px-1 sm:px-6">
                  <span className="font-display text-xl sm:text-2xl text-[#E3222A] w-10 shrink-0">{c.number}</span>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-none text-[#0F0F10] group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                      {c.label}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B6B6B] group-hover:text-white/60 transition-colors">{c.tagline}</p>

                    {/* sub-services reveal */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-2 pt-5">
                          {subs.map((s) => (
                            <span
                              key={s.id}
                              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/80 text-[11px] font-bold uppercase tracking-wider"
                            >
                              {s.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <span className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#0F0F10]/15 text-[#0F0F10] flex items-center justify-center shrink-0 group-hover:bg-[#E3222A] group-hover:border-[#E3222A] group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
