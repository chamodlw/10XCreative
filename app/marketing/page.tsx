import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Users2,
  DollarSign,
  Search,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Performance Marketing & Paid Ads | 10X Creative Sri Lanka",
  description:
    "Data-driven paid advertising and performance marketing in Sri Lanka. Scale your brand with high-ROAS Meta Ads, Google Performance Max, TikTok campaigns, and full-funnel lead generation.",
};

const MARKETING_CHANNELS = [
  {
    icon: Target,
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
    icon: Search,
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
    icon: Zap,
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
    icon: TrendingUp,
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
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors shadow-lg"
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

      {/* ── 4 CORE MARKETING CHANNELS ───────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-16">
            <SectionTitle
              badge="PAID CHANNELS WE DOMINATE"
              title="SCALABLE ACQUISITION ENGINES."
              highlightWord="ACQUISITION"
              subtitle="We combine mathematical precision with creative brilliance across the world's most lucrative advertising networks."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MARKETING_CHANNELS.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 sm:p-10 rounded-3xl bg-[#F7F7F5] border border-black/5 hover:border-[#E3222A]/40 hover:bg-white hover:shadow-2xl transition-all duration-400 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#0F0F10] text-[#E3222A] flex items-center justify-center group-hover:bg-[#E3222A] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white border border-black/5 text-[#E3222A]">
                        {ch.metrics}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl uppercase tracking-tight text-[#0F0F10] mb-3">
                      {ch.title}
                    </h3>

                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                      {ch.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-black/5 mb-6">
                      {ch.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-[#0F0F10]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F0F10] group-hover:text-[#E3222A] transition-colors"
                  >
                    <span>Launch Campaign</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4-STAGE GROWTH LOOP ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0F0F10] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E3222A]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <SectionTitle
            badge="OUR PERFORMANCE FRAMEWORK"
            title="HOW WE SCALE AD CAMPAIGNS SAFELY."
            highlightWord="SCALE"
            subtitle="No random guesswork. Every marketing rupee follows a tested, disciplined deployment framework."
            dark
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRAMEWORK_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#E3222A]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-4xl text-[#E3222A] block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wider text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CONVERSION CTA ──────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <div className="p-12 sm:p-20 rounded-3xl bg-white border border-black/5 shadow-xl relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3222A] mb-3 inline-block">
            ⚡ SCALE YOUR ROI TODAY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0F0F10] max-w-2xl mx-auto mb-6">
            READY TO OUTPERFORM YOUR COMPETITION?
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-lg mx-auto mb-8">
            Connect with our senior marketing team for a full ad account audit and tailored growth roadmap within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Request Free Ad Audit
            </Button>
            <Button href="/portfolio" variant="outline" size="lg" icon>
              View Client Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
