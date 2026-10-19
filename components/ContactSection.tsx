"use client";

import React, { useState } from "react";
import {
  getWhatsAppUrl,
  buildContactFormMessage,
  isWhatsAppConfigured,
  WHATSAPP_CONFIG,
  PREFILLED_MESSAGES,
} from "@/config/whatsapp";
import { WhatsAppIcon, CheckIcon, ArrowRightIcon } from "@/components/Icons";

const SERVICES_OPTIONS = [
  "Website Design & Development",
  "AI UGC Video Advertising",
  "Website + Advertising Package",
  "Other / Not Sure Yet",
];

const BUDGET_OPTIONS = [
  "Flexible / Let's Discuss",
  "Under ₦200,000",
  "₦200,000 – ₦500,000",
  "₦500,000 – ₦1,000,000",
  "₦1,000,000 – ₦2,500,000",
  "₦2,500,000+",
];

interface FormErrors {
  fullName?: string;
  businessName?: string;
  service?: string;
  details?: string;
}

export function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [service, setService] = useState(SERVICES_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const isConfigured = isWhatsAppConfigured();
  const directChatUrl = getWhatsAppUrl(PREFILLED_MESSAGES.general).url;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long.";
    }

    if (!businessName.trim()) {
      newErrors.businessName = "Please provide your business or brand name.";
    }

    if (!service) {
      newErrors.service = "Please select the service required.";
    }

    if (!details.trim()) {
      newErrors.details = "Please describe what you want to achieve.";
    } else if (details.trim().length < 10) {
      newErrors.details = "Please share a little more detail (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const message = buildContactFormMessage({
      fullName,
      businessName,
      service,
      budget,
      details,
    });

    if (!isConfigured) {
      setSubmittedMessage(message);
      alert(
        `WhatsApp Setup Notice:\n\nYour message has been prepared, but NEXT_PUBLIC_WHATSAPP_NUMBER is currently set to placeholder (${WHATSAPP_CONFIG.rawNumber}).\nPlease set your real WhatsApp business number in .env.local to enable direct instant delivery.`
      );
      return;
    }

    // Open WhatsApp in new tab for the user to review and send
    const { url } = getWhatsAppUrl(message);
    setSubmittedMessage(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDirectChatClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        `WhatsApp Notice:\n\nWhatsApp number is set to placeholder (${WHATSAPP_CONFIG.rawNumber}).\nPlease configure NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local.`
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <span>Direct WhatsApp Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Let&apos;s Build Something Great.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a website project or an advertising idea in mind? Tell us what you want to achieve, and let&apos;s discuss the next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct WhatsApp Connection & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Direct Founder Chat</h3>
                  <p className="text-xs text-slate-500">Fast response via WhatsApp</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Prefer to chat right now without filling out a full brief? You can jump straight into a WhatsApp conversation with Fridtrix Technology.
              </p>

              <a
                href={directChatUrl}
                onClick={handleDirectChatClick}
                target={isConfigured ? "_blank" : undefined}
                rel={isConfigured ? "noopener noreferrer" : undefined}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-100" />
                <span>Chat With Us on WhatsApp</span>
              </a>

              {/* What to Expect List */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  What to expect when you contact us:
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckIcon className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Prompt review of your requirements and business context</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckIcon className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Realistic timeline and clear, transparent scope breakdown</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckIcon className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>No automated bot dead-ends; speak directly with the team</span>
                </div>
              </div>
            </div>

            {/* Privacy & Transparency Note */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 space-y-1">
              <span className="font-bold">Transparent Delivery:</span>
              <p>
                Submitting this form prepares a formatted brief and launches WhatsApp. You retain full control to review, edit, and send the message directly from your phone or WhatsApp Web.
              </p>
            </div>
          </div>

          {/* Right Column: Project Brief Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Project Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Complete the details below to generate a comprehensive project message for WhatsApp.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Tunde Balogun"
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white transition-all ${
                    errors.fullName
                      ? "border-red-400 focus:ring-2 focus:ring-red-500"
                      : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Business / Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Apex Logistics Nigeria"
                  aria-required="true"
                  aria-invalid={!!errors.businessName}
                  aria-describedby={errors.businessName ? "businessName-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white transition-all ${
                    errors.businessName
                      ? "border-red-400 focus:ring-2 focus:ring-red-500"
                      : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                {errors.businessName && (
                  <p id="businessName-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.businessName}
                  </p>
                )}
              </div>

              {/* Service Required */}
              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  {SERVICES_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Approximate Budget in NGN */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Approximate Budget (NGN)
                  </label>
                  <span className="text-[11px] text-slate-500 font-normal">Optional guide</span>
                </div>
                <select
                  id="budget"
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  {BUDGET_OPTIONS.map((band) => (
                    <option key={band} value={band}>
                      {band}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-slate-500">Min 10 characters</span>
                </div>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Share a brief overview of your business, what you want to achieve, any reference links, or target completion dates..."
                  aria-required="true"
                  aria-invalid={!!errors.details}
                  aria-describedby={errors.details ? "details-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white transition-all resize-y ${
                    errors.details
                      ? "border-red-400 focus:ring-2 focus:ring-red-500"
                      : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  }`}
                />
                {errors.details && (
                  <p id="details-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.details}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-600/25"
                >
                  <WhatsAppIcon className="w-5 h-5 text-emerald-300" />
                  <span>Review &amp; Send Enquiry on WhatsApp</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2.5">
                  Clicking will open WhatsApp with your pre-formatted brief ready to send.
                </p>
              </div>

              {/* Status feedback block */}
              {submittedMessage && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1 animate-in fade-in">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                    <CheckIcon className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Brief Prepared</span>
                  </div>
                  <p>
                    Your enquiry details have been composed. If WhatsApp did not open automatically, please click below to send:
                  </p>
                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl(submittedMessage).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-emerald-700 underline hover:text-emerald-800"
                    >
                      <span>Open WhatsApp Now</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
