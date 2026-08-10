import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Yatırımcı İlişkileri Contact Section
 */
export function Contact() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] text-center border-t border-[var(--border-subtle)]">
      <ScrollReveal direction="up">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)] mb-4">
            Yatırımcı İlişkileri İrtibat
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
            Sorularınız, bilgi talepleriniz veya ortaklık görüşmeleriniz için doğrudan yatırımcı 
            ilişkileri masamızla irtibat kurabilirsiniz.
          </p>
          <div className="inline-block px-6 py-4 rounded-xl border border-[var(--border-gold)] bg-[var(--bg-primary)] font-body text-sm text-[var(--text-primary)] magnetic-hover">
            <p className="mb-1"><strong>E-posta:</strong> ir@noscanda.group</p>
            <p><strong>Tel:</strong> 0545 301 6605</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
