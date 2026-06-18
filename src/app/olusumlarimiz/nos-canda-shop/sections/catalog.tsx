'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

export interface ScentDetail {
  id: string;
  name: string;
  category: 'diffuser' | 'auto' | 'perfume';
  price: number;
  size: string;
  notes: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
  image: string;
  status?: string;
}

export const SCENT_PRODUCTS: ScentDetail[] = [
  {
    id: "diffuser-floral-amber",
    name: "Floral Amber Reed Diffuser",
    category: 'diffuser',
    price: 950,
    size: '120 ML',
    notes: "Floral & Amber",
    topNotes: ['Greyfurt', 'Bergamot'],
    heartNotes: ["Floral", 'Mısır Yasemini'],
    baseNotes: ["Amber", 'Sedir Ağacı', 'Beyaz Misk'],
    description: "Sıcak kehribarın asil dokunuşu ve narin çiçeklerin lüks ev buluşması. Rattan çubuklarıyla mekan boyunca zarafetle salınır.",
    image: "/kokular/oda-kokulari/gorseller/kutuvesise/floral-amber-kutuvesise.png",
  },
  {
    id: "diffuser-fruity-amber",
    name: "Fruity Amber Reed Diffuser",
    category: 'diffuser',
    price: 950,
    size: '120 ML',
    notes: "Fruity & Amber",
    topNotes: ['Greyfurt', 'Bergamot'],
    heartNotes: ["Fruity", 'Mısır Yasemini'],
    baseNotes: ["Amber", 'Sedir Ağacı', 'Beyaz Misk'],
    description: "Egzotik kırmızı meyveler ile sıcak kehribarın zengin, meyvemsi ve modern tatlı uyumu.",
    image: "/kokular/oda-kokulari/gorseller/kutuvesise/fruity-amber-kutuvesise.png",
  },
  {
    id: "diffuser-lavender-jasmine",
    name: "Lavender Jasmine Reed Diffuser",
    category: 'diffuser',
    price: 950,
    size: '120 ML',
    notes: "Lavender & Jasmine",
    topNotes: ['Greyfurt', 'Bergamot'],
    heartNotes: ["Lavender", 'Mısır Yasemini'],
    baseNotes: ["Jasmine", 'Sedir Ağacı', 'Beyaz Misk'],
    description: "Provans lavantalarının yatıştırıcı ferahlığı ve yasemin çiçeklerinin asil zarafeti.",
    image: "/kokular/oda-kokulari/gorseller/kutuvesise/lavender-jasmine-kutuvesise.png",
  },
  {
    id: "diffuser-orange-jasmine",
    name: "Orange Jasmine Reed Diffuser",
    category: 'diffuser',
    price: 950,
    size: '120 ML',
    notes: "Orange & Jasmine",
    topNotes: ['Greyfurt', 'Bergamot'],
    heartNotes: ["Orange", 'Mısır Yasemini'],
    baseNotes: ["Jasmine", 'Sedir Ağacı', 'Beyaz Misk'],
    description: "Akdeniz narenciyelerinin canlandırıcı enerjisi ve yaseminin dinlendirici zarafeti.",
    image: "/kokular/oda-kokulari/gorseller/kutuvesise/orange-jasmine-kutuvesise.png",
  },
  {
    id: "auto-floral-amber",
    name: "Floral Amber Auto Fragrance",
    category: 'auto',
    price: 350,
    size: '8 ML',
    notes: "Floral & Amber",
    topNotes: ['Mandalina kabuğu', 'Aromatik Notalar'],
    heartNotes: ["Floral", 'Yasemin'],
    baseNotes: ["Amber", 'Hafif Misk', 'Sandal Ağacı'],
    description: "Zarif cam şişe ve doğal ahşap kapak tasarımıyla lüks çiçek ve kehribar esintilerini otomobilinize taşıyan kalıcı oto parfümü.",
    image: "/kokular/oto-kokulari/floral-amber-oto-sise.png",
  },
  {
    id: "auto-fruity-amber",
    name: "Fruity Amber Auto Fragrance",
    category: 'auto',
    price: 350,
    size: '8 ML',
    notes: "Fruity & Amber",
    topNotes: ['Mandalina kabuğu', 'Aromatik Notalar'],
    heartNotes: ["Fruity", 'Yasemin'],
    baseNotes: ["Amber", 'Hafif Misk', 'Sandal Ağacı'],
    description: "Ahududu ve karamel gibi meyvemsi ve tatlı notalarla aracınızda keyifli, konforlu bir atmosfer sunan oto parfümü.",
    image: "/kokular/oto-kokulari/fruity-amber-oto-sise.png",
  },
  {
    id: "auto-lavender-jasmine",
    name: "Lavender Jasmine Auto Fragrance",
    category: 'auto',
    price: 350,
    size: '8 ML',
    notes: "Lavender & Jasmine",
    topNotes: ['Mandalina kabuğu', 'Aromatik Notalar'],
    heartNotes: ["Lavender", 'Yasemin'],
    baseNotes: ["Jasmine", 'Hafif Misk', 'Sandal Ağacı'],
    description: "Lavantanın stresi azaltan aromatik etkisi ve yaseminin asil kokusuyla rahatlatıcı sürüş deneyimi sağlayan oto parfümü.",
    image: "/kokular/oto-kokulari/lavender-jasmine-oto-sise.png",
  },
  {
    id: "auto-orange-jasmine",
    name: "Orange Jasmine Auto Fragrance",
    category: 'auto',
    price: 350,
    size: '8 ML',
    notes: "Orange & Jasmine",
    topNotes: ['Mandalina kabuğu', 'Aromatik Notalar'],
    heartNotes: ["Orange", 'Yasemin'],
    baseNotes: ["Jasmine", 'Hafif Misk', 'Sandal Ağacı'],
    description: "Taze portakal çiçeği ve Akdeniz narenciyesi notalarıyla sürüş esnasında enerjinizi tazeleyen canlandırıcı oto kokusu.",
    image: "/kokular/oto-kokulari/orange-jasmine-oto-sise.png",
  },
  {
    id: "perfume-golden-chapter",
    name: "Golden Chapter Extrait",
    category: 'perfume',
    price: 2450,
    size: '50 ML',
    notes: "Golden Chapter Kadın Serisi",
    topNotes: ['Nadir Çiçekler', 'Safran', 'Kakule'],
    heartNotes: ['Siyah Orkide', 'Lotus', 'Şam Gülü'],
    baseNotes: ['Deri', 'Tütün Yaprağı', 'Kehribar', 'Bitkisel Misk'],
    description: "Teninize lüksü fısıldayan, asil çiçek ve baharat kompozisyonuna sahip lüks kadın parfümü.",
    image: "/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-3.jpg",
    status: 'Yakında',
  },
  {
    id: "perfume-liquid-chrome",
    name: "Liquid Chrome Extrait",
    category: 'perfume',
    price: 2450,
    size: '50 ML',
    notes: "Niche Unisex Serisi",
    topNotes: ['Nadir Çiçekler', 'Safran', 'Kakule'],
    heartNotes: ['Siyah Orkide', 'Lotus', 'Şam Gülü'],
    baseNotes: ['Deri', 'Tütün Yaprağı', 'Kehribar', 'Bitkisel Misk'],
    description: "Greyfurt, nane ve metalik akorlarla vetiver ve meşe yosununun iddialı, avangart unisex buluşması.",
    image: "/kokular/parfumler/erkek/niche/liquid-chrome/Remove_the_selected_reflection_2K_202605050325.jpeg",
    status: 'Yakında',
  },
  {
    id: "perfume-royal-orchid",
    name: "Royal Orchid Extrait",
    category: 'perfume',
    price: 2450,
    size: '50 ML',
    notes: "Boutique Ten Parfümü",
    topNotes: ['Nadir Çiçekler', 'Safran', 'Kakule'],
    heartNotes: ['Siyah Orkide', 'Lotus', 'Şam Gülü'],
    baseNotes: ['Deri', 'Tütün Yaprağı', 'Kehribar', 'Bitkisel Misk'],
    description: "Karanlık trüf mantarı, lotus ağacı ve siyah orkidenin mistik, zengin ve son derece prestijli dansı.",
    image: "/kokular/parfumler/kadin/goldenchapter/royal-orchid/royal-orchid-1.jpg",
    status: 'Yakında',
  },
  {
    id: "perfume-dark-oath",
    name: "Dark Oath Extrait",
    category: 'perfume',
    price: 2450,
    size: '50 ML',
    notes: "Premium Erkek Serisi",
    topNotes: ['Nadir Çiçekler', 'Safran', 'Kakule'],
    heartNotes: ['Siyah Orkide', 'Lotus', 'Şam Gülü'],
    baseNotes: ['Deri', 'Tütün Yaprağı', 'Kehribar', 'Bitkisel Misk'],
    description: "Yoğun karabiber, kakule ve safranın tütün yaprağı, deri, oud ve amber tabanıyla asil harmanı.",
    image: "/kokular/parfumler/erkek/niche/dark-oath/Replace_the_logo_with_the_202605042317.jpeg",
    status: 'Yakında',
  },
];

