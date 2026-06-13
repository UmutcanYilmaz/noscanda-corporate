import { ScrollReveal } from '@/components/core/ScrollReveal';

const STEPS = [
  { step: "01", title: "Başvuru ve Ön Değerlendirme", desc: "Bayilik başvuru formunu doldurarak ekosistemimize ilk adımı atarsınız. Ekibimiz 48 saat içinde ön değerlendirme yapar." },
  { step: "02", title: "Lokasyon Analizi & Fizibilite", desc: "Hedeflenen bölge veya kiosk alanı posta kodu bazında analiz edilir. Bölge Kalkanı uygunluk durumu kontrol edilir." },
  { step: "03", title: "Sözleşme ve Bölge Rezervasyonu", desc: "Karşılıklı anlaşmanın ardından coğrafi haklar adınıza rezerve edilir ve ana sözleşme imzalanır." },
  { step: "04", title: "Kurulum ve Entegrasyon", desc: "Monolith Kiosk kurulumu tamamlanır, dijital ortaklık altyapısı aktif hale getirilir ve satışlar başlar." }
];

/**
 * Girişimcilik Process Section
 */
export function Process() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="badge-corporate block mb-4">Adım Adım</span>
          <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)] mb-4">
            Bayilik Katılım Süreci
          </h3>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => (
            <ScrollReveal key={item.step} direction="up" delay={0.1 * idx}>
              <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl p-6 relative magnetic-hover text-left h-full">
                <span className="font-cinzel text-2xl font-bold text-[var(--accent-gold)] opacity-40 block mb-4">{item.step}</span>
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
