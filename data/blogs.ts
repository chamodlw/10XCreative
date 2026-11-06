import type { CapabilityLink } from "@/data/capabilities";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  capability: CapabilityLink["key"];
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readTime: string;
  author: string;
  tags: string[];
  image: string;
  imageAlt: string;
  content: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "whatsapp-lead-funnels-turn-ad-clicks-into-sales",
    capability: "marketing",
    title: "WhatsApp Lead Funnels: Turning Ad Clicks Into Sales Conversations",
    excerpt:
      "Sri Lankan customers would rather chat than fill in a form. Here is how we build click-to-WhatsApp funnels that qualify leads and close faster.",
    date: "2026-11-04",
    readTime: "5 min read",
    author: "10X Creative Team",
    tags: ["Lead Generation", "WhatsApp", "Funnels"],
    image: "/images/blogs/1.avif",
    imageAlt: "Person holding a smartphone over a desk with planning notes",
    content: [
      {
        type: "p",
        text: "For many Sri Lankan businesses, WhatsApp is where sales actually happen. Customers want to ask a quick question, see a price and talk to a real person — not wait for a callback after filling in a long form. Click-to-WhatsApp ads meet them exactly where they already are.",
      },
      { type: "h2", text: "Why WhatsApp beats the traditional lead form" },
      {
        type: "list",
        items: [
          "Lower friction: one tap opens a chat, with no typing of names and emails",
          "Faster response: leads contacted within minutes convert far better",
          "Higher trust: a real conversation feels personal, not salesy",
          "Richer context: customers share photos, voice notes and exact needs",
        ],
      },
      { type: "h2", text: "1. Start with a clear, specific offer" },
      {
        type: "p",
        text: "“Message us for more info” rarely works. A specific reason to start the chat — a price list, a free consultation, a limited-time package — sets expectations and attracts people who are ready to buy.",
      },
      { type: "h2", text: "2. Pre-fill the first message" },
      {
        type: "p",
        text: "We set up each ad with a pre-filled greeting that tells your team which campaign and product the lead came from. Your sales staff instantly know the context, and you can track which ads produce real conversations.",
      },
      { type: "h2", text: "3. Qualify with quick replies" },
      {
        type: "p",
        text: "A short automated welcome with two or three quick-reply questions — budget, location, timeline — filters out tyre-kickers and hands your team leads that are worth their time.",
      },
      {
        type: "quote",
        text: "A lead is not a sale. The speed and quality of the conversation is what closes it.",
      },
      { type: "h2", text: "4. Measure conversations, not just clicks" },
      {
        type: "p",
        text: "We track conversations started, qualified leads and closed sales for every campaign. That data flows back into your ad optimisation, so the platforms learn to find more people who actually buy.",
      },
    ],
  },
  {
    slug: "landing-page-anatomy-that-converts",
    capability: "tech-build",
    title: "Landing Page Anatomy: 7 Elements That Turn Clicks Into Leads",
    excerpt:
      "Sending paid traffic to your home page wastes budget. These are the seven building blocks we put on every high-converting landing page.",
    date: "2026-11-02",
    readTime: "6 min read",
    author: "10X Creative Team",
    tags: ["Landing Pages", "CRO", "Web Design"],
    image: "/images/blogs/2.png",
    imageAlt: "Laptop and smartphone showing a modern landing page with red call-to-action buttons",
    content: [
      {
        type: "p",
        text: "Your home page is built to serve everyone. A landing page is built to make one specific visitor take one specific action. When you are paying for every click, that focus makes a dramatic difference to your cost per lead.",
      },
      { type: "h2", text: "1. A headline that matches the ad" },
      {
        type: "p",
        text: "If the ad promises a free consultation, the headline should say free consultation. Message match reassures visitors that they are in the right place in the first second.",
      },
      { type: "h2", text: "2. One clear call to action" },
      {
        type: "p",
        text: "Remove the navigation menu and competing links. Repeat the same call to action at the top, middle and bottom of the page so it is always within reach.",
      },
      { type: "h2", text: "3. Benefits before features" },
      {
        type: "p",
        text: "Visitors care about what changes for them. Lead with outcomes — more time, more sales, less stress — and support them with the features that make those outcomes possible.",
      },
      { type: "h2", text: "4. Real social proof" },
      {
        type: "p",
        text: "Client logos, short testimonials with names and photos, and concrete numbers build trust far better than generic claims.",
      },
      { type: "h2", text: "5. A short, friendly form" },
      {
        type: "list",
        items: [
          "Ask only for what you need to follow up — often just a name and phone number",
          "Offer WhatsApp as an alternative to the form",
          "Show what happens next so there is no uncertainty after submitting",
        ],
      },
      { type: "h2", text: "6. Mobile-first speed" },
      {
        type: "p",
        text: "Most paid traffic arrives on phones. We design for the small screen first and keep pages light, so they load almost instantly even on mobile data.",
      },
      {
        type: "quote",
        text: "A great landing page does one job, and it does it fast.",
      },
      { type: "h2", text: "7. Tracking built in from day one" },
      {
        type: "p",
        text: "Every button click, form submission and WhatsApp tap is tracked, so we can see exactly where visitors drop off and keep improving the page with A/B tests.",
      },
    ],
  },
  {
    slug: "meta-ads-roas-playbook-sri-lanka",
    capability: "marketing",
    title: "The Meta Ads ROAS Playbook for Sri Lankan Brands",
    excerpt:
      "How we structure campaigns, audiences and creative testing to push return on ad spend past 4X — without simply raising the budget.",
    date: "2026-10-28",
    readTime: "6 min read",
    author: "10X Creative Team",
    tags: ["Paid Ads", "Meta", "ROAS"],
    image: "/images/blogs/3.avif",
    imageAlt: "Laptop on a desk showing an ads performance dashboard with charts",
    content: [
      {
        type: "p",
        text: "Most Sri Lankan businesses running Meta ads hit the same wall: costs climb, results flatten, and the only lever anyone pulls is the budget. Scaling profitably is not about spending more — it is about spending in the right structure, against the right signals, with creative that earns attention.",
      },
      { type: "h2", text: "1. Simplify your account structure" },
      {
        type: "p",
        text: "Fragmented campaigns with dozens of small ad sets starve the algorithm of data. We consolidate into a few campaigns per funnel stage so each ad set exits the learning phase quickly and delivery stabilises.",
      },
      {
        type: "list",
        items: [
          "One prospecting campaign with broad or Advantage+ audiences",
          "One retargeting campaign for engaged visitors and video viewers",
          "One retention campaign for past customers and WhatsApp leads",
        ],
      },
      { type: "h2", text: "2. Let creative do the targeting" },
      {
        type: "p",
        text: "With broad audiences, your creative is your targeting. A hook aimed at busy mothers in Colombo will find busy mothers in Colombo. We test three to five distinct concepts per month — not tiny variations of the same ad — and scale the winners.",
      },
      { type: "h2", text: "3. Feed the algorithm better data" },
      {
        type: "p",
        text: "Browser tracking alone loses a large share of conversions. Pairing the Meta Pixel with the Conversions API gives the platform a fuller picture, which improves optimisation and lowers cost per result.",
      },
      {
        type: "quote",
        text: "Budget amplifies what is already working. Fix structure, creative and data first — then scale.",
      },
      { type: "h2", text: "4. Judge results on revenue, not clicks" },
      {
        type: "p",
        text: "Cheap clicks and high CTR mean little if they do not turn into sales. We report on blended ROAS, cost per qualified lead and actual revenue so every decision is tied to what reaches your bank account.",
      },
    ],
  },
  {
    slug: "short-form-video-hooks-that-stop-the-scroll",
    capability: "creative",
    title: "Short-Form Video: Hooks That Stop the Scroll in 3 Seconds",
    excerpt:
      "The first three seconds decide whether your Reel or TikTok gets watched. Here is the hook framework our creative team uses on every shoot.",
    date: "2026-10-14",
    readTime: "5 min read",
    author: "10X Creative Team",
    tags: ["Video", "Reels", "TikTok"],
    image: "/images/blogs/4.avif",
    imageAlt: "Video editing timeline on a monitor",
    content: [
      {
        type: "p",
        text: "Short-form video is now the main way people discover brands. But audiences decide almost instantly whether to keep watching. If your opening does not earn attention, the rest of your video — however beautiful — never gets seen.",
      },
      { type: "h2", text: "Start with the payoff, not the logo" },
      {
        type: "p",
        text: "Brand intros are the fastest way to lose a viewer. Open with the result, the transformation or the surprising moment, then explain how you got there.",
      },
      { type: "h2", text: "Five hook formats that consistently work" },
      {
        type: "list",
        items: [
          "The bold claim: “This is why your ads are not converting.”",
          "The visual pattern-break: unexpected motion or framing in frame one",
          "The question: speak directly to a problem your viewer has today",
          "The before-and-after: show the end result immediately",
          "The behind-the-scenes: let people see how something is really made",
        ],
      },
      { type: "h2", text: "Design for sound-off viewing" },
      {
        type: "p",
        text: "Many people scroll with the sound off. Bold on-screen captions, clear text overlays and strong visual storytelling make sure your message lands either way.",
      },
      {
        type: "quote",
        text: "Production quality earns trust. The hook earns the view. You need both.",
      },
      { type: "h2", text: "Shoot in batches, edit for each platform" },
      {
        type: "p",
        text: "We plan shoot days to capture a month of content at once, then cut separate edits for Reels, TikTok and YouTube Shorts — each with its own pacing, length and caption style.",
      },
    ],
  },
  {
    slug: "why-website-speed-is-costing-you-sales",
    capability: "tech-build",
    title: "Why a Slow Website Is Quietly Costing You Sales",
    excerpt:
      "Every extra second of load time loses visitors. Here is why we build on Next.js and what a sub-second website means for your conversion rate.",
    date: "2026-09-30",
    readTime: "5 min read",
    author: "10X Creative Team",
    tags: ["Web Design", "Next.js", "Performance"],
    image: "/images/blogs/5.avif",
    imageAlt: "Laptop on a desk showing website code",
    content: [
      {
        type: "p",
        text: "You can run the best ad campaign in the country and still lose the sale on your own website. Most of your visitors arrive on mobile data, and if your page takes too long to appear, they leave before they ever see your offer.",
      },
      { type: "h2", text: "Speed affects every number you care about" },
      {
        type: "list",
        items: [
          "Higher bounce rates the longer a page takes to load",
          "Lower conversion rates on checkout and lead forms",
          "Weaker Google rankings, since Core Web Vitals are a ranking signal",
          "Higher ad costs, because poor landing pages hurt ad quality scores",
        ],
      },
      { type: "h2", text: "What we do differently" },
      {
        type: "p",
        text: "We build on Next.js with pages prerendered ahead of time, optimised images in modern formats, and only the JavaScript each page actually needs. The result is a site that feels instant on a mid-range phone.",
      },
      {
        type: "quote",
        text: "Your website is your best salesperson. It should never keep a customer waiting.",
      },
      { type: "h2", text: "Built to convert, not just to look good" },
      {
        type: "p",
        text: "Speed is the foundation, but structure closes the sale: clear calls to action, short forms, WhatsApp click-to-chat and trust signals placed where hesitation happens.",
      },
    ],
  },
  {
    slug: "server-side-tracking-explained",
    capability: "analytics",
    title: "Server-Side Tracking Explained: Stop Losing Conversion Data",
    excerpt:
      "Ad blockers and privacy changes hide a large part of your conversions. Server-side tracking brings that data back — here is how it works.",
    date: "2026-09-16",
    readTime: "6 min read",
    author: "10X Creative Team",
    tags: ["Tracking", "Attribution", "GA4"],
    image: "/images/blogs/6.avif",
    imageAlt: "Analytics dashboard with charts and graphs",
    content: [
      {
        type: "p",
        text: "If the sales in your ads dashboard never match the sales in your bank account, you are not alone. Browser-based tracking is increasingly blocked, and every missed conversion makes your ad platforms optimise on incomplete data.",
      },
      { type: "h2", text: "Why browser tracking breaks" },
      {
        type: "list",
        items: [
          "Ad blockers stop tracking scripts from loading",
          "Browsers limit how long cookies last",
          "Users decline tracking prompts on their phones",
        ],
      },
      { type: "h2", text: "How server-side tracking helps" },
      {
        type: "p",
        text: "Instead of relying only on the visitor's browser, conversion events are sent from a server you control to platforms like Meta, Google and TikTok. The data is more complete, more reliable and fully under your ownership.",
      },
      {
        type: "quote",
        text: "You cannot scale what you cannot measure. Better data makes every ad dollar work harder.",
      },
      { type: "h2", text: "From data to decisions" },
      {
        type: "p",
        text: "Clean tracking is only the start. We connect it to live ROI dashboards so you can see which campaigns, creatives and channels actually drive revenue — and move budget accordingly.",
      },
      { type: "h2", text: "Privacy first" },
      {
        type: "p",
        text: "Server-side tracking should respect consent. We configure it to honour user choices and to send only the data each platform needs.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
