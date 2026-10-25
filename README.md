# 10X Creative — Official Website

> **"Unleash the Power of Digital."**  
> A high-performance, results-driven marketing agency and web solutions platform based in Colombo, Sri Lanka.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lenis Smooth Scroll**, **Nodemailer**, and **React Hook Form + Zod**.

---

## ⚡ Key Highlights & Architecture

- **Creative Award-Tier Design**:
  - Light-base aesthetic with bold typography (`Anton` + `Plus Jakarta Sans`) and signature brand red accents (`#E3222A`).
  - Dark ink rhythm sections (`#0F0F10`) for contrast (Stats, Testimonials, Footer, What We Do).
  - Signature ⚡ lightning bolt motif woven through section dividers, preloaders, badges, and micro-interactions.
- **Hero Video Integration**:
  - Displays the local background video `/hero-video.mp4` with a clean, high-contrast light gradient overlay, sound toggle, and magnetic CTAs.
- **Dynamic Floating Pill Header**:
  - Smoothly morphs from a transparent header to a floating glassmorphic pill on scroll (`backdrop-blur-xl`, `border-black/5`).
  - Features sliding active indicators (`layoutId="activeNavPill"`) and a fullscreen animated mobile menu with `10x-Logo2`.
- **Interactive Custom Cursor** (Desktop only):
  - Two-layer cursor with spring lag physics (`useSpring`), dynamic states (`view`, `play`, `link`, `text`), squash feedback, and spark trails.
- **Floating Creative WhatsApp Button**:
  - Multi-state WhatsApp launcher (`#25D366`), pulsing ripple animation, rotating circular SVG text badge, unread badge notification, and session-aware greeting bubble.
- **Contact Form & Google SMTP Email Service**:
  - Validated on client and server with Zod.
  - Hidden honeypot spam protection.
  - In-memory rate limiting.
  - Dual emails: High-priority admin lead alert + branded client auto-reply.
  - Celebratory confetti on submission.
- **Full Page Suite**:
  - `/` (Home: 10 structured sections)
  - `/about` (Story, 5-stage framework, core values, team, stats)
  - `/services` (All 6 core capabilities)
  - `/services/[slug]` (Dynamic slug pages with deliverables, process, metrics, and FAQ accordions)
  - `/portfolio` (Filterable gallery with categories and interactive modal lightbox)
  - `/contact` (Interactive form, contact cards, Colombo office map embed)
  - `/not-found` (Custom 404 with broken bolt animation)
  - `/sitemap.xml` & `/robots.txt` & JSON-LD LocalBusiness Schema

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React & React Icons (brand icons)
- **Email Delivery**: Nodemailer with Google Gmail SMTP
- **Form Handling**: React Hook Form + Zod
- **Effects**: canvas-confetti

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/chamodlw/10XCreative.git
cd 10XCreative
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Gmail SMTP Configuration (for contact form emails)
SMTP_USER=chamodweerasinghe8@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
CONTACT_RECEIVER_EMAIL=ajwad@tenxcreative.com

# Site URL & WhatsApp Number
WHATSAPP_NUMBER=94763711125
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note**: In development mode without SMTP credentials set, form submissions are logged to the server console safely without errors.

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📧 How to Create a Google Gmail App Password

To send emails through Gmail SMTP via Nodemailer:

1. Go to your **Google Account**: [https://myaccount.google.com/](https://myaccount.google.com/)
2. Navigate to **Security** → ensure **2-Step Verification** is turned ON.
3. In the search bar at the top, search for **App passwords**.
4. Create a new App Password:
   - App name: `10X Creative Website`
5. Google will generate a **16-character password** (e.g. `abcd efgh ijkl mnop`).
6. Copy this password into `.env.local` as `SMTP_PASS` (without spaces).
7. Set `SMTP_USER` to your Gmail address.

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), import the repository.
3. In **Project Settings** → **Environment Variables**, add:
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_RECEIVER_EMAIL`
   - `WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL` (set to `https://tenxcreative.com` or your production domain)
4. Click **Deploy**.

---

## 🎨 Brand Assets & Logos

- `public/10x-logo.png` — Horizontal black wordmark with red lightning bolt used for main navigation header.
- `public/10x-logo2.png` — Stacked/compact black brand mark.
- `public/10x-logo-white.png` & `public/10x-logo2-white.png` — Inverted white logos with red accents for dark ink sections (preloader, mobile menu, footer).
- `public/hero-video.mp4` — High-definition background video for the hero section.

---

## 📍 Contact Information

- **Address**: No 134 1/1, Philip Gunawardena Mawatha, Colombo 04, Sri Lanka, 00400
- **Phone**: +94 76 371 1125 | +94 77 917 7868
- **WhatsApp**: [+94 76 371 1125](https://wa.me/94763711125)
- **Email**: ajwad@tenxcreative.com / info@tenxcreative.com
- **Website**: [tenxcreative.com](https://tenxcreative.com)

---

© 10X Creative (Pvt) Ltd. All rights reserved.
