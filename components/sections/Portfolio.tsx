import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CaseCard from "@/components/portfolio/CaseCard";
import { PORTFOLIO_COMPANIES } from "@/data/portfolio";

const FEATURED = ["travelco-holidays", "sculptureu", "peacock-lk"];

export default function Portfolio() {
  const items = FEATURED.map((slug) => PORTFOLIO_COMPANIES.find((c) => c.slug === slug)!).filter(Boolean);

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] relative overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            badge="OUR PORTFOLIO"
            title="FEATURED WORK THAT DRIVES REAL GROWTH."
            highlightWord="GROWTH"
            subtitle="Real case studies across paid media, creative production and branding — with the numbers to back them up."
          />
          <div className="shrink-0 hidden md:block">
            <Button href="/portfolio" variant="outline" size="md" icon>
              All Case Studies
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((company) => (
            <CaseCard key={company.slug} company={company} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="primary" size="md" icon magnetic>
            View More Work in Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
