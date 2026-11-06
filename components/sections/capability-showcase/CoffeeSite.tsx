"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Coffee, Star } from "lucide-react";
import { CinnamonCappuccino, EspressoShot, IcedLatte } from "./MenuDrinks";

/* Sample site (mycoffee.lk) rendered inside the Tech Build MacBook mockup */

// Sample site is designed at a fixed 800×500 canvas and scaled to the screen.
const SITE_W = 800;
const SITE_H = 500;

const BREWS = [
  { name: "Ceylon Espresso", note: "Dark chocolate · Kandy estate", price: "550", tone: "#3B2416", Drink: EspressoShot },
  { name: "Cinnamon Cappuccino", note: "True Ceylon cinnamon foam", price: "750", tone: "#8A5A3B", Drink: CinnamonCappuccino },
  { name: "Iced Kithul Latte", note: "Sweetened with kithul treacle", price: "850", tone: "#C8742B", Drink: IcedLatte },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BEANS = [
  { x: "4%", y: "14%", s: 26, r: -20 },
  { x: "86%", y: "10%", s: 20, r: 35 },
  { x: "2%", y: "72%", s: 18, r: 60 },
  { x: "90%", y: "56%", s: 24, r: -45 },
];

function Bean({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 20 26">
      <ellipse cx="10" cy="13" rx="9" ry="12" fill="#5A321D" />
      <ellipse cx="8" cy="9" rx="3" ry="5" fill="#7A4A2C" opacity="0.6" />
      <path d="M10 2 C6 8 14 18 10 24" stroke="#2B1A12" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const STEAM = [
  "M118 92 C108 72 128 58 116 36 C108 20 122 10 118 0",
  "M140 96 C130 74 152 60 140 38 C132 22 146 10 142 0",
  "M162 92 C152 72 172 58 160 36 C152 20 166 10 162 0",
];

/* Realistic latte cup on a saucer, drawn in SVG */
function CoffeeCup({ reduce }: { reduce: boolean | null }) {
  return (
    <svg width="290" height="290" viewBox="0 0 280 280" className="overflow-visible drop-shadow-2xl">
      <defs>
        <radialGradient id="cs-saucer" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#ECE6DE" />
          <stop offset="100%" stopColor="#C9BFB3" />
        </radialGradient>
        <linearGradient id="cs-body" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#CFC6BA" />
          <stop offset="22%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F4EFE8" />
          <stop offset="100%" stopColor="#B3A899" />
        </linearGradient>
        <radialGradient id="cs-crema" cx="45%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#D9A574" />
          <stop offset="55%" stopColor="#A8673A" />
          <stop offset="100%" stopColor="#5A321D" />
        </radialGradient>
        <linearGradient id="cs-steam" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Steam */}
      <g transform="translate(0 6)">
        {STEAM.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#cs-steam)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            style={{ filter: "blur(2px)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={reduce ? { opacity: 0.5 } : { opacity: [0, 0.85, 0], y: [12, -10, -26], scaleX: [1, 1.15, 0.9] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: i * 0.9 }}
          />
        ))}
      </g>

      {/* Saucer */}
      <ellipse cx="140" cy="232" rx="128" ry="32" fill="#000" opacity="0.25" />
      <ellipse cx="140" cy="222" rx="126" ry="34" fill="url(#cs-saucer)" />
      <ellipse cx="140" cy="218" rx="80" ry="18" fill="#DDD4C8" />

      {/* Handle */}
      <path d="M214 140 C262 136 262 196 210 194" stroke="#E4DCD1" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path
        d="M214 140 C254 138 254 190 210 192"
        stroke="#FFFFFF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Cup body */}
      <path d="M58 116 L222 116 C220 170 204 214 140 216 C76 214 60 170 58 116 Z" fill="url(#cs-body)" />
      <path d="M78 130 C80 170 92 196 112 206" stroke="#FFFFFF" strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />

      {/* Rim + coffee */}
      <ellipse cx="140" cy="116" rx="82" ry="22" fill="#F7F3EE" />
      <ellipse cx="140" cy="118" rx="72" ry="17" fill="url(#cs-crema)" />

      {/* Latte art (heart), gently swirling */}
      <motion.g
        style={{ transformOrigin: "140px 118px" }}
        animate={reduce ? undefined : { rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M140 131 C120 122 112 110 124 106 C132 103 138 108 140 112 C142 108 148 103 156 106 C168 110 160 122 140 131 Z"
          fill="#F6E7D3"
          opacity="0.95"
        />
        <path d="M140 112 L140 131" stroke="#C99467" strokeWidth="1.4" />
        <ellipse cx="140" cy="118" rx="58" ry="12" fill="none" stroke="#F6E7D3" strokeWidth="1.2" opacity="0.35" />
      </motion.g>

      {/* Crema shine */}
      <motion.ellipse
        cx="118"
        cy="112"
        rx="16"
        ry="3"
        fill="#FFFFFF"
        animate={reduce ? { opacity: 0.25 } : { opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function CoffeeSite({ reduce }: { reduce: boolean | null }) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / SITE_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={screenRef} className="relative w-full aspect-[16/10] overflow-hidden rounded-[3px] bg-[#F6EFE6]">
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{ width: SITE_W, height: SITE_H, transform: `scale(${scale})` }}
      >
        {/* Browser chrome */}
        <div className="relative z-10 h-9 flex items-center gap-2 px-4 bg-[#ECE6DE] border-b border-black/10">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="mx-auto w-80 h-6 rounded-md bg-white text-xs text-[#6B6B6B] flex items-center justify-center gap-1.5">
            <span className="text-[10px]">🔒</span> mycoffee.lk
          </span>
        </div>

        {/* Auto-scrolling page */}
        <div className="relative h-[464px] overflow-hidden">
          <motion.div
            animate={reduce ? undefined : { y: [0, 0, -420, -420, -936, -936, 0] }}
            transition={{
              duration: 14,
              times: [0, 0.12, 0.3, 0.45, 0.65, 0.85, 1],
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* Nav */}
            <nav className="h-14 px-10 flex items-center justify-between bg-[#2B1A12] text-[#F6EFE6]">
              <span className="flex items-center gap-2 font-display text-2xl tracking-wide">
                <Coffee className="w-6 h-6 text-[#C8742B]" /> MyCoffee
              </span>
              <span className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#F6EFE6]/70">
                <span>Menu</span>
                <span>Our Story</span>
                <span>Visit</span>
                <span className="px-4 py-2 rounded-full bg-[#C8742B] text-white">Order Now</span>
              </span>
            </nav>

            {/* Hero */}
            <section className="h-[420px] px-10 grid grid-cols-2 items-center bg-[#2B1A12] text-[#F6EFE6] relative overflow-hidden">
              {/* Warm ambient glow */}
              <motion.span
                className="absolute right-16 top-[10%] w-[340px] h-[340px] rounded-full bg-[#C8742B]/25 blur-3xl"
                animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="relative z-10"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.15, delayChildren: 0.2 } } }}
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block px-3 py-1 mb-5 rounded-full border border-[#C8742B]/50 text-[11px] font-bold uppercase tracking-widest text-[#C8742B]"
                >
                  Single-origin · Colombo 07
                </motion.span>
                <motion.h3 variants={fadeUp} className="font-display text-6xl uppercase leading-[0.95] mb-5">
                  Brewed in the hills of{" "}
                  <motion.span
                    className="inline-block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#C8742B 0%,#F3C48A 50%,#C8742B 100%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={reduce ? undefined : { backgroundPosition: ["100% 0%", "-100% 0%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  >
                    Ceylon
                  </motion.span>
                  .
                </motion.h3>
                <motion.p variants={fadeUp} className="text-sm text-[#F6EFE6]/70 leading-relaxed mb-7 max-w-sm">
                  Small-batch roasts from Sri Lankan estates, pulled fresh every morning.
                </motion.p>
                <motion.span variants={fadeUp} className="inline-flex gap-3">
                  <motion.span
                    className="px-6 py-3 rounded-full bg-[#C8742B] text-white text-xs font-bold uppercase tracking-wider"
                    animate={
                      reduce
                        ? undefined
                        : { boxShadow: ["0 0 0 0 rgba(200,116,43,0.6)", "0 0 0 14px rgba(200,116,43,0)"] }
                    }
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                  >
                    Order Online
                  </motion.span>
                  <span className="px-6 py-3 rounded-full border border-[#F6EFE6]/30 text-xs font-bold uppercase tracking-wider">
                    View Menu
                  </span>
                </motion.span>
              </motion.div>

              <div className="relative z-10 flex items-center justify-center h-full">
                {/* Floating beans */}
                {BEANS.map((b, i) => (
                  <motion.span
                    key={i}
                    className="absolute"
                    style={{ left: b.x, top: b.y }}
                    animate={reduce ? undefined : { y: [0, -14, 0], rotate: [b.r, b.r + 25, b.r] }}
                    transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  >
                    <Bean size={b.s} />
                  </motion.span>
                ))}

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CoffeeCup reduce={reduce} />
                  </motion.div>
                </motion.div>

                <motion.span
                  className="absolute bottom-8 right-2 px-4 py-2.5 rounded-2xl bg-white text-[#2B1A12] shadow-xl flex items-center gap-1.5 text-sm font-bold"
                  initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16, delay: 1.1 }}
                >
                  <Star className="w-4 h-4 fill-[#C8742B] text-[#C8742B]" /> 4.9 · 2.3K reviews
                </motion.span>
              </div>
            </section>

            {/* Menu */}
            <section className="h-[440px] px-10 py-10 bg-[#F6EFE6] text-[#2B1A12]">
              <div className="flex items-end justify-between mb-7">
                <h4 className="font-display text-5xl uppercase leading-none">Our Menu</h4>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8742B]">See full menu →</span>
              </div>
              <div className="grid grid-cols-3 gap-5">
                {BREWS.map((b) => (
                  <div key={b.name} className="rounded-2xl bg-white p-4 shadow-sm">
                    <div
                      className="relative h-36 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                      style={{
                        background: `radial-gradient(circle at 50% 35%, ${b.tone}55 0%, ${b.tone} 75%)`,
                      }}
                    >
                      <span className="absolute inset-x-0 bottom-0 h-10 bg-black/15" />
                      <div className="relative w-32 h-28 mt-4">
                        <b.Drink reduce={reduce} />
                      </div>
                    </div>
                    <p className="font-bold text-base leading-tight">{b.name}</p>
                    <p className="text-xs text-[#2B1A12]/60 mb-4">{b.note}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl">LKR {b.price}</span>
                      <span className="w-8 h-8 rounded-full bg-[#2B1A12] text-white flex items-center justify-center text-lg leading-none">
                        +
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Story */}
            <section className="h-[260px] px-10 grid grid-cols-2 gap-10 items-center bg-white text-[#2B1A12]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8742B]">Our Story</span>
                <h4 className="font-display text-4xl uppercase leading-[0.95] mt-2 mb-3">
                  From estate to cup in 72 hours.
                </h4>
                <p className="text-sm text-[#2B1A12]/60 leading-relaxed">
                  We partner directly with growers in Nuwara Eliya, Kandy and Badulla.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["12", "Estates"],
                  ["4.9★", "Rating"],
                  ["25K", "Cups / mo"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-[#F6EFE6] py-6 text-center">
                    <span className="font-display text-3xl block text-[#C8742B]">{v}</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">{l}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Visit / footer */}
            <section className="h-[224px] px-10 flex items-center justify-between bg-[#2B1A12] text-[#F6EFE6]">
              <div>
                <h4 className="font-display text-5xl uppercase leading-none mb-3">Visit us · Colombo 07</h4>
                <p className="text-sm text-[#F6EFE6]/60">Open daily 7am – 10pm · Free Wi-Fi · Pet friendly</p>
              </div>
              <span className="px-6 py-3 rounded-full bg-[#C8742B] text-white text-xs font-bold uppercase tracking-wider">
                Order on mycoffee.lk
              </span>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
