import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Video,
  Palette,
  Sparkles,
  Film,
  Camera,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  Tv,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Creative Direction, Viral Video & Brand Design | 10X Creative Sri Lanka",
  description:
    "Bold visual disruption and creative production in Colombo, Sri Lanka. Viral Reels & TikToks, 4K cinematic commercials, brand identity systems, and high-impact packaging design.",
};

const CREATIVE_PILLARS = [
  {
    icon: Video,
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
    icon: Film,
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
    icon: Palette,
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
    icon: Layers,
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
            <Button href="/portfolio" variant="outline" size="lg" icon>
              Browse Creative Archive
            </Button>
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

      {/* ── 4 CREATIVE CAPABILITIES ─────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-16">
            <SectionTitle
              badge="OUR CREATIVE SPECTRUM"
              title="UNCOMPROMISING AESTHETIC STANDARDS."
              highlightWord="AESTHETIC"
              subtitle="Every frame, vector curve, and sound design layer is engineered to reflect world-class quality."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CREATIVE_PILLARS.map((col, idx) => {
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
                        {col.highlight}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl uppercase tracking-tight text-[#0F0F10] mb-3">
                      {col.title}
                    </h3>

                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                      {col.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-black/5 mb-6">
                      {col.deliverables.map((item, dIdx) => (
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
                    <span>Commission Creative</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE 1.5-SECOND HOOK PHILOSOPHY ──────────────────────────────────── */}
      <section className="py-24 bg-[#0F0F10] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E3222A]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <SectionTitle
            badge="THE 10X CREATIVE CODE"
            title="THE ANATOMY OF CONTENT THAT HOOKS."
            highlightWord="ANATOMY"
            subtitle="How we create viral engagement while building rock-solid brand equity."
            dark
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOOK_PRINCIPLES.map((step, idx) => (
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
            ⚡ ELEVATE YOUR BRAND AESTHETIC
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0F0F10] max-w-2xl mx-auto mb-6">
            READY TO MAKE A STATEMENT IN YOUR MARKET?
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-lg mx-auto mb-8">
            Tell us about your campaign goals. Our directors and design leads will craft a tailored creative treatment within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" icon magnetic>
              Book a Creative Consultation
            </Button>
            <Button href="/portfolio" variant="outline" size="lg" icon>
              View Featured Campaigns
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
