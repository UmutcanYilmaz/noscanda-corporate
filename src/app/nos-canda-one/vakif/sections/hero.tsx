import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Hero Section (Boxed Style with #3241ae Accent Color)
 * 
 * Why: Serves as the entry visual block, establishing ACM Vakfı's identity in a boxed layout.
 * Enclosed in the parent container, it uses absolute positioning for a clean world-map background.
 * The dot-matrix pattern behind the illustration and highlights use #3241ae as the primary accent color.
 * Text highlights and sizes are optimized to align with the boxed layout structure.
 */
export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative overflow-hidden bg-transparent min-h-[70vh] md:min-h-[74vh] lg:min-h-[78vh] flex items-center w-full"
    >
      {/* High-quality world map outline background matching the reference screenshot */}
      <img
        src="/images/vakif/world-map.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-[0.09] z-0"
      />

      {/* Decorative premium radial ambient glows inside the card to remove blank/empty feel */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#3241ae]/[0.05] rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-[#3241ae]/[0.05] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
        {/* Text Block (Col span 7 for editorial weight) */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="left" distance={50} scale={true}>
            <div className="space-y-8">
              <span 
                className="inline-block font-gothic text-[0.72rem] tracking-[0.3em] uppercase px-6 py-2.5 rounded-full font-semibold"
                style={{
                  background: 'rgba(50, 65, 174, 0.06)',
                  color: '#3241ae',
                  border: '1px solid rgba(50, 65, 174, 0.18)'
                }}
              >
                Toplumsal Dayanışma Platformu
              </span>
              <h1 className="font-garet text-[2.1rem] sm:text-[2.6rem] md:text-[3.0rem] lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold text-[#0F2547] leading-[1.12] tracking-tight">
                Hayallere Köprü,<br />
                <span className="text-[#3241ae]">Hayatlara Dokunuş.</span>
              </h1>
              <div className="w-16 h-1 bg-[#3241ae] rounded-full opacity-80" />
              <p className="font-body text-lg md:text-xl lg:text-2xl text-[#0F2547] font-semibold leading-relaxed max-w-2xl">
                Nos Canda One olarak, toplumun her kesimine dokunan, kalıcı değişimlere öncülük
                eden projelerimizle geleceğe umut taşıyoruz. Geleceğe yapılan her yardım, yarınlara
                atılmış bir tohumdur.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Illustration with Dots background (Col span 5) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <ScrollReveal direction="right" distance={50} delay={0.2} className="w-full flex justify-center">
            <div className="relative w-full max-w-[500px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] aspect-[966/800] flex items-center justify-center p-6">
              {/* Dot Grid background pattern behind the illustration using accent color #3241ae */}
              <div 
                className="absolute inset-0 opacity-[0.22] -z-10 rounded-2xl pointer-events-none select-none"
                style={{
                  backgroundImage: 'radial-gradient(#3241ae 1.8px, transparent 1.8px)',
                  backgroundSize: '18px 18px',
                }}
              />
              <Image
                src="/images/vakif/ana-sayfa-2.png"
                alt="Birleşiyoruz — Nos Canda One"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 560px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
