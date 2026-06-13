'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Button } from '@/components/core/Button';

/**
 * Full-viewport cinematic hero section — warm ivory aesthetic.
 * Webflow-inspired design: floating orbs, staggered text reveal,
 * product image parallax, and ambient gradient drift.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
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
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.92, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out' },
        '-=0.7'
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

      /* Continuous subtle float on the product image */
      gsap.to(imageRef.current, {
        y: -8,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Luxury Marble Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-45 mix-blend-multiply">
        <Image
          src="/images/placeholders/hero-background.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Ambient Gradient Background */}
      <div
        className="absolute inset-0 animate-gradient-drift opacity-80"
        style={{ background: 'var(--bg-hero-gradient)' }}
      />

      {/* Floating decorative orbs — parallax depth */}
      <div className="floating-orb floating-orb-gold w-[600px] h-[600px] -top-[200px] -right-[200px]" />
      <div className="floating-orb floating-orb-warm w-[400px] h-[400px] top-[60%] -left-[150px]" />
      <div className="floating-orb floating-orb-ivory w-[300px] h-[300px] bottom-[10%] right-[5%]" />

      {/* Decorative gold line accents */}
      <div className="absolute top-[18%] left-0 right-0 h-px opacity-8"
        style={{ background: 'linear-gradient(90deg, transparent 10%, var(--accent-gold) 50%, transparent 90%)' }} />
      <div className="absolute bottom-[12%] left-0 right-0 h-px opacity-8"
        style={{ background: 'linear-gradient(90deg, transparent 10%, var(--accent-gold) 50%, transparent 90%)' }} />

      {/* NC Monogram Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <Image
          src="/logolar/logolar-1024x1024/nos-canda-logo-bw.png"
          alt=""
          width={600}
          height={600}
          className="w-[280px] md:w-[400px] lg:w-[500px] h-auto opacity-[0.035]"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Corporate Badge */}
        <span
          ref={badgeRef}
          className="badge-corporate block mb-6 opacity-0"
        >
          Noscanda Group Corporate Portal
        </span>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6 opacity-0"
        >
          Görünmenin Ötesinde,{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient-gold">Hissedilmek İçin.</span>
        </h1>

        {/* Manifesto Quote + Description */}
        <div ref={manifestoRef} className="mb-10 opacity-0">
          <p className="font-faraz text-subheading italic text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            &ldquo;İnsanlar kelimeleri unutur, yüzleri unutur ama kokuyu asla unutmaz.&rdquo;
          </p>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4 leading-relaxed">
            Modern dünyada herkes görünmek istiyor; biz, tene değdiği an başlayan o görünmez imzayı tasarlamak için kurulduk.
          </p>
        </div>

        {/* Product Image — floating */}
        <div ref={imageRef} className="mb-10 opacity-0 flex justify-center">
          <div className="relative w-[180px] md:w-[220px] lg:w-[260px] aspect-square">
            <Image
              src="/images/placeholders/hero-diffuser.png"
              alt="Nos Canda Premium Reed Diffuser"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
            {/* Glow ring under the product */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[20px] rounded-full bg-[var(--accent-gold)] opacity-[0.06] blur-xl" />
          </div>
        </div>

        {/* Dual CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0">
          <Button variant="primary" href="/urunlerimiz/reed-diffusers" id="hero-cta-products">
            Ürünlerimizi Keşfedin
          </Button>
          <Button variant="secondary" href="/girisimcilik/monolith-kiosk" id="hero-cta-franchise">
            Franchise & Ortaklık
          </Button>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="font-gothic text-[0.6rem] tracking-[0.3em] uppercase text-[var(--text-muted)]">
          Keşfet
        </span>
        <div className="w-px h-8 bg-[var(--accent-gold)] animate-pulse" />
      </div>
    </section>
  );
}
