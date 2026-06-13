import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Kurumsal Yönetim Header Section
 */
export function Header() {
  return (
    <section className="page-header bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <span className="badge-corporate block mb-4">Yatırımcı İlişkileri</span>
          <h1 className="font-cinzel text-hero font-bold text-[var(--text-primary)] mb-6">
            Kurumsal Yönetim <span className="text-[var(--accent-gold)]">İlkeleri</span>
          </h1>
          <p className="font-body text-body-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Grubumuzun sürdürülebilir başarı hedeflerini güvence altına alan kurumsal yönetim yapımızı, şeffaflık ilkelerimizi ve etik kodlarımızı sunuyoruz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
