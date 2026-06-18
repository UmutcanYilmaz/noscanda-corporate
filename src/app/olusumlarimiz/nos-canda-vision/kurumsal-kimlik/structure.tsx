'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#F59E0B';
const ACCENT_BG = 'rgba(245, 158, 11, 0.06)';
const ACCENT_BORDER = 'rgba(245, 158, 11, 0.15)';

// Detailed list of 4 core brand assets
const IDENTITY_COMPONENTS = [
  { name: 'Logo & Amblem', desc: 'Markanın temel imzası. Minimum boyutta dahi detaylarını kaybetmeyen akıllı vektörel geometri.' },
  { name: 'Kartvizit (Premium)', desc: 'Kabartma lak, gofraj veya altın varak yaldız teknikleriyle donatılmış lüks kağıt dokusu.' },
  { name: 'Kurumsal Evrak', desc: 'Antetli kağıt, diplomat zarflar, torba zarflar, antetli fatura blokları ve kurumsal sunumlar.' },
  { name: 'Ambalaj Mimarisi', desc: 'Kutular, kurdeleler, özel kokulu kağıt astarlar ve ürün etiketleri ile uçtan uca tüketici paketi.' },
];

// Expanded list of 20 core design and identity services with rich descriptions
const SERVICES = [
  {
    title: 'Logo & Amblem Tasarımı',
    description: 'Markanızın felsefesini, ismini ve sektörel duruşunu tek bir ikonik simgede birleştiriyoruz. Vektörel bazda, her boyutta (web ikonundan bina cephesine) kusursuz görünecek logolar çiziyoruz.',
    details: 'Logo, bir kurumun en rafine ve görünür imzasıdır. Logo ve amblem tasarımı sürecimizde, sadece estetik kaygılarla değil, kurumun tarihsel birikimi, pazar konumu, hedef kitlesi ve holdingleşme vizyonu ile uyumlu geometrik formlar geliştiriyoruz. Tasarladığımız tüm logolar, piksellerden bağımsız vektörel standartlarda hazırlanarak dijital ekranlardan devasa bina cephelerine, fatura damgalarından lüks ürün ambalajlarına kadar her boyutta netliğini ve estetik dengesini korur.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Kartvizit (Business Card) Tasarımı',
    description: 'İş toplantılarında bıraktığınız ilk intibayı premium seviyeye taşıyoruz. Kağıt dokusu, kabartma lak, varak yaldız ve özel kesim alternatifleriyle prestijli kartvizitler tasarlıyoruz.',
    details: 'Fiziksel temasın ve yüz yüze iş geliştirme süreçlerinin en etkili aracı olan kartvizit, sahibinin ve temsil ettiği kurumun kalitesini doğrudan yansıtır. Pamuk lifli özel dokulu ithal kağıtlar, mat veya parlak selefon uygulamaları, bölgesel kabartma lak teknikleri, gofraj derinliği ve varak yaldız alternatifleri ile kartviziti sadece bir iletişim kartı olmaktan çıkarıp, lüks bir kurumsal kimlik nişanesine dönüştürüyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5a2.25 2.25 0 002.25 2.25zm.901-3.3c.06.225.205.411.398.53A5.253 5.253 0 019 18a5.25 5.25 0 013.701-1.53c.193-.119.338-.305.398-.53a5.25 5.25 0 10-7.7 0z" />
      </svg>
    ),
  },
  {
    title: 'Antetli Kağıt & Zarf Tasarımı',
    description: 'Resmi yazışmalarınızın, faturalarınızın ve teklif mektuplarınızın markanızın kurumsal asaletine uygun görünmesi için A4 antetli kağıt, diplomat zarf ve torba zarf tasarımlarını koordine ediyoruz.',
    details: 'Resmi yazışmalar, ticari sözleşmeler, iş ortaklığı teklifleri gibi tüm basılı veya PDF tabanlı dökümanlarda tutarlılık hayati önem taşır. Şirketinizin antetli kağıdı, diplomatik pencereli veya penceresiz zarfları, arşivleme torba zarfları ve fatura şablonları, kurumsal kimliğin renk ve tipografi kurallarına göre milimetrik olarak tasarlanır. Bu sayede her yazışmanız markanızın resmiyetini ve asaletini korur.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Tipografi & Kurumsal Font Seçimi',
    description: 'Markanızın okunabilirliğini ve görsel karakterini destekleyen kurumsal yazı tiplerini (font aileleri) seçiyoruz. Başlıklar, gövde metinleri ve basılı materyaller için hiyerarşik kurallar koyuyoruz.',
    details: 'Yazı karakterleri, kelimelerin ötesinde markanızın tonunu ve sesini ifade eder. Nos Canda Vision olarak, markanızın kurumsal dilini en iyi ifade edecek lüks serif veya modern sans-serif font ailelerini belirliyoruz. Web sitenizden basılı kataloglarınıza kadar tüm mecralarda kullanılacak yazı tipleri, satır arası boşlukları (leading) ve harf arası genişlikleri (tracking) standartlaştırılarak görsel bütünlük garanti edilir.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21L3 8.25m0 0a3.75 3.75 0 115.303-5.304L13.5 8.25m-10.5 0h10.5m0 0L21 21m0 0a3.75 3.75 0 11-5.303-5.304L10.5 8.25" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Renk Kodları & Kalibrasyon',
    description: 'Markanızın her basılı mecrada (matbaa, tekstil, ekran) tam olarak aynı tonda görünmesini garanti etmek için Pantone, CMYK, RGB ve HEX renk kodlarını titizlikle kalibre ediyoruz.',
    details: 'Farklı baskı teknikleri ve ekran teknolojileri, renklerin kaymasına neden olabilir. Markanızın imza renklerinin, tüm matbaa makinalarında, kumaş baskılarında, ambalaj kartonlarında ve dijital arayüzlerde milimetrik doğrulukla üretilmesi için Pantone (PMS) kodlarını kalibre ediyoruz. Bu süreç, markanızın tanınırlığını ve ciddiyetini koruyan en temel teknik standarttır.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Lüks Ürün Ambalaj Tasarımı',
    description: 'Kutular, şişeler, etiketler ve torbalar için premium ambalaj konseptleri geliştiriyoruz. Nos Canda koku serilerinde uyguladığımız lüks mat karton, yaldız baskı ve sürdürülebilir malzemeleri standartlaştırıyoruz.',
    details: 'Ambalaj, ürünün fiziki dünyadaki en önemli koruyucusu ve markanın sessiz satış temsilcisidir. Şişe formlarından kapak detaylarına, iç koruma haznelerinden dış kutu kabartmalarına kadar lüks tüketim standartlarında ambalajlar tasarlıyoruz. Sürdürülebilir, geri dönüştürülebilir ve doğayla barışık lüks karton ve cam malzemeleri entegre ederek hem çevreci hem de prestijli çözümler sunuyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: 'Dijital Arayüz & Şablon Standartları',
    description: 'Kurumsal e-posta imzaları, sunum şablonları (Keynote/PowerPoint), sosyal medya paylaşım şablonları ve fatura tasarımlarıyla dijital dünyadaki görünümünüzü nizami hale getiriyoruz.',
    details: 'Kurum çalışanlarının dış dünya ile yaptığı her dijital yazışma, teklif sunumu veya sosyal medya paylaşımı, kurumsal standartlara tabi olmalıdır. Ortak e-posta imzası şablonları, kurumsal Keynote ve PowerPoint sunum slaytları, sosyal medya görsel ızgaraları ve dijital fatura şablonları tasarlayarak dijital temas noktalarını nizami bir disiplin altına alıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Brandbook (Marka Kimlik Kılavuzu)',
    description: 'Logo kullanım kurallarını, renk paletini, font sistemini ve tüm basılı evrak tasarımlarını içeren 100+ sayfalık kurumsal kimlik kılavuzunu hazırlayıp teslim ediyoruz.',
    details: 'Brandbook, markanızın görsel anayasasıdır. Logonun minimum boyutları, yanlış kullanım şekilleri, kurumsal renklerin farklı zeminlerdeki değerleri, font hiyerarşisi, araç giydirme kılavuzları ve tabela standartları gibi tüm konuları kapsayan detaylı bir kılavuzdur. Bu kılavuz sayesinde, gelecekte birlikte çalışacağınız tüm ajanslar ve matbaalar markanızı kusursuz ve standartlara uygun şekilde işleyebilir.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Ofis & Tabela Yönlendirmeleri',
    description: 'Merkez ofisler, bayiler ve showroomlar için iç mekan yönlendirmeleri, dış cephe tabelaları ve masaüstü kurumsal aksesuar tasarımlarını projelendiriyoruz.',
    details: 'Fiziki çalışma alanları, kurum kültürünün ve prestijinin çalışanlar ve ziyaretçiler tarafından bizzat deneyimlendiği alanlardır. Showroom giriş yönlendirmelerinden departman isimliklerine, dış cephe totem tabelalarından karşılama bankosu arkasındaki logo uygulamalarına kadar tüm mimari yönlendirme projelerini görsel kimliğinizle entegre şekilde tasarlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 11.5v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6" />
      </svg>
    ),
  },
  {
    title: 'Fuar & Etkinlik Stant Tasarımı',
    description: 'Ulusal ve uluslararası fuarlarda markanızı temsil edecek modüler veya ahşap özel tasarım stantların 3D görselleştirmelerini ve grafik yerleşimlerini yönetiyoruz.',
    details: 'Fuarlar, pazar payını artırma ve yeni ticari ortaklıklar kurma noktasında kritik öneme sahiptir. Markanızın lüks ve yenilikçi duruşunu fuar alanında hissettirecek özel tasarım stant tasarımları yapıyoruz. Stant duvarlarındaki grafiklerin yerleşimlerinden, aydınlatma açılarına ve karşılama bankolarındaki logo konumlandırmalarına kadar tüm fuar alanını bir deneyim merkezi olarak kurguluyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-10.5 0V7.5L12 3l5.25 4.5V21" />
      </svg>
    ),
  },
  {
    title: 'Promosyon & Kurumsal Hediye Tasarımı',
    description: 'VIP iş ortaklarınız ve çalışanlarınız için koku şık kutuları, özel defterler, kalemler ve deri aksesuarlar gibi premium promosyon ürünleri tasarlıyoruz.',
    details: 'Standart promosyon anlayışını yıkarak, tamamen markanıza özel ve kaliteli kurumsal hediyeler kurguluyoruz. Özel kokulu mum setleri, deri pasaport kılıfları, prestijli metal kalemler ve şık kurumsal hediye kutuları ile markanızın hatırlanma kalitesini lüks seviyeye yükseltiyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h17.25" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Araç Giydirme Standartları',
    description: 'Şirket içi lojistik, pazarlama ve saha ekiplerinin kullandığı araç filoları için kurumsal logo ve renk yerleşim şablonları hazırlıyoruz.',
    details: 'Saha araçları, caddelerde gezen hareketli reklam panolarınızdır. Binek araçlardan hafif ticari araçlara kadar şirket filonuzdaki tüm taşıtların kapı, kaput ve tavan bölgelerine uygulanacak grafik yerleşim standartlarını brandbook dahilinde çiziyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125a1.125 1.125 0 001.125-1.125V9.75M8.25 13.5h7.5m-7.5-6h7.5M3.75 6.75h16.5M3.75 6.75A1.125 1.125 0 014.875 5.625h14.25a1.125 1.125 0 011.125 1.125v7.5a1.125 1.125 0 01-1.125 1.125H4.875a1.125 1.125 0 01-1.125-1.125v-7.5z" />
      </svg>
    ),
  },
  {
    title: 'Sosyal Medya Kit Kitapçığı',
    description: 'Instagram, LinkedIn, YouTube ve Facebook için kapak görselleri, profil şablonları, hikaye sınır çizgileri ve video çerçeveleri tasarlıyoruz.',
    details: 'Sosyal ağlarda estetik tutarlılık, takipçi sadakatini ve etkileşim kalitesini doğrudan belirler. Grid yapısı kuralları, tipografik başlık kalıpları ve hareketli video geçiş şablonları hazırlayarak markanızın sosyal medyadaki lüks görsel ritmini koruyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.322.086-.665-.018-.99A9.016 9.016 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Lüks Katalog & Dergi Tasarımı',
    description: 'Markanızın ürün koleksiyonlarını, kurumsal hikayesini ve felsefesini içeren prestijli katalog ve basılı dergilerin mizanpaj tasarımlarını yapıyoruz.',
    details: 'B2B müşterilerinize ve özel davetlilerinize sunacağınız basılı marka katalogları, mizanpaj kuralları (grids), büyük ve çarpıcı fotoğraf alanları, şık beyaz boşluklar (whitespace) ve lüks kapak detaylarıyla tasarlanarak marka değerinizi somutlaştırır.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Tipografi Sistem Standartları',
    description: 'Dijital ve fiziksel yayınlarınızda okunabilirliği ve bütünlüğü artırmak için hiyerarşik font lisanslama ve yerleşim kurallarını belirliyoruz.',
    details: 'Tipografi, markanızın dilsiz sesidir. Markanızın dijital sistemlerde, basılı yayınlarda ve tabela sistemlerinde kullanacağı font ailelerini, harf aralıklarını ve satır yüksekliklerini kurallara bağlayarak tipografik bütünlüğü kurumsallaştırıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M9 9H4.5m4.5 0V4.5m11.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15m0 0v4.5m0-4.5h4.5" />
      </svg>
    ),
  },
  {
    title: 'Çevreci Ambalaj & Sürdürülebilirlik Kılavuzu',
    description: 'Doğa dostu, geri dönüştürülebilir ham maddeler ve ekolojik mürekkepler kullanarak lüks ve çevreci ambalaj standartları tanımlıyoruz.',
    details: 'Sürdürülebilirlik, lüksün yeni tanımıdır. Ambalaj projelerimizde doğaya zarar vermeyen geri dönüştürülebilir lüks kartonları, soya bazlı organik mürekkepleri ve plastik içermeyen koruma haznelerini standartlaştırarak çevre bilincinizi belgeliyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal İkonografi & Sembol Seti',
    description: 'Web sitenizde, mobil uygulamalarınızda ve basılı dökümanlarınızda kullanılacak markanıza özel piktogram ve ikon aileleri tasarlıyoruz.',
    details: 'Hazır ikon kütüphaneleri yerine, sadece sizin markanıza özel çizilmiş, logonuzun yuvarlaklık ve köşe keskinliği oranlarıyla uyumlu özel sembol setleri hazırlayarak görsel iletişim kalitesini benzersizleştiriyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-2.25v2.25m3-2.25v2.25m3-2.25v2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: 'Basılı Üretim ve Kağıt Kalifikasyonu',
    description: 'Kartvizit, katalog ve zarf üretimlerinde kullanılacak fantezi kağıtların lif yapısını, gramajını ve matbaa kalifikasyonlarını yönetiyoruz.',
    details: 'Tasarımın başarısı dokunma hissiyle tamamlanır. İtalya ve İsveç menşeili özel dokulu sürdürülebilir fantezi kağıtların gramajlarını ve matbaa basım niteliklerini markanızın standartlarına uygun olarak seçip belgeliyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Kurumsal Fotoğrafçılık Standartları',
    description: 'Yönetim kurulu portreleri, üretim tesisleri ve ürün çekimlerinde uygulanacak ışık, renk derecelendirmesi ve kadraj kurallarını belirliyoruz.',
    details: 'Kurumsal yayınlarınızda kullanılacak tüm fotoğrafların asil, doğal ışıklı ve yüksek kontrastlı olmasını sağlamak amacıyla, şirket fotoğrafçılarının ve ajansların uyması gereken ışık ve renk filtre standartlarını tanımlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316A2.192 2.192 0 0014.502 4h-5c-.71 0-1.366.342-1.777.926l-.822 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Şirket İçi Sunum ve Rapor Mizanpajı',
    description: 'Yatırımcı sunumları, genel kurul raporları ve departman içi dökümanlar için şablon ve görsel yerleşim kurallarını çiziyoruz.',
    details: 'Şirketinizin yönetim kurulu düzeyinde veya dış finansal kuruluşlara yapacağı sunumların itibarını korumak için, veri tablolarının çizgi kalınlıklarından grafik renk kodlarına kadar mizanpaj şablonlarını nizami hale getiriyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

// Expanded FAQ list for Business Owners (35 Detailed Items)
const FAQS = [
  {
    q: 'Kurumsal kimlik tam olarak neyi ifade eder ve işletmem için neden hayati önem taşır?',
    a: 'Kurumsal kimlik, şirketinizin hem iç dünyada hem de dış dünyada görünen yüzü, ses tonu ve duruşunun bütünüdür. Yalnızca bir logodan ibaret değildir; kartvizitleriniz, fatura tasarımlayınız, antetli kağıtlarınız, ambalajlarınız, ofis yönlendirmeleriniz ve dijital arayüzlerinizin tamamıdır. Güçlü bir kurumsal kimlik, müşterileriniz ve iş ortaklarınız nezdinde güvenilirlik yaratır, şirketinizin ciddiyetini ve kalitesini simgeler, pazar değerinizi artırarak sizi rakiplerinizden ayırır.',
  },
  {
    q: 'Antetli kağıt ve kartvizit gibi basılı evraklar dijitalleşen dünyada hâlâ önemli mi?',
    a: 'Kesinlikle evet. Dijitalleşme ne kadar yaygınlaşırsa yaygınlaşsın, fiziksel temas ve basılı dökümanlar B2B ortaklıklarda, resmi sözleşmelerde ve yüz yüze toplantılarda kalıcı bir prestij göstergesidir. Kaliteli bir pamuk kağıda basılmış, yaldız veya kabartma detayları olan bir kartvizit veya özenle tasarlanmış antetli kağıt üzerinde sunulan bir teklif mektubu, işinize ve müşterinize verdiğiniz değerin en somut ifadesidir.',
  },
  {
    q: 'Vizyon ve Misyon kavramları kurumsal kimliğin neresinde yer alır?',
    a: 'Vizyon ve misyon, kurumsal kimliğin temel felsefi sütunlarıdır. Tasarlanan tüm görsel bileşenler (renklerin tonları, logonun keskinliği veya yumuşaklığı, seçilen yazı tipleri) bu felsefeyi yansıtmak zorundadır. Örneğin, geleceğe yön veren inovatif bir vizyon varsa daha modern ve dinamik çizgiler tercih edilirken; köklü bir güven misyonu varsa daha klasik, serif yazı tipleri ve asil renkler kullanılır. Görsel kimlik, vizyon ve misyonun somutlaşmış halidir.',
  },
  {
    q: 'Holdingleşme sürecinde kurumsal kimlik yönetimi nasıl olmalıdır?',
    a: 'Holdingleşme sürecinde, farklı sektörlerde faaliyet gösteren alt iştiraklerin ve markaların ortak bir kurumsal anayasaya bağlı olması gerekir. "Monolitik", "Destekli" veya "Çoklu Marka" mimarilerinden hangisinin seçileceğine karar verilir. Kurumsal kimlik kılavuzu (brandbook), tüm alt markaların ana holding logosu ve standartlarıyla olan ilişkisini net kurallara bağlayarak grup genelinde itibar ve görsel bütünlük sağlar.',
  },
  {
    q: 'Tasarım aşamasında renklerin kalibrasyonu (Pantone) neden bu kadar önemlidir?',
    a: 'Çünkü her bilgisayar ekranının, telefon panelinin ve matbaa makinesinin renk gösterme kabiliyeti farklıdır. Ekranda gördüğünüz canlı bir altın sarısı veya koyu lacivert tonu, kalitesiz bir matbaada basıldığında kahverengi veya soluk mavi olarak çıkabilir. Pantone, küresel olarak standartlaştırılmış bir renk sistemidir. Tasarımlarımızı Pantone kodlarıyla teslim ederek, dünyanın neresinde baskı yapılırsa yapılsın tam olarak aynı renk kalitesinin elde edilmesini güvenceye alıyoruz.',
  },
  {
    q: 'Logo tasarım sürecinde kaç alternatif konsept sunuyorsunuz?',
    a: 'Yapılan derin pazar araştırmaları, rakip analizleri ve markanızın kimlik tanımları doğrultusunda, birbirinden tamamen farklı felsefi ve görsel yaklaşımlara sahip 3 adet ana konsept tasarımı hazırlıyoruz. Bu konseptlerin hikayelerini ve uygulama alanlarını size sunduktan sonra, seçtiğiniz konsept üzerinde revizyonlarla ilerleyerek mükemmel sonuca ulaşıyoruz.',
  },
  {
    q: 'Kurumsal kimlik projesinin teslim süresi ortalama ne kadardır?',
    a: 'Kapsamlı bir kurumsal kimlik projesi (logo, temel basılı evraklar, kurumsal yazı tipleri ve renk standartları) strateji ve araştırma dahil ortalama 4 ila 6 hafta sürmektedir. Eğer işin içine ambalaj tasarımları, fuar standı konseptleri ve detaylı marka kılavuzunun (brandbook) yazılması da girerse bu süre 8 ila 12 haftayı bulabilmektedir.',
  },
  {
    q: 'Matbaa basım ve üretim süreçlerinde destek veriyor musunuz?',
    a: 'Evet, tasarımın ekranda bitmesi bizim için projenin bittiği anlamına gelmez. Üretim kalitesini garanti altına almak için matbaa ekipleriyle doğrudan çalışıyoruz. Doğru kağıt gramajının seçimi, kabartma kalıplarının derinliği, altın varak yaldızların kalitesi ve bıçak kesim çizgilerinin doğruluğu gibi teknik detayları bizzat denetleyerek nihai ürünün ekrandaki tasarımı birebir yansıtmasını sağlıyoruz.',
  },
  {
    q: 'Kurumsal kimlik kılavuzu (Brandbook) neleri kapsar?',
    a: 'Brandbook, logonun güvenli kullanım alanlarından minimum boyut kurallarına, kurumsal renklerin farklı mecralardaki kodlarından (Pantone, CMYK, RGB, HEX) kurumsal font hiyerarşisine, antetli kağıt ve zarf yerleşimlerinden araç giydirme şablonlarına, tabela tasarımlarından promosyon ve sosyal medya standartlarına kadar markanın tüm görsel kurallarını içeren 100+ sayfalık detaylı bir marka anayasası kılavuzudur.',
  },
  {
    q: 'Tasarım dosyalarını hangi formatlarda teslim ediyorsunuz?',
    a: 'Tasarım süreçleri tamamlandığında, matbaa basımına hazır yüksek çözünürlüklü vektörel formatları (AI, PDF, EPS, SVG) ve dijital platformlar için optimize edilmiş formatları (PNG, WebP, JPG) organize bir dijital arşiv halinde teslim ediyoruz. Bu sayede gelecekte çalışacağınız tüm ajanslar ve matbaalar dosyaları sorunsuzca kullanabilir.',
  },
  {
    q: 'Şirketimizin mevcut bir logosu var, tamamen değiştirmek yerine modernleştirebilir miyiz?',
    a: 'Evet, buna "logo amblem logotype revizyonu" veya "rebranding/refresh" diyoruz. Markanızın yıllar içinde kazandığı bilinirliği koruyarak, logonun çizgilerini sadeleştiriyor, tipografisini modernize ediyor ve dijital ekranlara (mobil uygulamalar, web siteleri) uyumlu hale getiriyoruz. Bu sayede köklü geçmişinizden kopmadan çağdaş bir görünüme kavuşursunuz.',
  },
  {
    q: 'Ambalaj tasarımında lüks algısını nasıl oluşturuyorsunuz?',
    a: 'Lüks algısı detaylarda gizlidir. Doğru karton dokusunun seçilmesi (fantezi kağıtlar, pamuklu yüzeyler), mat lak uygulamaları ile dokunma hissinin iyileştirilmesi, logonun sıcak varak yaldız veya kabartma (gofraj) ile belirginleştirilmesi ve kutunun açılış mekanizmasındaki akustik / fiziksel deneyim ambalajda lüks algısını oluşturan temel faktörlerdir.',
  },
  {
    q: 'Kurumsal kimlik tasarımının patent ve tescil süreçlerini yönetiyor musunuz?',
    a: 'Tasarım ajansı olarak yasal patent tescil hizmeti vermiyoruz; ancak tescil edilebilir özgünlükte tasarımlar yapıyoruz. Seçtiğiniz logonun ve marka isminin Türk Patent ve Marka Kurumu standartlarına uygunluğunu tescil danışmanınız ile koordineli çalışarak teyit ediyor ve gerekli vektörel dosyaları tescil başvurusu formatına uygun olarak hazırlıyoruz.',
  },
  {
    q: 'Sosyal medya görsellerimiz için şablon hazırlıyor musunuz?',
    a: 'Evet. Instagram gönderi ve hikaye şablonları, LinkedIn kurumsal paylaşım tasarımları, YouTube kapak ve çerçeve tasarımları gibi sosyal medya kanallarınızın tamamında kullanılmak üzere kolayca düzenlenebilir şablonlar (Photoshop, Illustrator veya Canva formatında) hazırlıyoruz. Böylece sosyal medyada da kurumsal standartlarınız korunur.',
  },
  {
    q: 'Fuar stant tasarımlarında görsel kimlik nasıl entegre edilir?',
    a: 'Fuar standı, markanızın üç boyutlu dünyadaki geçici showroomudur. Standın genel mimari çizgilerinden kullanılan aydınlatma renklerine, duvarlardaki geniş grafik alanlarından resepsiyon bankosunun yerleşimine kadar her noktada kurumsal kimliğinizi yansıtıyoruz. Ziyaretçiler standa adım attığı anda marka felsefenizi ve kalitenizi hisseder.',
  },
  {
    q: 'Kurumsal hediye ve promosyon tasarımlarında standart dışı ne tür işler yapıyorsunuz?',
    a: 'Sıradan promosyon ürünleri (plastik kalemler, kalitesiz anahtarlıklar) marka değerinize zarar verir. Nos Canda Vision olarak markanıza özel ahşap kutulu koku setleri, deri iş döküman kılıfları, özel tasarım metal defter ve kalem setleri gibi VIP nitelikte, uzun yıllar masalarda saklanacak prestijli kurumsal hediyeler tasarlıyoruz.',
  },
  {
    q: 'E-posta imzalarımız için standart tasarımlar yapıyor musunuz?',
    a: 'Evet. Tüm çalışanlarınızın dış dünya ile yaptığı yazışmalarda görsel bir dağınıklık olmaması için unvan, telefon ve adres alanlarının nizami şekilde yerleştirildiği, tüm e-posta istemcileriyle (Outlook, Gmail, Apple Mail) uyumlu HTML kurumsal e-posta imzası şablonları tasarlıyoruz.',
  },
  {
    q: 'Araç giydirme tasarımları neye göre yapılır?',
    a: 'Şirket araçlarınızın markası, modeli ve gövde yapısı dikkate alınarak ölçekli çizimler üzerinde tasarımlar yapıyoruz. Logonun kapıdaki duruşu, telefon ve web adresi bilgilerinin okunabilirlik oranları ve araç rengi ile görsel uyumu gibi teknik kriterlere göre araç giydirme standartlarını belirliyoruz.',
  },
  {
    q: 'Showroom ve ofis içi yönlendirme tabelaları tasarlıyor musunuz?',
    a: 'Evet. Kurum binalarınızın girişindeki ana yönlendirme tabelalarından, departman kapı isimliklerine, toplantı odası cam giydirmelerinden yangın çıkış yönlendirmelerine kadar tüm mimari yönlendirme elemanlarını kurumsal font ve renklerinizle uyumlu şekilde tasarlayıp projelendiriyoruz.',
  },
  {
    q: 'Yeni bir marka oluştururken isim bulma (naming) hizmetiniz var mı?',
    a: 'Evet. Markanızın hitap edeceği sektörü, hedef kitleyi ve marka felsefesini analiz ederek, tescile uygun, telaffuzu kolay, akılda kalıcı ve küresel vizyonunuza yakışacak kurumsal marka ismi alternatifleri üretiyoruz. Alan adı (domain) müsaitlik durumlarını da kontrol ederek raporluyoruz.',
  },
  {
    q: 'Kurumsal kimlik tasarımı tamamlandıktan sonra güncellemeleri nasıl yapıyoruz?',
    a: 'Teslim ettiğimiz marka kılavuzu (brandbook) kuralları son derece nettir. Ancak şirketinizin büyüme sürecinde yeni departmanlar kurulduğunda veya yeni bir ürün ailesi eklendiğinde kılavuza ek sayfalar tasarlayarak kurumsal kimliğinizi canlı ve güncel tutuyoruz.',
  },
  {
    q: 'Tipografi seçiminde kaç farklı font ailesi belirlenir?',
    a: 'Genellikle marka kimliğinde görsel karmaşayı önlemek için en fazla 2 farklı font ailesi belirlenir. Bunlardan biri başlıklar ve dikkat çekici alanlar için kurumsal karakteri yansıtırken (örneğin lüks bir şerif font), diğeri gövde metinleri ve resmi yazışmalar için yüksek okunabilirliğe sahip modern bir yazı tipidir.',
  },
  {
    q: 'Lüks ve elit bir marka algısı oluşturmak için renk paleti nasıl seçilmelidir?',
    a: 'Lüks marka algısı genellikle daha dingin, asil ve doymuş renk tonlarıyla sağlanır. Derin siyahlar, antrasit tonları, warm ivory (sıcak fildişi) zeminler ve bu zeminleri taçlandıran kontrollü metalik yaldızlar (gold, şampanya sarısı, platin) markaya elit bir görsel hava katar. Aşırı canlı ve kontrast renklerden kaçınılır.',
  },
  {
    q: 'Katalog tasarımlarında sayfa mizanpajı (layout grid) neden gereklidir?',
    a: 'Mizanpaj ızgarası, katalog sayfalarındaki fotoğrafların, başlıkların ve ürün açıklamalarının her sayfada hizalı ve dengeli durmasını sağlar. Rastgele yerleşimler okuyucuyu yorar ve amatör bir izlenim bırakır. Izgara sistemi ise katalog genelinde profesyonel bir ritim oluşturur.',
  },
  {
    q: 'Kurumsal kimlik projesine başlamadan önce ne tür hazırlıklar yapmalıyız?',
    a: 'Şirketinizin geçmişi, faaliyet gösterdiği alanlar, gelecek hedefleri, varsa mevcut logo ve materyalleri, rakipleriniz ve hedeflediğiniz pazar segmenti hakkında bize vereceğiniz bilgiler (brief) projenin temelini oluşturur. Bu brief doğrultusunda tasarım stratejimizi şekillendiriyoruz.',
  },
  {
    q: 'İhracat odaklı markalar için kurumsal kimlikte nelere dikkat edilmelidir?',
    a: 'İhracat hedefleri olan şirketlerin görsel dili, küresel renk kodlarına (Pantone) ve uluslararası tipografi standartlarına uygun olmalıdır. Ayrıca marka isminin ve sembolünün hedef pazarlardaki kültürel anlamları analiz edilmeli, yabancı dillerdeki telaffuz kolaylığı test edilmelidir.',
  },
  {
    q: 'Kurumsal logonun dikey veya yatay alternatif kullanımları neden önemlidir?',
    a: 'Çünkü logo her mecrada aynı fiziksel alana yerleştirilemez. Örneğin bir web sitesinin sol üst köşesinde yatay kullanım (logotype) daha uygunken, dikey bir reklam afişinde veya hediye kutusunun üzerinde kare ya da dikey oranlı kullanım daha dengeli durur. Bu alternatifler brandbook kılavuzunda açıkça tanımlanır.',
  },
  {
    q: 'Kağıt üzerindeki gofraj (kabartma) derinliği neye göre ayarlanır?',
    a: 'Kabartma derinliği, seçilen kağıdın pamuk lif oranına ve kalınlığına (gramajına) bağlıdır. İnce kağıtlarda gofraj patlamaya neden olabilirken, kalın ve yumuşak dokulu özel kağıtlarda harika bir dokunsal derinlik sunar. Tasarım aşamasında bu dengeleri belirleyerek matbaaya kılavuzluk yapıyoruz.',
  },
  {
    q: 'Kartvizitlerin standart ölçüleri dışına çıkmak doğru mudur?',
    a: 'Lüks marka algısı için bazen standart 85x54mm kartvizit ölçüleri yerine daha dar (örn: 90x45mm) veya özel kare kesimler tercih edilebilir. Ancak bu durumda kartvizitin cüzdan veya kartlık gözlerine sığmama riski dikkate alınmalı, estetikle işlevsellik dengelenmelidir.',
  },
  {
    q: 'Marka kimliğindeki logonun arka plandaki koruma alanı (clear space) nedir?',
    a: 'Logonun etrafında başka hiçbir görsel elemanın (metin, fotoğraf veya başka bir ikon) girmemesi gereken boşluk alanıdır. Bu alan, logonun diğer ögeler tarafından ezilmesini önler ve markanın saygın duruşunu korur. Koruma alanı logonun kendi harf veya sembol yüksekliğine oranla (örn: X kadar) brandbookta belirlenir.',
  },
  {
    q: 'Dijital fatura ve irsaliyelerin tasarımı kurumsal kimliğe dahil midir?',
    a: 'Evet, kesinlikle dahildir. Müşterilerinizin satın alma sonrası aldığı her resmi döküman (e-fatura, e-arşiv fatura şablonu) kurumsal renklerinizle ve logonuzla tasarlanmalıdır. Bu, ticaretinizin son aşamasında dahi kurumsal kalitenizi korumanızı sağlar.',
  },
  {
    q: 'Araç giydirmede kısmi kaplama mı yoksa tam kaplama mı tercih edilmelidir?',
    a: 'Lüks marka algısı için genellikle "kısmi ve minimalist" araç giydirmeleri (sadece kapılarda şık bir logo ve arka kısımda ince bir web adresi) tercih edilir. Komple reklam filmi giydirmeleri ise daha çok dağıtım ve lojistik odaklı kitle markalarında tercih edilir.',
  },
  {
    q: 'Antetli kağıtta hangi kağıt gramajı tercih edilmelidir?',
    a: 'Standart fotokopi kağıtları 80 gramdır ve amatör bir his bırakır. Kurumsal antetli kağıt tasarımlarımız için en az 110 gram veya 120 gram özel dokulu, mürekkep dağıtmayan ithal yazı kağıtlarını standartlaştırıyoruz. Bu kağıtlar imza ve yazışma kalitesini doğrudan artırır.',
  },
  {
    q: 'VIP hediye kutularında koku entegrasyonu nasıl sağlanır?',
    a: 'Nos Canda olfaktif uzmanlığı ile, VIP kurumsal hediye kutularının iç yüzeylerini ve koruma kağıtlarını markanıza özel formüle edilmiş bir imza esansla hafifçe kokulandırıyoruz. Kutu açıldığı anda yayılan bu esans, müşterinizde kalıcı ve hoş bir duyusal hafıza bırakır.',
  },
  {
    q: 'Şirket içi tabela ve yönlendirme sistemlerinde aydınlatma nasıl olmalıdır?',
    a: 'Mimari tabelalarda doğrudan göz alan çiğ neon veya parlak LED aydınlatmalar yerine, harflerin arkasından duvara yansıyan (halo-effect) endirekt, sıcak gün ışığı tonlarındaki aydınlatmaları tercih ediyoruz. Bu aydınlatma tarzı mekanın lüks havasını destekler.',
  },
  {
    q: 'Kurumsal kimlik yenileme (rebranding) kararı ne zaman alınmalıdır?',
    a: 'Şirketlerin büyüme hedeflerinde stratejik değişimler olduğunda, yeni pazarlara veya iştiraklere açıldıklarında veya mevcut görsel dil modern dijital mecralarda hantal kaldığında rebranding kararı alınmalıdır. Bu süreç, markanın öz değerlerini koruyarak geleceğe daha güçlü hitap etmesini sağlar.',
  },
  {
    q: 'Web sitemizdeki görsellerin kurumsal kimliğe uyumu nasıl denetlenir?',
    a: 'Web sitenizdeki görseller, renk paletleri ve tipografik hiyerarşiler brandbookta belirlenen dijital kılavuzlara göre kontrol edilir. Sitedeki beyaz alanların dengesi, butonlerin köşe yuvarlaklığı ve görsellerin kontrast ayarları tek bir standarda tabi tutulur.',
  },
  {
    q: 'Franchise ve bayilerimiz için kurumsal kimlik denetimini nasıl yapıyoruz?',
    a: 'Franchise ve bayiler için hazırlanan özel mimari ve görsel kılavuzlar aracılığıyla denetim sağlıyoruz. Dış tabela ölçülerinden stant konumlandırmalarına kadar tüm tasarım standartları denetlenerek bayilerin holding itibarını zedelemesi önlenir.',
  },
  {
    q: 'Tipografi lisanslama süreçleri nasıl işler?',
    a: 'Seçilen kurumsal font ailelerinin web, masaüstü ve mobil uygulamalarda yasal olarak kullanılabilmesi için gerekli kurumsal lisanslar holding adına satın alınır ve tescillenir. Bu, markanızın yasal telif riskleriyle karşılaşmasını engeller.',
  },
  {
    q: 'Marka kimliğinde maskot veya ek grafik ögelerin rolü nedir?',
    a: 'Maskot veya yardımcı grafik örüntüleri (patterns), markanın sadece logodan ibaret kalmamasını, ambalajlarda ve dijital reklamlarda daha akılda kalıcı ve dinamik bir hikaye anlatımı kurmasını destekler.',
  },
  {
    q: 'Kurumsal kimlik çalışmaları fikri mülkiyet hukuku kapsamında nasıl korunur?',
    a: 'Tasarım aşaması bitiminde teslim ettiğimiz tüm özgün tasarımlar, logo amblemleri ve yazı biçimleri, Türk Patent ve Marka Kurumu nezdinde marka ve endüstriyel tasarım tescili yapılarak yasal koruma altına alınır.',
  },
  {
    q: 'İç ve dış yönlendirme tabela malzemeleri seçiminde nelere dikkat edilmelidir?',
    a: 'Mimari tabelalarda lüks hissiyatını korumak için plastik malzemeler yerine fırçalanmış pirinç, mat antrasit kaplı paslanmaz çelik ve temperli cam gibi uzun ömürlü, asil ve kaliteli hammaddeler tercih edilmelidir.',
  },
  {
    q: 'Holding bünyesinde yeni bir şirket kurulduğunda süreç nasıl ilerler?',
    a: 'Holding marka mimarisi kılavuzuna göre, ana holding logosunun geometrisi ve renk kodları temel alınarak yeni şirketin sektörel kimliği tasarlanır. Böylece yeni marka kurulduğu gün holdingin itibar mirasını devralmış olur.',
  },
  {
    q: 'Kokulandırılmış kurumsal basılı materyaller ne kadar kalıcıdır?',
    a: 'Özel mikrokapsül koku teknolojisiyle ürettiğimiz kurumsal broşürler ve kutu astarları, üzerlerine hafifçe dokunulduğunda veya sürtüldüğünde esans salmaya başlar ve uygun saklama koşullarında 6 aya kadar kalıcılığını korur.',
  },
  {
    q: 'Kurumsal kimlik bütçesi belirlenirken hangi kalemler dikkate alınmalıdır?',
    a: 'Stratejik araştırma, tasarım alternatiflerinin üretilmesi, brandbook yazımı, dijital şablonların hazırlanması ve matbaa basım denetimi gibi süreçler bütçelendirilir. Bu yatırım, uzun vadeli itibar kazanımı düşünüldüğünde en yüksek geri dönüş oranına sahiptir.',
  },
  {
    q: 'Kurumsal tabela ve mimari yönlendirmelerin dayanıklılık testleri nasıl yapılır?',
    a: 'Dış mekan tabelalarımızın rüzgar yükü dayanıklılığı, UV ışınlarına karşı solmazlık direnci ve korozyon testleri mühendislik standartlarına göre önceden simüle edilir. Bu sayede fiziki tabela sistemleri 10 yılı aşkın süre ilk günkü zarafetini korur.',
  },
  {
    q: 'Marka kimliği kılavuzu dijital ortamda nasıl güncellenir ve dağıtılır?',
    a: 'Brandbook dokümanını bulut tabanlı bir dijital marka portalı üzerinden yayınlıyoruz. Böylece herhangi bir tasarım kuralı veya logo alternatifi güncellendiğinde, tüm iştirakler ve ajanslar en güncel dosyalara anında erişebilir.',
  },
  {
    q: 'Tasarım aşamasında hedef kitle odağı nasıl belirlenir?',
    a: 'Markanızın sunduğu hizmet veya ürünlerin alıcı profilini (persona) yaş, gelir grubu, yaşam tarzı ve coğrafi konum bazında analiz ediyoruz. Tasarım dilini (serif font asilliği veya minimalist modernlik) bu alıcı grubunun algı beklentilerine göre seçiyoruz.',
  },
  {
    q: 'Fiziksel ambalaj üretiminde matbaa kalifikasyon süreci nasıl yönetilir?',
    a: 'Üretim aşamasında renklerin kaymaması, kesimlerin sıfır hata ile yapılması ve yaldızların dökülmemesi için matbaada özel deneme baskıları (proofing) yaptırıp onaylıyoruz.',
  },
  {
    q: 'Kurumsal kimlik materyalleri için sürdürülebilir kağıt seçimi nasıl yapılır?',
    a: 'FSC sertifikalı, geri dönüştürülebilir liflerden üretilen, ekolojik duyarlılığa sahip ithal fantezi kağıtları tercih ederek çevre dostu duruşumuzu belgeliyoruz.',
  },
];

// Expanded comparison matrix rows (15 Rows)
const MATRIX_ROWS = [
  {
    param: 'Görsel Bütünlük',
    traditional: 'Her departmanın kendi isteğine göre hazırladığı uyumsuz sunumlar, farklı matbaalarda farklı tonlarda basılan evraklar.',
    noscanda: 'Brandbook kurallarına sıkı sıkıya bağlı, tek bir merkezden yönetilen ve tüm mecralarda (dijital/basılı) birebir aynı olan görsel duruş.',
    business: 'Marka bilinirliğini ve prestijini maksimize eder, kurumsal ciddiyeti müşterilere ilk saniyeden hissettirir.'
  },
  {
    param: 'Logo & Amblem Standartları',
    traditional: 'Çözünürlüğü düşük, yanlış zeminlerde kaybolan veya okunamayan standart resim dosyası formatındaki amatör logolar.',
    noscanda: 'Vektörel bazda, farklı renk zeminlerine göre alternatif versiyonları (negatif/pozitif) çizilmiş, minimum boyut kuralları tanımlı akıllı logolar.',
    business: 'Markanın her platformda (web sitesi, ambalaj, bina cephesi) net, okunaklı ve kusursuz görünmesini sağlar.'
  },
  {
    param: 'Renk Doğruluğu',
    traditional: 'Kartvizitte sarı, faturada yeşilimsi, tabelada turuncu görünen hatalı renk tonları ve cihaz uyumsuzlukları.',
    noscanda: 'Pantone (PMS) kodlarıyla uluslararası standartlarda kalibre edilmiş, dijital (RGB/HEX) ve baskı (CMYK) kodları net renk paleti.',
    business: 'Farklı matbaalarda yapılan üretimlerde dahi kurumsal renklerin hiçbir zaman sapmamasını ve marka kimliğini korumasını garantiler.'
  },
  {
    param: 'Tipografik Düzen',
    traditional: 'Sözleşmelerde Arial, sunumlarda Comic Sans, web sitesinde Times New Roman gibi dağınık yazı tipi kullanımları.',
    noscanda: 'Başlıklar, gövde metinleri ve resmi dökümanlar için hiyerarşik kuralları ve punto ölçüleri belirlenmiş lisanslı kurumsal yazı tipleri.',
    business: 'Okunabilirliği artırır, kurumsal dökümanların tamamında profesyonel ve kurallı bir okuma ritmi oluşturur.'
  },
  {
    param: 'Ambalaj Kalitesi',
    traditional: 'Standart hazır kutular üzerine yapıştırılmış kalitesiz etiketler, dayanıksız malzemeler ve amatör duruş.',
    noscanda: 'Ürünün formuna özel tasarlanmış, lüks karton ve cam materyallerle desteklenmiş, kabartma ve altın yaldız detaylı premium kutular.',
    business: 'Ürünün raf değerini ve algılanan fiyat kalitesini yükseltir, lüks tüketim pazarında doğrudan tercih sebebi olmasını sağlar.'
  },
  {
    param: 'Dijital Evrak Nizami',
    traditional: 'Çalışanların kendi tasarladığı, uyumsuz renklerdeki e-posta imzaları ve farklı slayt tasarımları.',
    noscanda: 'Merkezi olarak hazırlanan HTML e-posta imzaları, şablon Keynote/PowerPoint slaytları ve standart dijital antetli kağıtlar.',
    business: 'Tüm çalışanların dış dünya ile kurduğu iletişimde tek bir kurumsal ağzı ve profesyonel standardı yansıtmasını sağlar.'
  },
  {
    param: 'Matbaa Koordinasyonu',
    traditional: 'Dosyaların matbaaya gönderilip sonucun şansa bırakılması. Kağıt kalitesizliği veya hatalı kesimler yüzünden çöpe giden bütçeler.',
    noscanda: 'Baskı teknik özelliklerini (kağıt cinsi, gramaj, kabartma lak, yaldız, bıçak izi) matbaayla doğrudan koordine eden profesyonel denetim.',
    business: 'Hatalı basım risklerini ve ek maliyetleri sıfırlar, tasarlanan kalitenin fiziksel dünyaya kayıpsız aktarılmasını güvenceye alır.'
  },
  {
    param: 'Kurumsal Yönlendirme',
    traditional: 'Ofis ve showroomlarda hazır satın alınmış plastik kapı tabelaları ve dağınık yön tabelaları.',
    noscanda: 'Kurumsal görsel dile uygun olarak tasarlanmış iç mekan mimari yönlendirmeleri, dış cephe totemleri ve paslanmaz çelik tabela sistemleri.',
    business: 'Ofis ve bayilerinize gelen müşterilere profesyonel ve güven veren bir kurumsal atmosfer yaşatır.'
  },
  {
    param: 'Sosyal Medya Estetiği',
    traditional: 'Rastgele renklerde, farklı fontlarda hazırlanmış görsel paylaşımlar ve nizamsız sosyal medya profilleri.',
    noscanda: 'Görsel ızgara (grid) kuralları, tipografik kalıpları ve kapak şablonları önceden hazırlanmış düzenli sosyal medya kitleri.',
    business: 'Sosyal ağlardaki kurumsal sayfa görünümünü premium yayımcılık seviyesine taşır, marka etkileşim kalitesini artırır.'
  },
  {
    param: 'Yatırım Değeri',
    traditional: 'Kısa vadeli, ucuz ajans işleri ile sürekli değişen amblemler ve kalıcı olamayan marka görünümleri.',
    noscanda: 'Yıllarca eskimeden kullanılabilecek, tescil edilebilir ve holdingleşme aşamasında alt markaları da taşıyabilecek vizyoner görsel miras.',
    business: 'Şirketin marka değerini (brand equity) artırır, uzun vadede reklam ve imaj tazeleme bütçelerinde büyük tasarruf sağlar.'
  },
  {
    param: 'Sürdürülebilirlik',
    traditional: 'Çevreye zararlı plastik ambalajlar, geri dönüştürülemeyen kaplamalar ve kimyasal ağır mürekkepler.',
    noscanda: 'Ekolojik sertifikalı lifli kağıtlar, organik soya bazlı boyalar ve sürdürülebilir kutu içi sabitleme mimarileri.',
    business: 'Yeşil mutabakat ve çevre standartları (Eko-Lüks) uyumu sağlar, bilinçli üst düzey tüketicinin takdirini kazandırır.'
  },
  {
    param: 'Araç Filosu Görünümü',
    traditional: 'Saha araçlarında özensiz yapıştırılmış, kenarları kalkan reklam çıkartmaları ve nizamsız logolar.',
    noscanda: 'Brandbook standartlarında araç marka ve modeline özel ölçeklendirilmiş milimetrik araç kaplama şablonları.',
    business: 'Şehir genelinde hareket eden binlerce aracı, markanın prestijli birer gezici reklam mecrasına dönüştürür.'
  },
  {
    param: 'Fuar Stant Tasarımı',
    traditional: 'Standart alüminyum modüler fuar stantları, özensiz afişler ve dağınık ışık düzeni.',
    noscanda: 'Kurumsal mimari hatlarla uyumlu, özel ahşap ve ışık mühendisliği ile donatılmış deneyim stantları.',
    business: 'Uluslararası arenalarda rakiplerinizin arasından sıyrılarak en çok ziyaret edilen prestij merkezi olmanızı sağlar.'
  },
  {
    param: 'VIP Hediye Konsepti',
    traditional: 'Standart logolu ucuz plastik dolma kalemler, kalitesiz ajandalar ve sıradan hediye paketleri.',
    noscanda: 'Özel deri döküman kılıfları, kokulandırılmış hediye kutuları ve tasarım ödüllü masaüstü aksesuarları.',
    business: 'VIP iş ortaklarınızın masalarında yıllarca gururla sergileyeceği, dostluğu pekiştiren marka hatırlatıcıları yaratır.'
  },
  {
    param: 'Resmi Döküman Disiplini',
    traditional: 'Teklif ve fatura dökümanlarında kayan logolar, farklı renk çizgileri ve nizamsız adres alanları.',
    noscanda: 'HTML fatura şablonları, kurumsal dijital antetli şablonlar ve milimetrik olarak tasarlanmış diplomatik basılı evraklar.',
    business: 'Ticari işlemlerin resmiyetini ve güvenilirliğini en üst seviyeye taşır, evrak takibini ciddileştirir.'
  }
];

export function Structure() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[calc(72px+5rem)] pb-20 md:pb-28 border-b border-neutral-200/40">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05] blur-[150px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${ACCENT} 0%, transparent 70%)` }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <ScrollReveal direction="up" distance={40}>
            <div className="text-center max-w-4xl mx-auto">
              <span
                className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-6 py-2.5 rounded-full mb-6 font-semibold"
                style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
              >
                Nos Canda Vision • Kurumsal Tasarım Anayasası
              </span>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-[68px] font-bold leading-[1.08] tracking-tight mb-8">
                Görsel Kimliğinize <br />
                <span style={{ color: ACCENT }}>Prestij ve İtibar</span> Katın
              </h1>
              <div className="h-1.5 w-24 rounded-full mx-auto mb-10" style={{ background: ACCENT }} />
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto">
                Markanızın felsefesini, vizyonunu ve kurumsal asaletini fiziksel ve dijital dünyada tek bir dilde somutlaştırıyoruz. 
                Logo tasarımı, kabartmalı prestijli kartvizitler, antetli kağıtlar ve yaldızlı kutu ambalaj tasarımları ile markanızın 
                tüm temas noktalarını premium seviyede standartlaştırıyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Identity Definition (Kurumsal Kimlik Tanımı) */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-[950px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Kurumsal Kimlik Tanımı
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Görsel Anayasa ve Değer Algısı
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed font-light">
            <p>
              Kurumsal kimlik, bir işletmenin fiziki ve dijital dünyadaki karakterinin, ses tonunun ve profesyonel ciddiyetinin 
              görsel dille ifadesidir. Bu kimlik, sadece bir logo çizmekten çok daha derindir; markanın logosundan kartvizitine, 
              kullanılan kağıdın gramajından e-posta imzasına, ambalaj detaylarından tabelalara kadar uzanan uçtan uca bir görsel 
              anayasayı tanımlar. Şirketlerin büyüme hedeflerinde ve pazar payı kazanma süreçlerinde, tutarlı bir kurumsal kimliğe 
              sahip olmak, müşteriler üzerinde ilk saniyeden itibaren güvenli, elit ve sürdürülebilir bir marka algısı inşa etmenin 
              tek yoludur.
            </p>
            <p>
              Nos Canda Vision olarak, kurumsal kimlik süreçlerini yalnızca sanatsal bir tasarım faaliyeti olarak değil, şirketin 
              tarihsel birikimini ve gelecek hedeflerini yansıtan stratejik bir itibar yönetimi olarak ele alıyoruz. Doğru renk 
              kodlamaları (Pantone standartları), hiyerarşik yazı karakterleri (tipografi kuralları) ve kaliteli basılı evrak tasarımlar 
              ile markanızın her ortamda tam ve eksiksiz olarak temsil edilmesini sağlıyoruz. Görsel olarak kusursuz bir şekilde 
              bütünleşmiş bir kurumsal kimlik, hedef kitlenizle kurduğunuz duygusal bağı kuvvetlendirirken markanızın değerini (brand equity) 
              kalıcı hale getirir.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Vizyon & Misyon) */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200/50">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Vision card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-10 border border-neutral-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold mb-6 inline-block">
                  Vizyonumuz
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-neutral-900 mb-6">
                  Küresel Olfaktif Liderlik ve Görsel Zarafet
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-6">
                  Nos Canda Vision olarak vizyonumuz; koku ve ortam tasarımı sektöründe geliştirdiğimiz lüks standartları, 
                  dünya çapında kabul gören ve saygı duyulan estetik bir anayasaya dönüştürmektir. Sadece ürün satışı yapan 
                  bir yapı olmanın ötesine geçerek; sanatı, bilimi ve kurumsal zarafeti birleştiren küresel bir olfaktif 
                  ve görsel otorite konumuna yükselmeyi hedefliyoruz.
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                  Önümüzdeki on yıllık süreçte, şirketimizin yenilikçi çözümlerini ve premium ürün standartlarını global 
                  lüks pazarlarına ihraç ederken, markamızın kurumsal kimlik asaletini her coğrafyada aynı kararlılıkla korumayı 
                  ve sürdürülebilir yeşil kozmetik yaklaşımlarımızla sektöre öncülük etmeyi amaçlıyoruz.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span>Hedef: 2035 Küresel Vizyon</span>
                <span className="font-bold text-amber-600">Nos Canda Vision</span>
              </div>
            </div>

            {/* Mission card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-10 border border-neutral-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold mb-6 inline-block">
                  Misyonumuz
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-neutral-900 mb-6">
                  Değer Odaklı Standartlar ve Sosyal Katkı
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-6">
                  Misyonumuz; müşterilerimizin yaşam alanlarına ve kurumsal mekanlarına yüksek kaliteli, IFRA uyumlu, 
                  doğal ve özgün koku deneyimleri kazandırırken, tüm bu süreçleri mutlak şeffaflık, çevresel hassasiyet 
                  ve toplumsal fayda üzerine kurgulamaktır. Ürünlerimizin her bir aşamasında dürüst formülasyon ve yüksek 
                  hammadde kalitesi ilkelerinden asla taviz vermiyoruz.
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                  Aynı zamanda, kâr amacı gütmeyen sosyal oluşumlarımız, burs programlarımız ve kadın girişimci destek 
                  hibelerimizle elde ettiğimiz ticari başarıyı toplumsal kalkınmaya dönüştürüyoruz. Nos Canda One çatısı 
                  altında her insanın hayatına ve hayallerine dokunmayı kurumsal varlık sebebimiz kabul ediyoruz.
                </p>
              </div>
              <div className="pt-6 mt-8 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span>İlke: Dürüstlük & Katkı</span>
                <span className="font-bold text-amber-600">Nos Canda One</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Guidelines Sections (NEW) */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-[950px] mx-auto px-6 space-y-16">
          
          {/* Section 1: Logo ve Geometri İlkeleri */}
          <div className="space-y-6">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
              Tasarım Mühendisliği
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-neutral-900">
              Kurumsal Logo ve Geometri İlkeleri (Altın Oran ve Grid)
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed font-light space-y-4">
              <p>
                Lüks bir markanın logosu tesadüfen çizilmez. Nos Canda tasarım standartlarında, logoların ve amblemlerin 
                her biri, Rönesans sanatçılarının ve antik mimarların kullandığı altın oran (phi = 1.618) kurallarına göre 
                şekillendirilir. Amblemin eğrileri, logonun harf kalınlıkları ve beyaz boşlukların birbirine oranı, insan 
                gözünde doğal bir uyum ve görsel zarafet hissi uyandıracak matematiksel bir kesinlikle kurgulanır.
              </p>
              <p>
                Logonun diğer görsel ögelerle yan yana geldiğinde ezilmemesi ve kendi saygınlığını koruması için "koruma alanı" 
                (clear space) sınırları belirlenir. Bu sınırlar, logo yüksekliğinin belirli bir yüzdesine göre otomatik olarak 
                hesaplanır ve hiçbir kurumsal materyalde bu sınırların içine metin ya da ikincil bir grafik yerleştirilemez. 
                Grid (ızgara) sistemi ise logonun dijital ekran piksellerine ve basılı yüzeylerdeki milimetrik kesim çizgilerine 
                kusursuz uyum sağlamasını garanti eder.
              </p>
            </div>
          </div>

          {/* Section 2: Renk Psikolojisi ve Algı Yönetimi */}
          <div className="space-y-6">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
              Algı Yönetimi
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-neutral-900">
              Renk Psikolojisi ve Kurumsal Renk Standartları
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed font-light space-y-4">
              <p>
                Renkler, zihnimizde doğrudan duygusal ve kimyasal tepkimeler başlatan en güçlü iletişim araçlarıdır. Kurumsal 
                renk paletimizin merkezinde yer alan sıcak amber sarısı (#F59E0B), köklü bir zarafet, yüksek hammadde kalitesi 
                ve güneşin sıcaklığını (olfaktif sıcaklık) simgeler. Bu sarı tonunu destekleyen koyu antrasit ve warm ivory 
                (sıcak fildişi) tonları ise, markaya asalet, sadelik ve lüks bir yayımcılık ciddiyeti kazandırır.
              </p>
              <p>
                Renklerin basılı dünyadaki (kartvizit, katalog, hediye kutusu) tutarlılığını sağlamak amacıyla Pantone Formula Guide 
                standartları kullanılır. CMYK matbaa basımlarında veya web sitelerindeki dijital RGB ekran gösterimlerinde, bu renklerin 
                tam kod değerleri brandbook içinde belirtilir. Renklerin sapmasız şekilde her mecrada birebir aynı tonda yansıması, 
                kurumunuzun kurumsal disiplinini ve pazar itibarını koruyan en kritik teknik unsurdur.
              </p>
            </div>
          </div>

          {/* Section 3: Tasarım Kılavuzu (Brandbook) Kuralları */}
          <div className="space-y-6">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
              Marka Kuralları
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-neutral-900">
              Brandbook (Marka Kimlik Kılavuzu) Standartları
            </h2>
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed font-light space-y-4">
              <p>
                Bir şirketin kurumsal kimliği, sürekli değişen tasarım trendlerine veya anlık ajans kararlarına göre bozulamaz. 
                Brandbook (Marka Kimlik Kılavuzu), kurumsal görsel dilin gelecekteki koruyucusudur. Hazırladığımız 100+ sayfalık 
                kılavuzda; logonun dikey-yatay alternatifli kullanımları, minimum okunabilirlik boyutları, hatalı kullanım 
                örnekleri (renk değiştirme, ezme, gölge ekleme vb.) açıkça kurallara bağlanır.
              </p>
              <p>
                Ayrıca kurum çalışanlarının kullanacağı e-posta imzalarından şirket araçlarının giydirme standartlarına, fuar 
                stantlarının mimari yerleşimlerinden kurumsal hediye kutularının açılış ritüellerine kadar tüm detaylar bu kılavuz 
                sayesinde kayıt altına alınır. Brandbook, markanızın gelecekte çalışacağı tüm üçüncü taraf reklam ajansları, 
                matbaalar ve organizasyon firmaları için bağlayıcı bir görsel yasa metnidir.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Holdingization Strategy (Holdingleşme ve Stratejik Mimari) */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200/50">
        <div className="max-w-[950px] mx-auto px-6 space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Stratejik Büyüme
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Holdingleşme ve Marka Mimarisi Stratejisi
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed font-light">
            <p>
              İşletmeler ölçeklenip farklı sektörlere ve iş modellerine (B2B, B2C, B2G) adım attıklarında, holdingleşme 
              süreci kaçınılmaz hale gelir. Ancak kontrolsüz büyüyen yapılarda, alt iştiraklerin bağımsız kimlikler edinmesi 
              ve ana markanın gücünden yararlanamaması ciddi bir operasyonel risk oluşturur. Nos Canda Tech ve Nos Canda One gibi 
              iştiraklerin tek bir şemsiye marka altında koordine edilmesi için "Destekli Marka Mimarisi" (Endorsed Brand Architecture) 
              modelini uyguluyoruz. Bu modelde her alt iştirak kendi sektörel uzmanlığını sergilerken, görsel ve felsefi olarak ana 
              holdinge ve onun temsil ettiği kurumsal prestije doğrudan referansta bulunur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/40">
                <h4 className="font-cinzel text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3" style={{ color: ACCENT }}>
                  Dikey Entegrasyon & Sektörel Esneklik
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Alt markaların her biri kendi dikey pazarında (teknoloji, lojistik, sosyal katkı) operasyonel olarak esnektir 
                  ancak kurumsal kimlik standartları açısından holding anayasasına sıkı sıkıya bağlıdır.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/40">
                <h4 className="font-cinzel text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3" style={{ color: ACCENT }}>
                  Grup İçi Sinerji & Paylaşılan Hizmetler
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Tüm grup şirketleri; ortak bir insan kaynakları, kurumsal iletişim, görsel tasarım ve bulut altyapısı 
                  altyapısını kullanarak operasyonel maliyetleri düşürür ve marka sinerjisini maksimize eder.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/40">
                <h4 className="font-cinzel text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3" style={{ color: ACCENT }}>
                  Finansal Güvenilirlik & IPO Altyapısı
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Yatırımcılar ve denetim kuruluşları nezdinde tek sesli ve nizami bir kurumsal yapı sunmak, holdingin finansal 
                  kredi notunu yükseltirken gelecekteki halka arz (IPO) ve yatırım süreçlerini kolaylaştırır.
                </p>
              </div>
            </div>

            <p className="pt-4">
              Bu stratejinin görsel yansıması olarak, tüm grup markalarımızda aynı tipografi standartlarını, benzer lüks renk 
              tonlarını ve logolarda ortak geometrik oranları (altın oran) kullanıyoruz. Böylece bir iştirakimizin kazandığı başarı 
              ve pazar saygınlığı, doğrudan diğer iştiraklerin de itibarını besleyerek holdingin toplam marka değerini (brand equity) 
              güçlendirir. Şirket birleşmeleri, yeni yatırımlar ve halka arz gibi stratejik süreçlerde, bu bütüncül görsel ve yönetimsel 
              anayasa, yatırımcılara ve paydaşlara kurumsal disiplini en net şekilde gösteren en güçlü enstrümandır.
            </p>
          </div>
        </div>
      </section>

      {/* Identity Components Section */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Evrak Bileşenleri
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-4 mb-4">
                Kurumsal Kimlik Evrak Seti
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Markanızın iş dünyasındaki prestijini yansıtan ve her temas noktasında 
                bütünlük sağlayan temel görsel bileşenler.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <div className="rounded-3xl border border-neutral-200/50 bg-neutral-50 p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {IDENTITY_COMPONENTS.map((item, idx) => (
                  <div key={item.name} className="flex flex-col p-6 rounded-2xl bg-white border border-neutral-200/40 hover:border-amber-300 transition-all duration-300">
                    <span className="text-[0.65rem] font-gothic tracking-wider text-neutral-400 mb-2">BİLEŞEN 0{idx + 1}</span>
                    <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2" style={{ color: ACCENT }}>
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid (20 Services) */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Tasarım Alanlarımız
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Kurumsal Kimlik ve Tasarım Hizmetlerimizin Detayları
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Logonuzun ilk çizgisinden, ambalajınızın kağıt kalitesine kadar markanızın tüm fiziksel ve 
                dijital yansımalarını koordine eden 20 uzmanlık alanımız.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.title} direction="up" distance={40} delay={idx * 0.03}>
                <div className="rounded-3xl bg-white border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-500 p-8 flex flex-col justify-between group hover:border-amber-300">
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)] mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light mb-4">
                      {service.description}
                    </p>
                    <p className="font-body text-xs text-neutral-500 leading-relaxed font-light">
                      {service.details}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-[0.65rem] font-bold text-neutral-400">
                    <span>HİZMET KODU: CS-0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    <span className="text-amber-600">AKTİF</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Kurumsal Karşılaştırma
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Kimlik Yönetimi ve Tasarım Karşılaştırma Matrisi
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Uyumsuz, kontrolsüz tasarımlar ile profesyonel kurumsal kimlik yönetimi 
                arasındaki vizyonel ve operasyonel farklar.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <div className="overflow-x-auto rounded-3xl border border-neutral-200/50 bg-white shadow-md">
              <table className="w-full border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50/80">
                    <th className="font-cinzel p-6 font-bold text-neutral-900 w-[20%]">Tasarım Kriteri</th>
                    <th className="font-body p-6 font-medium text-neutral-500 w-[25%]">Standart Yaklaşım</th>
                    <th className="font-body p-6 font-bold text-amber-700 w-[25%]" style={{ color: ACCENT }}>Nos Canda Standartları</th>
                    <th className="font-body p-6 font-bold text-neutral-900 w-[30%]">Kurumsal İtibar Etkisi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/60">
                  {MATRIX_ROWS.map((row) => (
                    <tr key={row.param} className="hover:bg-neutral-50/40 transition-colors duration-250">
                      <td className="font-cinzel p-6 font-bold text-neutral-955 align-top">{row.param}</td>
                      <td className="font-body p-6 text-neutral-600 leading-relaxed font-light align-top">{row.traditional}</td>
                      <td className="font-body p-6 text-neutral-900 leading-relaxed font-medium align-top bg-amber-50/5" style={{ color: ACCENT }}>{row.noscanda}</td>
                      <td className="font-body p-6 text-neutral-955 leading-relaxed font-medium align-top bg-amber-50/10">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Expanded FAQ Section (35 Items) */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200/50">
        <div className="max-w-[950px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Kurumsal Kimlik ve Yönetim Hakkında
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Yöneticilerimizin ve marka yöneticilerimizin en çok merak ettiği 
                tasarım, matbaa, holding marka mimarisi ve bütçe süreçleri.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={faq.q} direction="up" distance={20} delay={idx * 0.02}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-955 mb-3 flex items-start gap-3">
                    <span className="text-amber-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-amber-500/20">
                    {faq.a}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-neutral-900 text-white relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[150px] pointer-events-none"
          style={{ background: ACCENT }}
        />
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 space-y-8">
          <ScrollReveal direction="up" distance={30}>
            <span
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-2 font-semibold"
              style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.15)' }}
            >
              Kurumsal Kimliğinizi Tasarlayalım
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold leading-tight">
              Markanızı <span className="text-amber-400">Premium</span> <br />
              Seviyeye Taşımaya Hazır mısınız?
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light max-w-xl mx-auto">
              Şirketinizin vizyon, misyon ve holdingleşme vizyonunu yansıtan 
              nizami bir kurumsal tasarım anayasası oluşturmak için bizimle iletişime geçin.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-amber-500/10"
              >
                Tasarım Projesi Başlatın
              </Link>
              <Link
                href="/nos-canda-vision"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300"
              >
                Tüm Vizyon Çözümlerimiz
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
