import { ScrollReveal } from '@/components/core/ScrollReveal';

const ITEMS = [
  { badge: "IFRA", title: "Uluslararası Uyumluluk", desc: "Tüm koku bileşenlerimiz International Fragrance Association standartlarına tam uyumludur." },
  { badge: "Grasse", title: "Fransız Esans Kökeni", desc: "Kokularımızın kalbi parfümerinin başkenti Grasse'tan tedarik edilen doğal özlere dayanır." },
  { badge: "ISO 9001", title: "Kalite Yönetim", desc: "Üretimden dağıtıma tüm iş modellerimiz uluslararası kalite sertifikaları ile tescildiler." },
  { badge: "Post-Sales", title: "Operasyonel Destek", desc: "B2B ve B2G modellerimizde kesintisiz envanter ikmali ve teknik servis garantisi sunuyoruz." }
];

/**
 * İş Modellerimiz Standards Section
 */
export function Standards() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="badge-corporate block mb-4">Standartlarımız</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Küresel Operasyon & Güvence
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {ITEMS.map((item, idx) => (
            <ScrollReveal key={item.badge} direction="up" delay={0.1 * idx}>
              <div className="p-6 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl h-full magnetic-hover text-center">
                <span className="font-cinzel text-xl font-bold text-[var(--accent-gold)] block mb-3">{item.badge}</span>
                <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
