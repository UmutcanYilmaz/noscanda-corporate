'use client';

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

/**
 * Nos Canda One | Akademi Landing Page Structure Component.
 * Orchestrates all 11 content sections and header/footer elements.
 */
export function Structure() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen flex flex-col font-poppins selection:bg-[#BA5225]/20 selection:text-[#BA5225]">
      {/* Local Sub-Navigation Header */}
      <Header />

      {/* Content Sections */}
      <main className="flex-1">
        <Hero />
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
