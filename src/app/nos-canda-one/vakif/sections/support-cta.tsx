import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — "Bize Destek Olun" CTA Section
 * 
 * Why: Restructured to feature a 1-column parent header spanning full-width, followed by
 * a 2-column detailed split below with transparent floating illustration.
 * Passed 'w-full flex justify-center' to ScrollReveal to prevent flex size collapse.
 * The secondary duplicate contact banner is removed as one contact zone is sufficient,
 * simplifying the layout and focusing the reader on direct engagement.
 * Navy Blue accenting matches the primary visual weight of the illustrations.
 */
export function SupportCTA() {
  return (
    <section id="iletisim" className="py-10 md:py-14 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      {/* Subtle background gradient features */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#0F2547]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[var(--color-gold)]/[0.02] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Parent Title (1 Column) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mb-4">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-4 font-semibold"
              style={{
                background: 'rgba(50, 65, 174, 0.05)',
                color: '#3241ae',
                border: '1px solid rgba(50, 65, 174, 0.15)'
              }}
            >
              Bize Destek Olun
            </span>
            <h2 className="font-cinzel text-section-heading md:text-4xl font-bold text-[#0F2547] leading-[1.25]">
              İyiliğe Ortak Olun!
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content Layout (Align start to remove empty gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Detailed text and button (Col span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-6">
                <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  Projelerimizi sürdürebilmek ve daha fazla hayata dokunabilmek için sizin desteğinize
                  ihtiyacımız var. Bağışlarınızla veya gönüllü olarak katılımınızla fark yaratabilirsiniz.
                </p>
                <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  Birlikte atacağımız her küçük adım, toplumsal dönüşümde büyük bir dalgaya dönüşecektir. 
                  Siz de Nos Canda One ailesine katılın, yarınları birlikte inşa edelim.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="pt-4">
                <Link 
                  href="/iletisim" 
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full font-gothic text-[0.8125rem] tracking-[0.18em] uppercase text-white hover:text-white/95 transition-all duration-300 min-h-[44px] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: '#3241ae',
                  }}
                >
                  Bize Ulaşın
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Floating Graphic (Col span 6) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[966/1080]">
                <Image
                  src="/images/vakif/iletisime-gecin.png"
                  alt="Bize Destek Olun — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 620px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
