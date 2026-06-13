import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Nos Canda One | Geleceğe Köprü, Hayatlara Dokunuş",
  description: "Nos Canda One — Kurumsal sosyal sorumluluk, çevre dostu yeşil inisiyatifler, eğitim bursları, staj ve mentorluk programları ile geleceği şekillendiriyoruz.",
};

/**
 * Nos Canda One Landing Page.
 * Acts as the direct gateway to both the Vakıf (Foundation) and Akademi (Academy) platforms.
 * Features a minimalist editorial layout with a split CTA redirect at the bottom.
 */
export default function NosCandaOnePage() {
  return (
    <div className="bg-[#FAFAF7] text-[#212121] min-h-screen font-poppins selection:bg-[#BA5225]/20 selection:text-[#BA5225] flex flex-col justify-between">
      
      {/* Editorial Main Content */}
      <main className="flex-1 py-20 lg:py-32 relative overflow-hidden flex flex-col justify-center">
        {/* Subtle Decorative Glows */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[140px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, #BA5225 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, #B8860B 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          
          {/* Top Intro Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#BA5225] block mb-4">
              Nos Canda Sosyal İnisiyatif Platformu
            </span>
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[68px] font-medium text-[#212121] leading-[1.1] tracking-tight mb-8">
              Nos Canda One
            </h1>
            <div className="h-0.5 w-20 bg-[#BA5225] mx-auto mb-8" />
            <p className="text-base sm:text-lg lg:text-xl text-[#555555] leading-relaxed font-light">
              Geleceği şekillendirmenin yolunun insana, eğitime ve çevreye değer katmaktan geçtiğine inanıyoruz. 
              Nos Canda One çatısı altında, toplumsal kalkınmaya destek olan vakıf projelerimizi ve genç yetenekleri 
              iş dünyasına hazırlayan akademi programlarımızı bir araya getiriyoruz.
            </p>
          </div>

          {/* Split CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1100px] mx-auto">
            
            {/* Split Card 1: Vakıf */}
            <div className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-8 lg:p-12 min-h-[480px]">
              {/* Background cover image placeholder that is premium */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500 select-none pointer-events-none">
                <Image
                  src="/images/vakif/ana-sayfa-2.png"
                  alt="Vakıf Background"
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B] block">
                  Toplumsal Kalkınma & Yeşil Gelecek
                </span>
                <h2 className="font-cinzel text-3xl font-medium text-[#212121]">
                  Nos Canda One Vakfı
                </h2>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                  Kadın girişimcilere yönelik can suyu desteklerinden, ekolojik dengeleri koruyan yeşil projelere ve temel insani yardımlara uzanan sosyal sorumluluk platformumuz.
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-neutral-100 flex justify-between items-center mt-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Sosyal Fayda & İnisiyatif
                </span>
                <Link 
                  href="/nos-canda-one/vakif" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B8860B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#99700a] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Vakıf Portalına Git
                </Link>
              </div>
            </div>

            {/* Split Card 2: Akademi */}
            <div className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-200/50 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-8 lg:p-12 min-h-[480px]">
              {/* Background cover image placeholder that is premium */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500 select-none pointer-events-none">
                <Image
                  src="/images/akademi/hero.png"
                  alt="Akademi Background"
                  fill
                  className="object-cover filter grayscale"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              <div className="relative z-10 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BA5225] block">
                  Eğitim, Mentorluk & Staj Fırsatları
                </span>
                <h2 className="font-cinzel text-3xl font-medium text-[#212121]">
                  Nos Canda One Akademi
                </h2>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-light">
                  Genç yeteneklere eğitim bursları, staj ve iş imkanları, uygulamalı atölyeler ve olfaktif Ar-Ge projeleri ile kariyer basamaklarında profesyonel rehberlik sunan eğitim platformumuz.
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-neutral-100 flex justify-between items-center mt-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Eğitim & Kariyer Köprüsü
                </span>
                <Link 
                  href="/nos-canda-one/akademi" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#BA5225] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#9e411b] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Akademi Portalına Git
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
