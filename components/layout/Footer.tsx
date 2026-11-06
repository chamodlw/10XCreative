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
import { BRAND, CONTACT } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

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

        {/* ── 4-COLUMN ARCHITECTURE GRID ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Column 1: Brand & Office Status */}
          <div className="space-y-6">
            <Link href="/" className="relative w-44 h-12 block group" data-cursor="link">
              <Image
                src="/10x-logo-white.png"
                alt={BRAND.name}
                fill
                sizes="176px"
                className="object-contain"
              />
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {BRAND.shortDescription}
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
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E3222A] hover:border-[#E3222A] transition-all duration-300 group"
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

          {/* Column 2: Growth Pillars (Capabilities) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3222A]" />
              Growth Pillars
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Marketing", href: "/marketing" },
                { label: "Creative", href: "/creative" },
                { label: "Tech Build", href: "/tech-build" },
                { label: "Analytics", href: "/analytics" },
              ].map((link) => (
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
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3222A]" />
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact Us", href: "/contact" },
                { label: "Blogs", href: "/blog" },
              ].map((link) => (
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
            <Link href="/privacy-policy" data-cursor="link" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-white/20">•</span>
            <Link href="/terms-of-service" data-cursor="link" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/40">Powered by 10XCreative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
