import { ScrollReveal } from '@/components/core/ScrollReveal';

const STEPS = [
  {
    num: "I",
    title: "Mekan Analizi",
    desc: "Uzman ekiplerimiz, markanızın hedef kitlesini, mimari tasarımını, iklimlendirme sistemini ve hava sirkülasyonunu inceleyerek olfaktif ihtiyaçları belirler."
  },
  {
    num: "II",
    title: "Koku Tasarımı & Seçimi",
    desc: "Fransız parfümörlerimiz tarafından markanızın felsefesine özel tasarlanmış 3 koku prototipini beğeninize sunarız ve imza kokunuzu birlikte seçeriz."
  },
  {
    num: "III",
    title: "Teknoloji Entegrasyonu",
    desc: "Mekan büyüklüğüne ve havalandırma yapısına uygun olarak, patentli soğuk difüzyon teknolojisine sahip koku cihazlarımızı monte ederiz."
  },
  {
    num: "IV",
    title: "Süreklilik & Bakım",
    desc: "Düzenli servis periyotlarımızla kartuş yenileme, cihaz kalibrasyonu ve koku yoğunluğu optimizasyonu işlemlerini yaparak olfaktif imzanızı sürekli taze tutarız."
  }
];

export function Process() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)] relative overflow-hidden">
      {/* Decorative Monogram */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.015] hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-corporate block mb-4">Metodoloji</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Markanızın Olfaktif İmzası Nasıl Oluşur?
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Mekan kokulandırmada tesadüflere yer bırakmıyoruz. Bilimsel ve sanatsal yaklaşımla markanızı kokulandırıyoruz.
          </p>
          <div className="gold-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-[44px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-[var(--border-gold)] to-transparent z-0 pointer-events-none" />

          {STEPS.map((step, idx) => (
            <ScrollReveal key={step.title} direction="up" delay={0.1 * idx}>
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left h-full">
                
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-gold)] flex items-center justify-center font-cinzel text-sm font-semibold text-[var(--accent-gold)] shadow-glass mb-6 transition-transform duration-300 hover:scale-110">
                  {step.num}
                </div>

                {/* Text Content */}
                <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}
