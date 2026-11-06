import { Metadata } from "next";
import Button from "@/components/ui/Button";
import SubServiceShowcase from "@/components/service-page/SubServiceShowcase";
import ExploreCapabilities from "@/components/service-page/ExploreCapabilities";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Performance Marketing & Paid Ads | 10X Creative Sri Lanka",
  description:
    "Data-driven paid advertising and performance marketing in Sri Lanka. Scale your brand with high-ROAS Meta Ads, Google Performance Max, TikTok campaigns, and full-funnel lead generation.",
};

export default function MarketingPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            Marketing That Drives <span className="text-[#E3222A]">Growth</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl mb-8">
            Stop burning budget on vanity likes. We engineer high-ROAS paid advertising, precision audience funnels, and conversion-optimized ad creative that turn ad spend into predictable revenue.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Request Marketing Proposal
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
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">4.8X</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Average Campaign ROAS
            </span>
            <span className="text-xs text-[#6B6B6B]">Consistently achieved across e-commerce & retail partners.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#0F0F10] block mb-1">-38%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Lower Cost Per Lead
            </span>
            <span className="text-xs text-[#6B6B6B]">Engineered through multi-step qualification & WhatsApp funnels.</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs">
            <span className="font-display text-4xl sm:text-5xl text-[#E3222A] block mb-1">$250K+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] block mb-1">
              Ad Spend Managed
            </span>
            <span className="text-xs text-[#6B6B6B]">Managed with transparent, real-time ROI telemetry.</span>
          </div>
        </div>
      </section>

      {/* ── SUB-SERVICES ────────────────────────────────────────────────────── */}
      <SubServiceShowcase capability="marketing" />

      {/* ── EXPLORE OTHER CAPABILITIES ──────────────────────────────────────── */}
      <ExploreCapabilities current="marketing" />
    </div>
  );
}
