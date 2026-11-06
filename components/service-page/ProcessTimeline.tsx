"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

interface Step {
  step: string;
  title: string;
  desc: string;
}

interface ProcessTimelineProps {
  badge: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  steps: Step[];
}

/**
 * Dark vertical timeline. A red progress line fills as the user scrolls
 * and steps alternate left/right on desktop.
 */
export default function ProcessTimeline({ badge, title, highlightWord, subtitle, steps }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 sm:py-32 bg-[#0F0F10] text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E3222A]/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <SectionTitle
          badge={badge}
          title={title}
          highlightWord={highlightWord}
          subtitle={subtitle}
          dark
          align="center"
          className="mb-20 max-w-3xl"
        />

        <div ref={ref} className="relative">
          {/* Track + progress */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-[#E3222A] origin-top md:-translate-x-1/2"
          />

          <div className="space-y-14 md:space-y-20">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <div key={s.step} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-20">
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0F0F10] border-2 border-[#E3222A] flex items-center justify-center font-display text-lg text-[#E3222A] z-10"
                  >
                    {s.step}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: right ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`pl-20 md:pl-0 ${right ? "md:col-start-2" : "md:text-right"}`}
                  >
                    <div className="group inline-block w-full p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#E3222A]/50 hover:bg-white/[0.05] transition-colors">
                      <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#E3222A] block mb-3">
                        Step {s.step}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight mb-3">
                        {s.title}
                      </h3>
                      <p className="text-sm text-white/65 leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
