import { Metadata } from "next";
import {
  BarChart3,
  LineChart,
  Activity,
  Binary,
} from "lucide-react";
import Button from "@/components/ui/Button";
import CapabilityExplorer from "@/components/service-page/CapabilityExplorer";
import ProcessTimeline from "@/components/service-page/ProcessTimeline";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Growth Telemetry & Conversion Analytics | 10X Creative Sri Lanka",
  description:
    "Advanced conversion telemetry, GA4 setup, Meta CAPI server-side tracking, and multi-touch attribution modeling in Sri Lanka. Eliminate wasted ad spend with clear data.",
};

const ANALYTICS_PILLARS = [
  {
    icon: <Binary />,
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
    icon: <BarChart3 />,
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
    icon: <Activity />,
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
    icon: <LineChart />,
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

      {/* ── ANALYTICS EXPLORER ──────────────────────────────────────────────── */}
      <CapabilityExplorer
        badge="DATA CAPABILITIES"
        title="MEASURE EVERYTHING THAT MATTERS."
        highlightWord="MATTERS"
        subtitle="Pick a capability to see how we turn noisy marketing data into clear profit signals."
        items={ANALYTICS_PILLARS.map((c) => ({ icon: c.icon, title: c.title, desc: c.desc, metric: c.metrics, features: c.features }))}
        ctaLabel="Request Data Audit"
      />

      {/* ── IMPLEMENTATION BLUEPRINT ────────────────────────────────────────── */}
      <ProcessTimeline
        badge="IMPLEMENTATION BLUEPRINT"
        title="FROM BROKEN PIXELS TO CLEAR PROFIT."
        highlightWord="CLEAR PROFIT"
        subtitle="A four-stage rollout that makes every conversion visible and every rupee accountable."
        steps={ANALYTICS_WORKFLOW.map((w) => ({ step: w.number, title: w.title, desc: w.desc }))}
      />

      {/* ── CTA + CROSS-LINKS ───────────────────────────────────────────────── */}
      <ServiceCTA
        current="analytics"
        eyebrow="STOP GUESSING"
        title="READY TO SEE WHERE YOUR PROFIT COMES FROM?"
        text="Get a full tracking infrastructure audit. We will show you exactly what is broken and how much data you are losing."
        primaryLabel="Request Free Data Audit"
        secondaryLabel="View Case Studies"
        marqueeWords={["Server-Side Tracking", "Meta CAPI", "GA4", "Attribution", "Live Dashboards"]}
      />
    </div>
  );
}
