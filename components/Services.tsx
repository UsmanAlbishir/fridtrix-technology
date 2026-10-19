"use client";

import React from "react";
import { getWhatsAppUrl, PREFILLED_MESSAGES, isWhatsAppConfigured, WHATSAPP_CONFIG } from "@/config/whatsapp";
import { WhatsAppIcon, CodeIcon, VideoIcon, LayersIcon, CheckIcon, SparklesIcon } from "@/components/Icons";

interface ServiceData {
  id: string;
  badge: string;
  title: string;
  description: string;
  additionalCopy?: string;
  features: string[];
  ctaText: string;
  prefilledMessage: string;
  icon: "code" | "video" | "package";
  isFeatured?: boolean;
}

const SERVICES: ServiceData[] = [
  {
    id: "web-dev",
    badge: "Digital Foundation",
    title: "Website Design & Development",
    description:
      "We create modern, responsive websites that showcase your business, communicate your value, and make it easier for customers to discover your services.",
    features: [
      "Business and company websites",
      "Product and campaign landing pages",
      "Responsive mobile-friendly layouts",
      "Contact forms and WhatsApp integration",
      "Website improvements and redesigns",
    ],
    ctaText: "Get a Website Quote",
    prefilledMessage: PREFILLED_MESSAGES.website,
    icon: "code",
    isFeatured: false,
  },
  {
    id: "ai-video",
    badge: "Creative Content",
    title: "AI UGC Video Advertising",
    description:
      "We produce AI-assisted promotional videos designed to help brands present their products, communicate their message, and create engaging social media content.",
    features: [
      "Short-form promotional videos",
      "AI-generated spokesperson and UGC-style concepts",
      "Product-focused video advertisements",
      "Commercial concepts, scripts, and voice-overs",
      "Social media advertising creatives",
    ],
    ctaText: "Discuss Your Video Ad",
    prefilledMessage: PREFILLED_MESSAGES.video,
    icon: "video",
    isFeatured: false,
  },
  {
    id: "packages",
    badge: "Comprehensive Solution",
    title: "Website + Advertising Packages",
    description:
      "Bring your online presence and promotional content together with a tailored package.",
    additionalCopy:
      "We combine a professional business website with promotional video content to help your brand present a consistent message across your website and social media channels.",
    features: [
      "Integrated website and video launch strategy",
      "High-converting business website layout",
      "Promotional video creative for social channels",
      "Direct WhatsApp lead capture integration",
      "Consistent brand voice across web and media",
    ],
    ctaText: "Build My Business Package",
    prefilledMessage: PREFILLED_MESSAGES.package,
    icon: "package",
    isFeatured: true,
  },
];

export function Services() {
  const isConfigured = isWhatsAppConfigured();

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        `WhatsApp Notice:\n\nWhatsApp number is currently set to placeholder (${WHATSAPP_CONFIG.rawNumber}).\nPlease set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local to activate direct quote requests.`
      );
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100/70 text-blue-700">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Digital Solutions Built Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From your first professional website to creative advertising content, we help bring your business ideas to life.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service) => {
            const wa = getWhatsAppUrl(service.prefilledMessage);

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-200 ${
                  service.isFeatured
                    ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-600/10 lg:-translate-y-2"
                    : "bg-white border border-slate-200/80 shadow-md hover:shadow-lg"
                } p-6 sm:p-8`}
              >
                {/* Featured Badge */}
                {service.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span>Recommended Combo</span>
                  </div>
                )}

                <div>
                  {/* Service Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.isFeatured
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                          : service.icon === "video"
                          ? "bg-violet-100 text-violet-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {service.icon === "code" && <CodeIcon className="w-6 h-6" />}
                      {service.icon === "video" && <VideoIcon className="w-6 h-6" />}
                      {service.icon === "package" && <LayersIcon className="w-6 h-6" />}
                    </div>

                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Additional Copy for packages */}
                  {service.additionalCopy && (
                    <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-100/80 text-xs text-blue-900 leading-relaxed mb-5">
                      {service.additionalCopy}
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2 mb-8 border-t border-slate-100">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Included Services:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckIcon
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            service.isFeatured ? "text-blue-600" : "text-emerald-600"
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: WhatsApp Direct Link */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={wa.url}
                    onClick={handleWhatsAppClick}
                    target={isConfigured ? "_blank" : undefined}
                    rel={isConfigured ? "noopener noreferrer" : undefined}
                    className={`w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98] ${
                      service.isFeatured
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    aria-label={`${service.ctaText} via WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>{service.ctaText}</span>
                  </a>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Direct conversation • Clear, tailored quote
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500">
            No hidden fees or generic pricing. Every quote is customized based on your business requirements, deliverables, and specific scope.
          </p>
        </div>

      </div>
    </section>
  );
}
