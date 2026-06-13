'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Hero Section (#giris) for Nos Canda One | Akademi.
 * Updated to a premium split layout with custom illustration and accent glowing backdrops.
 */
export function Hero() {
  return (
    <section
      id="giris"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden font-poppins bg-[#FFFFFF] py-16 lg:py-24"
    >
      {/* Decorative Brand Accent Background Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(186, 82, 37, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Value Badges (Col span 7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <ScrollReveal direction="up" distance={20}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(186, 82, 37, 0.08)',
                  color: '#BA5225',
                  border: '1px solid rgba(186, 82, 37, 0.15)',
                }}
              >
                Kariyer Başlangıcı
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#212121] leading-[1.15] tracking-tight">
                <span className="text-[#BA5225] font-semibold">Nos Canda One</span> Akademi ile Kariyerinize Sağlam Başlayın
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <p className="text-base sm:text-lg lg:text-xl text-[#555555] leading-relaxed font-light">
                Öğrencilerin geleceğine ışık tutan, bilgi ve deneyim paylaşımını ön planda tutan Nos Canda One Akademi,
                genç yeteneklerin kariyer yolculuğuna sağlam adımlar atmalarını sağlayacak kapsamlı programlarıyla fark yaratıyor.
              </p>
            </ScrollReveal>

            {/* Feature Pills Row */}
            <ScrollReveal direction="up" distance={30} delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Pill 1 */}
                <div className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-[#F2F2F2]/65 backdrop-blur-sm border border-neutral-100 hover:border-[#BA5225]/20 hover:bg-white transition-all duration-300">
                  <span className="text-xl text-[#BA5225] p-2 bg-[#BA5225]/5 rounded-xl">💼</span>
                  <div>
                    <h4 className="text-xs font-bold text-[#212121] mb-0.5 uppercase tracking-wider">Pratik Deneyim</h4>
                    <p className="text-[11px] text-[#555555] leading-relaxed">
                      Gerçek sektör pratikleriyle.
                    </p>
                  </div>
                </div>

                {/* Pill 2 */}
                <div className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-[#F2F2F2]/65 backdrop-blur-sm border border-neutral-100 hover:border-[#BA5225]/20 hover:bg-white transition-all duration-300">
                  <span className="text-xl text-[#BA5225] p-2 bg-[#BA5225]/5 rounded-xl">🧠</span>
                  <div>
                    <h4 className="text-xs font-bold text-[#212121] mb-0.5 uppercase tracking-wider">Mentorluk</h4>
                    <p className="text-[11px] text-[#555555] leading-relaxed">
                      Uzman rehberliğiyle yön verin.
                    </p>
                  </div>
                </div>

                {/* Pill 3 */}
                <div className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-[#F2F2F2]/65 backdrop-blur-sm border border-neutral-100 hover:border-[#BA5225]/20 hover:bg-white transition-all duration-300">
                  <span className="text-xl text-[#BA5225] p-2 bg-[#BA5225]/5 rounded-xl">🚀</span>
                  <div>
                    <h4 className="text-xs font-bold text-[#212121] mb-0.5 uppercase tracking-wider">Geniş Network</h4>
                    <p className="text-[11px] text-[#555555] leading-relaxed">
                      Sektör liderleriyle tanışın.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Premium Illustration Visual (Col span 5) */}
          <div className="lg:col-span-5 w-full flex justify-center relative">
            {/* Visual Accent Glow behind illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#BA5225]/5 to-transparent blur-[50px] opacity-75 rounded-full pointer-events-none" />
            
            <ScrollReveal direction="right" distance={40} className="w-full max-w-[480px] relative z-10">
              <div className="relative w-full aspect-square select-none pointer-events-none">
                <Image
                  src="/images/akademi/hero.png"
                  alt="Nos Canda One Akademi Illustration"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1023px) 100vw, 480px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
