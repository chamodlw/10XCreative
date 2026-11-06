import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { CAPABILITIES, CapabilityLink } from "@/data/capabilities";

interface ServiceCTAProps {
  current: CapabilityLink["key"];
  eyebrow: string;
  title: string;
  text: string;
  primaryLabel: string;
  secondaryLabel: string;
  marqueeWords: string[];
}

/**
 * Closing block for each capability page: red CTA panel with a kinetic
 * marquee, followed by cross-links to the other three capabilities.
 */
export default function ServiceCTA({
  current,
  eyebrow,
  title,
  text,
  primaryLabel,
  secondaryLabel,
  marqueeWords,
}: ServiceCTAProps) {
  const others = CAPABILITIES.filter((c) => c.key !== current);

  return (
    <>
      <section className="py-24 sm:py-28 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="relative rounded-[2rem] bg-[#E3222A] text-white overflow-hidden">
          {/* Marquee band */}
          <div className="py-5 border-b border-white/20 bg-[#B8141C]/40">
            <Marquee speed={30} pauseOnHover={false}>
              {marqueeWords.map((w, i) => (
                <span key={i} className="font-display text-2xl sm:text-3xl uppercase tracking-tight px-6 flex items-center gap-6">
                  {w}
                  <span className="text-white/40">✦</span>
                </span>
              ))}
            </Marquee>
          </div>

          <div className="relative p-10 sm:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div className="absolute -right-20 -top-10 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[3px] text-white/80 mb-4 inline-block">
                ⚡ {eyebrow}
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95]">{title}</h2>
            </div>
            <div className="relative">
              <p className="text-base text-white/85 leading-relaxed mb-8">{text}</p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="white" size="lg" icon magnetic>
                  {primaryLabel}
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg" icon>
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other capabilities */}
      <section className="pb-24 sm:pb-32 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#0F0F10]">
            Explore other capabilities
          </h2>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F0F10] hover:text-[#E3222A] transition-colors"
          >
            All services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {others.map((c) => (
            <Link
              key={c.key}
              href={c.href}
              className="group relative p-8 rounded-3xl bg-white border border-black/5 overflow-hidden hover:border-[#0F0F10] transition-colors"
              data-cursor="link"
            >
              <span className="absolute inset-0 bg-[#0F0F10] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-display text-xl text-[#E3222A]">{c.number}</span>
                  <span className="w-10 h-10 rounded-full bg-[#F7F7F5] text-[#0F0F10] flex items-center justify-center group-hover:bg-[#E3222A] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="font-display text-4xl uppercase tracking-tight text-[#0F0F10] group-hover:text-white transition-colors mb-2">
                  {c.label}
                </h3>
                <p className="text-sm text-[#6B6B6B] group-hover:text-white/70 transition-colors">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
