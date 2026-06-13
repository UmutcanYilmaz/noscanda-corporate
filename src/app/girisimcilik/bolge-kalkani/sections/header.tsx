import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Bölge Kalkanı Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Franchise Güvencesi</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Bölge <span className="text-[var(--accent-gold)]">Kalkanı</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Her bayiye garantili satış coğrafyası. Fiziksel yarıçap sınırı ile kendi-kendine rekabeti engelleyen korumalı bölge sistemi.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
