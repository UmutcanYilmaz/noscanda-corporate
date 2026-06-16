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
 * Upgraded to match the Vakıf page layout specs:
 * - Alternating bg-[var(--bg-primary)] background.
 * - 50/50 column layout.
 * - Custom pill badge and font-cinzel typography.
 * - Enlarged illustration.
 */
export function SupportProgram() {
  return (
    <section
      id="destek-programi"
      className="py-16 md:py-20 bg-[var(--bg-primary)] font-poppins relative z-10 overflow-hidden"
    >
      {/* Decorative Brand Accent Background Glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* Headings */}
        <div className="mb-16 md:mb-20">
          <ScrollReveal direction="up" distance={30}>
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
              style={{
                background: 'rgba(186, 82, 37, 0.05)',
                color: '#BA5225',
                border: '1px solid rgba(186, 82, 37, 0.15)'
              }}
            >
              Geleceğe Eşit Başlangıç
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] leading-[1.2] max-w-3xl">
              İhtiyaç Sahibi Genç Yetenekler İçin Destek Programımız
            </h2>
            <div className="h-1 w-20 bg-[#BA5225] rounded-full mt-6" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 2x2 Clean Typographic Grid (Col span 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
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
                  
                  <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#212121] mb-3 group-hover:text-[#BA5225] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Right Column: Illustration Panel (Col span 6) */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <ScrollReveal direction="right" distance={40} className="w-full max-w-[320px] md:max-w-[360px] xl:max-w-[400px]">
              <div className="relative w-full aspect-[672/1232] select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/target-audience-ecosystem.png"
                  alt="Gençler İçin Destek Programı"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
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
