import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Auto Fragrances Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Lüks Araç Parfümleri</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Premium <span className="text-[var(--accent-gold)]">Auto Fragrances</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Doğal ahşap kapaklı lüks şişe tasarımı and %22 Extrait de Parfum konsantrasyonuyla
            sürüş deneyimini asil, kalıcı and duyusal bir yolculuğa dönüştüren araç parfümlerimiz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
