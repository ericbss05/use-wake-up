import Benefits from "@/components/landing/benefits";
import Cta from "@/components/landing/cta";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Future from "@/components/landing/future";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import HowItWork from "@/components/landing/how-it-work";
import React from "react";


export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        {/* Header */}
        <Header />

        {/* Contenu principal de la landing page */}
        <main className="items-center justify-center px-4 sm:px-6 lg:px-8">
          <Hero />
          <section id="benefits"><Benefits /></section>
          <section id="how-it-work"><HowItWork /></section>
          <section id="future"><Future /></section>
          <section id="faq"><Faq /></section>
          <Cta />
          <Footer />
        </main>

      </div>
    </>
  );
}
