import { ScrollReveal } from '@/components/core/ScrollReveal';

const VALUES = [
  { title: "Dürüstlük", desc: "Etiketimizde ne yazıyorsa, şişede o var. Gerçek esans oranını gizlemez, abartmayız." },
  { title: "Kalite", desc: "Her ürün, Extrait de Parfum standardında formüle edilir. Daha azıyla yetinmeyiz." },
  { title: "Erişilebilirlik", desc: "Lüks kokunun herkes için erişilebilir olması gerektiğine inanıyoruz. Affordable luxury." },
  { title: "Sürdürülebilirlik", desc: "Geri dönüştürülebilir ambalajlar, doğal esans yağları and minimum karbon ayak izi." },
  { title: "Kadın Liderliği", desc: "Kadın girişimciliğini destekleyen bir kurum kültürü. Vakıf çalışmalarımızla toplumsal katk." },
  { title: "İnovasyon", desc: "Geleneksel parfümeri bilimini modern teknoloji ile harmanlıyoruz. Sürekli Ar-Ge yatırımı." },
];

/**
 * Hikayemiz Values Section
 */
export function Values() {
  return (
    <section className="section-padding section-warm">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-corporate block mb-4">Değerlerimiz</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Bizi Tanımlayan Değerler
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, idx) => (
            <ScrollReveal key={value.title} direction="up" delay={0.1 * (idx % 3)}>
              <div className="surface-elevated rounded-xl p-6 magnetic-hover h-full">
                <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-3">{value.title}</h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{value.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
