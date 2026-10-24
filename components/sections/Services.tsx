"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Megaphone, Share2, Users, Video, Palette, Layout } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { SERVICES, ServiceItem } from "@/data/services";

const iconMap = {
  Megaphone: Megaphone,
  Share2: Share2,
  Users: Users,
  Video: Video,
  Palette: Palette,
  Layout: Layout,
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#FFFFFF] rounded-2xl p-8 border border-black/5 shadow-xs transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
      data-cursor="link"
    >
      {/* Red sweep-up background on hover */}
      <div className="absolute inset-0 bg-[#E3222A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[290px]">
        {/* Top bar with Icon and Number */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="w-13 h-13 rounded-xl bg-[#FFF1F1] group-hover:bg-white text-[#E3222A] flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="font-display text-4xl text-[#0F0F10]/20 group-hover:text-white/40 transition-colors duration-300">
              {service.number}
            </span>
          </div>

          {/* Service Title */}
          <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#0F0F10] group-hover:text-white transition-colors duration-300 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#6B6B6B] group-hover:text-white/90 transition-colors duration-300 leading-relaxed mb-6">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom link indicator */}
        <div className="pt-4 border-t border-black/5 group-hover:border-white/20 transition-colors duration-300 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] group-hover:text-white transition-colors">
            Explore Capability
          </span>
          <div className="w-8 h-8 rounded-full bg-[#F7F7F5] group-hover:bg-white text-[#0F0F10] group-hover:text-[#E3222A] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Clickable Overlay Link */}
      <Link
        href={`/services/${service.slug}`}
        className="absolute inset-0 z-20"
        aria-label={`View ${service.title}`}
      />
    </motion.div>
  );
}
