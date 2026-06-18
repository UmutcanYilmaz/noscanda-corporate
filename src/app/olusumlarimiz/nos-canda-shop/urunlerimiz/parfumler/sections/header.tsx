import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Parfumler Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Yakında</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Perfume <span className="text-[var(--accent-gold)]">Collection</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Nos Canda&apos;nın kişisel parfüm koleksiyonu hazırlanıyor. 
            Golden Chapter kadın serisi ve erkekler için Niche koleksiyonu ile sektöre yeni bir soluk getiriyoruz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
