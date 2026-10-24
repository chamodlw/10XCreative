"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ease-out flex justify-center ${
          isScrolled ? "pt-3 sm:pt-4 px-4 sm:px-6" : "pt-4 sm:pt-6 px-6 sm:px-12"
        }`}
      >
        <motion.div
          layout
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "w-full max-w-[1140px] bg-white/90 backdrop-blur-xl border border-black/8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-full px-5 py-2.5"
              : "w-full bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo on the Left using 10x-Logo.png (wide wordmark) */}
          <Link
            href="/"
            className="relative flex items-center shrink-0 group focus:outline-none"
            data-cursor="link"
          >
            <div className={`relative transition-all duration-300 ${isScrolled ? "w-36 h-8" : "w-44 h-10"}`}>
              <Image
                src="/10x-logo.png"
                alt="10X Creative"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Center */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="link"
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 group ${
                    isActive ? "text-[#E3222A]" : "text-[#0F0F10] hover:text-[#E3222A]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {isActive && <span className="text-[10px]">⚡</span>}
                  </span>

                  {/* Active Indicator layout animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#FFF1F1] rounded-full -z-0 border border-[#FFD5D7]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover Underline subtle animation */}
                  {!isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#E3222A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                magnetic
                icon
                className="!text-[11px] !px-5 !py-2.5 font-bold"
              >
                Request a Quote
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F10] text-white hover:bg-[#E3222A] transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
