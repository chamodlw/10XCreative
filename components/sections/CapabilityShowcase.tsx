"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CapabilityBlock from "./capability-showcase/CapabilityBlock";
import MarketingVisual from "./capability-showcase/MarketingVisual";
import CreativeVisual from "./capability-showcase/CreativeVisual";
import TechVisual from "./capability-showcase/TechVisual";
import AnalyticsVisual from "./capability-showcase/AnalyticsVisual";

/* ───────────────────────────────────────────────────────────────────────────
   Intro strip + 4 blocks
   ─────────────────────────────────────────────────────────────────────────── */

export default function CapabilityShowcase() {
  return (
    <div id="services">
      {/* Intro / index strip */}
      <section className="bg-[#F7F7F5] pt-24 sm:pt-32 pb-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-[#0F0F10] max-w-3xl"
          >
            Four engines. <span className="text-[#E3222A]">One growth</span> machine.
          </motion.h2>
          <nav className="flex flex-wrap gap-2">
            {[
              ["01", "Marketing", "#cap-marketing"],
              ["02", "Creative", "#cap-creative"],
              ["03", "Tech Build", "#cap-tech-build"],
              ["04", "Analytics", "#cap-analytics"],
            ].map(([n, l, h]) => (
              <a
                key={h}
                href={h}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/10 bg-white text-xs font-bold uppercase tracking-wider text-[#0F0F10] hover:bg-[#0F0F10] hover:text-white transition-colors"
              >
                <span className="text-[#E3222A]">{n}</span>
                {l}
                <ArrowUpRight className="w-3.5 h-3.5 rotate-90 opacity-50 group-hover:opacity-100" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <CapabilityBlock
        id="cap-marketing"
        number="01"
        label="Marketing"
        title={
          <>
            Campaigns that turn ad spend into <span className="text-[#E3222A]">revenue</span>.
          </>
        }
        description="High-ROAS paid advertising, social media growth, and influencer campaigns engineered around your unit economics — not vanity likes."
        services={["Paid Advertising", "Social Media", "Influencer Marketing", "Lead Generation"]}
        metrics={[
          { value: "4.8X", label: "Avg. ROAS" },
          { value: "-38%", label: "Lower CPL" },
          { value: "$250K+", label: "Spend Managed" },
        ]}
        href="/marketing"
        visual={<MarketingVisual />}
      />

      <CapabilityBlock
        id="cap-creative"
        number="02"
        label="Creative"
        title={
          <>
            Visual disruption that commands <span className="text-[#E3222A]">attention</span>.
          </>
        }
        description="Scroll-stopping Reels and TikToks, 4K cinematic commercials, brand identity systems, and packaging that stay etched in memory."
        services={["Content Creation", "Video Production", "Graphic Design", "Brand Identity"]}
        metrics={[
          { value: "10M+", label: "Viral Views" },
          { value: "60+", label: "Brands Built" },
          { value: "500+", label: "Assets Made" },
        ]}
        href="/creative"
        dark
        reverse
        visual={<CreativeVisual />}
      />

      <CapabilityBlock
        id="cap-tech-build"
        number="03"
        label="Tech Build"
        title={
          <>
            Fast web experiences <span className="text-[#E3222A]">built to convert</span>.
          </>
        }
        description="Bespoke Next.js websites, conversion-engineered landing funnels, and e-commerce stores with local payment gateways — all loading in under a second."
        services={["Web Design", "Landing Funnels", "E-Commerce", "Web Apps"]}
        metrics={[
          { value: "<1s", label: "Load Speed" },
          { value: "98+", label: "Lighthouse" },
          { value: "+185%", label: "Conversion Lift" },
        ]}
        href="/tech-build"
        visual={<TechVisual />}
      />

      <CapabilityBlock
        id="cap-analytics"
        number="04"
        label="Analytics"
        title={
          <>
            Eliminate guesswork with <span className="text-[#E3222A]">data clarity</span>.
          </>
        }
        description="Server-side tracking, multi-touch attribution, CRO, and live ROI dashboards so you know exactly which campaigns make profit."
        services={["Server-Side Tracking", "Attribution", "CRO", "ROI Dashboards"]}
        metrics={[
          { value: "+35%", label: "Data Recovery" },
          { value: "+42%", label: "Conversion Rate" },
          { value: "24/7", label: "Live Access" },
        ]}
        href="/analytics"
        dark
        reverse
        visual={<AnalyticsVisual />}
      />
    </div>
  );
}
