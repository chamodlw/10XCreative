import { Metadata } from "next";
import {
  TrendingUp,
  Target,
  Zap,
  Search,
} from "lucide-react";
import Button from "@/components/ui/Button";
import CapabilityExplorer from "@/components/service-page/CapabilityExplorer";
import ProcessTimeline from "@/components/service-page/ProcessTimeline";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Performance Marketing & Paid Ads | 10X Creative Sri Lanka",
  description:
    "Data-driven paid advertising and performance marketing in Sri Lanka. Scale your brand with high-ROAS Meta Ads, Google Performance Max, TikTok campaigns, and full-funnel lead generation.",
};

const MARKETING_CHANNELS = [
  {
    icon: <Target />,
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Precision demographic, psychographic, and lookalike targeting. From cold awareness video ads to high-converting dynamic catalog remarketing that delivers repeatable ROAS.",
    metrics: "4.8x Average ROAS",
    features: [
      "Custom CAPI & Pixel Setup",
      "Dynamic Product Ads & Carousel Formats",
      "A/B Creative Hook Testing",
      "Weekly Bid & Audience Calibration",
    ],
  },
  {
    icon: <Search />,
    title: "Google Search & Performance Max",
    desc: "Capture high-intent buyers the exact moment they search for your products or services. Dominate top Google rankings with high quality-score keywords and smart bidding strategies.",
    metrics: "+160% Qualified Leads",
    features: [
      "High-Intent Keyword Sculpting",
      "Negative Keyword Optimization",
      "PMax Shopping & YouTube Feeds",
      "Conversion Tracking with Enhanced Data",
    ],
  },
  {
    icon: <Zap />,
    title: "TikTok & Short-Form Paid Ads",
    desc: "Fast-moving viral ad sets engineered specifically for vertical feeds. We produce native-feeling, witty ad creative that stops the thumb and drives immediate checkouts.",
    metrics: "Sub-$0.12 CPC",
    features: [
      "Native UGC & Creator-Style Creatives",
      "Spark Ads & Influencer Boosting",
      "Instant Experience Mobile Pages",
      "High-Energy Trend Capitalization",
    ],
  },
  {
    icon: <TrendingUp />,
    title: "Full-Funnel Lead Generation",
    desc: "Turn clicks into qualified pipeline for real estate, education, corporate B2B, and high-ticket services. Multi-step funnels that filter out time-wasters and deliver hot leads straight to WhatsApp.",
    metrics: "-38% Lower CPL",
    features: [
      "High-Converting Lead Magnet Landers",
      "WhatsApp Direct Click-to-Chat Funnels",
      "CRM & Email Autoresponder Webhooks",
      "Instant Sales Notification Routing",
    ],
  },
];

const FRAMEWORK_STEPS = [
  {
    step: "01",
    title: "Audience & Unit Economics Audit",
    desc: "We analyze your customer acquisition costs, competitor ad spend, and conversion bottlenecks before spending a single rupee.",
  },
  {
    step: "02",
    title: "Creative & Funnel Engineering",
    desc: "We build thumb-stopping ad copy, visual hooks, and dedicated fast landing pages designed purely for high conversion rates.",
  },
  {
    step: "03",
    title: "Precision Algorithmic Launch",
    desc: "We launch multi-tiered ad sets across Meta and Google, segmenting cold prospecting from high-intent retargeting audiences.",
  },
  {
    step: "04",
    title: "Aggressive Scale & Optimization",
    desc: "We double down on winning hooks, prune low-performing ad sets, and aggressively scale ad spend while defending your target ROAS.",
  },
];

export default function MarketingPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> PERFORMANCE MARKETING & GROWTH
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            DATA-BACKED CAMPAIGNS THAT SCALE <span className="text-[#E3222A]">REVENUE</span>.
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

      {/* ── CHANNEL EXPLORER ────────────────────────────────────────────────── */}
      <CapabilityExplorer
        badge="PAID CHANNELS WE DOMINATE"
        title="SCALABLE ACQUISITION ENGINES."
        highlightWord="ACQUISITION"
        subtitle="Pick a channel to see how we combine mathematical precision with creative brilliance across the world's most lucrative ad networks."
        items={MARKETING_CHANNELS.map((c) => ({ icon: c.icon, title: c.title, desc: c.desc, metric: c.metrics, features: c.features }))}
        ctaLabel="Launch Campaign"
      />

      {/* ── PERFORMANCE FRAMEWORK ───────────────────────────────────────────── */}
      <ProcessTimeline
        badge="OUR PERFORMANCE FRAMEWORK"
        title="HOW WE SCALE AD CAMPAIGNS SAFELY."
        highlightWord="SCALE"
        subtitle="No random guesswork. Every marketing rupee follows a tested, disciplined deployment framework."
        steps={FRAMEWORK_STEPS}
      />

      {/* ── CTA + CROSS-LINKS ───────────────────────────────────────────────── */}
      <ServiceCTA
        current="marketing"
        eyebrow="SCALE YOUR ROI TODAY"
        title="READY TO OUTPERFORM YOUR COMPETITION?"
        text="Connect with our senior marketing team for a full ad account audit and tailored growth roadmap within 24 hours."
        primaryLabel="Request Free Ad Audit"
        secondaryLabel="View Case Studies"
        marqueeWords={["Meta Ads", "Google PMax", "TikTok Ads", "Lead Generation", "4.8X ROAS"]}
      />
    </div>
  );
}
