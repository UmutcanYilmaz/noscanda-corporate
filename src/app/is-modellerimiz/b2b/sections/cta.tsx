import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * B2B Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Kurumsal Teklif Alın
          </h2>
          <Link href="/iletisim/genel-merkez" className="btn-primary inline-block">İletişime Geçin</Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
