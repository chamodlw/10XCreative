"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Compass,
  Layers,
  ChevronDown,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { BRAND, CONTACT, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 4000);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0A0A0B] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Background radial glow & decorative grid */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#E3222A]/12 blur-[180px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#E3222A]/6 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* ── TOP HERO CTA BANNER ────────────────────────────────────────────── */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-[#E3222A] text-xs font-bold uppercase tracking-widest mb-4 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span>⚡</span> READY TO 10X YOUR GROWTH?
              </span>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
                LET&apos;S BUILD SOMETHING <span className="text-[#E3222A]">UNFORGETTABLE</span>.
              </h2>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <MagneticButton strength={0.35}>
                <Link
                  href="/contact"
                  data-cursor="link"
                  className="px-8 py-4 rounded-full bg-[#E3222A] hover:bg-[#B8141C] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(227,34,42,0.5)] transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </MagneticButton>

              <a
                href={CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2.5"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── CREATIVE SHOWCASE: ABOUT US & SERVICES SPOTLIGHT ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10">
          {/* Spotlight Card 1: ABOUT 10X CREATIVE (Creative Way) */}
          <div className="lg:col-span-5 relative group">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 hover:border-[#E3222A]/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E3222A]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#E3222A]/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E3222A] flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> ABOUT 10X CREATIVE
                  </span>
                  <span className="text-[10px] font-mono uppercase text-white/50 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    Colombo, Sri Lanka
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mb-4">
                  WE DON&apos;T CHASE VANITY METRICS. <br className="hidden sm:inline" />
                  WE DELIVER <span className="text-[#E3222A]">REAL REVENUE</span>.
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  Founded by Ajwad Ameer in Colombo 04, 10X Creative was built to challenge traditional agencies that deliver hollow vanity likes. We fuse high-performing paid ads, viral storytelling, and ultra-fast Next.js engineering to build enduring digital giants.
                </p>

                {/* Key agency badge pill stats */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 mb-6 text-center">
                  <div>
                    <span className="font-display text-xl text-[#E3222A] block">5+</span>
                    <span className="text-[10px] uppercase tracking-wider text-white/60">Years Scaling</span>
                  </div>
                  <div>
                    <span className="font-display text-xl text-white block">100+</span>
                    <span className="text-[10px] uppercase tracking-wider text-white/60">Campaigns</span>
                  </div>
                  <div>
                    <span className="font-display text-xl text-[#25D366] block">&lt;1s</span>
                    <span className="text-[10px] uppercase tracking-wider text-white/60">Web Speeds</span>
                  </div>
                </div>
              </div>

              {/* Action buttons to About sections */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/about"
                  data-cursor="link"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E3222A] hover:bg-[#B8141C] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <span>Our Story & Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about#team"
                  data-cursor="link"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Meet Team</span>
                </Link>
                <Link
                  href="/about#framework"
                  data-cursor="link"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>5-Stage Framework</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Spotlight Card 2: CORE SERVICES MATRIX (Creative Way) */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent border border-white/10 hover:border-[#E3222A]/40 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E3222A] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> SERVICES DIRECTORY
                  </span>
                  <Link
                    href="/services"
                    data-cursor="link"
                    className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#E3222A] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mb-6">
                  FULL-SPECTRUM DIGITAL FIREPOWER.
                </h3>

                {/* 6 Services Creative Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      data-cursor="link"
                      className="group/srv p-4 rounded-2xl bg-white/[0.025] hover:bg-white/[0.07] border border-white/8 hover:border-[#E3222A]/40 transition-all duration-300 flex flex-col justify-between min-h-[115px]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-[#E3222A] font-bold">
                          {s.number}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover/srv:text-[#E3222A] group-hover/srv:translate-x-0.5 group-hover/srv:-translate-y-0.5 transition-all" />
                      </div>
                      <div>
                        <h4 className="font-display text-sm uppercase tracking-wide text-white group-hover/srv:text-[#E3222A] transition-colors leading-tight">
                          {s.title}
                        </h4>
                        <span className="text-[10px] text-white/50 block mt-1 line-clamp-1">
                          {s.highlights[0]}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service guarantee note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Customized solutions tailored for Sri Lankan & international markets.
                </span>
                <Link
                  href="/services"
                  data-cursor="link"
                  className="text-[#E3222A] font-bold uppercase tracking-wider hover:underline"
                >
                  Explore Capabilities →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4-COLUMN ARCHITECTURE GRID ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Column 1: Brand & Office Status */}
          <div className="space-y-6">
            <Link href="/" className="relative w-44 h-12 block group" data-cursor="link">
              <Image
                src="/10x-logo2-white.png"
                alt={BRAND.name}
                fill
                sizes="176px"
                className="object-contain"
              />
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-xs">
              {BRAND.fullDescription}
            </p>

            {/* Live Office Status */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Colombo Office (UTC+5:30)</span>
            </div>

            {/* Social Icons that fill red on hover */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-cursor="link"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E3222A] hover:border-[#E3222A] transition-all duration-300 group"
              >
                <FaInstagram className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                data-cursor="link"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E3222A] hover:border-[#E3222A] transition-all duration-300 group"
              >
                <FaFacebookF className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={CONTACT.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                data-cursor="link"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 group"
              >
                <FaWhatsapp className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={CONTACT.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-cursor="link"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E3222A] hover:border-[#E3222A] transition-all duration-300 group"
              >
                <FaLinkedinIn className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Growth Pillars (Header Tags) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3222A]" />
              Growth Pillars
            </h4>
            <ul className="space-y-3 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="link"
                    className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#E3222A] opacity-60 group-hover:opacity-100">→</span>
                      <span>{link.label}</span>
                    </span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  data-cursor="link"
                  className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#E3222A] opacity-60 group-hover:opacity-100">→</span>
                    <span>Contact Us</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About & Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3222A]" />
              About & Operations
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link
                  href="/about"
                  data-cursor="link"
                  className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                >
                  <span>Our Vision & Mission</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  data-cursor="link"
                  className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                >
                  <span>Leadership & Ajwad Ameer</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about#framework"
                  data-cursor="link"
                  className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                >
                  <span>The 5-Stage Framework</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  data-cursor="link"
                  className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                >
                  <span>Full Services Overview</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  data-cursor="link"
                  className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                >
                  <span>Featured Case Studies</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div className="space-y-4 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3222A]" />
              Colombo Headquarters
            </h4>
            <p className="text-white/70 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#E3222A] shrink-0 mt-0.5" />
              <span>{CONTACT.address.full}</span>
            </p>
            <div className="space-y-2 pt-2 border-t border-white/10 text-white/70">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
                <a href={`tel:${CONTACT.phones[0].value}`} className="hover:text-white transition-colors">
                  {CONTACT.phones[0].display}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
                <a href={`mailto:${CONTACT.emails.primary}`} className="hover:text-white transition-colors">
                  {CONTACT.emails.primary}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
                <a href={CONTACT.whatsapp.link} className="hover:text-white transition-colors">
                  {CONTACT.whatsapp.display}
                </a>
              </p>
            </div>
            <div className="pt-2 text-[11px] text-white/50 border-t border-white/10 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E3222A] shrink-0" />
              <span>Mon – Fri: 9:00 AM – 6:00 PM | Sat: 9:00 AM – 1:00 PM</span>
            </div>
          </div>
        </div>

        {/* ── OVERSIZED BRAND SIGNATURE ────────────────────────────────────── */}
        <div className="relative py-6 select-none text-center overflow-hidden">
          <span className="font-display text-[7.5vw] whitespace-nowrap leading-none uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] block hover:text-white/5 transition-colors duration-500">
            10X <span className="text-[#E3222A] inline-block filter drop-shadow-[0_0_15px_#E3222A]">⚡</span> CREATIVE
          </span>
        </div>

        {/* ── BOTTOM COPYRIGHT BAR ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/50">
          <div>
            © <span suppressHydrationWarning>{currentYear}</span> 10X Creative (Pvt) Ltd. All Rights Reserved.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/40">Engineered with Next.js in Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
