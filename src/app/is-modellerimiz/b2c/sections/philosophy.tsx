import { ScrollReveal } from '@/components/core/ScrollReveal';

const FEATURES = [
  {
    title: "%25 Extrait de Parfum",
    desc: "Sıradan oda kokularının aksine, ten parfümleri standartlarında (%25) esans konsantrasyonu kullanarak 16 haftaya varan kalıcılık sunuyoruz."
  },
  {
    title: "Bitkisel Solvent Tabanı",
    desc: "Solunum sağlığına ve çevreye duyarlı, kimyasal kokusu barındırmayan, alkol kokusundan arındırılmış özel bitkisel bazlar tercih ediyoruz."
  },
  {
    title: "İtalyan Cam Estetiği",
    desc: "Mekanınızın dekorasyonunu tamamlayan, yüksek şeffaflığa ve kalın tabana sahip özel ithal İtalyan cam şişeler kullanıyoruz."
  },
  {
    title: "Grasse Esans Yağları",
    desc: "Kokularımızın tüm hammaddeleri, koku sanatının beşiği kabul edilen Fransa'nın Grasse bölgesindeki asil üreticilerden ithal edilmektedir."
  }
];

export function Philosophy() {
  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-b border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-corporate block mb-4">Olfaktif Standartlar</span>
          <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)] mb-4">
            Bireysel Kullanımda Lüks Deneyim
          </h2>
          <p className="font-body text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Her şişede aynı asil kaliteyi ve koku tutarlılığını sunmak için tasarlanmış ödün vermez standartlarımız.
          </p>
          <div className="gold-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={0.1 * idx}>
              <div className="bg-[var(--bg-primary)] p-6 rounded-2xl border border-[var(--border-subtle)] magnetic-hover h-full flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-gold)]">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="w-8 h-px bg-[var(--accent-gold)] mt-6" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
