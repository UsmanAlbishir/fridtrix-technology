import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Fridtrix Technology | Website Development & AI Video Advertising",
  description:
    "Fridtrix Technology helps Nigerian businesses build professional websites and create AI-powered promotional video advertising.",
  keywords: [
    "Fridtrix Technology",
    "Website Development Nigeria",
    "AI Video Advertising",
    "AI UGC Commercials",
    "Business Websites Lagos Nigeria",
    "Web Design Agency Nigeria",
    "Social Media Video Ads",
  ],
  authors: [{ name: "Fridtrix Technology" }],
  creator: "Fridtrix Technology",
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "Fridtrix Technology | Website Development & AI Video Advertising",
    description:
      "Fridtrix Technology helps Nigerian businesses build professional websites and create AI-powered promotional video advertising.",
    siteName: "Fridtrix Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fridtrix Technology | Website Development & AI Video Advertising",
    description:
      "Innovative Solutions. Greater Impact. Modern website development and creative AI-powered video advertising.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
