'use client';

import { Button } from '@/components/core/Button';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * İRAY B2G banner — dark contrast section within the light-mode site.
 * Highlights the DMO public procurement business line.
 */
export function IrayBanner() {
  const containerRef = useGsapScroll((container) => {
    gsap.fromTo(container.querySelector('.iray-content'),
      { opacity: 0, scale: 0.97 },
      {
        opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section ref={containerRef} id="iray-b2g" className="section-padding section-dark">
      <div className="iray-content max-w-[1100px] mx-auto text-center opacity-0">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-[var(--accent-gold-hover)] flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold-hover)" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4" />
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="font-gothic text-xs tracking-[0.25em] uppercase text-[var(--accent-gold-hover)]">
            Yetkili Satıcı · DMO Onaylı
          </span>
        </div>

        <h2 className="font-cinzel text-section-heading font-bold text-[var(--section-dark-text)] mb-6">
          &ldquo;İRAY&rdquo; Kamu ve Kurumsal <span className="text-[var(--accent-gold-hover)]">Kağıt Ürünleri Tedariği</span>
        </h2>

        <p className="font-body text-body-lg text-[var(--section-dark-muted)] max-w-3xl mx-auto mb-4 leading-relaxed">
          Noscanda Group, İRAY markasının resmi yetkili satıcısıdır. Kamu kurumları, üniversiteler
          ve lojistik ağlarına DMO sistemi üzerinden premium kağıt ürünleri tedariği sağlamaktayız.
        </p>

        <p className="font-body text-sm text-[var(--section-dark-muted)] opacity-60 mb-10">
          2 Katlı Tuvalet Kağıdı · 2 Katlı Kağıt Havlu · Z-Katlama Havlu
        </p>

        <Button variant="primary" href="/dmo-katalogu" id="iray-cta">
          DMO Kamu Kataloğunu İnceleyin
        </Button>
      </div>
    </section>
  );
}
