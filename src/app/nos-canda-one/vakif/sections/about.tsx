import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Hakkımızda Section
 * 
 * Why: Restructured to feature a 1-column parent title spanning full-width, followed by
 * a 2-column grid below (topics with custom separators and a transparent floating illustration).
 * Passed 'w-full flex justify-center' to ScrollReveal to prevent flex collapse of the absolute Image container.
 * Navy Blue accenting matches the primary visual weight of the illustrations.
 */
export function About() {
  return (
    <section id="hakkimizda" className="py-10 md:py-14 bg-[var(--bg-primary)] overflow-hidden relative">
      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* Parent Title (1 Column) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mb-4">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-4 font-semibold"
              style={{
                background: 'rgba(50, 65, 174, 0.05)',
                color: '#3241ae',
                border: '1px solid rgba(50, 65, 174, 0.15)'
              }}
            >
              Hakkımızda
            </span>
            <h2 className="font-cinzel text-section-heading md:text-4xl font-bold text-[#0F2547] leading-[1.25]">
              İhtiyaç sahibi bireylerin ve toplulukların yaşam kalitesini artırmak için kapsamlı projeler hayata geçiriyoruz.
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content Layout (Align start to remove empty gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Topics with separators (Col span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-2">
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-[#0F2547]">
                  Kapsamlı Toplumsal Destek
                </h3>
                <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  Temel amacımız, sadece bugünün ihtiyaçlarını karşılamak değil, aynı zamanda şeffaflık,
                  adalet ve sürdürülebilirlik ilkeleriyle geleceğe yatırım yaparak kalıcı çözümler
                  sunmaktır.
                </p>
              </div>
            </ScrollReveal>

            {/* Custom Separator */}
            <ScrollReveal direction="none">
              <div className="h-px bg-gradient-to-r from-[#0F2547]/10 via-[#0F2547]/5 to-transparent w-full" />
            </ScrollReveal>

            <ScrollReveal direction="left" distance={40} delay={0.1}>
              <div className="space-y-2">
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-[#0F2547]">
                  Kalıcı ve Güçlü Değişim
                </h3>
                <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  Toplumun farklı kesimlerine ulaşarak, kısa vadeli desteklerin ötesinde, uzun soluklu
                  ve pozitif değişimler yaratmayı hedefleriz. Eşit fırsatlar sunarak toplumsal potansiyeli 
                  açığa çıkarıyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Floating Illustration (Col span 6) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[966/1080]">
                <Image
                  src="/images/vakif/hakkimizda.png"
                  alt="Hakkımızda — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
