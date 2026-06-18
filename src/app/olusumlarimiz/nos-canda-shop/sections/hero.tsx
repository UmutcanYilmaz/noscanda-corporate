'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/core/ScrollReveal';
import Link from 'next/link';

export interface ScentProfile {
  name: string;
  family: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevity: number;
  projection: number;
  bestSeason: string;
  recommendedRoom: string;
  olfactoryVibe: string;
}

export const SCENT_PROFILES: ScentProfile[] = [
  {
    name: "Floral Amber",
    family: "Amber Floral",
    description: "Sıcak ve sarmalayıcı kehribar ile narin orkide, gül ve frezyanın asil birleşimi. Grasse laboratuvarlarında tasarlanan bu formül, mekanlara derinlik katar.",
    topNotes: ["Bergamot", "Sarı Mandalina", "Pembe Biber"],
    heartNotes: ["Siyah Orkide", "Şam Gülü", "Frezya"],
    baseNotes: ["Altın Kehribar", "Beyaz Misk", "Madagaskar Vanilyası"],
    longevity: 9,
    projection: 8,
    bestSeason: "Sonbahar / Kış",
    recommendedRoom: "Lobi ve Geniş Salonlar",
    olfactoryVibe: "Zarif, Sıcak ve Sarmalayıcı",
  },
  {
    name: "Fruity Amber",
    family: "Amber Fruity",
    description: "Egzotik kırmızı meyveler ile sıcak kehribarın zengin ve modern tatlı uyumu. Kalıcılığı ve meyvemsi neşeli havasısıyla mekanın aurasını anında yükseltir.",
    topNotes: ["Ahududu", "Yaban Mersini", "Siyah Frenk Üzümü"],
    heartNotes: ["Kırmızı Meyveler", "Yasemin", "Şeftali Çiçeği"],
    baseNotes: ["Sıcak Kehribar", "Paçuli", "Karamel"],
    longevity: 8,
    projection: 9,
    bestSeason: "İlkbahar / Sonbahar",
    recommendedRoom: "Yemek Alanı ve Salon",
    olfactoryVibe: "Neşeli, Gurme ve Tatlı",
  },
  {
    name: "Lavender Jasmine",
    family: "Floral Aromatic",
    description: "Provans lavantasının tazeleyici huzuru ile Akdeniz yasemininin zarafeti. Zihni dinlendiren, sakinleştiren ve stresi azaltan özel formül.",
    topNotes: ["Provans Lavantası", "Adaçayı", "Bergamot"],
    heartNotes: ["Mısır Yasemini", "Ylang Ylang", "Gül Yaprakları"],
    baseNotes: ["Beyaz Misk", "Sedir Ağacı", "Hafif Tonka Fasulyesi"],
    longevity: 8,
    projection: 7,
    bestSeason: "Tüm Yıl",
    recommendedRoom: "Yatak Odası ve Dinlenme Alanları",
    olfactoryVibe: "Huzurlu, Sakinleştirici ve Ferah",
  },
  {
    name: "Orange Jasmine",
    family: "Floral Citrus",
    description: "Güneşli Akdeniz narenciyeleri ile yasemin çiçeklerinin canlandırıcı esintisi. Enerjik, dinamik ve ferahlık hissi veren koku yayılımı.",
    topNotes: ["Portakal Çiçeği", "Mandalina kabuğu", "Neroli"],
    heartNotes: ["Tatlı Yasemin", "Petigrain", "Frezya"],
    baseNotes: ["Misk", "Hafif Odunsu Notalar", "Ambergris"],
    longevity: 7,
    projection: 8,
    bestSeason: "İlkbahar / Yaz",
    recommendedRoom: "Giriş Koridoru ve Çalışma Odası",
    olfactoryVibe: "Canlandırıcı, Dinamik ve Taze",
  },
  {
    name: "Liquid Chrome",
    family: "Woody Aromatic",
    description: "Metalik ferahlık ile derin ve asil odunsu notaların modern, avangart buluşması. Maskülen esintiler taşıyan lüks ve modern imza.",
    topNotes: ["Greyfurt", "Metalik Akorlar", "Nane"],
    heartNotes: ["Menekşe Yaprağı", "Vetiver", "Kakule"],
    baseNotes: ["Sandal Ağacı", "Meşe Yosunu", "Hassas Deri"],
    longevity: 9,
    projection: 8,
    bestSeason: "Tüm Yıl",
    recommendedRoom: "Yönetici Ofisleri ve Çalışma Odaları",
    olfactoryVibe: "Dinamik, Keskin ve Prestijli",
  },
  {
    name: "Royal Orchid",
    family: "Floral Oriental",
    description: "Karanlık ve gizemli orkide ile egzotik baharatların mistik, zengin ve elit dansı. Ağır, prestijli ve kalıcılığı çok yüksek bir atmosfer.",
    topNotes: ["Siyah Trüf Mantarı", "Ylang Ylang", "Bergamot"],
    heartNotes: ["Karanlık Orkide", "Lotus Ağacı", "Meyveli Notalar"],
    baseNotes: ["Paçuli", "Tütsü", "Vetiver", "Vanilya"],
    longevity: 10,
    projection: 9,
    bestSeason: "Sonbahar / Kış",
    recommendedRoom: "VIP Bekleme Alanları ve Geniş Mekanlar",
    olfactoryVibe: "Mistik, Lüks ve Gizemli",
  },
  {
    name: "Dark Oath",
    family: "Woody Spicy",
    description: "Ağır deri, tütün yaprakları ve zengin odunsu notaların maskülen, asil kompozisyonu. Güçlü, kalıcı ve karakter sahibi.",
    topNotes: ["Karabiber", "Kakule", "Safran"],
    heartNotes: ["Tütün Yaprağı", "Huş Ağacı Katranı", "Sedir Ağacı"],
    baseNotes: ["Kaba Deri", "Oud", "Sıcak Kehribar"],
    longevity: 10,
    projection: 10,
    bestSeason: "Kış",
    recommendedRoom: "Kütüphane ve Şömine Köşeleri",
    olfactoryVibe: "Güçlü, Dumanlı ve Karakterli",
  },
  {
    name: "Outland",
    family: "Aromatic Fougère",
    description: "Vahşi doğanın uyanışını simgeleyen çam ormanı ve taze bitkisel özlerin uyumu. Doğallık, ferahlık ve nefes açan çam aroması.",
    topNotes: ["Sibirya Çamı", "Ardıç Meyvesi", "Ferah Nane"],
    heartNotes: ["Lavanta", "Sardunya", "Adaçayı"],
    baseNotes: ["Meşe Yosunu", "Hafif Kösele", "Ambergris"],
    longevity: 9,
    projection: 8,
    bestSeason: "Sonbahar / İlkbahar",
    recommendedRoom: "Banyo ve Antre",
    olfactoryVibe: "Doğal, Ferah ve Aromatik",
  },
  {
    name: "Golden Chapter",
    family: "Chypre Floral",
    description: "Asil kadınsılığı yansıtan, safran ve şık güllerin meşe yosunu ve paçuli ile şipre buluşması.",
    topNotes: ["Safran", "Kişniş", "Yasemin"],
    heartNotes: ["Şam Gülü", "Ylang Ylang"],
    baseNotes: ["Paçuli", "Meşe Yosunu", "Deri"],
    longevity: 9,
    projection: 9,
    bestSeason: "Sonbahar",
    recommendedRoom: "Geniş Salonlar ve Butikler",
    olfactoryVibe: "Asil, Klasik ve Kadınsı",
  },
  {
    name: "Aether",
    family: "Ozone Aquatic",
    description: "Hafif deniz tuzu ve ozonsu ferahlığın, odunsu ve miskli alt notalarla minimalist temizlik uyumu.",
    topNotes: ["Deniz Tuzu", "Ozonsu Notalar", "Kavun"],
    heartNotes: ["Su Zambağı", "Yasemin"],
    baseNotes: ["Sedir Ağacı", "Beyaz Misk"],
    longevity: 7,
    projection: 7,
    bestSeason: "Yaz",
    recommendedRoom: "Banyo ve SPA Alanları",
    olfactoryVibe: "Minimalist, Temiz ve Ferah",
  },
];

