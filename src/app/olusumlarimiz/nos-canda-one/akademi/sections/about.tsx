'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * About Section (#hakkimizda) for Nos Canda One | Akademi.
 * Redesigned to align with the Vakıf page editorial grid layout:
 * - 50/50 column split.
 * - Custom header pill badge in theme orange.
 * - Cinzel headers.
 * - Separated sub-topics with gradient line dividers.
 * - Enlarged transparent illustration.
 */
export function About() {
  return (
    <section id="hakkimizda" className="py-10 md:py-14 bg-[var(--bg-primary)] overflow-hidden relative font-poppins">
      {/* Decorative Glow Background Element */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(186, 82, 37, 0.12) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* 2-Column Content Layout (Align center to center text with image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title + Topics with separators (Col span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-1.5">
                <span 
                  className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-2 font-semibold"
                  style={{
                    background: 'rgba(186, 82, 37, 0.05)',
                    color: '#BA5225',
                    border: '1px solid rgba(186, 82, 37, 0.15)'
                  }}
                >
                  Hakkımızda
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#212121] leading-[1.2]">
                  Bilgiyle Yüksel, Deneyimle Geleceği İnşa Et!
                </h2>
              </div>
            </ScrollReveal>

            {/* Sub-topics list */}
            <div className="space-y-6 pt-4">
              <ScrollReveal direction="left" distance={40} delay={0.1}>
                <div className="space-y-2">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#BA5225]">
                    Geleceğe Güçlü Rehberlik
                  </h3>
                  <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                    Nos Canda One Akademi&apos;nin temel amacı, bilgi ve deneyim paylaşımını önceliklendirerek
                    öğrencilerinin geleceklerine rehberlik etmek ve kapsamlı programları aracılığıyla genç yeteneklerin
                    kariyer yolculuklarında sağlam adımlar atmalarını sağlamaktır.
                  </p>
                </div>
              </ScrollReveal>

              {/* Custom Separator */}
              <ScrollReveal direction="none">
                <div className="h-px bg-gradient-to-r from-[#BA5225]/15 via-[#BA5225]/5 to-transparent w-full" />
              </ScrollReveal>

              <ScrollReveal direction="left" distance={40} delay={0.2}>
                <div className="space-y-2">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#BA5225]">
                    Nitelikli Eğitim ve Gelişim
                  </h3>
                  <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                    Geleceğe yatırım yapma vizyonunun bir yansıması olarak, öğrencilere nitelikli eğitim ve
                    gelişim imkanları sunarak potansiyellerini en üst düzeye çıkarmayı amaçlarız. Sosyal sorumluluk
                    bilinciyle donanmış liderler yetiştiriyoruz.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Illustration (Col span 6) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[1280/896] select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/about-learning-cycle.png"
                  alt="Nos Canda One Akademi Hakkında"
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
