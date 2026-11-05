import { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Gauge,
  Smartphone,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  ShieldAlert,
  Terminal,
  Zap,
  Globe,
  Database,
} from "lucide-react";
import Button from "@/components/ui/Button";
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
    icon: Code2,
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
    icon: Zap,
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
    icon: Globe,
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
    icon: Cpu,
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

      {/* ── 4 TECH PILLARS ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-16">
            <SectionTitle
              badge="ENGINEERING CAPABILITIES"
              title="BUILT WITH MODERN STANDARDS."
              highlightWord="STANDARDS"
              subtitle="We combine clean code with high-end aesthetic design to turn websites into powerful commercial assets."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_PILLARS.map((col, idx) => {
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
                    <span>Commission Build</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MODERN TECH STACK ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0F0F10] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E3222A]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <SectionTitle
            badge="OUR TECHNOLOGY ARSENAL"
            title="NO LEGACY SOFTWARE. PURE MODERN CODE."
            highlightWord="MODERN"
            subtitle="The exact modern stack powering top global software startups and high-converting commercial flagships."
            dark
            className="mb-16"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {STACK_BADGES.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E3222A]/40 transition-colors text-center"
              >
                <span className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#E3222A] block mb-1">
                  {tech.name}
                </span>
                <span className="text-[11px] text-white/60 uppercase tracking-widest">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <div className="p-12 sm:p-20 rounded-3xl bg-white border border-black/5 shadow-xl relative overflow-hidden">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3222A] mb-3 inline-block">
            ⚡ UPGRADE TO MODERN CODE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0F0F10] max-w-2xl mx-auto mb-6">
            READY FOR A WEBSITE THAT ACTUALLY DRIVES LEADS?
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-lg mx-auto mb-8">
            Tell us about your project scope. Our senior engineering team will provide a technical architecture review and wireframe estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Request Tech Proposal
            </Button>
            <Button href="/portfolio" variant="outline" size="lg" icon>
              View Built Flagships
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
