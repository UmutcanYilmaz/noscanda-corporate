import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * B2C Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">İş Modelleri</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            B2C <span className="text-[var(--accent-gold)]">Perakende</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Tüketiciye doğrudan ulaşan, premium koku deneyimini erişilebilir kılan satış kanallarımız.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
