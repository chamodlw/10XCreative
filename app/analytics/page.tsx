import { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  LineChart,
  PieChart,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Binary,
  Layers,
  SearchCheck,
  Database,
  Lock,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Growth Telemetry & Conversion Analytics | 10X Creative Sri Lanka",
  description:
    "Advanced conversion telemetry, GA4 setup, Meta CAPI server-side tracking, and multi-touch attribution modeling in Sri Lanka. Eliminate wasted ad spend with clear data.",
};

const ANALYTICS_PILLARS = [
  {
    icon: Binary,
    title: "Server-Side Tracking (CAPI & Enhanced Conversions)",
    desc: "Browser ad-blockers and iOS privacy restrictions blind standard tracking tags. We deploy robust server-side Google Tag Manager and Meta Conversion API pipelines to recover up to 35% of lost attribution data.",
    metrics: "+35% Data Recovery",
    features: [
      "Meta Conversion API (CAPI) Gateway Setup",
      "Google Ads Enhanced Conversions Integration",
      "100% GDPR, ePrivacy & First-Party Cookie Compliance",
      "Event deduplication & signal resilience",
    ],
  },
  {
    icon: BarChart3,
    title: "Multi-Touch Attribution Modeling",
    desc: "Customers rarely buy on their first click. We construct cross-channel attribution models to track user journeys across social discovery, retargeting clicks, and final organic checkouts.",
    metrics: "100% Funnel Clarity",
    features: [
      "First-touch, linear & data-driven attribution models",
      "Offline conversion uploads & CRM lead syncing",
      "UTM governance and cross-platform naming hygiene",
      "Cross-device user journey mapping",
    ],
  },
  {
    icon: Activity,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Doubling your conversion rate doubles your revenue without spending an extra rupee on ads. We conduct deep heatmap diagnostics, scroll telemetry, and user friction audits to eliminate drop-offs.",
    metrics: "+42% Conversion Rate",
    features: [
      "Session recording & rage-click diagnostics",
      "Checkout and lead form leak analysis",
      "A/B statistical split testing protocols",
      "Micro-copy and CTA placement engineering",
    ],
  },
  {
    icon: LineChart,
    title: "Real-Time Executive ROI Dashboards",
    desc: "No more confusing 40-page agency PDF reports filled with vanity impressions. You receive live Looker Studio dashboards displaying exact cost-per-lead, ROAS, and revenue generated in real time.",
    metrics: "Live 24/7 Access",
    features: [
      "Automated Looker Studio dashboards",
      "Blended CAC and MER (Marketing Efficiency Ratio) tracking",
      "Real-time WhatsApp & Slack lead alerts",
      "Weekly strategic analysis & action recommendations",
    ],
  },
];

const ANALYTICS_WORKFLOW = [
  {
    number: "01",
    title: "Tracking Infrastructure Audit",
    desc: "We test your existing pixels, events, and tags to find broken triggers, double-counted purchases, or lost iOS conversions.",
  },
  {
    number: "02",
    title: "Server-Side Architecture",
    desc: "We configure a dedicated cloud server container for Google Tag Manager, routing events directly through first-party domains.",
  },
  {
    number: "03",
    title: "Data Pipeline & Verification",
    desc: "We test purchase payloads, currency values, and match quality scores to achieve 8.5+ Event Quality ratings on Meta.",
  },
  {
    number: "04",
    title: "Live Dashboard & Continuous CRO",
    desc: "We connect clean data into automated executive dashboards and conduct monthly conversion optimization sprints.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> GROWTH TELEMETRY & ATTRIBUTION
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            ELIMINATE GUESSWORK WITH <span className="text-[#E3222A]">DATA CLARITY</span>.
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

      {/* ── 4 ANALYTICS PILLARS ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-16">
            <SectionTitle
              badge="DATA CAPABILITIES"
              title="UNCOMPROMISING ATTRIBUTION PRECISION."
              highlightWord="ATTRIBUTION"
              subtitle="We build clean, resilient tracking pipelines so your advertising algorithms get the cleanest possible signals."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ANALYTICS_PILLARS.map((col, idx) => {
              const Icon = col.icon;
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
                        {col.metrics}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl uppercase tracking-tight text-[#0F0F10] mb-3">
                      {col.title}
                    </h3>

                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                      {col.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-black/5 mb-6">
                      {col.features.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-[#0F0F10]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F0F10] group-hover:text-[#E3222A] transition-colors"
                  >
                    <span>Audit Tracking</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION BLUEPRINT ────────────────────────────────────────── */}
      <section className="py-24 bg-[#0F0F10] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E3222A]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <SectionTitle
            badge="THE ANALYTICS BLUEPRINT"
            title="HOW WE SET UP YOUR DATA HIGHWAY."
            highlightWord="HIGHWAY"
            subtitle="From audit to live server-side telemetry in less than 7 days."
            dark
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ANALYTICS_WORKFLOW.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#E3222A]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-4xl text-[#E3222A] block mb-4">
                    {step.number}
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

      {/* ── CTA BANNER ──────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <div className="p-12 sm:p-20 rounded-3xl bg-white border border-black/5 shadow-xl relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3222A] mb-3 inline-block">
            ⚡ GET 100% DATA CERTAINTY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0F0F10] max-w-2xl mx-auto mb-6">
            TIRED OF BLIND ADVERTISING SPEND?
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-lg mx-auto mb-8">
            Let our analytics engineers audit your tracking setup and build an executive ROI dashboard that proves campaign profit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Book a Tracking Audit
            </Button>
            <Button href="/portfolio" variant="outline" size="lg" icon>
              View Verified Results
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
