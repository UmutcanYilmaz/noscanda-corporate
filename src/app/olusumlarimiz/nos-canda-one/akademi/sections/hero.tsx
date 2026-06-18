'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Hero Section (#giris) for Nos Canda One | Akademi.
 * Styled to match the Vakıf page Hero style with a boxed design:
 * Uses transparent background (rendered inside boxed container), custom pill badge,
 * font-garet header, 50/50 column layout, dot matrix accent pattern behind illustration,
 * and enlarged illustration with object-contain.
 */
export function Hero() {
  return (
    <section
      id="giris"
      className="relative overflow-hidden bg-transparent min-h-[70vh] md:min-h-[74vh] lg:min-h-[78vh] flex items-center w-full"
    >
      {/* Decorative premium radial ambient glows inside the card */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#BA5225]/[0.04] rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-[#BA5225]/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        {/* Left Column: Copy & Value Badges (Col span 6) */}
        <div className="lg:col-span-6 space-y-8">
          <ScrollReveal direction="left" distance={50} scale={true}>
            <div className="space-y-6">
              <span
                className="inline-block font-gothic text-[0.72rem] tracking-[0.3em] uppercase px-6 py-2.5 rounded-full font-semibold"
                style={{
                  background: 'rgba(186, 82, 37, 0.06)',
                  color: '#BA5225',
                  border: '1px solid rgba(186, 82, 37, 0.18)',
                }}
              >
                Kariyer Başlangıcı
              </span>
              <h1 className="font-garet text-[2.1rem] sm:text-[2.6rem] md:text-[3.0rem] lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold text-[#212121] leading-[1.12] tracking-tight">
                <span className="text-[#BA5225]">Nos Canda One</span> Akademi ile<br />
                Kariyerinize Sağlam Başlayın
              </h1>
              <div className="w-16 h-1 bg-[#BA5225] rounded-full opacity-80" />
              <p className="font-body text-lg md:text-xl lg:text-2xl text-[#212121] font-semibold leading-relaxed max-w-2xl">
                Öğrencilerin geleceğine ışık tutan, bilgi ve deneyim paylaşımını ön planda tutan Akademi,
                genç yeteneklerin kariyer yolculuğuna sağlam adımlar atmasını sağlayacak programlar sunuyor.
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Pills Row */}
          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Pill 1 */}
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-[#BA5225]/20 hover:bg-white transition-all duration-300">
                <span className="text-lg w-fit p-1.5 bg-[#BA5225]/5 rounded-lg">💼</span>
                <div>
                  <h4 className="text-xs font-bold text-[#212121] mb-0.5 uppercase tracking-wider">Pratik Deneyim</h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    Gerçek sektör pratikleriyle.
                  </p>
                </div>
              </div>

              {/* Pill 2 */}
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-[#BA5225]/20 hover:bg-white transition-all duration-300">
                <span className="text-lg w-fit p-1.5 bg-[#BA5225]/5 rounded-lg">🧠</span>
                <div>
                  <h4 className="text-xs font-bold text-[#212121] mb-0.5 uppercase tracking-wider">Mentorluk</h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    Uzman rehberliğiyle yön verin.
                  </p>
                </div>
              </div>

              {/* Pill 3 */}
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-[#BA5225]/20 hover:bg-white transition-all duration-300">
                <span className="text-lg w-fit p-1.5 bg-[#BA5225]/5 rounded-lg">🚀</span>
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

        {/* Right Column: Hero Illustration Visual (Col span 6) */}
        <div className="lg:col-span-6 flex justify-center w-full">
          <ScrollReveal direction="right" distance={50} delay={0.2} className="w-full flex justify-center">
            <div className="relative w-full max-w-[500px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] aspect-square flex items-center justify-center p-6 select-none">
              {/* Dot Grid background pattern behind the illustration using accent color #BA5225 */}
              <div
                className="absolute inset-0 opacity-[0.15] -z-10 rounded-2xl pointer-events-none select-none"
                style={{
                  backgroundImage: 'radial-gradient(#BA5225 1.8px, transparent 1.8px)',
                  backgroundSize: '18px 18px',
                }}
              />
              <Image
                src="/images/akademi/hero-campus.png"
                alt="Nos Canda One Akademi"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
