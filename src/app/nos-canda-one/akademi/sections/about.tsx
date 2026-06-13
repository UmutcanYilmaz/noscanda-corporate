'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * About Section (#hakkimizda) for Nos Canda One | Akademi.
 * Updated to a clean typographic split layout with a larger, transparent full-size illustration.
 */
export function About() {
  return (
    <section
      id="hakkimizda"
      className="relative py-20 md:py-32 overflow-hidden bg-[#FFFFFF] font-poppins z-10"
    >
      {/* Decorative Glow Background Element */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(186, 82, 37, 0.15) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" distance={30}>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-2">
                Nos Canda One Akademi Hakkında
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium text-[#212121] leading-[1.2] tracking-tight mb-6">
                &ldquo;Bilgiyle Yüksel, Deneyimle Geleceği İnşa Et!&rdquo;
              </h2>
              <div className="h-1 w-20 bg-[#BA5225] rounded-full mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light space-y-4">
                Nos Canda One Akademi&apos;nin temel amacı, bilgi ve deneyim paylaşımını önceliklendirerek
                öğrencilerinin geleceklerine rehberlik etmek ve kapsamlı programları aracılığıyla genç yeteneklerin
                kariyer yolculuklarında sağlam adımlar atmalarını sağlamaktır. Akademi, genç bireyleri sadece başarılı
                bir kariyere hazırlamakla kalmaz, aynı zamanda sosyal sorumluluk bilinci ve toplumsal katılım duyarlılığı da
                kazandırmayı hedefler.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
                Nos Canda One&apos;ın geleceğe yatırım yapma vizyonunun bir yansıması olarak kurulan ve desteklenen
                Nos Canda One Akademi, öğrencilere nitelikli eğitim ve gelişim imkanları sunarak onların potansiyellerini
                en üst düzeye çıkarmayı amaçlar. Nos Canda One&apos;ın köklü geçmişi ve değerleri, akademiye duyulan
                güveni artırır ve öğrencilere sağlam bir eğitim altyapısı sunar.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Illustration (Col span 5) - Full Size & Enlarged */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.3} className="w-full flex justify-center">
              <div className="relative w-full max-w-[520px] aspect-square select-none overflow-hidden transition-transform duration-700 hover:scale-105">
                <Image
                  src="/images/akademi/hakkinda.png"
                  alt="Nos Canda One Akademi Hakkında"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 520px"
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
