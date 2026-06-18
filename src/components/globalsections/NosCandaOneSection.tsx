'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * NosCandaOneSection component for the homepage.
 * Serves as the central gateway for the Nos Canda One platform,
 * uniting the Vakıf (Social Responsibility & Sustainability) and Akademi (Education & Development) pillars
 * into a single editorial layout. Built using staggered GSAP reveals for fluid engagement.
 */
export function NosCandaOneSection() {
  const containerRef = useGsapScroll((container) => {
    const header = container.querySelector('.nco-header');
    const columns = container.querySelectorAll('.nco-column');

    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(columns,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: container,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      id="nos-canda-one-homepage"
      className="section-padding bg-[#0B1222] border-b border-white/[0.04] relative overflow-hidden"
    >
      {/* Decorative Orbs for a premium layered background */}
      <div className="floating-orb floating-orb-gold w-[450px] h-[450px] -top-[100px] right-[5%] opacity-40" />
      <div className="floating-orb floating-orb-warm w-[350px] h-[350px] -bottom-[50px] left-[5%] opacity-30" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="nco-header opacity-0 text-center mb-16 md:mb-24">
          <span className="badge-corporate block mb-4 text-[var(--accent-gold-hover)]">Geleceğe Katkı</span>
          <h2 className="font-cinzel text-section-heading font-semibold text-white mb-4">
            Nos Canda One
          </h2>
          <div className="h-0.5 w-16 bg-[var(--accent-gold)] mx-auto mb-6" />
          <p className="font-body text-body-lg text-neutral-400 max-w-2xl mx-auto">
            Topluma değer katan sosyal sorumluluk inisiyatiflerimiz ile eğitim ve gelişim odaklı akademi 
            programlarımızı tek bir vizyon altında birleştiriyoruz.
          </p>
        </div>

        {/* Split Grid for Vakıf & Akademi Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Nos Canda One Vakfı */}
          <div className="nco-column opacity-0 flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[var(--accent-gold)]/40 transition-all duration-500 shadow-sm hover:shadow-xl group">
            <div className="space-y-6">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-[var(--accent-gold-hover)] block">
                Sosyal Sorumluluk & Sürdürülebilirlik
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-medium text-white">
                Nos Canda One Vakfı
              </h3>
              
              {/* Image Card Container - object-contain and borderless/transparent */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-transparent">
                <Image
                  src="/images/vakif/ana-sayfa-2.png"
                  alt="Nos Canda One Vakfı"
                  fill
                  className="object-contain group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                  loading="lazy"
                />
              </div>

              <p className="font-body text-sm md:text-base text-neutral-300 leading-relaxed font-light">
                Kadın girişimcileri finansal ve operasyonel desteklerle güçlendiriyor, çevre dostu 
                sürdürülebilir yeşil inisiyatiflerle geleceği koruma altına alıyoruz. Temel yardımlardan 
                küresel dayanışma projelerine uzanan geniş bir yelpazede hayatlara dokunuyoruz.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="font-gothic text-[0.6rem] tracking-widest text-neutral-500 uppercase">
                Hayallere Köprü, Hayatlara Dokunuş
              </span>
              <Link 
                href="/olusumlarimiz/nos-canda-one/vakif" 
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold-hover)] hover:text-white transition-colors duration-300"
              >
                Keşfet <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Nos Canda One Akademi */}
          <div className="nco-column opacity-0 flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[#BA5225]/40 transition-all duration-500 shadow-sm hover:shadow-xl group">
            <div className="space-y-6">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-[#E06E43] block">
                Eğitim & Profesyonel Gelişim
              </span>
              <h3 className="font-cinzel text-2xl md:text-3xl font-medium text-white">
                Nos Canda One Akademi
              </h3>
              
              {/* Image Card Container - object-contain and borderless/transparent */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-transparent">
                <Image
                  src="/images/akademi/hero.png"
                  alt="Nos Canda One Akademi"
                  fill
                  className="object-contain group-hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                  loading="lazy"
                />
              </div>

              <p className="font-body text-sm md:text-base text-neutral-300 leading-relaxed font-light">
                Genç yetenekleri sektör liderleriyle buluşturan staj and mentorluk programları, eğitim bursları, 
                atölyeler ve olfaktif sanatlar üzerine akademik iş birlikleri sunuyoruz. Gençlerimizi sadece iş 
                dünyasına hazırlamakla kalmıyor, liderlik ruhu kazandırıyoruz.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="font-gothic text-[0.6rem] tracking-widest text-neutral-500 uppercase">
                Geleceğe Sağlam Adım
              </span>
              <Link 
                href="/olusumlarimiz/nos-canda-one/akademi" 
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#E06E43] hover:text-white transition-colors duration-300"
              >
                Keşfet <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
