// Portfolio case studies. Source: "10X Creative (Pvt) Ltd - Portfolio_Content.pdf".
// Each company has a listing card (cover, excerpt, headline stats) and a detail page
// built from an ordered list of typed sections.

export type PortfolioCategory = "Performance Marketing" | "Creative & Content" | "Branding";

export const PORTFOLIO_CATEGORIES = ["All", "Performance Marketing", "Creative & Content", "Branding"] as const;

export interface CaseImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStat {
  value: string;
  label: string;
  note?: string;
}

export type CaseSection =
  | { type: "text"; eyebrow?: string; heading: string; body: string[] }
  | {
    type: "list";
    eyebrow?: string;
    heading: string;
    intro?: string;
    items: string[];
    outro?: string;
  }
  | {
    type: "columns";
    eyebrow?: string;
    heading: string;
    intro?: string;
    columns: { title: string; items: string[] }[];
    outro?: string;
  }
  | {
    type: "steps";
    eyebrow?: string;
    heading: string;
    intro?: string;
    steps: { title: string; body?: string }[];
    outro?: string;
  }
  | {
    type: "stats";
    eyebrow?: string;
    heading: string;
    intro?: string;
    stats: CaseStat[];
    outro?: string;
  }
  | {
    type: "gallery";
    eyebrow?: string;
    heading: string;
    intro?: string;
    /** posters: 4:5 tiles · portrait: tall phone screenshots · wide: landscape */
    layout: "posters" | "portrait" | "wide";
    images: CaseImage[];
    links?: { label: string; href: string }[];
  }
  | {
    type: "social";
    eyebrow?: string;
    heading: string;
    intro?: string;
    platforms: { name: string; count: string; unit: string }[];
  }
  | {
    type: "quote";
    quote: string[];
    author: string;
    role: string;
    avatar?: string;
  };

export interface PortfolioCompany {
  slug: string;
  name: string;
  /** Short line under the name on cards */
  industry: string;
  location: string;
  categories: PortfolioCategory[];
  services: string[];
  /** Big headline on the detail page */
  headline: string;
  /** One- or two-sentence card summary */
  excerpt: string;
  /** "About the company" paragraphs */
  overview: string[];
  period?: string;
  partnership?: string;
  /** Brand tint used for typographic covers and accents */
  brandColor: string;
  cover?: { src: string; alt: string; position?: string };
  headlineStats: CaseStat[];
  sections: CaseSection[];
}

