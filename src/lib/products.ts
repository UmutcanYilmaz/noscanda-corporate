/** Product data structures for the 7-Image Immersive Scroll System */

export interface OlfactoryNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface IntensityData {
  reedCounts: number[];
  projectionMeters: number[];
  longevityWeeks: number[];
  recommended: [number, number];
}

export interface ComparisonEntry {
  brand: string;
  concentration: number;
  type: string;
  isNoscanda: boolean;
}

export interface ProductSlide {
  type: 'hero' | 'environment' | 'olfactory' | 'packshot' | 'education' | 'intensity' | 'comparison';
  image?: string;
  headline: string;
  subtext?: string;
  olfactoryNotes?: OlfactoryNotes;
  intensityData?: IntensityData;
  comparisonData?: ComparisonEntry[];
  educationSteps?: { step: number; title: string; description: string }[];
}

/** Reed Diffuser — Floral Amber showcase */
export const REED_DIFFUSER_SLIDES: ProductSlide[] = [
  {
    type: 'hero',
    image: '/kokular/oda-kokulari/gorseller/siseler/floral-amber-sise.png',
    headline: 'Floral Amber',
    subtext: 'Premium Reed Diffuser · 120 ML',
  },
  {
    type: 'environment',
    image: '/kokular/oda-kokulari/gorseller/kutuvesise/floral-amber-kutuvesise.png',
    headline: 'Scenting the Sanctuary',
    subtext: 'Evin Görünmez Ruhu — Botanical, airy, calming notes that transform every room into a sensory retreat.',
  },
  {
    type: 'olfactory',
    image: '/kokular/oda-kokulari/gorseller/siseler/floral-amber-sise.png',
    headline: 'Olfactory Architecture',
    subtext: 'Kokunun Üç Katmanlı Mimarisi',
    olfactoryNotes: {
      top: ['Bergamot', 'Pink Pepper', 'Saffron'],
      heart: ['Jasmine', 'Rose Absolute', 'Ylang-Ylang'],
      base: ['Amber', 'Sandalwood', 'White Musk', 'Vanilla'],
    },
  },
  {
    type: 'packshot',
    image: '/kokular/oda-kokulari/gorseller/siseler/floral-amber-sise.png',
    headline: 'The Collection',
    subtext: '4 eşsiz koku, tek bir koleksiyon. Her biri benzersiz bir atmosfer yaratmak için tasarlandı.',
  },
  {
    type: 'education',
    headline: 'Ritüelinizi Başlatın',
    subtext: 'Premium rattan çubuklar ile kılcal hareket prensibini kullanarak evinize eşsiz bir koku deneyimi sunun.',
    educationSteps: [
      { step: 1, title: 'Kapağı Açın', description: 'Şişenin üzerindeki metal kapağı yavaşça çıkarın.' },
      { step: 2, title: 'İç Contayı Çıkarın', description: 'Güvenlik contasını çıkarıp metal kapağı geri yerleştirin.' },
      { step: 3, title: 'Çubukları Yerleştirin', description: 'Premium rattan çubukları şişeye yerleştirin.' },
      { step: 4, title: 'Yoğunluğu Ayarlayın', description: '4-6 çubuk ideal başlangıç. Daha yoğun koku için çubuk sayısını artırın.' },
      { step: 5, title: 'Keyfini Çıkarın', description: 'Kılcal hareketle esans yayılmaya başlar. Haftalık çubuk çevirme önerilir.' },
    ],
  },
  {
    type: 'intensity',
    headline: 'Yoğunluk & Dayanıklılık',
    subtext: 'Çubuk sayısı ile koku projeksiyon alanı ve dayanıklılık arasındaki bilimsel denge.',
    intensityData: {
      reedCounts: [2, 4, 6, 8],
      projectionMeters: [1.5, 3.0, 4.5, 6.0],
      longevityWeeks: [16, 12, 8, 6],
      recommended: [4, 6],
    },
  },
  {
    type: 'comparison',
    headline: 'Extrait Konsantrasyon Farkı',
    subtext: 'Nos Canda\'nın yüksek esans oranı, piyasadaki seyreltilmiş ürünlerle karşılaştırıldığında.',
    comparisonData: [
      { brand: 'Nos Canda', concentration: 25, type: 'Extrait de Parfum', isNoscanda: true },
      { brand: 'Premium Marka A', concentration: 12, type: 'Eau de Parfum', isNoscanda: false },
      { brand: 'Perakende Marka B', concentration: 5, type: 'Eau de Toilette', isNoscanda: false },
      { brand: 'Market Ürünü', concentration: 2, type: 'Sentetik Oda Spreyi', isNoscanda: false },
    ],
  },
];

