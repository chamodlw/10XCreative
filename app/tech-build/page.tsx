import { Metadata } from "next";
import {
  Code2,
  Cpu,
  Zap,
  Globe,
} from "lucide-react";
import Button from "@/components/ui/Button";
import CapabilityExplorer from "@/components/service-page/CapabilityExplorer";
import ProcessTimeline from "@/components/service-page/ProcessTimeline";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import Marquee from "@/components/ui/Marquee";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Next.js Web Development & Tech Build | 10X Creative Sri Lanka",
  description:
    "Award-winning Next.js web development in Sri Lanka. Sub-second load speeds, bespoke e-commerce, conversion-focused landing pages, and interactive web applications.",
};

const TECH_PILLARS = [
  {
    icon: <Code2 />,
    title: "Next.js 16 Web Flagships",
    desc: "Built from scratch with Next.js App Router, React 19, TypeScript, and Tailwind CSS. Supercharged with partial prerendering and server-side components for instant global response times.",
    metrics: "98+ Lighthouse Score",
    features: [
      "Sub-second First Contentful Paint (<1s)",
      "Strict TypeScript typing & clean component code",
      "Dynamic OpenGraph & Automated XML Sitemaps",
      "Integrated Schema.org Structured Data",
    ],
  },
  {
    icon: <Zap />,
    title: "Conversion-Engineered Landing Funnels",
    desc: "Engineered specifically to convert cold paid advertising traffic into sales and WhatsApp inquiries. Zero fluff, frictionless form submissions, and zero layout shift.",
    metrics: "+185% Conversion Lift",
    features: [
      "Mobile-first checkout and inquiry paths",
      "Direct WhatsApp and CRM click integrations",
      "A/B Split Test ready architecture",
      "Instant form validation via Zod & React Hook Form",
    ],
  },
  {
    icon: <Globe />,
    title: "Headless & Custom E-Commerce",
    desc: "Robust shopping experiences for high-volume retail. Custom headless Shopify storefronts, fast WooCommerce builds, and local Sri Lankan payment gateway integrations (PayHere, WebXPay, Genie).",
    metrics: "Sub-Second Checkout",
    features: [
      "Local LKR & Multi-Currency International Gateways",
      "Real-time stock inventory & automated invoices",
      "Frictionless 1-page checkout flows",
      "Integrated Facebook CAPI & Google Shopping feeds",
    ],
  },
  {
    icon: <Cpu />,
    title: "Interactive Web Motion & Systems",
    desc: "Digital experiences that mesmerize users without hurting performance. Fluid spring animations with Framer Motion, buttery 60fps smooth scrolling with Lenis, and custom cursor telemetry.",
    metrics: "60 FPS Silky Smooth",
    features: [
      "Lenis kinetic smooth scroll acceleration",
      "Interactive micro-interactions & magnetic buttons",
      "Responsive accessibility & prefers-reduced-motion checks",
      "Zero bundle-bloat, modular chunk splitting",
    ],
  },
];

const STACK_BADGES = [
  { name: "Next.js 16", role: "Fullstack Architecture" },
  { name: "React 19", role: "Core UI Engine" },
  { name: "TypeScript 5", role: "Type Safety" },
  { name: "Tailwind CSS 4", role: "Design Systems" },
  { name: "Turbopack", role: "Ultra-Fast Bundling" },
  { name: "Framer Motion", role: "60 FPS Micro-Interactions" },
  { name: "Lenis", role: "Inertial Smooth Scrolling" },
  { name: "Vercel Edge", role: "Global CDN Deployment" },
];

const BUILD_STEPS = [
  { step: "01", title: "Architecture & Wireframes", desc: "Mapping user journeys, key conversion funnels, and frictionless wireframes before a single line of code." },
  { step: "02", title: "Bespoke Visual Design", desc: "Crafting modern, award-tier UI in Figma with bold typography, motion specs, and custom design elements." },
  { step: "03", title: "Next.js Development", desc: "Clean, typed, blazing-fast code with fluid interactions, responsive checks, and CMS or payment integrations." },
  { step: "04", title: "SEO, QA & Launch", desc: "Lighthouse optimization, cross-browser testing, analytics wiring, CDN configuration, and live deployment." },
];

export default function TechBuildPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> MODERN WEB ENGINEERING & TECH BUILD
          </div>
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

      {/* ── ENGINEERING EXPLORER ────────────────────────────────────────────── */}
      <CapabilityExplorer
        badge="ENGINEERING CAPABILITIES"
        title="BUILT WITH MODERN STANDARDS."
        highlightWord="STANDARDS"
        subtitle="Pick a build type to see how we turn websites into powerful commercial assets."
        items={TECH_PILLARS.map((c) => ({ icon: c.icon, title: c.title, desc: c.desc, metric: c.metrics, features: c.features }))}
        ctaLabel="Commission Build"
      />

      {/* ── TECH STACK ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#F7F7F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionTitle
            badge="OUR TECHNOLOGY ARSENAL"
            title="NO LEGACY SOFTWARE. PURE MODERN CODE."
            highlightWord="MODERN"
            className="max-w-3xl"
          />
          <p className="text-sm text-[#6B6B6B] max-w-sm">
            The exact stack powering top global startups and high-converting commercial flagships.
          </p>
        </div>
        <Marquee speed={35}>
          {STACK_BADGES.map((tech) => (
            <div
              key={tech.name}
              className="shrink-0 mx-2 px-8 py-6 rounded-2xl bg-white border border-black/5 hover:border-[#E3222A]/50 transition-colors"
            >
              <span className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#0F0F10] block">
                {tech.name}
              </span>
              <span className="text-[11px] font-bold text-[#E3222A] uppercase tracking-widest">{tech.role}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ── BUILD PROCESS ───────────────────────────────────────────────────── */}
      <ProcessTimeline
        badge="HOW WE BUILD"
        title="FROM WIREFRAME TO LIVE IN WEEKS."
        highlightWord="LIVE"
        subtitle="A focused four-stage build process with clear sign-offs at every step."
        steps={BUILD_STEPS}
      />

      {/* ── CTA + CROSS-LINKS ───────────────────────────────────────────────── */}
      <ServiceCTA
        current="tech-build"
        eyebrow="UPGRADE TO MODERN CODE"
        title="READY FOR A WEBSITE THAT DRIVES LEADS?"
        text="Tell us about your project scope. Our senior engineering team will provide a technical architecture review and wireframe estimate."
        primaryLabel="Request Tech Proposal"
        secondaryLabel="View Built Flagships"
        marqueeWords={["Next.js", "Sub-Second Loads", "E-Commerce", "Landing Funnels", "98+ Lighthouse"]}
      />
    </div>
  );
}
