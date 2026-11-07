import { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Portfolio | Case Studies",
  description:
    "Case studies from 10X Creative: performance marketing, creative production and branding for Travelco Holidays, SculptureU, Peacock.lk, Qudhrath Healthcare, Nile Construction and Island Voyages.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-12">

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6 max-w-5xl">
          Work that commands <span className="text-[#E3222A]">attention</span>.
        </h1>
        <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-3xl">
          We don&apos;t just run campaigns - we build systems that drive consistent growth. Explore how we&apos;ve
          helped brands across travel, construction, healthcare and e-commerce turn attention into revenue.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-20">
        <PortfolioGrid />
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0F0F10] text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E3222A]">Let&apos;s build what&apos;s next</span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] mt-4 mb-5 max-w-3xl">
            Your brand could be the <span className="text-[#E3222A]">next case study</span>.
          </h2>
          <p className="text-white/70 max-w-2xl mb-8">
            If you&apos;re looking for a team that understands your business, challenges your thinking and focuses on
            real outcomes, we&apos;re ready to work with you.
          </p>
          <Button href="/contact" variant="primary" size="lg" icon magnetic>
            Start the Conversation
          </Button>
        </div>
      </section>
    </div>
  );
}
