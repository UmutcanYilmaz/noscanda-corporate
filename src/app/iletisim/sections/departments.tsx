import { ScrollReveal } from '@/components/core/ScrollReveal';

const DEPTS = [
  { name: "Kurumsal İletişim & Basın", desc: "Basın bültenleri, sponsorluk talepleri and etkinlik koordinasyonları için.", email: "media@noscanda.com" },
  { name: "Ortaklıklar & B2B/B2G", desc: "Kamu tedarik süreçleri, özel üretimler and toptan satın alımlar için.", email: "b2b@noscanda.com" },
  { name: "Lojistik & Müşteri İlişkileri", desc: "Sipariş sevkiyat durumları, tedarikçi ilişkileri and genel destek için.", email: "destek@noscanda.com" }
];

/**
 * İletişim Portal Departments Section
 */
export function Departments() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="badge-corporate block mb-4">Departmanlarımız</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Doğru Kanalla İletişim
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Sorularınızın hızlı yanıtlanması için ilgili birime doğrudan yazabilirsiniz.
          </p>
          <div className="gold-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {DEPTS.map((item, idx) => (
            <ScrollReveal key={item.name} direction="up" delay={0.1 * idx}>
              <div className="p-6 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl magnetic-hover h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2">{item.name}</h4>
                  <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mb-4">{item.desc}</p>
                </div>
                <span className="font-body text-xs font-semibold text-[var(--accent-gold)]">{item.email}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
