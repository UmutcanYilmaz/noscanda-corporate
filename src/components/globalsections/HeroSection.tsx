'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Button } from '@/components/core/Button';

/**
 * Full-viewport cinematic hero section — warm ivory aesthetic.
 * Webflow-inspired design: floating orbs, staggered text reveal,
 * and ambient gradient drift.
 * Background features a high-fidelity luxury YouTube video.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 40, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(manifestoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 0.4, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <iframe
          src="https://www.youtube.com/embed/GjsWJj-8V-Q?autoplay=1&mute=1&loop=1&playlist=GjsWJj-8V-Q&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
          className="absolute border-none"
          style={{
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77vh',
            transform: 'translate(-50%, -50%)',
          }}
          allow="autoplay; encrypted-media"
          title="Noscanda Hero Background Video"
        />
      </div>

      {/* Black Color Overlay */}
      <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none" />

      {/* NC Monogram Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-10">
        <Image
          src="/logolar/logolar-1024x1024/nos-canda-logo-bw.png"
          alt=""
          width={600}
          height={600}
          className="w-[280px] md:w-[400px] lg:w-[500px] h-auto opacity-[0.05]"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Corporate Badge */}
        <span
          ref={badgeRef}
          className="badge-corporate block mb-6 opacity-0"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            color: '#FFFFFF',
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          Noscanda Group Corporate Portal
        </span>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="font-cinzel text-hero font-bold text-white mb-6 opacity-0"
        >
          Görünmenin Ötesinde,{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient-gold">Hissedilmek İçin.</span>
        </h1>

        {/* Manifesto Quote + Description */}
        <div ref={manifestoRef} className="mb-10 opacity-0">
          <p className="font-faraz text-subheading italic text-white/90 max-w-2xl mx-auto leading-relaxed">
            &ldquo;İnsanlar kelimeleri unutur, yüzleri unutur ama kokuyu asla unutmaz.&rdquo;
          </p>
          <p className="font-body text-body-lg text-white/75 max-w-2xl mx-auto mt-4 leading-relaxed">
            Modern dünyada everyone wants to be seen; we were established to design that invisible signature that starts the moment it touches the skin.
          </p>
        </div>

        {/* Dual CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0">
          <Button variant="primary" href="/urunlerimiz/reed-diffusers" id="hero-cta-products">
            Ürünlerimizi Keşfedin
          </Button>
          <Button variant="secondary" href="/girisimcilik/monolith-kiosk" id="hero-cta-franchise" className="border-white/30 text-white hover:bg-white/10">
            Franchise & Ortaklık
          </Button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 z-20">
        <span className="font-gothic text-[0.6rem] tracking-[0.3em] uppercase text-white/60">
          Keşfet
        </span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
