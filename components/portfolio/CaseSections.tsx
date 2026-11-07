import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import CaseGallery from "./CaseGallery";
import type { CaseSection } from "@/data/portfolio";

function Heading({ eyebrow, heading, intro }: { eyebrow?: string; heading: string; intro?: string }) {
  return (
    <div className="max-w-3xl mb-10">
      {eyebrow && (
        <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#E3222A] mb-3">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight leading-[0.95] text-[#0F0F10]">{heading}</h2>
      {intro && <p className="text-base sm:text-lg text-[#3A3A3A] leading-relaxed mt-5">{intro}</p>}
    </div>
  );
}

function Outro({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mt-10 pl-5 border-l-4 border-[#E3222A] text-lg sm:text-xl text-[#0F0F10] leading-snug max-w-3xl">{text}</p>
  );
}

function Bullets({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? "space-y-2.5" : "grid sm:grid-cols-2 gap-x-10 gap-y-4"}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 text-[#3A3A3A] leading-relaxed ${compact ? "text-sm" : "text-base sm:text-lg"}`}
        >
          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#E3222A] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: CaseSection }) {
  switch (section.type) {
    case "text":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} />
          <div className="max-w-3xl space-y-5">
            {section.body.map((p) => (
              <p key={p} className="text-base sm:text-lg text-[#3A3A3A] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </>
      );

    case "list":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <Bullets items={section.items} />
          <Outro text={section.outro} />
        </>
      );

    case "columns":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <div
            className={`grid gap-5 ${section.columns.length >= 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}
          >
            {section.columns.map((col) => (
              <div key={col.title} className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5">
                <h3 className="font-display text-xl uppercase tracking-tight text-[#0F0F10] mb-5">{col.title}</h3>
                <Bullets items={col.items} compact />
              </div>
            ))}
          </div>
          <Outro text={section.outro} />
        </>
      );

    case "steps":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none">
            {section.steps.map((s, i) => (
              <li key={s.title} className="relative bg-[#0F0F10] text-white rounded-3xl p-6 overflow-hidden">
                <span className="font-display text-5xl leading-none text-[#E3222A]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl uppercase tracking-tight mt-4">{s.title}</h3>
                {s.body && <p className="text-sm text-white/70 leading-relaxed mt-2">{s.body}</p>}
              </li>
            ))}
          </ol>
          <Outro text={section.outro} />
        </>
      );

    case "stats":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <dl
            className={`grid gap-px bg-black/10 rounded-3xl overflow-hidden ${
              section.stats.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : section.stats.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {section.stats.map((s) => (
              <div key={s.label} className="bg-white p-6 sm:p-8">
                <dd
                  className={`font-display leading-none text-[#0F0F10] whitespace-nowrap ${
                    section.stats.length > 3
                      ? "text-[clamp(1.4rem,6vw,2.25rem)] lg:text-[clamp(1.75rem,3vw,3rem)]"
                      : "text-4xl sm:text-[clamp(2rem,4.5vw,3.75rem)]"
                  }`}
                >
                  {s.value}
                </dd>
                <dt className="text-xs font-bold uppercase tracking-wider text-[#E3222A] mt-3">{s.label}</dt>
                {s.note && <dd className="text-sm text-[#6B6B6B] leading-snug mt-2">{s.note}</dd>}
              </div>
            ))}
          </dl>
          <Outro text={section.outro} />
        </>
      );

    case "gallery":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <CaseGallery images={section.images} layout={section.layout} />
          {section.links && (
            <div className="flex flex-wrap gap-3 mt-8">
              {section.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0F0F10]/20 text-xs font-bold uppercase tracking-wider text-[#0F0F10] hover:bg-[#E3222A] hover:border-[#E3222A] hover:text-white transition-colors"
                >
                  {l.label} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          )}
        </>
      );

    case "social":
      return (
        <>
          <Heading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {section.platforms.map((p) => (
              <li key={p.name} className="bg-white rounded-3xl p-6 border border-black/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B]">{p.name}</span>
                <span className="block font-display text-3xl sm:text-4xl leading-none text-[#0F0F10] mt-3">{p.count}</span>
                <span className="block text-xs text-[#6B6B6B] mt-1">{p.unit}</span>
              </li>
            ))}
          </ul>
        </>
      );

    case "quote":
      return (
        <figure className="rounded-3xl bg-[#0F0F10] text-white p-8 sm:p-14">
          <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#E3222A] mb-6">Client Testimonial</span>
          <Quote className="w-10 h-10 text-[#E3222A] mb-6" aria-hidden />
          <blockquote className="space-y-5 max-w-4xl">
            {section.quote.map((q) => (
              <p key={q} className="text-lg sm:text-2xl leading-snug text-white/90">
                {q}
              </p>
            ))}
          </blockquote>
          <figcaption className="flex items-center gap-4 mt-10">
            {section.avatar && (
              <span className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#E3222A]">
                <Image src={section.avatar} alt={section.author} fill sizes="56px" className="object-cover" />
              </span>
            )}
            <span>
              <span className="block font-display text-xl uppercase tracking-tight">{section.author}</span>
              <span className="block text-xs text-white/60 uppercase tracking-wider mt-0.5">{section.role}</span>
            </span>
          </figcaption>
        </figure>
      );
  }
}

export default function CaseSections({ sections }: { sections: CaseSection[] }) {
  return (
    <div className="divide-y divide-black/10">
      {sections.map((section, i) => (
        <section key={i} className="py-14 sm:py-20 first:pt-0">
          <Section section={section} />
        </section>
      ))}
    </div>
  );
}
