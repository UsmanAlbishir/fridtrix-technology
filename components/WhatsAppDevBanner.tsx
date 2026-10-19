"use client";

import React, { useState } from "react";
import { isWhatsAppConfigured, WHATSAPP_CONFIG } from "@/config/whatsapp";
import { AlertTriangleIcon, XIcon } from "@/components/Icons";

export function WhatsAppDevBanner() {
  const [dismissed, setDismissed] = useState(false);
  const configured = isWhatsAppConfigured();

  if (configured || dismissed) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-amber-500 text-slate-950 text-xs sm:text-sm px-4 py-2.5 font-medium border-b border-amber-600 flex items-center justify-between shadow-sm relative z-50"
    >
      <div className="flex items-center gap-2 max-w-6xl mx-auto flex-1">
        <AlertTriangleIcon className="w-4 h-4 shrink-0 text-slate-950" />
        <span>
          <strong className="font-semibold">Setup Notice:</strong> WhatsApp number is currently set to the default placeholder (
          <code className="bg-amber-400 px-1.5 py-0.5 rounded font-mono text-[11px]">
            {WHATSAPP_CONFIG.rawNumber}
          </code>
          ). Create a <code className="bg-amber-400 px-1 py-0.5 rounded font-mono text-[11px]">.env.local</code> file with your real number as{" "}
          <code className="bg-amber-400 px-1 py-0.5 rounded font-mono text-[11px]">
            NEXT_PUBLIC_WHATSAPP_NUMBER=234XXXXXXXXXX
          </code>{" "}
          (international digits only) to enable direct live messaging.
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="ml-3 p-1 rounded hover:bg-amber-600/30 transition-colors shrink-0"
        aria-label="Dismiss setup notice"
      >
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
