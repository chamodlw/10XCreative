import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";
import WorkWithUs from "@/components/sections/WorkWithUs";
import SparkDivider from "@/components/effects/SparkDivider";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 5.1 Hero with hero-video.mp4 */}
      <Hero />

      {/* 5.2 Services */}
      <Services />

      <SparkDivider />

      {/* 5.3 About */}
      <About />

      {/* 5.5 Portfolio Bento Grid */}
      <Portfolio />

      {/* 5.6 Stats (Dark Ink) */}
      <Stats />

      {/* 5.7 Why Us */}
      <WhyUs />

      {/* 5.8 Testimonials (Dark) */}
      <Testimonials />

      <SparkDivider />

      {/* 5.9 Clients Marquee */}
      <Clients />

      {/* 5.10 Work With Us Big CTA */}
      <WorkWithUs />
    </main>
  );
}
