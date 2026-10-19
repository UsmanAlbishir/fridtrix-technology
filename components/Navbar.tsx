"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppUrl, PREFILLED_MESSAGES, isWhatsAppConfigured, WHATSAPP_CONFIG } from "@/config/whatsapp";
import { WhatsAppIcon, MenuIcon, XIcon, ArrowRightIcon } from "@/components/Icons";

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isConfigured = isWhatsAppConfigured();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const whatsappResult = getWhatsAppUrl(PREFILLED_MESSAGES.general);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        `WhatsApp Number Notice:\n\nThe business number is currently set to placeholder (${WHATSAPP_CONFIG.rawNumber}).\nPlease set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local with your real international digits-only number (e.g. 2348012345678).`
      );
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#top"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="Fridtrix Technology - Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-xl text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                FRIDTRIX
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-blue-600/90 mt-0.5">
                Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action: WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappResult.url}
              onClick={handleWhatsAppClick}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all shadow-sm hover:shadow-emerald-600/25"
              aria-label="Discuss project on WhatsApp with Fridtrix Technology"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappResult.url}
              onClick={handleWhatsAppClick}
              target={isConfigured ? "_blank" : undefined}
              rel={isConfigured ? "noopener noreferrer" : undefined}
              className="p-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              aria-label="WhatsApp quick contact"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-slate-950/40 backdrop-blur-sm z-50 flex flex-col justify-start animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-xl px-6 pt-4 pb-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 pb-1 border-b border-slate-100">
              Menu Navigation
            </div>
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-base font-medium text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRightIcon className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href={whatsappResult.url}
                onClick={(e) => {
                  handleWhatsAppClick(e);
                  setIsOpen(false);
                }}
                target={isConfigured ? "_blank" : undefined}
                rel={isConfigured ? "noopener noreferrer" : undefined}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Discuss Project on WhatsApp</span>
              </a>
              {!isConfigured && (
                <p className="text-[11px] text-amber-700 text-center mt-2">
                  (WhatsApp currently in demo mode — configure in .env.local)
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
