'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const WHY_CARDS = [
  {
    image: '/images/akademi/why-theory-practice.png',
    title: 'Teori ve Pratik Birleşimi',
    desc: 'Staj ve mentörlük programlarıyla öğrenciler, teorik bilgilerini gerçek iş deneyimiyle pekiştirirler.',
  },
  {
    image: '/images/akademi/why-continuous-learning.png',
    title: 'Sürekli Gelişim',
    desc: 'Eğitim bursları, seminerler ve atölye çalışmalarıyla öğrenciler, bilgi ve becerilerini sürekli geliştirme fırsatı bulurlar.',
  },
  {
    image: '/images/akademi/why-professional-networks.png',
    title: 'Profesyonel Ağlar',
    desc: 'Sektör bağlantıları aracılığıyla öğrenciler, değerli iletişim ağları oluşturabilirler.',
  },
  {
    image: '/images/akademi/why-social-responsibility.png',
    title: 'Toplumsal Sorumluluk',
    desc: 'Sosyal projeler ve bağış kampanyalarında yer alarak topluma faydalı olma fırsatı sunar.',
  },
];

/**
 * Why Us Section (#neden-biz) for Nos Canda One | Akademi.
 * Updated to use font-cinzel, custom pill badge, and refined layout elements.
 */
export function WhyUs() {
  return (
    <section
      id="neden-biz"
      className="py-20 md:py-24 bg-white font-poppins relative z-10 overflow-hidden"
    >
      {/* Background Accent Glow Spots */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05] blur-[140px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal direction="up" distance={30}>
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
              style={{
                background: 'rgba(186, 82, 37, 0.05)',
                color: '#BA5225',
                border: '1px solid rgba(186, 82, 37, 0.15)'
              }}
            >
              Farkımız & Değerlerimiz
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#212121] leading-[1.2]">
              Neden Nos Canda One Akademi?
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
                {/* Premium Image Wrapper */}
                <div className="relative aspect-[10/7] w-full mx-auto mb-6 select-none overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-750"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>

                {/* Content Block */}
                <div className="space-y-3">
                  <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#212121] group-hover:text-[#BA5225] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
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