export interface ScentLayeringCombo {
  name: string;
  topNote: string;
  baseNote: string;
  compatibility: 'Excellent' | 'Good' | 'Fair';
  resultDescription: string;
  mood: string;
  intensity: string;
  applicationTips: string;
}

export const LAYER_COMBOS: ScentLayeringCombo[] = [
  {
    name: "Nectar & Spice",
    topNote: "Fruity Amber",
    baseNote: "Floral Amber",
    compatibility: "Excellent",
    resultDescription: "Fruity Amber'ın tatlı kırmızı meyveleri ile Floral Amber'ın altın kehribar tabanı birleşerek sıcak, gurme ve kadifemsi bir olfaktif atmosfer yaratır.",
    mood: "Sıcak & Çekici",
    intensity: "Yüksek",
    applicationTips: "Taban kokuyu geniş alanlara yayın, 2 dakika bekledikten sonra üst katman kokuyu ekleyin.",
  },
  {
    name: "Mediterranean Breeze",
    topNote: "Orange Jasmine",
    baseNote: "Lavender Jasmine",
    compatibility: "Excellent",
    resultDescription: "Orange Jasmine'in canlandırıcı portakal çiçeği üst notaları, Lavender Jasmine'in rahatlatıcı Provans lavantası ve misk tabanıyla birleşerek Akdeniz esintisi yaratır.",
    mood: "Canlandırıcı & Huzurlu",
    intensity: "Orta",
    applicationTips: "Hava sirkülasyonunun olduğu giriş alanlarında kullanılması kokuyu dengeli dağıtır.",
  },
  {
    name: "Royal Sanctuary",
    topNote: "Lavender Jasmine",
    baseNote: "Royal Orchid",
    compatibility: "Excellent",
    resultDescription: "Ylang ylang ve lavantanın sakinleştirici gövdesi, siyah trüf ve karanlık orkidenin mistik zenginliğiyle yumuşatılır. Yatıştırıcı ama lüks bir ambiyans.",
    mood: "Mistik & Yatıştırıcı",
    intensity: "Yüksek",
    applicationTips: "Yatak odası ve dinlenme alanlarında loş ışık eşliğinde kullanılması önerilir.",
  },
  {
    name: "Noble Forest",
    topNote: "Outland",
    baseNote: "Dark Oath",
    compatibility: "Excellent",
    resultDescription: "Sibirya çamı ve ardıç meyvelerinin aromatik yeşilliği, Dark Oath'in tütün, deri ve oud tabanıyla birleşerek asil bir orman derinliği oluşturur.",
    mood: "Zarif & Güçlü",
    intensity: "Çok Yüksek",
    applicationTips: "Kütüphane ve çalışma odası gibi ağır mobilyalı odalar için mükemmeldir.",
  },
  {
    name: "Fresh Chrome",
    topNote: "Liquid Chrome",
    baseNote: "Orange Jasmine",
    compatibility: "Good",
    resultDescription: "Liquid Chrome'un metalik nane ferahlığı, Orange Jasmine'in narenciye çiçekleriyle birleşerek son derece temiz, dinamik ve enerjik bir etki bırakır.",
    mood: "Enerjik & Temiz",
    intensity: "Orta",
    applicationTips: "Sabah saatlerinde çalışma odasında veya ofis girişinde canlandırıcı etki için kullanılabilir.",
  },
  {
    name: "Ambered Woods",
    topNote: "Floral Amber",
    baseNote: "Liquid Chrome",
    compatibility: "Good",
    resultDescription: "Floral Amber'ın kehribar zenginliği, Liquid Chrome'un vetiver ve sandal ağacı tabanıyla harmanlanarak kremsi, odunsu ve sıcak bir derinlik kazanır.",
    mood: "Prestijli & Kremsi",
    intensity: "Yüksek",
    applicationTips: "Salon veya bekleme odası gibi prestij gerektiren alanlarda ideal bir imza kokudur.",
  },
  {
    name: "Twilight Jasmine",
    topNote: "Orange Jasmine",
    baseNote: "Royal Orchid",
    compatibility: "Good",
    resultDescription: "Portakal çiçeği ve mandalinanın parlaklığı, karanlık orkide ve tütsünün mistik tabanına nüfuz ederek tatlı ama gizemli bir gece bahçesi yaratır.",
    mood: "Gizemli & Derin",
    intensity: "Yüksek",
    applicationTips: "Akşam yemeği davetlerinde yemek odası dışındaki antre ve dinlenme alanları için uygundur.",
  },
  {
    name: "Aromatic Shield",
    topNote: "Outland",
    baseNote: "Lavender Jasmine",
    compatibility: "Good",
    resultDescription: "Çam ve ardıç kokusunun bitkisel yapısı, lavanta ve adaçayının rahatlatıcı aromasıyla birleşerek tazeleyici bir koruma alanı yaratır.",
    mood: "Ferah & Doğal",
    intensity: "Orta",
    applicationTips: "Banyo ve antre gibi hava sirkülasyonunun yoğun olduğu alanlar için idealdir.",
  },
  {
    name: "Spiced Fruit",
    topNote: "Fruity Amber",
    baseNote: "Dark Oath",
    compatibility: "Fair",
    resultDescription: "Ahududu ve karamelli meyve tonları ile tütün, karabiber ve safran gibi sıcak baharatların birleşimi oldukça yoğun, egzotik bir koku profili oluşturur.",
    mood: "Egzotik & Yoğun",
    intensity: "Çok Yüksek",
    applicationTips: "Yüksek tavanlı ve geniş pencereli salonlarda çubuk sayısı az tutularak kullanılmalıdır.",
  },
  {
    name: "Chromes Shadow",
    topNote: "Liquid Chrome",
    baseNote: "Dark Oath",
    compatibility: "Fair",
    resultDescription: "Greyfurt ve metalik notaların keskinliği ile deri ve huş ağacı katranının dumanlı yapısı çok maskülen ve niş bir karakter sergiler.",
    mood: "Avangart & Keskin",
    intensity: "Çok Yüksek",
    applicationTips: "Kişisel ofis veya erkek giyim butikleri gibi niş alanlarda prestij vurgusu yapar.",
  },
  {
    name: "Golden Orchid",
    topNote: "Golden Chapter",
    baseNote: "Royal Orchid",
    compatibility: "Excellent",
    resultDescription: "Safran ve gülün asil birleşimi, karanlık orkidenin mistik trüf tabanıyla kaynaşarak adeta saraysı ve görkemli bir çiçek şöleni sunar.",
    mood: "Görkemli & Klasik",
    intensity: "Çok Yüksek",
    applicationTips: "VIP salonları ve lüks resepsiyon alanlarında kullanılmalıdır.",
  },
  {
    name: "Ozone Forest",
    topNote: "Aether",
    baseNote: "Outland",
    compatibility: "Excellent",
    resultDescription: "Deniz tuzu ve ozonsu hafiflik, çam ormanı ve ardıcın topraksı kokusuyla buluşarak temiz bir dağ ve deniz havası yayar.",
    mood: "Ferahlatıcı & Temiz",
    intensity: "Orta",
    applicationTips: "SPA, kapalı havuz ve dinlenme salonlarında sakinleştirici bir zindelik sağlar.",
  },
  {
    name: "Amber Aether",
    topNote: "Aether",
    baseNote: "Floral Amber",
    compatibility: "Good",
    resultDescription: "Deniz tuzunun getirdiği hafif tuzlu esinti, Floral Amber'ın vanilya ve kehribarlı tabanını ferahlatarak modern bir hafif gurme koku oluşturur.",
    mood: "Modern & Havalı",
    intensity: "Orta",
    applicationTips: "Yaz aylarında salonlarda ve ferah yaşam alanlarında tercih edilir.",
  },
  {
    name: "Sweet Lavender",
    topNote: "Fruity Amber",
    baseNote: "Lavender Jasmine",
    compatibility: "Good",
    resultDescription: "Meyveli tatlı kırmızı ahududular ile rahatlatıcı lavantanın kokusu kremsi bir tatlı çiçek aroması verir.",
    mood: "Yumuşak & Sevecen",
    intensity: "Orta",
    applicationTips: "Çocuk odası dışındaki ortak hobi odalarında ve okuma köşelerinde idealdir.",
  },
  {
    name: "Golden Forest",
    topNote: "Golden Chapter",
    baseNote: "Outland",
    compatibility: "Fair",
    resultDescription: "Şipre gül ve safran notaları ile vahşi çam kokularının buluşması klasik ve zıt bir kombinasyondur.",
    mood: "Sıradışı & Zıt",
    intensity: "Yüksek",
    applicationTips: "Tasarım atölyeleri ve modern sergi salonlarında yaratıcılığı tetikler.",
  },
];

