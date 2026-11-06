import type { CapabilityLink } from "@/data/capabilities";

export type CapabilityKey = CapabilityLink["key"];

export type VisualKind =
  // Marketing
  | "paid-ads"
  | "social"
  | "content"
  | "email"
  | "influencer"
  | "campaign"
  // Creative
  | "brand"
  | "graphic"
  | "uiux"
  | "video"
  | "motion"
  | "photo"
  // Tech Build
  | "webdev"
  | "ecommerce"
  | "software"
  | "api"
  | "maintenance"
  | "optimization"
  // Analytics
  | "ga"
  | "roi"
  | "cro"
  | "behavior"
  | "seo"
  | "research";

export interface SubService {
  id: string;
  title: string;
  tags?: string[];
  desc: string;
  points: string[];
  visual: VisualKind;
}

export interface CapabilityContent {
  badge: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  items: SubService[];
}

export const SUB_SERVICES: Record<CapabilityKey, CapabilityContent> = {
  marketing: {
    badge: "WHAT WE DO",
    title: "MARKETING SERVICES THAT MOVE THE NEEDLE.",
    highlightWord: "MARKETING",
    subtitle: "Six connected growth channels, planned and run by one team so every rupee pulls in the same direction.",
    items: [
      {
        id: "paid-advertising",
        title: "Paid Advertising",
        tags: ["Google Ads", "Meta (Facebook / Instagram) Ads", "TikTok"],
        desc: "High-intent search, scroll-stopping social and short-form video ads built around your numbers, not vanity metrics.",
        points: ["Audience & keyword strategy", "Ad creative & copy testing", "Pixel & conversion tracking", "Weekly bid & budget optimisation"],
        visual: "paid-ads",
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        desc: "Always-on social presence that grows a real community around your brand and turns followers into customers.",
        points: ["Monthly content calendars", "Post design & copywriting", "Community management", "Growth & engagement reporting"],
        visual: "social",
      },
      {
        id: "content-marketing",
        title: "Content Marketing",
        tags: ["Blogs", "Articles", "Newsletters"],
        desc: "Useful, search-friendly content that builds authority, ranks on Google and keeps your audience coming back.",
        points: ["Topic & keyword research", "Long-form blogs & articles", "Newsletter writing", "Content distribution"],
        visual: "content",
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        desc: "Automated flows and campaigns that land in the inbox, get opened and drive repeat sales on autopilot.",
        points: ["Welcome & nurture automations", "Promotional campaigns", "List segmentation", "Deliverability & A/B testing"],
        visual: "email",
      },
      {
        id: "influencer-marketing",
        title: "Influencer Marketing",
        desc: "The right creators for your audience, with briefs, contracts and tracking handled end to end.",
        points: ["Creator discovery & vetting", "Campaign briefs & negotiation", "Content approvals", "Reach & sales tracking"],
        visual: "influencer",
      },
      {
        id: "campaign-planning",
        title: "Campaign Planning",
        desc: "From big idea to launch calendar. Every channel, asset and deadline mapped before a single ad goes live.",
        points: ["Goals, KPIs & budget split", "Channel & media planning", "Launch timelines", "Post-campaign reviews"],
        visual: "campaign",
      },
    ],
  },

  creative: {
    badge: "WHAT WE CREATE",
    title: "CREATIVE THAT PEOPLE REMEMBER.",
    highlightWord: "CREATIVE",
    subtitle: "Brand, design, motion and production under one roof, so your visuals look and feel like one brand everywhere.",
    items: [
      {
        id: "brand-identity",
        title: "Brand Identity",
        tags: ["Logo", "Color palette", "Typography", "Brand guidelines"],
        desc: "A distinctive identity system that makes your brand instantly recognisable across every touchpoint.",
        points: ["Logo design & marks", "Color & type systems", "Brand guideline books", "Brand refresh & rebrands"],
        visual: "brand",
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        tags: ["Social media posts", "Banners", "Ad creatives", "Brochures"],
        desc: "On-brand graphics for feeds, ads and print, designed to stop the scroll and make the message obvious.",
        points: ["Social post & story design", "Ad creative sets", "Web & print banners", "Brochures & sales decks"],
        visual: "graphic",
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        desc: "Interfaces that look sharp and feel effortless, built on research, wireframes and tested prototypes.",
        points: ["User flows & wireframes", "High-fidelity UI design", "Interactive prototypes", "Design systems"],
        visual: "uiux",
      },
      {
        id: "video-production",
        title: "Video Production and Editing",
        desc: "From scripting and shooting to the final cut, video that holds attention and tells your story fast.",
        points: ["Concept & scriptwriting", "On-site production", "Reels & short-form edits", "Color grading & sound"],
        visual: "video",
      },
      {
        id: "motion-graphics",
        title: "Motion Graphics and Animation",
        desc: "Animated logos, explainers and kinetic type that add energy and clarity to your brand.",
        points: ["Logo animations", "Explainer videos", "Animated social content", "2D / kinetic typography"],
        visual: "motion",
      },
      {
        id: "photography",
        title: "Photography",
        desc: "Product, lifestyle and corporate photography shot and retouched to match your brand look.",
        points: ["Product & e-commerce shoots", "Lifestyle & campaign shoots", "Corporate & team portraits", "Professional retouching"],
        visual: "photo",
      },
    ],
  },

  "tech-build": {
    badge: "WHAT WE BUILD",
    title: "TECH THAT WORKS AS HARD AS YOU DO.",
    highlightWord: "TECH",
    subtitle: "Websites, stores and custom software engineered for speed, security and growth, then looked after long term.",
    items: [
      {
        id: "website-development",
        title: "Website Design and Development",
        desc: "Fast, responsive, conversion-focused websites designed around your brand and built on modern code.",
        points: ["Custom UI design", "Responsive development", "CMS setup & training", "SEO-ready structure"],
        visual: "webdev",
      },
      {
        id: "ecommerce-development",
        title: "E-commerce Development",
        tags: ["Shopify", "WooCommerce", "Custom stores"],
        desc: "Online stores that make buying easy, from product pages to checkout, payments and delivery.",
        points: ["Store setup & theming", "Payment & delivery integration", "Product catalog setup", "Checkout optimisation"],
        visual: "ecommerce",
      },
      {
        id: "custom-software",
        title: "Custom Software",
        tags: ["Booking", "CRM", "Dashboards"],
        desc: "Tailor-made tools that fit the way your business works, replacing spreadsheets and manual work.",
        points: ["Booking & reservation systems", "CRM & lead management", "Admin dashboards", "Role-based access"],
        visual: "software",
      },
      {
        id: "api-integrations",
        title: "Third-party API Integrations",
        desc: "Connect your website and tools to payments, CRMs, maps, messaging and more so data flows automatically.",
        points: ["Payment gateways", "CRM & ERP sync", "WhatsApp, SMS & email APIs", "Webhooks & automations"],
        visual: "api",
      },
      {
        id: "website-maintenance",
        title: "Website Maintenance",
        desc: "Ongoing care that keeps your site secure, updated, backed up and online around the clock.",
        points: ["Security updates & patches", "Daily backups", "Uptime monitoring", "Content & bug fixes"],
        visual: "maintenance",
      },
      {
        id: "website-optimization",
        title: "Website Optimization",
        desc: "Faster load times and better Core Web Vitals, so more visitors stay, rank and convert.",
        points: ["Speed & Core Web Vitals", "Image & code optimisation", "Technical SEO fixes", "Mobile performance"],
        visual: "optimization",
      },
    ],
  },

  analytics: {
    badge: "WHAT WE MEASURE",
    title: "DATA THAT TELLS YOU WHAT TO DO NEXT.",
    highlightWord: "DATA",
    subtitle: "Clear tracking, honest reporting and research that turns numbers into decisions you can act on.",
    items: [
      {
        id: "google-analytics",
        title: "Google Analytics",
        desc: "A clean GA4 setup with the events, conversions and reports your team actually needs.",
        points: ["GA4 & Tag Manager setup", "Event & conversion tracking", "E-commerce tracking", "Custom reports"],
        visual: "ga",
      },
      {
        id: "roi-reporting",
        title: "ROI Reporting",
        desc: "Simple, live reports that show what you spent, what came back and where to invest next.",
        points: ["Live ROI dashboards", "Channel-level ROAS", "Monthly insight reports", "Budget recommendations"],
        visual: "roi",
      },
      {
        id: "conversion-rate-optimization",
        title: "Conversion Rate Optimization",
        desc: "Find where visitors drop off, test better versions and turn more of your traffic into customers.",
        points: ["Funnel drop-off analysis", "A/B & split testing", "Landing page improvements", "Form & checkout fixes"],
        visual: "cro",
      },
      {
        id: "user-behavior-analysis",
        title: "User Behavior Analysis",
        tags: ["Microsoft Clarity"],
        desc: "Heatmaps and session recordings that show exactly how people use your site, and where they get stuck.",
        points: ["Heatmaps & scroll maps", "Session recordings", "Rage & dead click detection", "UX recommendations"],
        visual: "behavior",
      },
      {
        id: "seo-audits",
        title: "SEO Audits",
        desc: "A full technical, on-page and content health check with a prioritised plan to climb the rankings.",
        points: ["Technical site audit", "Keyword & ranking review", "On-page & content gaps", "Backlink profile check"],
        visual: "seo",
      },
      {
        id: "market-research",
        title: "Market and Audience Research",
        desc: "Know your market, competitors and customers before you spend, so every campaign starts on solid ground.",
        points: ["Competitor analysis", "Audience segmentation", "Customer personas", "Market opportunity reports"],
        visual: "research",
      },
    ],
  },
};
