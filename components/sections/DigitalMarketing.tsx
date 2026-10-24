"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface CapabilityRow {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const CAPABILITIES: CapabilityRow[] = [
  {
    id: "ppc",
    title: "Google Ads & PPC Campaigns",
    category: "Performance Marketing",
    description: "Capture high-intent searches with precision keywords, bidding strategies, and conversion tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "/services/paid-advertising",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    category: "Community & Brand",
    description: "Build deep resonance with curated content calendars, active community stewardship, and viral reels.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    link: "/services/social-media-marketing",
  },
  {
    id: "seo",
    title: "SEO & Organic Growth Strategies",
    category: "Search Visibility",
    description: "Dominate Google search results organically with structured data, technical speed, and content clusters.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "/services/web-designing",
  },
  {
    id: "brand",
    title: "Brand Strategy & Positioning",
    category: "Creative Identity",
    description: "Craft a commanding brand persona, visual guidelines, and market differentiation that commands respect.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    link: "/services/graphic-designing",
  },
  {
    id: "campaigns",
    title: "Omnichannel Campaign Planning",
    category: "Growth Scaling",
    description: "Harmonize digital touchpoints across advertising, creators, and web experiences for unstoppable momentum.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    link: "/services",
  },
];

export default function DigitalMarketing() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-[#0F0F10] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E3222A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Giant outlined scroll-scaling background text */}
      <div className="absolute top-4 left-0 right-0 overflow-hidden select-none pointer-events-none opacity-20">
        <span className="font-display text-[16vw] uppercase tracking-tighter whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)]">
          DIGITAL MARKETING ⚡ DIGITAL MARKETING
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Intro Banner */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3222A]/15 border border-[#E3222A]/30 text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>⚡</span>
            <span>WHAT WE DO</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] mb-6">
            WE OFFER QUALITY <span className="text-[#E3222A]">DIGITAL SOLUTIONS</span>.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            At 10X Creative, we transform your online presence with targeted strategies that drive traffic, boost engagement, and maximize ROI. From SEO to PPC, social media to content marketing, our solutions are tailored to meet your unique business goals.
          </p>
        </div>

        {/* Two Columns: Interactive Capabilities list on right, dynamic preview on left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Dynamic Image Preview on the Left */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A]">
              <AnimatePresence mode="wait">
                {hoveredIdx !== null && (
                  <motion.div
                    key={hoveredIdx}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={CAPABILITIES[hoveredIdx].image}
                      alt={CAPABILITIES[hoveredIdx].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                      <span className="text-[11px] font-bold text-[#E3222A] uppercase tracking-wider block">
                        {CAPABILITIES[hoveredIdx].category}
                      </span>
                      <p className="text-xs text-white/80 mt-1">
                        {CAPABILITIES[hoveredIdx].description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* List Rows on the Right */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {CAPABILITIES.map((row, idx) => (
              <Link
                key={row.id}
                href={row.link}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="group flex items-center justify-between py-6 transition-all duration-300 hover:pl-4"
                data-cursor="link"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-[#E3222A]">0{idx + 1}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/50 group-hover:text-white/80 transition-colors">
                      {row.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-[#E3222A] transition-colors">
                    {row.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-1 mt-1 max-w-lg lg:hidden">
                    {row.description}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/20 group-hover:bg-[#E3222A] group-hover:border-[#E3222A] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            ))}

            <div className="pt-8">
              <Button href="/services" variant="primary" size="md" icon>
                Explore All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
