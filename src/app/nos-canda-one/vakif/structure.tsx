'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './sections/hero';
import { Header } from './sections/header';
import { About } from './sections/about';
import { BirKutuSevgi } from './sections/bir-kutu-sevgi';
import { SupportAreas } from './sections/support-areas';
import { EducationSupport } from './sections/education-support';
import { CareerSupport } from './sections/career-support';
import { PsychologySupport } from './sections/psychology-support';
import { SocialSupport } from './sections/social-support';
import { SustainabilitySupport } from './sections/sustainability-support';
import { SocialUnity } from './sections/social-unity';
import { Transparency } from './sections/transparency';
import { SupportCTA } from './sections/support-cta';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Nos Canda One — Foundation Landing Page Structure
 * 
 * Why: Assembles all sub-sections into a cohesive scroll path.
 * Wraps the sub-header and the hero section in a single boxed card container 
 * positioned over a deep navy background to match the reference screenshot.
 * Triggers ScrollTrigger recalculations after layout paint to ensure accurate 
 * scroll indicators and anchor active states.
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
    <>
      {/* Boxed Hero and Sub-Nav block on premium soft light gradient */}
      <div className="bg-gradient-to-b from-[#e8effa] to-[var(--bg-primary)] pt-[92px] pb-4 px-4 md:px-6 lg:px-8 w-full animate-fade-in">
        <div className="max-w-[1500px] mx-auto bg-white border border-neutral-200/70 rounded-[28px] overflow-hidden shadow-xl relative">
          <Header />
          <Hero />
        </div>
      </div>

      {/* Content sections */}
      <About />
      <BirKutuSevgi />
      <SupportAreas />
      <EducationSupport />
      <CareerSupport />
      <PsychologySupport />
      <SocialSupport />
      <SustainabilitySupport />
      <SocialUnity />
      <Transparency />
      <SupportCTA />
    </>
  );
}
