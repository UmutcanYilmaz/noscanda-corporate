import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — "Bir Kutu Sevgi" Intro Section
 * 
 * Why: Restructured to feature a 1-column parent title spanning full-width, followed by
 * a 2-column layout below. Placing the illustration on the left and the detailed topics on the right
 * creates an alternating layout rhythm relative to the About section, preserving storytelling flow.
 * Passed 'w-full flex justify-center' to ScrollReveal to prevent flex collapse of the absolute Image container.
 * Navy Blue accenting matches the primary visual weight of the illustrations.
 */
export function BirKutuSevgi() {
  return (
    <section
      id="bir-kutu-sevgi"
      className="py-10 md:py-14 section-warm border-t border-[var(--border-subtle)] overflow-hidden relative"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* 2-Column Content Layout (Image on Left, Topics on Right - Align center to center text with image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Transparent Floating Illustration (Col span 6) */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 w-full">
            <ScrollReveal direction="left" distance={40} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[966/1080]">
                <Image
                  src="/images/vakif/bir-kutu-sevgi.png"
                  alt="Bir Kutu Sevgi — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Title + Topics with separators (Col span 6, order-1 on desktop to keep visual balance) */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <ScrollReveal direction="right" distance={40}>
              <div className="space-y-1.5">
                <span 
                  className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-2 font-semibold"
                  style={{
                    background: 'rgba(50, 65, 174, 0.05)',
                    color: '#3241ae',
                    border: '1px solid rgba(50, 65, 174, 0.15)'
                  }}
                >
                  Bir Kutu Sevgi
                </span>
                <div className="relative flex items-start gap-4">
                  <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#0F2547] leading-[1.2]">
                    &ldquo;Bir Kutu Sevgi&rdquo;, vakfımızın temel yardım felsefesini temsil eder: İhtiyaç duyulan her alanda özenle ve sevgiyle destek sunmak.
                  </h2>
                  {/* Decorative leaf flourish with hover rotate interaction */}
                  <div className="relative flex-shrink-0 cursor-help group pt-1 hidden sm:block">
                    <Image
                      src="/images/vakif/beeco4-home-sep1.svg"
                      alt=""
                      width={36}
                      height={26}
                      className="opacity-70 transition-transform duration-700 ease-out group-hover:rotate-[15deg]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Sub-topics list */}
            <div className="space-y-6 pt-4">
              <ScrollReveal direction="right" distance={40} delay={0.1}>
                <div className="space-y-2">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#0F2547]">
                    Kapsamlı Yardım Ağı
                  </h3>
                  <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                    Bu yaklaşımımız, gıda, giyim, hijyen gibi temel ihtiyaçlardan başlayarak eğitim,
                    sağlık, kariyer ve toplumsal gelişime kadar uzanan geniş bir yelpazeyi kapsar.
                  </p>
                </div>
              </ScrollReveal>

              {/* Custom Separator */}
              <ScrollReveal direction="none">
                <div className="h-px bg-gradient-to-r from-transparent via-[#0F2547]/10 to-transparent w-full" />
              </ScrollReveal>

              <ScrollReveal direction="right" distance={40} delay={0.2}>
                <div className="space-y-2">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#0F2547]">
                    Umut Yeşerten Dokunuşlar
                  </h3>
                  <p className="font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                    Amacımız, her bir yardımın sadece bir ihtiyacı karşılamakla kalmayıp, aynı zamanda
                    umudu yeşertmesi ve kalıcı bir iyileşmeye kapı aralamasıdır.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
