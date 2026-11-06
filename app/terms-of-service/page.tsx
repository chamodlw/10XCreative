import { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { BRAND, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | 10X Creative Sri Lanka",
  description:
    "The terms that apply when you use the 10X Creative website or engage 10X Creative (Pvt) Ltd for digital marketing, creative, web development and analytics services.",
  alternates: { canonical: "/terms-of-service" },
};

const EFFECTIVE_DATE = "6 November 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) apply to your use of our website and to any services provided by{" "}
          <strong>{BRAND.legalName}</strong> (&quot;10X Creative&quot;, &quot;we&quot;, &quot;us&quot; or
          &quot;our&quot;), registered in Sri Lanka at {CONTACT.address.full}.
        </p>
        <p>
          By using our website or engaging our services, you (&quot;you&quot; or the &quot;Client&quot;) agree to these
          Terms. If a signed proposal, quotation or service agreement conflicts with these Terms, that document takes
          priority for the project it covers.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Our services",
    body: (
      <>
        <p>We provide digital marketing and web solutions, including:</p>
        <ul>
          <li>
            <strong>Marketing:</strong> paid advertising, social media, content, email and influencer marketing, and
            campaign planning
          </li>
          <li>
            <strong>Creative:</strong> brand identity, graphic design, UI/UX, video, motion graphics and photography
          </li>
          <li>
            <strong>Tech Build:</strong> website and e-commerce development, custom software, API integrations,
            maintenance and optimisation
          </li>
          <li>
            <strong>Analytics:</strong> tracking setup, ROI reporting, conversion optimisation, behaviour analysis, SEO
            audits and research
          </li>
        </ul>
        <p>
          The exact scope, deliverables, timeline and fees for each project are set out in a written proposal or
          quotation. Work outside that scope is treated as additional work and quoted separately.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client responsibilities",
    body: (
      <>
        <p>To help us deliver on time, you agree to:</p>
        <ul>
          <li>Provide accurate information, content, brand assets and approvals promptly</li>
          <li>Give us the account access needed (for example ad accounts, hosting, domains or analytics)</li>
          <li>Make sure you own or have permission to use any material you send us</li>
          <li>Make sure your products, services and offers comply with the law and with platform advertising policies</li>
          <li>Review deliverables and give consolidated feedback within the agreed review periods</li>
        </ul>
        <p>Delays in feedback, content or access may move project timelines and are not our responsibility.</p>
      </>
    ),
  },
  {
    id: "quotes-payment",
    title: "Quotes, fees & payment",
    body: (
      <>
        <ul>
          <li>Quotations are valid for 30 days unless stated otherwise.</li>
          <li>
            Unless agreed otherwise, projects require a <strong>50% advance payment</strong> before work begins, with
            the balance due before final delivery or launch.
          </li>
          <li>Monthly retainers are billed in advance at the start of each month.</li>
          <li>Invoices are payable within 7 days of the invoice date.</li>
          <li>
            Advertising budgets (ad spend) are separate from our management fees and are paid by the Client, either
            directly to the platform or to us in advance.
          </li>
          <li>
            Third-party costs such as domains, hosting, premium plugins, stock assets, software licences and printing
            are charged separately unless included in the quote.
          </li>
        </ul>
        <p>
          We may pause work, campaigns or website access if invoices remain unpaid after their due date. Fees already
          paid for completed work are non-refundable.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    title: "Revisions & approvals",
    body: (
      <p>
        Each proposal states the number of revision rounds included. Additional revisions or changes after a
        deliverable has been approved may be charged at our standard rates. Your written approval (including by email
        or WhatsApp) of a design, copy, campaign or build stage means that stage is accepted.
      </p>
    ),
  },
  {
    id: "results",
    title: "Results & third-party platforms",
    body: (
      <>
        <p>
          We use our expertise and best practice to achieve the goals agreed with you. However, marketing performance,
          search rankings, engagement, sales and return on ad spend depend on many factors outside our control,
          including platform algorithms, competition, market conditions and your own offer and pricing.{" "}
          <strong>We do not guarantee specific results</strong> unless explicitly agreed in writing.
        </p>
        <p>
          Advertising and social platforms (such as Google, Meta and TikTok) set their own policies and may reject ads,
          restrict or suspend accounts. We are not liable for decisions made by those platforms, although we will help
          you resolve them where possible.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <ul>
          <li>
            Once all fees are paid in full, ownership of the final approved deliverables created specifically for you
            transfers to you.
          </li>
          <li>
            Draft concepts, unused designs, source and working files remain our property unless the proposal includes
            their handover.
          </li>
          <li>
            Pre-existing tools, code libraries, templates and know-how we use remain ours; you receive a licence to use
            them as part of the deliverable.
          </li>
          <li>
            Third-party assets (fonts, stock images, music, plugins) are subject to their own licence terms.
          </li>
          <li>
            Unless you ask us not to, we may display completed work in our portfolio, case studies and social media.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality & data",
    body: (
      <p>
        Both parties agree to keep each other&apos;s confidential business information private and to use it only for
        the project. When we handle personal data on your behalf, we do so as described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. You are responsible for having a lawful basis to collect any
        customer data we process for you, and for having your own privacy policy where required.
      </p>
    ),
  },
  {
    id: "hosting-maintenance",
    title: "Hosting, maintenance & support",
    body: (
      <p>
        Unless you have an active maintenance plan, support after launch is limited to fixing defects reported within
        30 days of delivery. Ongoing updates, backups, security monitoring and content changes are provided under a
        separate maintenance agreement. We are not responsible for issues caused by changes made by you or other
        parties, or by third-party hosting and service outages.
      </p>
    ),
  },
  {
    id: "website-use",
    title: "Use of our website",
    body: (
      <>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Copy, reproduce or reuse our content, designs or portfolio work without permission</li>
          <li>Attempt to hack, disrupt or overload the website or its servers</li>
          <li>Submit false, misleading or spam information through our forms</li>
          <li>Use the website for any unlawful purpose</li>
        </ul>
        <p>
          Website content is provided for general information only and may change without notice.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent permitted by law, 10X Creative is not liable for any indirect, incidental or consequential loss,
        including loss of profits, revenue, data or business opportunities. Our total liability for any claim relating
        to a project is limited to the fees you paid us for that project in the three (3) months before the claim
        arose.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        Either party may end a monthly retainer with 30 days&apos; written notice. Either party may end a project
        immediately if the other seriously breaches these Terms and does not fix the breach within 14 days of being
        notified. On termination, you must pay for all work completed and costs incurred up to the termination date,
        and we will hand over the completed, paid-for deliverables.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka. Both parties will first
        try to resolve any dispute in good faith; if that fails, the courts of Colombo, Sri Lanka will have exclusive
        jurisdiction.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these Terms from time to time. The latest version will always be published on this page with its
        effective date. Changes do not affect projects already agreed in a signed proposal unless both parties agree.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      highlight="Service"
      intro="These terms explain how we work with clients and how our website may be used. Please read them before engaging our services."
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
      related={{ label: "Privacy Policy", href: "/privacy-policy" }}
    />
  );
}
