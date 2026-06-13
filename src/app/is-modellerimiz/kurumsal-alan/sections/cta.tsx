import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Kurumsal Alan Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Markanızın Kokusunu Bulalım
          </h2>
          <p className="font-body text-base text-[var(--text-secondary)] mb-8">
            Kurumsal alan projelendirme and koku keşfi için uzman ekibimizle irtibata geçin.
          </p>
          <Link href="/iletisim/genel-merkez" className="btn-primary inline-block">Teklif Alın</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
