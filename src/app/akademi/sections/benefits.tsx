'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const BENEFITS = [
  {
    image: '/images/akademi/sektoreldeneyim.png',
    title: 'Sektörel Deneyim',
    desc: 'Gerçek projelerde görev alarak iş dünyasının dinamiklerini öğrenme.',
  },
  {
    image: '/images/akademi/uygulamalibeceri.png',
    title: 'Uygulamalı Beceriler',
    desc: 'Atölye çalışmaları ve projelerle problem çözme, takım çalışması ve iletişim gibi kritik becerileri geliştirme.',
  },
  {
    image: '/images/akademi/profesyonelrehberlik.png',
    title: 'Profesyonel Rehberlik',
    desc: 'Mentorlarımızın bilgi ve tecrübelerinden yararlanarak kariyer hedeflerinizi netleştirme.',
  },
  {
    image: '/images/akademi/sosyalsorumluluk.png',
    title: 'Sosyal Sorumluluk Bilinci',
    desc: 'Toplumsal projelere katılarak farkındalık kazanma ve topluma değer katma.',
  },
  {
    image: '/images/akademi/genisprofesyonelag.png',
    title: 'Geniş Bir Profesyonel Ağ',
    desc: 'Sektör profesyonelleri, eğitmenler ve diğer katılımcılarla kalıcı bağlantılar kurma.',
  },
  {
    image: '/images/akademi/somutprojedeneyimi.png',
    title: 'Somut Proje Deneyimi',
    desc: 'Gerçek iş süreçlerine dahil olarak portfolyonuza ekleyebileceğiniz değerli çıktılar üretme.',
  },
];

/**
 * Benefits Section (#kazanclar) for Nos Canda One | Akademi.
 * Updated to scale up illustrations and introduce subtle background accent glows.
 */
export function Benefits() {
  return (
    <section
      id="kazanclar"
      className="py-20 md:py-32 bg-[#FFFFFF] font-poppins relative z-10 border-t border-neutral-100 overflow-hidden"
    >
      {/* Decorative Brand Accent Background Glow */}
      <div 
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-3">
              Kazanımlarımız
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium text-[#212121] leading-[1.2] tracking-tight">
              <span className="text-[#BA5225] font-semibold">Nos Canda One Akademi</span>&apos;de neler kazanacaksınız?
            </h2>
            <div className="h-1 w-16 bg-[#BA5225] rounded-full mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* 3-Column Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {BENEFITS.map((benefit, idx) => (
            <ScrollReveal
              key={benefit.title}
              direction="up"
              distance={30}
              delay={idx * 0.08}
              className="flex"
            >
              <div className="flex flex-col w-full text-center sm:text-left group">
                
                {/* Image Container (full size design, transparent background, enlarged to 340px) */}
                <div className="relative aspect-[16/10] w-full max-w-[340px] mx-auto sm:mx-0 mb-6 select-none pointer-events-none transition-transform duration-500 hover:scale-105">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 340px, 33vw"
                  />
                </div>

                {/* Content Details */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-medium text-[#212121] group-hover:text-[#BA5225] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
