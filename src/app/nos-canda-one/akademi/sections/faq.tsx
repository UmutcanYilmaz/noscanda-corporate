'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const FAQ_ITEMS = [
  {
    q: 'Nos Canda One Akademi nedir ve temel amacı nedir?',
    a: 'Nos Canda One Akademi, teorik bilgiyi sektördeki pratik deneyimlerle harmanlayarak genç yeteneklerin kariyer yolculuğuna sağlam adımlar atmalarını sağlayan kapsamlı bir programdır. Amacı, öğrencilere alanında uzman mentörler, staj imkanları, seminerler ve sosyal sorumluluk projeleri ile destek sunarak hem mesleki hem kişisel gelişimlerini teşvik etmektir.',
  },
  {
    q: 'Nos Canda One Akademi katılımcılarına uzun vadeli kariyer avantajları nasıl sunar?',
    a: 'Katılımcılar, sektör deneyimi, güçlü profesyonel ağlar ve mentorluk desteği sayesinde iş dünyasının dinamiklerini yakından tanıma ve uzun vadeli kariyer hedeflerine ulaşmada rekabet avantajı elde ederler.',
  },
  {
    q: 'Nos Canda One Akademi\'nin sektörel bağlantıları ve iş dünyası ile olan ilişkileri nasıldır?',
    a: 'Akademi, sektör liderleri ve deneyimli profesyonellerle kurduğu sağlam köprüler sayesinde, öğrencilerin gerçek iş hayatı ile iç içe geçmelerini sağlar; bu durum, onların değerli bağlantılar kurmasına ve iş dünyasında fark yaratmalarına yardımcı olur.',
  },
  {
    q: 'Mentorluk desteği kariyer gelişimini nasıl etkiler?',
    a: 'Deneyimli bir mentor, sektörün dinamiklerini ve güncel trendlerini aktarır. Bu rehberlik, problem çözme, iletişim ve takım çalışması gibi önemli becerilerin gelişmesine yardımcı olur ve kariyer hedeflerine ulaşmayı kolaylaştırır.',
  },
  {
    q: 'Sosyal sorumluluk projesine katılmanın faydaları nelerdir?',
    a: 'Sosyal sorumluluk projeleri, topluma katkıda bulunmanın yanı sıra liderlik, takım çalışması ve iletişim becerilerini geliştirir. Ayrıca, bu projelere katılmak kişisel tatmin sağlar ve profesyonel deneyiminizi zenginleştirir.',
  },
];

/**
 * FAQ Accordion Section (#sss) for Nos Canda One | Akademi.
 * Upgraded with premium design systems:
 * - Alternating bg-[var(--bg-primary)] background.
 * - White accordion cards.
 * - Custom pill badge and font-cinzel typography.
 */
export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="sss"
      className="py-16 md:py-20 bg-[var(--bg-primary)] font-poppins relative z-10 border-t border-neutral-100/50"
    >
      <div className="max-w-[840px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" distance={30}>
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-3 font-semibold"
              style={{
                background: 'rgba(186, 82, 37, 0.05)',
                color: '#BA5225',
                border: '1px solid rgba(186, 82, 37, 0.15)'
              }}
            >
              Destek & Sorular
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[#212121] leading-tight">
              Sıkça Sorulan Sorular
            </h2>
            <div className="h-1 w-16 bg-[#BA5225] rounded-full mx-auto mt-6" />
          </ScrollReveal>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                distance={20}
                delay={idx * 0.05}
              >
                <div className="rounded-[20px] bg-[var(--bg-primary)] border border-neutral-200/40 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Accordion Header Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#BA5225] cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-cinzel text-base sm:text-lg font-bold text-[#212121] group-hover:text-[#BA5225] transition-colors duration-300 pr-6
                      ${isOpen ? 'text-[#BA5225]' : ''}`}
                    >
                      {item.q}
                    </span>
                    
                    {/* Expand/Collapse Chevron Icon */}
                    <div 
                      className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[#BA5225] transition-all duration-300
                        ${isOpen ? 'bg-[#BA5225] text-white rotate-180' : 'bg-white shadow-inner border border-neutral-100'}`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Panel Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden
                      ${isOpen ? 'max-h-[300px] border-t border-neutral-200/20' : 'max-h-0'}`}
                  >
                    <div className="p-6 font-body text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
