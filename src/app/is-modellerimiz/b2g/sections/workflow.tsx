import { ScrollReveal } from '@/components/core/ScrollReveal';

const STEPS = [
  {
    num: "1",
    title: "Ürün Seçimi",
    desc: "İhtiyacınıza uygun İRAY ürünlerini and miktarını belirleyin veya DMO kodlarımızı talep edin."
  },
  {
    num: "2",
    title: "DMO Portalı Üzerinden Sipariş",
    desc: "Devlet Malzeme Ofisi portalı üzerinden ilgili kodlarla resmi sipariş girişinizi tamamlayın."
  },
  {
    num: "3",
    title: "Lojistik Sevkiyat",
    desc: "Kamu standartlarına uygun paketleme and faturalandırma ile ürünlerinizi adresinize sevk edelim."
  }
];

/**
 * B2G Workflow Section
 */
export function Workflow() {
  return (
    <section className="section-padding bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-xl font-semibold text-[var(--text-primary)] text-center mb-12">
            Kamu Satın Alma Süreci
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.num} direction="up" delay={0.1 * idx}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border border-[var(--border-gold)] bg-[var(--accent-gold-soft)] flex items-center justify-center mx-auto mb-4 font-cinzel text-sm text-[var(--accent-gold)] font-bold">
                  {step.num}
                </div>
                <h3 className="font-cinzel text-sm font-semibold mb-2">{step.title}</h3>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
