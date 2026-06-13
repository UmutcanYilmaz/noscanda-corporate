import { ScrollReveal } from '@/components/core/ScrollReveal';

const STEPS = [
  { num: "01", title: "Coğrafi Analiz", desc: "Posta kodu bazlı demografik ve ticari analiz ile optimal bölge sınırları belirlenir." },
  { num: "02", title: "Sözleşme Garantisi", desc: "Korumalı bölge sınırları franchise sözleşmesinde tescil edilir ve hukuken bağlayıcıdır." },
  { num: "03", title: "Sürekli İzleme", desc: "Merkez, bölge ihlallerini otomatik olarak izler ve franchise sahiplerini bilgilendirir." },
];

/**
 * Bölge Kalkanı Details Section
 */
export function Details() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto">
        <div className="space-y-8">
          <ScrollReveal direction="up">
            <div>
              <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-6 text-center">
                Nasıl Çalışır?
              </h2>
              <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Bölge Kalkanı sistemi, her Nos Canda bayisine merkez noktasından itibaren 3 ila 5 km 
                yarıçaplı bir özel satış bölgesi tahsis eder. Bu bölge içerisinde başka bir Nos Canda 
                bayisi açılamaz — böylece franchise sahiplerinin kendi ağ içi rekabetten korunması garanti altına alınır.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step, idx) => (
              <ScrollReveal key={step.num} direction="up" delay={0.1 * idx}>
                <div className="p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl magnetic-hover text-center">
                  <span className="font-cinzel text-3xl font-bold text-[var(--accent-gold)] block mb-3">{step.num}</span>
                  <h3 className="font-cinzel text-base font-semibold text-[var(--text-primary)] mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
