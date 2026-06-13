import { ScrollReveal } from '@/components/core/ScrollReveal';

const AREAS = [
  { title: "Otel Lobisi", desc: "Misafir karşılama alanlarında sıcak, lüks and davet edici koku katmanları." },
  { title: "AVM Ortak Alanları", desc: "Ziyaretçi deneyimini artıran, alışveriş motivasyonunu güçlendiren ambient kokular." },
  { title: "Kurumsal Ofis", desc: "Çalışan verimliliğini and marka algısını destekleyen profesyonel koku çözümleri." },
];

/**
 * Kurumsal Alan Details Section
 */
export function Details() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-6 text-center">
            Alanlar İçin Koku Tasarımı
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            HVAC entegrasyonlu endüstriyel difüzyon sistemleri ile 50 m²&apos;den 5.000 m²&apos;ye kadar alanları 
            kokulandırıyoruz. Her mekan için özel koku profili tasarlanır; sezonluk değişim programları ile 
            atmosfer sürekli taze tutulur.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {AREAS.map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={0.05 * idx}>
              <div className="surface-elevated rounded-xl p-6 magnetic-hover shadow-glass h-full">
                <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
