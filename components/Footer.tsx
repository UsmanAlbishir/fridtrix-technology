"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { getWhatsAppUrl, PREFILLED_MESSAGES, isWhatsAppConfigured } from "@/config/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const emptySubscribe = () => () => {};

export function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );
  const isConfigured = isWhatsAppConfigured();
  const whatsappUrl = getWhatsAppUrl(PREFILLED_MESSAGES.general).url;

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <Link href="#top" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                F
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-xl text-white">
                  FRIDTRIX
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-400">
                  Technology
                </span>
              </div>
            </Link>

            <p className="text-base font-medium text-slate-300">
              Innovative Solutions. Greater Impact.
            </p>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              We help businesses establish a stronger online presence through modern website development and creative AI-powered video advertising. Serving Nigerian businesses and international clients.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Get In Touch
            </div>
            <p className="text-xs text-slate-400">
              Direct discussions for new website builds, redesigns, and AI video commercials.
            </p>
            <a
              href={whatsappUrl}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              aria-label="Direct WhatsApp message to Fridtrix Technology"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-100" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year and Copyright */}
        <div className="pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Fridtrix Technology. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Website Development</span>
            <span>&bull;</span>
            <span>AI UGC Video Advertising</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