const T = "/images/portfolio/travelco";
const S = "/images/portfolio/sculptureu";
const N = "/images/portfolio/nile-construction";
const I = "/images/portfolio/island-voyages";

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  // ───────────────────────────── TRAVELCO HOLIDAYS ─────────────────────────────
  {
    slug: "travelco-holidays",
    name: "Travelco Holidays",
    industry: "Travel & Group Tours",
    location: "Sri Lanka",
    categories: ["Performance Marketing", "Creative & Content"],
    services: ["Paid Media", "Meta Lead Generation", "WhatsApp Campaigns", "Creative Production", "Video Reels", "Content Series"],
    headline: "Driving consistent travel demand through paid media & creative strategy.",
    excerpt:
      "An always-on Meta demand engine for a fast-growing group tour company, celebrating a 3+ year partnership.",
    overview: [
      "Travelco Holidays is a fast-growing travel company specializing in group tours and international travel experiences. Their tours run throughout the year, covering popular destinations and curated travel experiences.",
      "Travelco relies heavily on digital demand generation to drive travel bookings for group and private tours throughout the year.",
    ],
    period: "Sep 2025 – Feb 2026 (6-month analysis)",
    partnership: "3+ years",
    brandColor: "#0B4F8A",
    cover: { src: `${T}/cover-venice.jpg`, alt: "Travelco Holidays Europe tour creative", position: "center" },
    headlineStats: [
      { value: "127M+", label: "Impressions" },
      { value: "41K+", label: "Leads Generated" },
      { value: "1.25M+", label: "Clicks" },
    ],
    sections: [
      {
        type: "list",
        eyebrow: "The Challenge",
        heading: "Demand is seasonal. Marketing must run year-round.",
        intro: "Travel companies face a unique challenge in Sri Lanka. Travelco needed a way to:",
        items: [
          "Continuously generate travel inquiries",
          "Promote multiple destinations simultaneously",
          "Fill seats for upcoming group tours",
          "Maintain strong brand visibility in a competitive travel market",
          "Support multiple tour launches with rapidly produced creatives",
          "Generate leads consistently through Meta platforms",
        ],
      },
      {
        type: "columns",
        eyebrow: "Our Role",
        heading: "Three years of paid media, creative and execution.",
        columns: [
          {
            title: "Paid Media Management",
            items: [
              "Meta Lead Generation Campaigns",
              "WhatsApp Inquiry Campaigns",
              "Awareness & Engagement Campaigns",
              "Seasonal Tour Promotions",
            ],
          },
          {
            title: "Creative Production",
            items: ["Tour Package Posters", "Destination Campaign Creatives", "Video Reels Production", "Social Media Content"],
          },
          {
            title: "Campaign Execution",
            items: [
              "Campaign setup",
              "Performance monitoring",
              "Optimization throughout campaign periods",
              "Continuous launches for multiple tours",
            ],
          },
        ],
        outro: "This combination created a continuous demand generation engine for Travelco.",
      },
      {
        type: "stats",
        eyebrow: "Campaign Activity · 6-Month Snapshot",
        heading: "Massive reach, steady inquiries.",
        intro: "From September 2025 to February 2026, the campaigns generated:",
        stats: [
          { value: "7,561,602", label: "Reach" },
          { value: "127,123,159", label: "Impressions" },
          { value: "1,250,739", label: "Clicks" },
          { value: "41,695", label: "Leads" },
          { value: "6,277", label: "WhatsApp Inquiries" },
          { value: "145", label: "Campaigns" },
          { value: "17", label: "Avg. Frequency", note: "Each user saw a Travelco ad 17 times in 6 months" },
          { value: "1.0%", label: "Click-Through Rate", note: "Within industry standard" },
        ],
      },
      {
        type: "list",
        eyebrow: "Performance Insights",
        heading: "What the numbers tell us.",
        items: [
          "Meta campaigns reached over 7.5 million unique users, building strong brand visibility across key travel markets.",
          "127 million impressions at an average frequency of 17 kept audiences repeatedly engaged - crucial for high-ticket travel decisions.",
          "41,695 leads from 1.25M clicks: a 3.3% click-to-lead rate and a steady inquiry pipeline.",
          "15% of leads converted into WhatsApp conversations, giving the sales team warm, actionable prospects.",
          "Short-form video and branded creatives significantly enhanced engagement, reinforcing Travelco's authority in the travel market.",
        ],
      },
      {
        type: "gallery",
        eyebrow: "Meta Insights",
        heading: "Views & reach, Sep 2025 – Feb 2026.",
        layout: "wide",
        images: [
          { src: `${T}/insight-views.jpg`, alt: "Meta insights: 121M views between September 2025 and February 2026" },
          { src: `${T}/insight-reach.jpg`, alt: "Meta insights: 7.4M reach and content interactions" },
        ],
      },
      {
        type: "steps",
        eyebrow: "Demand Generation Funnel",
        heading: "Capturing travelers at every stage of interest.",
        steps: [
          { title: "Awareness", body: "Introduced destinations and travel experiences to new audiences." },
          { title: "Engagement", body: "Built familiarity with Travelco's brand through content and travel visuals." },
          { title: "Lead Generation", body: "Captured travel inquiries directly through Meta forms." },
          { title: "WhatsApp", body: "Enabled immediate conversations with the sales team." },
        ],
        outro: "This structure helped Travelco maintain a steady pipeline of travel inquiries.",
      },
      {
        type: "list",
        eyebrow: "Creative Strategy",
        heading: "Travel is a visual-first industry.",
        intro: "To capture attention in crowded social feeds, we focused heavily on creative production:",
        items: [
          "Destination-focused tour posters",
          "Clear tour pricing & travel highlights",
          "High-quality travel imagery",
          "Short-form video reels",
          "Strong brand color consistency",
        ],
        outro: "All creatives followed strict brand guidelines to maintain a recognizable identity across platforms.",
      },
      {
        type: "gallery",
        eyebrow: "Designs That Influence",
        heading: "Tour posters that power up the brand.",
        layout: "posters",
        images: [
          { src: `${T}/poster-italy.jpg`, alt: "Italy tour poster" },
          { src: `${T}/poster-golden-triangle.jpg`, alt: "Golden Triangle India tour poster" },
          { src: `${T}/poster-france.jpg`, alt: "France tour poster" },
          { src: `${T}/poster-iceland.jpg`, alt: "Iceland tour poster" },
          { src: `${T}/poster-maldives.jpg`, alt: "Maldives tour poster" },
          { src: `${T}/poster-georgia.jpg`, alt: "Georgia group tour poster" },
          { src: `${T}/poster-egypt.jpg`, alt: "Egypt group tour poster" },
          { src: `${T}/poster-dubai.jpg`, alt: "Dubai group tour poster" },
          { src: `${T}/poster-singapore-malaysia.jpg`, alt: "Singapore & Malaysia tour poster" },
          { src: `${T}/poster-shimla-manali.jpg`, alt: "Shimla & Manali tour poster" },
          { src: `${T}/poster-azerbaijan.jpg`, alt: "Azerbaijan tour poster" },
          { src: `${T}/poster-vietnam.jpg`, alt: "Vietnam group tour poster" },
        ],
      },
      {
        type: "stats",
        eyebrow: "Video Content & Reels",
        heading: "We make you go viral.",
        intro:
          "Short-form video played a key role in driving engagement. We produced employee-generated content covering group tour promotions, offers & travel promotions, and storytelling - increasing engagement, boosting organic reach and improving ad performance.",
        stats: [
          { value: "108K", label: "Views", note: "Top-performing reel" },
          { value: "3,728", label: "Likes" },
        ],
      },
      {
        type: "gallery",
        heading: "Reels on the feed.",
        layout: "portrait",
        images: [
          { src: `${T}/reels-grid.jpg`, alt: "Travelco Holidays reels grid on TikTok" },
          { src: `${T}/reel-offer.jpg`, alt: "Travelco 50% off promotional reel" },
          { src: `${T}/social-instagram.jpg`, alt: "Travelco Holidays Instagram profile" },
          { src: `${T}/social-facebook.jpg`, alt: "Travelco Holidays Facebook page" },
        ],
      },
      {
        type: "text",
        eyebrow: "Content Series",
        heading: "Entrepreneur's Lens - powered by Travelco Holidays.",
        body: [
          "Entrepreneur's Lens is a social media content series created to highlight the importance of travel in the life of an entrepreneur and how it shapes ideas, mindset and business growth.",
          "The first episode features Shevon Perera, Founder of Mongolian Street Restaurants in Sri Lanka, sharing how his travel experiences played a key role in building a successful restaurant chain that brings authentic Mongolian cuisine to the Sri Lankan community.",
          "As the creative crew, we visited the location, filmed the full story and handled the editing and post-production - plus short-form highlights cut from the full-length YouTube episode.",
        ],
      },
      {
        type: "gallery",
        heading: "Episode one: Shevon Perera.",
        layout: "portrait",
        images: [
          {
            src: `${T}/lens-short-1.jpg`,
            alt: "Entrepreneur's Lens short video one",
            caption: "How travel shaped his mindset and inspired Mongolian Street.",
          },
          {
            src: `${T}/lens-short-2.jpg`,
            alt: "Entrepreneur's Lens short video two",
            caption: "Key insights from his entrepreneurial path.",
          },
          {
            src: `${T}/lens-youtube.jpg`,
            alt: "Entrepreneur's Lens full episode on YouTube",
            caption: "The full in-depth conversation on YouTube.",
          },
        ],
        links: [
          { label: "Watch the full episode", href: "https://www.youtube.com/watch?v=cH776eDZ9-Q" },
          { label: "Short video 1", href: "https://www.instagram.com/p/DWtRD1MgGY4/" },
          { label: "Short video 2", href: "https://www.instagram.com/p/DWybg4kAmOQ/" },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Featured",
        heading: "More from the series.",
        layout: "wide",
        images: [
          { src: `${T}/lens-ep-amithe.jpg`, alt: "Entrepreneur's Lens episode with Amithe Gamage" },
          { src: `${T}/lens-ep-yohan.jpg`, alt: "Entrepreneur's Lens episode with Yohan Rathnayake" },
          { src: `${T}/lens-ep-duaine.jpg`, alt: "Entrepreneur's Lens episode with Duaine Peiris" },
          { src: `${T}/lens-ep-mario.jpg`, alt: "Entrepreneur's Lens episode with Mario Stubbs" },
          { src: `${T}/lens-ep-dhanika.jpg`, alt: "Entrepreneur's Lens episode with Dhanika Perera" },
        ],
      },
      {
        type: "social",
        eyebrow: "Brand Growth & Social Presence",
        heading: "A recognizable travel brand.",
        intro:
          "The combination of paid campaigns and consistent content strengthened Travelco's position as a recognizable travel brand. Current social footprint:",
        platforms: [
          { name: "Facebook", count: "133,646", unit: "followers" },
          { name: "Instagram", count: "32,027", unit: "followers" },
          { name: "TikTok", count: "7,700", unit: "followers" },
          { name: "LinkedIn", count: "1,200", unit: "followers" },
          { name: "YouTube", count: "550", unit: "subscribers" },
        ],
      },
      {
        type: "columns",
        eyebrow: "Sustainability & Strategic Maturity",
        heading: "From one-off campaigns to an always-on engine.",
        intro:
          "Travel advertising requires long-term consistency, not short bursts. Over time, campaigns expanded to support multiple destinations, tour schedules and audience segments.",
        columns: [
          {
            title: "Travelco maintained",
            items: [
              "Ongoing demand generation",
              "Visibility for multiple tour launches",
              "Consistent inquiry flow",
              "Strong brand recall among travel audiences",
            ],
          },
          {
            title: "Which required",
            items: [
              "Frequent campaign launches",
              "Rapid creative production",
              "Continuous monitoring",
              "Real-time campaign adjustments",
            ],
          },
        ],
        outro:
          "Consistent campaigns sustained Travelco's presence within the Meta ecosystem, ensuring strong visibility and a significant share of audience attention in the travel market.",
      },
      {
        type: "stats",
        eyebrow: "Key Outcomes",
        heading: "The scale of digital demand generated.",
        intro: "Across the campaign period analyzed (September 2025 – February 2026):",
        stats: [
          { value: "41,695", label: "Leads", note: "Thousands of potential travelers expressed interest in upcoming tours." },
          { value: "6,277", label: "WhatsApp Inquiries", note: "Direct conversations with interested travelers." },
          { value: "1,250,739", label: "Clicks", note: "Significant traffic driven through paid media." },
        ],
      },
      {
        type: "quote",
        quote: [
          "I'm really happy with the work 10X Creative did for us! Their team made our ads way more effective, and we saw a big jump in new customers. The graphics they designed looked awesome and made our brand stand out. Plus, the videos they created were super professional and got a lot of attention online.",
          "Everyone was friendly and easy to talk to - they always kept us in the loop. I'd definitely recommend them if you need help with digital advertising, graphics, or videos.",
        ],
        author: "Zanfer Sheriff",
        role: "Founder & CEO, Travelco Holidays",
        avatar: `${T}/testimonial-zanfer.jpg`,
      },
    ],
  },

  // ───────────────────────────────── SCULPTUREU ─────────────────────────────────
  {
    slug: "sculptureu",
    name: "SculptureU",
    industry: "Pre-Construction Consulting",
    location: "Adelaide, Australia",
    categories: ["Performance Marketing", "Creative & Content", "Branding"],
    services: ["Funnel Strategy", "Landing Page", "Lead Magnet eBook", "Meta Pixel + CAPI", "Ad Creatives", "Logo Design"],
    headline: "Turning a skeptical market into a predictable lead funnel - by giving value first.",
    excerpt:
      "A new pre-construction brand in Adelaide went from wasted ad spend to AUD 14 conversions with a trust-first eBook funnel.",
    overview: [
      "SculptureU is a pre-construction consultant in Adelaide, South Australia, helping people plan their home builds before they commit to a builder.",
      "As a brand new business with no prior market presence, SculptureU needed to establish authority and trust before asking anyone for their contact details - on a limited budget.",
    ],
    period: "Nov 2025 – Feb 2026",
    brandColor: "#1F3A5F",
    cover: { src: `${S}/creative-top.jpg`, alt: "SculptureU top-performing ad creative", position: "top" },
    headlineStats: [
      { value: "AUD 14", label: "Cost per Conversion" },
      { value: "29", label: "Conversions" },
      { value: "AUD 406", label: "Total Spend" },
    ],
    sections: [
      {
        type: "columns",
        eyebrow: "The Challenge",
        heading: "Low trust, high cost, inconsistent leads.",
        columns: [
          {
            title: "Market challenges",
            items: [
              "Low trust in online lead forms within the Australian market",
              "Audience hesitation to share personal details due to scam concerns",
              "Strong preference for speaking directly to builders instead of agencies",
              "Existing habit of paying builders for initial consultations",
            ],
          },
          {
            title: "Campaign challenges",
            items: [
              "Lead forms and WhatsApp click-to-message campaigns underperformed",
              "High cost per lead with low volume and inconsistent quality",
              "Limited conversions despite reasonable reach and traffic",
            ],
          },
          {
            title: "Business constraints",
            items: [
              "New brand with no prior market presence",
              "Need to establish authority and trust before asking for contact details",
              "Budget limitations required efficient allocation of ad spend",
            ],
          },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Before · Nov 2025 – Jan 2026",
        heading: "Instant forms and WhatsApp campaigns burned budget.",
        intro:
          "Instant Form and WhatsApp campaigns delivered wasted ad spend, higher cost-per-message and in some cases no results at all.",
        layout: "wide",
        images: [{ src: `${S}/campaign-before.jpg`, alt: "Meta Ads Manager results for early SculptureU campaigns" }],
      },
      {
        type: "gallery",
        eyebrow: "Creative Benchmark",
        heading: "Low performers vs. the winner.",
        layout: "portrait",
        images: [
          { src: `${S}/creative-low-1.jpg`, alt: "Low-performing SculptureU ad creative", caption: "Low performing" },
          { src: `${S}/creative-low-2.jpg`, alt: "Low-performing SculptureU ad creative", caption: "Low performing" },
          { src: `${S}/creative-low-3.jpg`, alt: "Low-performing SculptureU ad creative", caption: "Low performing" },
          { src: `${S}/creative-top.jpg`, alt: "Top-performing SculptureU ad creative", caption: "Top performing" },
        ],
      },
      {
        type: "steps",
        eyebrow: "Strategy Shift",
        heading: "Instead of asking for leads, deliver value first.",
        intro:
          "We introduced a free educational eBook as a lead magnet, with a landing page explaining what SculptureU does, common mistakes when building in Adelaide, and why pre-construction planning matters.",
        steps: [
          { title: "Ad" },
          { title: "Landing Page" },
          { title: "eBook" },
          { title: "Thank You Page" },
          { title: "Appointment Booking" },
        ],
      },
      {
        type: "columns",
        eyebrow: "Campaign Execution",
        heading: "Built to convert, tracked server-side.",
        columns: [
          {
            title: "Key improvements",
            items: [
              "Reduced friction by offering value before asking for contact details",
              "Positioned SculptureU as an advisor rather than a service seller",
              "Created a soft entry point into the sales process",
            ],
          },
          {
            title: "Tracking setup",
            items: [
              "Conversion tracking based on thank-you page visits",
              "Meta Pixel integrated with Conversion API for server-side tracking",
              "Event optimization aligned with landing page conversions",
            ],
          },
          {
            title: "Campaign launch · Feb 1",
            items: [
              "Conversion campaign focused on eBook downloads",
              "Traffic campaign to feed the pixel and improve optimization",
            ],
          },
        ],
      },
      {
        type: "columns",
        heading: "Audience, creative and landing page.",
        columns: [
          {
            title: "Target audience",
            items: [
              "Individuals interested in building homes in Adelaide, South Australia",
              "Expats and Australians researching property development",
              "Interests related to construction, home ownership and real estate",
            ],
          },
          {
            title: "Creative direction",
            items: [
              "Educational and awareness-based content",
              "Hidden costs in construction",
              "Importance of pre-construction planning",
              "Common mistakes homeowners make",
            ],
          },
          {
            title: "Landing page experience",
            items: [
              "Clear headline focused on value",
              "Simple form to download the eBook",
              "Immediate confirmation and next step to book a consultation",
              "Minimal distractions to keep focus on conversion",
            ],
          },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Funnel Assets",
        heading: "The eBook, the page, the winning ad.",
        layout: "portrait",
        images: [
          { src: `${S}/creative-top-2.jpg`, alt: "SculptureU top-performing eBook ad", caption: "Top-performing ad creative" },
          { src: `${S}/landing-page.jpg`, alt: "SculptureU eBook landing page", caption: "eBook landing page" },
          { src: `${S}/ebook.jpg`, alt: "SculptureU free eBook mockup", caption: "Free pre-construction eBook" },
          { src: `${S}/social-instagram.jpg`, alt: "SculptureU Instagram profile", caption: "Educational social content" },
        ],
      },
      {
        type: "stats",
        eyebrow: "Results & Outcome",
        heading: "A predictable lead generation system.",
        stats: [
          { value: "AUD 406", label: "Total Spend" },
          { value: "29", label: "Total Conversions" },
          { value: "AUD 14", label: "Cost per Conversion" },
        ],
      },
      {
        type: "columns",
        heading: "Takeaways & business impact.",
        columns: [
          {
            title: "Key takeaways",
            items: [
              "Lead quality improved significantly compared to direct lead forms",
              "Users who downloaded the eBook were more informed and more likely to engage",
              "The funnel helped filter out low-intent traffic",
              "A trust-based approach performed better in a skeptical market",
            ],
          },
          {
            title: "Business impact",
            items: [
              "Established a predictable lead generation system",
              "Created a scalable funnel that can be optimized further",
              "Positioned SculptureU as a credible authority in pre-construction planning",
            ],
          },
        ],
      },
      {
        type: "gallery",
        eyebrow: "Logo Design",
        heading: "A brand identity built for trust.",
        layout: "wide",
        images: [{ src: `${S}/logo.jpg`, alt: "SculptureU logo on a brushed metal sign" }],
      },
    ],
  },

  // ───────────────────────────────── PEACOCK.LK ─────────────────────────────────
  {
    slug: "peacock-lk",
    name: "Peacock.lk",
    industry: "Beauty E-commerce",
    location: "Sri Lanka",
    categories: ["Performance Marketing", "Creative & Content"],
    services: ["Full-Funnel Meta Ads", "Catalog Sales", "Influencer Marketing", "UGC Creatives", "Weekly Optimization"],
    headline: "From traffic that didn't convert to a scalable online sales engine.",
    excerpt:
      "A full-funnel, UGC-led performance strategy that doubled website traffic and turned clicks into revenue.",
    overview: [
      "Peacock.lk is one of Sri Lanka's growing online shopping platforms, offering cosmetics, skincare, haircare and face care products.",
      "Goal: scale online sales while improving marketing efficiency and building consistent brand growth through paid media and content-driven marketing.",
    ],
    period: "Since November 2025",
    brandColor: "#0F6B5C",
    headlineStats: [
      { value: "+100%", label: "Website Traffic" },
      { value: "80K+", label: "Organic Views" },
      { value: "Weekly", label: "Campaign Scaling" },
    ],
    sections: [
      {
        type: "list",
        eyebrow: "The Challenge · Before 10X Creative",
        heading: "Generating traffic, but not revenue.",
        intro: "Before partnering with 10X Creative in November 2025, Peacock.lk faced several performance issues:",
        items: [
          "High advertising spend with limited sales results",
          "Moderate website traffic but low purchase conversion",
          "Lack of a structured sales funnel strategy",
        ],
        outro: "The brand was generating traffic, but traffic was not converting into revenue.",
      },
      {
        type: "list",
        eyebrow: "Our Strategy",
        heading: "Performance-driven, full-funnel, built to scale.",
        intro: "10X Creative implemented a full-funnel marketing strategy focused on conversion and scalability:",
        items: [
          "Launched structured Traffic, Conversion & Catalog Sales campaigns",
          "Implemented a broad targeting strategy for algorithm learning",
          "Focused on UGC-style video creatives to improve trust",
          "Introduced a weekly optimization and scaling framework",
        ],
      },
      {
        type: "columns",
        eyebrow: "Influencer & UGC Growth Strategy",
        heading: "Original vs. fake - content that builds trust.",
        intro: "To improve brand trust and engagement, we introduced influencer-led content marketing.",
        columns: [
          {
            title: "Execution",
            items: [
              "Collaborated with influencers on TikTok & Instagram",
              "Created authentic comparison-based content (Original vs Fake concept)",
              "Repurposed influencer videos as UGC performance ads",
            ],
          },
          {
            title: "Results",
            items: [
              "Generated 80,000+ organic views",
              "Increased audience trust and engagement",
              "Improved click-through and conversion performance",
              "UGC creatives became the top-performing ad format",
            ],
          },
        ],
      },
      {
        type: "list",
        eyebrow: "Performance Improvements",
        heading: "From traffic-focused to conversion-driven.",
        items: [
          "Website traffic increased by 100%",
          "Purchase activity significantly improved",
          "Conversion performance improved overall",
          "Advertising efficiency increased through ongoing optimization",
          "Campaigns successfully scaled on a weekly basis",
          "The online sales channel showed strong growth momentum",
        ],
      },
      {
        type: "list",
        eyebrow: "Business Impact",
        heading: "A scalable growth system.",
        intro: "Working with 10X Creative helped Peacock.lk achieve:",
        items: [
          "Strong improvement in online purchase volume",
          "More stable and scalable ad performance",
          "Increased reliance on online sales as a key revenue channel",
          "Better customer acquisition through structured funnels",
          "Sustainable growth through performance marketing",
        ],
        outro:
          "10X Creative transformed Peacock.lk's advertising from inconsistent performance into a scalable growth system.",
      },
    ],
  },

  // ────────────────────────── QUDHRATH HEALTHCARE (QHC) ──────────────────────────
  {
    slug: "qudhrath-healthcare",
    name: "Qudhrath Healthcare (QHC)",
    industry: "Wellness & Holistic Healthcare",
    location: "Colombo, Sri Lanka",
    categories: ["Performance Marketing", "Creative & Content"],
    services: ["Meta Lead Generation", "Messaging Campaigns", "Location Targeting", "UGC & Testimonial Video", "Content Creator"],
    headline: "From low-quality leads to a high-performing patient acquisition engine.",
    excerpt:
      "A quality-first Meta funnel for a multi-clinic wellness brand - hundreds of high-quality enquiries every month.",
    overview: [
      "Qudhrath Healthcare (QHC) is a wellness and holistic healthcare brand in Sri Lanka offering Hijama (cupping), weight loss, diabetic recovery and natural therapy programs.",
      "The brand operates multiple clinics across Colombo and focuses on helping patients achieve long-term wellness through natural treatment solutions.",
      "Goal: generate the highest number of high-quality leads within the given advertising budget while improving overall lead quality and patient conversion.",
    ],
    period: "June – October 2025",
    brandColor: "#2E6B3A",
    headlineStats: [
      { value: "750+", label: "Messaging Conversions", note: "From one campaign" },
      { value: "100s", label: "Quality Enquiries / Month" },
      { value: "1000s", label: "Leads Across Services" },
    ],
    sections: [
      {
        type: "list",
        eyebrow: "The Challenge · Before June 2025",
        heading: "Spending on ads, but leads weren't converting.",
        items: [
          "High volume of low-quality and irrelevant leads",
          "Enquiries from audiences who could not afford the services",
          "Leads from locations far away from clinic branches",
          "Low conversion from enquiry to actual patient bookings",
          "Lack of targeting and a structured funnel strategy",
          "Limited scalability and unpredictable ad performance",
        ],
        outro: "The brand was spending on ads, but most leads did not convert into revenue.",
      },
      {
        type: "list",
        eyebrow: "Our Strategy",
        heading: "Targeted, full-funnel, quality over volume.",
        intro:
          "We implemented a targeted, full-funnel Meta advertising and content-driven lead generation strategy focused on quality and scalability:",
        items: [
          "Built structured awareness, consideration and conversion campaigns",
          "Targeted high-intent audiences based on service interest",
          "Focused on location-based targeting around Colombo branches",
          "Optimised campaigns to prioritise lead quality over volume",
          "Continuous testing and weekly optimisation",
        ],
      },
      {
        type: "list",
        eyebrow: "High-Converting Creative Approach",
        heading: "Trust, authenticity and education.",
        items: [
          "Customer testimonial-based video ads",
          "Educational content explaining Hijama and wellness benefits",
          "Religious and value-driven messaging to build trust",
          "Price-focused and offer-based conversion creatives",
          "UGC-style videos to improve relatability",
          "Niche-based creatives for different treatment programs",
        ],
        outro: "We also introduced a dedicated content creator to produce authentic video content promoting QHC services.",
      },
      {
        type: "columns",
        eyebrow: "Influencer & UGC Content Growth",
        heading: "Organic content, repurposed into performance.",
        columns: [
          {
            title: "Content",
            items: [
              "Created consistent UGC and short-form video content",
              "Published videos across Facebook, Instagram and TikTok",
              "Repurposed organic content as high-performing ads",
              "Positioned the brand as a trusted authority in natural healthcare",
            ],
          },
          {
            title: "Execution",
            items: [
              "Ran messaging and lead generation campaigns across Meta",
              "Tested multiple audience segments and creative formats",
              "Retargeted warm audiences to improve conversion",
              "Scaled winning campaigns based on performance data",
              "Optimised cost per lead and enquiry quality",
            ],
          },
        ],
      },
      {
        type: "columns",
        eyebrow: "Results · June – October 2025",
        heading: "Quality enquiries at scale.",
        columns: [
          {
            title: "Results",
            items: [
              "Generated hundreds of high-quality enquiries monthly",
              "One campaign alone delivered 750+ messaging conversions",
              "Achieved extremely low cost per lead across multiple campaigns",
              "Generated massive engagement, reach and video views",
              "UGC creatives became the top-performing ad format",
              "Thousands of leads generated across multiple services",
            ],
          },
          {
            title: "Performance improvements",
            items: [
              "Significant improvement in lead quality",
              "Increase in patient booking rates",
              "Reduced cost per high-quality enquiry",
              "Better audience targeting and filtering",
              "Improved ad efficiency and scalability",
              "Strong growth in organic reach and engagement",
              "Consistent weekly campaign scaling",
            ],
          },
        ],
        outro:
          "The brand transitioned from quantity-focused lead generation to a high-quality, conversion-driven acquisition system.",
      },
      {
        type: "list",
        eyebrow: "Business Impact",
        heading: "A structured, high-performing growth engine.",
        intro: "Working with 10X Creative helped QHC achieve:",
        items: [
          "A predictable and scalable lead generation system",
          "Higher revenue through quality patient acquisition",
          "Stronger brand trust and credibility",
          "Increased reliance on digital as a key growth channel",
          "Sustainable long-term marketing performance",
        ],
      },
    ],
  },

  // ────────────────────────────── NILE CONSTRUCTION ──────────────────────────────
  {
    slug: "nile-construction",
    name: "Nile Construction",
    industry: "Construction & Engineering",
    location: "Sri Lanka",
    categories: ["Performance Marketing", "Creative & Content"],
    services: ["Paid Media", "Meta Lead Generation", "WhatsApp Campaigns", "Project Video Promotions", "Creative Production"],
    headline: "Driving consistent construction demand through paid media & creative strategy.",
    excerpt:
      "Two years of always-on Meta campaigns and project creatives for a residential, commercial and civil construction firm.",
    overview: [
      "Nile Construction is a leading construction firm specializing in residential, commercial and civil engineering projects. Services include new house construction, renovations, villa and cabana building, and architectural design.",
      "Their focus is on high-quality, professional and timely project completion.",
    ],
    period: "6-month analysis",
    partnership: "2 years",
    brandColor: "#B8862B",
    headlineStats: [
      { value: "1.36M+", label: "Impressions" },
      { value: "1,097", label: "Leads Generated" },
      { value: "9.1K+", label: "Clicks" },
    ],
    sections: [
      {
        type: "list",
        eyebrow: "The Challenge",
        heading: "Projects are milestone-driven. Marketing can't be.",
        intro:
          "Nile Construction faced a different kind of challenge in Sri Lanka's competitive construction industry. They needed a strategy to:",
        items: [
          "Continuously generate qualified project inquiries",
          "Showcase multiple services and completed projects simultaneously",
          "Build trust with potential clients before project decisions",
          "Maintain a strong and credible brand presence in a highly competitive market",
          "Support multiple campaign launches with continuously produced creatives",
          "Generate leads consistently through Meta platforms",
        ],
      },
      {
        type: "columns",
        eyebrow: "Our Role",
        heading: "Two years of paid media and creative production.",
        columns: [
          {
            title: "Paid Media Management",
            items: [
              "Meta Lead Generation Campaigns",
              "WhatsApp Inquiry Campaigns",
              "Awareness & Engagement Campaigns",
              "Project Video Promotions",
            ],
          },
          {
            title: "Creative Production",
            items: [
              "Educational Posters",
              "Service-Based Ad Creatives",
              "Ongoing and Completed Project Creatives",
              "Social Media Content",
            ],
          },
        ],
      },
      {
        type: "stats",
        eyebrow: "Campaign Snapshot · 6 Months",
        heading: "Qualified demand, month after month.",
        stats: [
          { value: "1.36M+", label: "Impressions" },
          { value: "1,097", label: "Leads Generated" },
          { value: "9.1K+", label: "Clicks" },
        ],
      },
      {
        type: "social",
        eyebrow: "Social Presence",
        heading: "A steadily growing audience.",
        intro:
          "Nile Construction is steadily growing its social presence, building awareness and connecting with a wider audience through consistent, impactful content.",
        platforms: [
          { name: "Facebook", count: "851", unit: "followers" },
          { name: "Instagram", count: "155", unit: "followers" },
          { name: "TikTok", count: "27", unit: "followers" },
        ],
      },
      {
        type: "gallery",
        heading: "Project and service content on the feed.",
        layout: "portrait",
        images: [
          { src: `${N}/social-instagram.jpg`, alt: "Nile Construction Instagram profile with project creatives" },
          { src: `${N}/social-facebook.jpg`, alt: "Nile Construction Facebook page" },
        ],
      },
    ],
  },

  // ──────────────────────────────── ISLAND VOYAGES ────────────────────────────────
  {
    slug: "island-voyages",
    name: "Island Voyages",
    industry: "Travel Agency",
    location: "United States",
    categories: ["Branding"],
    services: ["Logo Design", "Brand Identity"],
    headline: "A premium travel identity for a US-based travel agency.",
    excerpt: "Logo design for a travel agency in the United States - a monogram mark built for signage and screens.",
    overview: [
      "Island Voyages is a travel agency in the United States and a subsidiary of United States Voyages.",
      "10X Creative designed the Island Voyages logo: a bold \"V\" monogram with a sweeping travel arc and aircraft motif, set in a classic serif wordmark that reads as premium and trustworthy on everything from building signage to social profiles.",
    ],
    brandColor: "#123047",
    cover: { src: `${I}/logo.jpg`, alt: "Island Voyages logo on an outdoor brand sign", position: "center" },
    headlineStats: [
      { value: "Logo", label: "Design" },
      { value: "USA", label: "Market" },
    ],
    sections: [
      {
        type: "gallery",
        eyebrow: "Logo Designing",
        heading: "The Island Voyages mark.",
        layout: "wide",
        images: [{ src: `${I}/logo.jpg`, alt: "Island Voyages logo presented on a metal sign outside an office building" }],
      },
    ],
  },
];

export function getCompanyBySlug(slug: string) {
  return PORTFOLIO_COMPANIES.find((c) => c.slug === slug);
}
