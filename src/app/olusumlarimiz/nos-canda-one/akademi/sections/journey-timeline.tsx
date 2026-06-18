'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from '@/components/core/ScrollReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
 * 
 * Why: We implement a scroll-scrubbed timeline animation using GSAP ScrollTrigger to tie step node states 
 * and line progression directly to viewport scroll coordinates. This provides a premium responsive 
 * storytelling interaction. We animatively transform node scales and track heights directly via transform scaleY 
 * to prevent layout reflow thrashing. Garbage collection of triggers is handled dynamically in cleanup.
 */
export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !progressLineRef.current) return;

    const steps = containerRef.current.querySelectorAll('.timeline-step');

    const ctx = gsap.context(() => {
      // Create a master scroll-bound scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 0.5,
        },
      });

      // Animate the height of the orange active line via scaleY
      tl.to(progressLineRef.current, {
        scaleY: 1,
        ease: 'none',
        duration: 1,
      }, 0);

      // Distribute animations across steps based on timeline progress
      steps.forEach((step, idx) => {
        const circleNode = step.querySelector('.timeline-circle');
        const contentNode = step.querySelector('.timeline-content');
        
        const ratio = idx / (steps.length - 1);
        const triggerTime = ratio * 0.95;

        // Circle node activation tween
        tl.to(circleNode, {
          backgroundColor: '#BA5225',
          borderColor: '#BA5225',
          color: '#ffffff',
          scale: 1.12,
          boxShadow: '0 0 16px rgba(186, 82, 37, 0.4)',
          duration: 0.15,
          ease: 'power1.out',
        }, triggerTime);

        // Text content fade & slide-in tween
        tl.to(contentNode, {
          opacity: 1,
          x: 0,
          duration: 0.15,
          ease: 'power1.out',
        }, triggerTime);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gelisim-yolculugu"
      className="py-16 md:py-20 bg-[var(--bg-primary)] font-poppins relative z-10 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Timeline (Col span 6) */}
          <div className="lg:col-span-6 w-full order-last lg:order-first relative pl-6 md:pl-10">
            <div ref={containerRef} className="space-y-0 relative">
              {/* Connecting Line Track (dimmed/gray track) */}
              <div className="absolute left-[30px] md:left-[34px] top-6 bottom-6 w-0.5 bg-neutral-200" />

              {/* Active Growing progress line (orange track) */}
              <div
                ref={progressLineRef}
                className="absolute left-[30px] md:left-[34px] top-6 bottom-6 w-0.5 bg-[#BA5225] origin-top scale-y-0 z-10"
                style={{ transformOrigin: 'top' }}
              />

              <div className="space-y-0">
                {TIMELINE_STEPS.map((step, idx) => {
                  const isLast = idx === TIMELINE_STEPS.length - 1;
                  return (
                    <div
                      key={step.num}
                      className="flex gap-6 group timeline-step relative z-20"
                    >
                      {/* Circle Node */}
                      <div className="timeline-circle w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-neutral-300 bg-white flex-shrink-0 flex items-center justify-center text-neutral-400 font-semibold text-sm md:text-base transition-all duration-300 shadow-sm">
                        {step.num}
                      </div>

                      {/* Step Content */}
                      <div className={`timeline-content flex-grow opacity-30 -translate-x-3 transition-all duration-500 ${isLast ? 'pb-0' : 'pb-10 md:pb-12'}`}>
                        <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#212121] mb-2 pt-1.5 md:pt-2.5">
                          {step.title}
                        </h3>
                        <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
          </div>

        </div>
      </div>
    </section>
  );
}
