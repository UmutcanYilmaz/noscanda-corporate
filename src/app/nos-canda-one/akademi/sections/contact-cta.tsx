'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Contact CTA Section (#iletisim) for Nos Canda One | Akademi.
 * Upgraded to match the Vakıf page layout specs:
 * - Clean white background.
 * - 50/50 split column layout.
 * - Custom pill badge and font-cinzel typography.
 * - Large contact question illustration.
 * - Call-to-action button leading to /iletisim.
 */
export function ContactCTA() {
  return (
    <section
      id="iletisim"
      className="py-16 md:py-20 bg-white font-poppins relative z-10 border-t border-neutral-100/50 overflow-hidden"
    >
      {/* Decorative Radial Glow */}
      <div 
        className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/3 w-[500px] h-[500px] rounded-full opacity-35 blur-[120px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(186, 82, 37, 0.1) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography Block (Col span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" distance={30}>
              <span 
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
                style={{
                  background: 'rgba(186, 82, 37, 0.05)',
                  color: '#BA5225',
                  border: '1px solid rgba(186, 82, 37, 0.15)'
                }}
              >
                İletişime Geçin
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] leading-[1.2]">
                Aklınıza Takılan Bir Nokta Mı Var?
              </h2>
              <div className="h-1 w-16 bg-[#BA5225] rounded-full mt-6 mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <p className="font-body text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Ekibimiz Nos Canda One Akademi hakkında sorularınızı yanıtlamak, program detaylarını paylaşmak ve sizinle görüşmek için hazır.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.15}>
              <div className="pt-4">
                <Link 
                  href="/iletisim" 
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full font-gothic text-[0.8125rem] tracking-[0.18em] uppercase text-white hover:text-white/95 transition-all duration-300 min-h-[44px] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: '#BA5225',
                  }}
                >
                  Bize Ulaşın
                </Link>
              </div>
            </ScrollReveal>
          </div>
          {/* Right Column: Transparent Visual (Col span 6) */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <ScrollReveal direction="right" distance={40} className="w-full max-w-[420px] md:max-w-[480px]">
              <div className="relative w-full aspect-square select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/contact-questions.png"
                  alt="Aklınıza takılanları iletin"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
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
