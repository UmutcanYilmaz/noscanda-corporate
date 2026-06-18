'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const BENEFITS = [
  {
    image: '/images/akademi/benefit-sector-experience.png',
    title: 'Sektörel Deneyim',
    desc: 'Gerçek projelerde görev alarak iş dünyasının dinamiklerini öğrenme.',
  },
  {
    image: '/images/akademi/benefit-applied-skills.png',
    title: 'Uygulamalı Beceriler',
    desc: 'Atölye çalışmaları ve projelerle problem çözme, takım çalışması ve iletişim gibi kritik becerileri geliştirme.',
  },
  {
    image: '/images/akademi/benefit-mentorship.png',
    title: 'Profesyonel Rehberlik',
    desc: 'Mentorlarımızın bilgi ve tecrübelerinden yararlanarak kariyer hedeflerinizi netleştirme.',
  },
  {
    image: '/images/akademi/why-social-responsibility.png',
    title: 'Sosyal Sorumluluk Bilinci',
    desc: 'Toplumsal projelere katılarak farkındalık kazanma ve topluma değer katma.',
  },
  {
    image: '/images/akademi/benefit-alumni-network.png',
    title: 'Geniş Bir Profesyonel Ağ',
    desc: 'Sektör profesyonelleri, eğitmenler ve diğer katılımcılarla kalıcı bağlantılar kurma.',
  },
  {
    image: '/images/akademi/benefit-project-workshop.png',
    title: 'Somut Proje Deneyimi',
    desc: 'Gerçek iş süreçlerine dahil olarak portfolyonuza ekleyebileceğiniz değerli çıktılar üretme.',
  },
];

/**
 * Benefits Section (#kazanclar) for Nos Canda One | Akademi.
 * Styled with font-cinzel and custom pill badge on white alternating background.
 */
export function Benefits() {
  return (
    <section
      id="kazanclar"
      className="py-20 md:py-24 bg-white font-poppins relative z-10 border-t border-neutral-100/50 overflow-hidden"
    >
      {/* Decorative Brand Accent Background Glow */}
      <div 
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[130px] pointer-events-none z-0"
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
              Kazanımlarımız
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] leading-[1.2]">
              Nos Canda One Akademi&apos;de Neler Kazanacaksınız?
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
                
                {/* Image Container (transparent, cardless illustration) */}
                <div className="relative aspect-[10/7] w-full mx-auto sm:mx-0 mb-6 select-none overflow-hidden transition-all duration-500">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-750"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>

                {/* Content Details */}
                <div className="space-y-2.5">
                  <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#212121] group-hover:text-[#BA5225] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
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
