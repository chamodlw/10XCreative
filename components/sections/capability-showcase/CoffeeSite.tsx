"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Star } from "lucide-react";

/* Sample site (mycoffee.lk) rendered inside the Tech Build MacBook mockup */

// Sample site is designed at a fixed 800×500 canvas and scaled to the screen.
const SITE_W = 800;
const SITE_H = 500;

const BREWS = [
  { name: "Ceylon Espresso", note: "Dark chocolate · Kandy estate", price: "550", tone: "#3B2416" },
  { name: "Cinnamon Cappuccino", note: "True Ceylon cinnamon foam", price: "750", tone: "#8A5A3B" },
  { name: "Iced Kithul Latte", note: "Sweetened with kithul treacle", price: "850", tone: "#C8742B" },
];

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
              <div>
                <span className="inline-block px-3 py-1 mb-5 rounded-full border border-[#C8742B]/50 text-[11px] font-bold uppercase tracking-widest text-[#C8742B]">
                  Single-origin · Colombo 07
                </span>
                <h3 className="font-display text-6xl uppercase leading-[0.95] mb-5">
                  Brewed in the hills of <span className="text-[#C8742B]">Ceylon</span>.
                </h3>
                <p className="text-sm text-[#F6EFE6]/70 leading-relaxed mb-7 max-w-sm">
                  Small-batch roasts from Sri Lankan estates, pulled fresh every morning.
                </p>
                <span className="inline-flex gap-3">
                  <span className="px-6 py-3 rounded-full bg-[#C8742B] text-white text-xs font-bold uppercase tracking-wider">
                    Order Online
                  </span>
                  <span className="px-6 py-3 rounded-full border border-[#F6EFE6]/30 text-xs font-bold uppercase tracking-wider">
                    View Menu
                  </span>
                </span>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-[#C8742B]/15 flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full bg-[#EADBC8] shadow-2xl flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-white shadow-inner flex items-center justify-center">
                      <motion.div
                        className="w-36 h-36 rounded-full bg-[#6B3E26] flex items-center justify-center"
                        animate={reduce ? undefined : { rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="w-20 h-14 rounded-[50%] bg-[#E8CFAE]/90 border-[6px] border-[#C9A27C]/70" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-8 right-6 px-4 py-2.5 rounded-2xl bg-white text-[#2B1A12] shadow-xl flex items-center gap-1.5 text-sm font-bold">
                  <Star className="w-4 h-4 fill-[#C8742B] text-[#C8742B]" /> 4.9 · 2.3K reviews
                </span>
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
                      className="h-36 rounded-xl mb-4 flex items-center justify-center"
                      style={{ backgroundColor: b.tone }}
                    >
                      <Coffee className="w-14 h-14 text-white/90" />
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
