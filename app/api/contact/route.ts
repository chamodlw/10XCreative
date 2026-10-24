import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { getMailTransporter } from "@/lib/mailer";
import { generateAdminEmailHtml, generateClientAutoReplyHtml } from "@/lib/email-templates";

// In-memory rate limiting map: ip -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many inquiries sent. Please wait a few minutes before trying again or chat with us on WhatsApp." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 1. Zod Validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify the submitted fields.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot check
    if (data.honeypot && data.honeypot.trim().length > 0) {
      // Bot detected, silently return success
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // 3. Prepare Colombo Time
    const colomboTime = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Colombo",
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date());

    // 4. Send Emails via Nodemailer (if SMTP configured)
    const transporter = getMailTransporter();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "ajwad@tenxcreative.com";
    const senderEmail = process.env.SMTP_USER || "ajwad@tenxcreative.com";

    if (transporter) {
      // Admin notification
      const adminMailOptions = {
        from: `"10X Creative Web Lead" <${senderEmail}>`,
        to: receiverEmail,
        replyTo: data.email,
        subject: `🔥 New Lead: ${data.fullName} – ${data.services.join(", ")}`,
        html: generateAdminEmailHtml(data, colomboTime),
      };

      // Client auto-reply
      const clientMailOptions = {
        from: `"10X Creative" <${senderEmail}>`,
        to: data.email,
        subject: "⚡ Thank you for reaching out to 10X Creative!",
        html: generateClientAutoReplyHtml(data),
      };

      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(clientMailOptions),
      ]);
    } else {
      // In development or when credentials are not yet set
      console.log("[10X Creative Contact Form Lead Received (Dev Mode)]:", {
        data,
        timestamp: colomboTime,
        note: "SMTP_USER and SMTP_PASS not set in .env.local yet.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
