'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface QuestionStep {
  title: string;
  subtitle: string;
  field: 'usage' | 'mood' | 'notes';
  options: {
    value: string;
    label: string;
    description: string;
    icon: string;
  }[];
}

const STEPS: QuestionStep[] = [
  {
    title: "Kokuyu nerede kullanacaksınız?",
    subtitle: "Kokunun yayılacağı ortam, esans yoğunluğu ve karakterini belirler.",
    field: 'usage',
    options: [
      { value: 'home', label: 'Ev / Yaşam Alanı', description: 'Geniş alanlarda sürekli ve dengeli yayılım sunan reed diffuser kokuları.', icon: '🏠' },
      { value: 'office', label: 'Ofis / Çalışma Odası', description: 'Odaklanmayı artıran, tazeleyici ve ferahlatıcı notalar.', icon: '💼' },
      { value: 'car', label: 'Oto / Seyahat', description: 'Aracınız için tasarlanmış asılabilir yüksek konsantrasyonlu esanslar.', icon: '🚗' },
      { value: 'personal', label: 'Ten / Kişisel', description: 'Gün boyu teninizde kalacak kişisel niş parfümler.', icon: '✨' }
    ]
  },
  {
    title: "Ortamda nasıl bir his yaratmak istersiniz?",
    subtitle: "Kokusuz bir oda boştur; koku o ortama ruhunu üfler.",
    field: 'mood',
    options: [
      { value: 'calming', label: 'Sakinlik & Huzur', description: 'Günün stresinden uzaklaştıran, gevşetici ve dengeli aromalar.', icon: '🌿' },
      { value: 'energetic', label: 'Enerji & Tazelik', description: 'Ortama dinamizm, temizlik hissi ve zindelik veren esintiler.', icon: '⚡' },
      { value: 'charismatic', label: 'Lüks & Karizma', description: 'Ağır, maskülen ve prestijli bir iz bırakan karakterli kokular.', icon: '🎩' },
      { value: 'warm', label: 'Sıcaklık & Çekicilik', description: 'Amber ve vanilya tonlarında, davetkar ve sarmalayıcı notalar.', icon: '🔥' }
    ]
  },
  {
    title: "Tercih ettiğiniz koku karakterleri nelerdir?",
    subtitle: "Sevdiğiniz esans gruplarını seçerek eşleşmeyi daraltın.",
    field: 'notes',
    options: [
      { value: 'woody', label: 'Odunsu & Reçinemsi', description: 'Sedir, sandal ağacı, deri ve paçuli notaları.', icon: '🌲' },
      { value: 'citrus', label: 'Taze Narenciye & Meyve', description: 'Portakal çiçeği, bergamot ve limon aromaları.', icon: '🍋' },
      { value: 'floral', label: 'Asil Çiçek Özleri', description: 'Yasemin, lavanta ve asil orkide yaprakları.', icon: '🌸' },
      { value: 'oriental', label: 'Amber & Yoğun Baharat', description: 'Kehribar, vanilya ve egzotik doğu esintileri.', icon: '🏺' }
    ]
  }
];

interface ProductRecommendation {
  name: string;
  category: string;
  description: string;
  notes: string;
  image: string;
  link: string;
  matchPercentage: number;
}

