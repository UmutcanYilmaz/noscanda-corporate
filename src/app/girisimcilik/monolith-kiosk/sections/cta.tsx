import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Monolith Kiosk Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Kiosk Sahibi Olun
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] mb-8">
            Detaylı fizibilite raporu and yatırım analizi için bayilik başvurusu yapın.
          </p>
          <Link href="/iletisim/bayilik-basvurusu" className="btn-primary inline-block">
            Başvuru Yap
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
