'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './sections/hero';
import { Header } from './sections/header';
import { About } from './sections/about';
import { BirKutuSevgi } from './sections/bir-kutu-sevgi';
import { SupportAreas } from './sections/support-areas';
import { DevelopmentSupport } from './sections/development-support';
import { SustainabilitySupport } from './sections/sustainability-support';
import { SocialUnity } from './sections/social-unity';
import { Transparency } from './sections/transparency';
import { SupportCTA } from './sections/support-cta';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Nos Canda One — Foundation Landing Page Structure
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
      <Header />
      <Hero />
      <About />
      <BirKutuSevgi />
      <SupportAreas />
      <DevelopmentSupport />
      <SustainabilitySupport />
      <SocialUnity />
      <Transparency />
      <SupportCTA />
    </>
  );
}
