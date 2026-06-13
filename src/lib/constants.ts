/** Navigation item types for the mega-menu hierarchy */
export interface NavChild {
  label: string;
  href: string;
  badge?: string;
  image?: string;
  teaserTitle?: string;
  teaserDesc?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
  icon?: string;
  image?: string;
  teaserTitle?: string;
  teaserDesc?: string;
}

/** Complete navigation hierarchy — ordered according to homepage priority */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Kurumsal Bilgiler',
    href: '/kurumsal-bilgiler',
    icon: 'building',
    image: '/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-3.jpg',
    teaserTitle: 'Noscanda Kurumsal',
    teaserDesc: 'Kokunun asil tarihini ve lüksü şekillendiren vizyonumuz, değerlerimiz ve güncel bültenlerimiz.',
    children: [
      {
        label: 'Tüm Kurumsal Bilgiler',
        href: '/kurumsal-bilgiler',
        image: '/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-3.jpg',
        teaserTitle: 'Noscanda Kurumsal',
        teaserDesc: 'Kokunun asil tarihini ve lüksü şekillendiren vizyonumuz, değerlerimiz ve güncel bültenlerimiz.'
      },
      {
        label: 'Hikayemiz',
        href: '/hakkimizda/hikayemiz',
        image: '/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-1.jpg',
        teaserTitle: 'Hikayemiz',
        teaserDesc: 'Koku sanatını geleneksel esans kalitesi ve modern lüksle harmanlayan köklü hikayemiz.'
      },
      {
        label: 'Felsefemiz',
        href: '/hakkimizda/felsefe',
        image: '/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-4.jpg',
        teaserTitle: 'Yüksek Konsantrasyon',
        teaserDesc: '%25 Extrait de Parfum formülüyle kokunun kalıcılık ve derinliğini yeniden tanımlayan felsefemiz.'
      },
      {
        label: 'Duyurular',
        href: '/hakkimizda/duyurular',
        image: '/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-2.jpg',
        teaserTitle: 'Haberler & Duyurular',
        teaserDesc: 'Noscanda Group bünyesindeki son kurumsal gelişmeler, basın bültenlerimiz ve vizyoner adımlarımız.'
      },
    ],
  },
  {
    label: 'Girişimcilik',
    href: '/girisimcilik',
    icon: 'rocket',
    image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/aydinlik(yasemin)/A_luxurious,_high-end_202604270547.jpeg',
    teaserTitle: 'Girişimci Hub',
    teaserDesc: 'Monolith Kiosk, Bölge Kalkanı ve Dijital Ortaklık modelleriyle koku ekosistemimize dahil olun.',
    children: [
      {
        label: 'Tüm Modeller',
        href: '/girisimcilik',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/aydinlik(yasemin)/A_luxurious,_high-end_202604270547.jpeg',
        teaserTitle: 'Girişimci Hub',
        teaserDesc: 'Monolith Kiosk, Bölge Kalkanı ve Dijital Ortaklık modelleriyle koku ekosistemimize dahil olun.'
      },
      {
        label: 'Monolith Kiosk Konsepti',
        href: '/girisimcilik/monolith-kiosk',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/aydinlik(yasemin)/A_fresh,_bright,_202604270546.jpeg',
        teaserTitle: 'Kiosk Bayilik Modeli',
        teaserDesc: 'AVM ve lüks caddelerde konumlanan, yüksek kârlılığa sahip minimal kiosk bayilik sistemimiz.'
      },
      {
        label: 'Bölge Kalkanı',
        href: '/girisimcilik/bolge-kalkani',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/aydinlik(yasemin)/A_luxurious,_high-end_202604270547.jpeg',
        teaserTitle: 'Bölge Kalkanı Güvencesi',
        teaserDesc: 'Coğrafi sınırlar dahilinde tek bayilik vererek yatırımlarınızı koruyan koruma kalkanı.'
      },
      {
        label: 'Dijital Ortaklık Sistemi',
        href: '/girisimcilik/dijital-ortaklik',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karisik/floral/A_beautiful,_romantic_202604270554.jpeg',
        teaserTitle: 'Dijital Ortaklık Portalı',
        teaserDesc: 'Online ve fiziksel sipariş süreçlerini entegre eden bulut tabanlı bayi yönetim altyapımız.'
      },
    ],
  },
  {
    label: 'İş Modellerimiz',
    href: '/is-modellerimiz',
    icon: 'briefcase',
    image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/dortlu/A_luxurious,_high-end_202604270606.jpeg',
    teaserTitle: 'Ticari Çözümler',
    teaserDesc: 'Bireysel perakendeden kamu tedariğine, toptan koku ikmalinden profesyonel mimari kokulandırmaya.',
    children: [
      {
        label: 'Tüm İş Modellerimiz',
        href: '/is-modellerimiz',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/dortlu/A_luxurious,_high-end_202604270606.jpeg',
        teaserTitle: 'Ticari Çözümler',
        teaserDesc: 'Bireysel perakendeden kamu tedariğine, toptan koku ikmalinden profesyonel mimari kokulandırmaya.'
      },
      {
        label: 'B2C Retail',
        href: '/is-modellerimiz/b2c',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/dortlu/An_opulent,_cinematic_202604270607.jpeg',
        teaserTitle: 'B2C Perakende Kanalları',
        teaserDesc: 'Kendi mağazalarımız ve prestijli zincir marketlerde doğrudan nihai tüketiciyle buluştuğumuz noktalar.'
      },
      {
        label: 'B2B Wholesale',
        href: '/is-modellerimiz/b2b',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/dortlu/A_luxurious,_high-end_202604270606.jpeg',
        teaserTitle: 'B2B Toptan ve İhracat',
        teaserDesc: 'Oteller, zincir mağazalar ve global perakendeciler için toptan koku ikmal çözümleri.'
      },
      {
        label: 'Kurumsal İmza',
        href: '/is-modellerimiz/kurumsal-alan',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karanlik(amber)/Remove_background._Background_202604270542.jpeg',
        teaserTitle: 'Kurumsal Alan Kokulandırma',
        teaserDesc: 'Mağaza, otel lobi ve ofislerinize özel kurumsal koku kimliği ve difüzör teknolojileri.'
      },
      {
        label: 'B2G Kamu Tedariği',
        href: '/is-modellerimiz/b2g',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karisik/fruity/A_luxurious,_high-end_202604270550.jpeg',
        teaserTitle: 'B2G Kamu Tedariği & İRAY',
        teaserDesc: 'DMO kataloglarında yer alan İRAY markalı kağıt, hijyen ve endüstriyel koku ikmal tedariğimiz.'
      },
    ],
  },
  {
    label: 'E-Katalog',
    href: '/e-katalog',
    icon: 'book-open',
    image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karisik/floral&fruity/A_luxurious,_high-end_202604270603.jpeg',
    teaserTitle: 'Ürün Portföyü',
    teaserDesc: 'Eviniz ve aracınız için Extrait de Parfum konsantrasyonuna sahip lüks koku kataloğu.',
    children: [
      {
        label: 'Elektronik Katalog',
        href: '/e-katalog',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karisik/floral&fruity/A_luxurious,_high-end_202604270603.jpeg',
        teaserTitle: 'Ürün Portföyü',
        teaserDesc: 'Eviniz ve aracınız için Extrait de Parfum konsantrasyonuna sahip lüks koku kataloğu.'
      },
      {
        label: 'Premium Reed Diffusers',
        href: '/urunlerimiz/reed-diffusers',
        image: '/kokular/oda-kokulari/gorseller/kutuvesise/floral-amber-kutuvesise.png',
        teaserTitle: 'Lüks Ev Kokuları',
        teaserDesc: 'Yüksek konsantrasyonlu bambu çubuklu oda parfümleri ve şık tasarım kutuları.'
      },
      {
        label: 'Premium Auto Fragrances',
        href: '/urunlerimiz/auto-fragrances',
        image: '/kokular/oto-kokulari/floral-amber-oto-sise.png',
        teaserTitle: 'Araç Parfümleri',
        teaserDesc: 'Doğal ahşap kapaklı ve şık ipli şişe tasarımlı premium araç parfümleri.'
      },
      {
        label: 'Perfume Collection',
        href: '/urunlerimiz/parfumler',
        badge: 'Yakında',
        image: '/kokular/parfumler/erkek/niche/liquid-chrome/Remove_the_selected_reflection_2K_202605050325.jpeg',
        teaserTitle: 'Perfume Collection',
        teaserDesc: 'Teninize lüksü fısıldayan, yüksek kalıcılığa sahip Extrait de Parfum koleksiyonumuz.'
      },
    ],
  },
  {
    label: 'Nos Canda One',
    href: '/vakif',
    icon: 'heart',
    image: '/images/vakif/ana-sayfa-2.png',
    teaserTitle: 'Nos Canda One',
    teaserDesc: 'Birleşiyoruz, güçleniyoruz. Sağlık, eğitim, barınma ve topluluk geliştirme alanlarında kalıcı değişimler yaratıyoruz.'
  },
  {
    label: 'Akademi',
    href: '/akademi',
    icon: 'academic-cap',
    image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karisik/fruity&floral/A_beautiful,_romantic_202604270600.jpeg',
    teaserTitle: 'Nos Canda Akademi',
    teaserDesc: 'Girişimci adaylarına yönelik eğitim programları, koku uzmanlığı stajları ve üniversite burs olanaklarımız.'
  },
  {
    label: 'Yatırımcı İlişkileri',
    href: '/yatirimci-iliskileri',
    icon: 'chart-bar',
    image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karanlik(amber)/A_luxurious,_high-end_202604270541.jpeg',
    teaserTitle: 'Şeffaflık & Büyüme',
    teaserDesc: 'Faaliyet raporları, kurumsal yönetim ilkeleri ve sürdürülebilir büyüme odaklı finansal verilerimiz.',
    children: [
      {
        label: 'Yatırımcı İlişkileri Ana Sayfa',
        href: '/yatirimci-iliskileri',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karanlik(amber)/A_luxurious,_high-end_202604270541.jpeg',
        teaserTitle: 'Şeffaflık & Büyüme',
        teaserDesc: 'Faaliyet raporları, kurumsal yönetim ilkeleri ve sürdürülebilir büyüme odaklı finansal verilerimiz.'
      },
      {
        label: 'Finansal Raporlar & Sunumlar',
        href: '/yatirimci-iliskileri/finansal-raporlar',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karanlik(amber)/A_luxurious,_high-end_202604270541.jpeg',
        teaserTitle: 'Finansal Raporlar',
        teaserDesc: 'Yıllık ve çeyreklik bazda şeffaf finansal tablolarımız, denetim raporlarımız ve analiz sunumları.'
      },
      {
        label: 'Kurumsal Yönetim İlkeleri',
        href: '/yatirimci-iliskileri/kurumsal-yonetim',
        image: '/kokular/setler/odakokususet/revizeolacak/set-gorseller/karisik/fruity/An_artistic_and_202604270551.jpeg',
        teaserTitle: 'Kurumsal Yönetim İlkeleri',
        teaserDesc: 'Yönetim kurulu yapıları, etik kurallarımız, sürdürülebilirlik hedefleri ve uyumluluk politikaları.'
      },
    ],
  },
  {
    label: 'İletişim',
    href: '/iletisim',
    icon: 'envelope',
    image: '/kokular/parfumler/erkek/niche/liquid-chrome/Remove_the_selected_reflection_2K_202605050325.jpeg',
    teaserTitle: 'İrtibat Kanalları',
    teaserDesc: 'Genel merkez adresimiz, telefonlarımız ve kiosk bayilik başvuru süreçlerimiz.',
    children: [
      {
        label: 'Tüm İletişim Kanalları',
        href: '/iletisim',
        image: '/kokular/parfumler/erkek/niche/liquid-chrome/Remove_the_selected_reflection_2K_202605050325.jpeg',
        teaserTitle: 'İrtibat Kanalları',
        teaserDesc: 'Genel merkez adresimiz, telefonlarımız ve kiosk bayilik başvuru süreçlerimiz.'
      },
      {
        label: 'Genel Merkez',
        href: '/iletisim/genel-merkez',
        image: '/kokular/parfumler/erkek/niche/dark-oath/Replace_the_logo_with_the_202605042317.jpeg',
        teaserTitle: 'Merkez Ofis',
        teaserDesc: 'Adres, telefon, e-posta bilgileri ve genel müdürlük departmanlarımızın iletişim kanalları.'
      },
      {
        label: 'Bayilik Başvurusu',
        href: '/iletisim/bayilik-basvurusu',
        image: '/kokular/parfumler/erkek/niche/outland/Replace_the_logo_on_the_202605050338.jpeg',
        teaserTitle: 'Kiosk Başvuru Formu',
        teaserDesc: 'Lokasyon, bütçe ve franchise tercihinizi belirtebileceğiniz resmi başvuru portalı.'
      },
    ],
  },
];

