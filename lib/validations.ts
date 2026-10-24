import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be under 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid contact phone or WhatsApp number." })
    .max(25, { message: "Phone number is too long." })
    .regex(/^[\d\s+\-()]{7,25}$/, { message: "Phone contains invalid characters." }),
  company: z
    .string()
    .max(100, { message: "Company name is too long." })
    .optional()
    .or(z.literal("")),
  services: z
    .array(z.string())
    .min(1, { message: "Please select at least one service." }),
  budget: z
    .string()
    .min(1, { message: "Please select an estimated budget range." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2500, { message: "Message cannot exceed 2500 characters." }),
  // Honeypot field for bot protection (must remain empty)
  honeypot: z.string().max(0, { message: "Bot detected" }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
