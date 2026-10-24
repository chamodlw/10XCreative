import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ChevronDown, Megaphone, Share2, Users, Video, Palette, Layout } from "lucide-react";
import Button from "@/components/ui/Button";
import { SERVICES, ServiceItem } from "@/data/services";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

const iconMap = {
  Megaphone,
  Share2,
  Users,
  Video,
  Palette,
  Layout,
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | 10X Creative",
    };
  }

  return {
    title: `${service.title} | 10X Creative Sri Lanka`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Megaphone;

  // Find portfolio items related to this service
  const relatedPortfolio = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5]">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] hover:text-[#E3222A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider border border-[#FFD5D7]">
              <span>⚡</span> SERVICE {service.number}
            </div>

            <h1 className="font-display text-5xl sm:text-7xl uppercase tracking-tight leading-[0.9] text-[#0F0F10]">
              {service.title}
            </h1>

            <p className="text-xl font-medium text-[#E3222A] leading-snug">
              {service.headline}
            </p>

            <p className="text-base text-[#6B6B6B] leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg" icon magnetic>
                Get a Custom Proposal
              </Button>
              <Button
                href="https://wa.me/94763711125?text=Hi%2010X%20Creative%2C%20I%20want%20to%20discuss%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20">
              <div className="grid grid-cols-3 gap-2 text-center">
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="border-r last:border-r-0 border-black/10">
                    <span className="font-display text-xl text-[#E3222A] block">{m.value}</span>
                    <span className="text-[10px] text-[#6B6B6B] font-semibold uppercase">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & What's Included */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase text-[#E3222A] tracking-wider block mb-2">
              ⚡ DELIVERABLES & SCOPE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#0F0F10]">
              WHAT IS INCLUDED IN THIS SERVICE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F7F5] border border-black/5 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF1F1] text-[#E3222A] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F0F10] mb-1">
                    {item}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    Designed to maximize conversions and establish distinct market superiority.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase text-[#E3222A] tracking-wider block mb-2">
            ⚡ EXECUTION ROADMAP
          </span>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#0F0F10]">
            OUR STRATEGIC PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-[#E3222A]/40 transition-colors"
            >
              <span className="font-display text-4xl text-[#E3222A] block mb-3">
                {step.step}
              </span>
              <h3 className="font-display text-xl uppercase tracking-wider text-[#0F0F10] mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#0F0F10] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase text-[#E3222A] tracking-wider block mb-2">
              ⚡ FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
              COMMON INQUIRIES ABOUT {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-white/[0.04] border border-white/10 open:border-[#E3222A]/50 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#E3222A] transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-[#E3222A] transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <p className="text-xs sm:text-sm text-white/70 mt-4 leading-relaxed pt-3 border-t border-white/10">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio Samples */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase text-[#E3222A] tracking-wider block mb-2">
              ⚡ CASE STUDIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#0F0F10]">
              RELATED CLIENT OUTCOMES
            </h2>
          </div>
          <Button href="/portfolio" variant="outline" size="md" icon>
            View Full Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPortfolio.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md border border-black/5"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold text-[#E3222A] uppercase tracking-wider block mb-1">
                  {item.client}
                </span>
                <h3 className="font-display text-xl uppercase tracking-tight text-white mb-1">
                  {item.title}
                </h3>
                <span className="text-xs text-[#25D366] font-semibold">
                  ⚡ {item.results}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-24 bg-[#E3222A] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight mb-6">
            READY TO LEVEL UP WITH {service.title}?
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-xl mx-auto">
            Contact us today for a free initial audit, custom scope proposal, and clear timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white" size="lg" icon>
              Get Started Now
            </Button>
            <Button
              href="https://wa.me/94763711125"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              WhatsApp Us (+94 76 371 1125)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
