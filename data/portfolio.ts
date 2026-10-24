export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: "Social Media" | "Branding" | "Web" | "Video";
  image: string;
  description: string;
  tags: string[];
  results: string;
  year: string;
  featured?: boolean;
}

export const PORTFOLIO_CATEGORIES = ["All", "Social Media", "Branding", "Web", "Video"] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "travelco-summer-campaign",
    title: "Travelco Holidays Wanderlust Campaign",
    client: "Travelco Holidays",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "High-engagement social campaign and creative travel posters spotlighting curated tropical getaways, driving record outbound package bookings.",
    tags: ["Paid Ads", "Creative Posters", "Instagram Growth"],
    results: "+340% Booking Inquiries • 1.2M Impressions",
    year: "2024",
    featured: true,
  },
  {
    id: "royal-aquarium-rebrand",
    title: "Royal Aquarium Exotic Brand Identity",
    client: "Royal Aquarium & Pet Accessories",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=80",
    description: "Vibrant visual rebranding, custom in-store packaging, and digital promotional assets for Sri Lanka's leading exotic aquatic retailer.",
    tags: ["Brand Identity", "Packaging Design", "Store Collateral"],
    results: "+45% Retail Footfall • Complete Brand Overhaul",
    year: "2024",
    featured: true,
  },
  {
    id: "nile-construction-digital",
    title: "Nile Construction Engineering Portal",
    client: "Nile Construction Engineering",
    category: "Web",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    description: "Sleek, high-performance corporate web platform showcasing mega-infrastructure projects, heavy equipment portfolios, and RFP lead funnels.",
    tags: ["Next.js Architecture", "Interactive 3D", "Corporate UI/UX"],
    results: "99 Lighthouse Score • 4x B2B Inquiries",
    year: "2023",
    featured: true,
  },
  {
    id: "luxury-real-estate-campaign",
    title: "Aura Colombo Luxury Residences Launch",
    client: "Prime Real Estate Group",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Targeted lead generation campaign across Meta and Google for high-net-worth buyers seeking luxury Colombo oceanfront penthouses.",
    tags: ["High-Ticket Funnels", "3D Architecture Renders", "Meta Ads"],
    results: "48 Qualified Viewings • $1.8M Property Sales",
    year: "2024",
    featured: true,
  },
  {
    id: "pureclean-video-ads",
    title: "PureClean Sarcastic Reel Series",
    client: "PureClean Home Solutions",
    category: "Video",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    description: "Viral, witty short-form video commercials contrasting messy family chaos with effortless professional deep cleaning.",
    tags: ["Cinematic Video", "Viral Reels", "Humor Marketing"],
    results: "2.4M Organic Views • 3.8x Service Bookings",
    year: "2024",
    featured: true,
  },
  {
    id: "ceylon-festive-campaign",
    title: "Sinhala & Tamil New Year Festive Campaign",
    client: "Heritage Retail Collective",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    description: "Culturally resonant festive holiday campaign blending traditional motifs with sleek contemporary typography and flash promos.",
    tags: ["Festive Campaign", "Omnichannel", "Motion Graphics"],
    results: "+280% Holiday Sales • 45K Direct Interactions",
    year: "2024",
    featured: false,
  },
  {
    id: "velvet-coffee-branding",
    title: "Velvet Roast Artisan Cafe & Packaging",
    client: "Velvet Roast Roasters",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    description: "Minimalist artisanal coffee packaging, foil-stamped menu suites, and Instagram aesthetic guideline for specialty coffee pioneers.",
    tags: ["Packaging", "Typography", "Visual Identity"],
    results: "Sold Out Batch 01 • Featured on Design Digest",
    year: "2023",
    featured: false,
  },
  {
    id: "apex-fitness-app-web",
    title: "Apex Athletics Interactive Member Hub",
    client: "Apex Athletics Club",
    category: "Web",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    description: "Dynamic web application featuring membership tier selectors, trainer timetables, and integrated payment gateways for seamless signup.",
    tags: ["Web App", "Stripe & PayHere", "Fluid Animations"],
    results: "+62% Online Signups • Sub-second Load Time",
    year: "2024",
    featured: false,
  },
  {
    id: "pulse-energy-commercial",
    title: "Pulse Zero Cinematic TVC & Launch Film",
    client: "Pulse Nutrition",
    category: "Video",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    description: "Fast-paced, adrenaline-pumping product launch commercial shot with 4K anamorphic lenses and dynamic electronic sound design.",
    tags: ["Commercial Film", "VFX & Sound Design", "Product Launch"],
    results: "National TV Broadcast • 500K Launch Week Streams",
    year: "2024",
    featured: false,
  }
];
