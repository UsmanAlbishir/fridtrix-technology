export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaMessageType: "website" | "video" | "package";
  isFeatured?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  type: "website" | "video" | "package";
  previewType: "browser" | "mobile_video" | "dual_device";
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}
