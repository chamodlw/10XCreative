import { Metadata } from "next";
import Button from "@/components/ui/Button";
import SubServiceShowcase from "@/components/service-page/SubServiceShowcase";
import ExploreCapabilities from "@/components/service-page/ExploreCapabilities";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Next.js Web Development & Tech Build | 10X Creative Sri Lanka",
  description:
    "Award-winning Next.js web development in Sri Lanka. Sub-second load speeds, bespoke e-commerce, conversion-focused landing pages, and interactive web applications.",
};

export default function TechBuildPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            FAST WEB EXPERIENCES <span className="text-[#E3222A]">BUILT TO CONVERT</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl mb-8">
            No bloated WordPress builders or sluggish templates. We architect bespoke digital flagships, high-conversion landing funnels, and modern e-commerce stores engineered with Next.js that load in under 1 second.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Request Custom Web Build
            </Button>
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent text-[#0F0F10] font-bold text-sm uppercase tracking-wider border border-[#0F0F10] hover:bg-[#0F0F10] hover:text-white transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Discuss Tech Specs</span>
            </a>
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-black/10">
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">&lt;1s</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Average Load Speed
            </span>
            <span className="text-xs text-[#6B6B6B]">Zero loading friction = higher ad conversion rates.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#0F0F10] block mb-1">98+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Google Lighthouse Score
            </span>
            <span className="text-xs text-[#6B6B6B]">Flawless performance, SEO, accessibility & best practices.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">+185%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Conversion Rate Lift
            </span>
            <span className="text-xs text-[#6B6B6B]">Achieved compared to legacy WordPress sites.</span>
          </div>
        </div>
      </section>

      {/* ── SUB-SERVICES ────────────────────────────────────────────────────── */}
      <SubServiceShowcase capability="tech-build" />

      {/* ── EXPLORE OTHER CAPABILITIES ──────────────────────────────────────── */}
      <ExploreCapabilities current="tech-build" />
    </div>
  );
}
