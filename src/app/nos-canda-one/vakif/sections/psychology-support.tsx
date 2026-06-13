import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Psikolojik Destek Section
 * 
 * Why: Dedicated storytelling section for Psychology Support (Psikolojik Destek).
 * Split column layout with text narrative and bullet points on the left, and a large illustration on the right.
 */
export function PsychologySupport() {
  return (
    <section id="psikolojik-destek" className="py-10 md:py-14 bg-[var(--bg-primary)] overflow-hidden relative border-t border-[var(--border-subtle)]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Details & Narrative (Col span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left" distance={40}>
              <div className="space-y-1.5">
                <span 
                  className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full font-semibold mb-2"
                  style={{
                    background: 'rgba(50, 65, 174, 0.05)',
                    color: '#3241ae',
                    border: '1px solid rgba(50, 65, 174, 0.15)'
                  }}
                >
                  Psikolojik Destek
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#0F2547] leading-[1.2]">
                  Ruhsal Sağlık ve İyi Oluş: Psikolojik Destek
                </h2>
                <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  Bireyleri uzman ruh sağlığı profesyonelleri ve danışmanlık olanaklarıyla buluşturarak, zor yaşam süreçlerinde yanlarında oluyor 
                  ve psikolojik iyi oluşlarını destekliyoruz. Toplumsal sağlığın bireysel zihin sağlığıyla başladığına inanıyoruz.
                </p>
              </div>
            </ScrollReveal>

            {/* Sub-initiatives List */}
            <ScrollReveal direction="left" distance={40} delay={0.1}>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(50,65,174,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3241ae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#0F2547] text-lg md:text-xl">Bireysel Danışmanlık Hizmetleri</h4>
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] mt-1">Zorluk yaşayan bireylere gönüllü uzman psikologlar eşliğinde ücretsiz bireysel terapi ve danışmanlık olanağı sunuyoruz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(50,65,174,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3241ae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#0F2547] text-lg md:text-xl">Destek ve Paylaşım Grupları</h4>
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] mt-1">Benzer yaşam deneyimlerinden geçen bireyleri güvenli, yargısız ve dayanışma odaklı paydaş oturumlarında bir araya getiriyoruz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(50,65,174,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3241ae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#0F2547] text-lg md:text-xl">Kriz & Travma Müdahalesi</h4>
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] mt-1">Afet, kaza veya büyük toplumsal krizler sonrasında etkilenen topluluklara hızlı ve yerinde psikososyal ilk yardım desteği iletiyoruz.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Illustration (Col span 6) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <ScrollReveal direction="right" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[966/1080] animate-float">
                <Image
                  src="/images/vakif/psikolojik-yardim.png"
                  alt="Psikolojik Destek — Nos Canda One"
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
