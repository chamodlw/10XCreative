import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/constants";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  highlight: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
  related: { label: string; href: string };
}

/**
 * Shared layout for Privacy Policy and Terms of Service:
 * hero, sticky table of contents on desktop, numbered sections, contact card.
 */
export default function LegalPage({ title, highlight, intro, effectiveDate, sections, related }: LegalPageProps) {
  const [before, ...rest] = title.split(highlight);
  const after = rest.join(highlight);

  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-12 sm:pb-16 border-b border-black/10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            {before}
            <span className="text-[#E3222A]">{highlight}</span>
            {after}
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl mb-6">{intro}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/5 text-[#0F0F10]">
              Effective: {effectiveDate}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/5 text-[#6B6B6B]">{BRAND.legalName}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
        {/* TOC */}
        <aside className="hidden lg:block">
          <nav className="sticky top-32">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-[#6B6B6B] mb-4">On this page</span>
            <ol className="space-y-2.5 border-l border-black/10">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    data-cursor="link"
                    className="flex gap-2 -ml-px pl-4 border-l-2 border-transparent hover:border-[#E3222A] text-sm text-[#6B6B6B] hover:text-[#0F0F10] transition-colors"
                  >
                    <span className="font-mono text-[#E3222A] text-xs pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="max-w-3xl">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <article key={s.id} id={s.id} className="scroll-mt-32">
                <h2 className="flex items-baseline gap-3 font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#0F0F10] mb-4">
                  <span className="font-mono text-sm text-[#E3222A]">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="legal-body space-y-4 text-[15px] leading-relaxed text-[#3d3d40] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-[#E3222A] [&_strong]:text-[#0F0F10] [&_a]:text-[#E3222A] [&_a]:underline [&_a]:underline-offset-2">
                  {s.body}
                </div>
              </article>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0F0F10] text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#E3222A]/30 blur-3xl pointer-events-none" />
            <h2 className="relative font-display text-3xl sm:text-4xl uppercase tracking-tight mb-3">Questions?</h2>
            <p className="relative text-sm text-white/70 mb-6 max-w-lg">
              If anything on this page is unclear, contact {BRAND.legalName} and we will be happy to help.
            </p>
            <div className="relative space-y-2.5 text-sm text-white/80">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E3222A] shrink-0" />
                <a href={`mailto:${CONTACT.emails.primary}`} className="hover:text-white">{CONTACT.emails.primary}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E3222A] shrink-0" />
                <a href={`tel:${CONTACT.phones[0].value}`} className="hover:text-white">{CONTACT.phones[0].display}</a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E3222A] shrink-0 mt-0.5" />
                <span>{CONTACT.address.full}</span>
              </p>
            </div>
            <Link
              href={related.href}
              data-cursor="link"
              className="group relative mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0F0F10] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-[#E3222A] hover:text-white transition-colors"
            >
              Read our {related.label} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
