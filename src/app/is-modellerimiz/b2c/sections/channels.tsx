import { ScrollReveal } from '@/components/core/ScrollReveal';

const CHANNELS = [
  { title: "Online Mağaza", desc: "noscanda.net üzerinden 7/24 alışveriş. Aynı gün kargo, kapıda ödeme and taksit seçenekleri." },
  { title: "Monolith Kiosk", desc: "AVM, havalimanı and premium lokasyonlarda fiziksel deneyim noktaları. Koku test istasyonları." },
  { title: "Seçili Perakende", desc: "Premium eczane, butik mağaza and konsept perakende noktalarında raf alanı ortaklıkları." },
];

/**
 * B2C Retail Channels Section
 */
export function Channels() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNELS.map((channel, idx) => (
            <ScrollReveal key={channel.title} direction="up" delay={0.1 * idx}>
              <div className="surface-elevated rounded-xl p-8 magnetic-hover shadow-glass h-full">
                <h3 className="font-cinzel text-lg font-semibold text-[var(--text-primary)] mb-3">{channel.title}</h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{channel.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
