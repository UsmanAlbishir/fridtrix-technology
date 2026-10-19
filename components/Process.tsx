import React from "react";
import { ArrowRightIcon } from "@/components/Icons";

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "DISCOVERY",
    title: "Discovery",
    description: "Tell us about your business and your goals.",
    detail: "We discuss your target audience, branding preferences, and what key actions you want your customers to take.",
  },
  {
    step: "02",
    phase: "PLANNING",
    title: "Planning",
    description: "We agree on the project scope, deliverables, timeline, and price.",
    detail: "Clear documentation of what will be delivered, milestone timelines, and a transparent project quote before work starts.",
  },
  {
    step: "03",
    phase: "CREATION",
    title: "Creation",
    description: "We develop your website or produce your video advertising content.",
    detail: "Focused development with high-fidelity components, mobile responsiveness, and compelling AI-assisted video production.",
  },
  {
    step: "04",
    phase: "REVIEW & DELIVERY",
    title: "Review and Delivery",
    description: "We review the agreed deliverables, make the included revisions, and hand over the completed work.",
    detail: "You inspect the project, we implement your feedback, and provide full handover with WhatsApp support.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700">
            <span>Workflow &amp; Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A straightforward, transparent 4-step process designed to keep your project on schedule and aligned with your expectations.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Step Number & Phase Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black text-blue-600">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    {item.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-800 font-medium text-sm mb-3">
                  &ldquo;{item.description}&rdquo;
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Progress Connector (Visible on desktop between steps) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shadow-xs">
                    <ArrowRightIcon className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
