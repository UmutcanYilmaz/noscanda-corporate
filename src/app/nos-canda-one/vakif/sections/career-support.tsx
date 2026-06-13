import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Kariyer Desteği Section
 * 
 * Why: Dedicated storytelling section for Career Support (Kariyer Desteği).
 * Split column layout with illustration on the left and narrative details on the right
 * to maintain alternating layout rhythms.
 */
export function CareerSupport() {
  return (
    <section id="kariyer-destegi" className="py-10 md:py-14 bg-[var(--bg-secondary)] overflow-hidden relative border-t border-[var(--border-subtle)]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Illustration (Col span 6, order-2 on mobile, order-1 on desktop) */}
          <div className="lg:col-span-6 flex justify-center w-full order-2 lg:order-1">
            <ScrollReveal direction="left" distance={40} delay={0.2} className="w-full flex justify-center">
              <div className="relative w-full max-w-[580px] xl:max-w-[620px] aspect-[966/1080] animate-float">
                <Image
                  src="/images/vakif/kariyer-yardimi.png"
                  alt="Kariyer Desteği — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 620px"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Details & Narrative (Col span 6, order-1 on mobile, order-2 on desktop) */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <ScrollReveal direction="right" distance={40}>
              <div className="space-y-1.5">
                <span 
                  className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full font-semibold mb-2"
                  style={{
                    background: 'rgba(50, 65, 174, 0.05)',
                    color: '#3241ae',
                    border: '1px solid rgba(50, 65, 174, 0.15)'
                  }}
                >
                  Kariyer Desteği
                </span>
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#0F2547] leading-[1.2]">
                  İstihdam ve Yetenek Gelişimi: Kariyer Desteği
                </h2>
                <p className="font-body text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
                  İş arayan bireylere yönelik mesleki eğitim programları, özgeçmiş hazırlama atölyeleri ve istihdam kurumları hakkında 
                  bilgi paylaşarak kariyer yollarında destek oluyoruz. Sürdürülebilir kalkınmanın en temel parçasının nitelikli iş gücü olduğuna inanıyoruz.
                </p>
              </div>
            </ScrollReveal>

            {/* Sub-initiatives List */}
            <ScrollReveal direction="right" distance={40} delay={0.1}>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(50,65,174,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3241ae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#0F2547] text-lg md:text-xl">Mesleki Sertifikasyon Programları</h4>
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] mt-1">Katılımcıların iş gücü piyasasındaki rekabetçiliğini artıran sertifikalı meslek edindirme kursları düzenliyoruz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(50,65,174,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3241ae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#0F2547] text-lg md:text-xl">Özgeçmiş ve Mülakat Mentorluğu</h4>
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] mt-1">İnsan kaynakları profesyonelleriyle birlikte adaylara özel CV hazırlama ve mülakat simülasyonları sağlıyoruz.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[rgba(50,65,174,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#3241ae]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#0F2547] text-lg md:text-xl">Sektörel İletişim Ağı</h4>
                    <p className="font-body text-base md:text-lg text-[var(--text-secondary)] mt-1">Farklı sektörlerdeki kurumlarla yaptığımız ortaklıklar sayesinde iş arayanları istihdam imkanlarıyla buluşturuyoruz.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
