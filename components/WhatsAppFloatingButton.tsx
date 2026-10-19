"use client";

import React, { useState, useEffect } from "react";
import { getWhatsAppUrl, PREFILLED_MESSAGES, isWhatsAppConfigured, WHATSAPP_CONFIG } from "@/config/whatsapp";
import { WhatsAppIcon } from "@/components/Icons";

export function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const isConfigured = isWhatsAppConfigured();
  const whatsappUrl = getWhatsAppUrl(PREFILLED_MESSAGES.general).url;

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        `WhatsApp Notice:\n\nWhatsApp number is set to placeholder (${WHATSAPP_CONFIG.rawNumber}).\nPlease configure NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local.`
      );
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="hidden sm:flex items-center bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-lg text-xs font-semibold text-slate-800 pointer-events-none">
        <span>Chat with Fridtrix</span>
      </div>

      <a
        href={whatsappUrl}
        onClick={handleClick}
        target={isConfigured ? "_blank" : undefined}
        rel={isConfigured ? "noopener noreferrer" : undefined}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 active:scale-95 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 group"
        aria-label="Chat with Fridtrix Technology on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        <span className="sr-only">Open WhatsApp chat with Fridtrix Technology</span>
      </a>
    </aside>
  );
}
