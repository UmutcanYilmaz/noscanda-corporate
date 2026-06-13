'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const PROGRAM_ITEMS = [
  {
    title: 'Eğitime Tam Destek',
    desc: 'İhtiyaç sahibi, parlak üniversite öğrencilerine yönelik özel eğitim programları sunarak, akademik ve profesyonel gelişimlerinin önündeki engelleri kaldırıyoruz. Belirlenen kriterlere uygun öğrencilerimize, eğitim hayatlarını kolaylaştıracak kapsamlı burs ve destek imkanları sağlıyoruz.',
  },
  {
    title: 'Geleceğe Hazırlık',
    desc: 'Akademik bilginin yanı sıra, mentorluk, stajlar ve atölye çalışmaları ile öğrencilerimizi iş hayatının dinamiklerine hazırlıyor, kişisel ve profesyonel yetkinliklerini geliştiriyoruz. Amacımız sadece başarılı profesyoneller değil, aynı zamanda topluma duyarlı bireyler yetiştirmektir.',
  },
  {
    title: 'Kariyer Köprüsü Oluşturmak',
    desc: 'Programımızı başarıyla tamamlayan yetenekli gençlerimize, Nos Canda bünyesinde veya güçlü networkümüz aracılığıyla kariyer fırsatları sunarak iş hayatına sağlam bir adım atmalarını destekliyoruz.',
  },
  {
    title: 'Hayata Kapsamlı Bakış',
    desc: 'Sunduğumuz imkanlarla gençlerimizi sadece iş hayatına değil, sosyal sorumluluk bilinciyle donatarak hayata daha hazır hale getirmeyi amaçlayarak gelişimlerine katkı sağlıyoruz.',
  },
];

/**
 * Support Program Section (#destek-programi) for Nos Canda One | Akademi.
 * Updated to expand the illustration sizing and apply premium background accents.
 */
export function SupportProgram() {
  return (
    <section
      id="destek-programi"
      className="py-20 md:py-32 bg-[#FFFFFF] font-poppins relative z-10 overflow-hidden"
    >
      {/* Decorative Brand Accent Background Glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Headings */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-3">
              Geleceğe Eşit Başlangıç
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium text-[#212121] leading-[1.2] tracking-tight max-w-3xl">
              İhtiyaç Sahibi Genç Yetenekler İçin Destek Programımız
            </h2>
            <div className="h-1 w-20 bg-[#BA5225] rounded-full mt-6" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: 2x2 Clean Typographic Grid (Col span 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {PROGRAM_ITEMS.map((item, idx) => (
              <ScrollReveal
                key={item.title}
                direction="up"
                distance={30}
                delay={idx * 0.08}
                className="flex"
              >
                <div className="flex flex-col w-full group">
                  {/* Elegant Top Line & Number Indicator */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#BA5225] tracking-widest uppercase">
                      Bölüm 0{idx + 1}
                    </span>
                    <span className="h-px bg-neutral-200 flex-grow group-hover:bg-[#BA5225]/45 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#212121] mb-3 group-hover:text-[#BA5225] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#555555] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: Cream Gradient Illustration Panel (Col span 5) - Enlarged to 500px */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <ScrollReveal direction="right" distance={40} className="w-full max-w-[500px]">
              {/* Full Image design on transparent image - no card box, sits in borderless container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden transition-transform duration-500 hover:scale-105 select-none">
                <Image
                  src="/images/akademi/genclericindestekprogrami.png"
                  alt="Gençler İçin Destek Programı"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 450px"
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
