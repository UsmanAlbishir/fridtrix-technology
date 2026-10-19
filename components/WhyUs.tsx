import React from "react";
import { SlidersIcon, SparklesIcon, SmartphoneIcon, MessageSquareIcon, ShieldCheckIcon } from "@/components/Icons";

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Practical Digital Solutions",
    description: "Services designed around your business needs.",
    icon: SlidersIcon,
    accent: "text-blue-600 bg-blue-50 border-blue-200/60",
  },
  {
    number: "02",
    title: "Creative Execution",
    description: "Modern website experiences and engaging promotional content.",
    icon: SparklesIcon,
    accent: "text-violet-600 bg-violet-50 border-violet-200/60",
  },
  {
    number: "03",
    title: "Mobile-First Thinking",
    description: "Websites designed to work across screen sizes.",
    icon: SmartphoneIcon,
    accent: "text-indigo-600 bg-indigo-50 border-indigo-200/60",
  },
  {
    number: "04",
    title: "Direct Communication",
    description: "Discuss your requirements directly with the person working on your project.",
    icon: MessageSquareIcon,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
  },
  {
    number: "05",
    title: "Tailored Proposals",
    description: "Clear project scope and pricing based on your requirements.",
    icon: ShieldCheckIcon,
    accent: "text-cyan-600 bg-cyan-50 border-cyan-200/60",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden bg-grid-pattern-dark">
      {/* Decorative gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-900/60 text-blue-300 border border-blue-700/50">
            <span>Our Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Fridtrix Technology?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We focus on technical competence, creative execution, and honest collaboration to help your business build a credible digital footprint.
          </p>
        </div>

        {/* 5 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((diff, index) => {
            const Icon = diff.icon;

            return (
              <div
                key={diff.number}
                className={`p-6 sm:p-7 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${diff.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {diff.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                    {diff.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/50 text-[11px] font-medium text-slate-400">
                  Reliable • Structured • Practical
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