export interface AllergenInfo {
  name: string;
  casNumber: string;
  chemicalClass: string;
  limitRate: string;
  notes: string;
  hazardCode: string;
}

export const ALL_ALLERGENS: AllergenInfo[] = [
  {
    name: "Amyl Cinnamal",
    casNumber: "122-40-7",
    chemicalClass: "Aliphatic Aldehyde",
    limitRate: "0.01%",
    notes: "Yasemin ve floral kokularda zenginlik katar.",
    hazardCode: "H317, H411",
  },
  {
    name: "Amylcinnamyl Alcohol",
    casNumber: "101-85-9",
    chemicalClass: "Aromatic Alcohol",
    limitRate: "0.01%",
    notes: "Nadir baharat ve egzotik çiçek formüllerinde.",
    hazardCode: "H317",
  },
  {
    name: "Anise Alcohol",
    casNumber: "105-13-5",
    chemicalClass: "Aromatic Alcohol",
    limitRate: "0.01%",
    notes: "Tatlı, anason ve vanilya esintilerinde bulunur.",
    hazardCode: "H317, H319",
  },
  {
    name: "Benzyl Alcohol",
    casNumber: "100-51-6",
    chemicalClass: "Aromatic Alcohol",
    limitRate: "0.01%",
    notes: "Doğal koruyucu ve solvent rolü üstlenir.",
    hazardCode: "H302, H332, H319",
  },
  {
    name: "Benzyl Benzoate",
    casNumber: "120-51-4",
    chemicalClass: "Aromatic Ester",
    limitRate: "0.01%",
    notes: "Kokuyu sabitleyici (fixative) özelliği yüksektir.",
    hazardCode: "H302, H411",
  },
  {
    name: "Benzyl Cinnamate",
    casNumber: "103-41-3",
    chemicalClass: "Aromatic Ester",
    limitRate: "0.01%",
    notes: "Şifalı reçineler ve amber kokularında mevcuttur.",
    hazardCode: "H317, H411",
  },
  {
    name: "Benzyl Salicylate",
    casNumber: "118-58-1",
    chemicalClass: "Aromatic Ester",
    limitRate: "0.01%",
    notes: "Orkide ve güneşli çiçeksi akorlarda sabitleyici.",
    hazardCode: "H317, H319, H412",
  },
  {
    name: "Cinnamal",
    casNumber: "104-55-2",
    chemicalClass: "Aromatic Aldehyde",
    limitRate: "0.01%",
    notes: "Karabiber ve tarçın baharat notalarında yaygındır.",
    hazardCode: "H312, H315, H317, H319",
  },
  {
    name: "Cinnamyl Alcohol",
    casNumber: "104-54-1",
    chemicalClass: "Aromatic Alcohol",
    limitRate: "0.01%",
    notes: "Sıcak odunsu ve dumanlı deri formüllerinde.",
    hazardCode: "H317",
  },
  {
    name: "Citral",
    casNumber: "5392-40-5",
    chemicalClass: "Aliphatic Aldehyde",
    limitRate: "0.01%",
    notes: "Narenciye çiçekleri ve limon çimeni özlerinde.",
    hazardCode: "H315, H317, H319",
  },
  {
    name: "Citronellol",
    casNumber: "106-22-9",
    chemicalClass: "Aliphatic Alcohol",
    limitRate: "0.01%",
    notes: "Gül ve sardunya çiçeklerinin ana bileşenlerindendir.",
    hazardCode: "H315, H317, H319",
  },
  {
    name: "Coumarin",
    casNumber: "91-64-5",
    chemicalClass: "Lactone",
    limitRate: "0.01%",
    notes: "Tonka fasulyesi ve tütün kokularında tatlılık verir.",
    hazardCode: "H302, H317",
  },
  {
    name: "Eugenol",
    casNumber: "97-53-0",
    chemicalClass: "Phenol",
    limitRate: "0.01%",
    notes: "Karanfil tomurcukları ve egzotik baharatlarda bulunur.",
    hazardCode: "H317, H319",
  },
  {
    name: "Farnesol",
    casNumber: "4602-84-0",
    chemicalClass: "Aliphatic Alcohol",
    limitRate: "0.01%",
    notes: "Frezya ve ıhlamur gibi narin çiçeksi kokularda.",
    hazardCode: "H315, H317, H319",
  },
  {
    name: "Geraniol",
    casNumber: "106-24-1",
    chemicalClass: "Aliphatic Alcohol",
    limitRate: "0.01%",
    notes: "Gül ve yasemin esansiyel yağlarında bolca bulunur.",
    hazardCode: "H315, H317, H318",
  },
  {
    name: "Hexyl Cinnamal",
    casNumber: "101-86-0",
    chemicalClass: "Aromatic Aldehyde",
    limitRate: "0.01%",
    notes: "Yasemin kokusunu güçlendirici yeşil akordur.",
    hazardCode: "H317, H400, H411",
  },
  {
    name: "Hydroxycitronellal",
    casNumber: "107-75-5",
    chemicalClass: "Aliphatic Aldehyde",
    limitRate: "0.01%",
    notes: "Müge çiçeği ve tatlı çiçeksi salınımlarda.",
    hazardCode: "H317, H319",
  },
  {
    name: "Isoeugenol",
    casNumber: "97-54-1",
    chemicalClass: "Phenol",
    limitRate: "0.01%",
    notes: "Karanfil ve dumanlı baharat akorlarında sabitleyici.",
    hazardCode: "H302, H312, H315, H317, H319",
  },
  {
    name: "Limonene",
    casNumber: "5989-27-5",
    chemicalClass: "Terpene",
    limitRate: "0.01%",
    notes: "Tüm narenciye ve portakal kabuğu yağlarında ana bileşen.",
    hazardCode: "H226, H315, H317, H410",
  },
  {
    name: "Linalool",
    casNumber: "78-70-6",
    chemicalClass: "Terpene Alcohol",
    limitRate: "0.01%",
    notes: "Lavanta, adaçayı ve fesleğen yağlarında ana gövdedir.",
    hazardCode: "H315, H317, H319",
  },
  {
    name: "Butylphenyl Methylpropional",
    casNumber: "80-54-6",
    chemicalClass: "Aromatic Aldehyde",
    limitRate: "0.01%",
    notes: "Kullanımı yasaklı/kısıtlı taze floral yapay esans.",
    hazardCode: "H302, H315, H317, H360D",
  },
  {
    name: "Methyl 2-Octynoate",
    casNumber: "111-12-6",
    chemicalClass: "Aliphatic Ester",
    limitRate: "0.01%",
    notes: "Menekşe ve taze kesilmiş çim kokusu verir.",
    hazardCode: "H302, H317",
  },
  {
    name: "Alpha-Isomethyl Ionone",
    casNumber: "127-51-5",
    chemicalClass: "Ketone",
    limitRate: "0.01%",
    notes: "Menekşe ve pudralı asil koku hissi kazandırır.",
    hazardCode: "H317, H319, H411",
  },
  {
    name: "Evernia Prunastri (Oakmoss)",
    casNumber: "90028-68-5",
    chemicalClass: "Lichen Extract",
    limitRate: "0.01%",
    notes: "Meşe yosunu özü, şipre parfümlerin temelidir.",
    hazardCode: "H317",
  },
  {
    name: "Evernia Furfuracea (Treemoss)",
    casNumber: "90028-67-4",
    chemicalClass: "Lichen Extract",
    limitRate: "0.01%",
    notes: "Ağaç yosunu özü, odunsu ve topraksı kokularda.",
    hazardCode: "H317",
  },
  {
    name: "Lyral",
    casNumber: "31906-04-4",
    chemicalClass: "Aliphatic Aldehyde",
    limitRate: "0.01%",
    notes: "Hassas ciltler için yasaklanmış sentetik koku maddesi.",
    hazardCode: "H317",
  },
];

