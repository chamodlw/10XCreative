"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

/* Shared layout for each capability block */

interface BlockProps {
  number: string;
  label: string;
  title: ReactNode;
  description: string;
  services: string[];
  metrics: { value: string; label: string }[];
  href: string;
  dark?: boolean;
  reverse?: boolean;
  visual: ReactNode;
  id: string;
}

export default function CapabilityBlock({
  number,
  label,
  title,
  description,
  services,
  metrics,
  href,
  dark = false,
  reverse = false,
  visual,
  id,
}: BlockProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 sm:py-32 ${
        dark ? "bg-[#0F0F10] text-white" : "bg-[#F7F7F5] text-[#0F0F10]"
      }`}
    >
      {/* Giant outlined number in background */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-6 font-display text-[16rem] sm:text-[22rem] leading-none select-none ${
          reverse ? "right-4 sm:right-10" : "left-4 sm:left-10"
        } ${dark ? "text-white/[0.03]" : "text-black/[0.035]"}`}
      >
        {number}
      </span>

      {dark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E3222A]/10 blur-[150px] pointer-events-none" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* ── Text side ── */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="overflow-hidden mb-2">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9]"
            >
              {label}
            </motion.h2>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight mb-5"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${
              dark ? "text-white/70" : "text-[#6B6B6B]"
            }`}
          >
            {description}
          </motion.p>

          {/* Sub-service chips */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {services.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border ${
                  dark
                    ? "border-white/15 bg-white/[0.04] text-white/90"
                    : "border-black/10 bg-white text-[#0F0F10]"
                }`}
              >
                {s}
              </motion.span>
            ))}
          </div>

          {/* Metrics row */}
          <div
            className={`grid grid-cols-3 gap-4 pt-8 mb-10 border-t ${
              dark ? "border-white/10" : "border-black/10"
            }`}
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <span className="font-display text-3xl sm:text-4xl text-[#E3222A] block">{m.value}</span>
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    dark ? "text-white/60" : "text-[#6B6B6B]"
                  }`}
                >
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>

          <Button href={href} variant={dark ? "white" : "ink"} size="lg" icon magnetic>
            See More
          </Button>
        </div>

        {/* ── Visual side ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`relative ${reverse ? "lg:order-1" : ""}`}
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}
