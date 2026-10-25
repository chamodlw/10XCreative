export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  headline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "Megaphone" | "Share2" | "Users" | "Video" | "Palette" | "Layout";
  heroImage: string;
  highlights: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metrics: { label: string; value: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    slug: "paid-advertising",
    number: "01",
    title: "Paid Advertising",
    headline: "Reach the right audience, with the right message, at the right time.",
    shortDescription: "Reach the right audience, with the right message, at the right time with high-ROI PPC campaigns.",
    fullDescription: "Stop wasting ad spend on vanity metrics. We build, manage, and scale hyper-targeted paid advertising campaigns across Meta (Facebook & Instagram), Google Search, YouTube, and TikTok to acquire high-value customers at minimum acquisition cost.",
    iconName: "Megaphone",
    heroImage: "/images/services/paid-advertising.jpg",
    highlights: [
      "Targeted Meta (Facebook & Instagram) Ads",
      "Google Search, Display & Performance Max",
      "Retargeting & Dynamic Audience Funnels",
      "ROAS-Focused Budget Allocation",
      "Real-time Analytics & Conversion Tracking"
    ],
    deliverables: [
      "Audience Persona & Competitor Ad Analysis",
      "High-converting Ad Copywriting & Creative Formats",
      "A/B Split Testing (Copy, Hook, Creative, Landing Page)",
      "Pixel, Conversion API & Google Tag Manager Setup",
      "Weekly Performance Dashboard & Strategic Optimization"
    ],
    process: [
      { step: "01", title: "Audience Audit", description: "Analyzing your ideal buyers, competitor spend, and conversion leakages." },
      { step: "02", title: "Funnel Engineering", description: "Designing multi-touchpoint campaigns from cold awareness to retargeting conversion." },
      { step: "03", title: "Creative Production", description: "Crafting thumb-stopping ad visuals, copy, and dedicated landing experiences." },
      { step: "04", title: "Launch & Scale", description: "Continuous optimization, audience pruning, and scaling winning ad sets." }
    ],
    faqs: [
      {
        question: "How much budget do I need to start paid advertising?",
        answer: "We recommend a minimum testing budget of LKR 50,000 to LKR 100,000 for local campaigns (or $500+ for international targets) to gather meaningful conversion data and generate clear ROI within the first 30 days."
      },
      {
        question: "How soon can we expect results from paid ads?",
        answer: "Unlike organic SEO, paid campaigns begin generating impressions and clicks within 24 hours of launch. Meaningful conversion calibration typically peaks within 7–14 days as algorithm machine learning optimizes."
      },
      {
        question: "Do you handle ad creatives and copywriting?",
        answer: "Yes, our team handles the entire lifecycle: concept ideation, copywriting, graphic/motion design, pixel installation, and weekly optimization."
      }
    ],
    metrics: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "Lower CPA", value: "-38%" },
      { label: "Ad Spend Managed", value: "$250K+" }
    ]
  },
  {
    id: "02",
    slug: "social-media-marketing",
    number: "02",
    title: "Social Media Marketing",
    headline: "Build awareness, engage with your audience, and foster meaningful connections.",
    shortDescription: "Build awareness, engage with your audience, and foster meaningful connections that turn followers into brand advocates.",
    fullDescription: "Social media is more than posting pretty pictures; it is your brand's digital flagship. We combine data-backed content calendars, community management, and trend-jacking to create vibrant social communities that actively buy.",
    iconName: "Share2",
    heroImage: "/images/services/social-media-marketing.jpg",
    highlights: [
      "Custom Brand Voice & Social Strategy",
      "Monthly Curated Content Calendar",
      "Community Management & Active Engagement",
      "Reels & Short-Form Video Strategy",
      "Influencer & Trend Collaboration"
    ],
    deliverables: [
      "Platform-specific visual identity guidelines",
      "12 to 24 high-aesthetic monthly posts (Carousels, Statics, Reels)",
      "Daily comment & direct message monitoring",
      "Monthly audience growth and engagement review"
    ],
    process: [
      { step: "01", title: "Brand Voice Positioning", description: "Defining tone, aesthetic pillars, and core themes that resonate with your target demographic." },
      { step: "02", title: "Content Engine", description: "Scripting, designing, and scheduling curated batches of scroll-stopping posts." },
      { step: "03", title: "Community Fostering", description: "Sparking active conversations, replying to DMs, and nurturing loyal followers." },
      { step: "04", title: "Growth Analytics", description: "Reviewing metrics, viral hooks, and adjusting strategy for monthly exponential reach." }
    ],
    faqs: [
      {
        question: "Which platforms should my brand be on?",
        answer: "We assess your customer demographics: Instagram and TikTok for B2C, Lifestyle, Food, and Fashion; LinkedIn and Meta for B2B, Real Estate, and Corporate Solutions."
      },
      {
        question: "Do you respond to direct messages and customer comments?",
        answer: "Yes, our community managers monitor inquiries and route hot leads directly to your sales team or WhatsApp."
      }
    ],
    metrics: [
      { label: "Engagement Lift", value: "+240%" },
      { label: "Organic Reach", value: "3.2M+" },
      { label: "Community Growth", value: "15K/mo" }
    ]
  },
  {
    id: "03",
    slug: "influencer-marketing",
    number: "03",
    title: "Influencer Marketing",
    headline: "Amplify your message through trusted voices in your industry.",
    shortDescription: "Amplify your message through trusted voices in your industry for authentic word-of-mouth scale.",
    fullDescription: "Tap into established creator loyalty. We vet, match, and orchestrate influencer campaigns with authentic storytellers in Sri Lanka and regional markets to build social proof that drives immediate purchases.",
    iconName: "Users",
    heroImage: "/images/services/influencer-marketing.jpg",
    highlights: [
      "Creator Vetting & Fake-Follower Audits",
      "Nano, Micro & Tier-1 Influencer Networks",
      "Creative Briefing & Narrative Freedom",
      "Contracting, Deliverables & Usage Rights",
      "Tracking Codes & Affiliate Conversion Attribution"
    ],
    deliverables: [
      "Handpicked creator roster with verified demographics",
      "Ironclad contracts and content brief development",
      "End-to-end liaison, product dispatch, and review approvals",
      "Attribution analytics tracking link clicks, coupon codes, and sales"
    ],
    process: [
      { step: "01", title: "Creator Discovery", description: "Identifying creators whose audience overlap exactly with your ideal buyers." },
      { step: "02", title: "Briefing & Contracting", description: "Setting clear narrative goals while allowing creators authentic storytelling freedom." },
      { step: "03", title: "Campaign Execution", description: "Coordinating synchronized drops, live unboxings, and interactive challenges." },
      { step: "04", title: "Attribution Review", description: "Measuring ROI, direct sales generated, and repurposing top creator content for paid ads." }
    ],
    faqs: [
      {
        question: "How do you ensure influencers don't have fake followers?",
        answer: "We run deep analytics to check follower authenticity, engagement ratios, audience geographic distribution, and past commercial campaign benchmarks."
      },
      {
        question: "Can we reuse creator content in our own paid ads?",
        answer: "Yes, we negotiate explicit digital usage rights so your brand can whitelist and boost creator content for months."
      }
    ],
    metrics: [
      { label: "Creator Network", value: "150+" },
      { label: "Campaign Virality", value: "98%" },
      { label: "Average Earned Media Value", value: "5.2x" }
    ]
  },
  {
    id: "04",
    slug: "content-creation",
    number: "04",
    title: "Content Creation",
    headline: "Create cinematic, sarcastic and scroll-stopping content that drives engagement on social media.",
    shortDescription: "Create cinematic, sarcastic and scroll-stopping content that drives viral engagement on social media.",
    fullDescription: "Standard corporate content is ignored. We produce energetic, witty, cinematic, and relatable video content tailored specifically for Reels, TikTok, and YouTube Shorts that hooks viewers in the first 1.5 seconds.",
    iconName: "Video",
    heroImage: "/images/services/content-creation.jpg",
    highlights: [
      "4K Cinematic Video Production",
      "Viral Hook Scriptwriting & Sarcastic Humor",
      "Studio & On-Location Shoots in Sri Lanka",
      "Fast-Paced Editing, Sound Design & Motion VFX",
      "Short-Form Video Batches (Reels/TikTok)"
    ],
    deliverables: [
      "Full storyboard concept & script draft",
      "Professional camera crew, lighting, audio gear, and direction",
      "Color grading, custom sound effects, captions, and 9:16 vertical exports",
      "Raw footage archives and multiple hook variations for ads"
    ],
    process: [
      { step: "01", title: "Trend & Hook Brainstorm", description: "Pinpointing viral hooks, relatable industry humor, and storytelling angles." },
      { step: "02", title: "Shooting Day", description: "Efficient on-location or studio filming session capturing multi-angle high-res footage." },
      { step: "03", title: "Dynamic Post-Production", description: "Rapid cuts, engaging on-screen typography, sound design, and color grading." },
      { step: "04", title: "Delivery & Variation", description: "Exporting multiple hook tests for maximum algorithmic push." }
    ],
    faqs: [
      {
        question: "Do you supply models, actors, and voiceovers?",
        answer: "Yes, we handle casting, talent selection, voice actors (English, Sinhala, Tamil), and shooting locations."
      },
      {
        question: "How many videos can we produce in one shoot?",
        answer: "In a single dedicated shoot day, we typically produce 8 to 16 short-form video assets ready for monthly distribution."
      }
    ],
    metrics: [
      { label: "Average Retention", value: "78%" },
      { label: "Viral Views", value: "10M+" },
      { label: "Content Produced", value: "500+ Assets" }
    ]
  },
  {
    id: "05",
    slug: "graphic-designing",
    number: "05",
    title: "Graphic Designing",
    headline: "Create brand-themed designs that captivate and communicate your brand's message effectively.",
    shortDescription: "Create brand-themed designs that captivate and communicate your brand's message effectively.",
    fullDescription: "Visual brilliance that commands attention. From high-fashion travel posters and architectural brochures to bold product packaging and social ads, we craft distinct visual identities that stay etched in memory.",
    iconName: "Palette",
    heroImage: "/images/services/graphic-designing.jpg",
    highlights: [
      "Brand Identity & Style Guides",
      "Marketing Collateral & Promotional Print",
      "Billboard & Outdoor Advertising Layouts",
      "Digital Display Ads & Social Graphics",
      "Packaging & Label Design"
    ],
    deliverables: [
      "Vector logo files, color palettes, and typography rules",
      "Print-ready CMYK PDFs with bleed and crop marks",
      "Optimized RGB digital assets for web & social platforms",
      "Editable design source files (Figma, Illustrator, Photoshop)"
    ],
    process: [
      { step: "01", title: "Visual Discovery", description: "Deconstructing your industry visual landscape and defining a bold visual differentiator." },
      { step: "02", title: "Moodboards & Concepts", description: "Presenting distinct aesthetic routes, typography pairings, and color harmonies." },
      { step: "03", title: "Design Crafting", description: "Refining every vector curve, contrast ratio, and layout grid with pixel precision." },
      { step: "04", title: "Production Exports", description: "Delivering complete vector sets, print specifications, and digital brand libraries." }
    ],
    faqs: [
      {
        question: "Do you provide editable source files?",
        answer: "Yes, upon final sign-off, you receive full ownership and source files (Figma, AI, PSD, SVG, and high-res exports)."
      },
      {
        question: "Can you redesign an existing brand identity?",
        answer: "Absolutely. We specialize in modernizing legacy brand logos, colors, and design systems while preserving core brand equity."
      }
    ],
    metrics: [
      { label: "Brand Identities Created", value: "60+" },
      { label: "Client Satisfaction", value: "99.4%" },
      { label: "Turnaround Time", value: "48-72 hrs" }
    ]
  },
  {
    id: "06",
    slug: "web-designing",
    number: "06",
    title: "Web Designing",
    headline: "Build user-friendly websites that offer seamless experiences and drive conversions for your business.",
    shortDescription: "Build user-friendly websites that offer seamless experiences and drive conversions for your business.",
    fullDescription: "We build high-performance, responsive, and award-winning digital flagships. Engineered with Next.js, TypeScript, and modern motion design, our websites load under 1s and turn casual visitors into paying customers.",
    iconName: "Layout",
    heroImage: "/images/services/web-designing.jpg",
    highlights: [
      "Custom Next.js & React Architecture",
      "Mobile-First Responsive Layouts",
      "Sub-second Load Speeds & Lighthouse 95+ Scores",
      "Conversion-Engineered Landing Pages",
      "Full On-Page Technical SEO & Schema Setup"
    ],
    deliverables: [
      "Figma UI/UX wireframes & interactive prototypes",
      "Custom Next.js production codebase with TypeScript & Tailwind CSS",
      "Interactive components, smooth scroll (Lenis), and micro-animations",
      "SEO, OpenGraph, dynamic sitemap, and Google Analytics integration"
    ],
    process: [
      { step: "01", title: "Architecture & Wireframes", description: "Mapping user journeys, key conversion funnels, and frictionless wireframes." },
      { step: "02", title: "Bespoke Visual Design", description: "Crafting modern, award-tier UI with bold typography and custom design elements." },
      { step: "03", title: "Next.js Development", description: "Writing clean, semantic, blazing-fast code with fluid interactions and responsive checks." },
      { step: "04", title: "SEO, QA & Launch", description: "Lighthouse optimization, cross-browser testing, CDN configuration, and live deployment." }
    ],
    faqs: [
      {
        question: "How long does a custom website build take?",
        answer: "Standard high-impact marketing websites typically take 2 to 4 weeks from approved design wireframes to production launch."
      },
      {
        question: "Will the website be optimized for mobile devices and search engines?",
        answer: "Yes, 100%. Every site we build is strictly mobile-first, passes Google Core Web Vitals with flying colors, and includes comprehensive schema markup."
      }
    ],
    metrics: [
      { label: "Lighthouse Score", value: "98+" },
      { label: "Load Time", value: "< 0.8s" },
      { label: "Conversion Lift", value: "+185%" }
    ]
  }
];