export interface CareStep {
  step: string;
  title: string;
  description: string;
  importance: 'High' | 'Medium';
}

export const DIFFUSER_CARE_STEPS: CareStep[] = [
  {
    step: "01",
    title: "İlk Kurulumda Çubuk Doygunluğu",
    description: "Çubukları şişeye koyduktan 2 saat sonra ters çevirerek esansın çubuğun her iki tarafına da emilmesini sağlayın. Bu ilk koku salınımını tetikler.",
    importance: "High",
  },
  {
    step: "02",
    title: "Haftalık Çubuk Aktivasyonu",
    description: "Kokunun sürekli ve güçlü yayılması için çubukları haftada en az bir kez ters düz etmenizi öneririz. Bu kuruyan çubuk uçlarını tazeler.",
    importance: "Medium",
  },
  {
    step: "03",
    title: "Hava Sirkülasyonu Yönetimi",
    description: "Şişeyi cereyanlı pencerelerin yakınına koymayın; bu esansın çok hızlı uçmasına sebep olur. Dengeli bir hava sirkülasyonu olan odanın orta noktaları idealdir.",
    importance: "High",
  },
  {
    step: "04",
    title: "Doğrudan Güneş Işığı Koruması",
    description: "Siyah şişelerimiz UV korumalıdır ancak esansın bozulmaması için ürünü doğrudan güneş ışığı alan kalorifer peteği üstü gibi yerlerden uzak tutunuz.",
    importance: "High",
  },
  {
    step: "05",
    title: "Çubuk Değişim Zamanı",
    description: "Tozlanan veya zamanla tıkanan rattan çubuklar kokuyu çekemez hale gelir. 2 ayda bir veya esans yenilendiğinde çubukları da yenileyin.",
    importance: "High",
  },
  {
    step: "06",
    title: "Araç Kokusu Ahşap Kapak Doyurma",
    description: "Araç kokusunu asarken ahşap kapağın esansı emebilmesi için şişeyi 2-3 saniyeliğine ters çevirin. Kapak doyunca sızıntı yapmaması için düz asın.",
    importance: "High",
  },
  {
    step: "07",
    title: "Çocuk ve Evcil Hayvan Güvenliği",
    description: "Ürünleri evcil hayvanların ve çocukların ulaşamayacağı yüksek ve düz zeminlere konumlandırın. Sıvının ahşap veya plastik yüzeylere damlaması boyayı aşındırabilir.",
    importance: "High",
  },
  {
    step: "08",
    title: "Toz Filtreleme Bakımı",
    description: "Tozlu ortamlarda rattan liflerin tıkanmaması için oda kokularını toz alımından sonra konumlandırın veya tozlanan çubukları kuru bir bezle temizleyin.",
    importance: "Medium",
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; score: string }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Yaşam alanınızda nasıl bir atmosfer arzuluyorsunuz?",
    options: [
      {
        label: "Sıcak, tatlı ve davetkar bir şömine köşesi",
        score: "Floral Amber",
      },
      {
        label: "Enerjik, narenciyeli ve ferah bir Akdeniz sabahı",
        score: "Orange Jasmine",
      },
      {
        label: "Sakinleştirici, huzurlu ve zihni dinlendiren bir spa alanı",
        score: "Lavender Jasmine",
      },
      {
        label: "Dumanlı, maskülen ve prestijli bir kütüphane odası",
        score: "Dark Oath",
      },
    ]
  },
  {
    id: 2,
    question: "Hangi ana koku karakterleri sizi daha çok cezbeder?",
    options: [
      {
        label: "Kırmızı ahududu ve tatlı karamel tonları",
        score: "Fruity Amber",
      },
      {
        label: "Metalik serinlik, greyfurt ve nane ferahlığı",
        score: "Liquid Chrome",
      },
      {
        label: "Siyah orkide, mistik tütsü ve baharatlar",
        score: "Royal Orchid",
      },
      {
        label: "Doğal çam ormanı ve ardıç kokusu",
        score: "Outland",
      },
    ]
  },
  {
    id: 3,
    question: "Mekanınızda en çok hangi mevsim havasını hissetmek istersiniz?",
    options: [
      {
        label: "Karlar altındaki dağ evinin sıcak odun kokusu",
        score: "Dark Oath",
      },
      {
        label: "Yaz aylarında esen tatlı narenciye rüzgarı",
        score: "Orange Jasmine",
      },
      {
        label: "İlkbahar çiçeklerinin taze açan zarif kokusu",
        score: "Floral Amber",
      },
      {
        label: "Sonbaharın serin, mistik ve romantik yaprak kokusu",
        score: "Royal Orchid",
      },
    ]
  },
  {
    id: 4,
    question: "Kullanmak istediğiniz mekanın hava akımı durumu nasıldır?",
    options: [
      {
        label: "Çok sirkülasyonlu, sürekli hava alan açık bir antre",
        score: "Orange Jasmine",
      },
      {
        label: "Kapalı, sakin ve rüzgarsız bir yatak odası",
        score: "Lavender Jasmine",
      },
      {
        label: "Büyük, yüksek tavanlı geniş bir bekleme lobisi",
        score: "Royal Orchid",
      },
      {
        label: "Normal sirkülasyonlu şık bir çalışma odası",
        score: "Liquid Chrome",
      },
    ]
  },
];

