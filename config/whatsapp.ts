/**
 * WhatsApp Configuration & Helper for Fridtrix Technology
 *
 * WhatsApp is the primary conversion channel for Nigerian and international clients.
 * Configure NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local with international digits only (e.g. 2348012345678).
 */

export const WHATSAPP_CONFIG = {
  // Read from environment variable, falling back to Fridtrix Technology's official number
  rawNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2349061471670",
  defaultPlaceholder: "234XXXXXXXXXX",
  brandName: "Fridtrix Technology",
  tagline: "Innovative Solutions. Greater Impact.",
};

/**
 * Checks if a given phone number is a valid, configured international WhatsApp number.
 * Valid numbers must:
 * 1. Consist only of digits.
 * 2. Not contain placeholder characters like 'X' or be empty.
 * 3. Have a plausible international length (typically 10 to 15 digits).
 */
export function isWhatsAppConfigured(phone: string = WHATSAPP_CONFIG.rawNumber): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/\s+/g, "").trim();
  if (cleaned === WHATSAPP_CONFIG.defaultPlaceholder) return false;
  if (/X/i.test(cleaned)) return false;
  // Plausible international E.164 without leading plus: 10 to 15 digits
  return /^\d{10,15}$/.test(cleaned);
}

/**
 * Sanitizes phone number to digits only, stripping any accidental '+', '-', '(', ')', or spaces.
 */
export function sanitizeWhatsAppNumber(phone: string = WHATSAPP_CONFIG.rawNumber): string {
  return phone.replace(/[^\d]/g, "");
}

/**
 * Standard pre-formatted enquiry messages requested by the business specification
 */
export const PREFILLED_MESSAGES = {
  general: "Hello Fridtrix Technology, I would like to discuss a project for my business.",
  website: "Hello Fridtrix Technology, I would like a quote for a business website.",
  video: "Hello Fridtrix Technology, I am interested in AI UGC video advertising.",
  package: "Hello Fridtrix Technology, I would like to discuss a website and advertising package.",
} as const;

export type MessageType = keyof typeof PREFILLED_MESSAGES;

export interface ContactFormData {
  fullName: string;
  businessName: string;
  service: string;
  budget?: string;
  details: string;
}

/**
 * Formats user form input into a structured, readable WhatsApp message
 */
export function buildContactFormMessage(data: ContactFormData): string {
  const parts = [
    `Hello Fridtrix Technology,`,
    ``,
    `I would like to submit a project enquiry from your website:`,
    `• Name: ${data.fullName.trim()}`,
    `• Business / Brand: ${data.businessName.trim()}`,
    `• Service Requested: ${data.service}`,
    data.budget ? `• Approximate Budget: ${data.budget}` : null,
    ``,
    `Project Details:`,
    data.details.trim(),
  ].filter((line) => line !== null);

  return parts.join("\n");
}

export interface WhatsAppUrlResult {
  url: string;
  isConfigured: boolean;
  rawNumber: string;
  sanitizedNumber: string;
  encodedMessage: string;
}

/**
 * Constructs a secure, validated WhatsApp wa.me URL.
 * If unconfigured, the returned object alerts the UI to handle gracefully.
 */
export function getWhatsAppUrl(
  message: string,
  overrideNumber?: string
): WhatsAppUrlResult {
  const targetNumber = overrideNumber || WHATSAPP_CONFIG.rawNumber;
  const configured = isWhatsAppConfigured(targetNumber);
  const sanitized = sanitizeWhatsAppNumber(targetNumber);
  const encoded = encodeURIComponent(message);

  const url = configured
    ? `https://wa.me/${sanitized}?text=${encoded}`
    : `#whatsapp-not-configured`;

  return {
    url,
    isConfigured: configured,
    rawNumber: targetNumber,
    sanitizedNumber: sanitized,
    encodedMessage: encoded,
  };
}
