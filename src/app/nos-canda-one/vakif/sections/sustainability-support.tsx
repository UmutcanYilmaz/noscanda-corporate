import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

interface SupportArea {
  id: string;
  image: string;
  title: string;
  normalText: string;
  highlightedText: string;
}

const SUSTAIN_ROW_1: SupportArea[] = [
  {
    id: 'topluluk',
    image: '/images/vakif/topluluk-gelistirme.png',
    title: 'Topluluk Geliştirme',
    normalText: 'Okullar, sağlık merkezleri ve toplum merkezleri gibi temel altyapıların geliştirilmesine yatırım yaparak ',
    highlightedText: 'yerel toplulukların yaşam kalitesini artırıyoruz.',
  },
  {
    id: 'ekonomik',
    image: '/images/vakif/ekonomik-destek.png',
    title: 'Ekonomik Destek ve Girişimcilik',
    normalText: 'Özellikle dezavantajlı topluluklardaki yeni girişimcilere mentorluk, eğitim ve finansal destek sağlayarak ',
    highlightedText: 'ekonomik bağımsızlıklarını kazanmalarına yardımcı oluyoruz.',
  },
];

const SUSTAIN_ROW_2: SupportArea[] = [
  {
    id: 'erisilebilir-konut',
    image: '/images/vakif/erisilebilir-konut.png',
    title: 'Erişilebilir Konutlar',
    normalText: 'Düşük ve orta gelirli bireylerin ve ailelerin güvenli, sağlıklı ve uygun maliyetli konutlara erişimini sağlamak amacıyla projeler geliştiriyor ve destekliyoruz. ',
    highlightedText: 'Karşılanabilir konut politikalarını savunuyor, ilgili kurumlarla iş birliği yaparak çözümler üretiyoruz.',
  },
  {
    id: 'cesitlilik',
    image: '/images/vakif/cesitlilik-ve-kapsayicilik.png',
    title: 'Çeşitlilik ve Kapsayıcılık',
    normalText: 'Çeşitlilik ve kapsayıcılık ilkelerine dair farkındalığı ve anlayışı artırarak, ',
    highlightedText: 'herkesin eşit fırsatlara sahip olduğu bir toplum için çalışıyoruz.',
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
        <div className="relative w-full aspect-[16/9] md:aspect-[16/10] mb-6 overflow-hidden">
          <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-106">
            <Image
              src={area.image}
              alt={area.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
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
 * SustainabilitySupport Component — Topluluk ve Sürdürülebilirlik Projeleri
 * 
 * Why: Dedicated storytelling section covering community infrastructure, economic independence, housing access, and inclusion.
 * Renders in a detailed 2+2 structure sorted by importance ranking.
 * White background sets up clean contrast before transitioning to the Social Unity block.
 */
export function SustainabilitySupport() {
  return (
    <section
      id="surdurulebilirlik-destekleri"
      className="section-padding bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden"
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
              Topluluk & Sürdürülebilirlik
            </span>
            <h2 className="font-cinzel text-section-heading font-bold text-[#0F2547] mb-5">
              Sürdürülebilir Bir Toplum ve Ortak Gelecek
            </h2>
            <p className="font-body text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
              Sadece bugünün değil, yarının da güvence altında olması için toplumsal altyapıyı güçlendiriyor, 
              ekonomik bağımsızlığı teşvik ediyor ve kapsayıcı yaşam alanları inşa ediyoruz.
            </p>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0F2547]/20 to-transparent max-w-[140px] mx-auto" />
          </div>
        </ScrollReveal>
 
        {/* Row 1 — 2 columns (Topluluk Geliştirme, Ekonomik Destek & Girişimcilik) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-16">
          {SUSTAIN_ROW_1.map((area, idx) => (
            <DetailedCard key={area.id} area={area} delay={0.08 * idx} />
          ))}
        </div>

        {/* Decorative separator line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#0F2547]/10 to-transparent my-16" />

        {/* Row 2 — 2 columns (Erişilebilir Konutlar, Çeşitlilik ve Kapsayıcılık) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {SUSTAIN_ROW_2.map((area, idx) => (
            <DetailedCard key={area.id} area={area} delay={0.08 * idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
