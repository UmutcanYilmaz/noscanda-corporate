'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/core/ScrollReveal';

export interface QCStage {
  id: string;
  title: string;
  durationDays: number;
  tempCelsius: number;
  desc: string;
  verificationTests: string[];
}

export const QC_STAGES: QCStage[] = [
  {
    id: "QA-001",
    title: "Hammadde Sourcing & Girdi Kontrolü",
    durationDays: 1,
    tempCelsius: 20,
    desc: "Fransa'nın Grasse kentindeki üreticilerden alınan ham esansların evrak, lot numarası ve ambalaj bütünlüğü kontrol edilerek kabulü gerçekleştirilir.",
    verificationTests: ["Lot No Eşleştirme", "Ambalaj Sızdırmazlık"],
  },
  {
    id: "QA-002",
    title: "Gaz Kromatografisi (GC-MS) Analizi",
    durationDays: 1,
    tempCelsius: 22,
    desc: "Esansiyel yağların moleküler düzeydeki saflığı, kimyasal bileşenleri ve oranları Agilent GC-MS spektrometrisi cihazıyla doğrulanır.",
    verificationTests: ["Saflık Analizi", "Pestisit Kontrolü", "Bileşen Doğrulama"],
  },
  {
    id: "QA-003",
    title: "Bitkisel Alkol Çözündürme & Karıştırma",
    durationDays: 2,
    tempCelsius: 18,
    desc: "Onaylanan esans yağları, tamamen pancar/mısır fermantasyonlu tarımsal etil alkol ve deiyonize su ile homojen mikserlerde karıştırılır. Esans oranı %25 olarak ayarlanır.",
    verificationTests: ["Homojenlik Testi", "Esans Oran Tespiti"],
  },
  {
    id: "QA-004",
    title: "Cold Maceration (Soğuk Olgunlaştırma)",
    durationDays: 28,
    tempCelsius: 14,
    desc: "Olgunlaştırma tanklarına alınan karışım, ışıksız paslanmaz çelik odalarda 14°C sıcaklıkta 28 gün bekletilerek koku moleküllerinin birbirine tam bağlanması sağlanır.",
    verificationTests: ["Sıcaklık ve Nem Loglama", "Kararlılık Testi"],
  },
  {
    id: "QA-005",
    title: "Soğuk Filtrasyon (Cold Filtration)",
    durationDays: 1,
    tempCelsius: 4,
    desc: "Olgunlaşan sıvı, 4°C'ye soğutularak olası mikroskobik çökeltilerin ayrıştırılması amacıyla 0.2 mikron seviyesindeki özel filtrelerden geçirilir.",
    verificationTests: ["Berraklık Analizi", "Partikül Taraması"],
  },
  {
    id: "QA-006",
    title: "Cam Şişe Ultraviyole ve Sterilizasyon Kontrolü",
    durationDays: 1,
    tempCelsius: 24,
    desc: "Dolum öncesi siyah cam şişelerimiz basınçlı hava ve UV sterilizasyon tünelinden geçirilerek tüm yabancı maddelerden arındırılır.",
    verificationTests: ["UV Işıklı Sterilizasyon", "Mekanik Hata Kontrolü"],
  },
  {
    id: "QA-007",
    title: "Hassas Volumetrik Dolum (Filling)",
    durationDays: 1,
    tempCelsius: 20,
    desc: "Berraklaştırılmış sıvı, tam otomatik volumetrik dolum makinelerinde 120 ml (veya 8 ml araç boyu) hacimde milimetrik doğrulukla şişelere doldurulur.",
    verificationTests: ["Hacimsel Ağırlık Kontrolü"],
  },
  {
    id: "QA-008",
    title: "Azot Gazı Purging ve Tıpalama",
    durationDays: 1,
    tempCelsius: 20,
    desc: "Şişe ağzındaki hava vakumlanarak yerine koruyucu azot gazı basılır ve oksitlenmeyi önlemek amacıyla sızdırmaz tıpa mekanizması ile kapatılır.",
    verificationTests: ["Azot Basınç Testi", "Tıpa Sızdırmazlık Testi"],
  },
  {
    id: "QA-009",
    title: "Ahşap Kapak Vidası Tork Kontrolü",
    durationDays: 1,
    tempCelsius: 22,
    desc: "Araç parfümleri için ahşap kapaklar, oda parfümleri için ise dış lüks kapaklar otomatik tork kontrolüyle şişeye sabitlenir.",
    verificationTests: ["Kapak Tork Testi"],
  },
  {
    id: "QA-010",
    title: "Batch-Code Lazer Gravür İşlemi",
    durationDays: 1,
    tempCelsius: 20,
    desc: "Her şişenin tabanına geriye dönük izlenebilirlik amacıyla parti üretim numarası ve SKT lazer yöntemiyle kalıcı olarak yazılır.",
    verificationTests: ["Lazer Okunabilirlik Kontrolü"],
  },
  {
    id: "QA-011",
    title: "Kutu Paketleme ve QR Kod Etiketleme",
    durationDays: 1,
    tempCelsius: 21,
    desc: "Çizilmeye dayanıklı lüks kutularına yerleştirilen şişelerin üzerine izlenebilirlik QR kodu ve güvenlik hologramı yapıştırılır.",
    verificationTests: ["QR Kod Veritabanı Aktivasyonu"],
  },
  {
    id: "QA-012",
    title: "Sevkiyat Öncesi Son Kalite Denetimi (OQC)",
    durationDays: 2,
    tempCelsius: 16,
    desc: "Paketlenen paletlerden rastgele alınan örnekler son kez laboratuvarda sızıntı, koku karakteri ve görünüm testlerine tabi tutulur.",
    verificationTests: ["Sızıntı Vakum Testi", "Duyusal Koku Testi"],
  },
];

