import { ScrollReveal } from '@/components/core/ScrollReveal';

const PILLARS = [
  { title: "Dürüst Formülasyon", desc: "Sentetik dolgu maddeleri olmadan, gerçek %20+ konsantrasyon taahhüdü." },
  { title: "Sosyal Katkı", desc: "Vakıf aracılığıyla gelirlerin bir kısmını kadın liderliğine aktarma." },
  { title: "Küresel Standart", desc: "Grasse kökenli doğal yağlar ile yüksek düzeyde koku projeksiyonu." },
  { title: "Yeşil Kozmetik", desc: "Karbon izini azaltan tedarik zinciri ve geri dönüştürülebilir ambalajlar." }
];

/**
 * Kurumsal Bilgiler Leadership Section
 */
export function Leadership() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal direction="left" className="lg:col-span-7">
            <span className="badge-corporate block mb-4">Liderlik Mesajı</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-6">
              Yarınları Duyularla <span className="text-[var(--accent-gold)]">İnşa Etmek</span>
            </h2>
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Nos Canda Group olarak, kurulduğumuz günden bu yana kokuyu yalnızca bir ürün değil, mekanları ve anıları dönüştüren sanatsal bir dil olarak ele alıyoruz. Yüksek esans konsantrasyonu manifestomuzla, parfümeri endüstrisindeki standartları daha dürüst, daha sürdürülebilir ve daha premium bir çizgiye taşımayı amaçlıyoruz.
            </p>
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Kadın girişimciliğinin ve yerel değerlerin küresel iş modelleriyle bir araya geldiğinde nasıl güçlü bir etki yaratabileceğine inanıyoruz. Nos Canda Vakfı ve Nos Canda Akademi ile bu etkiyi toplumsal faydaya dönüştürüyoruz.
            </p>
            <div className="border-l-2 border-[var(--accent-gold)] pl-4 py-1 italic font-cinzel text-xs text-[var(--text-muted)]">
              Nos Canda Group Yönetim Kurulu
            </div>
          </ScrollReveal>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {PILLARS.map((pillar, idx) => (
              <ScrollReveal key={pillar.title} direction="right" delay={0.05 * idx}>
                <div className="bg-[var(--bg-primary)] p-6 rounded-xl border border-[var(--border-subtle)] magnetic-hover h-full">
                  <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2">{pillar.title}</h4>
                  <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
