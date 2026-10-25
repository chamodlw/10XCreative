import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Preloader from "@/components/effects/Preloader";
import { BRAND, CONTACT } from "@/lib/constants";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: "10X Creative | Results-Driven Marketing Agency & Web Solutions Sri Lanka",
    template: "%s | 10X Creative – Digital Marketing Agency Sri Lanka",
  },
  description:
    "10X Creative is a results-driven marketing agency and web solutions provider based in Colombo, Sri Lanka. Unleash the power of digital with paid ads, social media, viral content, and custom Next.js websites.",
  keywords: [
    "digital marketing agency Sri Lanka",
    "social media marketing Colombo",
    "web design Sri Lanka",
    "paid advertising agency Sri Lanka",
    "influencer marketing Sri Lanka",
    "content creation Colombo",
    "10X Creative",
    "Next.js web development Sri Lanka",
    "PPC agency Colombo",
  ],
  authors: [{ name: "10X Creative Team", url: BRAND.url }],
  creator: "10X Creative",
  publisher: "10X Creative",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.url,
    title: "10X Creative | Unleash the Power of Digital",
    description:
      "Results-driven digital marketing agency and web solution provider in Sri Lanka. Drive engagement, scale conversions, and build unforgettable digital brands.",
    siteName: BRAND.name,
    images: [
      {
        url: "/10x-logo.png",
        width: 1200,
        height: 630,
        alt: "10X Creative - Unleash the Power of Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10X Creative | Results-Driven Digital Marketing Agency",
    description: "Unleash the Power of Digital. Marketing, PPC, Content & Web Solutions.",
    images: ["/10x-logo.png"],
    creator: "@10xcreative",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "MarketingAgency"],
    name: BRAND.name,
    legalName: BRAND.legalName,
    alternateName: "10X Creative Sri Lanka",
    url: BRAND.url,
    logo: `${BRAND.url}/10x-logo.png`,
    image: `${BRAND.url}/10x-logo.png`,
    description: BRAND.shortDescription,
    telephone: CONTACT.phones[0].display,
    email: CONTACT.emails.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.line1,
      addressLocality: CONTACT.address.city,
      addressCountry: "LK",
      postalCode: CONTACT.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      CONTACT.socials.instagram,
      CONTACT.socials.facebook,
      CONTACT.socials.linkedin,
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${anton.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F7F5] text-[#0F0F10] antialiased selection:bg-[#E3222A] selection:text-white">
        <SmoothScroll>
          {/* First visit preloader */}
          <Preloader />

          {/* Desktop Custom Cursor with spring lag & hover states */}
          <CustomCursor />

          {/* Top red scroll progress bar & back-to-top indicator */}
          <ScrollProgress />

          {/* Floating dynamic header nav */}
          <Header />

          {/* Main page content */}
          {children}

          {/* Creative footer */}
          <Footer />

          {/* High-converting floating WhatsApp button */}
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
