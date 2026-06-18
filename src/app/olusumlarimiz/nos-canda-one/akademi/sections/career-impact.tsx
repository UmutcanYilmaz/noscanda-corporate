'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const IMPACT_ITEMS = [
  {
    title: 'Öne Çıkan Profil',
    desc: 'İş başvurularınızda sadece teorik bilgiye değil, aynı zamanda edindiğiniz pratik deneyime, sektör bilgisine ve sosyal sorumluluk bilincine sahip olduğunuzu kanıtlayarak profilinizi öne çıkarır.',
  },
  {
    title: 'Gelişmiş Yetkinlikler',
    desc: 'Edindiğiniz problem çözme, iletişim, takım çalışması gibi transfer edilebilir beceriler, sizi farklı roller için daha donanımlı hale getirir.',
  },
  {
    title: 'Değerli Referanslar',
    desc: 'Mentorlarınızdan ve program yöneticilerinden alabileceğiniz güçlü referanslar, profesyonel güvenilirliğinizi artırır.',
  },
  {
    title: 'Sürekli Gelişim Taahhüdü',
    desc: 'Akademi bitse bile bizim kaynaklarımıza ulaşabilir, kendinizi geliştirmeye devam edebilirsiniz.',
  },
];

/**
 * Career Impact Section (#kariyerinize-etkisi) for Nos Canda One | Akademi.
 * Upgraded to align with the Vakıf page layout specs:
 * - Alternating bg-white background.
 * - 50/50 column layout.
 * - Custom pill badge and font-cinzel typography.
 * - Enlarged illustration.
 */
export function CareerImpact() {
  return (
    <section
      id="kariyerinize-etkisi"
      className="py-16 md:py-20 bg-white font-poppins relative z-10 border-t border-neutral-100/50 overflow-hidden"
    >
      {/* Decorative Brand Accent Background Glow */}
      <div 
        className="absolute top-1/2 right-1/4 translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[130px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Description + Bullets (Col span 6) */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="up" distance={30}>
              <span 
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
                style={{
                  background: 'rgba(186, 82, 37, 0.05)',
                  color: '#BA5225',
                  border: '1px solid rgba(186, 82, 37, 0.15)'
                }}
              >
                Kariyer Gelişimi & Sertifikasyon
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] leading-[1.2]">
                Kariyerinize Etkisi
              </h2>
              <div className="h-1 w-16 bg-[#BA5225] rounded-full mt-6 mb-8" />
              
              <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
                Nos Canda One Akademi programlarını tamamladıktan ve süreçleri başarıyla geçtikten sonra,
                size stajlar, mentorluk ve sosyal projeler aracılığıyla kazandığınız kapsamlı becerileri ve deneyimleri
                belgeleyen bir sertifika verilecektir. Bu sertifika, pratik bilgi birikiminizi, sektör farkındalığınızı ve
                profesyonel yetkinliklerinizi kanıtlar, kariyer yolculuğunuzda sizi öne çıkarır.
              </p>
            </ScrollReveal>

            {/* Glowing circular accent bullets list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {IMPACT_ITEMS.map((item, idx) => (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  distance={20}
                  delay={idx * 0.08}
                  className="flex"
                >
                  <div className="flex items-start gap-4">
                    {/* Glowing Bullet Icon */}
                    <div 
                      className="w-5 h-5 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white"
                      style={{
                        background: 'radial-gradient(circle, #E9A993 0%, #BA5225 100%)',
                        boxShadow: '0 0 10px rgba(186, 82, 37, 0.4)',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    <div>
                      <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#212121] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Illustration (Col span 6) */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <ScrollReveal direction="right" distance={40} className="w-full max-w-[580px] xl:max-w-[620px]">
              <div className="relative w-full aspect-[960/672] select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/career-impact-graduation.png"
                  alt="Kariyerinize Etkisi"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
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
