"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  const [showNotificationBadge, setShowNotificationBadge] = useState(false);

  useEffect(() => {
    const badgeTimer = setTimeout(() => {
      setShowNotificationBadge(true);
    }, 3000);

    return () => clearTimeout(badgeTimer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end pointer-events-none select-none">
      <div className="relative pointer-events-auto flex items-center">
        {/* WhatsApp Button Wrapper */}
        <motion.a
          href={CONTACT.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with 10X Creative on WhatsApp"
          data-cursor="link"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative group flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Pulsing Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring -z-10 pointer-events-none" />

          {/* Rotating Text Badge on Desktop */}
          <div className="absolute -inset-3.5 hidden md:block pointer-events-none animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="waCirclePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] font-bold uppercase tracking-[2px] fill-[#0F0F10]">
                <textPath href="#waCirclePath" startOffset="0%">
                  CHAT WITH US • CHAT WITH US •
                </textPath>
              </text>
            </svg>
          </div>

          {/* WhatsApp Icon with Hover Wiggle */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <FaWhatsapp className="w-8 h-8 text-white drop-shadow-sm" />
          </motion.div>

          {/* Notification Counter Badge */}
          <AnimatePresence>
            {showNotificationBadge && (
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                }}
                className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#E3222A] text-white text-[11px] font-bold border-2 border-white shadow-md"
              >
                1
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </div>
    </div>
  );
}
