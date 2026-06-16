'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const AUDIENCE_ITEMS = [
  'Kariyerine güçlü bir başlangıç yapmak isteyen üniversite öğrencileri',
  'Öğrenirken topluma katkıda bulunmayı önemseyenler',
  'Teorik bilgisini sektördeki pratik uygulamalarla pekiştirmeyi hedefleyenler',
  'Profesyonel gelişimine yatırım yapmak ve network oluşturmak isteyenler',
  'Alanında deneyimli profesyonellerden mentorluk almak isteyen genç yetenekler',
  'Kendini sadece mesleki olarak değil, kişisel yetkinlikler açısından da geliştirmeyi amaçlayanlar',
];

/**
 * Target Audience Section (#hedef-kitle) for Nos Canda One | Akademi.
 * Redesigned checklist layout with a tall, custom vertical illustration side-by-side:
 * - 50/50 grid alignment.
 * - Custom pill badge and font-cinzel headers.
 * - Enlarged vertical profile image with aspect-ratio preservation.
 * - Alternating white background.
 */
export function TargetAudience() {
  return (
    <section
      id="hedef-kitle"
      className="py-16 md:py-20 bg-white font-poppins relative z-10"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal direction="up" distance={30}>
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
              style={{
                background: 'rgba(186, 82, 37, 0.05)',
                color: '#BA5225',
                border: '1px solid rgba(186, 82, 37, 0.15)'
              }}
            >
              Katılım Şartları & Profil
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#212121] leading-tight">
              Nos Canda One Akademi&apos;ye Kimler Katılabilir?
            </h2>
            <div className="h-1 w-16 bg-[#BA5225] rounded-full mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* Split Grid: Checklist Left, Illustration Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Checklist (Col span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-col gap-y-6 md:gap-y-8">
              {AUDIENCE_ITEMS.map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  distance={25}
                  delay={idx * 0.08}
                  className="flex"
                >
                  <div className="flex items-start gap-4 w-full group">
                    {/* Custom Checkmark Bullet */}
                    <div className="w-7 h-7 rounded-full bg-[#BA5225]/10 flex-shrink-0 flex items-center justify-center text-[#BA5225] group-hover:bg-[#BA5225] group-hover:text-white transition-colors duration-300 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          {/* Right Column: 4:3 illustration (Col span 6) */}
          <div className="lg:col-span-6 flex justify-center w-full items-center">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[1280/896] select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/support-program-charity.png"
                  alt="Nos Canda One Akademi Katılım Profili"
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