/** Footer link columns for the mega-footer */
export const FOOTER_COLUMNS = [
  {
    title: 'Kurumsal Bilgiler',
    links: [
      { label: 'Kurumsal Bilgiler', href: '/kurumsal-bilgiler' },
      { label: 'Hikayemiz', href: '/hakkimizda/hikayemiz' },
      { label: 'Yüksek Konsantrasyon', href: '/hakkimizda/felsefe' },
      { label: 'Duyurular', href: '/hakkimizda/duyurular' },
      { label: 'Yatırımcı İlişkileri', href: '/yatirimci-iliskileri' },
    ],
  },
  {
    title: 'Girişimcilik',
    links: [
      { label: 'Girişimcilik Portalı', href: '/girisimcilik' },
      { label: 'Monolith Kiosk', href: '/girisimcilik/monolith-kiosk' },
      { label: 'Bölge Kalkanı', href: '/girisimcilik/bolge-kalkani' },
      { label: 'Dijital Ortaklık', href: '/girisimcilik/dijital-ortaklik' },
    ],
  },
  {
    title: 'İş Modelleri',
    links: [
      { label: 'İş Modellerimiz', href: '/is-modellerimiz' },
      { label: 'B2C Retail', href: '/is-modellerimiz/b2c' },
      { label: 'B2B Wholesale', href: '/is-modellerimiz/b2b' },
      { label: 'Kurumsal Alan', href: '/is-modellerimiz/kurumsal-alan' },
      { label: 'B2G Kamu Tedariği', href: '/is-modellerimiz/b2g' },
    ],
  },
  {
    title: 'E-Katalog',
    links: [
      { label: 'Elektronik Katalog', href: '/e-katalog' },
      { label: 'Premium Reed Diffusers', href: '/urunlerimiz/reed-diffusers' },
      { label: 'Premium Auto Fragrances', href: '/urunlerimiz/auto-fragrances' },
      { label: 'Perfume Collection', href: '/urunlerimiz/parfumler' },
    ],
  },
  {
    title: 'Eko-Sosyal',
    links: [
      { label: 'Nos Canda Akademi', href: '/akademi' },
      { label: 'Nos Canda One', href: '/vakif' },
    ],
  },
  {
    title: 'İletişim',
    links: [
      { label: 'Tüm İletişim', href: '/iletisim' },
      { label: 'Genel Merkez', href: '/iletisim/genel-merkez' },
      { label: 'Bayilik Başvurusu', href: '/iletisim/bayilik-basvurusu' },
    ],
  },
];


