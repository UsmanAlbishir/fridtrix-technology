import React from "react";
import { SparklesIcon, CodeIcon, VideoIcon, LayersIcon, PlayIcon } from "@/components/Icons";

export function Portfolio() {

  return (
    <section id="work" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/50">
            <span>Demonstration Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore selected website demonstrations and AI advertising concepts created by Fridtrix Technology.
          </p>
          <div className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-800">
            Notice: All items below are original demonstration concepts designed to showcase technical and creative capability.
          </div>
        </div>

        {/* Project Showcase 1: Business Website Concept */}
        <div className="mb-16 bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Demo Pane */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-slate-900 text-white">
              {/* Browser Shell */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-slate-400 font-mono text-[11px] ml-2">demo-site.fridtrix.tech</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-mono text-[10px]">
                    DESKTOP & MOBILE RESPONSIVE
                  </span>
                </div>

                {/* Simulated Web Page Content */}
                <div className="p-5 sm:p-7 space-y-5 bg-gradient-to-b from-slate-950 to-slate-900">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
                        V
                      </div>
                      <span className="font-extrabold text-white text-base tracking-tight">Vanguard Capital</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-slate-300">
                      <span>Advisory</span>
                      <span>Portfolio</span>
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-medium">Contact</span>
                    </div>
                  </div>

                  <div className="space-y-3 py-2">
                    <div className="inline-block px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-mono">
                      Corporate Concept
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Empowering Next-Generation Nigerian Enterprises.
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
                      Strategic business growth solutions, cross-border corporate structure, and tailored digital innovation.
                    </p>
                  </div>

                  {/* Interactive-looking mock service cards */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="text-blue-400 font-semibold mb-1">Corporate Advisory</div>
                      <div className="text-slate-400 text-[11px]">Structured strategic growth</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="text-emerald-400 font-semibold mb-1">WhatsApp Fast Track</div>
                      <div className="text-slate-400 text-[11px]">Instant client consultations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Metadata */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                <CodeIcon className="w-3.5 h-3.5" />
                <span>Concept Project 01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Business Website Concept
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A responsive website concept demonstrating business presentation, service information, and clear contact options.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <div className="font-semibold text-slate-900 mb-1">Key Demonstration Highlights:</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Fluid multi-device responsiveness (mobile, tablet, desktop)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>High-conversion information hierarchy and call-to-actions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Direct WhatsApp inquiry triggers for Nigerian audience</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Request a similar website concept</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Project Showcase 2: AI Commercial Concept */}
        <div className="mb-16 bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Demo Pane: Vertical Mobile Video Reel */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-slate-950 text-white flex items-center justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-slate-900 border-2 border-violet-500/40 p-3 shadow-2xl">
                {/* 9:16 Ratio Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[9/15] bg-gradient-to-b from-slate-950 via-indigo-950 to-violet-950 p-5 flex flex-col justify-between border border-violet-500/20">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-1 rounded bg-violet-600 text-white font-bold text-[10px] tracking-wider uppercase flex items-center gap-1">
                      <SparklesIcon className="w-3 h-3" />
                      AI UGC Video
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">0:30 Reel Ad</span>
                  </div>

                  {/* Center Media Visual */}
                  <div className="text-center my-auto space-y-3">
                    <div className="w-16 h-16 rounded-full bg-violet-600/30 border-2 border-violet-400 mx-auto flex items-center justify-center text-white shadow-xl backdrop-blur-md">
                      <PlayIcon className="w-7 h-7 ml-1 text-white" />
                    </div>
                    <div className="text-sm font-extrabold text-white tracking-wide">
                      &ldquo;The Secret to 3X Product Engagement&rdquo;
                    </div>
                    <div className="text-[11px] text-violet-200/80 px-4">
                      Simulated AI avatar spokesperson, natural Nigerian inflection, tailored hook &amp; CTA.
                    </div>
                  </div>

                  {/* Bottom Storyboard Breakdown */}
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-[11px] space-y-1.5">
                    <div className="flex justify-between text-slate-400 text-[10px]">
                      <span>HOOK: 0:00 - 0:05</span>
                      <span className="text-emerald-400">High Retention</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 rounded-full w-2/3" />
                    </div>
                    <div className="text-slate-300 font-mono text-[10px] truncate">
                      Script: &ldquo;Struggling to get customers to notice your product?&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Metadata */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold uppercase tracking-wider">
                <VideoIcon className="w-3.5 h-3.5" />
                <span>Concept Project 02</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                AI Commercial Concept
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A short-form promotional video concept demonstrating creative direction, product visuals, scripting, and voice-over.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <div className="font-semibold text-slate-900 mb-1">Key Demonstration Highlights:</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                  <span>Story-driven scripting optimized for Instagram Reels and TikTok</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                  <span>AI-assisted spokesperson and relatable UGC-style presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                  <span>Clear verbal and on-screen call-to-action directing to WhatsApp</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 hover:underline"
                >
                  <span>Discuss an AI video advertisement</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Project Showcase 3: Integrated Digital Campaign Concept */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Demo Pane: Dual Device Integration */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-slate-900 text-white">
              <div className="relative p-4 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                  <span className="font-mono text-emerald-400">FULL-FUNNEL DEMO</span>
                  <span className="text-slate-400">Social Video Ad &rarr; Conversion Website</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  {/* Left: Mobile Social Ad Feed */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-200">1. Social Video Ad</span>
                      <span className="text-violet-400 font-mono">Top of Funnel</span>
                    </div>
                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-violet-900 to-indigo-800 flex items-center justify-center text-white text-xs font-semibold p-2 text-center">
                      AI UGC Video Commercial: Attention Grabber
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Viewers click &ldquo;Learn More&rdquo; &rarr;
                    </div>
                  </div>

                  {/* Right: Landing Page Destination */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-200">2. Business Website</span>
                      <span className="text-blue-400 font-mono">Conversion Page</span>
                    </div>
                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-tr from-blue-950 to-slate-900 border border-blue-500/30 flex flex-col justify-center items-center text-center p-3">
                      <div className="text-xs font-bold text-white mb-1">Matching Brand Look</div>
                      <div className="px-2.5 py-1 rounded bg-emerald-600 text-white text-[10px] font-semibold">
                        Instant WhatsApp CTA
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium">
                      Seamless enquiry captured in WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Metadata */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                <LayersIcon className="w-3.5 h-3.5" />
                <span>Concept Project 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Integrated Digital Campaign Concept
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A demonstration combining a business website with promotional video content.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <div className="font-semibold text-slate-900 mb-1">Key Demonstration Highlights:</div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Synchronized aesthetic between video ads and web storefront</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Higher conversion rate through cohesive messaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Direct lead generation pipeline tailored for Nigerian businesses</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  <span>Build an integrated package for your brand</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
