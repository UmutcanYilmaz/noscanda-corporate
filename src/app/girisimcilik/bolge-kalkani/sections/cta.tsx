import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Bölge Kalkanı Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            Bölgenizi Kontrol Edin
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] mb-8">
            Ana sayfamızdaki Bölge Kalkanı sorgulama aracını kullanarak bölgenizin müsaitlik durumunu öğrenin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#territory-shield" className="btn-primary">Bölge Sorgula</Link>
            <Link href="/iletisim/bayilik-basvurusu" className="btn-secondary">Bayilik Başvurusu</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
