export interface ProductDetail {
  slug: string;
  name: string;
  category: 'reed-diffuser' | 'auto-fragrance';
  categoryLabel: string;
  volume: string;
  description: string;
  image: string;
  secondaryImage?: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  specs: {
    concentration: string;
    longevity: string;
    projection?: string;
    origin: string;
  };
  buyUrl: string;
}

export const PRODUCTS_DETAILS: Record<string, ProductDetail> = {
  // --- Reed Diffusers ---
  'reed-diffuser-floral-amber': {
    slug: 'floral-amber',
    name: 'Floral Amber',
    category: 'reed-diffuser',
    categoryLabel: 'Premium Reed Diffuser',
    volume: '120 ML',
    description: 'Bergamot ve pembe biberin enerjik başlangıcını, safran ve asil güllerin zengin kalbiyle birleştiren, sıcak kehribar ve beyaz miskle sonlanan görkemli bir oda kokusu.',
    image: '/kokular/oda-kokulari/gorseller/siseler/floral-amber-sise.png',
    secondaryImage: '/kokular/oda-kokulari/gorseller/kutuvesise/floral-amber-kutuvesise.png',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Saffron'],
      heart: ['Jasmine', 'Rose Absolute', 'Ylang-Ylang'],
      base: ['Amber', 'Sandalwood', 'White Musk', 'Vanilla'],
    },
    specs: {
      concentration: '%25 Extrait de Parfum',
      longevity: '8 - 16 Hafta',
      projection: 'Geniş Oda / Salon (4.5 - 6m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/floral-amber',
  },
  'reed-diffuser-fruity-amber': {
    slug: 'fruity-amber',
    name: 'Fruity Amber',
    category: 'reed-diffuser',
    categoryLabel: 'Premium Reed Diffuser',
    volume: '120 ML',
    description: 'Taze dalından koparılmış kırmızı meyvelerin ve sulu şeftalinin tatlı esintisini, egzotik orkide ve altın kehribarın mistik dokunuşuyla buluşturan meyveli ve sıcak bir atmosfer kokusu.',
    image: '/kokular/oda-kokulari/gorseller/siseler/fruity-amber-sise.png',
    secondaryImage: '/kokular/oda-kokulari/gorseller/kutuvesise/fruity-amber-kutuvesise.png',
    notes: {
      top: ['Red Fruits', 'Peach', 'Green Leaves'],
      heart: ['Orchid', 'Jasmine', 'Violet'],
      base: ['Amber Accord', 'Sandalwood', 'Vanilla Bean'],
    },
    specs: {
      concentration: '%25 Extrait de Parfum',
      longevity: '8 - 16 Hafta',
      projection: 'Geniş Oda / Salon (4.5 - 6m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/fruity-amber',
  },
  'reed-diffuser-lavender-jasmine': {
    slug: 'lavender-jasmine',
    name: 'Lavender Jasmine',
    category: 'reed-diffuser',
    categoryLabel: 'Premium Reed Diffuser',
    volume: '120 ML',
    description: 'Fransız lavantasının yatıştırıcı gücünü, gece açan yaseminlerin baştan çıkarıcı kokusuyla harmanlayan, evinize huzur ve dinginlik getiren özel formülasyon.',
    image: '/kokular/oda-kokulari/gorseller/siseler/lavender-jasmine-sise.png',
    secondaryImage: '/kokular/oda-kokulari/gorseller/kutuvesise/lavender-jasmine-kutuvesise.png',
    notes: {
      top: ['French Lavender', 'Eucalyptus', 'Mint'],
      heart: ['Jasmine Absolute', 'Rose', 'Lily of the Valley'],
      base: ['White Musk', 'Amber', 'Patchouli'],
    },
    specs: {
      concentration: '%25 Extrait de Parfum',
      longevity: '8 - 16 Hafta',
      projection: 'Yatak Odası / Çalışma Odası (3 - 4.5m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/lavender-jasmine',
  },
  'reed-diffuser-orange-jasmine': {
    slug: 'orange-jasmine',
    name: 'Orange Jasmine',
    category: 'reed-diffuser',
    categoryLabel: 'Premium Reed Diffuser',
    volume: '120 ML',
    description: 'Akdeniz portakal çiçeğinin ve nerolinin canlandırıcı narenciye dokunuşunu, zengin yasemin ve kremsi sandal ağacıyla birleştiren, neşe verici ve tazeleyici bir koku.',
    image: '/kokular/oda-kokulari/gorseller/siseler/orange-jasmine-sise.png',
    secondaryImage: '/kokular/oda-kokulari/gorseller/kutuvesise/orange-jasmine-kutuvesise.png',
    notes: {
      top: ['Orange Blossom', 'Neroli', 'Bergamot'],
      heart: ['Jasmine', 'Gardenia', 'Tuberose'],
      base: ['Sandalwood', 'White Musk', 'Cedarwood'],
    },
    specs: {
      concentration: '%25 Extrait de Parfum',
      longevity: '8 - 16 Hafta',
      projection: 'Antre / Oturma Odası (4 - 5m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/orange-jasmine',
  },

  // --- Auto Fragrances ---
  'auto-fragrance-floral-amber': {
    slug: 'floral-amber',
    name: 'Floral Amber',
    category: 'auto-fragrance',
    categoryLabel: 'Premium Auto Fragrance',
    volume: '8 ML',
    description: 'Pürüzsüz İtalyan derisi ve derin ağaçsı notaları tatlı pembe biber ve amber akorlarıyla zenginleştiren, sürüşünüze lüks bir hava katan seçkin araç parfümü.',
    image: '/kokular/oto-kokulari/floral-amber-oto-sise.png',
    notes: {
      top: ['Bergamot', 'Pink Pepper', 'Cardamom'],
      heart: ['Jasmine', 'Iris', 'Amber Accord'],
      base: ['Leather', 'Cedarwood', 'Tonka Bean', 'Musk'],
    },
    specs: {
      concentration: '%22 Extrait de Parfum',
      longevity: '6 - 10 Hafta',
      projection: 'Araç İçi (1 - 2m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/floral-amber',
  },
  'auto-fragrance-fruity-amber': {
    slug: 'fruity-amber',
    name: 'Fruity Amber',
    category: 'auto-fragrance',
    categoryLabel: 'Premium Auto Fragrance',
    volume: '8 ML',
    description: 'Egzotik tropikal meyvelerin enerjisini ve orkidenin zarafetini sıcak tonka fasulyesi ve altın kehribarla harmanlayan dinamik, canlandırıcı araç kokusu.',
    image: '/kokular/oto-kokulari/fruity-amber-oto-sise.png',
    notes: {
      top: ['Mango', 'Passion Fruit', 'Peach'],
      heart: ['Orchid', 'Jasmine', 'White Floral'],
      base: ['Tonka Bean', 'Amber', 'Vanilla', 'Sandalwood'],
    },
    specs: {
      concentration: '%22 Extrait de Parfum',
      longevity: '6 - 10 Hafta',
      projection: 'Araç İçi (1 - 2m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/fruity-amber',
  },
  'auto-fragrance-lavender-jasmine': {
    slug: 'lavender-jasmine',
    name: 'Lavender Jasmine',
    category: 'auto-fragrance',
    categoryLabel: 'Premium Auto Fragrance',
    volume: '8 ML',
    description: 'Sakinleştirici tıbbi lavanta yağını gece açan taze yasemin çiçekleri ve asil sedir ağacıyla birleştiren, yoldaki stresi azaltan dingin araç parfümü.',
    image: '/kokular/oto-kokulari/lavender-jasmine-oto-sise.png',
    notes: {
      top: ['Linalool', 'Lavender', 'Eucalyptus'],
      heart: ['Night Jasmine', 'Lily', 'Rosemary'],
      base: ['Cedarwood', 'Musk', 'Amber'],
    },
    specs: {
      concentration: '%22 Extrait de Parfum',
      longevity: '6 - 10 Hafta',
      projection: 'Araç İçi (1 - 2m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/lavender-jasmine',
  },
  'auto-fragrance-orange-jasmine': {
    slug: 'orange-jasmine',
    name: 'Orange Jasmine',
    category: 'auto-fragrance',
    categoryLabel: 'Premium Auto Fragrance',
    volume: '8 ML',
    description: 'Taze Akdeniz narenciyeleri ve portakal çiçeğinin canlandırıcı esintisini, asil yasemin çiçekleri ve tatlı vanilya dokunuşlarıyla birleştiren ferah araç parfümü.',
    image: '/kokular/oto-kokulari/orange-jasmine-oto-sise.png',
    notes: {
      top: ['Bergamot', 'Sweet Orange', 'Neroli'],
      heart: ['Jasmine', 'Orange Blossom', 'Tuberose'],
      base: ['Vanilla', 'White Musk', 'Cedarwood'],
    },
    specs: {
      concentration: '%22 Extrait de Parfum',
      longevity: '6 - 10 Hafta',
      projection: 'Araç İçi (1 - 2m)',
      origin: 'Grasse, Fransa',
    },
    buyUrl: 'https://noscanda.net/products/orange-jasmine',
  },
};
