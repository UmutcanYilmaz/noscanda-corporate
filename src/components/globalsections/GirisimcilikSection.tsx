'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { POSTAL_ZONES } from '@/lib/constants';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ResultState = { status: 'available' | 'protected'; district: string; city: string } | { status: 'not-found' } | null;

/**
 * Girişimcilik Section on Homepage.
 * Enriched with kiosk imagery, floating orbs, magnetic hover cards,
 * and the interactive Region Protection Validator.
 */
export function GirisimcilikSection() {
  const [postalCode, setPostalCode] = useState('');
  const [result, setResult] = useState<ResultState>(null);
  const [error, setError] = useState('');

  const containerRef = useGsapScroll((container) => {
    const leftCol = container.querySelector('.girisimcilik-left');
    const rightCol = container.querySelector('.girisimcilik-right');
    const imageBlock = container.querySelector('.girisimcilik-image');

    gsap.fromTo(leftCol,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );

    gsap.fromTo(rightCol,
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    );

    if (imageBlock) {
      gsap.fromTo(imageBlock,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: imageBlock, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const code = postalCode.trim();
    if (!/^\d{5}$/.test(code)) {
      setError('Lütfen 5 haneli geçerli bir posta kodu girin.');
      return;
    }

    const zone = POSTAL_ZONES.find((z) => z.code === code);
    if (zone) {
      setResult({ status: zone.status, district: zone.district, city: zone.city });
    } else {
      setResult({ status: 'not-found' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="girisimcilik-homepage"
      className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-gold w-[350px] h-[350px] -top-[100px] right-[10%]" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-corporate block mb-4">Girişimcilik Portalı</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Birlikte Büyüme Ekosistemi
          </h2>
          <div className="gold-line max-w-[100px] mx-auto mb-6" />
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Dijital altyapı, coğrafi koruma ve modüler perakende konseptleriyle güçlendirilmiş yeni nesil ortaklık modellerimiz.
          </p>
        </div>

        {/* Kiosk Image Banner */}
        <div className="girisimcilik-image opacity-0 mb-16 rounded-2xl overflow-hidden relative image-zoom-container glow-pulse">
          <div className="relative w-full aspect-[21/9]">
            <Image
              src="/images/placeholders/kiosk-franchise.png"
              alt="Nos Canda Monolith Kiosk — premium perakende konsepti"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--section-dark-bg)]/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-6 left-8 right-8">
            <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-white/80">
              Monolith Kiosk Konsepti · Premium AVM Perakendeciliği
            </span>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Business Models */}
          <div className="girisimcilik-left opacity-0 lg:col-span-7 space-y-6">
            <h3 className="font-cinzel text-2xl font-medium text-[var(--text-primary)] mb-4">
              Yeni Nesil Bayilik Modelleri
            </h3>
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
              Nos Canda, ortaklarının büyümesini destekleyen dijital ve coğrafi altyapılar sunar.
              Geleneksel perakende bayiliğinin ötesine geçerek, ortaklarımızın kendi bölgelerinde
              online siparişlerden dahi pay almalarını sağlayan bir model kurduk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Monolith Kiosk', desc: 'AVM ve caddeler için minimal alanda yüksek verimli butik perakende ünitesi.', path: '/girisimcilik/monolith-kiosk', icon: '◆' },
                { title: 'Bölge Kalkanı', desc: 'Bölgenize özel posta kodu lisansı ile rakipsiz tekil franchise hakları.', path: '/girisimcilik/bolge-kalkani', icon: '◇' },
                { title: 'Dijital Ortaklık', desc: 'Konumunuza yakın online siparişleri sizin envanter ve cironuza aktaran sistem.', path: '/girisimcilik/dijital-ortaklik', icon: '◈' },
              ].map((model, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex flex-col justify-between magnetic-hover">
                  <div>
                    <span className="text-xl text-[var(--accent-gold)] block mb-3">{model.icon}</span>
                    <h4 className="font-cinzel text-sm font-semibold text-[var(--text-primary)] mb-2">{model.title}</h4>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-4">{model.desc}</p>
                  </div>
                  <Link href={model.path} className="font-gothic text-[0.6rem] tracking-wider text-[var(--accent-gold)] uppercase underline-draw">
                    İncele →
                  </Link>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/girisimcilik" className="btn-secondary inline-block">
                Girişimcilik Detayları
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Region Checker */}
          <div className="girisimcilik-right opacity-0 lg:col-span-5 bg-white/60 backdrop-blur-md rounded-2xl border border-[var(--border-gold)] p-8 shadow-glass glow-pulse">
            <span className="font-gothic text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-gold)] block mb-3 text-center">
              Posta Kodu Doğrulama
            </span>
            <h3 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-4 text-center">
              Bölge Kalkanı Korumasını Sorgulayın
            </h3>
            <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-6 text-center">
              İlgilendiğiniz posta kodunun bayilik koruması altında olup olmadığını anında kontrol edin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <input
                  id="home-postal-code"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="Posta kodu (örn. 34340)"
                  maxLength={5}
                  className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]
                    rounded-lg font-gothic text-sm tracking-wider text-[var(--text-primary)]
                    placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)]
                    focus:outline-none transition-colors duration-300 min-h-[44px]"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3"
                id="home-postal-submit"
              >
                Bölgeyi Sorgula
              </button>
            </form>

            {error && (
              <p className="font-body text-xs text-red-600 text-center mb-4">{error}</p>
            )}

            {result && (
              <div className={`p-4 rounded-xl border transition-all duration-500
                ${result.status === 'available'
                  ? 'border-emerald-600/20 bg-emerald-50/80'
                  : result.status === 'protected'
                    ? 'border-[var(--border-gold)] bg-[var(--accent-gold-soft)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)]'
                }`}
              >
                {result.status === 'available' && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-gothic text-xs text-emerald-700 font-semibold">Müsait Bölge</p>
                      <p className="font-body text-[0.7rem] text-[var(--text-secondary)] leading-relaxed mt-1">
                        {result.district}, {result.city} — Bu posta kodunda henüz korumalı bayilik verilmemiştir.
                      </p>
                    </div>
                  </div>
                )}
                {result.status === 'protected' && (
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--accent-gold)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div>
                      <p className="font-gothic text-xs text-[var(--accent-gold)] font-semibold">Korumalı Bölge</p>
                      <p className="font-body text-[0.7rem] text-[var(--text-secondary)] leading-relaxed mt-1">
                        {result.district}, {result.city} — Bu bölgede aktif bir bayimiz bulunmaktadır.
                      </p>
                    </div>
                  </div>
                )}
                {result.status === 'not-found' && (
                  <p className="font-body text-xs text-[var(--text-secondary)] text-center">
                    Bu posta kodu sistemimizde bulunamadı veya listemizde yer almıyor. Bayilik başvurusu esnasında manuel olarak sorgulanacaktır.
                  </p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
