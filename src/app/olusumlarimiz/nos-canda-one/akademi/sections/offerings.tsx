'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const OFFERINGS = [
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <rect x="3" y="6" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11v3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12.5h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Staj Programları',
    desc: 'Teorik bilgiyi pratik deneyimle birleştirerek kariyer başlangıcını güçlendirir. Sektör süreçlerine doğrudan entegrasyon sunar.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Mentörlük Programları',
    desc: 'Deneyimli mentörlerden rehberlik alarak sektör gelişmelerini takip etme imkanı. Birebir kariyer planlama yol haritaları oluşturur.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Eğitim Bursları',
    desc: 'Eğitim olanaklarını genişletmek için finansal destek sağlar. Başarılı öğrencilerin akademik hedeflerine odaklanmalarını güvenceye alır.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path d="M12 20h.01M19 4H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17v3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20h6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Seminerler',
    desc: 'Bilgi ve sektör trendlerini paylaşan oturumlarla profesyonel büyümeyi destekler. İlham veren başarı öykülerini buluşturur.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Atölye Çalışmaları',
    desc: 'Dinamik öğrenme ortamında beceri geliştirme için uygulamalı aktiviteler sunar. Takım ruhu ve pratik tasarım odaklı yaklaşımlar aşılar.',
  },
  {
    icon: (
      <svg className="w-6 h-6 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sosyal Projeler',
    desc: 'Toplumsal farkındalığı artırmak amacıyla projeler ve bağışlar düzenler. Gençlerin sosyal sorumluluk bilinçlerini aktif kılar.',
  },
];

/**
 * Offerings Section (#imkanlar) for Nos Canda One | Akademi.
 * Upgraded to align with the Vakıf page layout specs:
 * - Alternating bg-[var(--bg-primary)] background.
 * - 50/50 column layout.
 * - Custom pill badge and font-cinzel typography.
 * - Enlarged illustration of offerings collage.
 */
export function Offerings() {
  return (
    <section
      id="imkanlar"
      className="py-16 md:py-20 bg-[var(--bg-primary)] font-poppins relative z-10 border-t border-neutral-100/50 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div 
        className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[550px] h-[550px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Illustration (Col span 6) */}
          <div className="lg:col-span-6 order-last lg:order-first w-full flex justify-center items-center">
            <ScrollReveal direction="left" distance={40} className="w-full max-w-[360px] md:max-w-[420px] xl:max-w-[450px]">
              <div className="relative w-full aspect-[672/1232] select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/target-audience-ecosystem.png"
                  alt="Sunduğumuz İmkanlar"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title + Grid (Col span 6) */}
          <div className="lg:col-span-6 space-y-10">
            <ScrollReveal direction="up" distance={30}>
              <span 
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
                style={{
                  background: 'rgba(186, 82, 37, 0.05)',
                  color: '#BA5225',
                  border: '1px solid rgba(186, 82, 37, 0.15)'
                }}
              >
                Ayrıcalıklar & Fırsatlar
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#212121] leading-[1.2]">
                Sunduğumuz İmkanlar
              </h2>
              <div className="h-1 w-16 bg-[#BA5225] rounded-full mt-6" />
            </ScrollReveal>

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
                    {/* Animated Icon Badge */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 shadow-[0_4px_20px_rgba(186,82,37,0.06)] group-hover:shadow-[0_10px_25px_rgba(186,82,37,0.18)] group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #E9A993 0%, #BA5225 50%, #682E15 100%)',
                      }}
                    >
                      <div className="absolute inset-[1.5px] rounded-[14px] bg-white flex items-center justify-center group-hover:bg-transparent transition-all duration-500">
                        <span className="text-[#BA5225] group-hover:text-white transition-colors duration-500">
                          {offering.icon}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-cinzel text-lg font-bold text-[#212121] mb-2 group-hover:text-[#BA5225] transition-colors duration-300">
                      {offering.title}
                    </h3>
                    
                    <p className="font-body text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed transition-colors duration-300 group-hover:text-[#333333]">
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
