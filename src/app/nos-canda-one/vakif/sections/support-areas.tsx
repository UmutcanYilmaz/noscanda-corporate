import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

interface SupportArea {
  id: string;
  image: string;
  title: string;
  normalText: string;
  highlightedText: string;
}

const BASIC_NEEDS_ROW_1: SupportArea[] = [
  {
    id: 'gida',
    image: '/images/vakif/yemek-yardimi.png',
    title: 'Gıda Yardımı',
    normalText: 'Temel gıda maddelerinden oluşan yardım kolileri ve sıcak yemek dağıtımları ile açlık sınırındaki ailelerin beslenme ihtiyaçlarına destek oluyor, ',
    highlightedText: 'sağlıklı bir yaşam sürdürmelerine katkıda bulunuyoruz.',
  },
  {
    id: 'saglik',
    image: '/images/vakif/saglik-yardimi.png',
    title: 'Sağlık Yardımı',
    normalText: 'Bireylerin temel sağlık hizmetlerine erişimini kolaylaştırıyor, tedavi süreçlerine destek oluyor ve ',
    highlightedText: 'koruyucu sağlık bilinçlendirme çalışmaları yürütüyoruz.',
  },
  {
    id: 'barinma',
    image: '/images/vakif/barinma-destegi.png',
    title: 'Barınma Desteği',
    normalText: 'Evsizlikle mücadele ediyor ve uygun fiyatlı konut çözümleri sunan politika ve kuruluşları destekleyerek ',
    highlightedText: 'herkes için güvenli barınma hakkını savunuyoruz.',
  },
];

const BASIC_NEEDS_ROW_2: SupportArea[] = [
  {
    id: 'giyim',
    image: '/images/vakif/giyim-yardimi.png',
    title: 'Giyim Yardımı',
    normalText: 'Mevsim koşullarına uygun, temiz ve kullanılabilir giysileri ihtiyaç sahibi ailelere ulaştırarak, ',
    highlightedText: 'onların temel giyim ihtiyaçlarını karşılıyor ve onurlarını korumalarına yardımcı oluyoruz.',
  },
  {
    id: 'hijyen',
    image: '/images/vakif/hijyen-yardimi.png',
    title: 'Hijyen Yardımı',
    normalText: 'Kişisel bakım ürünleri ve genel temizlik malzemelerini içeren hijyen kitlerini ihtiyaç sahiplerine ulaştırarak, ',
    highlightedText: 'sağlık koşullarının iyileştirilmesine ve salgın hastalıkların önlenmesine yardımcı oluyoruz.',
  },
];

/**
 * CardBadge Component
 * 
 * Why: Renders the category badge using the foundation's primary Navy Blue color scheme.
 * Using self-start guarantees proper flex alignment in different column settings.
 */
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

/**
 * DetailedCard Component
 * 
 * Why: Displays detailed support category details in a spacious layout.
 * Image container is fully transparent (no background/border) to showcase the illustration.
 * Passed 'w-full' to ScrollReveal to prevent flex/grid element width collapses.
 */
function DetailedCard({ area, delay }: { area: SupportArea; delay: number }) {
  return (
    <ScrollReveal direction="up" delay={delay} scale={true} distance={40} className="w-full">
      <div className="flex flex-col h-full group cursor-pointer">
        {/* Title badge pill at the top */}
        <CardBadge>{area.title}</CardBadge>
        {/* Naked image (no border or background container) */}
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
        {/* Description at the bottom */}
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
 * SupportAreas Component — Temel İhtiyaç Destekleri
 * 
 * Why: Focuses exclusively on basic survival and physical relief support categories.
 * Renders in a detailed 3+2 row structure, prioritized by importance.
 * Navy Blue colors provide strong branding contrast.
 */
export function SupportAreas() {
  return (
    <section
      id="temel-ihtiyaclar"
      className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
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
              Temel İhtiyaç Destekleri
            </span>
            <h2 className="font-cinzel text-section-heading font-bold text-[#0F2547] mb-5">
              Hayata Dokunan Temel İhtiyaç Desteklerimiz
            </h2>
            <p className="font-body text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
              &ldquo;Bir Kutu Sevgi&rdquo; anlayışıyla, hayatta kalma ve temel fiziki ihtiyaçların 
              güvence altına alınması adına yürüttüğümüz öncelikli destek programlarımız.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0F2547]/20 to-transparent max-w-[140px] mx-auto" />
          </div>
        </ScrollReveal>
 
        {/* Row 1 — 3 columns (Gıda, Sağlık, Barınma) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-16">
          {BASIC_NEEDS_ROW_1.map((area, idx) => (
            <DetailedCard key={area.id} area={area} delay={0.08 * idx} />
          ))}
        </div>

        {/* Decorative separator line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0F2547]/10 to-transparent my-16" />

        {/* Row 2 — 2 columns (Giyim, Hijyen) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-[800px] mx-auto">
          {BASIC_NEEDS_ROW_2.map((area, idx) => (
            <DetailedCard key={area.id} area={area} delay={0.08 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
