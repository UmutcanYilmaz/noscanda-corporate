import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Toplumsal Birlik Section
 * 
 * Why: Repurposes the contact illustration to deliver a dedicated storytelling block
 * emphasizing the "Biz Olmanın Gücü" brand concept.
 * Features a 1-column parent title and a 2-column details split with transparent floating illustration.
 * Passed 'w-full flex justify-center' to ScrollReveal to prevent flex element collapse.
 */
export function SocialUnity() {
  return (
    <section id="toplumsal-birlik" className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Parent Title (1 Column) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mb-16 md:mb-20">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{
                background: 'rgba(50, 65, 174, 0.05)',
                color: '#3241ae',
                border: '1px solid rgba(50, 65, 174, 0.15)'
              }}
            >
              Biz Olmanın Gücü
            </span>
            <h2 className="font-cinzel text-section-heading md:text-4xl font-bold text-[#0F2547] leading-[1.25]">
              Birlikte Daha Güçlüyüz: Toplumsal Birlik ve Katılım
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content Layout (Image on Right, Topics on Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Topics with separators (Col span 7) */}
          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-[#0F2547]">
                  Toplumsal Birliktelik
                </h3>
                <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Nos Canda One olarak, toplumsal birlikteliğin en güzel örneğini gönüllülerimizle birlikte sergiliyoruz. 
                  Birlikte omuz omuza vererek daha geniş kitlelere ulaşıyor, dayanışma ruhunu her alanda yaşatıyoruz.
                </p>
              </div>
            </ScrollReveal>

            {/* Custom Separator */}
            <ScrollReveal direction="none">
              <div className="h-px bg-gradient-to-r from-[#0F2547]/10 via-[#0F2547]/5 to-transparent w-full" />
            </ScrollReveal>

            <ScrollReveal direction="left" distance={40} delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-cinzel text-xl font-bold text-[#0F2547]">
                  Kolektif Dayanışma
                </h3>
                <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                  Geleceğimizi şekillendirirken kolektif bilincin ve dayanışmanın gücüne inanıyoruz. 
                  Her bir bireyin katkısı, toplumsal refahın kalıcı kılınmasında en önemli etkendir.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Floating Illustration (Col span 5) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[781/641]">
                <Image
                  src="/images/vakif/toplumsal-birlik.png"
                  alt="Toplumsal Birlik — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
