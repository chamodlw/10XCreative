"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CaseCard from "./CaseCard";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_COMPANIES } from "@/data/portfolio";

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");

  const items = PORTFOLIO_COMPANIES.filter((c) => active === "All" || c.categories.includes(active));

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 border-b border-black/10 pb-4 mb-12" role="tablist">
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const isActive = active === cat;
          const count =
            cat === "All" ? PORTFOLIO_COMPANIES.length : PORTFOLIO_COMPANIES.filter((c) => c.categories.includes(cat)).length;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              data-cursor="link"
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-[#E3222A] text-white shadow-md"
                  : "bg-white text-[#6B6B6B] hover:text-[#0F0F10] border border-black/5"
              }`}
            >
              {cat} <span className={isActive ? "text-white/70" : "text-[#6B6B6B]/60"}>({count})</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {items.map((company, i) => (
            <motion.div
              key={company.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <CaseCard company={company} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