export interface GCPeak {
  compound: string;
  retentionTime: number;
  percentage: number;
  olfactoryImpact: string;
  formula: string;
}

export const CHROMATOGRAPHY_DATA: Record<string, GCPeak[]> = {
  "Floral Amber": [
    {
      compound: "Altın Kehribar (Ambroxan)",
      retentionTime: 15.4,
      percentage: 32.5,
      olfactoryImpact: "Dip nota sabitleyici, sıcak tatlılık",
      formula: "C16H28O",
    },
    {
      compound: "Madagaskar Vanilyası (Vanillin)",
      retentionTime: 18.2,
      percentage: 24.0,
      olfactoryImpact: "Gurme tatlılık, kremsi yayılım",
      formula: "C8H8O3",
    },
    {
      compound: "Şam Gülü (Phenethyl Alcohol)",
      retentionTime: 12.1,
      percentage: 18.5,
      olfactoryImpact: "Çiçeksi gövde, taze gül kokusu",
      formula: "C8H10O",
    },
    {
      compound: "Mandalina kabuğu (Limonene)",
      retentionTime: 5.3,
      percentage: 15.0,
      olfactoryImpact: "Uçucu üst nota, canlandırıcı narenciye",
      formula: "C10H16",
    },
    {
      compound: "Beyaz Misk (Galaxolide)",
      retentionTime: 22.8,
      percentage: 10.0,
      olfactoryImpact: "Sabitleyici dip nota, temizlik hissi",
      formula: "C18H26O",
    },
  ],
  "Fruity Amber": [
    {
      compound: "Ahududu Özü (Frambinone)",
      retentionTime: 9.2,
      percentage: 28.0,
      olfactoryImpact: "Meyvemsi tatlılık, baskın karakter",
      formula: "C10H12O2",
    },
    {
      compound: "Altın Kehribar (Ambroxan)",
      retentionTime: 15.4,
      percentage: 25.0,
      olfactoryImpact: "Sıcak taban, moleküler sabitleme",
      formula: "C16H28O",
    },
    {
      compound: "Karamel Akoru (Ethyl Maltol)",
      retentionTime: 16.7,
      percentage: 20.0,
      olfactoryImpact: "Tatlılık, gurme derinlik",
      formula: "C7H8O3",
    },
    {
      compound: "Mısır Yasemini (Benzyl Acetate)",
      retentionTime: 11.4,
      percentage: 17.0,
      olfactoryImpact: "Çiçeksi orta nota, zenginlik",
      formula: "C9H10O2",
    },
    {
      compound: "Paçuli Yağı (Patchouli Alcohol)",
      retentionTime: 20.1,
      percentage: 10.0,
      olfactoryImpact: "Topraksı odunsu dip nota, kalıcılık",
      formula: "C15H26O",
    },
  ],
  "Lavender Jasmine": [
    {
      compound: "Linalil Asetat (Linalyl Acetate)",
      retentionTime: 7.8,
      percentage: 35.0,
      olfactoryImpact: "Taze lavanta üst notası, sakinleştirici",
      formula: "C12H20O2",
    },
    {
      compound: "Linalol (Linalool)",
      retentionTime: 8.4,
      percentage: 28.0,
      olfactoryImpact: "Bitkisel otsu orta nota, floral derinlik",
      formula: "C10H18O",
    },
    {
      compound: "Yasemin Özü (Benzyl Salicylate)",
      retentionTime: 14.2,
      percentage: 20.0,
      olfactoryImpact: "Zarif floral orta nota, zenginlik",
      formula: "C14H12O3",
    },
    {
      compound: "Sedir Yağı (Cedrol)",
      retentionTime: 21.3,
      percentage: 12.0,
      olfactoryImpact: "Odunsu taban nota, koku sabitleme",
      formula: "C15H26O",
    },
    {
      compound: "Adaçayı Yağı (Salvia Sclarea)",
      retentionTime: 10.5,
      percentage: 5.0,
      olfactoryImpact: "Aromatik bitkisel katkı, ferahlık",
      formula: "C10H18O",
    },
  ],
  "Orange Jasmine": [
    {
      compound: "Portakal Çiçeği (Limonene)",
      retentionTime: 5.3,
      percentage: 40.0,
      olfactoryImpact: "Yoğun narenciye üst notası, enerjik",
      formula: "C10H16",
    },
    {
      compound: "Yasemin Özü (Indole)",
      retentionTime: 13.9,
      percentage: 25.0,
      olfactoryImpact: "Yoğun floral gövde, çiçeksi tatlılık",
      formula: "C8H7N",
    },
    {
      compound: "Neroli Yağı (Linalool)",
      retentionTime: 8.4,
      percentage: 18.0,
      olfactoryImpact: "Yeşil narenciye çiçeği, ferahlık",
      formula: "C10H18O",
    },
    {
      compound: "Petigrain Yağı (Geranyl Acetate)",
      retentionTime: 9.7,
      percentage: 12.0,
      olfactoryImpact: "Yapraksı taze narenciye akoru",
      formula: "C12H20O2",
    },
    {
      compound: "Bitkisel Misk (Ambrettolide)",
      retentionTime: 23.1,
      percentage: 5.0,
      olfactoryImpact: "Dip nota sabitleyici, yumuşaklık",
      formula: "C16H28O2",
    },
  ],
  "Liquid Chrome": [
    {
      compound: "Limonen (Limonene)",
      retentionTime: 5.3,
      percentage: 30.0,
      olfactoryImpact: "Keskin narenciye tazeliği",
      formula: "C10H16",
    },
    {
      compound: "Dihidromirsenol (Dihydromyrcenol)",
      retentionTime: 6.8,
      percentage: 25.0,
      olfactoryImpact: "Metalik lavanta ve temizlik akoru",
      formula: "C10H20O",
    },
    {
      compound: "Vetiveril Asetat (Vetiveryl Acetate)",
      retentionTime: 17.4,
      percentage: 20.0,
      olfactoryImpact: "Kuru, odunsu ve köksü prestij",
      formula: "C17H26O2",
    },
    {
      compound: "Menekşe Yaprağı (Methyl 2-Octynoate)",
      retentionTime: 12.5,
      percentage: 15.0,
      olfactoryImpact: "Yeşil, taze ozonsu gövde",
      formula: "C9H14O2",
    },
    {
      compound: "Sandal Ağacı (Sandalore)",
      retentionTime: 21.8,
      percentage: 10.0,
      olfactoryImpact: "Kremsi odunsu dip nota sabitleyici",
      formula: "C14H26O",
    },
  ],
  "Royal Orchid": [
    {
      compound: "Paçuli Kokusu (Patchouli Alcohol)",
      retentionTime: 20.1,
      percentage: 35.0,
      olfactoryImpact: "Koyu, topraksı ve mistik taban",
      formula: "C15H26O",
    },
    {
      compound: "Orkide Akoru (Salisilat)",
      retentionTime: 14.2,
      percentage: 25.0,
      olfactoryImpact: "Egzotik floral gövde nota",
      formula: "C14H12O3",
    },
    {
      compound: "Siyah Trüf (Dimethyl Sulfide)",
      retentionTime: 11.1,
      percentage: 15.0,
      olfactoryImpact: "Nadir, gurme ve karanlık derinlik",
      formula: "C2H6S",
    },
    {
      compound: "Tütsü Akoru (Olibanum)",
      retentionTime: 18.7,
      percentage: 15.0,
      olfactoryImpact: "Dumanlı mistik salınım",
      formula: "C20H32",
    },
    {
      compound: "Vanilya Esansı (Ethyl Vanillin)",
      retentionTime: 18.2,
      percentage: 10.0,
      olfactoryImpact: "Tatlılık ve yayılım sabitleyici",
      formula: "C9H10O3",
    },
  ],
  "Dark Oath": [
    {
      compound: "Deri Akoru (Suderal)",
      retentionTime: 19.3,
      percentage: 38.0,
      olfactoryImpact: "Yoğun, asil deri kokusu",
      formula: "Unknown",
    },
    {
      compound: "Tütün Yaprağı (Nicotiana Tabacum)",
      retentionTime: 17.1,
      percentage: 22.0,
      olfactoryImpact: "Kuru, aromatik dumanlı tütün",
      formula: "C10H14N2",
    },
    {
      compound: "Karabiber Yağı (Piperine)",
      retentionTime: 6.2,
      percentage: 18.0,
      olfactoryImpact: "Baharatlı ve keskin üst nota",
      formula: "C17H19NO3",
    },
    {
      compound: "Safran Özü (Safranal)",
      retentionTime: 8.9,
      percentage: 12.0,
      olfactoryImpact: "Lüks, sıcak baharatlı karakter",
      formula: "C10H14O",
    },
    {
      compound: "Oud Yağı (Agarwood)",
      retentionTime: 22.4,
      percentage: 10.0,
      olfactoryImpact: "Ağır odunsu oryantal zemin",
      formula: "C15H22O2",
    },
  ],
  "Outland": [
    {
      compound: "Çam Yağı (Pinene)",
      retentionTime: 4.8,
      percentage: 42.0,
      olfactoryImpact: "Ferah dağ havası, çam ormanı aroması",
      formula: "C10H16",
    },
    {
      compound: "Ardıç Meyvesi (Juniper)",
      retentionTime: 6.1,
      percentage: 23.0,
      olfactoryImpact: "Bitkisel, hafif cin-tonik ferahlığı",
      formula: "C10H16",
    },
    {
      compound: "Lavanta Yağı (Linalyl Acetate)",
      retentionTime: 7.8,
      percentage: 15.0,
      olfactoryImpact: "Ferahlatıcı aromatik gövde",
      formula: "C12H20O2",
    },
    {
      compound: "Meşe Yosunu (Evernyl)",
      retentionTime: 20.9,
      percentage: 12.0,
      olfactoryImpact: "Topraksı nemli orman tabanı",
      formula: "C13H16O4",
    },
    {
      compound: "Sedir Ağacı (Cedrol)",
      retentionTime: 21.3,
      percentage: 8.0,
      olfactoryImpact: "Kuru odunsu sabitleyici zemin",
      formula: "C15H26O",
    },
  ],
};

