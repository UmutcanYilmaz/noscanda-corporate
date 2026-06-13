'use client';

import Link from 'next/link';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Contact section for the homepage.
 * Provides entry routes to Headquarters info and Franchise Application.
 */
export function ContactSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.contact-header');
    const cards = container.querySelectorAll('.contact-card');

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
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2,
        scrollTrigger: { trigger: container, start: 'top 70%', toggleActions: 'play none none reverse' },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="contact-homepage"
      className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden"
    >
      {/* Floating orb */}
      <div className="floating-orb floating-orb-warm w-[350px] h-[350px] -bottom-[100px] -right-[100px]" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="contact-header opacity-0 text-center mb-16">
          <span className="badge-corporate block mb-4">İletişim Portalı</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Bizimle İletişime Geçin
          </h2>
          <div className="gold-line max-w-[100px] mx-auto" />
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: Genel Merkez */}
          <div className="contact-card opacity-0 flex flex-col justify-between p-8 rounded-2xl bg-white border border-[var(--border-subtle)] magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Genel Merkez
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                Nos Canda Genel Merkez
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                İdari işler, kamu tedariki ve toptan satış koordinasyonu için İstanbul genel merkez ofisimizle iletişime geçebilirsiniz.
              </p>
              
              <div className="space-y-3 font-body text-xs text-[var(--text-secondary)] mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--accent-gold)]">Adres:</span>
                  Atatürk Caddesi No:42, Ataşehir / İstanbul
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--accent-gold)]">E-posta:</span>
                  info@noscanda.com
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[var(--accent-gold)]">Telefon:</span>
                  +90 216 555 55 55
                </div>
              </div>
            </div>
            <Link href="/iletisim/genel-merkez" className="btn-primary w-full text-center">
              İrtibata Geçin
            </Link>
          </div>

          {/* Card 2: Bayilik Başvurusu */}
          <div className="contact-card opacity-0 flex flex-col justify-between p-8 rounded-2xl bg-white border border-[var(--border-subtle)] magnetic-hover">
            <div>
              <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block mb-3">
                Bayilik & Franchise
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-4">
                Bayilik Başvurusu
              </h3>
              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                Bölge Kalkanı coğrafi bayilik ağına katılmak ve monolith kiosk konseptlerimizle 
                kendi işinizi başlatmak için hızlı başvuru formumuzu doldurabilirsiniz.
              </p>
              
              <div className="space-y-2 mb-10 font-body text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  1. Formun doldurulması ve ön değerlendirme
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  2. Lokasyon fizibilite çalışmaları
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  3. Kurulum ve bayilik entegrasyonu
                </div>
              </div>
            </div>
            <Link href="/iletisim/bayilik-basvurusu" className="btn-primary w-full text-center">
              Başvuru Formunu Doldurun
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
