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
    <section id="hakkimizda" className="section-padding bg-[var(--bg-primary)] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Parent Title (1 Column) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mb-16 md:mb-20">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{
                background: 'rgba(15, 37, 71, 0.05)',
                color: '#0F2547',
                border: '1px solid rgba(15, 37, 71, 0.1)'
              }}
            >
              Hakkımızda
            </span>
            <h2 className="font-cinzel text-section-heading md:text-4xl font-bold text-[#0F2547] leading-[1.25]">
              İhtiyaç sahibi bireylerin ve toplulukların yaşam kalitesini artırmak için kapsamlı projeler hayata geçiriyoruz.
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Topics with separators (Col span 7) */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-[#0F2547]">
                  Kapsamlı Toplumsal Destek
                </h3>
                <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
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
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-[#0F2547]">
                  Kalıcı ve Güçlü Değişim
                </h3>
                <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Toplumun farklı kesimlerine ulaşarak, kısa vadeli desteklerin ötesinde, uzun soluklu
                  ve pozitif değişimler yaratmayı hedefleriz. Eşit fırsatlar sunarak toplumsal potansiyeli 
                  açığa çıkarıyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Floating Illustration (Col span 5) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[440px] aspect-[966/1080]">
                <Image
                  src="/images/vakif/hakkimizda.png"
                  alt="Hakkımızda — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 440px"
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