export interface GlossaryEntry {
  term: string;
  definition: string;
  category: string;
}

export const OLFACTORY_GLOSSARY: GlossaryEntry[] = [
  {
    term: "Maceration (Olgunlaşma)",
    definition: "Esansiyel yağların alkol ve su karışımı içinde belirli bir süre bekletilerek moleküllerin birleşmesi ve kokunun kalıcı hale gelmesi süreci. Nos Canda kokuları 28 gün olgunlaştırılır.",
    category: "Üretim",
  },
  {
    term: "Sillage (Yayılım / Koku İzi)",
    definition: "Bir kokunun havada bıraktığı izin veya hareket halindeyken arkasında bıraktığı koku dalgasının mesafesi ve gücü.",
    category: "Olfaktif",
  },
  {
    term: "Top Notes (Üst Notalar)",
    definition: "Koku şişeden ilk yayıldığında veya teninize sıkıldığında duyulan, uçuculuğu en yüksek olan ve ilk 15-30 dakikada buharlaşan esanslar.",
    category: "Olfaktif",
  },
  {
    term: "Heart Notes (Kalp / Orta Notalar)",
    definition: "Üst notalar buharlaştıktan sonra ortaya çıkan, kokunun ana gövdesini ve karakterini belirleyen, genellikle birkaç saat kalan esanslar.",
    category: "Olfaktif",
  },
  {
    term: "Base Notes (Alt / Dip Notalar)",
    definition: "Kokunun kalıcılığını sağlayan, en az uçucu olan ve formülü zemine bağlayan, genellikle odunsu, kehribar, misk ve vanilya içeren ağır esanslar.",
    category: "Olfaktif",
  },
  {
    term: "Extrait de Parfum",
    definition: "Esans konsantrasyonu %20 ile %40 arasında olan, parfüm dünyasındaki en yoğun, en kalıcı ve en prestijli parfüm sınıfı. Nos Canda kokuları %25 konsantrasyondadır.",
    category: "Konsantrasyon",
  },
  {
    term: "IFRA Standards",
    definition: "International Fragrance Association (Uluslararası Koku Birliği) tarafından koku maddelerinin güvenli kullanımı, alerjen kısıtlamaları ve insan sağlığına uygunluğu için belirlenen küresel standartlar.",
    category: "Yönetmelik",
  },
  {
    term: "Olfactory Family (Koku Ailesi)",
    definition: "Kokuların içerdikleri baskın karakterlere göre sınıflandırılması (örn. Floral, Woody, Citrus, Oriental, Chypre, Fougère).",
    category: "Olfaktif",
  },
  {
    term: "GC-MS (Gaz Kromatografisi)",
    definition: "Esansiyel yağların moleküler düzeydeki saflığını, kimyasal bileşenlerini ve oranlarını belirlemek amacıyla kullanılan gelişmiş laboratuvar analiz yöntemi.",
    category: "Bilim",
  },
  {
    term: "Ambroxan",
    definition: "Doğal ambergris (amber) kokusunu taklit eden, sıcak, kadifemsi, temiz ve odunsu tatlılık veren son derece değerli ve modern bir sentetik koku molekülü.",
    category: "Kimya",
  },
  {
    term: "Rattan Çubuk",
    definition: "Oda kokularında esansı şişeden çekerek gözenekli yapısıyla havaya homojen bir şekilde yayılmasını sağlayan doğal ahşap lifli çubuklar.",
    category: "Aksesuar",
  },
  {
    term: "Ethyl Alcohol (Bitkisel Alkol)",
    definition: "Tarımsal ürünlerin fermantasyonuyla elde edilen, kozmetik standartlarına uygun, kokunun yayılımını sağlayan en temiz çözücü taşıyıcı alkol.",
    category: "Kimya",
  },
  {
    term: "Vetiver (Kuz Kökü)",
    definition: "Topraksı, dumanlı, odunsu ve köksü koku karakteriyle parfümlerde dip nota olarak kullanılan, zindelik ve güç veren bir çimen türü kökü esansı.",
    category: "Hammadde",
  },
  {
    term: "Patchouli (Paçuli)",
    definition: "Nane ailesinden gelen, topraksı, zengin, egzotik ve odunsu kokusuyla parfümlere derinlik ve asalet katan şifalı bitki yağı.",
    category: "Hammadde",
  },
  {
    term: "Neroli",
    definition: "Ekşi portakal ağacının çiçeklerinden su buharı distilasyonu ile elde edilen, parlak, yeşil ve son derece lüks narenciye çiçek yağı.",
    category: "Hammadde",
  },
  {
    term: "Bergamot",
    definition: "Calabria, İtalya kökenli, narenciye ailesinin en asil, floral ve ferah üyesi. Parfümlerin üst notalarında tazelik ve zarafet vermek amacıyla yaygın kullanılır.",
    category: "Hammadde",
  },
  {
    term: "Anosmia (Koku Körlüğü)",
    definition: "Geçici veya kalıcı olarak koku alma duyusunun kaybolması durumu. Yoğun koku testleri sırasında burun yorulduğunda kahve çekirdekleri koklanarak giderilebilir.",
    category: "Olfaktif",
  },
  {
    term: "Absolute (Mutlak Yağ)",
    definition: "Çiçeklerden çözücü ekstraksiyonu yöntemiyle elde edilen, uçucu yağlara göre çok daha yoğun, kıvamlı ve doğal çiçeğe en yakın koku özü.",
    category: "Hammadde",
  },
  {
    term: "Concrete (Somut Yağ)",
    definition: "Taze bitki hammaddelerinin çözücü ile ekstrakte edilmesiyle elde edilen, mumsu ve esanslı katı veya yarı katı koku maddesi.",
    category: "Hammadde",
  },
  {
    term: "Headspace Teknolojisi",
    definition: "Yaşayan canlı çiçeklerin kokularını koparmadan çevrelerindeki havayı özel bir kubbe ile vakumlayarak moleküler analizini yapan ileri koku yakalama teknolojisi.",
    category: "Bilim",
  },
  {
    term: "Sillage (Siyaj)",
    definition: "Bir kişinin veya koku kaynağının geçtiği yerde havada asılı kalan kokusal iz dalgası. Koku izinin yayılma yeteneğidir.",
    category: "Olfaktif",
  },
  {
    term: "Volatiliti (Uçuculuk)",
    definition: "Bir koku molekülünün sıvı halden gaz haline geçerek havada yayılma hızı. Citrus notaları yüksek volatiliteye sahipken odunsu notalar düşüktür.",
    category: "Bilim",
  },
  {
    term: "Accord (Akor)",
    definition: "İki veya daha fazla koku notasının bir araya gelerek tek ve tamamen yeni, dengeli bir koku karakteri oluşturması uyumu.",
    category: "Olfaktif",
  },
  {
    term: "Fixative (Sabitleyici)",
    definition: "Uçuculuğu yüksek koku moleküllerinin buharlaşmasını yavaşlatarak kokunun kalıcılığını artıran, genellikle dip notada yer alan maddeler.",
    category: "Kimya",
  },
  {
    term: "Synthetic Aromatics",
    definition: "Laboratuvar ortamında sentezlenen, doğada bulunmayan yeni koku karakterleri sunan veya nesli tehlikede olan doğal hammaddelerin yerini alan moleküller.",
    category: "Kimya",
  },
  {
    term: "Natural Isolates",
    definition: "Doğal uçucu yağların fraksiyonel distilasyon yöntemiyle bölünerek içlerinden tek bir molekülün (örn. okaliptol) saf olarak ayrıştırılması.",
    category: "Hammadde",
  },
  {
    term: "Solvent Extraction",
    definition: "Isıya dayanıksız hassas çiçeklerin (örn. yasemin) koku özlerini elde etmek için kimyasal çözücüler kullanılarak yapılan ekstraksiyon işlemi.",
    category: "Üretim",
  },
  {
    term: "Fractional Distillation",
    definition: "Uçucu yağların farklı kaynama noktalarındaki bileşenlerine ayrılarak istenmeyen acı veya yanık kokulu kısımlarının uzaklaştırılması işlemi.",
    category: "Üretim",
  },
  {
    term: "Carrier Oil (Taşıyıcı Yağ)",
    definition: "Uçucu yağları seyreltmek ve masaj yağı veya kozmetik formüllerde cilde güvenle taşımak amacıyla kullanılan jojoba, tatlı badem gibi sabit bitkisel yağlar.",
    category: "Hammadde",
  },
  {
    term: "Chypre (Şipre)",
    definition: "Meşe yosunu, paçuli, bergamot ve gül notalarının birleşimiyle oluşan, nemli orman ve asil çiçek karakterli klasik parfüm ailesi.",
    category: "Olfaktif",
  },
];