/** Mock postal code dataset for the Territory Shield validator */
export interface PostalZone {
  code: string;
  district: string;
  city: string;
  status: 'available' | 'protected';
}

export const POSTAL_ZONES: PostalZone[] = [
  { code: '34000', district: 'Fatih', city: 'İstanbul', status: 'protected' },
  { code: '34340', district: 'Beşiktaş', city: 'İstanbul', status: 'protected' },
  { code: '34710', district: 'Kadıköy', city: 'İstanbul', status: 'protected' },
  { code: '34750', district: 'Ataşehir', city: 'İstanbul', status: 'available' },
  { code: '06100', district: 'Çankaya', city: 'Ankara', status: 'protected' },
  { code: '06560', district: 'Yenimahalle', city: 'Ankara', status: 'available' },
  { code: '35210', district: 'Konak', city: 'İzmir', status: 'protected' },
  { code: '35530', district: 'Karşıyaka', city: 'İzmir', status: 'available' },
  { code: '16010', district: 'Osmangazi', city: 'Bursa', status: 'available' },
  { code: '07100', district: 'Muratpaşa', city: 'Antalya', status: 'protected' },
  { code: '07200', district: 'Konyaaltı', city: 'Antalya', status: 'available' },
  { code: '01010', district: 'Seyhan', city: 'Adana', status: 'available' },
  { code: '42030', district: 'Selçuklu', city: 'Konya', status: 'available' },
  { code: '55000', district: 'İlkadım', city: 'Samsun', status: 'available' },
  { code: '61100', district: 'Ortahisar', city: 'Trabzon', status: 'available' },
];
