"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, ChevronDown, Check } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { BRAND, CONTACT, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0F0F10] text-white pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Background radial glow & grid effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#E3222A]/15 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top CTA Banner */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div>
              <span className="inline-block text-[#E3222A] text-xs font-bold uppercase tracking-widest mb-3">
                ⚡ Ready to scale your brand?
              </span>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
                LET&apos;S BUILD SOMETHING <span className="text-[#E3222A]">10X</span>.
              </h2>
            </div>
          </div>
        </div>

        {/* 4-Column Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Socials using 10x-Logo2 */}
          <div className="space-y-6">
            <Link href="/" className="relative w-44 h-12 block group" data-cursor="link">
              <Image
                src="/10x-logo2-white.png"
                alt={BRAND.name}
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs">
              {BRAND.shortDescription}
            </p>

            {/* Social Icons that fill red on hover */}
            <div className="flex items-center gap-2.5 pt-2">
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

          {/* Column 2: Quick Links (with mobile accordion toggle) */}
          <div>
            <button
              type="button"
              onClick={() => setMobileLinksOpen(!mobileLinksOpen)}
              className="w-full flex items-center justify-between md:cursor-default text-xs font-bold uppercase tracking-widest text-white mb-4 border-b md:border-b-0 border-white/10 pb-2 md:pb-0"
            >
              <span>Quick Links</span>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${mobileLinksOpen ? "rotate-180" : ""}`} />
            </button>
            <ul className={`space-y-2.5 text-xs ${mobileLinksOpen ? "block" : "hidden md:block"}`}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="link"
                    className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                  >
                    <span>{link.label}</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The 6 Services (with mobile accordion toggle) */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between md:cursor-default text-xs font-bold uppercase tracking-widest text-white mb-4 border-b md:border-b-0 border-white/10 pb-2 md:pb-0"
            >
              <span>Our Services</span>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <ul className={`space-y-2.5 text-xs ${mobileServicesOpen ? "block" : "hidden md:block"}`}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    data-cursor="link"
                    className="text-white/70 hover:text-[#E3222A] transition-colors relative inline-block group"
                  >
                    <span>{s.title}</span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-[#E3222A]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4 text-xs">
            <h3 className="font-bold uppercase tracking-widest text-white">Contact & Office</h3>
            <p className="text-white/70 leading-relaxed">
              {CONTACT.address.full}
            </p>
            <div className="space-y-1 text-white/70">
              <p>
                Phone:{" "}
                <a href={`tel:${CONTACT.phones[0].value}`} className="hover:text-[#E3222A] transition-colors">
                  {CONTACT.phones[0].display}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${CONTACT.phones[1].value}`} className="hover:text-[#E3222A] transition-colors">
                  {CONTACT.phones[1].display}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${CONTACT.emails.primary}`} className="hover:text-[#E3222A] transition-colors">
                  {CONTACT.emails.primary}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href={CONTACT.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  {CONTACT.whatsapp.display}
                </a>
              </p>
            </div>
            <div className="pt-2 text-[11px] text-white/50 border-t border-white/10 space-y-0.5">
              <div>
                <span className="text-[#E3222A] font-bold">Hours:</span> Monday – Friday: 9:00 AM – 6:00 PM
              </div>
              <div className="text-white/40">Saturday: 9:00 AM – 1:00 PM</div>
            </div>
          </div>
        </div>

        {/* Oversized Wordmark — reduced to 7.5vw, forced single line */}
        <div className="relative py-4 select-none text-center overflow-hidden">
          <span className="font-display text-[7.5vw] whitespace-nowrap leading-none uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] block hover:text-white/5 transition-colors duration-500">
            10X <span className="text-[#E3222A] inline-block filter drop-shadow-[0_0_15px_#E3222A]">⚡</span> CREATIVE
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/50">
          <div>
            © {currentYear} 10X Creative (Pvt) Ltd. All Rights Reserved.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#E3222A] transition-colors group pt-1 sm:pt-0"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
