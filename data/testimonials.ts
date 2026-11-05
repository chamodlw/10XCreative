export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  tag: string;
  featured?: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "zaeem-sheriff",
    quote:
      "I've been working with Ajwad of 10X Creative for a number of years. He is a professional who truly understands digital advertising and communication, and his team has delivered consistently. We rely on their expertise to keep an eye on our ads, make judgment calls, and keep us informed. I highly recommend 10X Creative for digital advertising!",
    author: "Zaeem Sheriff",
    role: "Operations Manager",
    company: "Client Partner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    tag: "Paid Advertising & ROI",
    featured: true,
  },
  {
    id: "travelco-review",
    quote:
      "10X Creative completely overhauled our outbound travel campaigns. Their creative posters and hyper-targeted Meta ad sets generated immediate booking inquiries. They don't just execute campaigns; they genuinely care about our cost-per-lead and brand reputation.",
    author: "Farhan Naheem",
    role: "Marketing Director",
    company: "Travelco Holidays",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    tag: "Creative Direction & Ads",
    featured: true,
  },
  {
    id: "royal-aquarium-review",
    quote:
      "The visual rebranding and social media marketing engineered by 10X Creative took Royal Aquarium to a whole new level in Sri Lanka. Our store traffic and nationwide delivery inquiries jumped within the first month. Outstanding design sensibility!",
    author: "Dinesh Wickramasinghe",
    role: "Managing Director",
    company: "Royal Aquarium & Pet Accessories",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    tag: "Brand Identity & Social",
    featured: true,
  },
  {
    id: "nile-construction-review",
    quote:
      "When we needed an engineering web portal that matched our multi-million dollar infrastructure projects, 10X Creative delivered an ultra-fast, visually breathtaking Next.js website. Our global RFP bids are taken far more seriously now.",
    author: "Eng. Rizwan Careem",
    role: "Chief Executive Officer",
    company: "Nile Construction Engineering",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    tag: "Tech Build & Web Platform",
    featured: false,
  },
  {
    id: "ceylon-retail-review",
    quote:
      "The analytics dashboard and GA4 server-side pixel tracking setup by 10X Creative gave us complete visibility into our sales funnel. We cut wasted ad spend by 35% while increasing conversions by 140%. Unbeatable data clarity.",
    author: "Dilshan Perera",
    role: "Head of E-Commerce",
    company: "Ceylon Retail Hub",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    tag: "Conversion & Analytics",
    featured: true,
  },
  {
    id: "urban-edge-review",
    quote:
      "From viral Reels concepts to complete commercial video production, 10X Creative brings unmatched energy. They script hooks that actually stop viewers from scrolling. Our brand recall in Colombo doubled in 60 days.",
    author: "Sarah Fernando",
    role: "Creative Brand Lead",
    company: "Urban Edge Lifestyle",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    rating: 5,
    tag: "Viral Video & Creative",
    featured: true,
  },
];
