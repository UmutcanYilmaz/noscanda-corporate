import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Sosyal ve Kadın Desteği Section
 * 
 * Why: Houses the remaining elements from development support (Sosyal Destek and Kadın Desteği).
 * Features a modern, balanced side-by-side split grid presenting these two essential pillars of social equality.
 */
export function SocialSupport() {
  return (
    <section id="social-kadin-destegi" className="section-padding bg-[var(--bg-secondary)] overflow-hidden relative border-t border-[var(--border-subtle)]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up" distance={30}>
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{
                background: 'rgba(50, 65, 174, 0.05)',
                color: '#3241ae',
                border: '1px solid rgba(50, 65, 174, 0.15)'
              }}
            >
              Sosyal & Kadın Desteği
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#0F2547] leading-[1.25]">
              Toplumsal Eşitlik ve Dayanışma
            </h2>
          </ScrollReveal>
        </div>

        {/* Dual Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Pillar 1: Sosyal Destek */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <ScrollReveal direction="left" distance={40} className="space-y-6">
              <div className="relative w-full max-w-[280px] aspect-[966/1080] mx-auto animate-float">
                <Image
                  src="/images/vakif/gonullu-yardim.png"
                  alt="Sosyal Destek — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#0F2547]">
                  Sosyal Destek
                </h3>
                <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
                  Yaşlılarımıza, engelli vatandaşlarımıza, gazilerimize, şehit çocuklarımıza ve özel bakıma ihtiyaç duyan kişilere yönelik destek programları yürütüyoruz. Protez yardımı, medikal cihaz temini ve rehabilitasyon süreçlerine katkı sağlayarak her an yanlarında oluyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Pillar 2: Kadın Desteği */}
          <div className="space-y-6 flex flex-col justify-between h-full">
            <ScrollReveal direction="right" distance={40} className="space-y-6">
              <div className="relative w-full max-w-[280px] aspect-[966/1080] mx-auto animate-float">
                <Image
                  src="/images/vakif/kadin-destekleme.png"
                  alt="Kadın Desteği — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#0F2547]">
                  Kadın Desteği
                </h3>
                <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
                  Kadınların hedeflerine ulaşmaları için gereken bilgi ve becerileri kazanmalarını sağlıyor, eğitim, meslek edindirme ve girişimcilik projeleriyle onları destekleyerek toplumsal kalkınmada öncü ve bağımsız bir rol oynamalarını amaçlıyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