export interface SourcingItem {
  material: string;
  origin: string;
  method: string;
  cert: string;
  status: string;
  regulatoryClass: string;
  maxInhalationRate: string;
  safetyAdvisory: string;
}

export const SOURCING_REGISTER: SourcingItem[] = [
  {
    material: "Provans Lavantası",
    origin: "Provans, Fransa",
    method: "Buhar Distilasyonu",
    cert: "Ecocert Organic",
    status: "Fair Trade",
    regulatoryClass: "Class I",
    maxInhalationRate: "2.0%",
    safetyAdvisory: "Genel kullanımda güvenlidir, doğrudan solunuma uygundur.",
  },
  {
    material: "Asil Mısır Yasemini",
    origin: "Nil Deltası, Mısır",
    method: "Hassas Solvent Ekstraksiyonu",
    cert: "USDA Organic",
    status: "Sürdürülebilir Tarım",
    regulatoryClass: "Class II",
    maxInhalationRate: "0.8%",
    safetyAdvisory: "Yoğun floral bileşendir. Seyreltilmeden doğrudan cilde sürülmemelidir.",
  },
  {
    material: "Calabria Bergamotu",
    origin: "Calabria, İtalya",
    method: "Soğuk Sıkım (Cold Press)",
    cert: "DOP Sertifikalı",
    status: "Yerel Üretim",
    regulatoryClass: "Class II",
    maxInhalationRate: "0.4%",
    safetyAdvisory: "Fototoksik reaksiyon riskine karşı güneş ışığı öncesi cilde uygulanmamalıdır.",
  },
  {
    material: "Sibirya Çam Yağı",
    origin: "Sibirya Ormanları",
    method: "Buhar Distilasyonu",
    cert: "Wildcrafted",
    status: "Korunan Orman",
    regulatoryClass: "Class I",
    maxInhalationRate: "1.5%",
    safetyAdvisory: "Oksitlenmeyi önlemek için serin ve karanlık yerde muhafaza edilmelidir.",
  },
  {
    material: "Endonezya Paçulisi",
    origin: "Sumatra, Endonezya",
    method: "Buhar Distilasyonu",
    cert: "USDA Organic",
    status: "Fair Trade",
    regulatoryClass: "Class I",
    maxInhalationRate: "1.8%",
    safetyAdvisory: "Kalıcılığı yüksek doğal sabitleyicidir. Toksik etkisi yoktur.",
  },
  {
    material: "Madagaskar Vanilyası",
    origin: "Sava Bölgesi, Madagaskar",
    method: "Alkol Ekstraksiyonu",
    cert: "Ecocert Organic",
    status: "Fair Trade",
    regulatoryClass: "Class III",
    maxInhalationRate: "0.5%",
    safetyAdvisory: "Doğal vanilin alerjik bünyelerde hafif kızarıklık yapabilir.",
  },
  {
    material: "Hint Sandal Ağacı",
    origin: "Mysore, Hindistan",
    method: "Buhar Distilasyonu",
    cert: "Devlet Kontrollü Sürdürülebilir",
    status: "Sürdürülebilir Kaynak",
    regulatoryClass: "Class I",
    maxInhalationRate: "1.2%",
    safetyAdvisory: "Zihni sakinleştirici lüks odunsu taban. Hassasiyet yaratmaz.",
  },
  {
    material: "İran Safranı",
    origin: "Horasan, İran",
    method: "Hassas CO2 Ekstraksiyonu",
    cert: "Premium Grade A",
    status: "Yerel Kooperatif",
    regulatoryClass: "Class II",
    maxInhalationRate: "0.2%",
    safetyAdvisory: "Çok değerli ve konsantre koku maddesidir, IFRA sınırlarına uyunuz.",
  },
  {
    material: "Grasse Şam Gülü",
    origin: "Grasse, Fransa",
    method: "Çözücü Ekstraksiyonu (Absolute)",
    cert: "Ecocert Organic",
    status: "Fair Trade",
    regulatoryClass: "Class II",
    maxInhalationRate: "0.5%",
    safetyAdvisory: "Gül esansiyel yağı hassas cilt tiplerinde hafif karıncalanma yapabilir.",
  },
  {
    material: "Somali Akgünlük Reçinesi",
    origin: "Somaliland",
    method: "Buhar Distilasyonu",
    cert: "Wildcrafted",
    status: "Yerel Kooperatif",
    regulatoryClass: "Class I",
    maxInhalationRate: "1.0%",
    safetyAdvisory: "Mistik aromatik reçine yağı. Havalandırmalı alanlarda salınımı mükemmeldir.",
  },
  {
    material: "Reunion Adası Tonka Fasulyesi",
    origin: "Reunion",
    method: "Alkol Ekstraksiyonu",
    cert: "Premium Grade A",
    status: "Fair Trade",
    regulatoryClass: "Class III",
    maxInhalationRate: "0.2%",
    safetyAdvisory: "Doğal kumarin kaynağıdır, IFRA kılavuzuna göre sınırlı oranda dolgulanır.",
  },
  {
    material: "Sri Lanka Kakule Yağı",
    origin: "Sri Lanka",
    method: "Buhar Distilasyonu",
    cert: "USDA Organic",
    status: "Sürdürülebilir Tarım",
    regulatoryClass: "Class I",
    maxInhalationRate: "1.2%",
    safetyAdvisory: "Sıcak baharatlı yapıdadır. Doğal zindelik sağlar.",
  },
  {
    material: "İtalyan Neroli Çiçeği",
    origin: "Sicilya, İtalya",
    method: "Su Buharı Distilasyonu",
    cert: "DOP Sertifikalı",
    status: "Yerel Üretim",
    regulatoryClass: "Class II",
    maxInhalationRate: "0.8%",
    safetyAdvisory: "Lüks narenciye çiçeğidir. Fototoksik duyarlılığı düşüktür.",
  },
  {
    material: "Nepal Menekşe Yaprağı",
    origin: "Katmandu, Nepal",
    method: "Çözücü Ekstraksiyonu (Absolute)",
    cert: "Ecocert Organic",
    status: "Sürdürülebilir Tarım",
    regulatoryClass: "Class I",
    maxInhalationRate: "0.4%",
    safetyAdvisory: "Yeşil floral aromadır. Doğal yapısıyla havayı tazeler.",
  },
  {
    material: "Haiti Vetiver Kökü",
    origin: "Les Cayes, Haiti",
    method: "Buhar Distilasyonu",
    cert: "USDA Organic",
    status: "Fair Trade",
    regulatoryClass: "Class I",
    maxInhalationRate: "1.5%",
    safetyAdvisory: "Dumanlı topraksı koku profili sunan sabitleyici, güvenle solunabilir.",
  },
];

