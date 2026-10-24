"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightWord?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlightWord,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  // If highlightWord is given, split the title and style the highlighted word in brand red
  let renderedTitle = <>{title}</>;
  if (highlightWord && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-[#E3222A] relative inline-block">
          {highlightWord}
        </span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  }

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border"
          style={{
            backgroundColor: dark ? "rgba(227,34,42,0.15)" : "#FFF1F1",
            color: "#E3222A",
            borderColor: dark ? "rgba(227,34,42,0.3)" : "#FFD5D7",
          }}
        >
          <span>⚡</span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95] mb-4 ${
          dark ? "text-white" : "text-[#0F0F10]"
        }`}
      >
        {renderedTitle}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? "text-[#ECECEA]/80" : "text-[#6B6B6B]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
