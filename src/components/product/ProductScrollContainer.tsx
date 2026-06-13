'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProductSlide } from '@/lib/products';
import { ImmersiveSlide } from './ImmersiveSlide';
import { OlfactoryVisualizer } from './OlfactoryVisualizer';
import { IntensityScale } from './IntensityScale';
import { ConcentrationMatrix } from './ConcentrationMatrix';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  slides: ProductSlide[];
  productLine: string;
}

/**
 * Reusable 7-slide GSAP pinned scroll container.
 * Pins on desktop (>=768px), stacks vertically on mobile.
 * Each slide cross-fades via opacity/scale/y transforms only.
 */
export function ProductScrollContainer({ slides, productLine }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        /* Desktop: pinned cross-fade timeline */
        '(min-width: 768px)': () => {
          const validSlides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
          if (validSlides.length < 2) return;

          // Set initial states: first slide visible, rest hidden
          validSlides.forEach((slide, i) => {
            gsap.set(slide, {
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              opacity: i === 0 ? 1 : 0,
              scale: i === 0 ? 1 : 0.95,
              zIndex: validSlides.length - i,
            });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: `+=${(validSlides.length - 1) * 100}%`,
              pin: true,
              scrub: 1,
            },
          });

          for (let i = 0; i < validSlides.length - 1; i++) {
            tl.to(validSlides[i], { opacity: 0, scale: 0.95, duration: 1 })
              .fromTo(validSlides[i + 1],
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, scale: 1, duration: 1 },
                '<'
              );
          }
        },

        /* Mobile: simple fade-in on scroll, no pin */
        '(max-width: 767px)': () => {
          const validSlides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
          validSlides.forEach((slide) => {
            gsap.set(slide, {
              position: 'relative',
              opacity: 1, scale: 1, zIndex: 'auto',
            });
            gsap.fromTo(slide,
              { opacity: 0, y: 30 },
              {
                opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
                scrollTrigger: {
                  trigger: slide,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slides]);

  const renderSlide = (slide: ProductSlide, index: number) => {
    const ref = (el: HTMLDivElement | null) => { slideRefs.current[index] = el; };

    switch (slide.type) {
      case 'olfactory':
        return <OlfactoryVisualizer key={index} ref={ref} slide={slide} />;
      case 'intensity':
        return <IntensityScale key={index} ref={ref} slide={slide} />;
      case 'comparison':
        return <ConcentrationMatrix key={index} ref={ref} slide={slide} />;
      default:
        return <ImmersiveSlide key={index} ref={ref} slide={slide} />;
    }
  };

  return (
    <div
      ref={containerRef}
      id={`product-scroll-${productLine}`}
      className="relative w-full min-h-screen md:h-screen overflow-hidden"
    >
      {slides.map((slide, i) => renderSlide(slide, i))}
    </div>
  );
}
