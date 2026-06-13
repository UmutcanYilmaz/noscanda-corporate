'use client';

import Link from 'next/link';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Investor Relations (Yatırımcı İlişkileri) section for the homepage.
 * Positions directly before the Contact section to summarize financial transparency,
 * reports, and governance.
 */
export function YatirimciIliskileriSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.yatirimci-header');
    const cards = container.querySelectorAll('.yatirimci-card');
    const content = container.querySelector('.yatirimci-content');

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

    gsap.fromTo(content,
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: content, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="yatirimci-homepage"
      className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orb */}
      <div className="floating-orb floating-orb-gold w-[300px] h-[300px] -top-[100px] left-[15%]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="yatirimci-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">Şeffaflık & Paydaşlar</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Yatırımcı İlişkileri
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Sürdürülebilir büyüme adımlarımız, kurumsal yönetim standartlarımız ve 
            finansal verilerimizi şeffaflık ilkemizle paylaşıyoruz.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="yatirimci-card opacity-0 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                İlkelerimiz
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Kurumsal Yönetim
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Şeffaflık, adillik, sorumluluk ve hesap verebilirlik ilkelerimizle uluslararası standartlara uyum sağlıyoruz.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              ESG Uyumlu Yönetim
            </span>
          </div>

          {/* Card 2 */}
          <div className="yatirimci-card opacity-0 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Mali Tablolar
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Finansal Raporlama
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Dönemsel çeyrek raporlarımız, yıllık faaliyet sunumlarımız ve denetlenmiş mali tablolarımıza anında erişim.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              2025/2026 Raporları Hazır
            </span>
          </div>

          {/* Card 3 */}
          <div className="yatirimci-card opacity-0 p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Paydaş İletişimi
              </span>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                Yatırımcı İrtibat
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Hissedar takvimimiz, genel kurul bilgilendirmelerimiz ve ir@noscanda.com üzerinden doğrudan iletişim hattımız.
              </p>
            </div>
            <span className="font-gothic text-[0.6rem] tracking-widest text-[var(--text-muted)] uppercase">
              ir@noscanda.com
            </span>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="yatirimci-content opacity-0 p-8 md:p-10 rounded-2xl bg-white/45 backdrop-blur-xl border border-[var(--border-gold)] flex flex-col md:flex-row items-center justify-between gap-8 shadow-glass">
          <div>
            <h3 className="font-cinzel text-lg font-semibold text-[var(--text-primary)]">Mali Raporlar Portalı</h3>
            <p className="font-body text-sm text-[var(--text-secondary)] mt-1">
              Yıllık faaliyet raporları, yönetim kurulu kararları ve hisselere dair detaylı bilgilendirmeleri inceleyin.
            </p>
          </div>
          
          <Link href="/yatirimci-iliskileri" className="btn-primary whitespace-nowrap">
            Yatırımcı Portalı →
          </Link>
        </div>

      </div>
    </section>
  );
}
