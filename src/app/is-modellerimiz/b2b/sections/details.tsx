import { ScrollReveal } from '@/components/core/ScrollReveal';

const SOLUTIONS = [
  { title: "Otel & Lobi", desc: "Misafir deneyimini üst seviyeye çıkaran lobi kokulandırma sistemleri." },
  { title: "Restoran & Kafe", desc: "İştah açıcı, sıcak and davet edici atmosfer notaları." },
  { title: "SPA & Wellness", desc: "Rahatlatıcı, doğal and terapötik koku kompozisyonları." },
  { title: "Ofis & Showroom", desc: "Profesyonel, odaklanma artırıcı and marka algısını güçlendiren kokular." },
];

/**
 * B2B Details Section
 */
export function Details() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-cinzel text-section-heading font-semibold text-[var(--text-primary)] mb-6 text-center">
            Kurumsal Koku Kimliği
          </h2>
          <p className="font-body text-body-lg text-[var(--text-secondary)] leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Marka kimliğinizin ayrılmaz bir parçası olan özel koku profilleri tasarlıyoruz. 
            Lobi, toplantı salonu, SPA and restoran alanları için farklı atmosfer katmanları oluşturuyoruz. 
            Yüksek konsantrasyon felsefemiz sayesinde, geniş alanlarda bile etkili and kalıcı koku performansı sağlıyoruz.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {SOLUTIONS.map((item, idx) => (
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
