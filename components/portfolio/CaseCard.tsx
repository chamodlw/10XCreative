import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioCompany } from "@/data/portfolio";

/** Cover used on cards and the detail hero. Falls back to a typographic brand panel. */
export function CaseCover({
  company,
  sizes,
  priority = false,
  className = "",
}: {
  company: PortfolioCompany;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (company.cover) {
    return (
      <Image
        src={company.cover.src}
        alt={company.cover.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition: company.cover.position ?? "center" }}
        className={`object-cover ${className}`}
      />
    );
  }

  const stat = company.headlineStats[0];
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 100% 0%, rgba(227,34,42,0.55) 0%, transparent 55%), linear-gradient(140deg, ${company.brandColor} 0%, #0F0F10 100%)`,
      }}
      aria-hidden
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">{company.industry}</span>
      <div>
        <span className="block font-display text-6xl sm:text-7xl leading-none tracking-tight">{stat.value}</span>
        <span className="block mt-2 text-xs font-bold uppercase tracking-widest text-white/75">{stat.label}</span>
      </div>
    </div>
  );
}

export default function CaseCard({ company, priority = false }: { company: PortfolioCompany; priority?: boolean }) {
  return (
    <Link
      href={`/portfolio/${company.slug}`}
      data-cursor="view"
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white p-3.5 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0F0F10]">
        <CaseCover
          company={company}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10]/85 via-[#0F0F10]/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-end justify-between gap-x-3 gap-y-2">
          <span className="text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">{company.name}</span>
          <div className="ml-auto flex flex-col-reverse items-end gap-1.5">
            {company.categories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-1 rounded-full bg-white/95 text-[#0F0F10] text-[10px] font-bold uppercase tracking-wider shadow-sm whitespace-nowrap"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 pt-5 pb-2 flex flex-col flex-grow">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E3222A] mb-2">{company.industry}</span>
        <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight leading-tight text-[#0F0F10] group-hover:text-[#E3222A] transition-colors mb-2">
          {company.headline}
        </h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">{company.excerpt}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-4 border-t border-black/5">
          <dl className="flex gap-5">
            {company.headlineStats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-lg sm:text-xl leading-none text-[#0F0F10]">{s.value}</dd>
                <dd className="text-[9px] font-bold uppercase tracking-wider text-[#6B6B6B] mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
          <span className="w-9 h-9 rounded-full bg-[#F7F7F5] group-hover:bg-[#E3222A] group-hover:text-white text-[#0F0F10] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
