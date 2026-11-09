export interface CapabilityLink {
  key: "marketing" | "creative" | "tech-build" | "analytics";
  number: string;
  label: string;
  href: string;
  tagline: string;
}

export const CAPABILITIES: CapabilityLink[] = [
  {
    key: "marketing",
    number: "01",
    label: "Marketing",
    href: "/marketing",
    tagline: "High-ROAS paid ads, social & influencer growth.",
  },
  {
    key: "creative",
    number: "02",
    label: "Creative",
    href: "/creative",
    tagline: "Viral video, cinematic production & brand identity.",
  },
  {
    key: "tech-build",
    number: "03",
    label: "Tech Build",
    href: "/tech-build",
    tagline: "Sub-second Custom Coding websites, funnels & e-commerce.",
  },
  {
    key: "analytics",
    number: "04",
    label: "Analytics",
    href: "/analytics",
    tagline: "Server-side tracking, attribution & live ROI dashboards.",
  },
];
