import { Metadata } from "next";
import Button from "@/components/ui/Button";
import SubServiceShowcase from "@/components/service-page/SubServiceShowcase";
import ExploreCapabilities from "@/components/service-page/ExploreCapabilities";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Creative Direction, Viral Video & Brand Design | 10X Creative Sri Lanka",
  description:
    "Bold visual disruption and creative production in Colombo, Sri Lanka. Viral Reels & TikToks, 4K cinematic commercials, brand identity systems, and high-impact packaging design.",
};

export default function CreativePage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            Creative Ideas <span className="text-[#E3222A]">That Inspire</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl mb-8">
            In a digital world overflowing with white noise, generic creative is completely invisible. We produce cinematic commercials, viral vertical video reels, iconic brand identities, and distinct packaging that stay etched in memory.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Ignite Your Brand Creative
            </Button>
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent text-[#0F0F10] font-bold text-sm uppercase tracking-wider border border-[#0F0F10] hover:bg-[#0F0F10] hover:text-white transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-black/10">
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">10M+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Viral Organic Impressions
            </span>
            <span className="text-xs text-[#6B6B6B]">Engineered through witty scriptwriting & retention editing.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#0F0F10] block mb-1">78%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Average Video Retention
            </span>
            <span className="text-xs text-[#6B6B6B]">Beating standard social industry benchmarks by over 2.4x.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">60+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Brand Identities Engineered
            </span>
            <span className="text-xs text-[#6B6B6B]">From corporate giants to disruptive retail challengers.</span>
          </div>
        </div>
      </section>

      {/* ── SUB-SERVICES ────────────────────────────────────────────────────── */}
      <SubServiceShowcase capability="creative" />

      {/* ── EXPLORE OTHER CAPABILITIES ──────────────────────────────────────── */}
      <ExploreCapabilities current="creative" />
    </div>
  );
}
