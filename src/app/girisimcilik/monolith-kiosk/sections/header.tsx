import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Monolith Kiosk Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Franchise Model</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Monolith <span className="text-[var(--accent-gold)]">Kiosk</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Kompakt, estetik and kârlı. Premium koku deneyimini minimum metrekare ile maksimum etkiye dönüştüren kiosk konseptimiz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
