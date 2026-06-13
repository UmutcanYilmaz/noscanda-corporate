import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Şeffaflık ve Raporlama Section
 * 
 * Why: Transitioned to a Navy Blue theme (#172a45 -> #051020) matching the illustration colors.
 * Restructured to use a 1-column parent header and a 2-column details split below
 * with custom topic separators and transparent floating graphic.
 * Passed 'w-full flex justify-center' to ScrollReveal to prevent flex size collapse.
 */
export function Transparency() {
  return (
    <section
      className="section-padding relative overflow-hidden border-t"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #172a45 0%, #0d1e36 60%, #051020 100%)',
        color: '#FFFFFF',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Ambient glowing background features */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] rounded-full bg-white/[0.01] blur-[70px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Parent Title (1 Column) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mb-16 md:mb-20">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              Şeffaflık ve Raporlama
            </span>
            <h2 className="font-cinzel text-section-heading md:text-4xl font-bold text-white leading-[1.25]">
              Hesap Verebilirlik ve Güven İlkelerini Önemsiyoruz.
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content Layout (Topics Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Topics with separators (Col span 7) */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Faaliyet Şeffaflığı
                </h3>
                <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
                  Bağışlarınızın ve desteklerinizin tam olarak nereye ulaştığını, hangi hayatlara
                  dokunduğunu açıkça görmeniz gerektiğine inanıyoruz. Faaliyetlerimizin her adımını
                  şeffaf bir şekilde paylaşıyoruz.
                </p>
              </div>
            </ScrollReveal>

            {/* Custom Separator */}
            <ScrollReveal direction="none">
              <div className="h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent w-full" />
            </ScrollReveal>

            <ScrollReveal direction="left" distance={40} delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Etki Raporlama
                </h3>
                <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
                  Bu amaçla, faaliyetlerimizin sosyal, çevresel ve ekonomik etkilerini düzenli olarak
                  titizlikle değerlendiriyor ve kapsamlı raporlar halinde kamuoyu ile paylaşıyoruz.
                  Güveniniz bizim için en değerli sermayedir.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Floating Graphic (Col span 5) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square">
                <Image
                  src="/images/vakif/seffaflik-ve-raporlama.png"
                  alt="Şeffaflık ve Raporlama — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 420px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Centered CTA */}
        <ScrollReveal direction="up" distance={30} delay={0.3}>
          <div className="text-center">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 font-gothic text-[0.8125rem] tracking-[0.18em] uppercase rounded-full transition-all duration-400 min-h-[44px] shadow-sm hover:shadow-md"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              Bilgi Alın
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
