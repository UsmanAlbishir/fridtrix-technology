import React from "react";
import { WhatsAppDevBanner } from "@/components/WhatsAppDevBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Dev notification banner for unconfigured WhatsApp number */}
      <WhatsAppDevBanner />

      {/* Main navigation header */}
      <Navbar />

      {/* Main content landmark */}
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <WhyUs />
        <Process />
        <ContactSection />
      </main>

      {/* Agency footer */}
      <Footer />

      {/* Persistent floating conversion button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
