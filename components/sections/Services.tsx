"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Megaphone, Share2, Users, Video, Palette, Layout } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SERVICES, ServiceItem } from "@/data/services";

// Map slug → local image from /public/images/services/
const SERVICE_IMAGES: Record<string, string> = {
  "paid-advertising":         "/images/services/paid-advertising.jpg",
  "social-media-marketing":   "/images/services/social-media-marketing.jpg",
  "influencer-marketing":     "/images/services/influencer-marketing.jpg",
  "content-creation":         "/images/services/content-creation.jpg",
  "graphic-designing":        "/images/services/graphic-designing.jpg",
  "web-designing":            "/images/services/web-designing.jpg",
};

const iconMap = {
  Megaphone,
  Share2,
  Users,
  Video,
  Palette,
  Layout,
};

export default function Services() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionTitle
            badge="OUR CORE CAPABILITIES"
            title="TAILORED DIGITAL SOLUTIONS THAT DELIVER RESULTS."
            highlightWord="RESULTS"
            subtitle="From strategy to execution, we craft data-driven campaigns that accelerate growth and maximize ROI."
          />
          <div className="shrink-0 hidden md:block">
            <Button href="/services" variant="outline" size="md" icon>
              View All Services
            </Button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Button href="/services" variant="outline" size="md" icon className="w-full">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const IconComponent = iconMap[service.iconName] || Megaphone;
  const imgSrc = SERVICE_IMAGES[service.slug] || service.heroImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#FFFFFF] rounded-2xl border border-black/5 shadow-xs transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl min-h-[290px]"
      data-cursor="link"
    >
      {/* ── Background Image — anchored top-left, crops from bottom-right ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgSrc}
          alt={service.title}
          fill
          className="object-cover object-left-top opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* ── Bottom gradient overlay (only on hover) ── */}
      <div className="absolute inset-0 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* ── Default card content (fades out on hover) ── */}
      <div className="relative z-10 flex flex-col h-full p-8 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-13 h-13 rounded-xl bg-[#FFF1F1] text-[#E3222A] flex items-center justify-center">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Service Title */}
        <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#0F0F10] mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* EXPLORE CAPABILITY */}
        <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10]">
            Explore Capability
          </span>
          <div className="w-8 h-8 rounded-full bg-[#F7F7F5] text-[#0F0F10] flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Hover state: EXPLORE CAPABILITY only, pinned to bottom ── */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
        <div className="flex items-center justify-between pt-4 border-t border-white/30">
          <span className="text-xs font-bold uppercase tracking-[2px] text-white">
            EXPLORE CAPABILITY
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
      </div>

      {/* Clickable full-card link */}
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-20"
        aria-label={`View ${service.title}`}
      />
    </motion.div>
  );
}
