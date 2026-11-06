import { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { BLOG_POSTS, getPostBySlug, formatBlogDate, type BlogBlock } from "@/data/blogs";
import { CAPABILITIES } from "@/data/capabilities";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-tight text-[#0F0F10] mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="space-y-3 my-6">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base sm:text-lg text-[#3A3A3A] leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#E3222A] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 pl-6 border-l-4 border-[#E3222A] font-display text-2xl sm:text-3xl uppercase tracking-tight leading-snug text-[#0F0F10]">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="text-base sm:text-lg text-[#3A3A3A] leading-relaxed my-5">{block.text}</p>;
  }
}

// The page shell is static; the params-dependent article streams inside Suspense
// so the shell can be shared across every /blog/[slug] link.
export default function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      <Suspense fallback={<ArticleSkeleton />}>
        <BlogPostContent params={params} />
      </Suspense>
    </div>
  );
}

function ArticleSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-16 animate-pulse" aria-hidden>
      <div className="h-4 w-28 rounded bg-black/10 mb-8" />
      <div className="h-5 w-40 rounded-full bg-black/10 mb-6" />
      <div className="h-14 w-full rounded bg-black/10 mb-3" />
      <div className="h-14 w-2/3 rounded bg-black/10 mb-8" />
      <div className="h-5 w-full rounded bg-black/5 mb-2" />
      <div className="h-5 w-5/6 rounded bg-black/5" />
    </div>
  );
}

async function BlogPostContent({ params }: { params: PageProps<"/blog/[slug]">["params"] }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cap = CAPABILITIES.find((c) => c.key === post.capability)!;
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="max-w-3xl mx-auto px-6 sm:px-10 pb-16">
        <Link
          href="/blog"
          data-cursor="link"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B6B6B] hover:text-[#E3222A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href={cap.href}
            className="px-3 py-1 rounded-full bg-[#E3222A] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#0F0F10] transition-colors"
          >
            {cap.label}
          </Link>
          <span className="text-xs text-[#6B6B6B]">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time> · {post.readTime}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-[0.95] text-[#0F0F10] mb-6">
          {post.title}
        </h1>
        <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed pb-8 border-b border-black/10">
          {post.excerpt}
        </p>
        <p className="text-xs font-bold uppercase tracking-wider text-[#0F0F10] mt-6">By {post.author}</p>

        <div className="relative aspect-[16/9] mt-8 rounded-3xl overflow-hidden bg-[#0F0F10]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 704px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-6">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0F0F10] text-white">
          <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-tight mb-3">
            Want this working for <span className="text-[#E3222A]">your brand</span>?
          </h3>
          <p className="text-white/70 mb-6">
            Explore our {cap.label.toLowerCase()} capability or talk to our team about your goals.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="primary" size="md" icon>
              Get a Proposal
            </Button>
            <Link
              href={cap.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#0F0F10] transition-colors"
            >
              Explore {cap.label} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* More articles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 sm:pb-32">
        <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[#0F0F10] mb-8">
          More <span className="text-[#E3222A]">articles</span>
        </h2>
        <div className="border-t border-[#0F0F10]/15">
          {others.map((p) => {
            const c = CAPABILITIES.find((x) => x.key === p.capability)!;
            return (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                data-cursor="link"
                className="group flex items-center justify-between gap-6 py-6 border-b border-[#0F0F10]/15"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E3222A]">{c.label}</span>
                  <h3 className="font-display text-xl sm:text-3xl uppercase tracking-tight text-[#0F0F10] group-hover:text-[#E3222A] transition-colors">
                    {p.title}
                  </h3>
                </div>
                <span className="w-10 h-10 rounded-full border border-[#0F0F10]/20 group-hover:bg-[#E3222A] group-hover:border-[#E3222A] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
