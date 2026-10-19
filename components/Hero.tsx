"use client";

import React, { useState } from "react";
import { getWhatsAppUrl, PREFILLED_MESSAGES, isWhatsAppConfigured, WHATSAPP_CONFIG } from "@/config/whatsapp";
import { WhatsAppIcon, ArrowRightIcon, CodeIcon, VideoIcon, SparklesIcon, CheckIcon, PlayIcon } from "@/components/Icons";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"web" | "video">("web");
  const isConfigured = isWhatsAppConfigured();
  const whatsappResult = getWhatsAppUrl(PREFILLED_MESSAGES.general);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        `WhatsApp Setup Notice:\n\nWhatsApp number is set to placeholder (${WHATSAPP_CONFIG.rawNumber}).\nPlease add NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local to activate direct messaging.`
      );
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32 bg-white bg-grid-pattern">
      {/* Background ambient lighting effects */}
      <div
        className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 -z-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & Conversion */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Innovative Solutions. Greater Impact.</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Turn Your Ideas Into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Digital Experiences.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We help businesses establish a stronger online presence through modern website development and creative AI-powered video advertising.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsappResult.url}
                onClick={handleWhatsAppClick}
                target={isConfigured ? "_blank" : undefined}
                rel={isConfigured ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-lg shadow-emerald-600/25 group"
                aria-label="Discuss Your Project on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-emerald-100 group-hover:scale-110 transition-transform" />
                <span>Discuss Your Project on WhatsApp</span>
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all active:scale-[0.98]"
              >
                <span>Explore Our Work</span>
                <ArrowRightIcon className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Credibility / Scope Highlights */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <div className="p-1 rounded-md bg-blue-50 text-blue-600">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span>Modern Websites</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <div className="p-1 rounded-md bg-violet-50 text-violet-600">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span>AI UGC Video Ads</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                <div className="p-1 rounded-md bg-emerald-50 text-emerald-600">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span>Direct Collaboration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Asymmetric Agency Showcase Composition */}
          <div className="lg:col-span-5 relative">
            {/* Visual Controls / Service Area Switcher */}
            <div className="mb-3 flex items-center justify-between bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("web")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg transition-all ${
                  activeTab === "web"
                    ? "bg-white text-blue-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <CodeIcon className="w-3.5 h-3.5" />
                <span>Web Development</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("video")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg transition-all ${
                  activeTab === "video"
                    ? "bg-white text-violet-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <VideoIcon className="w-3.5 h-3.5" />
                <span>AI Video Creative</span>
              </button>
            </div>

            {/* Layered Showcase Cards */}
            <div className="relative">
              {/* Primary Card: Desktop Browser Simulation */}
              <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-3 sm:p-4 text-white overflow-hidden transition-all duration-300">
                {/* Browser Chrome Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-slate-800/80 px-3 py-0.5 rounded-md font-mono text-[10px] text-slate-300 border border-slate-700/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    fridtrix.tech/solutions
                  </div>
                  <span className="text-[10px] text-blue-400 font-mono">LIVE PREVIEW</span>
                </div>

                {/* Simulated Web Viewport Body */}
                <div className="bg-slate-950 rounded-xl p-4 sm:p-5 border border-slate-800/80 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                        F
                      </div>
                      <span className="font-bold text-sm tracking-tight text-white">Apex Retail</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                      +140% Conversion
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-slate-800 rounded-md" />
                    <div className="h-3 w-full bg-slate-800/60 rounded-md" />
                    <div className="h-3 w-5/6 bg-slate-800/40 rounded-md" />
                  </div>

                  {/* Feature preview pill grid */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                      <div className="text-slate-400 text-[10px]">Mobile Responsive</div>
                      <div className="font-semibold text-slate-200 mt-0.5">Ultra Fast Loading</div>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5">
                      <div className="text-slate-400 text-[10px]">WhatsApp Ready</div>
                      <div className="font-semibold text-emerald-400 mt-0.5">1-Click Direct Chat</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Vertical 9:16 Video Creative Preview Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 w-44 sm:w-52 bg-slate-950 rounded-2xl shadow-2xl border-2 border-violet-500/50 p-2.5 text-white backdrop-blur-xl animate-in zoom-in-95 duration-300">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-violet-950 p-3 aspect-[9/14] flex flex-col justify-between border border-violet-500/30">
                  {/* Video Top Bar */}
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-violet-600/90 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1">
                      <SparklesIcon className="w-2.5 h-2.5" />
                      AI UGC
                    </span>
                    <span className="text-slate-300 font-mono text-[9px]">9:16 Reel</span>
                  </div>

                  {/* Play Simulation Icon */}
                  <div className="my-auto mx-auto w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg">
                    <PlayIcon className="w-4 h-4 ml-0.5 text-white" />
                  </div>

                  {/* Video Bottom Info */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-100 leading-tight">
                      Brand Commercial
                    </div>
                    <p className="text-[9px] text-slate-300 line-clamp-2">
                      &ldquo;AI-assisted scripting, realistic avatar &amp; conversion voice-over.&rdquo;
                    </p>
                    {/* Simulated Audio Wave */}
                    <div className="flex items-end gap-1 h-3 pt-1">
                      <span className="w-1 bg-violet-400 rounded-full h-2 animate-pulse" />
                      <span className="w-1 bg-violet-400 rounded-full h-3" />
                      <span className="w-1 bg-violet-400 rounded-full h-1" />
                      <span className="w-1 bg-violet-400 rounded-full h-2.5 animate-pulse" />
                      <span className="w-1 bg-violet-400 rounded-full h-1.5" />
                      <span className="w-1 bg-violet-400 rounded-full h-3 animate-pulse" />
                      <span className="w-1 bg-violet-400 rounded-full h-2" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
