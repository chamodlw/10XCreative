import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0F0F10] text-white select-none overflow-hidden">
      {/* Glowing Radial Ambience */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#E3222A]/20 blur-[130px] pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-[#E3222A]/30 blur-[60px] pointer-events-none animate-pulse" />

      {/* Center Branded Loader Assembly */}
      <div className="relative flex flex-col items-center">
        {/* Rotating Orbit Ring around Favicon */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full animate-[spin_5s_linear_infinite]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="rgba(227, 34, 42, 0.4)"
              strokeWidth="2"
              strokeDasharray="14 10"
            />
          </svg>

          <svg
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_3s_linear_infinite_reverse]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="1.5"
              strokeDasharray="6 30"
            />
          </svg>

          {/* Glass Disc with favicon */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-[0_0_35px_rgba(227,34,42,0.6)] flex items-center justify-center p-3">
            <Image
              src="/favicon.png"
              alt="10X Creative"
              width={64}
              height={64}
              priority
              className="object-contain w-12 h-12 sm:w-14 sm:h-14 relative z-10"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="flex items-center gap-2 mt-6">
          <span className="font-display text-lg tracking-[0.2em] text-white uppercase">
            10X
          </span>
          <span className="text-base text-[#E3222A] animate-pulse">⚡</span>
          <span className="text-base text-[#E3222A] animate-pulse">CREATIVE</span>
        </div>

        {/* High-Tech Loading Line */}
        <div className="w-44 h-1 bg-white/10 rounded-full overflow-hidden mt-4 relative">
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#E3222A] to-transparent rounded-full shadow-[0_0_10px_#E3222A] animate-[pulse_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
