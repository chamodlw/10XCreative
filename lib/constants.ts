export const BRAND = {
  name: "10X Creative",
  legalName: "10X Creative (Pvt) Ltd",
  tagline: "Unleash the Power of Digital.",
  shortDescription: "A results-driven marketing agency and web solution provider based in Sri Lanka.",
  fullDescription: "From strategy to execution, we craft data-driven campaigns that accelerate growth, boost conversions, and scale visionary brands worldwide.",
  foundedYear: "2019",
  category: "Advertising / Marketing / Web Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tenxcreative.com",
};

export const CONTACT = {
  address: {
    line1: "No 134 1/1, Philip Gunawardena Mawatha",
    city: "Colombo 04",
    country: "Sri Lanka",
    postalCode: "00400",
    full: "No 134 1/1, Philip Gunawardena Mawatha, Colombo 04, Sri Lanka, 00400",
  },
  phones: [
    { display: "+94 76 371 1125", value: "+94763711125", primary: true },
    { display: "+94 77 917 7868", value: "+94779177868", primary: false },
  ],
  whatsapp: {
    number: "94763711125",
    display: "+94 76 371 1125",
    link: "https://wa.me/94763711125?text=Hi%2010X%20Creative%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services",
  },
  emails: {
    primary: "ajwad@tenxcreative.com",
    general: "info@tenxcreative.com",
  },
  socials: {
    instagram: "https://www.instagram.com/10x.creative/",
    facebook: "https://www.facebook.com/be10xcreative/",
    linkedin: "https://www.linkedin.com/company/10xcreative",
    tiktok: "https://tiktok.com/@10x.creative",
  },
  hours: "Monday – Friday: 9:00 AM – 6:00 PM | Saturday: 9:00 AM – 1:00 PM",
  geo: {
    latitude: 6.8868,
    longitude: 79.8596,
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 25, suffix: "+", label: "Happy Clients", desc: "Long-term partners scaling with us" },
  { value: 100, suffix: "+", label: "Projects Delivered", desc: "High-impact campaigns & web solutions" },
  { value: 5, suffix: "+", label: "Years Experience", desc: "Pioneering creative digital growth" },
  { value: 95, suffix: "", label: "Awards Earned", desc: "Recognized for creative excellence" },
];

export const BUDGET_RANGES = [
  "Below LKR 50,000",
  "LKR 50,000 – 150,000",
  "LKR 150,000 – 500,000",
  "LKR 500,000+",
  "Not sure / Let's discuss",
];

export const SERVICE_OPTIONS = [
  "Paid Advertising",
  "Social Media Marketing",
  "Influencer Marketing",
  "Content Creation",
  "Graphic Designing",
  "Web Designing",
  "Brand Strategy & Consultation",
  "Other",
];