export interface TroubleshootItem {
  id: string;
  symptom: string;
  cause: string;
  solutions: string[];
}

export const TROUBLESHOOT_GUIDE: TroubleshootItem[] = [
  {
    id: "T-001",
    symptom: "Koku yayılımı zamanla zayıfladı",
    cause: "Rattan çubukların lifleri ortamdaki mikroskobik tozlarla tıkanmış veya çubuklar kurumuştur.",
    solutions: ["Çubukları şişeden çıkarıp ters düz edin.", "Eğer çubuklar 2 aydan eskise, yeni Nos Canda rattan çubuk seti ile değiştirin.", "Şişeyi daha hareketli bir hava akımı alanına yerleştirin."],
  },
  {
    id: "T-002",
    symptom: "Koku odada çok yoğun ve baş ağrıtıcı",
    cause: "Mekan boyutuna göre fazla çubuk kullanılmış veya oda havalandırması yetersizdir.",
    solutions: ["Şişedeki çubuk sayısını yarıya indirin (örn. 6 çubuktan 3 çubuğa düşürün).", "Şişeyi pencerelerden ve doğrudan oturduğunuz alanlardan daha uzak bir köşeye koyun."],
  },
  {
    id: "T-003",
    symptom: "Sıvı renginde hafif koyulaşma veya sararma var",
    cause: "Doğal esansiyel yağlar (özellikle vanilya ve kehribar içerenler) ışık ve oksijenle temas ettikçe doğal olarak renk değiştirir.",
    solutions: ["Bu durum koku kalitesini ve sağlığı etkilemez, kullanmaya devam edebilirsiniz.", "Şişeyi doğrudan güneş ışığı alan pencere önlerinden uzaklaştırın."],
  },
  {
    id: "T-004",
    symptom: "Araç kokusu ahşap kapağı kuru kalıyor",
    cause: "Kapağın esansı emmesi için şişenin yeterince ters çevrilmemesi veya kapak vidasının çok sıkı olması.",
    solutions: ["Şişeyi kapak kapalıyken 2-3 saniye boyunca tamamen baş aşağı tutarak ahşabın esansı emmesini sağlayın.", "Kapağın sızdırmazlık contasının yerinde olduğundan emin olun."],
  },
];

