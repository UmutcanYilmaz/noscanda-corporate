import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * B2G Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center">
      <div className="max-w-xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)] mb-4">
            Resmi Teklif ve Şartname Desteği
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
            Tedarik süreçleriniz için resmi fiyat teklifi, teknik şartname veya DMO katalog kod listesini talep etmek üzere kamu tedariği ekibimizle görüşebilirsiniz.
          </p>
          <Link href="/iletisim/genel-merkez" className="btn-primary inline-block">
            Kamu Tedarik Ekibiyle İrtibata Geçin
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
