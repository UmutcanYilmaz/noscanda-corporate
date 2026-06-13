'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Contact CTA Section (#iletisim) for Nos Canda One | Akademi.
 * Designed with a transparent visual layout, removing boxed contact blocks.
 */
export function ContactCTA() {
  return (
    <section
      id="iletisim"
      className="py-20 md:py-32 bg-[#FFFFFF] font-poppins relative z-10 border-t border-neutral-100 overflow-hidden"
    >
      {/* Decorative Radial Glow */}
      <div 
        className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/3 w-[500px] h-[500px] rounded-full opacity-35 blur-[120px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(186, 82, 37, 0.12) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography Block (Col span 7) */}
          <div className="md:col-span-7 space-y-6">
            <ScrollReveal direction="up" distance={30}>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block mb-3">
                İletişime Geçin
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium text-[#212121] leading-[1.2] tracking-tight">
                Aklınıza takılan bir nokta mı var?
              </h2>
              <div className="h-1 w-16 bg-[#BA5225] rounded-full mt-6 mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-light">
                Ekibimiz Nos Canda One Akademi hakkında sorularınızı yanıtlamak, program detaylarını paylaşmak ve sizinle görüşmek için hazır.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Visual (Col span 5) - Enlarged to 480px */}
          <div className="md:col-span-5 w-full flex justify-center">
            <ScrollReveal direction="right" distance={40} className="w-full max-w-[480px]">
              {/* Full Image design on transparent image - no card border/background box */}
              <div className="relative w-full aspect-square select-none overflow-hidden transition-transform duration-700 hover:scale-105">
                <Image
                  src="/images/akademi/sorulariniziiletin.png"
                  alt="Aklınıza takılanları iletin"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
