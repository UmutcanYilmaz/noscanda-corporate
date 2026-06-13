'use client';

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
 * Redesigned checklist removing box envelopes for a spacious typographic layout.
 */
export function TargetAudience() {
  return (
    <section
      id="hedef-kitle"
      className="py-20 md:py-32 bg-[#F2F2F2] font-poppins relative z-10"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-3">
              Katılım Şartları & Profil
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#212121] leading-tight">
              <span className="text-[#BA5225] font-semibold">Nos Canda One Akademi</span>&apos;ye kimler katılabilir?
            </h2>
            <div className="h-1 w-16 bg-[#BA5225] rounded-full mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* 2-Column Grid Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {AUDIENCE_ITEMS.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              distance={25}
              delay={idx * 0.08}
              className="flex"
            >
              <div className="flex items-start gap-4 w-full group">
                {/* Custom Checkmark Bullet (no card boxes, sits directly on background) */}
                <div className="w-6 h-6 rounded-full bg-[#BA5225]/10 flex-shrink-0 flex items-center justify-center text-[#BA5225] group-hover:bg-[#BA5225] group-hover:text-white transition-colors duration-300 mt-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <p className="text-base sm:text-lg text-[#333333] font-light leading-relaxed">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
