import { Metadata } from "next";
import Button from "@/components/ui/Button";
import SubServiceShowcase from "@/components/service-page/SubServiceShowcase";
import ExploreCapabilities from "@/components/service-page/ExploreCapabilities";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Growth Telemetry & Conversion Analytics | 10X Creative Sri Lanka",
  description:
    "Advanced conversion telemetry, GA4 setup, Meta CAPI server-side tracking, and multi-touch attribution modeling in Sri Lanka. Eliminate wasted ad spend with clear data.",
};

export default function AnalyticsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            Analytics For <span className="text-[#E3222A]">Measurable Growth</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl mb-8">
            If you can&apos;t measure it, you can&apos;t scale it. We deploy server-side tracking, custom GA4 conversion pipelines, multi-touch attribution, and live ROI dashboards so you know exactly which marketing campaigns generate profit.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Request Data Audit
            </Button>
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent text-[#0F0F10] font-bold text-sm uppercase tracking-wider border border-[#0F0F10] hover:bg-[#0F0F10] hover:text-white transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Ask a Tracking Question</span>
            </a>
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-black/10">
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">+35%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Recovered Tracking Signals
            </span>
            <span className="text-xs text-[#6B6B6B]">Bypassing iOS blocks with first-party server-side CAPI.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#0F0F10] block mb-1">8.8/10</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Average Meta Match Quality
            </span>
            <span className="text-xs text-[#6B6B6B]">Ensuring machine learning optimizes toward the highest-value buyers.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">Zero</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Attribution Guesswork
            </span>
            <span className="text-xs text-[#6B6B6B]">Live dashboards with real-time conversion & ROAS telemetry.</span>
          </div>
        </div>
      </section>

      {/* ── SUB-SERVICES ────────────────────────────────────────────────────── */}
      <SubServiceShowcase capability="analytics" />

      {/* ── EXPLORE OTHER CAPABILITIES ──────────────────────────────────────── */}
      <ExploreCapabilities current="analytics" />
    </div>
  );
}
