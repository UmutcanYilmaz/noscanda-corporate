'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const TIMELINE_STEPS = [
  {
    num: '01',
    title: 'Başvuru ve Seçme',
    desc: 'Programa katılmak isteyenler, online form doldurarak ve belgelerini sunarak başvurur. Seçme süreci, uzmanlar tarafından yürütülür ve başarılı adaylar programa kabul edilir.',
  },
  {
    num: '02',
    title: 'Oryantasyon',
    desc: 'Kabul edilenler, bir oryantasyon programı ile tanıştırılır. Programın hedefleri, beklentiler ve kurallar bu aşamada paylaşılır.',
  },
  {
    num: '03',
    title: 'Pratik Deneyimler',
    desc: 'Katılımcılar, staj ve iş deneyimi programlarına katılır. Mesleki becerilerini gerçek projelerde geliştirme fırsatı bulurlar.',
  },
  {
    num: '04',
    title: 'Mentorluk Hizmeti',
    desc: 'Her katılımcı, sektör uzmanı bir mentorla eşleştirilir. Mesleki rehberlik ve birebir destek alırlar.',
  },
  {
    num: '05',
    title: 'Atölye ve Seminerler',
    desc: 'Çeşitli atölye ve seminerler düzenlenir. Katılımcılar, yenilikçi beceriler ve güncel bilgiler edinir.',
  },
  {
    num: '06',
    title: 'Sosyal Sorumluluk Projeleri',
    desc: 'Katılımcılar, topluma katkıda bulunmak için projelere katılır. Liderlik ve takım çalışması becerilerini geliştirirler.',
  },
  {
    num: '07',
    title: 'Değerlendirme ve Geri Besleme',
    desc: 'Performans düzenli olarak incelenir, geri besleme ile gelişim desteklenir.',
  },
];

const PILL_BADGES = [
  { icon: '🛠️', text: 'Pratikle Gelişim' },
  { icon: '🤝', text: 'Mentorluk Desteği' },
  { icon: '🌱', text: 'Sosyal Katkı' },
];

/**
 * Journey Timeline Section (#gelisim-yolculugu) for Nos Canda One | Akademi.
 * Redesigned to support:
 * - Alternating bg-[var(--bg-primary)] background.
 * - 50/50 split column layout.
 * - Custom pill badge and font-cinzel typography.
 * - Larger vertical success stairs illustration.
 */
export function JourneyTimeline() {
  return (
    <section
      id="gelisim-yolculugu"
      className="py-16 md:py-20 bg-[var(--bg-primary)] font-poppins relative z-10 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Timeline (Col span 6) */}
          <div className="lg:col-span-6 w-full order-last lg:order-first relative pl-6 md:pl-10">
            {/* Connecting Line Track */}
            <div className="absolute left-[30px] md:left-[34px] top-6 bottom-6 w-0.5 bg-[#BA5225]/20" />

            <div className="space-y-0">
              {TIMELINE_STEPS.map((step, idx) => {
                const isLast = idx === TIMELINE_STEPS.length - 1;
                return (
                  <ScrollReveal
                    key={step.num}
                    direction="up"
                    distance={25}
                    delay={idx * 0.05}
                    className="flex gap-6 group"
                  >
                    {/* Circle Node */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#BA5225]/30 bg-white flex-shrink-0 flex items-center justify-center text-[#BA5225] font-semibold text-sm md:text-base relative z-10 group-hover:bg-[#BA5225] group-hover:text-white transition-all duration-300 shadow-sm">
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div className={`flex-grow ${isLast ? 'pb-0' : 'pb-10 md:pb-12'}`}>
                      <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#212121] mb-2 group-hover:text-[#BA5225] transition-colors duration-300 pt-1.5 md:pt-2.5">
                        {step.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Heading + Description + Badges (Col span 6) */}
          <div className="lg:col-span-6 lg:sticky lg:top-[160px] space-y-8">
            <ScrollReveal direction="up" distance={30}>
              <span 
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
                style={{
                  background: 'rgba(186, 82, 37, 0.05)',
                  color: '#BA5225',
                  border: '1px solid rgba(186, 82, 37, 0.15)'
                }}
              >
                Süreç & Adımlar
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] leading-[1.2]">
                Gelişim Yolculuğunuz
              </h2>
              <div className="h-1 w-16 bg-[#BA5225] rounded-full mt-6 mb-8" />
            </ScrollReveal>

            {/* Pill Badges */}
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {PILL_BADGES.map((pill) => (
                  <span
                    key={pill.text}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BA5225]/10 text-xs sm:text-sm font-medium text-[#333333] shadow-sm hover:border-[#BA5225]/20 hover:shadow-md transition-all duration-300"
                  >
                    <span>{pill.icon}</span>
                    <span>{pill.text}</span>
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Description Copy */}
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="font-body text-base text-[var(--text-secondary)] leading-relaxed space-y-4">
                <p>
                  Gelişim Yolculuğunuz, Nos Canda One Akademi&apos;nin genç yetenekleri iş dünyasına hazırlama ve
                  kişisel gelişimlerini destekleme misyonunu yansıtan kapsamlı bir süreçtir. Bu yolculuk, başvuru
                  aşamasından sertifika almaya kadar uzanan adımlarla, teorik bilgiyi pratik deneyimle birleştirir.
                </p>
                <p>
                  Katılımcılar, stajlar, mentorluk, atölyeler ve sosyal sorumluluk projeleri aracılığıyla hem mesleki
                  beceriler kazanır hem de profesyonel ağlarını genişletir. Her aşama, katılımcıların potansiyellerini
                  keşfetmelerine ve kariyer hedeflerine ulaşmalarına yardımcı olmak için özenle tasarlanmıştır.
                </p>
              </div>
            </ScrollReveal>

            {/* Visual illustration of success stairs */}
            <ScrollReveal direction="up" distance={30} delay={0.3} className="w-full flex justify-center pt-6">
              <div className="relative w-full max-w-[340px] xl:max-w-[380px] aspect-[480/880] select-none overflow-hidden transition-transform duration-700 hover:scale-102">
                <Image
                  src="/images/akademi/journey-timeline-stairs.png"
                  alt="Gelişim Yolculuğu Adımları"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
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
