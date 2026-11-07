import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import CaseSections from "@/components/portfolio/CaseSections";
import { CaseCover } from "@/components/portfolio/CaseCard";
import { PORTFOLIO_COMPANIES, getCompanyBySlug } from "@/data/portfolio";

export function generateStaticParams() {
  return PORTFOLIO_COMPANIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return { title: "Case Study Not Found" };
  return {
    title: `${company.name} Case Study | Portfolio`,
    description: company.excerpt,
    openGraph: {
      title: `${company.name} — ${company.headline}`,
      description: company.excerpt,
      images: company.cover ? [{ url: company.cover.src, alt: company.cover.alt }] : undefined,
    },
  };
}

// Static shell; the params-dependent case study streams inside Suspense (same pattern as /blog/[slug]).
export default function CaseStudyPage({ params }: PageProps<"/portfolio/[slug]">) {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      <Suspense fallback={<CaseSkeleton />}>
        <CaseStudyContent params={params} />
      </Suspense>
    </div>
  );
}

function CaseSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-16 animate-pulse" aria-hidden>
      <div className="h-4 w-32 rounded bg-black/10 mb-10" />
      <div className="h-16 w-3/4 rounded bg-black/10 mb-4" />
      <div className="h-16 w-1/2 rounded bg-black/10 mb-10" />
      <div className="aspect-[21/9] w-full rounded-3xl bg-black/10" />
    </div>
  );
}

async function CaseStudyContent({ params }: { params: PageProps<"/portfolio/[slug]">["params"] }) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const idx = PORTFOLIO_COMPANIES.findIndex((c) => c.slug === company.slug);
  const next = PORTFOLIO_COMPANIES[(idx + 1) % PORTFOLIO_COMPANIES.length];

  const facts = [
    { label: "Industry", value: company.industry },
    { label: "Location", value: company.location },
    company.period && { label: "Period", value: company.period },
    company.partnership && { label: "Partnership", value: company.partnership },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 sm:px-10 pb-12">
        <Link
          href="/portfolio"
          data-cursor="link"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] hover:text-[#E3222A] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>

        <span className="block text-xs font-bold uppercase tracking-[0.25em] text-[#E3222A] mb-4">
          Case Study · {company.name}
        </span>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.92] text-[#0F0F10] max-w-5xl">
          {company.headline}
        </h1>

        <div className="flex flex-wrap gap-2 mt-8">
          {company.services.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full bg-white border border-black/5 text-[11px] font-bold uppercase tracking-wider text-[#0F0F10]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="relative mt-10 aspect-[4/3] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden bg-[#0F0F10]">
          <CaseCover company={company} priority sizes="(min-width: 1280px) 1216px, 100vw" />
        </div>

        <dl
          className={`grid gap-px bg-black/10 rounded-3xl overflow-hidden mt-5 ${
            company.headlineStats.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"
          }`}
        >
          {company.headlineStats.map((s) => (
            <div key={s.label} className="bg-white p-6 sm:p-8">
              <dd className="font-display text-4xl sm:text-6xl leading-none text-[#0F0F10]">{s.value}</dd>
              <dt className="text-xs font-bold uppercase tracking-wider text-[#E3222A] mt-3">{s.label}</dt>
              {s.note && <dd className="text-sm text-[#6B6B6B] mt-1">{s.note}</dd>}
            </div>
          ))}
        </dl>
      </header>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-14 sm:py-20 border-t border-black/10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#E3222A] mb-3">Overview</span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.95] text-[#0F0F10]">
              About {company.name}
            </h2>
            <dl className="mt-8 space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 pb-4 border-b border-black/10">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">{f.label}</dt>
                  <dd className="text-sm font-semibold text-[#0F0F10] text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-5">
            {company.overview.map((p) => (
              <p key={p} className="text-lg sm:text-xl text-[#3A3A3A] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-14 sm:pt-20 border-t border-black/10">
        <CaseSections sections={company.sections} />
      </div>

      {/* CTA + next */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-6 pb-24 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0F0F10] text-white">
            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-tight mb-3">
              Want results like <span className="text-[#E3222A]">this</span>?
            </h3>
            <p className="text-white/70 mb-6">
              We build systems that drive consistent growth. Tell us about your goals.
            </p>
            <Button href="/contact" variant="primary" size="md" icon>
              Start the Conversation
            </Button>
          </div>
          <Link
            href={`/portfolio/${next.slug}`}
            data-cursor="view"
            className="group p-8 sm:p-12 rounded-3xl bg-white border border-black/5 flex flex-col justify-between hover:shadow-2xl transition-shadow"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B]">Next case study</span>
            <span className="mt-6">
              <span className="block text-xs font-bold uppercase tracking-widest text-[#E3222A]">{next.industry}</span>
              <span className="flex items-center justify-between gap-4 font-display text-3xl sm:text-5xl uppercase tracking-tight leading-none text-[#0F0F10] group-hover:text-[#E3222A] transition-colors mt-2">
                {next.name}
                <ArrowRight className="w-8 h-8 shrink-0 transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
