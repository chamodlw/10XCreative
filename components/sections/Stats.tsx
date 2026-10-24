"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-20 sm:py-28 bg-[#0F0F10] text-white relative overflow-hidden border-y border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E3222A]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#E3222A]/40 transition-colors group"
            >
              <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#E3222A] group-hover:scale-105 transition-transform duration-300">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="font-display text-lg sm:text-xl uppercase tracking-wider text-white mt-2 mb-1">
                {stat.label}
              </h3>

              <p className="text-xs text-white/60 max-w-[180px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
