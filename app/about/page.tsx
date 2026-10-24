import { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Stats from "@/components/sections/Stats";
import SparkDivider from "@/components/effects/SparkDivider";
import { Check, Target, Lightbulb, Shield, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Results-Driven Marketing Agency Sri Lanka",
  description:
    "Learn about 10X Creative, Sri Lanka's high-performance digital marketing agency. Our mission, values, 5-stage framework, and visionary team.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Audit",
    desc: "We analyze your audience, competitive landscape, historical conversion data, and brand baseline.",
  },
  {
    step: "02",
    title: "Strategize & Plan",
    desc: "We engineer a full-funnel roadmap: creative hooks, channel mix, media budget, and measurable KPIs.",
  },
  {
    step: "03",
    title: "Create & Craft",
    desc: "Our creative studio produces high-converting visuals, cinematic short-form video, copy, and landing pages.",
  },
  {
    step: "04",
    title: "Launch & Calibrate",
    desc: "Campaigns go live with real-time conversion API tracking, pixel attribution, and iterative budget adjustments.",
  },
  {
    step: "05",
    title: "Scale & Optimize",
    desc: "We double down on top-performing assets, optimize acquisition cost, and scale revenue 10X.",
  },
];

const CORE_VALUES = [
  {
    icon: Target,
    title: "Obsession with ROI",
    desc: "Vanity likes don't pay bills. Every dollar invested must drive verifiable revenue or qualified sales pipeline.",
  },
  {
    icon: Lightbulb,
    title: "Creative Edge",
    desc: "We push boundaries with cinematic aesthetics, witty storytelling, and distinct visual systems.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "No hidden agency markups or vague metrics. You get real-time dashboards and direct strategic access.",
  },
  {
    icon: Rocket,
    title: "Speed of Execution",
    desc: "Digital trends evolve by the hour. We launch, test, and iterate faster than legacy agencies.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Ajwad",
    role: "Founder & Lead Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bio: "Pioneering digital growth strategies and paid advertising architectures for leading brands across Sri Lanka.",
  },
  {
    name: "Dinuk Perera",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Oversees brand identities, cinematic commercials, and viral content production with Awwwards-tier craft.",
  },
  {
    name: "Shenali Fernando",
    role: "Head of Performance Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    bio: "Meta & Google Ads specialist managing high-spend ROAS funnels, conversion tracking, and retargeting.",
  },
  {
    name: "Kavinda Silva",
    role: "Lead Full-Stack Web Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Next.js, React, and UX specialist engineering sub-second websites that convert casual traffic into buyers.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> ABOUT 10X CREATIVE
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            WE ENGINEER <span className="text-[#E3222A]">EXPONENTIAL</span> DIGITAL GROWTH.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Headquartered in Colombo, Sri Lanka, 10X Creative is a modern creative marketing agency and web solutions provider. We fuse data science with breakthrough visual storytelling to help ambitious brands scale.
          </p>
        </div>
      </section>

      {/* Story & Agency Roots */}
      <section className="py-16 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[440px] rounded-3xl overflow-hidden shadow-xl border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="10X Creative Agency Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase text-[#E3222A] tracking-wider">
                OUR STORY & PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#0F0F10]">
                TIRED OF COOKIE-CUTTER AGENCIES? SO WERE WE.
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                10X Creative was founded on a simple conviction: traditional marketing agencies deliver reports filled with vanity impressions, while clients starve for real conversions and qualified leads.
              </p>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                We rebuilt the agency model from scratch. By uniting performance paid advertising, cinematic video production, sharp brand design, and modern Next.js web architectures under one roof, we execute campaigns that create tangible, compounded revenue.
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" icon magnetic>
                  Work With Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline: Discover → Strategize → Create → Launch → Optimize */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle
            badge="OUR 5-STEP FRAMEWORK"
            title="HOW WE DELIVER 10X RESULTS."
            highlightWord="RESULTS"
            subtitle="A systematic, battle-tested process designed to minimize risk and maximize digital acquisition."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-[#E3222A]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-4xl text-[#E3222A] block mb-4">
                  {step.step}
                </span>
                <h3 className="font-display text-xl uppercase tracking-wider text-[#0F0F10] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-1.5 text-[11px] font-bold text-[#E3222A]">
                <span>⚡ Step {step.step} Complete</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0F0F10] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <SectionTitle
            badge="OUR FOUNDATIONAL VALUES"
            title="THE PRINCIPLES THAT DRIVE US."
            highlightWord="PRINCIPLES"
            subtitle="We hold ourselves to an uncompromising standard in creativity, performance, and transparency."
            dark
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E3222A] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E3222A]/20 text-[#E3222A] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wider text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <SectionTitle
          badge="MEET THE STRATEGISTS"
          title="THE MINDS BEHIND 10X CREATIVE."
          highlightWord="MINDS"
          subtitle="Experienced marketers, award-winning designers, and full-stack engineers united by creative excellence."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs hover:shadow-xl transition-all"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold text-[#E3222A] uppercase tracking-wider block mb-1">
                  {member.role}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-tight text-[#0F0F10] mb-2">
                  {member.name}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section Reuse */}
      <Stats />

      {/* Final CTA Band */}
      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0F0F10] mb-6">
          READY TO WORK WITH A RESULTS-FIRST TEAM?
        </h2>
        <p className="text-base text-[#6B6B6B] mb-8 max-w-xl mx-auto">
          Let’s discuss your current digital challenges and build a roadmap that accelerates conversions.
        </p>
        <Button href="/contact" variant="primary" size="lg" icon magnetic>
          Schedule a Consultation Now
        </Button>
      </section>
    </div>
  );
}
