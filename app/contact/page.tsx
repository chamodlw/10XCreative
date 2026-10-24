"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { CONTACT, BUDGET_RANGES, SERVICE_OPTIONS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      services: ["Paid Advertising"],
      budget: BUDGET_RANGES[1],
      message: "",
      honeypot: "",
    },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setValue(
          "services",
          selectedServices.filter((s) => s !== service),
          { shouldValidate: true }
        );
      }
    } else {
      setValue("services", [...selectedServices, service], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Something went wrong while sending your message.");
      }

      setSubmissionSuccess(true);
      reset();

      // Launch joyful celebratory confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E3222A", "#0F0F10", "#25D366", "#FFFFFF"],
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try WhatsApp directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#F7F7F5] min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F1] text-[#E3222A] text-xs font-bold uppercase tracking-wider mb-6 border border-[#FFD5D7]">
            <span>⚡</span> GET IN TOUCH
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#0F0F10] mb-6">
            START YOUR <span className="text-[#E3222A]">10X</span> JOURNEY.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Ready to unleash your digital presence? Fill out the brief below for a tailored roadmap within 24 hours, or start an instant conversation via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Contact Details & Map on Right */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Left Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-black/5 shadow-xs">
            {submissionSuccess ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 bg-[#FFF1F1] text-[#E3222A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#0F0F10]">
                  INQUIRY RECEIVED ⚡
                </h3>
                <p className="text-[#6B6B6B] max-w-md mx-auto text-sm leading-relaxed">
                  Thanks for reaching out! One of our lead digital strategists is reviewing your project details and will be in touch within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => setSubmissionSuccess(false)}
                    variant="outline"
                    size="md"
                  >
                    Submit Another Inquiry
                  </Button>
                  <Button
                    href={CONTACT.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                  >
                    Chat on WhatsApp Now
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field (hidden from legitimate users) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...register("honeypot")}
                />

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-[#E3222A] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                      Full Name <span className="text-[#E3222A]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Wickramasinghe"
                      {...register("fullName")}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[#F7F7F5] text-sm text-[#0F0F10] placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#E3222A] focus:ring-2 focus:ring-[#E3222A]/20 transition-all ${
                        errors.fullName ? "border-red-500" : "border-black/10"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                      Email Address <span className="text-[#E3222A]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@yourcompany.com"
                      {...register("email")}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[#F7F7F5] text-sm text-[#0F0F10] placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#E3222A] focus:ring-2 focus:ring-[#E3222A]/20 transition-all ${
                        errors.email ? "border-red-500" : "border-black/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                      Phone / WhatsApp <span className="text-[#E3222A]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +94 77 123 4567"
                      {...register("phone")}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[#F7F7F5] text-sm text-[#0F0F10] placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#E3222A] focus:ring-2 focus:ring-[#E3222A]/20 transition-all ${
                        errors.phone ? "border-red-500" : "border-black/10"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                      Company / Brand Name <span className="text-[#6B6B6B] text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Global"
                      {...register("company")}
                      className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F7F7F5] text-sm text-[#0F0F10] placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#E3222A] focus:ring-2 focus:ring-[#E3222A]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Services Multi-Select Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                    Services You Are Interested In <span className="text-[#E3222A]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {SERVICE_OPTIONS.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                            isSelected
                              ? "bg-[#E3222A] text-white border-[#E3222A] shadow-xs"
                              : "bg-[#F7F7F5] text-[#1A1A1A] border-black/10 hover:border-black/30"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.services.message}</p>
                  )}
                </div>

                {/* Budget Range Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                    Estimated Budget Range <span className="text-[#E3222A]">*</span>
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3.5 rounded-xl border border-black/10 bg-[#F7F7F5] text-sm text-[#0F0F10] focus:bg-white focus:outline-none focus:border-[#E3222A] focus:ring-2 focus:ring-[#E3222A]/20 transition-all"
                  >
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F0F10] mb-2">
                    Project Details & Goals <span className="text-[#E3222A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current marketing goals, timeline, and what you aim to achieve..."
                    {...register("message")}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#F7F7F5] text-sm text-[#0F0F10] placeholder-[#6B6B6B]/60 focus:bg-white focus:outline-none focus:border-[#E3222A] focus:ring-2 focus:ring-[#E3222A]/20 transition-all ${
                      errors.message ? "border-red-500" : "border-black/10"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#E3222A] hover:bg-[#B8141C] text-white font-display text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(227,34,42,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Your Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="p-8 rounded-3xl bg-[#0F0F10] text-white space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E3222A] block">
                ⚡ CONNECT DIRECTLY
              </span>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E3222A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-0.5">Colombo Headquarters</h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {CONTACT.address.full}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E3222A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-0.5">Call Our Team</h4>
                  <p className="text-sm text-white/90">
                    <a href={`tel:${CONTACT.phones[0].value}`} className="hover:text-[#E3222A] transition-colors">
                      {CONTACT.phones[0].display}
                    </a>
                  </p>
                  <p className="text-sm text-white/90">
                    <a href={`tel:${CONTACT.phones[1].value}`} className="hover:text-[#E3222A] transition-colors">
                      {CONTACT.phones[1].display}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E3222A] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-0.5">Email Inquiries</h4>
                  <p className="text-sm text-white/90">
                    <a href={`mailto:${CONTACT.emails.primary}`} className="hover:text-[#E3222A] transition-colors">
                      {CONTACT.emails.primary}
                    </a>
                  </p>
                  <p className="text-sm text-white/70">
                    <a href={`mailto:${CONTACT.emails.general}`} className="hover:text-[#E3222A] transition-colors">
                      {CONTACT.emails.general}
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp instant button */}
              <div className="pt-2">
                <a
                  href={CONTACT.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp (+94 76 371 1125)</span>
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs text-white/60">
                <Clock className="w-4 h-4 text-[#E3222A]" />
                <span>{CONTACT.hours}</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-72 rounded-3xl overflow-hidden border border-black/5 shadow-xs relative">
              <iframe
                title="10X Creative Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.978644521798!2d79.8574113!3d6.8868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596200a7b973%3A0xc3f8489cf2996e3e!2sPhilip%20Gunawardena%20Mawatha%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
