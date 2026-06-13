import { ScrollReveal } from '@/components/core/ScrollReveal';

const ITEMS = [
  { title: "Sıfır Stok Riski", desc: "Merkez depo stok yönetimi ile sipariş bazlı çalışırsınız. Envanter maliyeti yok." },
  { title: "Dijital Araçlar", desc: "Kişiselleştirilmiş link, QR kod and sosyal medya içerik paketi sağlanır." },
  { title: "Esnek Çalışma", desc: "Tam zamanlı veya yarı zamanlı, kendi programınıza göre çalışın." },
  { title: "Eğitim Desteği", desc: "Satış, dijital pazarlama and ürün bilgisi eğitimleri Akademi tarafından verilir." },
];

/**
 * Dijital Ortaklık Details Section
 */
export function Details() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-6 text-center">
            Nasıl Çalışır?
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Dijital Ortaklık Sistemi, fiziksel bir mağazaya ihtiyaç duymadan Nos Canda ürünlerinin 
            tanıtım and satışını yapmanıza olanak tanır. Sosyal medya, e-ticaret and referans kodları 
            üzerinden satış gerçekleştirerek komisyon bazlı gelir elde edersiniz.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ITEMS.map((item, idx) => (
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
