"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Marquee from "@/components/ui/Marquee";
import { CLIENTS_ROW_1, CLIENTS_ROW_2, ClientItem } from "@/data/clients";

export default function Clients() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F5] relative overflow-hidden" id="clients">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-16 text-center">
        <SectionTitle
          badge="PROVEN PARTNERSHIPS"
          title="TRUSTED BY VISIONARY BRANDS."
          highlightWord="VISIONARY"
          subtitle="We're proud to partner with businesses that dare to dream big. From startups to global enterprises, 10X Creative delivers the strategies that drive success."
          align="center"
        />
      </div>

      {/* Row 1 Marquee (Moving Left) */}
      <div className="mb-6">
        <Marquee direction="left" speed={30} pauseOnHover>
          {CLIENTS_ROW_1.map((client) => (
            <LogoCard key={client.id} client={client} />
          ))}
        </Marquee>
      </div>

      {/* Row 2 Marquee (Moving Right) */}
      <div>
        <Marquee direction="right" speed={32} pauseOnHover>
          {CLIENTS_ROW_2.map((client) => (
            <LogoCard key={client.id} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function LogoCard({ client }: { client: ClientItem }) {
  return (
    <div className="group mx-3 px-6 py-4 rounded-2xl bg-white border border-black/5 shadow-sm hover:border-[#E3222A]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer">
      <div className="relative h-14 w-36 sm:h-16 sm:w-44">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 144px, 176px"
        />
      </div>
    </div>
  );
}
