"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import {
  Heart,
  Mail,
  MousePointer2,
  Play,
  ShoppingCart,
  Settings,
  Check,
  Search,
  Star,
  User,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { VisualKind } from "@/data/subServices";

/* ─────────────────────────────────────────────────────────────────────────
 * Shared helpers
 * ──────────────────────────────────────────────────────────────────────── */

const RED = "#E3222A";

const loop = (duration: number, extra: Transition = {}): Transition => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut",
  ...extra,
});

/** Deterministic pseudo-random in [0,1) so layouts stay stable between renders. */
const rnd = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

function Panel({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={`rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

function Chip({ children, active = false, className = "" }: { children: ReactNode; active?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${
        active ? "bg-[#E3222A] text-white" : "bg-white/10 text-white/80 border border-white/10"
      } ${className}`}
    >
      {children}
    </span>
  );
}

function Float({ children, className = "", delay = 0, y = 8 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div className={className} animate={{ y: [0, -y, 0] }} transition={loop(4, { delay })}>
      {children}
    </motion.div>
  );
}

function Line({ w, className = "" }: { w: string; className?: string }) {
  return <div className={`h-1.5 rounded-full bg-white/15 ${className}`} style={{ width: w }} />;
}

/* ─────────────────────────────────────────────────────────────────────────
 * MARKETING
 * ──────────────────────────────────────────────────────────────────────── */

function PaidAds() {
  const bars = [38, 55, 46, 72, 64, 92];
  return (
    <>
      <div className="absolute inset-x-[8%] bottom-[10%] top-[34%] flex items-end gap-[3%]">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-[#E3222A]/20 via-[#E3222A]/70 to-[#E3222A]"
            initial={{ height: "8%" }}
            animate={{ height: ["8%", `${h}%`, `${h}%`, "8%"] }}
            transition={loop(4.5, { delay: i * 0.12, times: [0, 0.35, 0.85, 1] })}
          />
        ))}
      </div>
      <Panel className="absolute top-[8%] left-[8%] px-4 py-3">
        <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60">Avg. ROAS</span>
        <motion.span
          className="font-display text-3xl sm:text-4xl text-white block"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={loop(2)}
        >
          4.8X
        </motion.span>
      </Panel>
      <div className="absolute top-[8%] right-[8%] flex flex-col items-end gap-2">
        {["Google Ads", "Meta Ads", "TikTok Ads"].map((p, i) => (
          <Float key={p} delay={i * 0.4} y={6}>
            <Chip active={i === 1}>{p}</Chip>
          </Float>
        ))}
      </div>
      {/* click ripple */}
      <motion.div
        className="absolute left-[72%] top-[46%] w-10 h-10 rounded-full border-2 border-white/70"
        animate={{ scale: [0.3, 1.8], opacity: [0.9, 0] }}
        transition={loop(1.8, { ease: "easeOut" })}
      />
      <MousePointer2 className="absolute left-[74%] top-[49%] w-6 h-6 text-white fill-white" />
    </>
  );
}