const RECOMMENDATIONS: Record<string, ProductRecommendation> = {
  'home-calming-floral': {
    name: 'Lavender Jasmine',
    category: 'Reed Diffuser',
    description: 'Fransız lavantasının sakinleştirici etkisi ile Grasse yasemininin zarafeti. Eviniz için dinlendirici ve lüks bir atmosfer.',
    notes: 'Üst: Lavanta, Lavandin · Orta: Yasemin, Gül · Alt: Beyaz Misk, Sedir',
    image: '/images/placeholders/hero-diffuser.png',
    link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers/lavender-jasmine',
    matchPercentage: 98
  },
  'home-energetic-citrus': {
    name: 'Orange Jasmine',
    category: 'Reed Diffuser',
    description: 'Canlandırıcı Akdeniz narenciyelerinin asil yasemin ile buluşması. Yaşam alanınıza tazeleyici bir enerji ve temizlik hissi katar.',
    notes: 'Üst: Portakal, Bergamot · Orta: Yasemin, Portakal Çiçeği · Alt: Hafif Odunsu',
    image: '/images/placeholders/hero-diffuser.png',
    link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers/orange-jasmine',
    matchPercentage: 95
  },
  'car-charismatic-woody': {
    name: 'Floral Amber',
    category: 'Auto Fragrance',
    description: 'Pürüzsüz İtalyan derisi ve derin ağaçsı notaları tatlı pembe biber ve amber akorlarıyla zenginleştiren, sürüşünüze lüks bir hava katan seçkin araç parfümü.',
    notes: 'Üst: Bergamot, Pembe Biber, Kakule · Orta: Yasemin, İris, Amber · Alt: Deri, Sedir Ağacı, Tonka Fasulyesi, Misk',
    image: '/images/placeholders/auto-fragrance.png',
    link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/auto-fragrances/floral-amber',
    matchPercentage: 97
  },
  'car-warm-oriental': {
    name: 'Fruity Amber',
    category: 'Auto Fragrance',
    description: 'Egzotik tropikal meyvelerin enerjisini ve orkidenin zarafetini sıcak tonka fasulyesi ve altın kehribarla harmanlayan dinamik, canlandırıcı araç kokusu.',
    notes: 'Üst: Mango, Pasyon Meyvesi, Şeftali · Orta: Orkide, Yasemin, Beyaz Çiçekler · Alt: Tonka Fasulyesi, Kehribar, Vanilya, Sandal Ağacı',
    image: '/images/placeholders/auto-fragrance.png',
    link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/auto-fragrances/fruity-amber',
    matchPercentage: 99
  },
  // Fallback defaults
  'default-home': {
    name: 'Fruity Amber',
    category: 'Reed Diffuser',
    description: 'Olgun meyve notaları ile tatlı kehribarın sıcacık uyumu. Salonlar ve giriş alanları için davetkar bir atmosfer sunar.',
    notes: 'Üst: Kırmızı Meyveler · Orta: Şeftali, Çiçeksi · Alt: Kehribar, Tatlı Vanilya',
    image: '/images/placeholders/hero-diffuser.png',
    link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers/fruity-amber',
    matchPercentage: 92
  },
  'default-car': {
    name: 'Orange Jasmine',
    category: 'Auto Fragrance',
    description: 'Taze Akdeniz narenciyeleri ve portakal çiçeğinin canlandırıcı esintisini, asil yasemin çiçekleri ve tatlı vanilya dokunuşlarıyla birleştiren ferah araç parfümü.',
    notes: 'Üst: Bergamot, Tatlı Portakal, Neroli · Orta: Yasemin, Portakal Çiçeği · Alt: Vanilya, Beyaz Misk, Sedir Ağacı',
    image: '/images/placeholders/auto-fragrance.png',
    link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/auto-fragrances/orange-jasmine',
    matchPercentage: 94
  }
};

