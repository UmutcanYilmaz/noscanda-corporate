import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Reed Diffusers Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Lüks Oda Kokuları</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Premium <span className="text-[var(--accent-gold)]">Reed Diffusers</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Grasse esansiyel yağları and %25 Extrait de Parfum konsantrasyonuyla 
            formüle edilmiş, evinizde haftalarca süren derin olfaktif iz bırakan oda kokusu serimiz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
