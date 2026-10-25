import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, Megaphone, Share2, Users, Video, Palette, Layout } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Solutions | Services | 10X Creative",
  description:
    "Explore 10X Creative's 6 core services: Paid Advertising, Social Media Marketing, Influencer Marketing, Content Creation, Graphic Designing, and Web Designing.",
};

const iconMap = {
  Megaphone,
  Share2,
  Users,
  Video,
  Palette,
  Layout,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5]">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> OUR SERVICES & EXPERTISE
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            SOLUTIONS CRAFTED FOR <span className="text-[#E3222A]">SCALE</span>.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            From precision paid ad campaigns and viral short-form video to brand identities and Next.js web applications, we provide end-to-end digital firepower.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.iconName] || Megaphone;
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-white border border-black/5 shadow-xs hover:border-[#E3222A]/30 transition-all ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <div className={`lg:col-span-6 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-md ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white text-[#E3222A] flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="font-display text-4xl text-white/40">{service.number}</span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#E3222A] px-3 py-1 rounded-full">
                    {service.metrics[0].label}: {service.metrics[0].value}
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[#E3222A] font-bold">{service.number}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">Core Discipline</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#0F0F10]">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 pt-2">
                  {service.highlights.slice(0, 4).map((hl, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                      <div className="w-5 h-5 rounded-full bg-[#FFF1F1] text-[#E3222A] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="primary"
                    size="md"
                    icon
                  >
                    View Service Details
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="md"
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0F0F10] text-white text-center mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[#E3222A] text-xs font-bold uppercase tracking-widest block mb-4">
            ⚡ CUSTOM PROPOSALS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight mb-6">
            NOT SURE WHICH SERVICE SUITS YOUR CURRENT STAGE?
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-xl mx-auto">
            Book a 20-minute discovery consultation. Our founders will audit your digital footprint and propose the highest-leverage growth channel.
          </p>
          <Button href="/contact" variant="primary" size="lg" icon magnetic>
            Book Free Audit & Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
