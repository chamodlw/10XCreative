"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function About() {
  const highlights = [
    { title: "Results-Driven Strategies", desc: "Every campaign is engineered with clear KPIs, high ROAS, and transparent reporting." },
    { title: "Proven Industry Expertise", desc: "Over 5 years scaling e-commerce, real estate, hospitality, and corporate giants in Sri Lanka." },
    { title: "Personalized Solutions", desc: "No cookie-cutter templates. Custom funnels designed around your unique market advantages." },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#ECECEA]/50 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with Rotating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[440px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="10X Creative Team Strategizing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Inset badge card at bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-black/5 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#E3222A] tracking-wider block">Colombo 04, Sri Lanka</span>
                  <span className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[#0F0F10]">
                    Results First Agency
                  </span>
                </div>
                <div className="text-2xl text-[#E3222A]">⚡</div>
              </div>
            </div>

            {/* Rotating Circular Text Badge floating on the top-right */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#0F0F10] text-white p-2 shadow-2xl flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="aboutBadgePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[10px] font-bold uppercase tracking-[2.5px] fill-white">
                  <textPath href="#aboutBadgePath" startOffset="0%">
                    DIGITAL MARKETING • 10X CREATIVE •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg text-[#E3222A]">⚡</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <SectionTitle
              badge="ABOUT 10X CREATIVE"
              title="TRANSFORMING VISION INTO RESULTS."
              highlightWord="VISION"
              subtitle="We are your growth partners, leveraging innovative digital strategies to turn ideas into measurable, exponential success."
              className="mb-8"
            />

            {/* Highlighted Checklist */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-black/5 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-[#FFF1F1] text-[#E3222A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0F0F10] mb-0.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button href="/about" variant="primary" size="md" icon magnetic>
                Read More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
