'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const WHY_CARDS = [
  {
    image: '/images/akademi/teorivepratik.png',
    title: 'Teori ve Pratik Birleşimi',
    desc: 'Staj ve mentörlük programlarıyla öğrenciler, teorik bilgilerini gerçek iş deneyimiyle pekiştirirler.',
  },
  {
    image: '/images/akademi/surekligelisim.png',
    title: 'Sürekli Gelişim',
    desc: 'Eğitim bursları, seminerler ve atölye çalışmalarıyle öğrenciler, bilgi ve becerilerini sürekli geliştirme fırsatı bulurlar.',
  },
  {
    image: '/images/akademi/profesyonelaglar.png',
    title: 'Profesyonel Ağlar',
    desc: 'Sektör bağlantıları aracılığıyla öğrenciler, değerli iletişim ağları oluşturabilirler.',
  },
  {
    image: '/images/akademi/toplumsalsorumluluk.png',
    title: 'Toplumsal Sorumluluk',
    desc: 'Sosyal projeler ve bağış kampanyalarında yer alarak topluma faydalı olma fırsatı sunar.',
  },
];

/**
 * Why Us Section (#neden-biz) for Nos Canda One | Akademi.
 * Updated to expand the illustration sizing and integrate the accent color elegantly.
 */
export function WhyUs() {
  return (
    <section
      id="neden-biz"
      className="py-20 md:py-32 bg-[#FFFFFF] font-poppins relative z-10 overflow-hidden"
    >
      {/* Background Accent Glow Spots */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[140px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-3">
              Farkımız & Değerlerimiz
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium text-[#212121] leading-[1.2] tracking-tight">
              Neden <span className="text-[#BA5225] font-semibold">Nos Canda One Akademi</span>?
            </h2>
            <div className="h-1 w-16 bg-[#BA5225] rounded-full mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* 4 Columns Transparent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {WHY_CARDS.map((card, idx) => (
            <ScrollReveal
              key={card.title}
              direction="up"
              distance={30}
              delay={idx * 0.1}
              className="flex"
            >
              <div className="flex flex-col w-full text-center group">
                {/* Premium Image Card Wrapper */}
                <div className="relative aspect-[4/3] w-full mx-auto mb-6 select-none overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>

                {/* Content Block */}
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-[#212121] group-hover:text-[#BA5225] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#555555] leading-relaxed font-light">
                    {card.desc}
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
