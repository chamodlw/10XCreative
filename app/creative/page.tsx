import { Metadata } from "next";
import {
  Video,
  Palette,
  Film,
  Layers,
} from "lucide-react";
import Button from "@/components/ui/Button";
import CapabilityExplorer from "@/components/service-page/CapabilityExplorer";
import ProcessTimeline from "@/components/service-page/ProcessTimeline";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Creative Direction, Viral Video & Brand Design | 10X Creative Sri Lanka",
  description:
    "Bold visual disruption and creative production in Colombo, Sri Lanka. Viral Reels & TikToks, 4K cinematic commercials, brand identity systems, and high-impact packaging design.",
};

const CREATIVE_PILLARS = [
  {
    icon: <Video />,
    title: "Viral Short-Form Video (Reels & TikTok)",
    desc: "Crafted specifically for the vertical algorithm. Sarcastic humor, witty storytelling, and relatable hooks designed to capture viewers in the first 1.5 seconds and trigger massive organic shares.",
    highlight: "10M+ Viral Views",
    deliverables: [
      "Hook-driven scriptwriting & relatable scenarios",
      "Fast-paced retention editing with sound effects",
      "Dynamic on-screen typography & captions",
      "Multiple hook variations tested for paid & organic",
    ],
  },
  {
    icon: <Film />,
    title: "4K Cinematic Commercial Production",
    desc: "Broadcast-quality visual storytelling that positions your brand as an untouchable market leader. Full studio and on-location filming across Sri Lanka with professional directors and cinema cameras.",
    highlight: "4K Master Delivery",
    deliverables: [
      "Concept treatment, storyboarding & creative direction",
      "Talent casting, wardrobe & location scouting",
      "Full cinema camera crew, lighting & audio capture",
      "Color grading, custom score & theatrical sound design",
    ],
  },
  {
    icon: <Palette />,
    title: "Brand Identity & Visual Systems",
    desc: "A brand that looks premium can charge premium prices. We engineer distinct visual systems, iconic vector marks, bespoke color harmonies, and typography manuals that differentiate you instantly.",
    highlight: "60+ Brands Created",
    deliverables: [
      "Vector logos, primary & secondary brand marks",
      "Typography pairing rules & custom color palettes",
      "Complete Brand Guidelines manual (PDF & Figma)",
      "Social media visual identity & template library",
    ],
  },
  {
    icon: <Layers />,
    title: "Packaging & Advertising Collateral",
    desc: "Tangible brand experiences that command shelf space. From luxury cosmetic packaging and FMCG labels to high-impact highway billboards and retail merchandising collateral.",
    highlight: "100% Print-Ready CMYK",
    deliverables: [
      "3D packaging mockups & structural die-lines",
      "FMCG product labels with barcode compliance",
      "Large-scale highway billboards & street banners",
      "Corporate presentation decks & sales brochures",
    ],
  },
];

const HOOK_PRINCIPLES = [
  {
    number: "01",
    title: "The 1.5-Second Thumb Stop",
    desc: "If the first 1.5 seconds fail, nothing else matters. We script pattern-interrupting visual and auditory hooks that force scrolling users to halt.",
  },
  {
    number: "02",
    title: "Relatable & Sarcastic Humor",
    desc: "Polite corporate messaging is boring. We use witty, self-aware, and culturally resonant humor that makes audiences tag their friends.",
  },
  {
    number: "03",
    title: "Aesthetic Contrast",
    desc: "In a sea of Canva templates, bespoke cinematography, vibrant lighting, and distinct visual systems elevate your perceived brand authority.",
  },
  {
    number: "04",
    title: "Clear Conversion Payoff",
    desc: "Creativity without a commercial goal is just art. Every creative asset seamlessly bridges from engaging entertainment to clear brand action.",
  },
];

export default function CreativePage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> CREATIVE DIRECTION & PRODUCTION
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            VISUAL DISRUPTION THAT COMMANDS <span className="text-[#E3222A]">ATTENTION</span>.
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

      {/* ── CREATIVE EXPLORER ───────────────────────────────────────────────── */}
      <CapabilityExplorer
        badge="WHAT WE CREATE"
        title="CREATIVE THAT STOPS THE SCROLL."
        highlightWord="STOPS"
        subtitle="Pick a discipline to see what our directors, editors, and designers deliver."
        items={CREATIVE_PILLARS.map((c) => ({ icon: c.icon, title: c.title, desc: c.desc, metric: c.highlight, features: c.deliverables }))}
        ctaLabel="Start a Creative Brief"
      />

      {/* ── HOOK PHILOSOPHY ─────────────────────────────────────────────────── */}
      <ProcessTimeline
        badge="THE 1.5-SECOND HOOK PHILOSOPHY"
        title="HOW WE ENGINEER ATTENTION."
        highlightWord="ATTENTION"
        subtitle="Four principles behind every frame, caption, and cut we ship."
        steps={HOOK_PRINCIPLES.map((p) => ({ step: p.number, title: p.title, desc: p.desc }))}
      />

      {/* ── CTA + CROSS-LINKS ───────────────────────────────────────────────── */}
      <ServiceCTA
        current="creative"
        eyebrow="IGNITE YOUR BRAND"
        title="READY TO BE IMPOSSIBLE TO IGNORE?"
        text="Share your brand, product, or campaign idea. Our creative directors will come back with concepts and a production plan."
        primaryLabel="Request Creative Proposal"
        secondaryLabel="View Our Work"
        marqueeWords={["Viral Reels", "4K Commercials", "Brand Identity", "Packaging", "10M+ Views"]}
      />
    </div>
  );
}