export function ScentDiscovery() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ProductRecommendation | null>(null);

  const handleSelect = (field: string, value: string) => {
    const nextAnswers = { ...answers, [field]: value };
    setAnswers(nextAnswers);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      const key = `${nextAnswers.usage}-${nextAnswers.mood}-${nextAnswers.notes}`;
      let recommendation = RECOMMENDATIONS[key];

      if (!recommendation) {
        // Find closest fallback
        if (nextAnswers.usage === 'car' || nextAnswers.usage === 'office') {
          recommendation = RECOMMENDATIONS['car-charismatic-woody'] || RECOMMENDATIONS['default-car'];
        } else if (nextAnswers.usage === 'personal') {
          recommendation = {
            name: 'Imperial Oud (Boutique)',
            category: 'Niche Perfume',
            description: 'Değerli öd ağacı ve asil safranın oryantal uyumu. Yakında çıkacak olan özel niş kişisel parfüm koleksiyonumuzun incisi.',
            notes: 'Üst: Safran, Lavanta · Orta: Öd Ağacı (Oud) · Alt: Paçuli, Misk',
            image: '/images/placeholders/perfume-grid.png',
            link: '/olusumlarimiz/nos-canda-shop/urunlerimiz/parfumler',
            matchPercentage: 94
          };
        } else {
          recommendation = RECOMMENDATIONS['home-calming-floral'] || RECOMMENDATIONS['default-home'];
        }
      }
      setResult(recommendation);
      setStep(STEPS.length);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const currentStepData = STEPS[step];

  return (
    <div className="w-full max-w-[850px] mx-auto bg-white/50 backdrop-blur-md rounded-3xl border border-[var(--border-gold)] p-6 md:p-10 shadow-glow relative overflow-hidden">
      
      {/* Background soft glow orbs inside card */}
      <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[var(--accent-gold)] opacity-[0.04] blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-[var(--accent-gold-hover)] opacity-[0.03] blur-2xl" />

      {step < STEPS.length ? (
        <div className="relative z-10">
          {/* Progress Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)]">
              Koku Bulucu · Soru {step + 1} / {STEPS.length}
            </span>
            <div className="flex gap-1.5">
              {STEPS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === step ? 'w-8 bg-[var(--accent-gold)]' : 'w-2 bg-[var(--border-strong)]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-8 text-center sm:text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
              {currentStepData.title}
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)]">
              {currentStepData.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentStepData.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(currentStepData.field, option.value)}
                className="group p-5 text-left bg-white/70 hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-gold)] rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex items-start gap-4"
              >
                <span className="text-2xl p-2.5 bg-[var(--bg-secondary)] group-hover:bg-white rounded-xl transition-colors duration-300">
                  {option.icon}
                </span>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-gold)] transition-colors">
                    {option.label}
                  </h4>
                  <p className="font-body text-[0.75rem] text-[var(--text-secondary)] leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-8 font-gothic text-[0.65rem] tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent-gold)] flex items-center gap-2 transition-colors cursor-pointer"
            >
              ← Geri Dön
            </button>
          )}
        </div>
      ) : (
        /* Result Screen */
        result && (
          <div className="relative z-10 text-center sm:text-left">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-[var(--accent-gold-soft)] border border-[var(--border-gold)] text-[var(--accent-gold)] text-[0.6rem] font-gothic tracking-widest uppercase rounded-full mb-3">
                %{result.matchPercentage} Eşleşme
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Koku Profiliniz Hazır
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] mt-2">
                Seçimlerinize göre tasarladığımız mükemmel olfaktif imzanız:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-t border-b border-[var(--border-subtle)] py-8 my-6">
              {/* Product Visual */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative w-44 aspect-square bg-[var(--bg-secondary)] rounded-2xl p-4 border border-[var(--border-subtle)] flex items-center justify-center">
                  <Image
                    src={result.image}
                    alt={result.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-gold)] block">
                    {result.category}
                  </span>
                  <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1">
                    {result.name}
                  </h4>
                </div>

                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {result.description}
                </p>

                <div className="p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-subtle)]">
                  <span className="font-gothic text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)] block mb-1">
                    Koku Notaları
                  </span>
                  <p className="font-body text-xs text-[var(--text-secondary)] italic leading-relaxed">
                    {result.notes}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href={result.link}
                className="btn-primary px-8 py-3 text-xs w-full sm:w-auto text-center"
              >
                Ürünü İncele
              </Link>
              <button
                onClick={handleRestart}
                className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors cursor-pointer w-full sm:w-auto text-center py-2"
              >
                Sihirbazı Yeniden Başlat
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
