import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Hero Section
 * 
 * Why: Serves as the page entry point, establishing the foundation's rebranded identity.
 * Positioning the text on the left ensures it is the first element parsed by the browser.
 * Fixed image visibility by adding 'w-full flex justify-center' to the ScrollReveal container.
 * Added a subtle, premium illustrated world map background as requested, and removed 
 * moving/floating background animations to maintain high-end editorial focus.
 */
export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative overflow-hidden mt-[72px] bg-[var(--bg-hero-gradient)] min-h-[85vh] flex items-center"
    >
      {/* Replaced Next.js Image with standard HTML img tag to ensure background visibility */}
      <img
        src="/images/vakif/background.png?v=2"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
      />

      {/* Static gradient glow spots (without animations behind the images) */}
      <div className="absolute -top-[250px] -left-[150px] w-[500px] h-[500px] rounded-full bg-[#0F2547]/[0.02] blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[350px] h-[350px] rounded-full bg-[var(--color-gold)]/[0.02] blur-[90px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Text Block (Col span 7 for editorial weighting) */}
        <div className="md:col-span-7">
          <ScrollReveal direction="left" distance={50} scale={true}>
            <div>
              <span className="badge-corporate block mb-6 font-semibold tracking-[0.4em]">Nos Canda One</span>
              <h1 className="font-cinzel text-hero font-bold text-[#0F2547] mb-8 leading-[1.15]">
                Hayallere Köprü,<br />
                <span className="text-gradient-gold">Hayatlara Dokunuş.</span>
              </h1>
              <p className="font-body text-base md:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mb-10">
                Nos Canda One olarak, toplumun her kesimine dokunan, kalıcı değişimlere öncülük
                eden projelerimizle geleceğe umut taşıyoruz. Geleceğe yapılan her yardım, yarınlara
                atılmış bir tohumdur.
              </p>
              <div className="gold-line max-w-[160px] h-[2px]" />
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Illustration (Col span 5, larger visual balance) */}
        <div className="md:col-span-5 flex justify-center w-full">
          <ScrollReveal direction="right" distance={50} delay={0.2} className="w-full flex justify-center">
            <div className="relative w-full max-w-[500px] md:max-w-[460px] lg:max-w-[520px] aspect-[966/1080]">
              <Image
                src="/images/vakif/ana-sayfa-2.png"
                alt="Birleşiyoruz — Nos Canda One"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[var(--border-gold)] to-transparent" />
    </section>
  );
}
