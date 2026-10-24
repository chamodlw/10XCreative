"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function WorkWithUs() {
  return (
    <section className="relative py-28 sm:py-40 bg-[#0F0F10] text-white overflow-hidden flex items-center justify-center">
      {/* Background Animated Sparks & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#E3222A1A_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#E3222A]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 w-full text-center flex flex-col items-center">
        <span className="text-[#E3222A] text-xs font-bold uppercase tracking-widest mb-4 inline-flex items-center gap-1.5">
          <span>⚡</span> TIME TO UNLEASH YOUR BRAND
        </span>

        {/* Huge Outlined Interactive Text */}
        <div className="group relative my-4 sm:my-8 cursor-pointer select-none">
          <h2 className="font-display text-[13vw] sm:text-[14vw] leading-none uppercase tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:2px_#E3222A] group-hover:text-[#E3222A]/10 transition-all duration-500">
            WORK WITH US
          </h2>

          {/* Large Circular Magnetic Button in the Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <MagneticButton strength={0.45}>
              <Link
                href="/contact"
                data-cursor="link"
                className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#E3222A] hover:bg-[#B8141C] text-white flex flex-col items-center justify-center font-display uppercase tracking-wider shadow-[0_0_50px_rgba(227,34,42,0.6)] group-hover:scale-105 transition-all duration-300"
              >
                <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-xs sm:text-sm font-bold">CONTACT US</span>
                <span className="text-[10px] text-white/80 font-mono mt-0.5">START 10X</span>
              </Link>
            </MagneticButton>
          </div>
        </div>

        <p className="text-sm sm:text-base text-white/70 max-w-lg mt-6">
          Ready to outperform your competition? Connect with our senior team for a custom roadmap and tailored proposal.
        </p>
      </div>
    </section>
  );
}