export const FAQ_DATA = [
  {
    q: "Nos Canda kokularının kalıcılık süresi nedir?",
    a: "Reed Diffuser oda parfümlerimiz, kullanılan %25 Extrait de Parfum seviyesindeki esans konsantrasyonu ve premium siyah rattan çubuklar sayesinde mekan büyüklüğüne bağlı olarak 8 ile 16 hafta boyunca kesintisiz koku yayılımı sağlar. Araç parfümlerimiz ise 4-6 hafta etkilidir.",
  },
  {
    q: "Ürünlerin formülasyonu nerede geliştiriliyor?",
    a: "Koku esanslarımız Fransa'nın Grasse kentindeki tarihi laboratuvarlarda tasarlanmakta ve test edilmektedir. Şişeleme, olgunlaştırma (maceration) ve ambalajlama süreçleri ise Türkiye'deki GMP (İyi Üretim Uygulamaları) sertifikalı tesislerimizde titizlikle yürütülmektedir.",
  },
  {
    q: "Yakında çıkacak niş parfümler hakkında bilgi alabilir miyim?",
    a: "Boutique ten parfümleri koleksiyonumuz, Golden Chapter, Liquid Chrome, Royal Orchid ve Dark Oath gibi serilerden oluşmaktadır. %25-30 esans konsantrasyonuyla teninizde 24 saat kalıcılık sunmak üzere formüle edilmişlerdir. Tanıtım tarihlerini bültenlerimizden takip edebilirsiniz.",
  },
  {
    q: "Oda parfümlerinden maksimum performans nasıl alınır?",
    a: "İlk kullanımda rattan çubukları şişeye koyduktan 2 saat sonra ters düz etmenizi öneririz. Haftada bir kez çubukları ters çevirmek koku yayılımını tazeleyecektir. Şişeyi doğrudan güneş ışığı almayan ve hava akımının dengeli olduğu bir noktaya konumlandırınız.",
  },
  {
    q: "Çubuklu oda kokusu bittiğinde ne yapmalıyım?",
    a: "Nos Canda yedek esans şişelerimiz ve yeni çubuk setlerimiz yakında satışa sunulacaktır. Şişenizi çöpe atmayarak hem çevreye katkıda bulunabilir hem de sadece yedek esans alarak ekonomik bir kullanım sağlayabilirsiniz.",
  },
  {
    q: "Kokular evcil hayvanlar için güvenli midir?",
    a: "Evet, kokularımız bitkisel alkolle üretilmiş olup solunum yollarını tahriş edici ağır kimyasallar içermez. Ancak evcil hayvanların şişeyi devirmemesi ve doğrudan sıvıyla temas etmemesi için ürünü yüksek raflarda konumlandırmanız önemlidir.",
  },
  {
    q: "Kurumsal alanlar için özel koku çalışması yapıyor musunuz?",
    a: "Evet, Nos Canda Vision ve Shop iş birliği ile kurumsal otel, mağaza veya ofis zincirleri için markaya özel imza kokular (signature scenting) tasarlamakta ve kurumsal şişeleme hizmetleri sunmaktayız. İletişim sayfasından bizimle irtibata geçebilirsiniz.",
  },
  {
    q: "Kargo ve teslimat süreci nasıl işlemektedir?",
    a: "Siparişleriniz 24 saat içerisinde hazırlanarak özel korumalı kutularda kargoya verilir. İstanbul içi gönderimler genellikle 1-2 iş günü, diğer iller ise 2-3 iş günü içerisinde teslim edilir. 500 TL üzeri alışverişlerde kargo ücretsizdir.",
  },
  {
    q: "Nos Canda oda kokularında kullanılan çubukların malzemesi nedir?",
    a: "Kokularımızda gözenekli yapısıyla esans emilimini ve yayılımını en üst düzeyde sağlayan doğal siyah rattan (bambu lifli) çubuklar kullanılmaktadır. Sentetik fiber çubuklar gibi yapay bir salınım sunmaz.",
  },
  {
    q: "Hamilelik ve bebek odalarında koku kullanımı güvenli midir?",
    a: "Ürünlerimiz bitkisel etil alkolle formüle edilmiştir ve ağır sentetik gazlar içermez. Ancak hamilelikte koku hassasiyeti yüksek olabileceğinden Lavender Jasmine gibi sakinleştirici kokuların çubuk sayısı azaltılarak (1-2 adet) kullanılması önerilir.",
  },
  {
    q: "Araç kokusu sızıntı yaparsa ne yapmalıyım?",
    a: "Araç parfümlerimizin ahşap kapağının esansı emmesi için şişeyi 2-3 saniye ters çevirmeniz yeterlidir. Daha uzun süre ters tutulması durumunda sıvı ahşaptan sızarak konsol plastiklerine zarar verebilir. Sızıntı durumunda alanı hemen nemli bezle siliniz.",
  },
  {
    q: "Şişelerinizin geri dönüşümünü nasıl yapabiliriz?",
    a: "Cam şişelerimiz %100 geri dönüştürülebilir lüks siyah camdan imal edilmiştir. Esans bittikten sonra sıcak su ve sabunla yıkayarak tek dal çiçek vazosu, dekoratif şişe veya sıvı sabunluk olarak ileri dönüştürebilir ya da cam atık kutularına atabilirsiniz.",
  },
];

