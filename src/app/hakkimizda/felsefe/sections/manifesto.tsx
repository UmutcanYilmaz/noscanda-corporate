import { ScrollReveal } from '@/components/core/ScrollReveal';

/**
 * Felsefe Manifesto Section
 */
export function Manifesto() {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <p className="font-faraz text-2xl italic text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            &ldquo;Koku bir süs değil, bir imzadır. Biz bu imzayı suyla değil, esansla yazıyoruz.&rdquo;
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-6 text-left">
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4 text-center">
              Neden Extrait de Parfum?
            </h2>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Piyasadaki çoğu oda kokusu and araç parfümü, maliyet düşürmek adına esans oranını minimum seviyede tutar. 
              Bu yaklaşım, ilk birkaç günden sonra kokuyu neredeyse hissedilmez kılar. Nos Canda ise her üründe 
              en az %20 esans yağı kullanarak, haftalarca süren gerçek bir olfaktif deneyim sunar.
            </p>
            <p className="font-body text-base text-[var(--text-secondary)] leading-relaxed">
              Extrait de Parfum, parfümeri dünyasının en yüksek konsantrasyon seviyesidir. Bu formülasyon, 
              kokunun derinliğini, projeksiyon gücünü and kalıcılığını maksimum düzeye çıkarır.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
