'use client';

import Image from 'next/image';
import { Button } from '@/components/core/Button';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Side-by-side product showcase: Reed Diffusers vs Auto Fragrances.
 * Left: warm cream/botanical. Right: dark charcoal/automotive.
 * GSAP ScrollTrigger slide-in animations with central gold divider.
 */
export function DualitySplit() {
  const containerRef = useGsapScroll((container) => {
    const left = container.querySelector('#duality-left');
    const right = container.querySelector('#duality-right');

    if (left) {
      gsap.fromTo(left,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }
    if (right) {
      gsap.fromTo(right,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
        }
      );
    }
  });

  return (
    <section
      ref={containerRef}
      id="duality-split"
      className="relative"
    >
      <div className="flex flex-col lg:flex-row min-h-[85vh]">
        {/* Left — Reed Diffusers (warm ivory) */}
        <div
          id="duality-left"
          className="relative flex-1 flex flex-col items-center justify-center
            bg-[var(--section-warm-bg)] text-[var(--text-primary)]
            px-8 py-20 lg:py-16 opacity-0"
        >
          <div className="max-w-md text-center lg:text-left">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-[var(--accent-gold)] block mb-4">
              Premium Reed Diffusers
            </span>
            <h2 className="font-cinzel text-section-heading font-semibold mb-3">
              Evin Görünmez Ruhu
            </h2>
            <div className="w-12 h-px bg-[var(--accent-gold)] mb-4 mx-auto lg:mx-0" />
            <p className="font-faraz text-subheading italic mb-4 opacity-80">
              Scenting the Sanctuary
            </p>
            <p className="font-body text-sm leading-relaxed text-[var(--text-secondary)] mb-8">
              Botanik, hafif ve yatıştırıcı notalar; ılık taş ve minimalist cam estetiği ile buluşuyor. 
              Yavaş salınımlı mimari ambient tasarım ile eviniz bir koku tapınağına dönüşüyor.
            </p>

            {/* Product Image */}
            <div className="relative w-[200px] h-[300px] mx-auto lg:mx-0 mb-8 group">
              <Image
                src="/kokular/oda-kokulari/gorseller/siseler/floral-amber-sise.png"
                alt="Nos Canda Premium Reed Diffuser - Floral Amber"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="200px"
              />
            </div>

            <Button variant="ghost" href="/urunlerimiz/reed-diffusers" id="duality-cta-diffuser">
              Keşfet <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        {/* Gold Divider (Desktop only) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 2 100">
            <line x1="1" y1="0" x2="1" y2="100" stroke="var(--accent-gold)" strokeWidth="0.5" opacity="0.3" />
          </svg>
        </div>

        {/* Right — Auto Fragrances (dark charcoal) */}
        <div
          id="duality-right"
          className="relative flex-1 flex flex-col items-center justify-center
            bg-[var(--section-dark-bg)] text-[var(--section-dark-text)]
            px-8 py-20 lg:py-16 opacity-0"
        >
          <div className="max-w-md text-center lg:text-right">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-[var(--accent-gold-hover)] block mb-4">
              Premium Auto Fragrances
            </span>
            <h2 className="font-cinzel text-section-heading font-semibold mb-3">
              Yolculuğun İmzası
            </h2>
            <div className="w-12 h-px bg-[var(--accent-gold-hover)] mb-4 mx-auto lg:ml-auto lg:mr-0" />
            <p className="font-faraz text-subheading italic mb-4 opacity-80">
              Luxury in Motion
            </p>
            <p className="font-body text-sm leading-relaxed text-[var(--section-dark-muted)] mb-8">
              Manyetik deri, derin odun ve zengin amber notaları; koyu mat metal ve karbon fiber 
              estetiği ile buluşuyor. Zarif, dinamik, yüksek performanslı araç parfümleri.
            </p>

            {/* Product Image */}
            <div className="relative w-[180px] h-[280px] mx-auto lg:ml-auto lg:mr-0 mb-8 group">
              <Image
                src="/kokular/oto-kokulari/floral-amber-oto-sise.png"
                alt="Nos Canda Premium Auto Fragrance - Floral Amber"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="180px"
              />
            </div>

            <div className="lg:text-right">
              <Button variant="ghost" href="/urunlerimiz/auto-fragrances" id="duality-cta-auto">
                Keşfet <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
