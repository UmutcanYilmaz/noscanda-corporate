import Image from 'next/image';
import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Nos Canda One — Şeffaflık ve Raporlama Section
 * 
 * Why: Redesigned to remove empty vertical and horizontal spaces:
 * - Employs a tight py-10 md:py-14 padding.
 * - Utilizes a 2-column top layout: descriptive copy on the left, scaled illustration on the right.
 * - Employs a horizontal 3-column grid at the bottom for the 3 glassmorphic report cards, spanning the screen width.
 */
export function Transparency() {
  const reports = [
    {
      title: '2025 Faaliyet Raporu',
      description: 'Yıllık projelerimiz, hedeflerimiz ve mali tablolarımız.',
      date: 'Nisan 2025',
      size: '4.2 MB',
    },
    {
      title: 'Sosyal Etki Analizi',
      description: 'Destek programlarımızın toplumsal katma değer karnesi.',
      date: 'Ocak 2025',
      size: '2.8 MB',
    },
    {
      title: 'Sürdürülebilirlik Raporu',
      description: 'Çevresel sorumluluk, karbon ayak izi ve atık yönetimi.',
      date: 'Aralık 2024',
      size: '3.5 MB',
    },
  ];

  return (
    <section
      id="seffaflik"
      className="py-10 md:py-14 relative overflow-hidden border-t"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #172a45 0%, #0d1e36 60%, #051020 100%)',
        color: '#FFFFFF',
        borderColor: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Decorative ambient glowing background features */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#3241ae]/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        
        {/* Parent Title (1 Column) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="max-w-4xl mb-6 md:mb-8">
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 font-semibold"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              Şeffaflık ve Raporlama
            </span>
            <h2 className="font-cinzel text-section-heading md:text-4xl font-bold text-white leading-[1.25]">
              Hesap Verebilirlik ve Güven İlkelerini Önemsiyoruz.
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Content Layout (Top part: Text Left, Illustration Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          
          <div className="space-y-6">
            <ScrollReveal direction="left" distance={40}>
              <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
                Bağışlarınızın ve desteklerinizin tam olarak nereye ulaştığını, hangi hayatlara
                dokunduğunu açıkça görmeniz gerektiğine inanıyoruz. Faaliyetlerimizin her adımını
                şeffaf ve denetlenebilir bir şekilde paylaşıyoruz. Güveniniz bizim için en değerli sermayedir.
              </p>
            </ScrollReveal>
            <div className="w-16 h-1 bg-[#3241ae] rounded-full opacity-80" />
          </div>

          <div className="w-full flex justify-center">
            <ScrollReveal direction="right" distance={40} delay={0.1} className="w-full flex justify-center">
              <div className="relative w-full max-w-[500px] xl:max-w-[540px] aspect-square">
                <Image
                  src="/images/vakif/seffaflik-ve-raporlama.png"
                  alt="Şeffaflık ve Raporlama — Nos Canda One"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 540px"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Horizontal 3-Column Reports Grid (Bottom part) */}
        <div className="mb-12">
          <ScrollReveal direction="up" distance={30}>
            <h3 className="font-cinzel text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Yayınlanmış Kurumsal Raporlarımız
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <ScrollReveal key={report.title} direction="up" distance={40} delay={index * 0.1}>
                <div className="p-6 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between h-full min-h-[220px] cursor-pointer">
                  <div className="space-y-4">
                    {/* Document Icon Box */}
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center text-white text-xl group-hover:scale-110 group-hover:bg-[#3241ae]/30 transition-all duration-300 w-fit">
                      📄
                    </div>
                    <div>
                      <h4 className="font-cinzel font-bold text-white text-base group-hover:text-[#e8effa] transition-colors duration-300">
                        {report.title}
                      </h4>
                      <p className="font-body text-sm text-white/70 mt-1 leading-relaxed">
                        {report.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-gothic text-[9px] tracking-wider uppercase text-white/40">
                        Yayın: {report.date}
                      </span>
                      <span className="font-gothic text-[9px] tracking-wider uppercase text-white/40">
                        Boyut: {report.size}
                      </span>
                    </div>

                    {/* Interactive Action Circle */}
                    <div className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-[#3241ae] transition-colors duration-300">
                      <svg className="w-3.5 h-3.5 text-white transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Centered CTA */}
        <ScrollReveal direction="up" distance={30} delay={0.3}>
          <div className="text-center">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 font-gothic text-[0.8125rem] tracking-[0.18em] uppercase rounded-full transition-all duration-400 min-h-[44px] shadow-sm hover:shadow-md"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              Kurumsal Bilgi Alın
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
