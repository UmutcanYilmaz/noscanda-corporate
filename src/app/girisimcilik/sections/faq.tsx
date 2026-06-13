import { ScrollReveal } from '@/components/core/ScrollReveal';

const FAQS = [
  { q: "Bölge Kalkanı Sistemi nasıl çalışır?", a: "Bölge Kalkanı, posta kodu bazlı bir coğrafi koruma sistemidir. Rezerve edilen bölgede başka bir fiziki kiosk açılamaz ve o bölgeden gelen online sipariş kâr payı doğrudan bayimize aktarılır." },
  { q: "Monolith Kiosk kurulum maliyetleri nedir?", a: "Monolith Kiosk, şık ve modüler tasarımı sayesinde geleneksel mağaza dekorasyon maliyetlerinin %70 altındadır. Detaylı yatırım ve amortisman fizibilitesi başvuru sonrası paylaşılır." },
  { q: "Dijital ortaklık payı ne sıklıkla ödenir?", a: "Bölgenize düşen e-ticaret siparişlerinin lojistik ve sevkiyat payları aylık hakediş raporları ile hesaplanır ve takip eden ayın ilk haftasında bayimizin hesabına aktarılır." },
  { q: "Ürün güvenlik sertifikaları mevcut mu?", a: "Evet, tüm Nos Canda formülasyonları IFRA (International Fragrance Association) standartlarına uygun olup, solunum sağlığını riske atmayan, bitkisel taşıyıcı bazlı formüllerdir. Sağlık Bakanlığı onaylıdır." }
];

/**
 * Girişimcilik FAQ Section
 */
export function FAQ() {
  return (
    <section className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="badge-corporate block mb-4">Merak Edilenler</span>
          <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
            Sıkça Sorulan Sorular
          </h3>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {FAQS.map((faq, idx) => (
            <ScrollReveal key={faq.q} direction="up" delay={0.05 * idx}>
              <div className="p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl h-full magnetic-hover">
                <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2">{faq.q}</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