export interface RoomFactor {
  type: string;
  factor: number;
  recommendation: string;
  minSticks: number;
  maxSticks: number;
  avgEvaporationDays: number;
}

export const ROOM_FACTORS: Record<string, RoomFactor> = {
  salon: {
    type: "Oturma Odası / Salon",
    factor: 1.0,
    recommendation: "Geniş ve sürekli hava sirkülasyonu olan alanlarda kokunun homojen dağılması için 5-6 çubuk kullanılması ve haftada bir çubukların ters çevrilmesi önerilir. Floral Amber veya Fruity Amber idealdir.",
    minSticks: 5,
    maxSticks: 8,
    avgEvaporationDays: 90,
  },
  yatakodasi: {
    type: "Yatak Odası",
    factor: 0.8,
    recommendation: "Daha sakin, dinlendirici ve huzurlu bir koku dağılımı için 3-4 adet rattan çubuk yeterlidir. Lavender Jasmine kokusu uyku kalitesini artırır.",
    minSticks: 3,
    maxSticks: 5,
    avgEvaporationDays: 120,
  },
  banyo: {
    type: "Banyo / WC",
    factor: 1.2,
    recommendation: "Nem oranı yüksek olduğundan esans yayılımı hızlanır. 2-3 adet çubuk yeterlidir. Outland veya Orange Jasmine tazeleyici ferahlık sağlar.",
    minSticks: 2,
    maxSticks: 4,
    avgEvaporationDays: 75,
  },
  ofis: {
    type: "Çalışma Odası / Ofis",
    factor: 0.9,
    recommendation: "Odaklanmayı artırmak ve zihni açık tutmak için narenciye ve hafif odunsu notalar içeren Liquid Chrome veya Orange Jasmine ile 4 çubuk önerilir.",
    minSticks: 4,
    maxSticks: 6,
    avgEvaporationDays: 100,
  },
  spa: {
    type: "SPA / Dinlenme Salonu",
    factor: 1.1,
    recommendation: "Yüksek sıcaklık ve nem ortamında sakinleşmeyi teşvik eden esintiler için Aether veya Lavender Jasmine ile 5 çubuk tavsiye edilir.",
    minSticks: 4,
    maxSticks: 7,
    avgEvaporationDays: 80,
  },
  antre: {
    type: "Antre / Koridor",
    factor: 1.3,
    recommendation: "Kapı açılıp kapandıkça oluşan hava akımı kokuyu hızlı tüketir. Güçlü bir ilk karşılama için 6 çubuk ile Orange Jasmine kullanılması önerilir.",
    minSticks: 5,
    maxSticks: 8,
    avgEvaporationDays: 70,
  },
};

