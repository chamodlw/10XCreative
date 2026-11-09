import { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { BRAND, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | 10X Creative Sri Lanka",
  description:
    "How 10X Creative (Pvt) Ltd collects, uses and protects personal information when you visit our website or use our digital marketing, creative, web development and analytics services.",
  alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "6 November 2026";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          This Privacy Policy explains how <strong>{BRAND.legalName}</strong> (&quot;10X Creative&quot;, &quot;we&quot;,
          &quot;us&quot; or &quot;our&quot;), a digital marketing agency and web solutions provider based at{" "}
          {CONTACT.address.full}, collects, uses, shares and protects personal information.
        </p>
        <p>
          It applies to our website, to enquiries you send us, and to the marketing, creative, tech build and
          analytics services we provide to clients. We process personal data in line with Sri Lanka&apos;s Personal
          Data Protection Act No. 9 of 2022 and, where it applies, other international data protection laws such as
          the GDPR.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>
          <strong>Information you give us.</strong> When you fill in our contact or quote form, message us on
          WhatsApp, email or call us, we may collect:
        </p>
        <ul>
          <li>Your name, email address, phone number and company name</li>
          <li>The services you are interested in, your budget range and project details</li>
          <li>Any files, brand assets, logins or content you share with us for a project</li>
          <li>Billing details such as billing name, address and payment references</li>
        </ul>
        <p>
          <strong>Information collected automatically.</strong> When you browse our website we may collect your IP
          address, browser and device type, pages visited, time on page, referring website and approximate location,
          using cookies and similar technologies (see Section 5).
        </p>
        <p>
          <strong>Information from third parties.</strong> We may receive limited information from advertising
          platforms, social networks or partners, for example when you respond to one of our ads or are referred to
          us.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to enquiries, prepare proposals and quotes, and communicate with you</li>
          <li>Deliver, manage and invoice the services you have engaged us for</li>
          <li>Run, maintain, secure and improve our website</li>
          <li>Understand how visitors use our website and measure the performance of our own marketing</li>
          <li>Send you updates or marketing messages, where you have agreed or where the law allows</li>
          <li>Meet our legal, tax and accounting obligations and protect our legal rights</li>
        </ul>
        <p>
          We only use your information where we have a lawful basis to do so: your consent, the performance of a
          contract with you, compliance with a legal obligation, or our legitimate business interests, provided these
          are not overridden by your rights.
        </p>
      </>
    ),
  },
  {
    id: "client-data",
    title: "Data we handle for clients",
    body: (
      <>
        <p>
          When we run campaigns, build websites or set up analytics for a client, we may process personal data
          belonging to that client&apos;s customers, for example leads from ad forms, email lists, store orders or
          analytics data.
        </p>
        <p>
          In these cases the client is the data controller and we act as a <strong>data processor</strong> on their
          behalf. We only process this data on the client&apos;s instructions, for the purpose of delivering the
          agreed services, and we keep it confidential and secure. Questions about how a client uses your data should
          be directed to that client.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & tracking technologies",
    body: (
      <>
        <p>Our website uses cookies and similar tools, including:</p>
        <ul>
          <li>
            <strong>Essential cookies</strong> that keep the website working and secure
          </li>
          <li>
            <strong>Analytics</strong> such as Google Analytics, which tells us how visitors use the site in aggregate
          </li>
          <li>
            <strong>Behaviour analysis</strong> tools such as Microsoft Clarity (heatmaps and session recordings), used
            to improve usability
          </li>
          <li>
            <strong>Advertising pixels</strong> such as the Meta Pixel, Google Ads or TikTok Pixel, used to measure and
            improve our ads
          </li>
        </ul>
        <p>
          You can block or delete cookies through your browser settings, and opt out of Google Analytics using
          Google&apos;s browser add-on. Blocking some cookies may affect how the website works.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How we share information",
    body: (
      <>
        <p>
          <strong>We do not sell your personal information.</strong> We only share it with:
        </p>
        <ul>
          <li>
            Trusted service providers who help us run our business, such as hosting, email, cloud storage, CRM,
            analytics and payment providers
          </li>
          <li>
            Advertising and social platforms (for example Google, Meta and TikTok) when needed to run campaigns you
            have asked us to manage
          </li>
          <li>Freelancers or partners working on your project, under confidentiality obligations</li>
          <li>Professional advisers such as accountants, auditors and lawyers</li>
          <li>Authorities, where required by law or to protect our rights, users or the public</li>
        </ul>
        <p>All third parties are expected to protect your data and use it only for the purpose it was shared for.</p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: (
      <p>
        Some of the tools and platforms we use store data on servers outside Sri Lanka. Where personal data is
        transferred abroad, we take reasonable steps to make sure it is protected to a standard consistent with this
        policy and applicable law.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <p>
        We keep personal information only for as long as we need it for the purposes above. Enquiry data is normally
        kept for up to 2 years. Client project and billing records are kept for the duration of our relationship and
        afterwards for as long as required by tax, accounting or legal obligations. When data is no longer needed we
        delete or anonymise it securely.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organisational measures to protect personal data, including encrypted (HTTPS)
        connections, access controls, secure password handling and limiting access to people who need it. No method of
        transmission or storage is 100% secure, so we cannot guarantee absolute security, but we will notify you and
        the relevant authorities of a data breach where the law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Depending on the law that applies to you, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Ask us to correct inaccurate or incomplete data</li>
          <li>Ask us to delete your data, or restrict how we use it</li>
          <li>Withdraw your consent at any time, including unsubscribing from marketing</li>
          <li>Object to processing based on our legitimate interests</li>
          <li>Lodge a complaint with the Data Protection Authority of Sri Lanka or your local regulator</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${CONTACT.emails.primary}`}>{CONTACT.emails.primary}</a>. We may need to verify your identity
          before responding.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-party links",
    body: (
      <p>
        Our website and the work in our portfolio may link to other websites and social media platforms. We are not
        responsible for the privacy practices of those sites, and we encourage you to read their privacy policies.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <p>
        Our website and services are intended for businesses and adults. We do not knowingly collect personal
        information from children under 16. If you believe a child has given us personal data, please contact us and
        we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The latest version will always be on this page with its
        effective date. Significant changes may also be communicated by email or a notice on our website. Please also
        read our <Link href="/terms-of-service">Terms of Service</Link>.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      highlight="Policy"
      intro="Your privacy matters to us. This policy explains what information we collect, why we collect it, and how we keep it safe when you use our website or work with us."
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
      related={{ label: "Terms of Service", href: "/terms-of-service" }}
    />
  );
}
