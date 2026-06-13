'use client';

import { useState } from 'react';
import { POSTAL_ZONES } from '@/lib/constants';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type ResultState = { status: 'available' | 'protected'; district: string; city: string } | { status: 'not-found' } | null;

/**
 * Postal code territory checker for franchise applicants.
 * Validates if a region is available or protected in the franchise network.
 */
export function TerritoryShield() {
  const [postalCode, setPostalCode] = useState('');
  const [result, setResult] = useState<ResultState>(null);
  const [error, setError] = useState('');

  const containerRef = useGsapScroll((container) => {
    gsap.fromTo(container.querySelector('.shield-content'),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    );
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
    <section ref={containerRef} id="territory-shield" className="section-padding bg-[var(--bg-secondary)]">
      <div className="shield-content max-w-2xl mx-auto text-center opacity-0">
        <span className="badge-corporate block mb-4">Bölge Kalkanı</span>
        <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
          Posta Kodu Bölge Sorgulama
        </h2>
        <p className="font-body text-sm text-[var(--text-secondary)] mb-10 max-w-lg mx-auto">
          Bayilik başvurusu yapmadan önce, ilgilendiğiniz bölgenin korumalı franchise ağına dahil olup olmadığını kontrol edin.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto mb-8">
          <input
            id="postal-code-input"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Posta kodu (örn. 34340)"
            maxLength={5}
            className="flex-1 px-5 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]
              rounded-sm font-gothic text-sm tracking-wider text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)]
              focus:outline-none transition-colors duration-300 min-h-[44px]"
          />
          <button
            type="submit"
            className="btn-primary px-8 py-3 whitespace-nowrap"
            id="postal-code-submit"
          >
            Sorgula
          </button>
        </form>

        {error && (
          <p className="font-body text-sm text-red-600 mb-4">{error}</p>
        )}

        {result && (
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl
            border transition-all duration-500
            ${result.status === 'available'
              ? 'border-emerald-600/20 bg-emerald-50'
              : result.status === 'protected'
                ? 'border-[var(--border-gold)] bg-[var(--accent-gold-soft)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)]'
            }`}
          >
            {result.status === 'available' && (
              <>
                <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-left">
                  <p className="font-gothic text-sm text-emerald-700 font-semibold">Müsait</p>
                  <p className="font-body text-xs text-[var(--text-secondary)]">
                    {result.district}, {result.city} — Bu bölge henüz korumalı bayilik ağına dahil edilmemiştir.
                  </p>
                </div>
              </>
            )}
            {result.status === 'protected' && (
              <>
                <svg className="w-6 h-6 text-[var(--accent-gold)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div className="text-left">
                  <p className="font-gothic text-sm text-[var(--accent-gold)] font-semibold">Korumalı Bölge</p>
                  <p className="font-body text-xs text-[var(--text-secondary)]">
                    {result.district}, {result.city} — Bu bölgede aktif bir Nos Canda bayisi bulunmaktadır.
                  </p>
                </div>
              </>
            )}
            {result.status === 'not-found' && (
              <p className="font-body text-sm text-[var(--text-secondary)]">
                Bu posta kodu sistemimizde bulunamadı. Lütfen farklı bir kod deneyin.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
