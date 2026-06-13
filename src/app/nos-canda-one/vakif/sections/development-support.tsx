import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

interface SupportArea {
  id: string;
  image: string;
  title: string;
  normalText: string;
  highlightedText: string;
}

const DEV_ROW_1: SupportArea[] = [
  {
    id: 'egitim',
    image: '/images/vakif/egitim-yardimi.png',
    title: 'Eğitim Desteği',
    normalText: 'Maddi kısıtlamalara bakılmaksızın çocukların ve gençlerin kaliteli eğitime erişimini sağlıyoruz. ',
    highlightedText: 'Eğitim bursları, kırtasiye desteği ve eğitim materyalleri temini ile onların geleceklerine yatırım yapıyoruz.',
  },
  {
    id: 'sosyal',
    image: '/images/vakif/gonullu-yardim.png',
    title: 'Sosyal Destek',
    normalText: 'Toplumumuzun değerli bireyleri olan yaşlılarımıza, engelli vatandaşlarımıza, gazilerimize, şehit çocuklarımıza ve özel bakıma ihtiyaç duyan kişilere yönelik özel destek programları yürütüyoruz. ',
    highlightedText: 'Protez yardımı, medikal cihaz temini, rehabilitasyon süreçlerine katkı ve sosyal destek alanlarında yanlarında oluyoruz.',
  },
  {
    id: 'kadin',
    image: '/images/vakif/kadin-destekleme.png',
    title: 'Kadın Desteği',
    normalText: 'Kadınların hedeflerine ulaşmaları için gereken bilgi ve becerileri kazanmalarını sağlıyor, ',
    highlightedText: 'eğitim ve girişimcilik projeleriyle onları destekleyerek toplumsal gelişimde öncü rol oynamalarını amaçlıyoruz.',
  },
];

const DEV_ROW_2: SupportArea[] = [
  {
    id: 'kariyer',
    image: '/images/vakif/kariyer-yardimi.png',
    title: 'Kariyer Desteği',
    normalText: 'İş arayan bireylere yönelik mesleki eğitim programları, özgeçmiş hazırlama atölyeleri ve istihdam kurumları hakkında ',
    highlightedText: 'bilgi paylaşarak kariyer yollarında destek oluyoruz.',
  },
  {
    id: 'psikolojik',
    image: '/images/vakif/psikolojik-yardim.png',
    title: 'Psikolojik Destek',
    normalText: 'Bireyleri ruh sağlığı hizmetleri ve danışmanlık olanaklarıyla buluşturarak, ',
    highlightedText: 'zor zamanlarında yanlarında oluyor ve psikolojik iyi oluşlarını destekliyoruz.',
  },
];

function CardBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block font-gothic text-[0.7rem] tracking-[0.22em] uppercase px-5 py-2 rounded-full mb-5 self-start shadow-sm"
      style={{
        background: '#0F2547',
        color: '#FFFFFF',
      }}
    >
      {children}
    </span>
  );
}

function DetailedCard({ area, delay }: { area: SupportArea; delay: number }) {
  return (
    <ScrollReveal direction="up" delay={delay} scale={true} distance={40} className="w-full">
      <div className="flex flex-col h-full group cursor-pointer">
        <CardBadge>{area.title}</CardBadge>
        <div className="relative w-full aspect-square mb-6 overflow-hidden">
          <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-106">
            <Image
              src={area.image}
              alt={area.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <div className="px-2 flex-1">
          <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
            {area.normalText}
            <span className="text-[#0F2547] font-semibold">{area.highlightedText}</span>
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/**
 * DevelopmentSupport Component — Bireysel ve Sosyal Gelişim Destekleri
 * 
 * Why: Dedicated storytelling section covering education, gender empowerment, and care for vulnerable groups.
 * Renders in a detailed 3+2 structure sorted by sociological priority.
 * The warm background alternates with white sections to enhance page flow and visual interest.
 */
export function DevelopmentSupport() {
  return (
    <section
      id="gelisim-destekleri"
      className="section-padding section-warm border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 animate-fade-in">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={40}>
          <div className="text-center mb-20">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{
                background: 'rgba(15, 37, 71, 0.05)',
                color: '#0F2547',
                border: '1px solid rgba(15, 37, 71, 0.1)'
              }}
            >
              Bireysel & Sosyal Gelişim
            </span>
            <h2 className="font-cinzel text-section-heading font-bold text-[#0F2547] mb-5">
              Geleceğe Yatırım ve Bireysel Gelişim
            </h2>
            <p className="font-body text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
              Bireylerin ve toplulukların kendi ayakları üzerinde durabilmesi için eğitim, kariyer, 
              sosyal ve psikolojik alanlarda rehberlik ve kalıcı fırsatlar sunuyoruz.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0F2547]/20 to-transparent max-w-[140px] mx-auto" />
          </div>
        </ScrollReveal>
 
        {/* Row 1 — 3 columns (Eğitim, Sosyal Destek, Kadın Desteği) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-16">
          {DEV_ROW_1.map((area, idx) => (
            <DetailedCard key={area.id} area={area} delay={0.08 * idx} />
          ))}
        </div>

        {/* Decorative separator line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0F2547]/10 to-transparent my-16" />

        {/* Row 2 — 2 columns (Kariyer, Psikolojik) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-[800px] mx-auto">
          {DEV_ROW_2.map((area, idx) => (
            <DetailedCard key={area.id} area={area} delay={0.08 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
