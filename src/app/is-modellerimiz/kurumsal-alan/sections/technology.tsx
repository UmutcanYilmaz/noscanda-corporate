import { ScrollReveal } from '@/components/core/ScrollReveal';

const TECH_ITEMS = [
  {
    title: "Soğuk Mikro-Difüzyon Teknolojisi",
    desc: "Esans formülünü ısıtmadan, gaz haline getirmeden, soğuk hava basıncıyla 1 mikronun altındaki zerreciklere ayırarak havada saatlerce asılı kalmasını sağlar."
  },
  {
    title: "HVAC Havalandırma Entegrasyonu",
    desc: "Cihazlarımız merkezi klima ve havalandırma kanallarına doğrudan entegre edilerek, binanın tüm bölümlerine kokuyu homojen ve gürültüsüz şekilde ulaştırır."
  },
  {
    title: "Akıllı Programlama Modülü",
    desc: "Haftalık takvim programlaması sayesinde, cihazların sadece mekanın aktif olduğu gün ve saatlerde çalışmasını sağlayarak esans sarfiyatını en aza indirir."
  },
  {
    title: "Kötü Koku Nötralizasyonu",
    desc: "Kötü kokuları baskılamak yerine, patentli aktif bileşenlerimizle koku moleküllerini havada nötralize eder, mekana gerçek ferahlık kazandırır."
  }
];

export function Technology() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-corporate block mb-4">Mühendislik</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Profesyonel Difüzyon Teknolojisi
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Kurumsal kokulandırma projelerimizde kullandığımız, yüksek yayılım ve maksimum verimlilik sağlayan difüzyon standartlarımız.
          </p>
          <div className="gold-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_ITEMS.map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={0.1 * idx}>
              <div className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border-subtle)] magnetic-hover h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent-gold-soft)] border border-[var(--border-gold)] flex items-center justify-center font-cinzel text-base font-bold text-[var(--accent-gold)] mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
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
