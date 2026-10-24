import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F0F10] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#E3222A]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Broken lightning animation */}
      <div className="relative mb-6 select-none">
        <span className="font-display text-9xl sm:text-[180px] leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.2)] block">
          4<span className="text-[#E3222A] inline-block animate-pulse">⚡</span>4
        </span>
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3222A]/15 border border-[#E3222A]/30 text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-4">
        <span>⚡</span> PAGE NOT FOUND
      </div>

      <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight mb-4">
        LOST IN THE DIGITAL WORLD?
      </h1>

      <p className="text-sm sm:text-base text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
        The page you are looking for doesn’t exist or has moved. Let’s bring you back to high-converting territory.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary" size="lg" icon magnetic>
          Back to Homepage
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