function Social() {
  const posts = [0, 1, 2, 3];
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[84%] aspect-[9/17] rounded-[1.8rem] border-[5px] border-white/15 bg-[#151517] overflow-hidden">
        <motion.div
          className="flex flex-col gap-2 p-2"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {[...posts, ...posts].map((p, i) => (
            <div key={i} className="rounded-xl bg-white/[0.05] p-1.5">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-4 h-4 rounded-full bg-[#E3222A]" />
                <Line w="40%" />
              </div>
              <div
                className="aspect-square rounded-lg"
                style={{ background: `linear-gradient(135deg, ${p % 2 ? "#E3222A" : "#2a2a2e"}, ${p % 2 ? "#5a0c10" : "#E3222A55"})` }}
              />
              <div className="flex gap-1.5 mt-1.5">
                <Heart className="w-3 h-3 text-[#E3222A] fill-[#E3222A]" />
                <MessageCircle className="w-3 h-3 text-white/50" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-[14%]"
          style={{ left: `${62 + i * 4}%` }}
          animate={{ y: [0, -160], opacity: [0, 1, 0], scale: [0.6, 1.1, 0.8] }}
          transition={loop(3, { delay: i * 0.6, ease: "easeOut" })}
        >
          <Heart className="w-5 h-5 text-[#E3222A] fill-[#E3222A]" />
        </motion.div>
      ))}
      <Float className="absolute left-[6%] top-[18%]">
        <Panel className="px-3 py-2">
          <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold">Followers</span>
          <span className="font-display text-2xl text-white">+12.4K</span>
        </Panel>
      </Float>
      <Float className="absolute left-[8%] bottom-[16%]" delay={1}>
        <Chip active>Engagement 9.2%</Chip>
      </Float>
    </>
  );
}

function Content() {
  const lines = ["92%", "78%", "86%", "64%", "88%", "52%"];
  return (
    <>
      <Panel className="absolute left-[10%] right-[10%] top-[20%] bottom-[10%] p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <motion.div
            className="h-3 rounded-full bg-white"
            animate={{ width: ["0%", "55%", "55%", "0%"] }}
            transition={loop(5, { times: [0, 0.2, 0.9, 1] })}
          />
          <Chip active>SEO 98</Chip>
        </div>
        <div className="space-y-3">
          {lines.map((w, i) => (
            <motion.div
              key={i}
              className="h-1.5 rounded-full bg-white/25"
              animate={{ width: ["0%", w, w, "0%"] }}
              transition={loop(5, { delay: 0.3 + i * 0.25, times: [0, 0.2, 0.85, 1] })}
            />
          ))}
        </div>
        <motion.div
          className="absolute bottom-5 right-5 w-0.5 h-5 bg-[#E3222A]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </Panel>
      <div className="absolute top-[7%] left-[10%] flex gap-2">
        {["Blog", "Article", "Newsletter"].map((t, i) => (
          <motion.span
            key={t}
            className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-white/10"
            animate={{
              backgroundColor: i === 0 ? [RED, "rgba(255,255,255,0.08)", "rgba(255,255,255,0.08)", RED] : i === 1 ? ["rgba(255,255,255,0.08)", RED, "rgba(255,255,255,0.08)", "rgba(255,255,255,0.08)"] : ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.08)", RED, "rgba(255,255,255,0.08)"],
              color: "#fff",
            }}
            transition={loop(6, { times: [0, 0.33, 0.66, 1], ease: "linear" })}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </>
  );
}

function Email() {
  const rows = [0, 1, 2, 3];
  return (
    <>
      <Panel className="absolute right-[8%] top-[14%] bottom-[14%] w-[52%] p-3 overflow-hidden">
        <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold mb-3">Inbox</span>
        <motion.div
          className="rounded-xl bg-[#E3222A] p-2.5 mb-2 flex items-center gap-2"
          animate={{ opacity: [0, 1, 1, 0], x: [30, 0, 0, 0] }}
          transition={loop(4, { times: [0.35, 0.45, 0.9, 1] })}
        >
          <Mail className="w-4 h-4 text-white shrink-0" />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-white" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/60" />
          </div>
        </motion.div>
        {rows.map((r) => (
          <div key={r} className="rounded-xl bg-white/[0.05] p-2.5 mb-2 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white/15 shrink-0" />
            <div className="flex-1 space-y-1">
              <Line w="70%" />
              <Line w="45%" className="bg-white/10" />
            </div>
          </div>
        ))}
      </Panel>
      <motion.div
        className="absolute left-[8%] top-[55%] w-14 h-14 rounded-2xl bg-[#E3222A] flex items-center justify-center shadow-[0_0_40px_rgba(227,34,42,0.6)]"
        animate={{ x: [0, 120, 200], y: [0, -80, -60], scale: [1, 0.9, 0.3], opacity: [1, 1, 0] }}
        transition={loop(4, { times: [0, 0.25, 0.4], ease: "easeIn" })}
      >
        <Mail className="w-7 h-7 text-white" />
      </motion.div>
      <Float className="absolute left-[8%] top-[14%]">
        <Panel className="px-3 py-2">
          <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold">Open rate</span>
          <span className="font-display text-2xl text-white">48.6%</span>
        </Panel>
      </Float>
    </>
  );
}

function Influencer() {
  const outer = [0, 1, 2, 3, 4, 5];
  const inner = [0, 1, 2];
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] aspect-square">
        {[1, 2].map((r) => (
          <motion.div
            key={r}
            className="absolute inset-0 m-auto rounded-full border border-[#E3222A]"
            style={{ width: "30%", height: "30%" }}
            animate={{ scale: [1, 3], opacity: [0.7, 0] }}
            transition={loop(3, { delay: r * 1.5, ease: "easeOut" })}
          />
        ))}
        <div className="absolute inset-[6%] rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-[26%] rounded-full border border-dashed border-white/15" />
        <motion.div className="absolute inset-[6%]" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
          {outer.map((i) => {
            const a = (i / outer.length) * Math.PI * 2;
            return (
              <motion.div
                key={i}
                className="absolute w-9 h-9 -ml-[18px] -mt-[18px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                style={{ left: `${50 + Math.cos(a) * 50}%`, top: `${50 + Math.sin(a) * 50}%` }}
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                <User className="w-4 h-4 text-white/80" />
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="absolute inset-[26%]" animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
          {inner.map((i) => {
            const a = (i / inner.length) * Math.PI * 2;
            return (
              <div
                key={i}
                className="absolute w-7 h-7 -ml-3.5 -mt-3.5 rounded-full bg-[#E3222A]/80 flex items-center justify-center"
                style={{ left: `${50 + Math.cos(a) * 50}%`, top: `${50 + Math.sin(a) * 50}%` }}
              >
                <Star className="w-3.5 h-3.5 text-white fill-white" />
              </div>
            );
          })}
        </motion.div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#E3222A] flex items-center justify-center shadow-[0_0_50px_rgba(227,34,42,0.7)]">
          <span className="font-display text-xl text-white">YOU</span>
        </div>
      </div>
      <Float className="absolute right-[6%] bottom-[8%]">
        <Chip active>Reach 2.1M</Chip>
      </Float>
    </>
  );
}

function Campaign() {
  const rows = [
    { l: "Research", s: 0, w: 22 },
    { l: "Creative", s: 16, w: 30 },
    { l: "Launch", s: 40, w: 18 },
    { l: "Optimise", s: 52, w: 34 },
    { l: "Report", s: 80, w: 18 },
  ];
  return (
    <Panel className="absolute inset-[8%] p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Campaign Roadmap</span>
        <Chip active>Q1</Chip>
      </div>
      <div className="relative space-y-3 sm:space-y-4">
        {rows.map((r, i) => (
          <div key={r.l} className="flex items-center gap-3">
            <span className="w-16 sm:w-20 shrink-0 text-[10px] sm:text-xs text-white/70 font-semibold">{r.l}</span>
            <div className="relative flex-1 h-5 sm:h-6 rounded-md bg-white/[0.04]">
              <motion.div
                className={`absolute inset-y-0 rounded-md ${i % 2 ? "bg-white/30" : "bg-[#E3222A]"}`}
                style={{ left: `${r.s}%`, width: `${r.w}%`, originX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={loop(6, { delay: i * 0.3, times: [0, 0.2, 0.9, 1] })}
              />
            </div>
          </div>
        ))}
        <motion.div
          className="absolute top-[-6px] bottom-[-6px] w-0.5 bg-white shadow-[0_0_12px_white]"
          style={{ marginLeft: "calc(4rem + 12px)" }}
          animate={{ left: ["0%", "calc(100% - 5rem - 12px)"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </Panel>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * CREATIVE
 * ──────────────────────────────────────────────────────────────────────── */

function Brand() {
  const palette = [RED, "#0F0F10", "#F7F7F5", "#B8141C", "#6B6B6B"];
  return (
    <>
      <div className="absolute left-[10%] top-[14%] w-[42%] aspect-square">
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-[#E3222A]"
          animate={{ rotate: [0, 45, 45, 90], borderRadius: ["24%", "50%", "50%", "24%"] }}
          transition={loop(6, { times: [0, 0.3, 0.7, 1] })}
        />
        <motion.div
          className="absolute inset-[18%] rounded-2xl bg-[#E3222A] shadow-[0_0_60px_rgba(227,34,42,0.6)]"
          animate={{ rotate: [0, -45, -45, 0], scale: [1, 0.8, 0.8, 1] }}
          transition={loop(6, { times: [0, 0.3, 0.7, 1] })}
        />
        <div className="absolute inset-0 flex items-center justify-center font-display text-4xl sm:text-5xl text-white">B</div>
      </div>
      <Panel className="absolute right-[8%] top-[14%] w-[34%] p-4">
        <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Typeface</span>
        <motion.span
          className="font-display text-5xl sm:text-6xl text-white block leading-none"
          animate={{ letterSpacing: ["-0.02em", "0.08em", "-0.02em"] }}
          transition={loop(4)}
        >
          Aa
        </motion.span>
        <div className="mt-2 space-y-1.5">
          <Line w="90%" />
          <Line w="60%" />
        </div>
      </Panel>
      <div className="absolute left-[10%] right-[8%] bottom-[12%] flex gap-2 sm:gap-3">
        {palette.map((c, i) => (
          <motion.div
            key={c}
            className="flex-1 aspect-[3/4] rounded-xl border border-white/10"
            style={{ backgroundColor: c }}
            animate={{ y: [20, 0, 0, 20], opacity: [0, 1, 1, 0] }}
            transition={loop(6, { delay: i * 0.15, times: [0, 0.2, 0.85, 1] })}
          />
        ))}
      </div>
    </>
  );
}

function Graphic() {
  const cards = [
    { label: "Banner", rot: -14, x: -42, grad: "from-white/20 to-white/5" },
    { label: "Social Post", rot: 0, x: 0, grad: "from-[#E3222A] to-[#5a0c10]" },
    { label: "Brochure", rot: 14, x: 42, grad: "from-[#2a2a2e] to-[#E3222A]/50" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          className="absolute w-[36%] aspect-[4/5] rounded-2xl bg-[#1a1a1d] border border-white/10 p-2.5 shadow-2xl"
          style={{ zIndex: i === 1 ? 3 : 1 }}
          animate={{ rotate: [0, c.rot, c.rot, 0], x: ["0%", `${c.x * 2.2}%`, `${c.x * 2.2}%`, "0%"], y: i === 1 ? [0, -14, -14, 0] : 0 }}
          transition={loop(5, { times: [0, 0.3, 0.8, 1] })}
        >
          <div className={`h-[62%] rounded-xl bg-gradient-to-br ${c.grad} mb-2`} />
          <div className="space-y-1.5">
            <Line w="80%" />
            <Line w="50%" />
          </div>
          <span className="absolute bottom-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider text-white/60">{c.label}</span>
        </motion.div>
      ))}
      <Float className="absolute left-[7%] top-[9%]">
        <Chip active>Ad Creatives</Chip>
      </Float>
    </div>
  );
}

function UIUX() {
  const blocks = [
    "col-span-6 h-8",
    "col-span-4 h-20",
    "col-span-2 h-20",
    "col-span-2 h-12",
    "col-span-2 h-12",
    "col-span-2 h-12",
  ];
  return (
    <>
      <Panel className="absolute inset-[9%] p-3 sm:p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
          </div>
          <Line w="30%" />
        </div>
        <div className="grid grid-cols-6 gap-2">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              className={`${b} rounded-lg ${i === 1 ? "bg-[#E3222A]/80" : "bg-white/10"} border border-dashed border-white/20`}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
              transition={loop(6, { delay: i * 0.2, times: [0, 0.15, 0.9, 1] })}
            />
          ))}
        </div>
      </Panel>
      <motion.div
        className="absolute left-0 top-0"
        animate={{ left: ["20%", "55%", "72%", "35%", "20%"], top: ["30%", "42%", "70%", "66%", "30%"] }}
        transition={loop(6, { ease: "easeInOut" })}
      >
        <MousePointer2 className="w-6 h-6 text-white fill-white drop-shadow" />
      </motion.div>
      <Float className="absolute right-[5%] bottom-[5%]">
        <Chip active>Prototype v2</Chip>
      </Float>
    </>
  );
}

function Video() {
  const wave = Array.from({ length: 28 }, (_, i) => i);
  return (
    <>
      <div className="absolute left-[8%] right-[8%] top-[8%] h-[52%] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a2a2e] via-[#1a1a1d] to-[#E3222A]/40 border border-white/10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-14 h-14 rounded-full bg-[#E3222A] flex items-center justify-center shadow-[0_0_40px_rgba(227,34,42,0.7)]"
            animate={{ scale: [1, 1.12, 1] }}
            transition={loop(1.6)}
          >
            <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
          </motion.div>
        </div>
        <span className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-white">
          <motion.span className="w-2 h-2 rounded-full bg-[#E3222A]" animate={{ opacity: [1, 0.2, 1] }} transition={loop(1)} /> 4K
        </span>
      </div>
      <Panel className="absolute left-[8%] right-[8%] bottom-[8%] h-[28%] p-3">
        <div className="relative h-full flex flex-col justify-between">
          <div className="flex gap-1 h-[38%]">
            <div className="w-[22%] rounded bg-[#E3222A]/80" />
            <div className="w-[30%] rounded bg-white/25" />
            <div className="w-[18%] rounded bg-[#E3222A]/50" />
            <div className="flex-1 rounded bg-white/15" />
          </div>
          <div className="flex items-end gap-[2px] h-[40%]">
            {wave.map((i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-full bg-white/40"
                animate={{ height: [`${20 + rnd(i) * 30}%`, `${50 + rnd(i + 9) * 50}%`, `${20 + rnd(i) * 30}%`] }}
                transition={loop(0.9 + rnd(i) * 0.8)}
              />
            ))}
          </div>
          <motion.div
            className="absolute -top-1 -bottom-1 w-0.5 bg-[#E3222A] shadow-[0_0_10px_#E3222A]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </Panel>
    </>
  );
}

function MotionGfx() {
  const path = "M 30 200 C 120 20, 220 20, 260 140 S 380 260, 470 60";
  return (
    <>
      <svg viewBox="0 0 500 300" className="absolute inset-x-[4%] top-[8%] w-[92%] h-[62%]" fill="none">
        <path d={path} stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="6 8" />
        <motion.path
          d={path}
          stroke={RED}
          strokeWidth="4"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={loop(4, { times: [0, 0.75, 1] })}
        />
        <circle r="10" fill="#fff">
          <animateMotion dur="4s" repeatCount="indefinite" path={path} keyPoints="0;1;1" keyTimes="0;0.75;1" calcMode="linear" />
        </circle>
        {[[30, 200], [260, 140], [470, 60]].map(([x, y], i) => (
          <rect key={i} x={x - 6} y={y - 6} width="12" height="12" fill="#0F0F10" stroke="#fff" strokeWidth="2" transform={`rotate(45 ${x} ${y})`} />
        ))}
      </svg>
      <div className="absolute left-[8%] right-[8%] bottom-[10%] flex items-center justify-between">
        <motion.div
          className="w-12 h-12 bg-[#E3222A]"
          animate={{ borderRadius: ["10%", "50%", "10%"], rotate: [0, 180, 360] }}
          transition={loop(3)}
        />
        <motion.div
          className="w-12 h-12 border-2 border-white"
          animate={{ scale: [1, 0.6, 1], rotate: [0, -90, 0], borderRadius: ["50%", "8%", "50%"] }}
          transition={loop(3, { delay: 0.3 })}
        />
        <motion.span
          className="font-display text-3xl sm:text-4xl text-white"
          animate={{ skewX: [0, -12, 0], scaleX: [1, 1.2, 1] }}
          transition={loop(3, { delay: 0.6 })}
        >
          MOTION
        </motion.span>
      </div>
    </>
  );
}

function Photo() {
  return (
    <>
      <div className="absolute inset-[8%] rounded-2xl overflow-hidden bg-gradient-to-b from-[#3a1418] via-[#1a1a1d] to-[#0F0F10]">
        <svg viewBox="0 0 400 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <circle cx="290" cy="90" r="34" fill={RED} opacity="0.85" />
          <path d="M0 230 L90 140 L160 200 L240 110 L330 190 L400 150 L400 300 L0 300 Z" fill="#26262a" />
          <path d="M0 260 L120 190 L210 250 L300 200 L400 240 L400 300 L0 300 Z" fill="#141416" />
        </svg>
        {/* rule of thirds */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="border border-white/[0.07]" />
          ))}
        </div>
        {/* shutter flash */}
        <motion.div
          className="absolute inset-0 bg-white"
          animate={{ opacity: [0, 0, 0.85, 0] }}
          transition={loop(3.5, { times: [0, 0.78, 0.8, 0.9], ease: "linear" })}
        />
      </div>
      {/* focus brackets */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square"
        animate={{ scale: [1.3, 1, 1, 1.3] }}
        transition={loop(3.5, { times: [0, 0.3, 0.8, 1] })}
      >
        {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((c) => (
          <motion.span
            key={c}
            className={`absolute w-6 h-6 ${c}`}
            animate={{ borderColor: ["#ffffff", "#ffffff", RED, RED] }}
            transition={loop(3.5, { times: [0, 0.29, 0.3, 1] })}
          />
        ))}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
      </motion.div>
      <div className="absolute left-[12%] bottom-[12%] flex gap-2">
        <Chip>f/1.8</Chip>
        <Chip>1/250</Chip>
        <Chip active>ISO 100</Chip>
      </div>
      <motion.span
        className="absolute right-[12%] top-[12%] flex items-center gap-1.5 text-[10px] font-bold text-white"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={loop(1.2)}
      >
        <span className="w-2 h-2 rounded-full bg-[#E3222A]" /> RAW
      </motion.span>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * TECH BUILD
 * ──────────────────────────────────────────────────────────────────────── */

function BrowserFrame({ children, className = "", url = "yourbrand.lk" }: { children: ReactNode; className?: string; url?: string }) {
  return (
    <Panel className={`overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#E3222A]" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="w-2 h-2 rounded-full bg-white/30" />
        <span className="ml-2 flex-1 px-2 py-0.5 rounded-md bg-white/[0.06] text-[9px] text-white/50 truncate">{url}</span>
      </div>
      {children}
    </Panel>
  );
}

function WebDev() {
  const code = [
    [18, 40],
    [10, 30, 22],
    [26, 18],
    [10, 44],
    [18, 26, 14],
    [10, 34],
    [18, 20],
  ];
  const colors = ["bg-[#E3222A]", "bg-white/50", "bg-white/25"];
  return (
    <BrowserFrame className="absolute inset-[8%]">
      <div className="grid grid-cols-2 h-full">
        <div className="p-3 space-y-2.5 border-r border-white/10 font-mono">
          {code.map((row, r) => (
            <div key={r} className="flex gap-1.5 items-center">
              <span className="text-[8px] text-white/30 w-3">{r + 1}</span>
              {row.map((w, i) => (
                <motion.div
                  key={i}
                  className={`h-1.5 rounded-full ${colors[(r + i) % 3]}`}
                  animate={{ width: [0, w * 2.2, w * 2.2, 0] }}
                  transition={loop(6, { delay: r * 0.25 + i * 0.08, times: [0, 0.12, 0.9, 1] })}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="p-3 space-y-2">
          <motion.div className="h-6 rounded-md bg-white/10" animate={{ opacity: [0, 1, 1, 0] }} transition={loop(6, { delay: 0.8, times: [0, 0.1, 0.9, 1] })} />
          <motion.div
            className="h-14 rounded-md bg-gradient-to-br from-[#E3222A] to-[#5a0c10]"
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 0] }}
            transition={loop(6, { delay: 1.2, times: [0, 0.1, 0.9, 1] })}
          />
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-9 rounded-md bg-white/10"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={loop(6, { delay: 1.6 + i * 0.15, times: [0, 0.1, 0.9, 1] })}
              />
            ))}
          </div>
          <motion.div className="h-4 w-1/2 rounded-full bg-[#E3222A]" animate={{ opacity: [0, 1, 1, 0] }} transition={loop(6, { delay: 2.1, times: [0, 0.1, 0.9, 1] })} />
        </div>
      </div>
    </BrowserFrame>
  );
}

function Ecommerce() {
  return (
    <>
      <BrowserFrame className="absolute inset-[8%]" url="store.yourbrand.lk">
        <div className="p-3 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-white/[0.05] p-2">
              <div className={`aspect-square rounded-lg mb-2 ${i === 1 ? "bg-gradient-to-br from-[#E3222A] to-[#5a0c10]" : "bg-white/10"}`} />
              <Line w="80%" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-[9px] font-bold text-white">Rs {(i + 2) * 1450}</span>
                <span className="w-4 h-4 rounded-full bg-[#E3222A] flex items-center justify-center text-[10px] text-white leading-none">+</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-3 flex gap-2">
          <Chip>Shopify</Chip>
          <Chip>WooCommerce</Chip>
          <Chip active>Custom</Chip>
        </div>
      </BrowserFrame>
      {/* product flying to cart */}
      <motion.div
        className="absolute left-[46%] top-[44%] w-5 h-5 rounded-md bg-[#E3222A] shadow-[0_0_20px_#E3222A]"
        animate={{ left: ["46%", "80%"], top: ["44%", "4%"], scale: [1, 0.4], opacity: [1, 0] }}
        transition={loop(2.4, { ease: "easeIn", repeatDelay: 0.4 })}
      />
      <motion.div
        className="absolute right-[5%] top-[2%] w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl"
        animate={{ scale: [1, 1, 1.2, 1] }}
        transition={loop(2.8, { times: [0, 0.8, 0.88, 1] })}
      >
        <ShoppingCart className="w-5 h-5 text-[#0F0F10]" />
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E3222A] text-white text-[10px] font-bold flex items-center justify-center">3</span>
      </motion.div>
    </>
  );
}

function Software() {
  const cells = Array.from({ length: 28 }, (_, i) => i);
  return (
    <Panel className="absolute inset-[8%] p-3 flex gap-3 overflow-hidden">
      <div className="w-[16%] space-y-2 border-r border-white/10 pr-2">
        <div className="w-6 h-6 rounded-lg bg-[#E3222A]" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-2 rounded-full ${i === 1 ? "bg-white/60" : "bg-white/15"}`} />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-2.5 min-w-0">
        <div className="grid grid-cols-3 gap-2">
          {["Bookings", "Leads", "Revenue"].map((k, i) => (
            <div key={k} className="rounded-lg bg-white/[0.05] p-2">
              <span className="block text-[8px] uppercase tracking-wider text-white/50 font-bold">{k}</span>
              <motion.span
                className="font-display text-lg text-white block"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={loop(2.5, { delay: i * 0.3 })}
              >
                {["128", "342", "1.2M"][i]}
              </motion.span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((i) => (
            <motion.div
              key={i}
              className="aspect-square rounded-[4px] bg-white/[0.06]"
              animate={{ backgroundColor: ["rgba(255,255,255,0.06)", RED, "rgba(255,255,255,0.06)"] }}
              transition={loop(3, { delay: rnd(i) * 3, repeatDelay: 1 + rnd(i + 3) * 3 })}
            />
          ))}
        </div>
        <div className="space-y-1.5">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-md bg-white/[0.04] px-2 py-1.5">
              <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
              <Line w="40%" />
              <span className={`ml-auto text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${i ? "bg-white/10 text-white/70" : "bg-[#E3222A] text-white"}`}>
                {i ? "New" : "Won"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function Api() {
  const nodes = [
    { x: 80, y: 60, l: "Payments" },
    { x: 420, y: 60, l: "CRM" },
    { x: 60, y: 240, l: "WhatsApp" },
    { x: 440, y: 240, l: "Maps" },
    { x: 250, y: 30, l: "Email" },
  ];
  const hub = { x: 250, y: 160 };
  return (
    <svg viewBox="0 0 500 300" className="absolute inset-[5%] w-[90%] h-[90%]" fill="none">
      {nodes.map((n, i) => {
        const d = `M ${hub.x} ${hub.y} L ${n.x} ${n.y}`;
        const back = `M ${n.x} ${n.y} L ${hub.x} ${hub.y}`;
        return (
          <g key={n.l}>
            <path d={d} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 6" />
            <circle r="5" fill={RED}>
              <animateMotion dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" path={d} />
            </circle>
            <circle r="3.5" fill="#fff">
              <animateMotion dur={`${2.2 + i * 0.25}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" path={back} />
            </circle>
            <rect x={n.x - 44} y={n.y - 16} width="88" height="32" rx="16" fill="#1c1c1f" stroke="rgba(255,255,255,0.15)" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" letterSpacing="1">
              {n.l.toUpperCase()}
            </text>
          </g>
        );
      })}
      <motion.circle cx={hub.x} cy={hub.y} r="46" stroke={RED} strokeWidth="2" animate={{ r: [46, 70], opacity: [0.8, 0] }} transition={loop(2, { ease: "easeOut" })} />
      <circle cx={hub.x} cy={hub.y} r="46" fill={RED} />
      <text x={hub.x} y={hub.y - 2} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" letterSpacing="1">
        YOUR
      </text>
      <text x={hub.x} y={hub.y + 14} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" letterSpacing="1">
        APP
      </text>
    </svg>
  );
}

function Maintenance() {
  const bars = Array.from({ length: 30 }, (_, i) => i);
  const tasks = ["Security patches", "Daily backup", "Plugin updates", "Uptime check"];
  return (
    <>
      <Panel className="absolute left-[8%] right-[8%] top-[8%] p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Uptime · 30 days</span>
          <span className="font-display text-2xl text-white">99.98%</span>
        </div>
        <div className="flex gap-[3px] h-8">
          {bars.map((i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-sm ${i === 17 ? "bg-white/30" : "bg-[#E3222A]"}`}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={loop(2, { delay: i * 0.05 })}
            />
          ))}
        </div>
      </Panel>
      <Panel className="absolute left-[8%] bottom-[8%] w-[54%] p-4 space-y-2.5">
        {tasks.map((t, i) => (
          <div key={t} className="flex items-center gap-2.5">
            <motion.span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              animate={{ backgroundColor: ["rgba(255,255,255,0.1)", RED, RED, "rgba(255,255,255,0.1)"], scale: [1, 1.15, 1, 1] }}
              transition={loop(5, { delay: i * 0.5, times: [0, 0.1, 0.9, 1] })}
            >
              <Check className="w-3 h-3 text-white" />
            </motion.span>
            <span className="text-[11px] text-white/80 font-semibold truncate">{t}</span>
          </div>
        ))}
      </Panel>
      <div className="absolute right-[8%] bottom-[10%] w-[30%] aspect-square">
        <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
          <Settings className="w-full h-full text-white/15" strokeWidth={1.2} />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ShieldCheck className="w-[38%] h-[38%] text-[#E3222A]" />
        </div>
      </div>
    </>
  );
}

function Optimization() {
  const arc = "M 40 170 A 110 110 0 0 1 260 170";
  return (
    <>
      <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[70%]">
        <svg viewBox="0 0 300 190" className="w-full" fill="none">
          <path d={arc} stroke="rgba(255,255,255,0.1)" strokeWidth="18" strokeLinecap="round" />
          <motion.path
            d={arc}
            stroke={RED}
            strokeWidth="18"
            strokeLinecap="round"
            animate={{ pathLength: [0.15, 0.98, 0.98, 0.15] }}
            transition={loop(5, { times: [0, 0.35, 0.85, 1] })}
          />
          <motion.g
            style={{ originX: "150px", originY: "170px" }}
            animate={{ rotate: [-63, 86, 86, -63] }}
            transition={loop(5, { times: [0, 0.35, 0.85, 1] })}
          >
            <line x1="150" y1="170" x2="150" y2="85" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </motion.g>
          <circle cx="150" cy="170" r="10" fill="#fff" />
        </svg>
        <div className="text-center -mt-2">
          <span className="font-display text-4xl sm:text-5xl text-white">98</span>
          <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold">Performance score</span>
        </div>
      </div>
      <div className="absolute left-[8%] right-[8%] bottom-[8%] flex justify-center gap-2 flex-wrap">
        <Chip active>
          <Zap className="w-3 h-3" /> LCP 0.8s
        </Chip>
        <Chip>CLS 0.01</Chip>
        <Chip>INP 90ms</Chip>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * ANALYTICS
 * ──────────────────────────────────────────────────────────────────────── */

function GA() {
  const line = "M 0 150 C 40 140, 60 100, 100 110 S 160 60, 200 80 S 270 30, 320 40 S 380 10, 400 15";
  return (
    <>
      <Panel className="absolute inset-[8%] p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold">Sessions</span>
            <span className="font-display text-3xl text-white">84,210</span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-white">
            <motion.span className="w-2 h-2 rounded-full bg-[#25D366]" animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }} transition={loop(1.4)} />
            312 live
          </span>
        </div>
        <svg viewBox="0 0 400 170" preserveAspectRatio="none" className="w-full h-[62%]" fill="none">
          <defs>
            <linearGradient id="ga-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={RED} stopOpacity="0.45" />
              <stop offset="100%" stopColor={RED} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 80, 120].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
          ))}
          <motion.path
            d={`${line} L 400 170 L 0 170 Z`}
            fill="url(#ga-fill)"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={loop(5, { times: [0, 0.4, 0.9, 1] })}
          />
          <motion.path
            d={line}
            stroke={RED}
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={loop(5, { times: [0, 0.4, 0.9, 1] })}
          />
        </svg>
      </Panel>
      <Float className="absolute right-[4%] bottom-[4%]">
        <Chip active>+64% MoM</Chip>
      </Float>
    </>
  );
}

function Roi() {
  const C = 2 * Math.PI * 60;
  const segs = [
    { v: 0.45, c: RED },
    { v: 0.3, c: "rgba(255,255,255,0.7)" },
    { v: 0.25, c: "rgba(255,255,255,0.25)" },
  ];
  let acc = 0;
  return (
    <>
      <div className="absolute left-[6%] top-1/2 -translate-y-1/2 w-[46%] aspect-square">
        <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
          <circle cx="80" cy="80" r="60" stroke="rgba(255,255,255,0.06)" strokeWidth="22" fill="none" />
          {segs.map((s, i) => {
            const off = acc;
            acc += s.v;
            return (
              <motion.circle
                key={i}
                cx="80"
                cy="80"
                r="60"
                fill="none"
                stroke={s.c}
                strokeWidth="22"
                strokeDasharray={`${C * s.v - 3} ${C}`}
                strokeDashoffset={-C * off}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={loop(5, { delay: i * 0.3, times: [0, 0.15, 0.9, 1] })}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold">ROI</span>
          <span className="font-display text-3xl sm:text-4xl text-white">+312%</span>
        </div>
      </div>
      <Panel className="absolute right-[6%] top-[14%] bottom-[14%] w-[38%] p-3 flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-2">Spend vs Revenue</span>
        <div className="flex-1 flex items-end gap-2">
          {[
            [30, 70],
            [35, 82],
            [28, 95],
          ].map(([s, r], i) => (
            <div key={i} className="flex-1 flex items-end gap-1 h-full">
              <motion.div className="flex-1 rounded-t bg-white/30" animate={{ height: ["0%", `${s}%`, `${s}%`, "0%"] }} transition={loop(5, { delay: i * 0.2, times: [0, 0.25, 0.9, 1] })} />
              <motion.div className="flex-1 rounded-t bg-[#E3222A]" animate={{ height: ["0%", `${r}%`, `${r}%`, "0%"] }} transition={loop(5, { delay: 0.1 + i * 0.2, times: [0, 0.25, 0.9, 1] })} />
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}

function Cro() {
  const stages = [
    { l: "Visitors", w: 100, v: "10,000" },
    { l: "Product views", w: 78, v: "6,400" },
    { l: "Add to cart", w: 56, v: "2,100" },
    { l: "Checkout", w: 38, v: "940" },
  ];
  return (
    <>
      <div className="absolute left-[8%] right-[8%] top-[10%] space-y-2.5">
        {stages.map((s, i) => (
          <div key={s.l} className="flex justify-center">
            <motion.div
              className={`relative h-10 sm:h-11 rounded-xl flex items-center justify-between px-3 ${i === stages.length - 1 ? "bg-[#E3222A]" : "bg-white/10 border border-white/10"}`}
              animate={{ width: [`${s.w * 0.7}%`, `${Math.min(100, s.w * (i ? 1.18 : 1))}%`, `${s.w * 0.7}%`] }}
              transition={loop(4, { delay: i * 0.15 })}
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white truncate">{s.l}</span>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/80">{s.v}</span>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="absolute left-[8%] right-[8%] bottom-[8%] grid grid-cols-2 gap-3">
        {["A", "B"].map((v, i) => (
          <motion.div
            key={v}
            className="rounded-xl p-2.5 border"
            animate={i ? { borderColor: ["rgba(255,255,255,0.1)", RED, RED], backgroundColor: ["rgba(255,255,255,0.04)", "rgba(227,34,42,0.15)", "rgba(227,34,42,0.15)"] } : {}}
            style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}
            transition={loop(4, { times: [0, 0.4, 1] })}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Variant {v}</span>
              <span className="font-display text-lg text-white">{i ? "4.6%" : "3.2%"}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function Behavior() {
  const blobs = [
    { x: 30, y: 30, s: 34 },
    { x: 68, y: 46, s: 26 },
    { x: 40, y: 70, s: 22 },
  ];
  return (
    <>
      <BrowserFrame className="absolute inset-[8%]" url="yourbrand.lk/pricing">
        <div className="relative p-3 space-y-2 h-full">
          <div className="h-5 w-1/2 rounded bg-white/10" />
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-white/[0.06]" />
            ))}
          </div>
          <div className="h-3 w-3/4 rounded bg-white/10" />
          <div className="h-3 w-2/3 rounded bg-white/10" />
          <div className="h-6 w-1/3 rounded-full bg-white/15" />
          {blobs.map((b, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${b.x}%`,
                top: `${b.y}%`,
                width: `${b.s}%`,
                aspectRatio: "1",
                translate: "-50% -50%",
                background: "radial-gradient(circle, rgba(255,220,0,0.75) 0%, rgba(227,34,42,0.55) 35%, rgba(227,34,42,0) 70%)",
                mixBlendMode: "screen",
              }}
              animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.7, 1, 0.7] }}
              transition={loop(3, { delay: i * 0.6 })}
            />
          ))}
        </div>
      </BrowserFrame>
      {[0, 0.12, 0.24, 0.36].map((d, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ opacity: 1 - i * 0.22 }}
          animate={{ left: ["24%", "60%", "70%", "38%", "24%"], top: ["40%", "36%", "58%", "74%", "40%"] }}
          transition={loop(6, { delay: d })}
        >
          {i === 0 ? <MousePointer2 className="w-6 h-6 text-white fill-white" /> : <span className="block w-2 h-2 rounded-full bg-white/70" />}
        </motion.div>
      ))}
      <span className="absolute right-[10%] top-[16%] flex items-center gap-1.5">
        <Chip active>
          <motion.span className="w-1.5 h-1.5 rounded-full bg-white" animate={{ opacity: [1, 0.2, 1] }} transition={loop(1)} /> REC
        </Chip>
      </span>
    </>
  );
}

function Seo() {
  // ranks: our row climbs from #4 to #1
  const rowH = 22; // % of list height per row
  return (
    <>
      <Panel className="absolute left-[8%] right-[8%] top-[8%] px-3 py-2.5 flex items-center gap-2">
        <Search className="w-4 h-4 text-white/60" />
        <span className="text-xs text-white/80 font-semibold">best digital agency sri lanka</span>
      </Panel>
      <div className="absolute left-[8%] right-[8%] top-[26%] h-[52%]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-x-0 h-[20%] rounded-xl bg-white/[0.05] border border-white/10 px-3 flex items-center gap-2"
            animate={{ top: [`${i * rowH}%`, `${i * rowH}%`, `${(i + 1) * rowH}%`, `${(i + 1) * rowH}%`, `${i * rowH}%`] }}
            transition={loop(6, { times: [0, 0.3, 0.45, 0.9, 1] })}
          >
            <span className="text-[10px] font-mono text-white/40 w-4">#</span>
            <Line w="45%" />
            <Line w="20%" className="bg-white/10" />
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-x-0 h-[20%] rounded-xl bg-[#E3222A] px-3 flex items-center gap-2 shadow-[0_0_30px_rgba(227,34,42,0.5)] z-10"
          animate={{ top: [`${3 * rowH}%`, `${3 * rowH}%`, "0%", "0%", `${3 * rowH}%`] }}
          transition={loop(6, { times: [0, 0.3, 0.45, 0.9, 1] })}
        >
          <span className="text-[10px] font-bold text-white">YOU</span>
          <div className="h-1.5 w-[45%] rounded-full bg-white" />
          <span className="ml-auto text-[10px] font-bold text-white">▲</span>
        </motion.div>
      </div>
      <div className="absolute left-[8%] right-[8%] bottom-[8%] flex gap-2 flex-wrap">
        <Chip active>Health 96</Chip>
        <Chip>Core Web Vitals ✓</Chip>
        <Chip>Backlinks 1.2K</Chip>
      </div>
    </>
  );
}

function Research() {
  const centers = [
    { x: 26, y: 38, l: "Segment A" },
    { x: 70, y: 30, l: "Segment B" },
    { x: 52, y: 72, l: "Segment C" },
  ];
  const dots = Array.from({ length: 36 }, (_, i) => i);
  return (
    <>
      <div className="absolute inset-[8%]">
        {centers.map((c) => (
          <motion.div
            key={c.l}
            className="absolute w-[30%] aspect-square rounded-full border border-dashed border-[#E3222A]/60"
            style={{ left: `${c.x}%`, top: `${c.y}%`, translate: "-50% -50%" }}
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.6, 0.6, 1, 1, 0.6] }}
            transition={loop(6, { times: [0, 0.3, 0.45, 0.85, 1] })}
          />
        ))}
        {dots.map((i) => {
          const c = centers[i % 3];
          const rx = 8 + rnd(i) * 84;
          const ry = 8 + rnd(i + 50) * 84;
          const cx = c.x + (rnd(i + 99) - 0.5) * 16;
          const cy = c.y + (rnd(i + 7) - 0.5) * 16;
          return (
            <motion.span
              key={i}
              className={`absolute w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full ${i % 3 === 0 ? "bg-[#E3222A]" : i % 3 === 1 ? "bg-white" : "bg-white/40"}`}
              animate={{ left: [`${rx}%`, `${rx}%`, `${cx}%`, `${cx}%`, `${rx}%`], top: [`${ry}%`, `${ry}%`, `${cy}%`, `${cy}%`, `${ry}%`] }}
              transition={loop(6, { times: [0, 0.2, 0.45, 0.85, 1] })}
            />
          );
        })}
        {centers.map((c, i) => (
          <motion.span
            key={c.l}
            className="absolute"
            style={{ left: `${c.x}%`, top: `${c.y - 20}%`, translate: "-50% 0" }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={loop(6, { times: [0, 0.4, 0.5, 0.85, 1] })}
          >
            <Chip active={i === 0}>{c.l}</Chip>
          </motion.span>
        ))}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Stage + registry
 * ──────────────────────────────────────────────────────────────────────── */

const VISUALS: Record<VisualKind, () => ReactNode> = {
  "paid-ads": PaidAds,
  social: Social,
  content: Content,
  email: Email,
  influencer: Influencer,
  campaign: Campaign,
  brand: Brand,
  graphic: Graphic,
  uiux: UIUX,
  video: Video,
  motion: MotionGfx,
  photo: Photo,
  webdev: WebDev,
  ecommerce: Ecommerce,
  software: Software,
  api: Api,
  maintenance: Maintenance,
  optimization: Optimization,
  ga: GA,
  roi: Roi,
  cro: Cro,
  behavior: Behavior,
  seo: Seo,
  research: Research,
};

/**
 * Dark animated stage for a sub-service. The inner animation only mounts
 * while the stage is on screen, so off-screen loops don't burn CPU.
 */
export default function SubServiceVisual({ kind }: { kind: VisualKind }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const Visual = VISUALS[kind];

  return (
    <div
      ref={ref}
      className="relative aspect-[5/4] w-full rounded-[2rem] overflow-hidden bg-[#0F0F10] shadow-[0_40px_80px_-30px_rgba(15,15,16,0.55)]"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      {/* drifting glow */}
      <motion.div
        className="absolute w-[70%] aspect-square rounded-full bg-[#E3222A]/25 blur-[90px]"
        animate={{ left: ["-10%", "40%", "-10%"], top: ["-20%", "40%", "-20%"] }}
        transition={loop(14)}
      />
      {inView && <Visual />}
    </div>
  );
}