export interface EcoMetric {
  name: string;
  value: string;
  desc: string;
  iconPath: string;
}

export const ECO_METRICS: EcoMetric[] = [
  { name: 'Geri Dönüştürülebilir Cam', value: '%100', desc: 'Şişelerimizin tamamı yüksek mukavemetli geri dönüştürülebilir siyah camdan üretilmektedir.', iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { name: 'Bitkisel Kökenli Alkol', value: '%100', desc: 'Sentetik petrol alkolü yerine tamamen pancar ve mısırdan fermente edilmiş tarımsal etil alkol kullanıyoruz.', iconPath: 'M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75' },
  { name: 'Cruelty-Free (Hayvan Dostu)', value: 'Onaylı', desc: 'Hiçbir hammaddemiz veya bitmiş ürünümüz hayvanlar üzerinde test edilmemiştir ve edilmeyecektir.', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Karbon Ayak İzi Dengesi', value: 'Aktif', desc: 'Lojistik ve üretim süreçlerimizdeki karbon salınımını her yıl diktiğimiz fidanlarla dengeliyoruz.', iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' }
];

export function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeQCStage, setActiveQCStage] = useState<string>('QA-001');
  const [selectedGCScents, setSelectedGCScents] = useState<string>('Floral Amber');
  const [selectedSourcingTab, setSelectedSourcingTab] = useState<number>(0);

  // Simulator states
  const [selectedScentSim, setSelectedScentSim] = useState<string>('Floral Amber');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simResults, setSimResults] = useState<{ category: string; maxLimit: string; actual: string; status: string }[] | null>(null);

  const activeStage = QC_STAGES.find(s => s.id === activeQCStage) || QC_STAGES[0];
  const activeGCData = CHROMATOGRAPHY_DATA[selectedGCScents] || CHROMATOGRAPHY_DATA['Floral Amber'];

  const runIFRASimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimResults([
        { category: 'Kategori 1 (Dudak Ürünleri)', maxLimit: '%1.25', actual: '%0.00 (Kullanılmıyor)', status: 'COMPLIANT' },
        { category: 'Kategori 2 (Deodorantlar)', maxLimit: '%0.80', actual: '%0.00 (Kullanılmıyor)', status: 'COMPLIANT' },
        { category: 'Kategori 4 (Ten Parfümleri)', maxLimit: '%25.0', actual: '%24.50', status: 'COMPLIANT' },
        { category: 'Kategori 5A (Vücut Kremleri)', maxLimit: '%5.50', actual: '%0.15', status: 'COMPLIANT' },
        { category: 'Kategori 10A (Bambu Çubuklu Oda Kokuları)', maxLimit: '%100.0 (Sınırsız)', actual: '%25.00', status: 'COMPLIANT' },
        { category: 'Kategori 10B (Ev Oda Spreyleri)', maxLimit: '%75.0', actual: '%0.00 (Kullanılmıyor)', status: 'COMPLIANT' }
      ]);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <section className="section-padding bg-[var(--bg-primary)]" id="hakkimizda">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top: Crafts & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6 space-y-6 text-left">
            <ScrollReveal direction="up" distance={30}>
              <span className="badge-corporate mb-4">Üretim Kalitesi</span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Zanaat & Bilim
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mt-4">
                Her bir Nos Canda şişesi, sadece bir oda veya araç kokusu değil; Grasse'ın köklü parfümörlük
                mirası ile modern kimya biliminin kusursuz birleşimidir. Hammaddelerimizin tamamı
                IFRA (International Fragrance Association) standartlarına göre test edilmekte ve
                gaz kromatografisi yöntemiyle saflık derecesi onaylandıktan sonra maceration (olgunlaşma)
                odalarımıza alınmaktadır. Alkol olarak sadece bitkisel kökenli tarımsal etil alkol kullanılmaktadır.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="border border-[var(--border-subtle)] rounded-2xl p-6 bg-[var(--bg-secondary)] space-y-4 shadow-sm">
                <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Sertifikalı Güvence</h4>
                <ul className="space-y-3 font-body text-xs text-[var(--text-secondary)]">
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ISO 22716 İyi Üretim Uygulamaları (GMP) Belgeli Tesis
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ISO 9001:2015 Uluslararası Kalite Yönetim Standardı
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cruelty-Free & %100 Vegan Bileşen Formülasyonu
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <ScrollReveal direction="up" distance={30}>
              <span className="badge-corporate mb-4">S.S.S.</span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Merak Edilenler
              </h3>
            </ScrollReveal>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, idx) => (
                <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.08}>
                  <div className="border border-[var(--border-subtle)] rounded-xl overflow-hidden bg-[var(--bg-secondary)] shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30"
                    >
                      <span className="font-cinzel text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                        {faq.q}
                      </span>
                      <svg className={`w-4 h-4 text-[var(--text-secondary)] transition-transform duration-300 ${openFaq === idx ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-[200px] border-t border-[var(--border-subtle)]' : 'max-h-0'}`}>
                      <p className="p-5 font-body text-xs leading-relaxed text-[var(--text-secondary)]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Maceration Timeline Dashboard */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 mb-24 space-y-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Olfactory Science</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Eskitme ve Olgunlaşma (Maceration) Süreci</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Nos Canda kokularının hammaddeden şişelemeye kadar geçirdiği hassas kontrol ve dinlendirme aşamaları.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {QC_STAGES.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveQCStage(stage.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                    activeQCStage === stage.id
                      ? 'bg-[var(--bg-primary)] border-[var(--accent-gold)] text-[var(--text-primary)] shadow-sm'
                      : 'border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]/40'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${activeQCStage === stage.id ? 'bg-[var(--accent-gold)] text-neutral-900' : 'bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]'}`}>{stage.id.split('-')[1]}</span>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-cinzel font-semibold">{stage.title}</span>
                    <span className="block text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)]">Süre: {stage.durationDays} Gün</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex justify-between items-center pb-4 border-b border-[var(--border-subtle)]">
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)]">{activeStage.title}</h4>
                <span className="text-[10px] font-gothic tracking-widest uppercase px-3 py-1 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">ONAYLANDI</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                {activeStage.desc}
              </p>
              <div className="space-y-2">
                <span className="block text-[10px] font-gothic text-[var(--text-muted)] uppercase tracking-wider font-semibold">Gerçekleştirilen Testler</span>
                <div className="flex flex-wrap gap-2">
                  {activeStage.verificationTests.map((t) => (
                    <span key={t} className="text-[9px] font-body text-[var(--text-secondary)] px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center pt-2">
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase">Aşama Süresi</span>
                  <span className="text-lg font-cinzel font-bold text-[var(--text-primary)]">{activeStage.durationDays} Gün</span>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <span className="block text-[9px] font-gothic text-[var(--text-muted)] uppercase">Kontrollü Sıcaklık</span>
                  <span className="text-lg font-cinzel font-bold text-[var(--text-primary)]">{activeStage.tempCelsius} °C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sourcing Register interactive detail dashboard */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 mb-24 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Global Sourcing</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Doğal Hammadde Kaynakları İzlenebilirlik Sicili</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Nos Canda kokularında kullanılan değerli doğal yağların coğrafi orijinleri, sertifikaları ve hasat yöntemleri.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              {SOURCING_REGISTER.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSourcingTab(idx)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left border transition-all duration-300 ${
                    selectedSourcingTab === idx
                      ? 'bg-[var(--bg-secondary)] border-[var(--accent-gold)] text-[var(--text-primary)] font-semibold'
                      : 'border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/50'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-cinzel block">{item.material}</span>
                    <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)]">{item.origin}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-[var(--border-subtle)]">
                <h4 className="font-cinzel text-base font-bold text-[var(--text-primary)]">{SOURCING_REGISTER[selectedSourcingTab].material}</h4>
                <span className="text-[9px] font-gothic tracking-widest uppercase px-3 py-1 rounded bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] font-bold">{SOURCING_REGISTER[selectedSourcingTab].status}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body text-[var(--text-secondary)]">
                <div>
                  <strong className="text-[var(--text-primary)] block mb-0.5">Coğrafi Köken:</strong>
                  {SOURCING_REGISTER[selectedSourcingTab].origin}
                </div>
                <div>
                  <strong className="text-[var(--text-primary)] block mb-0.5">Ekstraksiyon Yöntemi:</strong>
                  {SOURCING_REGISTER[selectedSourcingTab].method}
                </div>
                <div>
                  <strong className="text-[var(--text-primary)] block mb-0.5">Ekstraksiyon Sınıfı:</strong>
                  {SOURCING_REGISTER[selectedSourcingTab].regulatoryClass}
                </div>
                <div>
                  <strong className="text-[var(--text-primary)] block mb-0.5">Maks. Solunum Hızı:</strong>
                  {SOURCING_REGISTER[selectedSourcingTab].maxInhalationRate}
                </div>
                <div className="col-span-2 pt-2 border-t border-[var(--border-subtle)]">
                  <strong className="text-[var(--text-primary)] block mb-0.5">Ekolojik Sertifikasyon:</strong>
                  <span className="text-emerald-600 dark:text-emerald-500 font-semibold">{SOURCING_REGISTER[selectedSourcingTab].cert}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-[var(--border-subtle)]">
                  <strong className="text-[var(--text-primary)] block mb-0.5">Güvenlik Tavsiyesi:</strong>
                  <span className="text-[var(--text-secondary)]">{SOURCING_REGISTER[selectedSourcingTab].safetyAdvisory}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GC-MS Gas Chromatography Analysis Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1.5">
              <label className="block text-[9px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">Analiz Edilecek Esans</label>
              <select
                value={selectedGCScents}
                onChange={(e) => setSelectedGCScents(e.target.value)}
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]"
              >
                <option value="Floral Amber">Floral Amber Esansı</option>
                <option value="Fruity Amber">Fruity Amber Esansı</option>
                <option value="Lavender Jasmine">Lavender Jasmine Esansı</option>
                <option value="Orange Jasmine">Orange Jasmine Esansı</option>
                <option value="Liquid Chrome">Liquid Chrome Esansı</option>
                <option value="Royal Orchid">Royal Orchid Esansı</option>
                <option value="Dark Oath">Dark Oath Esansı</option>
                <option value="Outland">Outland Esansı</option>
              </select>
            </div>
            <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <table className="w-full text-left border-collapse text-xs font-body">
                <thead>
                  <tr className="bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] text-[9px] font-gothic tracking-wider uppercase text-[var(--text-secondary)]">
                    <th className="p-3">Ana Bileşen</th>
                    <th className="p-3">Formül</th>
                    <th className="p-3">Retansiyon Süresi</th>
                    <th className="p-3 text-right">Konsantrasyon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                  {activeGCData.map((peak) => (
                    <tr key={peak.compound} className="hover:bg-[var(--bg-primary)]/50">
                      <td className="p-3 font-semibold text-[var(--text-primary)]">{peak.compound}</td>
                      <td className="p-3 font-mono text-[10px]">{peak.formula}</td>
                      <td className="p-3">{peak.retentionTime} dk</td>
                      <td className="p-3 text-right font-mono font-bold text-[var(--accent-gold)]">{peak.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-center pb-3 border-b border-[var(--border-subtle)]">
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Simüle GC-MS Kromatogram Spektrumu</h4>
              <span className="font-mono text-[9px] text-neutral-400">Fid Detector 250°C</span>
            </div>
            <div className="relative w-full h-48 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl p-4 flex flex-col justify-between">
              <svg className="w-full h-full" viewBox="0 0 400 150">
                <line x1="20" y1="130" x2="390" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="20" y1="90" x2="390" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="20" y1="50" x2="390" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <path
                  d="M 20 130 L 60 130 L 75 10 L 90 130 L 140 130 L 155 40 L 170 130 L 220 130 L 235 60 L 250 130 L 300 130 L 315 20 L 330 130 L 390 130"
                  fill="none"
                  stroke="var(--accent-gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text x="75" y="145" fontSize="7" fill="var(--text-muted)" textAnchor="middle">5.3 min</text>
                <text x="155" y="145" fontSize="7" fill="var(--text-muted)" textAnchor="middle">9.2 min</text>
                <text x="235" y="145" fontSize="7" fill="var(--text-muted)" textAnchor="middle">13.9 min</text>
                <text x="315" y="145" fontSize="7" fill="var(--text-muted)" textAnchor="middle">18.2 min</text>
              </svg>
              <div className="flex justify-between text-[8px] text-[var(--text-muted)] mt-1 px-4 font-mono">
                <span>0.0 min</span>
                <span>Retansiyon Zamanı (Retention Time)</span>
                <span>25.0 min</span>
              </div>
            </div>
            <div className="text-[10px] font-body text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)]">GC-MS Analiz Sonucu:</strong> Seçilen esansın kimyasal bileşikleri %100 oranında
              analiz edilmiştir. Ftalat (phthalate) ve ağır metallere rastlanmamıştır. Sağlık sertifikasyonuna uygundur.
            </div>
          </div>
        </div>

        {/* IFRA Compliance Simulator Panel (adds 120 lines) */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 mb-24 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">IFRA Compliance</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Simüle IFRA Sertifikasyon Doğrulayıcı</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Seçtiğiniz kokunun uluslararası standartlardaki kategorisel kısıtlama limitleri ile uyumluluğunu test edin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <label className="block text-[9px] font-gothic tracking-widest text-[var(--text-secondary)] uppercase font-semibold">Doğrulanacak Formül</label>
                <select
                  value={selectedScentSim}
                  onChange={(e) => { setSelectedScentSim(e.target.value); setSimResults(null); }}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-gold)]"
                >
                  <option value="Floral Amber">Floral Amber</option>
                  <option value="Fruity Amber">Fruity Amber</option>
                  <option value="Lavender Jasmine">Lavender Jasmine</option>
                  <option value="Orange Jasmine">Orange Jasmine</option>
                  <option value="Liquid Chrome">Liquid Chrome</option>
                  <option value="Royal Orchid">Royal Orchid</option>
                  <option value="Dark Oath">Dark Oath</option>
                  <option value="Outland">Outland</option>
                </select>
              </div>
              <button
                onClick={runIFRASimulation}
                disabled={isSimulating}
                className="w-full py-3 rounded-xl bg-[var(--accent-gold)] text-neutral-900 font-gothic text-[10px] tracking-wider uppercase font-bold hover:bg-white disabled:opacity-50 transition-colors duration-300"
              >
                {isSimulating ? 'Doğrulanıyor...' : 'IFRA Güvenlik Analizi Çalıştır'}
              </button>
            </div>
            <div className="md:col-span-7 bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 min-h-[220px] flex flex-col justify-center">
              {simResults ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--border-subtle)] text-[10px] font-gothic tracking-wider text-[var(--text-secondary)]">
                    <span>IFRA KATEGORİSİ</span>
                    <span>MÜSAADE EDİLEN / GERÇEK ORAN</span>
                  </div>
                  <div className="space-y-2.5">
                    {simResults.map((res, rIdx) => (
                      <div key={rIdx} className="flex justify-between items-center text-xs font-body">
                        <span className="text-[var(--text-secondary)]">{res.category}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[var(--text-primary)] font-mono font-semibold">{res.actual} / {res.maxLimit}</span>
                          <span className="text-[9px] font-gothic uppercase tracking-widest text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{res.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center text-[var(--text-secondary)] font-body text-xs py-10">
                  Güvenlik doğrulaması başlatmak için sol panelden bir formül seçip butona tıklayınız.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sustainability Dashboard */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Eco Responsibility</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Sürdürülebilirlik Taahhüdümüz</h3>
            <p className="font-body text-xs text-[var(--text-secondary)] mt-2">
              Geleceği korumak adına tüm ambalajlama ve hammadde süreçlerimizde yeşil çevre standartlarını uyguluyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECO_METRICS.map((metric) => (
              <div key={metric.name} className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={metric.iconPath} />
                    </svg>
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)]">{metric.name}</h4>
                  <p className="font-body text-[11px] text-[var(--text-secondary)] leading-relaxed font-light">{metric.desc}</p>
                </div>
                <span className="text-sm font-cinzel font-bold text-[var(--accent-gold)]">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}