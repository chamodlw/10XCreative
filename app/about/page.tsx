import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Target, Lightbulb, Shield, Rocket, Eye, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Results-Driven Marketing Agency Sri Lanka",
  description:
    "Learn about 10X Creative, Sri Lanka's high-performance digital marketing agency. Our mission, values, 5-stage framework, and visionary team.",
};

const VISION_MISSION = {
  vision: {
    icon: Eye,
    label: "OUR VISION",
    title: "TO BE THE MOST RESULTS-DRIVEN CREATIVE FORCE IN SOUTH ASIA.",
    desc: "We envision a future where every ambitious brand — regardless of size — has access to world-class creative strategy, precision performance marketing, and technology-powered storytelling. We aim to be the agency that rewrites what's possible for Sri Lankan businesses on the global stage.",
  },
  mission: {
    icon: Compass,
    label: "OUR MISSION",
    title: "TO TRANSFORM BOLD IDEAS INTO EXPONENTIAL DIGITAL GROWTH.",
    desc: "Our mission is to fuse creative brilliance with data-driven precision — delivering campaigns that don't just look exceptional, but perform beyond expectations. We partner with brands that dare to think bigger, and we execute with the speed, transparency, and measurable impact they deserve.",
  },
};

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
    socials: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Dinuk Perera",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Oversees brand identities, cinematic commercials, and viral content production with Awwwards-tier craft.",
    socials: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Shenali Fernando",
    role: "Head of Performance Marketing",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    bio: "Meta & Google Ads specialist managing high-spend ROAS funnels, conversion tracking, and retargeting.",
    socials: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "Kavinda Silva",
    role: "Lead Full-Stack Web Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Next.js, React, and UX specialist engineering sub-second websites that convert casual traffic into buyers.",
    socials: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="max-w-5xl">
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
                src="/images/others/our-story.png"
                alt="10X Creative Agency Story"
                fill
                className="object-cover object-left-top"
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

      {/* Vision & Mission Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTitle
            badge="WHO WE ARE"
            title="VISION & MISSION."
            highlightWord="VISION"
            subtitle="The north star that drives everything we create, build, and deliver for our clients."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="relative group p-10 rounded-3xl bg-[#0F0F10] text-white overflow-hidden border border-white/10 hover:border-[#E3222A]/60 transition-all duration-500">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3222A]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#E3222A]/20 text-[#E3222A] flex items-center justify-center mb-8">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#E3222A] block mb-4">
                {VISION_MISSION.vision.label}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight mb-6">
                {VISION_MISSION.vision.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {VISION_MISSION.vision.desc}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group p-10 rounded-3xl bg-white border border-black/8 shadow-xs overflow-hidden hover:shadow-xl hover:border-[#E3222A]/30 transition-all duration-500">
            {/* Background accent */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFF1F1] rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF1F1] text-[#E3222A] flex items-center justify-center mb-8">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#E3222A] block mb-4">
                {VISION_MISSION.mission.label}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[#0F0F10] leading-tight mb-6">
                {VISION_MISSION.mission.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                {VISION_MISSION.mission.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid — moved above Core Values */}
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
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-xs hover:shadow-xl transition-all duration-300"
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
                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-5">
                  {member.bio}
                </p>
                {/* Social Links */}
                <div className="flex items-center gap-2 pt-4 border-t border-black/5">
                  {/* Facebook */}
                  <Link
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Facebook`}
                    className="w-8 h-8 rounded-full bg-[#F7F7F5] hover:bg-[#1877F2] text-[#6B6B6B] hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  </Link>
                  {/* Instagram */}
                  <Link
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    className="w-8 h-8 rounded-full bg-[#F7F7F5] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] text-[#6B6B6B] hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </Link>
                  {/* LinkedIn */}
                  <Link
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="w-8 h-8 rounded-full bg-[#F7F7F5] hover:bg-[#0A66C2] text-[#6B6B6B] hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values — moved below Team */}
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