export function Hero() {
  const [activeSection, setActiveSection] = useState<'showcase' | 'layering' | 'calculator' | 'glossary' | 'troubleshoot'>('showcase');
  const [selectedProfile, setSelectedProfile] = useState<string>('Floral Amber');
  const [calcSize, setCalcSize] = useState<number>(25);
  const [calcRoomType, setCalcRoomType] = useState<string>('salon');
  const [glossaryQuery, setGlossaryQuery] = useState<string>('');
  const [glossaryCat, setGlossaryCat] = useState<string>('All');
  const [selectedTroubleshoot, setSelectedTroubleshoot] = useState<string>('T-001');

  const activeProfile = SCENT_PROFILES.find(p => p.name === selectedProfile) || SCENT_PROFILES[0];
  const currentRoomFactor = ROOM_FACTORS[calcRoomType] || ROOM_FACTORS.salon;
  const activeTrouble = TROUBLESHOOT_GUIDE.find(t => t.id === selectedTroubleshoot) || TROUBLESHOOT_GUIDE[0];

  const recommendedSticks = Math.min(
    currentRoomFactor.maxSticks,
    Math.max(
      currentRoomFactor.minSticks,
      Math.round((calcSize * 0.15) * currentRoomFactor.factor + 2)
    )
  );

  const filteredGlossary = OLFACTORY_GLOSSARY.filter(entry => {
    const matchesQuery = entry.term.toLowerCase().includes(glossaryQuery.toLowerCase()) || 
                         entry.definition.toLowerCase().includes(glossaryQuery.toLowerCase());
    const matchesCat = glossaryCat === 'All' || entry.category === glossaryCat;
    return matchesQuery && matchesCat;
  });

  const glossaryCategories = ['All', 'Olfactive', 'Hammadde', 'Kimya', 'Konsantrasyon', 'Üretim', 'Bilim', 'Aksesuar'];

  return (
    <section className="relative overflow-hidden pt-[calc(72px+3rem)] pb-20 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" style={{ background: 'radial-gradient(circle, #B8860B 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02] blur-[130px] pointer-events-none" style={{ background: 'radial-gradient(circle, #3241ae 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* Top Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-left">
            <ScrollReveal direction="up" distance={30}>
              <span className="badge-corporate mb-4">Nos Canda Shop</span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[60px] font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight">
                Kokunun Asil<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-gold)] to-amber-500">
                  Zarafeti
                </span>
              </h1>
              <div className="gold-line w-20 my-5" />
              <p className="font-body text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-light">
                Grasse kökenli esanslarımızı %25 Extrait de Parfum standartlarında olgunlaştırarak
                yaşam alanlarınıza taşıyoruz. Uzun süre kalıcı oda kokularımız, şık araç kokularımız ve
                yakında teninizi süsleyecek özel niche parfüm koleksiyonlarımızla koku dünyasını yeniden şekillendiriyoruz.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="block text-[10px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold mb-1">Kalıcılık</span>
                  <span className="text-[11px] font-body text-[var(--text-secondary)]">16 Haftaya Kadar</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="block text-[10px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold mb-1">Yoğunluk</span>
                  <span className="text-[11px] font-body text-[var(--text-secondary)]">%25 Extrait de Parfum</span>
                </div>
                <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="block text-[10px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold mb-1">Formül</span>
                  <span className="text-[11px] font-body text-[var(--text-secondary)]">%100 Bitkisel Alkol</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal direction="up" distance={40} delay={0.2}>
              <div className="group relative rounded-2xl overflow-hidden bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between min-h-[340px] shadow-glass hover:border-[var(--accent-gold)]/40 transition-all duration-500">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white">Premium Reed Diffusers</h3>
                  <p className="font-body text-xs text-neutral-300 leading-relaxed">
                    Zarif siyah cam şişesi ve özel rattan çubukları ile mekanın havasını değiştiren bambu çubuklu lüks oda kokuları.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">120 ML</span>
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">8-16 Hafta Salınım</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-neutral-800 mt-6 flex justify-between items-center">
                  <span className="font-cinzel text-sm font-semibold text-[var(--accent-gold)]">950 TL</span>
                  <Link href="/olusumlarimiz/nos-canda-shop/urunlerimiz/reed-diffusers" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-neutral-950 font-gothic text-[9px] tracking-wider uppercase font-bold hover:bg-[var(--accent-gold)] transition-colors duration-300">
                    KEŞFET →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40} delay={0.3}>
              <div className="group relative rounded-2xl overflow-hidden bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between min-h-[340px] shadow-glass hover:border-[var(--accent-gold)]/40 transition-all duration-500">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.12-1.014L1.5 12.75h18l-.755 4.986a1.125 1.125 0 01-1.12 1.014H15m-3 0a1.5 1.5 0 00-3 0m3 0a1.5 1.5 0 01-3 0m3 0h3m-9-6l1.25-5.5a1.5 1.5 0 011.455-1.17h8.59a1.5 1.5 0 011.455 1.17L20.25 12.75" />
                    </svg>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white">Premium Auto Fragrances</h3>
                  <p className="font-body text-xs text-neutral-300 leading-relaxed">
                    Doğal ahşap kapağı ve şık ip askılı şişesiyle otomobilinizde kalıcı ve asil koku esintileri bırakan lüks araç parfümleri.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">8 ML</span>
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">4-6 Hafta Salınım</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-neutral-800 mt-6 flex justify-between items-center">
                  <span className="font-cinzel text-sm font-semibold text-[var(--accent-gold)]">350 TL</span>
                  <Link href="/olusumlarimiz/nos-canda-shop/urunlerimiz/auto-fragrances" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-neutral-950 font-gothic text-[9px] tracking-wider uppercase font-bold hover:bg-[var(--accent-gold)] transition-colors duration-300">
                    KEŞFET →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Interactive Feature Tabs Controller */}
        <div className="flex flex-wrap justify-center border-b border-[var(--border-subtle)] mb-12">
          {[
            { id: 'showcase', label: '1. Koku Pusulası (Signature Scents)' },
            { id: 'layering', label: '2. Koku Katmanlama & Mimari Kılavuz' },
            { id: 'calculator', label: '3. Yoğunluk & Çubuk Hesaplayıcı' },
            { id: 'glossary', label: '4. Olfaktif Terimler Sözlüğü' },
            { id: 'troubleshoot', label: '5. Sorun Giderme & Çözüm Rehberi' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-4 py-4 text-[10px] sm:text-xs font-gothic tracking-widest uppercase border-b-2 transition-all duration-300 -mb-px ${
                activeSection === tab.id
                  ? 'border-[var(--accent-gold)] text-[var(--text-primary)] font-semibold'
                  : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Content Panels */}
        <div className="min-h-[500px] bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border-subtle)] p-8 sm:p-10">

          {/* PANEL 1: Showcase */}
          {activeSection === 'showcase' && (
            <div className="space-y-10 animate-fade-in">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">İmza Kokularımızın Moleküler Anatomisi</h3>
                <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
                  Her bir formülün esans piramidini, önerilen kullanım alanlarını ve olfaktif yayılım kuvvetini inceleyin.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-2">
                  {SCENT_PROFILES.map((profile) => (
                    <button
                      key={profile.name}
                      onClick={() => setSelectedProfile(profile.name)}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left border transition-all duration-300 ${
                        selectedProfile === profile.name
                          ? 'bg-[var(--bg-primary)] border-[var(--accent-gold)] text-[var(--text-primary)] shadow-md font-semibold'
                          : 'border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]/50 hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-cinzel block">{profile.name}</span>
                        <span className="text-[9px] font-gothic uppercase tracking-widest text-[var(--text-muted)]">{profile.family}</span>
                      </div>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${selectedProfile === profile.name ? 'text-[var(--accent-gold)] translate-x-1' : 'text-neutral-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
                <div className="lg:col-span-8 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-[var(--border-subtle)]">
                    <div>
                      <h4 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">{activeProfile.name}</h4>
                      <span className="inline-block text-[10px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-bold mt-1">{activeProfile.family} Olfactory Profile</span>
                    </div>
                    <div className="flex gap-3 text-center">
                      <div className="px-3 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                        <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase">Kalıcılık</span>
                        <span className="text-xs font-cinzel font-bold text-[var(--accent-gold)]">{activeProfile.longevity}/10</span>
                      </div>
                      <div className="px-3 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                        <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase">Yayılım</span>
                        <span className="text-xs font-cinzel font-bold text-[var(--accent-gold)]">{activeProfile.projection}/10</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {activeProfile.description}
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-gothic tracking-wider text-[var(--text-primary)] uppercase font-semibold">Olfaktif Koku Piramidi</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl border border-amber-500/10 bg-amber-500/[0.02] space-y-1.5">
                        <span className="block text-[9px] font-gothic tracking-widest text-amber-500 uppercase font-semibold">Üst Notalar (Top)</span>
                        <p className="font-body text-xs text-[var(--text-secondary)]">{activeProfile.topNotes.join(', ')}</p>
                      </div>
                      <div className="p-4 rounded-xl border border-[var(--accent-gold)]/10 bg-[var(--accent-gold)]/[0.02] space-y-1.5">
                        <span className="block text-[9px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold">Kalp Notalar (Heart)</span>
                        <p className="font-body text-xs text-[var(--text-secondary)]">{activeProfile.heartNotes.join(', ')}</p>
                      </div>
                      <div className="p-4 rounded-xl border border-[#3241ae]/10 bg-[#3241ae]/[0.02] space-y-1.5">
                        <span className="block text-[9px] font-gothic tracking-widest text-[#5d6dc9] uppercase font-semibold">Alt Notalar (Base)</span>
                        <p className="font-body text-xs text-[var(--text-secondary)]">{activeProfile.baseNotes.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 text-xs font-body">
                    <div>
                      <strong className="text-[var(--text-primary)] block">İdeal Konum:</strong>
                      <span className="text-[var(--text-secondary)]">{activeProfile.recommendedRoom}</span>
                    </div>
                    <div>
                      <strong className="text-[var(--text-primary)] block">En Uygun Mevsim:</strong>
                      <span className="text-[var(--text-secondary)]">{activeProfile.bestSeason}</span>
                    </div>
                    <div>
                      <strong className="text-[var(--text-primary)] block">Karakter:</strong>
                      <span className="text-[var(--text-secondary)]">{activeProfile.olfactoryVibe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PANEL 2: Layering */}
          {activeSection === 'layering' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Olfaktif Katmanlama ve Eşleştirme Kılavuzu</h3>
                <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
                  Farklı kokuları katmanlayarak oluşturabileceğiniz kombinasyonların uyum raporu ve kimyasal dengesi.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {LAYER_COMBOS.map((combo) => (
                  <div
                    key={combo.name}
                    className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-4 shadow-sm flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)]">{combo.name}</h4>
                        <span className={`text-[9px] font-gothic tracking-widest uppercase px-2.5 py-0.5 rounded-full font-bold ${
                          combo.compatibility === 'Excellent' ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/20' :
                          combo.compatibility === 'Good' ? 'bg-cyan-500/15 text-cyan-500 border border-cyan-500/20' :
                          'bg-amber-500/15 text-amber-500 border border-amber-500/20'
                        }`}>{combo.compatibility}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 bg-[var(--bg-secondary)] p-3 rounded-lg border border-[var(--border-subtle)] text-[10px] font-gothic uppercase tracking-wider">
                        <div>
                          <span className="block text-neutral-400 mb-0.5">Üst Katman</span>
                          <span className="text-[var(--text-primary)] font-semibold">{combo.topNote}</span>
                        </div>
                        <div>
                          <span className="block text-neutral-400 mb-0.5">Temel Katman</span>
                          <span className="text-[var(--text-primary)] font-semibold">{combo.baseNote}</span>
                        </div>
                      </div>
                      <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                        {combo.resultDescription}
                      </p>
                      <div className="bg-[var(--bg-secondary)] p-3 rounded-lg border border-[var(--border-subtle)] text-[10px] font-body text-[var(--text-secondary)]">
                        <strong className="text-[var(--text-primary)] block mb-1">Uygulama İpucu:</strong>
                        {combo.applicationTips}
                      </div>
                    </div>
                    <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-body">
                      <div>
                        <strong className="text-[var(--text-primary)]">Hissiyat:</strong> <span className="text-[var(--text-secondary)]">{combo.mood}</span>
                      </div>
                      <div>
                        <strong className="text-[var(--text-primary)]">Koku Yoğunluğu:</strong> <span className="text-[var(--text-secondary)]">{combo.intensity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PANEL 3: Calculator */}
          {activeSection === 'calculator' && (
            <div className="space-y-10 animate-fade-in">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Koku Yoğunluğu ve Rattan Çubuk Hesaplayıcı</h3>
                <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
                  Odanızın boyutuna ve sirkülasyon durumuna göre ideal çubuk sayısını ve ortalama buharlaşma süresini hesaplayın.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">Oda Tipi</label>
                    <select
                      value={calcRoomType}
                      onChange={(e) => setCalcRoomType(e.target.value)}
                      className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]"
                    >
                      {Object.entries(ROOM_FACTORS).map(([key, value]) => (
                        <option key={key} value={key}>{value.type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">
                      <span>Oda Boyutu (Metrekare)</span>
                      <span className="text-[var(--accent-gold)] font-bold">{calcSize} m²</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      value={calcSize}
                      onChange={(e) => setCalcSize(parseInt(e.target.value))}
                      className="w-full accent-[var(--accent-gold)] bg-[var(--border-subtle)] rounded-lg appearance-none h-1.5 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="grid grid-cols-2 gap-6 pb-6 border-b border-[var(--border-subtle)] text-center">
                    <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase mb-1.5">Önerilen Çubuk Sayısı</span>
                      <span className="text-3xl font-cinzel font-bold text-[var(--accent-gold)]">{recommendedSticks} Adet</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                      <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase mb-1.5">Ortalama Buharlaşma Süresi</span>
                      <span className="text-3xl font-cinzel font-bold text-[var(--accent-gold)]">~{Math.round(currentRoomFactor.avgEvaporationDays * (6 / recommendedSticks))} Gün</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <span className="block text-[10px] font-gothic tracking-wider text-[var(--text-primary)] uppercase font-semibold">Olfaktif Mimari Tavsiyesi</span>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {currentRoomFactor.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PANEL 4: Glossary */}
          {activeSection === 'glossary' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Olfaktif Terimler ve Bilim Sözlüğü</h3>
                <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
                  Koku tasarımı, kimyası ve üretimine dair en önemli teknik terimlerin açıklamalarını keşfedin.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-2">
                  {glossaryCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setGlossaryCat(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-[10px] font-gothic tracking-wider uppercase border transition-all duration-300 ${
                        glossaryCat === cat
                          ? 'bg-[var(--accent-gold)] border-[var(--accent-gold)] text-neutral-900 font-semibold'
                          : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Terimlerde ara..."
                  value={glossaryQuery}
                  onChange={(e) => setGlossaryQuery(e.target.value)}
                  className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)] w-full sm:w-64"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGlossary.map((entry) => (
                  <div key={entry.term} className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] shadow-sm space-y-2.5">
                    <div className="flex justify-between items-center">
                      <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">{entry.term}</h4>
                      <span className="text-[8px] font-gothic tracking-widest uppercase px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-secondary)]">{entry.category}</span>
                    </div>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {entry.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PANEL 5: Troubleshoot */}
          {activeSection === 'troubleshoot' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Sorun Giderme & Çözüm Kılavuzu</h3>
                <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
                  Oda ve araç kokularınızdan maksimum performans almak için sık rastlanan sorunları ve uzman çözümlerimizi inceleyin.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-2">
                  {TROUBLESHOOT_GUIDE.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTroubleshoot(item.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                        selectedTroubleshoot === item.id
                          ? 'bg-[var(--bg-primary)] border-[var(--accent-gold)] text-[var(--text-primary)] font-semibold'
                          : 'border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]/50'
                      }`}
                    >
                      <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase mb-1">{item.id}</span>
                      <span className="text-xs font-cinzel leading-tight block">{item.symptom}</span>
                    </button>
                  ))}
                </div>
                <div className="lg:col-span-8 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
                  <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">{activeTrouble.symptom}</h4>
                  <div className="space-y-1 bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-subtle)] text-xs">
                    <strong className="text-[var(--text-primary)] block font-gothic text-[10px] uppercase tracking-wider mb-1">Muhtemel Sebep</strong>
                    <p className="font-body text-[var(--text-secondary)] leading-relaxed">{activeTrouble.cause}</p>
                  </div>
                  <div className="space-y-2.5">
                    <strong className="text-[var(--text-primary)] block font-gothic text-[10px] uppercase tracking-wider">Çözüm Adımları</strong>
                    <ul className="space-y-2">
                      {activeTrouble.solutions.map((sol, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs font-body text-[var(--text-secondary)]">
                          <span className="w-5 h-5 rounded-full bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/20 flex items-center justify-center font-mono text-[9px] font-bold mt-0.5 flex-shrink-0">{sIdx + 1}</span>
                          <span className="leading-relaxed">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
