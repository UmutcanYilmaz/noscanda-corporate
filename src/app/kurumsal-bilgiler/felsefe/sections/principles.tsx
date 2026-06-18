import { ScrollReveal } from '@/components/core/ScrollReveal';

const PRINCIPLES = [
  { num: "01", title: "Saflık", desc: "Sentetik dolgu maddeleri kullanmıyoruz. Her bileşen özenle seçilmiş doğal veya yüksek kaliteli sentetik esans yağlarından oluşur." },
  { num: "02", title: "Kalıcılık", desc: "Reed diffuser'larımız 8-16 hafta, araç parfümlerimiz 6-10 hafta boyunca kesintisiz koku salınımı sağlar." },
  { num: "03", title: "Dürüstlük", desc: "Ürün etiketlerimizde gerçek esans oranını açıkça belirtiyoruz. Müşterilerimiz ne aldığını bilir." },
];

/**
 * Felsefe Principles Section
 */
export function Principles() {
  return (
    <section className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Üç Temel Prensip
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES.map((principle, idx) => (
            <ScrollReveal key={principle.num} direction="up" delay={0.1 * idx}>
              <div className="text-center">
                <span className="font-cinzel text-3xl font-bold text-[var(--accent-gold)] block mb-3">{principle.num}</span>
                <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-3">{principle.title}</h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{principle.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
