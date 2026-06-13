'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const OFFERINGS = [
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.22-.821-2.278-2.002-2.51l-3.32-.65a12.062 12.062 0 00-5.856 0l-3.32.65a2.473 2.473 0 00-2.002 2.51" />
      </svg>
    ),
    title: 'Staj Programları',
    desc: 'Teorik bilgiyi pratik deneyimle birleştirerek kariyer başlangıcını güçlendirir. Sektör süreçlerine doğrudan entegrasyon sunar.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20.8M4.121 18.548a9.337 9.337 0 014.121.952 9.38 9.38 0 002.625.372v-.109A11.386 11.386 0 005.088 19.12v.008a4.125 4.125 0 01-7.533-2.493M10.09 16.058a9.38 9.38 0 012.625.372 9.337 9.337 0 014.121-.952 4.125 4.125 0 00-7.533-2.493m0 3.073v-.003c0-1.113-.285-2.16-.786-3.07M8.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm11.25 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-5.25 3a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Mentörlük Programları',
    desc: 'Deneyimli mentörlerden rehberlik alarak sektör gelişmelerini takip etme imkanı. Birebir kariyer planlama yol haritaları oluşturur.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41" />
      </svg>
    ),
    title: 'Eğitim Bursları',
    desc: 'Eğitim olanaklarını genişletmek için finansal destek sağlar. Başarılı öğrencilerin akademik hedeflerine odaklanmalarını güvenceye alır.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    title: 'Seminerler',
    desc: 'Bilgi ve sektör trendlerini paylaşan oturumlarla profesyonel büyümeyi destekler. İlham veren başarı öykülerini buluşturur.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 1021 17.25l-5.83-5.83m-3.75 3.75a2.67 2.67 0 01-3.75-3.75l5.83-5.83M11.42 15.17l3.75-3.75M11.42 15.17l-3.75 3.75m3.75-3.75l3.75 3.75m-7.5-7.5l5.83-5.83A2.67 2.67 0 003 6.75L8.83 12.5m-5.83-5.83a2.67 2.67 0 013.75 3.75m0-3.75l-3.75 3.75m3.75-3.75l3.75 3.75" />
      </svg>
    ),
    title: 'Atölye Çalışmaları',
    desc: 'Dinamik öğrenme ortamında beceri geliştirme için uygulamalı aktiviteler sunar. Takım ruhu ve pratik tasarım odaklı yaklaşımlar aşılar.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Sosyal Projeler',
    desc: 'Toplumsal farkındalığı artırmak amacıyla projeler ve bağışlar düzenler. Gençlerin sosyal sorumluluk bilinçlerini aktif kılar.',
  },
];

/**
 * Offerings Section (#imkanlar) for Nos Canda One | Akademi.
 * Upgraded with premium micro-animations, color shifting icons, and full-size expanded illustration.
 */
export function Offerings() {
  return (
    <section
      id="imkanlar"
      className="py-20 md:py-32 bg-[#FFFFFF] font-poppins relative z-10 border-t border-neutral-100 overflow-hidden"
    >
      {/* Decorative background glow using the accent orange color */}
      <div 
        className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[550px] h-[550px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Illustration (Col span 5) - Expanded to full-size */}
          <div className="lg:col-span-5 order-last lg:order-first w-full flex justify-center">
            <ScrollReveal direction="left" distance={40} className="w-full max-w-[500px]">
              {/* Full Image design on transparent image - no card border/background box, scaled up */}
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] select-none overflow-hidden transition-transform duration-700 hover:scale-105">
                <Image
                  src="/images/akademi/sundugumuzimkanlar.png"
                  alt="Sunduğumuz İmkanlar"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title + Grid (Col span 7) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <ScrollReveal direction="up" distance={30}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-3">
                  Ayrıcalıklar & Fırsatlar
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium text-[#212121] leading-[1.2] tracking-tight">
                  Sunduğumuz İmkanlar
                </h2>
                <div className="h-1 w-16 bg-[#BA5225] rounded-full mt-6" />
              </ScrollReveal>
            </div>

            {/* 6 Grid (2 columns, dynamic cardless interactive items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {OFFERINGS.map((offering, idx) => (
                <ScrollReveal
                  key={offering.title}
                  direction="up"
                  distance={25}
                  delay={idx * 0.05}
                >
                  <div className="flex flex-col group cursor-default">
                    {/* Animated Icon Badge: Shifts background & icon color on hover */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 shadow-[0_4px_20px_rgba(186,82,37,0.06)] group-hover:shadow-[0_10px_25px_rgba(186,82,37,0.18)] group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #E9A993 0%, #BA5225 50%, #682E15 100%)',
                      }}
                    >
                      {/* Inner mask to create borders and hover reveal */}
                      <div className="absolute inset-[1.5px] rounded-[14px] bg-white flex items-center justify-center group-hover:bg-transparent transition-all duration-500">
                        <span className="text-[#BA5225] group-hover:text-white transition-colors duration-500">
                          {offering.icon}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-medium text-[#212121] mb-2 group-hover:text-[#BA5225] transition-colors duration-300">
                      {offering.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light transition-colors duration-300 group-hover:text-[#333333]">
                      {offering.desc}
                    </p>

                    {/* Interactive Animated Underline Link */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#BA5225] mt-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <span>Detayları İncele</span>
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
