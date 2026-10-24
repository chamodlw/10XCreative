"use client";

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
            <ClientCard key={client.id} client={client} />
          ))}
        </Marquee>
      </div>

      {/* Row 2 Marquee (Moving Right) */}
      <div>
        <Marquee direction="right" speed={32} pauseOnHover>
          {CLIENTS_ROW_2.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: ClientItem }) {
  return (
    <div className="group mx-3 px-8 py-5 rounded-2xl bg-white border border-black/5 shadow-xs hover:border-[#E3222A]/40 hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer">
      <div className="w-2.5 h-2.5 rounded-full bg-black/20 group-hover:bg-[#E3222A] transition-colors" />
      <div>
        <span className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#0F0F10] group-hover:text-[#E3222A] transition-colors block">
          {client.logoText}
        </span>
        <span className="text-[11px] font-semibold text-[#6B6B6B] block">
          {client.badge || client.category}
        </span>
      </div>
    </div>
  );
}
