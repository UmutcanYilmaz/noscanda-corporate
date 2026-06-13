'use client';

import Link from 'next/link';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Business models (İş Modelleri) section for the homepage.
 * Showcases B2C, B2B, Kurumsal Alan, and B2G business modules.
 */
export function IsModelleriSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.is-modelleri-header');
    const cards = container.querySelectorAll('.is-modelleri-card');

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );

    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: container, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="is-modelleri-homepage"
      className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[300px] h-[300px] top-[5%] -right-[100px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="is-modelleri-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Ticari Faaliyetler</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            İş Modellerimiz
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Bireysel tüketicilerden kamu kuruluşlarına, toptan ticaretten özel mimari projelere 
            kadar uzanan geniş bir yelpazede koku hizmeti sağlıyoruz.
          </p>
        </div>

        {/* Business Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* B2C */}
          <div className="is-modelleri-card opacity-0 p-8 rounded-2xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Modül 01
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                B2C Retail
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Doğrudan tüketici odaklı, premium e-ticaret altyapımız ve yaygın fiziksel butik kiosk ağımız ile bireysel koku deneyimi.
              </p>
            </div>
            <Link href="/is-modellerimiz/b2c" className="font-gothic text-[0.65rem] tracking-widest text-[var(--accent-gold)] uppercase hover:underline mt-4">
              Detayları İncele →
            </Link>
          </div>

          {/* B2B */}
          <div className="is-modelleri-card opacity-0 p-8 rounded-2xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Modül 02
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                B2B Wholesale
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Otel, spa, ofis ve ticari mekanlar için toptan tedarik, özel ambalajlama ve dönemsel koku ikmal anlaşmaları.
              </p>
            </div>
            <Link href="/is-modellerimiz/b2b" className="font-gothic text-[0.65rem] tracking-widest text-[var(--accent-gold)] uppercase hover:underline mt-4">
              Detayları İncele →
            </Link>
          </div>

          {/* Kurumsal Alan */}
          <div className="is-modelleri-card opacity-0 p-8 rounded-2xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Modül 03
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Kurumsal İmza
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Markanızın kimliğini yansıtan, profesyonel burunlarımız tarafından formüle edilen özel mimari olfaktif markalama.
              </p>
            </div>
            <Link href="/is-modellerimiz/kurumsal-alan" className="font-gothic text-[0.65rem] tracking-widest text-[var(--accent-gold)] uppercase hover:underline mt-4">
              Detayları İncele →
            </Link>
          </div>

          {/* B2G */}
          <div className="is-modelleri-card opacity-0 p-8 rounded-2xl bg-white border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover shadow-glass">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Modül 04
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Kamu Tedariği
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Devlet Malzeme Ofisi (DMO) tescilli İRAY premium kağıt ve hijyen ürünlerinin kamu kurumlarına resmi tedarik süreçleri.
              </p>
            </div>
            <Link href="/is-modellerimiz/b2g" className="font-gothic text-[0.65rem] tracking-widest text-[var(--accent-gold)] uppercase hover:underline mt-4">
              Detayları İncele →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