/** Auto Fragrance — Floral Amber showcase */
export const AUTO_FRAGRANCE_SLIDES: ProductSlide[] = [
  {
    type: 'hero',
    image: '/kokular/oto-kokulari/floral-amber-oto-sise.png',
    headline: 'Floral Amber',
    subtext: 'Premium Auto Fragrance · 8 ML',
  },
  {
    type: 'environment',
    image: '/kokular/oto-kokulari/floral-amber-oto-sise.png',
    headline: 'Luxury in Motion',
    subtext: 'Yolculuğun Görünmez İmzası — Magnetic leather, deep wood, and rich amber notes that transform every drive.',
  },
  {
    type: 'olfactory',
    image: '/kokular/oto-kokulari/floral-amber-oto-sise.png',
    headline: 'Olfactory Architecture',
    subtext: 'Kokunun Üç Katmanlı Mimarisi',
    olfactoryNotes: {
      top: ['Bergamot', 'Pink Pepper', 'Cardamom'],
      heart: ['Jasmine', 'Iris', 'Amber Accord'],
      base: ['Leather', 'Cedarwood', 'Tonka Bean', 'Musk'],
    },
  },
  {
    type: 'packshot',
    image: '/kokular/oto-kokulari/floral-amber-oto-sise.png',
    headline: 'The Collection',
    subtext: '4 eşsiz araç parfümü. Her biri sürüş deneyiminize lüks bir dokunuş katmak için formüle edildi.',
  },
  {
    type: 'education',
    headline: 'Montaj Rehberi',
    subtext: 'Ahşap kapaklı premium cam şişe tasarımı ile kolay ve şık kullanım.',
    educationSteps: [
      { step: 1, title: 'Ahşap Kapağı Açın', description: 'Doğal ahşap kapağı yavaşça çevirerek çıkarın.' },
      { step: 2, title: 'İç Tıpayı Çıkarın', description: 'Silikon güvenlik tıpasını çıkarın.' },
      { step: 3, title: 'Kapağı Geri Takın', description: 'Ahşap kapağı geri yerleştirin — koku ahşaptan yayılır.' },
      { step: 4, title: 'Aracınıza Asın', description: 'Doğal pamuk ipi ile dikiz aynasına asın.' },
      { step: 5, title: 'Yoğunluk Kontrolü', description: 'Kapağı hafifçe gevşeterek koku yoğunluğunu ayarlayın.' },
    ],
  },
  {
    type: 'intensity',
    headline: 'Projeksiyon & Dayanıklılık',
    subtext: 'Kompakt 8ML formül ile araç içi maksimum performans.',
    intensityData: {
      reedCounts: [1, 2, 3, 4],
      projectionMeters: [0.5, 1.0, 1.5, 2.0],
      longevityWeeks: [10, 8, 6, 4],
      recommended: [2, 3],
    },
  },
  {
    type: 'comparison',
    headline: 'Extrait Konsantrasyon Farkı',
    subtext: 'Nos Canda araç parfümleri, piyasadaki sentetik ve su bazlı ürünlerden kat kat üstün.',
    comparisonData: [
      { brand: 'Nos Canda', concentration: 22, type: 'Extrait de Parfum', isNoscanda: true },
      { brand: 'Premium Marka A', concentration: 10, type: 'Eau de Parfum', isNoscanda: false },
      { brand: 'Perakende Marka B', concentration: 4, type: 'Koku Kartonu', isNoscanda: false },
      { brand: 'Market Ürünü', concentration: 1, type: 'Sentetik Sprey', isNoscanda: false },
    ],
  },
];
