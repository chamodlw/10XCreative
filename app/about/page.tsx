import { Metadata } from "next";
import Image from "next/image";
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
    number: "01",
    tag: "FOUNDER & DIRECTOR",
    name: "Ajwad Ameer",
    role: "Founder & Director",
    bio: "Helping Ambitious Brands Build, Grow & Scale. Marketing + Growth",
    image: "/images/team/Ajwad-Ameer.png",
  },
  {
    number: "02",
    tag: "CO-FOUNDER",
    name: "Tharsheen Jude",
    role: "Co-Founder",
    bio: "Co founder, ads runner",
    image: "/images/team/Tharsheen-Jude.jpg",
  },
  {
    number: "03",
    tag: "CREATIVE & UI/UX",
    name: "Maheshi De Silva",
    role: "UI/UX & Creative Designer",
    bio: "Google UX Design Certified | Creating Engaging User Experiences",
    image: "/images/team/Maheshi-De-Silva.jpg",
  },
  {
    number: "04",
    tag: "PERFORMANCE",
    name: "Dineshika Rathnayake",
    role: "Digital Marketing Executive",
    bio: "Digital Marketing Executive",
    image: "/images/team/Dineshika-Rathnayake.jpg",
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
              className="group relative bg-white rounded-3xl p-3 border border-black/8 shadow-xs hover:shadow-2xl hover:border-[#E3222A]/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative h-[320px] sm:h-[340px] w-full rounded-2xl overflow-hidden bg-[#ECECEA]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

               

                {/* Bottom role pill floating on image */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="inline-block px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#E3222A] text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 pt-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-[#0F0F10] group-hover:text-[#E3222A] transition-colors leading-tight mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">
                    {member.bio}
                  </p>
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
