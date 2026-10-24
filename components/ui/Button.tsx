"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ink" | "white";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = false,
  magnetic = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#E3222A] hover:bg-[#B8141C] text-white shadow-[0_4px_16px_rgba(227,34,42,0.35)] hover:shadow-[0_6px_22px_rgba(227,34,42,0.5)] border border-transparent",
    secondary:
      "bg-[#1A1A1A] hover:bg-[#0F0F10] text-white border border-white/10 hover:border-white/25",
    outline:
      "bg-transparent hover:bg-[#0F0F10] text-[#0F0F10] hover:text-white border-2 border-[#0F0F10] hover:border-[#0F0F10]",
    ink:
      "bg-[#0F0F10] hover:bg-[#E3222A] text-white border border-transparent transition-colors",
    white:
      "bg-white hover:bg-[#F7F7F5] text-[#0F0F10] hover:text-[#E3222A] shadow-lg border border-transparent",
  }[variant];

  const baseStyles = `group relative inline-flex items-center justify-center font-bold tracking-wider uppercase rounded-full transition-all duration-300 select-none overflow-hidden active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </>
  );

  const innerElement = href ? (
    <Link
      href={href}
      className={baseStyles}
      onClick={onClick}
      target={target}
      rel={rel}
      data-cursor="link"
    >
      {content}
    </Link>
  ) : (
    <button
      type={type}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled}
      data-cursor="link"
    >
      {content}
    </button>
  );

  if (magnetic) {
    return <MagneticButton>{innerElement}</MagneticButton>;
  }

  return innerElement;
}
