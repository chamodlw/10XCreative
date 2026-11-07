"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface TeamMember {
  number: string;
  tag: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

/** Team cards: stacked 1-up on mobile, 2-up on tablet; arrow-driven slider (4 per view) on lg+ screens. */
export default function TeamSlider({ members }: { members: TeamMember[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-team-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + gap), behavior: "smooth" });
  };

  const arrow =
    "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <div>
      <div className="hidden lg:flex justify-end gap-3 mb-6">
        <button
          type="button"
          onClick={() => slide(-1)}
          disabled={!canPrev}
          aria-label="Previous team member"
          data-cursor="link"
          className={`${arrow} border-black/15 text-[#0F0F10] enabled:hover:bg-[#E3222A] enabled:hover:border-[#E3222A] enabled:hover:text-white`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => slide(1)}
          disabled={!canNext}
          aria-label="Next team member"
          data-cursor="link"
          className={`${arrow} border-black/15 text-[#0F0F10] enabled:hover:bg-[#E3222A] enabled:hover:border-[#E3222A] enabled:hover:text-white`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        data-lenis-prevent-wheel
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:flex lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:scroll-smooth lg:pb-4 lg:-mb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Team members"
      >
        {members.map((member) => (
          <div
            key={member.number}
            data-team-card
            className="group relative lg:snap-start lg:shrink-0 lg:basis-[calc((100%-6rem)/4)] bg-white rounded-3xl p-3 border border-black/8 shadow-xs hover:shadow-2xl hover:border-[#E3222A]/40 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-[320px] sm:h-[340px] w-full rounded-2xl overflow-hidden bg-[#ECECEA]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <span className="inline-block px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#E3222A] text-[11px] font-bold uppercase tracking-wider shadow-md">
                  {member.role}
                </span>
              </div>
            </div>

            <div className="p-4 pt-5 flex flex-col flex-grow">
              <h3 className="font-display text-2xl uppercase tracking-tight text-[#0F0F10] group-hover:text-[#E3222A] transition-colors leading-tight mb-2">
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
