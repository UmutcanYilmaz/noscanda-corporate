import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Girişimcilik Call to Action Section
 */
export function CTA() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="p-8 md:p-10 rounded-2xl bg-[var(--bg-primary)] border border-[var(--accent-gold-soft)] text-center max-w-3xl mx-auto shadow-md">
            <span className="badge-corporate block mb-4">Hemen Başvurun</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
              Noscanda Ekosistemine Katılın
            </h3>
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto">
              Bölge korumalı premium franchise ağımızda yerinizi almak, monolith kiosk detayları ve finansal fizibilite dosyalarına erişmek için başvuru formunu doldurabilirsiniz.
            </p>
            <Link href="/iletisim/bayilik-basvurusu" className="btn-primary inline-block">
              Bayilik Başvuru Formu →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
