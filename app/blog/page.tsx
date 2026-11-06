import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, formatBlogDate } from "@/data/blogs";
import { CAPABILITIES } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Blog | Marketing, Creative, Web & Analytics Insights",
  description:
    "Practical insights from 10X Creative on performance marketing, creative production, high-speed websites and analytics for growing brands in Sri Lanka.",
};

export default function BlogPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-12">
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
          The 10X <span className="text-[#E3222A]">Blog</span>.
        </h1>
        <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
          Field notes from our team on marketing, creative, tech builds and analytics — what works, what doesn&apos;t,
          and how to grow faster.
        </p>
      </section>

      {/* ── POSTS ────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => {
            const cap = CAPABILITIES.find((c) => c.key === post.capability)!;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                data-cursor="link"
                className="group flex flex-col rounded-3xl bg-white border border-black/5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative aspect-[16/10] bg-[#0F0F10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                    <span className="self-start px-3 py-1 rounded-full bg-[#E3222A] text-white text-[10px] font-bold uppercase tracking-widest">
                      {cap.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white/90 text-[10px] font-bold uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-[#6B6B6B] mb-3">
                    <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                    <span className="w-1 h-1 rounded-full bg-[#E3222A]" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl uppercase tracking-tight leading-tight text-[#0F0F10] group-hover:text-[#E3222A] transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F0F10] group-hover:text-[#E3222A] transition-colors">
                    Read article
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