/**
 * Calculates the maximum safe fragrance diffusion limits based on volume and IFRA norms.
 */
export function getIFRALimit(roomVolume: number, isPetOrChildPresent: boolean): { maxSafeMlPerDay: number; advice: string } {
  const baseLimit = roomVolume * 0.05;
  const maxSafeMlPerDay = isPetOrChildPresent ? Math.round(baseLimit * 0.6 * 10) / 10 : Math.round(baseLimit * 10) / 10;
  let advice = '';
  if (isPetOrChildPresent) {
    advice = 'Evcil hayvan/çocuk bulunduğundan difüzyon hızını düşük tutmanız ve günde maksimum 4-5 saat havalandırma sağlamanız önerilir.';
  } else {
    advice = 'Standart kullanım limitlerine uygundur. Haftada bir çubukları ters düz ederek stabil koku yayılımı elde edebilirsiniz.';
  }
  return { maxSafeMlPerDay, advice };
}

export function Catalog() {
  const [activeTab, setActiveTab] = useState<'all' | 'diffuser' | 'auto' | 'perfume'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ScentDetail | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [allergenQuery, setAllergenQuery] = useState<string>('');

  // Quiz States
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  // Gift Set States
  const [giftDiffuser, setGiftDiffuser] = useState<string>('Floral Amber Reed Diffuser');
  const [giftAuto, setGiftAuto] = useState<string>('Floral Amber Auto Fragrance');
  const [giftWrap, setGiftWrap] = useState<string>('Classic Gold Box');

  // Safety Calculator States
  const [calcVolume, setCalcVolume] = useState<number>(60);
  const [petChildPresent, setPetChildPresent] = useState<boolean>(false);

  const filteredProducts = SCENT_PRODUCTS.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  const filteredAllergens = ALL_ALLERGENS.filter(a =>
    a.name.toLowerCase().includes(allergenQuery.toLowerCase()) ||
    a.notes.toLowerCase().includes(allergenQuery.toLowerCase()) ||
    a.chemicalClass.toLowerCase().includes(allergenQuery.toLowerCase())
  );

  const baseBundlePrice = 950 + 350 + 150;
  const bundlePrice = Math.round(baseBundlePrice * 0.9);
  const safetyLimitInfo = getIFRALimit(calcVolume, petChildPresent);

  const handleQuizAnswer = (score: string) => {
    const newAnswers = [...quizAnswers, score];
    setQuizAnswers(newAnswers);
    if (quizStep + 1 < QUIZ_QUESTIONS.length) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizResult(score);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]" id="katalog">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="badge-corporate mb-4">Ürün Koleksiyonumuz</span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            E-Katalog & Koleksiyonlar
          </h2>
          <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed mt-2">
            Grasse esanslarından Extrait de Parfum standartlarında üretilen bambu çubuklu oda parfümleri ve lüks oto kokuları.
          </p>
          <div className="gold-line max-w-[80px] mx-auto mt-6" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'Tüm Koleksiyon' },
            { id: 'diffuser', label: 'Oda Parfümleri (Reed Diffusers)' },
            { id: 'auto', label: 'Araç Parfümleri (Auto Fragrances)' },
            { id: 'perfume', label: 'Ten Parfümleri (Niche Perfumes)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-gothic tracking-widest uppercase border transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-neutral-900 font-semibold'
                  : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} direction="up" distance={40} delay={idx * 0.05}>
              <div className="surface-elevated rounded-2xl border border-[var(--border-subtle)] flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-square w-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={220}
                    className="object-contain max-h-full transition-transform duration-500 hover:scale-105"
                  />
                  {product.status && (
                    <span className="absolute top-4 right-4 bg-amber-500/90 text-neutral-950 font-gothic text-[9px] tracking-widest uppercase px-3 py-1 rounded-full font-bold shadow-sm">
                      {product.status}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[9px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold block mb-1">
                      {product.size} · {product.notes}
                    </span>
                    <h3 className="font-cinzel text-base font-bold text-[var(--text-primary)] leading-snug">
                      {product.name}
                    </h3>
                    <p className="font-body text-[11px] text-[var(--text-secondary)] leading-relaxed mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between mt-auto">
                    {product.status ? (
                      <span className="text-[10px] font-gothic text-[var(--text-muted)] tracking-wider">YAKINDA</span>
                    ) : (
                      <span className="text-sm font-cinzel font-bold text-[var(--text-primary)]">
                        {product.price} TL
                      </span>
                    )}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-4 py-2 rounded-lg text-[10px] font-gothic tracking-widest uppercase border font-semibold bg-[var(--text-primary)] border-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-gold)] hover:border-[var(--accent-gold)] hover:text-neutral-950 transition-all duration-300"
                    >
                      Detaylar
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Scent Quiz Panel */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 mb-24 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="badge-corporate mb-2">Olfactory Quiz</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Hangi Nos Canda Kokusu Sizin İçin?</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Karakterinize ve koku tercihlerinize en uygun lüks koku profilimizi keşfedin.
            </p>
          </div>
          <div className="max-w-xl mx-auto border border-[var(--border-subtle)] rounded-2xl p-6 bg-[var(--bg-secondary)] min-h-[220px] flex flex-col justify-between">
            {quizResult === null ? (
              <div className="space-y-6">
                <div className="flex justify-between text-[9px] font-gothic text-[var(--text-muted)] uppercase tracking-wider">
                  <span>Soru {quizStep + 1} / {QUIZ_QUESTIONS.length}</span>
                  <span>Koku Keşfi</span>
                </div>
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-[var(--text-primary)]">{QUIZ_QUESTIONS[quizStep].question}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {QUIZ_QUESTIONS[quizStep].options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleQuizAnswer(opt.score)}
                      className="p-3 text-left rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--accent-gold)] text-xs font-body text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6 py-4">
                <span className="badge-corporate mx-auto">Uyum Sonucu</span>
                <h4 className="font-cinzel text-xl font-bold text-[var(--accent-gold)]">{quizResult} Serisi</h4>
                <p className="font-body text-xs text-[var(--text-secondary)] max-w-sm mx-auto leading-relaxed">
                  Cevaplarınıza göre yaşam alanınızda {quizResult} kokusuyla aradığınız huzur ve lüks ambiyansını bulacaksınız.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button onClick={resetQuiz} className="px-4 py-2 rounded-lg border border-[var(--border-subtle)] text-[10px] font-gothic tracking-wider uppercase font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                    Tekrar Çöz
                  </button>
                  <button onClick={() => {
                    const match = SCENT_PRODUCTS.find(p => p.name.includes(quizResult));
                    if (match) setSelectedProduct(match);
                  }} className="px-4 py-2 rounded-lg bg-[var(--accent-gold)] text-neutral-900 text-[10px] font-gothic tracking-wider uppercase font-bold hover:bg-white transition-colors duration-300">
                    Ürünü İncele
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gift Builder */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 mb-24 space-y-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Olfactory Designer</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Lüks Hediye Seti Tasarımcısı</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Bir adet bambu çubuklu oda parfümü, bir araç parfümü ve özel kaplama hediye kutusunu bir araya getirerek %10 indirimli prestij setinizi oluşturun.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[9px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">1. Oda Parfümü Seçin</label>
                <select
                  value={giftDiffuser}
                  onChange={(e) => setGiftDiffuser(e.target.value)}
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]"
                >
                  <option value="Floral Amber Reed Diffuser">Floral Amber Reed Diffuser (120 ML)</option>
                  <option value="Fruity Amber Reed Diffuser">Fruity Amber Reed Diffuser (120 ML)</option>
                  <option value="Lavender Jasmine Reed Diffuser">Lavender Jasmine Reed Diffuser (120 ML)</option>
                  <option value="Orange Jasmine Reed Diffuser">Orange Jasmine Reed Diffuser (120 ML)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-[9px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">2. Araç Kokusu Seçin</label>
                <select
                  value={giftAuto}
                  onChange={(e) => setGiftAuto(e.target.value)}
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]"
                >
                  <option value="Floral Amber Auto Fragrance">Floral Amber Auto Fragrance (8 ML)</option>
                  <option value="Fruity Amber Auto Fragrance">Fruity Amber Auto Fragrance (8 ML)</option>
                  <option value="Lavender Jasmine Auto Fragrance">Lavender Jasmine Auto Fragrance (8 ML)</option>
                  <option value="Orange Jasmine Auto Fragrance">Orange Jasmine Auto Fragrance (8 ML)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-[9px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">3. Kutu Kaplama Tasarımı</label>
                <select
                  value={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.value)}
                  className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]"
                >
                  <option value="Classic Gold Box">Classic Gold Box - Altın Baskılı Siyah Kutu (150 TL)</option>
                  <option value="Silk Ribbed Emerald Box">Silk Ribbed Emerald Box - İpek Kurdeleli Zümrüt Kutu (150 TL)</option>
                  <option value="Corporate Minimalist Box">Corporate Minimalist Box - Kurumsal Mat Siyah Kutu (150 TL)</option>
                </select>
              </div>
            </div>
            <div className="lg:col-span-5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-6">
              <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)] pb-3 border-b border-[var(--border-subtle)]">Set Özeti</h4>
              <div className="space-y-3 font-body text-xs text-[var(--text-secondary)]">
                <div className="flex justify-between">
                  <span>{giftDiffuser}</span>
                  <span className="text-[var(--text-primary)]">950 TL</span>
                </div>
                <div className="flex justify-between">
                  <span>{giftAuto}</span>
                  <span className="text-[var(--text-primary)]">350 TL</span>
                </div>
                <div className="flex justify-between">
                  <span>{giftWrap}</span>
                  <span className="text-[var(--text-primary)]">150 TL</span>
                </div>
                <div className="pt-3 border-t border-[var(--border-subtle)] flex justify-between font-cinzel text-sm font-bold text-[var(--text-primary)]">
                  <span>Toplam Değer:</span>
                  <span className="line-through text-xs text-[var(--text-muted)]">{baseBundlePrice} TL</span>
                </div>
                <div className="flex justify-between font-cinzel text-base font-bold text-[var(--accent-gold)]">
                  <span>Set Özel Fiyatı:</span>
                  <span>{bundlePrice} TL</span>
                </div>
              </div>
              <a
                href="https://noscanda.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center py-3 text-[10px] font-gothic tracking-widest uppercase font-bold flex items-center justify-center gap-2"
              >
                Siparişi Tamamla (noscanda.net) →
              </a>
            </div>
          </div>
        </div>

        {/* Fragrance Density Safety Calculator (complies with IFRA rules) */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 mb-24 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">IFRA Safety Calculator</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Oda Hacmi ve Güvenli Difüzyon Hesaplayıcı</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Uluslararası koku normlarına göre evinizde güvenli günlük buharlaşma sınırlarını kontrol edin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-gothic tracking-wider uppercase text-[var(--text-secondary)]">
                  <span>Oda Hacmi (Metreküp)</span>
                  <span className="text-[var(--accent-gold)] font-bold">{calcVolume} m³</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  value={calcVolume}
                  onChange={(e) => setCalcVolume(parseInt(e.target.value))}
                  className="w-full accent-[var(--accent-gold)] bg-[var(--border-subtle)] rounded-lg appearance-none h-1.5 cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-3 bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-subtle)]">
                <input
                  type="checkbox"
                  id="petChildCheck"
                  checked={petChildPresent}
                  onChange={(e) => setPetChildPresent(e.target.checked)}
                  className="rounded border-neutral-700 text-[var(--accent-gold)] focus:ring-[var(--accent-gold)] bg-neutral-900 w-4 h-4"
                />
                <label htmlFor="petChildCheck" className="text-xs font-body text-[var(--text-secondary)] cursor-pointer select-none">
                  Evde evcil hayvan veya 2 yaş altı çocuk bulunuyor.
                </label>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-gothic text-neutral-400 uppercase tracking-wider">Maksimum Güvenli Günlük Tüketim</span>
                <span className="text-xl font-cinzel font-bold text-[var(--accent-gold)]">{safetyLimitInfo.maxSafeMlPerDay} ML / Gün</span>
              </div>
              <p className="text-xs font-body text-[var(--text-secondary)] leading-relaxed">
                {safetyLimitInfo.advice}
              </p>
            </div>
          </div>
        </div>

        {/* Allergens Table */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">AB Kozmetik Alerjenleri & Güvenlik Beyannamesi</h3>
              <p className="font-body text-xs text-[var(--text-secondary)] mt-1">
                Avrupa Birliği (EC) No 1223/2009 kozmetik yönetmeliğine göre beyan edilen 26 koku bileşeni listesi.
              </p>
            </div>
            <input
              type="text"
              placeholder="Bileşen veya sınıf ara..."
              value={allergenQuery}
              onChange={(e) => setAllergenQuery(e.target.value)}
              className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] sm:w-64"
            />
          </div>
          <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)]">
            <table className="w-full text-left border-collapse text-xs font-body">
              <thead>
                <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] text-[10px] font-gothic tracking-wider uppercase text-[var(--text-secondary)]">
                  <th className="p-4">Alerjen Adı</th>
                  <th className="p-4">CAS Numarası</th>
                  <th className="p-4">Kimyasal Sınıfı</th>
                  <th className="p-4">Yönetmelik Limiti</th>
                  <th className="p-4">Tehlike Kodları</th>
                  <th className="p-4 text-right">Kullanım Alanı Açıklaması</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                {filteredAllergens.map((allergen) => (
                  <tr key={allergen.name} className="hover:bg-[var(--bg-secondary)]/50 transition-colors duration-200">
                    <td className="p-4 font-semibold text-[var(--text-primary)]">{allergen.name}</td>
                    <td className="p-4">{allergen.casNumber}</td>
                    <td className="p-4">{allergen.chemicalClass}</td>
                    <td className="p-4">{allergen.limitRate}</td>
                    <td className="p-4 font-mono text-[10px] text-amber-600 dark:text-amber-500">{allergen.hazardCode}</td>
                    <td className="p-4 text-right">{allergen.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative p-6 sm:p-8">
            <button
              onClick={() => { setSelectedProduct(null); setQuantity(1); }}
              className="absolute top-6 right-6 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square w-full bg-neutral-50 dark:bg-neutral-950 rounded-2xl flex items-center justify-center p-6 border border-[var(--border-subtle)]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={250}
                  height={250}
                  className="object-contain max-h-full"
                />
              </div>
              <div className="space-y-5 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                    {selectedProduct.size} · {selectedProduct.category.toUpperCase()}
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-3">
                    {selectedProduct.name}
                  </h3>
                  <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed mt-3">
                    {selectedProduct.description}
                  </p>
                  <div className="mt-4 space-y-2 bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-subtle)]">
                    <div className="text-[9px] font-gothic tracking-wider text-[var(--accent-gold)] uppercase font-semibold">Koku Piramidi</div>
                    <div className="text-xs font-body text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Üst Notalar:</strong> {selectedProduct.topNotes.join(', ')}</div>
                  <div className="text-xs font-body text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Alt Notalar:</strong> {selectedProduct.baseNotes.join(', ')}</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3 mt-auto">
                  {selectedProduct.status ? (
                    <div className="text-center p-3 rounded-lg border border-amber-500/20 bg-amber-500/5 text-amber-500 text-xs font-gothic tracking-wider uppercase font-semibold">
                      BU KOLEKSİYON ÇOK YAKINDA SUNULACAKTIR
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-gothic text-[var(--text-secondary)] tracking-wider">Toplam Tutar:</span>
                        <span className="text-lg font-cinzel font-bold text-[var(--text-primary)]">
                          {selectedProduct.price * quantity} TL
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex items-center border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-secondary)]">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-bold"
                          >
                            -
                          </button>
                          <span className="px-3 text-xs font-body font-semibold text-[var(--text-primary)]">{quantity}</span>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-bold"
                          >
                            +
                          </button>
                        </div>
                        <a
                          href={`https://noscanda.net/products/${selectedProduct.id.split('-').slice(1).join('-')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 text-center py-2.5 text-[10px] font-gothic tracking-widest uppercase font-semibold flex items-center justify-center gap-2"
                        >
                          Satın Al (noscanda.net)
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
