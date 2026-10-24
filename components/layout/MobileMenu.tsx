"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { NAV_LINKS, CONTACT, BRAND } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const containerVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.25 },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[150] bg-[#0F0F10] text-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#E3222A]/10 blur-[100px] pointer-events-none" />

      {/* Top Bar with 10x-Logo2 and Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Link href="/" onClick={onClose} className="relative w-36 h-10 block">
          <Image
            src="/10x-logo2-white.png"
            alt={BRAND.name}
            fill
            className="object-contain"
          />
        </Link>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close menu"
          className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E3222A] transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Navigation Links (Big Condensed Staggered) */}
      <div className="py-8 flex flex-col space-y-4">
        {NAV_LINKS.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between py-2 text-4xl sm:text-5xl font-display uppercase tracking-tight"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#E3222A]">0{idx + 1}</span>
                  <span
                    className={`transition-colors duration-200 ${
                      isActive ? "text-[#E3222A]" : "text-white group-hover:text-[#E3222A]"
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-[#E3222A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="pt-2 pb-6">
        <Button
          href="/contact"
          onClick={onClose}
          variant="primary"
          size="lg"
          icon
          className="w-full text-center py-4"
        >
          Let’s Chat & Grow
        </Button>
      </div>

      {/* Footer Contact Details & Socials */}
      <div className="border-t border-white/10 pt-6 text-xs text-white/70 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="font-bold text-white uppercase tracking-wider mb-1">Direct Contact</p>
            <p className="hover:text-[#E3222A] transition-colors">
              <a href={`tel:${CONTACT.phones[0].value}`}>{CONTACT.phones[0].display}</a>
            </p>
            <p className="hover:text-[#E3222A] transition-colors">
              <a href={`mailto:${CONTACT.emails.primary}`}>{CONTACT.emails.primary}</a>
            </p>
          </div>
          <div>
            <p className="font-bold text-white uppercase tracking-wider mb-1">Colombo Office</p>
            <p className="leading-relaxed">{CONTACT.address.full}</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E3222A] transition-colors"
            >
              <FaInstagram className="w-4 h-4 text-white" />
            </a>
            <a
              href={CONTACT.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E3222A] transition-colors"
            >
              <FaFacebookF className="w-4 h-4 text-white" />
            </a>
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
            </a>
            <a
              href={CONTACT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E3222A] transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4 text-white" />
            </a>
          </div>

          <span className="text-[11px] font-mono text-white/50">
            Colombo, Sri Lanka ⚡
          </span>
        </div>
      </div>
    </motion.div>
  );
}
