import { ScrollReveal } from '@/components/core/ScrollReveal';

const BENEFITS = [
  "4-6 m² kompakt alan gereksinimi",
  "Anahtar teslimi kurulum (15 iş günü)",
  "Korumalı bölge garantisi (3-5 km yarıçap)",
  "Merkezi stok and lojistik desteği",
  "Dijital pazarlama and CRM entegrasyonu",
];

const METRICS = [
  { label: "Başlangıç Yatırımı", value: "₺150K - ₺250K" },
  { label: "Aylık Sabit Gider", value: "₺15K - ₺25K" },
  { label: "ROI Süresi", value: "8-14 Ay" },
  { label: "Brüt Kâr Marjı", value: "%55 - %65" },
];

/**
 * Monolith Kiosk Details Section
 */
export function Details() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <div>
              <span className="badge-corporate block mb-4">Konsept</span>
              <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-6">
                Minimum Alan, Maksimum Etki
              </h2>
              <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                Monolith Kiosk, Nos Canda&apos;nın franchise ağının temel yapı taşıdır. 4-6 m² alan üzerinde 
                kurulan bu kompakt kiosk sistemi, premium koku deneyimini AVM&apos;ler, havalimanları, 
                oteller and yüksek trafikli perakende lokasyonlarına taşır.
              </p>
              <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                Tamamen markaya özel tasarlanmış monolitik yapısı, mat siyah and altın detaylarla 
                premium bir ilk izlenim yaratır. Entegre koku test istasyonu ile müşterilerin 
                ürünleri deneyimlemesine olanak tanır.
              </p>

              <div className="space-y-4">
                {BENEFITS.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-[var(--accent-gold)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-body text-sm text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {METRICS.map((item, idx) => (
              <ScrollReveal key={item.label} direction="right" delay={0.05 * idx}>
                <div className="surface-elevated rounded-xl p-6 flex items-center justify-between magnetic-hover shadow-glass">
                  <span className="font-gothic text-xs tracking-[0.1em] uppercase text-[var(--text-muted)]">{item.label}</span>
                  <span className="font-cinzel text-lg font-bold text-[var(--accent-gold)]">{item.value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
