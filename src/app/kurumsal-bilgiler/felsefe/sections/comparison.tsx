import { ScrollReveal } from '@/components/core/ScrollReveal';

const CONCENTRATION_DATA = [
  { type: "Nos Canda", concentration: "25%", category: "Extrait de Parfum", highlight: true },
  { type: "Premium Markalar", concentration: "12-15%", category: "Eau de Parfum", highlight: false },
  { type: "Perakende Markalar", concentration: "5-8%", category: "Eau de Toilette", highlight: false },
  { type: "Market Ürünleri", concentration: "1-3%", category: "Sentetik Spreyleri", highlight: false },
];

/**
 * Felsefe Comparison Section
 */
export function Comparison() {
  return (
    <section className="section-padding section-warm">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="badge-corporate block mb-4">Karşılaştırma</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Konsantrasyon Farkı
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="space-y-3">
          {CONCENTRATION_DATA.map((item, idx) => (
            <ScrollReveal key={item.type} direction="up" delay={0.05 * idx}>
              <div
                className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 magnetic-hover
                  ${item.highlight
                    ? 'border-[var(--accent-gold)] bg-[var(--accent-gold-soft)] shadow-[var(--shadow-glow)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-elevated)]'
                  }`}
              >
                <div>
                  <p className={`font-gothic text-sm font-semibold ${item.highlight ? 'text-[var(--accent-gold)]' : 'text-[var(--text-primary)]'}`}>
                    {item.type}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)]">{item.category}</p>
                </div>
                <div className={`font-cinzel text-2xl font-bold ${item.highlight ? 'text-[var(--accent-gold)]' : 'text-[var(--text-secondary)]'}`}>
                  {item.concentration}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
