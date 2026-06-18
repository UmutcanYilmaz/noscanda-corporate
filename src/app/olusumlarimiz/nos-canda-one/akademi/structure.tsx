'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './sections/header';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { WhyUs } from './sections/why-us';
import { Offerings } from './sections/offerings';
import { TargetAudience } from './sections/target-audience';
import { SupportProgram } from './sections/support-program';
import { Benefits } from './sections/benefits';
import { JourneyTimeline } from './sections/journey-timeline';
import { CareerImpact } from './sections/career-impact';
import { FAQ } from './sections/faq';

import { ContactCTA } from './sections/contact-cta';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Nos Canda One | Akademi Landing Page Structure Component.
 * Orchestrates all 12 content sections and header/footer elements.
 * Styled with a premium boxed card container for Header and Hero.
 */
export function Structure() {
  useEffect(() => {
    // Refresh ScrollTrigger calculations after mount / layout paint
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col font-poppins selection:bg-[#BA5225]/20 selection:text-[#BA5225]">
      {/* Boxed Hero and Sub-Nav block on premium soft light warm gradient */}
      <div className="bg-gradient-to-b from-[#fdf5f0] to-[var(--bg-primary)] pt-[92px] pb-4 px-4 md:px-6 lg:px-8 w-full animate-fade-in">
        <div className="max-w-[1500px] mx-auto bg-white border border-neutral-200/70 rounded-[28px] overflow-hidden shadow-xl relative">
          <Header />
          <Hero />
        </div>
      </div>

      {/* Content Sections */}
      <main className="flex-1">
        <About />
        <WhyUs />
        <Offerings />
        <TargetAudience />
        <SupportProgram />
        <Benefits />
        <JourneyTimeline />
        <CareerImpact />

        <FAQ />
        <ContactCTA />
      </main>
    </div>
  );
}
