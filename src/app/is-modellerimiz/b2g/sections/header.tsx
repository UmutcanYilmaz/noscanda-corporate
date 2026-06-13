import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * B2G Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">B2G · Kamu Satın Alma</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Kamu Tedariği <span className="text-[var(--accent-gold)]">(B2G)</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Türkiye genelindeki kamu kurumlarına, Devlet Malzeme Ofisi (DMO) tescilli İRAY kağıt and hijyen ürünlerimizle güvenilir and hızlı tedarik sağlıyoruz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
