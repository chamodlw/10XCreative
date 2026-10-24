import { ContactFormData } from "./validations";
import { BRAND, CONTACT } from "./constants";

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function generateAdminEmailHtml(data: ContactFormData, timestamp: string): string {
  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeCompany = escapeHtml(data.company || "Not provided");
  const safeBudget = escapeHtml(data.budget);
  const safeServices = data.services.map((s) => escapeHtml(s)).join(", ");
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F7F5; margin: 0; padding: 24px; color: #0F0F10; }
      .container { max-width: 620px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #E5E5E5; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
      .header { background: #0F0F10; padding: 28px; text-align: center; border-bottom: 4px solid #E3222A; }
      .header h1 { color: #FFFFFF; margin: 0; font-size: 22px; letter-spacing: 1px; font-weight: 800; }
      .header p { color: #E3222A; margin: 6px 0 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; }
      .content { padding: 32px; }
      .badge { display: inline-block; background: #FFF1F1; color: #E3222A; font-weight: 700; padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-bottom: 20px; }
      table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 24px; }
      th, td { text-align: left; padding: 12px; border-bottom: 1px solid #EEEEEE; font-size: 14px; }
      th { color: #6B6B6B; font-weight: 600; width: 35%; }
      td { color: #0F0F10; font-weight: 500; }
      .message-box { background: #F7F7F5; border-left: 3px solid #E3222A; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; margin-top: 12px; color: #1A1A1A; }
      .footer { background: #F7F7F5; padding: 18px 32px; text-align: center; font-size: 12px; color: #6B6B6B; border-top: 1px solid #EEEEEE; }
      .btn { display: inline-block; background: #E3222A; color: #FFFFFF; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 700; font-size: 13px; margin-top: 14px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>10X CREATIVE</h1>
        <p>⚡ High-Priority Lead Notification</p>
      </div>
      <div class="content">
        <span class="badge">🔥 NEW INQUIRY RECEIVED</span>
        <p style="font-size: 15px; line-height: 1.5; color: #0F0F10;">
          A prospective client has submitted an inquiry through <strong>tenxcreative.com</strong>.
        </p>
        <table>
          <tr>
            <th>Full Name</th>
            <td><strong>${safeName}</strong></td>
          </tr>
          <tr>
            <th>Email</th>
            <td><a href="mailto:${safeEmail}" style="color: #E3222A; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <th>Phone / WhatsApp</th>
            <td><a href="https://wa.me/${safePhone.replace(/[^\d]/g, "")}" style="color: #E3222A; text-decoration: none;">${safePhone}</a></td>
          </tr>
          <tr>
            <th>Company / Brand</th>
            <td>${safeCompany}</td>
          </tr>
          <tr>
            <th>Services Interested</th>
            <td><strong>${safeServices}</strong></td>
          </tr>
          <tr>
            <th>Estimated Budget</th>
            <td>${safeBudget}</td>
          </tr>
          <tr>
            <th>Received At</th>
            <td>${timestamp} (Asia/Colombo)</td>
          </tr>
        </table>

        <div style="font-size: 13px; font-weight: 700; color: #0F0F10; text-transform: uppercase; letter-spacing: 0.5px;">Client Message:</div>
        <div class="message-box">
          ${safeMessage}
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="mailto:${safeEmail}?subject=Re:%20Inquiry%20with%2010X%20Creative" class="btn">Reply Directly via Email</a>
          <a href="https://wa.me/${safePhone.replace(/[^\d]/g, "")}" class="btn" style="background: #25D366; margin-left: 8px;">Open in WhatsApp</a>
        </div>
      </div>
      <div class="footer">
        10X Creative Automated System • ${CONTACT.address.full}
      </div>
    </div>
  </body>
  </html>
  `;
}

export function generateClientAutoReplyHtml(data: ContactFormData): string {
  const safeName = escapeHtml(data.fullName);

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F7F5; margin: 0; padding: 24px; color: #0F0F10; }
      .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #E5E5E5; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
      .header { background: #0F0F10; padding: 32px 24px; text-align: center; border-bottom: 4px solid #E3222A; }
      .header h1 { color: #FFFFFF; margin: 0; font-size: 26px; letter-spacing: 1.5px; font-weight: 800; }
      .header p { color: #E3222A; margin: 8px 0 0 0; font-size: 13px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
      .content { padding: 36px 30px; font-size: 15px; line-height: 1.7; color: #1A1A1A; }
      .greeting { font-size: 20px; font-weight: 700; color: #0F0F10; margin-bottom: 16px; }
      .highlight-card { background: #F7F7F5; border-radius: 8px; padding: 20px; border-left: 4px solid #E3222A; margin: 24px 0; }
      .highlight-card p { margin: 0; font-size: 14px; color: #333333; }
      .cta-button { display: inline-block; background: #25D366; color: #FFFFFF; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 30px; margin-top: 16px; font-size: 14px; }
      .footer { background: #0F0F10; padding: 28px; text-align: center; color: #9E9E9E; font-size: 13px; line-height: 1.6; }
      .footer a { color: #FFFFFF; text-decoration: none; margin: 0 8px; }
      .socials { margin-top: 14px; }
      .socials a { color: #E3222A; font-weight: 600; text-decoration: none; margin: 0 8px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>10X CREATIVE</h1>
        <p>Unleash the Power of Digital</p>
      </div>
      <div class="content">
        <div class="greeting">Hi ${safeName},</div>
        <p>
          Thank you for reaching out to <strong>10X Creative</strong>! We have received your project details and our strategists are already reviewing your inquiry.
        </p>
        <p>
          We know time-to-market is critical. One of our lead digital strategists will get in touch with you within <strong>24 business hours</strong> with personalized recommendations and next steps.
        </p>

        <div class="highlight-card">
          <p><strong>⚡ Need an immediate response?</strong></p>
          <p style="margin-top: 6px;">You can connect with our founders and campaign managers right away via WhatsApp for quick questions or instant quote clarifications.</p>
          <a href="${CONTACT.whatsapp.link}" class="cta-button">💬 Chat on WhatsApp (+94 76 371 1125)</a>
        </div>

        <p style="margin-top: 24px;">
          Best regards,<br/>
          <strong>Ajwad & the 10X Creative Team</strong><br/>
          <span style="color: #6B6B6B; font-size: 13px;">Results-Driven Marketing & Web Solutions</span>
        </p>
      </div>
      <div class="footer">
        <div style="font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">10X Creative (Pvt) Ltd</div>
        <div>${CONTACT.address.full}</div>
        <div style="margin-top: 4px;">Phone: +94 76 371 1125 | +94 77 917 7868</div>
        <div class="socials">
          <a href="${CONTACT.socials.instagram}">Instagram</a> •
          <a href="${CONTACT.socials.facebook}">Facebook</a> •
          <a href="${BRAND.url}">Website</a>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}
