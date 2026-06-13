import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Genel Merkez Quick Links Section
 */
export function QuickLinks() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto text-center">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-8">
            Hızlı Bağlantılar
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/iletisim/bayilik-basvurusu" className="btn-secondary">
              Bayilik Başvurusu
            </Link>
            <Link href="/dmo-katalogu" className="btn-secondary">
              DMO Kataloğu
            </Link>
            <Link href="/girisimcilik/monolith-kiosk" className="btn-secondary">
              Franchise Bilgi
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
