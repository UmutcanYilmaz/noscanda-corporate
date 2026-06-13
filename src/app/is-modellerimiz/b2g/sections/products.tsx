import { ScrollReveal } from '@/components/core/ScrollReveal';

const DMO_PRODUCTS = [
  {
    name: 'İRAY Premium Tuvalet Kağıdı',
    category: 'Hijyen Grubu',
    specs: '2 Katlı · %100 Saf Selüloz · 150 Yaprak · 48 Rulo/Koli',
    description: 'Yüksek emiciliğe sahip, suda kolay çözünen çift katlı tuvalet kağıdı. Kamu kurumları, eğitim yerleşkeleri ve sağlık tesisleri için optimize edilmiştir.',
  },
  {
    name: 'İRAY Rulo Kağıt Havlu',
    category: 'Hijyen Grubu',
    specs: '2 Katlı · %100 Saf Selüloz · 100 Yaprak · 12 Rulo/Koli',
    description: 'Dayanıklı yapısı ve özel gofraj deseniyle yüksek kurulama performansı sunan çift katlı premium kağıt havlu.',
  },
  {
    name: 'İRAY Z-Katlama Dispenser Havlu',
    category: 'Hijyen Grubu',
    specs: 'Z-Kat · Çift Katlı · 200 Yaprak · 12 Paket/Koli',
    description: 'Dispenser kullanımına uygun, tek çekim özelliğiyle israfı önleyen hijyenik dispenser havlu. Yoğun trafikli lavabolar için ideal.',
  },
  {
    name: 'İRAY Endüstriyel Hareketli Havlu',
    category: 'Endüstriyel Grup',
    specs: '2 Katlı · Fotoselli Dispenser Uyumlu · 6 Rulo/Koli',
    description: 'Fabrikalar, atölyeler ve geniş mutfak alanları için geliştirilmiş yüksek gramajlı ve yüksek emici rulo havlu.',
  },
];

/**
 * B2G Products Section
 */
export function Products() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-corporate block mb-4">DMO Ürün Listesi</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-4">
            İRAY Kağıt Portföyü
          </h2>
          <div className="gold-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DMO_PRODUCTS.map((prod, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.05 * idx}>
              <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl p-8 card-hover flex flex-col justify-between magnetic-hover h-full">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-gothic text-[0.6rem] tracking-wider text-[var(--accent-gold)] uppercase">
                      {prod.category}
                    </span>
                    <span className="font-gothic text-[0.55rem] text-[var(--text-muted)] tracking-widest uppercase bg-[var(--bg-secondary)] px-2 py-0.5 rounded">
                      DMO TESCİLLİ
                    </span>
                  </div>
                  <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-2">
                    {prod.name}
                  </h3>
                  <p className="font-gothic text-[0.65rem] tracking-wide text-[var(--text-secondary)] mb-4 border-b border-[var(--border-subtle)] pb-3">
                    {prod.specs}
                  </p>
                  <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
