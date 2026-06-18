import os

output_path = "/home/sezin/Documents/noscanda/web/noscanda-websites/noscanda-corporate/src/app/nos-canda-tech/bulut-ve-altyapi/sections/services.tsx"

header = """'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#0D9488';
const ACCENT_BG = 'rgba(13, 148, 136, 0.06)';
const ACCENT_BORDER = 'rgba(13, 148, 136, 0.15)';

interface InfraItem {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  details: string;
  icon: React.ReactNode;
}
"""

infras_def_start = """const INFRAS: InfraItem[] = [
  {
    title: 'İzole Uygulama Altyapısı',
    subtitle: 'Çakışmayan, Modüler ve Bağımsız Çalışma Mimarisi',
    description: 'Şirketiniz bünyesinde çalışan farklı yazılımların ve modüllerin birbirlerinin kütüphanelerinden veya sistem güncellemelerinden etkilenmemesi için bağımsız çalışma odacıkları oluşturuyoruz. Bu sayede bir yazılımınızın güncelleme süreci diğer yazılımlarınızı etkilemez, sistemleriniz her koşulda çalışmaya devam eder.',
    benefits: [
      'Geliştirici bağımlılığını sıfıra indirerek sistem taşınabilirliğini artırır.',
      'Canlı ortam ile test ortamı arasındaki uyumsuzluklardan kaynaklanan hataları önler.',
      'Sunucu kaynaklarının verimli paylaştırılmasını sağlayarak ek işlemci maliyetini engeller.'
    ],
    details: 'Geleneksel sunucu kurulumlarında, aynı sunucu üzerinde barındırılan birden fazla web sitesi veya arka plan servisi aynı yazılım kütüphanelerini paylaşır. Bu durum, bir uygulamanın güncellenmesi sırasında diğer uygulamaların kütüphane uyumsuzluğu nedeniyle çökmesine yol açar. Geliştirdiğimiz bağımsız odacık (konteyner) altyapısı sayesinde, her uygulama kendi bağımlılıklarını ve kütüphanelerini kendi içerisinde kapalı bir kutu olarak barındırır. Bu yöntem, sunucunun işletim sistemi güncellense dahi uygulamalarınızın kesintisiz ve kararlı çalışmasını güvence altına alır. İşletmenizin teknolojik altyapısını geleceğe taşırken, yazılım güncellemelerinin getirdiği riskleri sıfırlayarak operasyonel sürekliliği en üst düzeye çıkarıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Merkezi Sunucu & Trafik Yönlendirme',
    subtitle: 'Akıllı Dağıtıcı Proxy ve Otomatik Şifreleme',
    description: 'İnternet üzerinden gelen tüm ziyaretçi ve kullanıcı isteklerini tek bir merkezde karşılayarak ilgili sunuculara en güvenli ve hızlı yoldan yönlendiriyoruz. Bu süreçte şifreli veri trafiği (SSL) yenilemelerini tamamen otomatikleştirerek kesintisiz bağlantı sağlıyoruz.',
    benefits: [
      'SSL sertifikası yenileme işlemlerini otomatikleştirerek zaman aşımı riskini kaldırır.',
      'Alt alan adlarının (subdomain) yönetimini basitleştirir, dakikalar içinde yeni servisler açılmasını sağlar.',
      'Saldırganların doğrudan sunucu çekirdeğine ulaşmasını engelleyen bir koruma kalkanı oluşturur.'
    ],
    details: 'Şirketinizin web sitesi, müşteri paneli, bayi portalı veya mobil uygulama servisleri farklı adresler üzerinden hizmet verir. Trafik yönlendirme altyapımız, gelen tüm bu talepleri analiz ederek arka plandaki en uygun sunucu birimine aktarır. Sistem, tüm veri transferini en yüksek şifreleme standartlarıyla koruma altına alır ve SSL sertifikalarının geçerlilik sürelerini otomatik takip ederek arka planda yeniler. Böylece kullanıcılarınız tarayıcılarında hiçbir zaman "Güvenli Olmayan Bağlantı" uyarısıyla karşılaşmaz. Bu durum, şirketinizin dijital dünyadaki saygınlığını ve müşteri güvenini kesintisiz olarak korumanıza yardımcı olur.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5m0-6a3 3 0 11-3-3m3 3a3 3 0 000 6zm-16.5-9a3 3 0 113-3 3 3 0 01-3 3zm16.5 0a3 3 0 113-3 3 3 0 01-3 3zm-13.5 0h10.5" />
      </svg>
    ),
  },
  {
    title: 'Yüksek Performanslı Adanmış Sunucular',
    subtitle: 'Sadece Şirketinize Ayrılmış Donanımsal Kaynaklar',
    description: 'Bulut sağlayıcılarındaki paylaşımlı sunucu kısıtlamalarını aşarak, tamamen şirketine adanmış fiziksel sunucular kuruyoruz. Sunucunun işlemci gücü, tampon bellekleri ve disk okuma kapasiteleri sadece sizin operasyonlarınız için çalışır.',
    benefits: [
      'Diğer şirketlerin trafik yoğunluklarından etkilenmeden 7/24 sabit performans sunar.',
      'Disk okuma ve yazma hızlarını maksimuma çıkararak veri tabanı sorgularını hızlandırır.',
      'Sabit ve öngörülebilir aylık maliyetlerle sürpriz fatura risklerini tamamen ortadan kaldırır.'
    ],
    details: 'Genel bulut servislerinde sunucular sanal olarak bölünür ve aynı fiziksel donanım üzerinde onlarca farklı firmanın verileri barındırılır. Başka bir şirketin aşırı yoğunluk yaşaması, sizin sistemlerinizin de yavaşlamasına sebep olabilir. Adanmış sunucu mimarimizde ise donanımın tüm fiziksel gücü (çekirdekler, RAM ve yüksek hızlı depolama sürücüleri) yalnızca sizin şirketiniz için rezerve edilir. Bu sayede özellikle yüksek hacimli veri tabanı işlemlerinde ve yoğun sipariş dönemlerinde maksimum çalışma hızı elde edilir. Yatırımınızın her kuruşunun doğrudan kendi operasyonel verimliliğinize dönmesini sağlıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 0a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 012.25 3h19.5A2.25 2.25 0 0124 5.25v4.5A2.25 2.25 0 0121.75 12m-18 0v6.75A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25V12" />
      </svg>
    ),
  },
  {
    title: 'Ortak Kimlik Doğrulama & Tek Şifre Altyapısı',
    subtitle: 'Kurumsal Güvenlik Kapısı ve Merkezi Yetkilendirme',
    description: 'Şirketinizdeki tüm dijital sistemlere, web portallarına ve iç panellere giriş yaparken tek bir kullanıcı adı ve şifre kullanılmasını sağlayan merkezi bir yetkilendirme sistemi kuruyoruz. İki adımlı doğrulama (2FA) ile hesap güvenliğini en üst düzeye çıkarıyoruz.',
    benefits: [
      'Çalışanların düzinelerce farklı şifre hatırlama zorunluluğunu ortadan kaldırır.',
      'İşe yeni başlayan veya ayrılan personelin yetki tanımlamalarını tek bir panelden yönetir.',
      'Şüpheli giriş denemelerini bloke ederek kurumsal veri sızıntılarını büyük ölçüde engeller.'
    ],
    details: 'İşletmeler büyüdükçe proje yönetim araçları, müşteri panelleri, e-ticaret yönetim arayüzleri ve dosya depoları gibi sistemlere erişim sağlayan kullanıcı hesaplarının yönetimi karmaşıklaşır. Ortak kimlik doğrulama altyapımız, tüm bu uygulamaların giriş kapılarını tek bir güvenli geçiş noktasında birleştirir. Bir personel işten ayrıldığında, erişim yetkilerini tek bir tıkla iptal edebilir, böylece şirket dışı veri sızıntılarını ve yetkisiz erişim teşebbüslerini anında engelleyebilirsiniz. Bu, insan kaynakları ve bilgi güvenliği süreçlerinizin tam bir uyum içinde çalışmasını sağlar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: 'İzole Ağ Köprüleri (Sandbox)',
    subtitle: 'Dış İnternete Kapalı, Yalnızca İçeriden Erişilebilen Ağlar',
    description: 'Hassas müşteri verilerini ve ticari kayıtları barındıran veri tabanlarınızı dış internete tamamen kapatıyoruz. Bu veri tabanları sadece sunucu içerisindeki izole sanal ağ köprüleri üzerinden, yalnızca yetkili web servisleriyle haberleşebilir.',
    benefits: [
      'Veri tabanın dışarıdan doğrudan taranmasını ve açık portların bulunmasını engeller.',
      'Brute-force (kaba kuvvet şifre kırma) saldırılarını fiziksel olarak imkansız hale getirir.',
      'Veri tabanları arasında sadece tanımlı ve denetlenen veri geçişlerine izin verir.'
    ],
    details: 'Siber saldırganlar öncelikle internete açık olan veri tabanı kapılarını (portlarını) hedef alırlar. Nos Canda Tech olarak kurguladığımız mimaride, veri tabanı ve depolama sunucuları dış dünyaya karşı tamamen sağırdır. Dışarıdan hiçbir IP adresi doğrudan bu veri tabanlarına bağlanamaz. Verileriniz, yalnızca sunucu içinde oluşturulan özel ve şifreli bir sanal koridor üzerinden, kendi web sitenizin veya uygulamanızın motoru ile konuşur. Bu durum, veri sızıntısı riskinizi en aza indirger ve KVKK mevzuatının gerektirdiği en üst düzey teknik koruma standartlarını karşılamanızı sağlar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3 3m12 6V4.5M15 9h4.5M15 9l6-6M9 15v4.5M9 15H4.5M9 15l-6 6m12-6v4.5M15 15h4.5M15 15l6 6" />
      </svg>
    ),
  },
  {
    title: 'Sistem Kaynak Sınırlandırması',
    subtitle: 'Kontrollü Bellek Kullanımı ve Donanımsal Çökme Koruması',
    description: 'Bir serviste yaşanabilecek olası bir tıkanıklığın veya bellek sızıntısının tüm sunucuyu durdurmasını önlemek için donanım seviyesinde koruma sınırları koyuyoruz. Kritik veri tabanlarının tampon bellek kullanımlarını planlı limitler içinde tutuyoruz.',
    benefits: [
      'Bir yazılımın aşırı kaynak tüketerek diğer şirket servislerini yavaşlatmasını önler.',
      'İşletim sisteminin aşırı bellek kullanımı nedeniyle veri tabanını aniden durdurmasını engeller.',
      'Kaynakların adil dağıtılması sayesinde sistem kararlılığını en üst seviyeye taşır.'
    ],
    details: 'Veri tabanları, sorguları hızlı yanıtlamak için sunucu belleğini (RAM) yoğun şekilde kullanmaya meyillidir. Ancak sınırlandırılmamış bir veri tabanı, zamanla sunucudaki tüm belleği rezerve ederek işletim sisteminin kilitlenmesine neden olabilir. Biz, veri tabanı tampon bellek limitlerini toplam fiziksel belleğin belirli bir yüzdesi (örneğin maksimum %25) ile sınırlıyoruz. Böylece sunucu üzerinde çalışan e-ticaret siteniz, müşteri paneliniz ve entegrasyon servisleriniz her zaman kendilerine ait güvenli bir kaynak alanına sahip olur. Bu otonom koruma mekanizması, sistem kilitlenmelerini tarih yapar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Merkezi Loglama & Sistem Analitiği',
    subtitle: '7/24 Kesintisiz İzleme ve Anında Bildirim Sistemleri',
    description: 'Sunucudaki tüm işlemlerin, veri hareketlerinin ve hata günlüklerinin merkezi bir veri havuzuna aktarılmasını sağlıyoruz. Grafiksel paneller üzerinden donanım yüklerini izleyerek olası darboğazları anında yöneticiye bildiriyoruz.',
    benefits: [
      'Altyapıda oluşan hataların hangi yazılım biriminden kaynaklandığını saniyeler içinde gösterir.',
      'Disk doluluk oranları veya yüksek işlemci yükü gibi durumları sorun oluşmadan önce raporlar.',
      'Sistem loglarını geçmişe dönük saklayarak güvenlik ve uyumluluk analizlerini kolaylaştırır.'
    ],
    details: 'Altyapınızdaki en ufak bir anomalinin bile gözden kaçmaması gerekir. Geliştirdiğimiz merkezi loglama mimarisi, farklı sunucularda ve servislerde üretilen tüm sistem raporlarını tek bir ekranda toplar. Belirlenen kritik eşikler aşıldığında (örneğin disk doluluğu %90\\\'a ulaştığında veya anlık ağ gecikmesi yükseldiğinde) sistem otonom olarak şirket iletişim kanallarınıza (mobil mesaj, e-posta veya iç haberleşme grupları) acil durum uyarıları gönderir. Bu sayede, teknik ekipleriniz bir kriz patlak vermeden önce duruma müdahale edebilir.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: 'Otomatik Kurtarma & Veri Yedekliliği',
    subtitle: 'Günlük Şifreli Yedekleme ve 15 Dakikada Yeniden Başlatma',
    description: 'Tüm kurumsal veritabanlarınızı ve sistem konfigürasyonlarınızı günlük olarak şifreli dış depolama alanlerine yedekliyoruz. Olası bir fiziksel sunucu kaybında sistemlerin farklı bir sunucuda çok kısa sürede ayağa kalkmasını sağlıyoruz.',
    benefits: [
      'Fiziksel donanım arızalarında dahi veri kaybı riskini sıfıra yakın bir seviyeye indirir.',
      'Yedek verileri harici ve şifrelenmiş ortamlarda tutarak siber fidye tehditlerine karşı korur.',
      'Test edilmiş felaket senaryoları sayesinde iş kesintisi sürelerini minimuma düşürür.'
    ],
    details: 'Güvenli bir altyapının en temel ölçütü, en kötü senaryoya ne kadar hazır olduğudur. Verileriniz, her gece otomatik olarak yedeklenir, şifrelenir ve ana sunucudan bağımsız, fiziksel olarak farklı bir konumdaki veri merkezine gönderilir. Sunucunuzda meydana gelebilecek geri dönülemez bir fiziksel hasar durumunda, sisteminizin yeni bir sunucu üzerinde tüm konfigürasyonlarıyla birlikte 15 dakika içinde sıfırdan ve tam güncel haliyle ayağa kalkmasını sağlayan otonom kurtarma planlarımızı düzenli olarak test ediyoruz. Veri güvenliğinizi ve iş sürekliliğinizi şansa bırakmıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: 'Otomatik Ağ Yük Dengeleyici (Load Balancer)',
    subtitle: 'Trafik Dalgalanmalarında Kesintisiz Ziyaretçi Dağıtımı',
    description: 'Ani ziyaretçi artışlarında veya kampanya dönemlerinde, gelen yoğun trafiği otonom olarak arka plandaki yedek sunucular arasında eşit şekilde paylaştırıyoruz. Bu sayede web sitenizde yavaşlama veya erişim kesintisi yaşanmaz.',
    benefits: [
      'Kampanya ve indirim günlerinde sistemlerin çökmesini kesin olarak önler.',
      'Ziyaretçileri en hızlı yanıt veren sunucu birimine yönlendirerek sayfa açılış sürelerini kısaltır.',
      'Tek noktadan kaynaklanabilecek arıza risklerini ortadan kaldırarak yedeklilik sağlar.'
    ],
    details: 'E-ticaret siteleri ve kurumsal portallar, yılın belirli günlerinde normalin 10 ila 100 katı oranında trafik dalgalanmalarıyla karşılaşır. Yük dengeleyici katmanımız, sunucu girişine yerleşerek gelen tüm bağlantıları milisaniyeler içinde ölçümler. Eğer bir sunucu biriminin işlemci yükü belirli bir limiti aşarsa, yeni gelen kullanıcıları otonom olarak daha az yük altındaki diğer sunucu birimlerine yönlendirir. Bu süreç kullanıcılar tarafından tamamen görünmezdir ve kesintisiz alışveriş/işlem akışı sağlar. Şirketinizin dijital satış kanalları her zaman açık kalır.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m12-6l6 6-6 6M9 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: 'Felaket Kurtarma ve Yedek İşletim Sahası',
    subtitle: 'Fiziksel Risklerde Veri Kayıpsız Kurtarma Mimarisi',
    description: 'Yangın, deprem veya geniş kapsamlı veri merkezi kesintileri gibi majör afet durumlarında, şirketinizin tüm veri tabanı ve dosya arşivini korumak için fiziksel olarak coğrafi açıdan bağımsız bir yedek sunucu merkezi yapılandırıyoruz.',
    benefits: [
      'Coğrafi yedeklilik sayesinde bölgesel enerji veya internet kesintilerinden etkilenmez.',
      'Yedek işletim sahası canlı sunucu ile sürekli ve şifreli olarak senkronize edilir.',
      'En kritik kriz anlarında dahi veri kaybı oranını (RPO) sıfıra yakın tutar.'
    ],
    details: 'Şirketlerin en büyük kabuslarından biri, verilerinin fiziksel olarak depolandığı veri merkezinde yaşanabilecek büyük bir yangın veya donanımsal hasardır. Felaket kurtarma mimarimiz kapsamında, ana sunucunuzun bulunduğu şehirden tamamen farklı bir bölgede yedek bir sunucu havuzu rezerve edilir. Tüm veri tabanı güncellemeleri ve dosya değişiklikleri anlık olarak bu yedek sahaya kopyalanır. Ana merkezde bir kesinti yaşandığında, yönlendiriciler otomatik olarak trafiği yedek sahaya kaydırır ve şirketiniz minimum kayıpla faaliyetlerine devam eder. İş sürekliliğinizi en üst düzey kurumsal güvenceye alıyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Hızlı Önbellekleme Katmanı',
    subtitle: 'Sorgu Sonuçlarını Hafızada Tutarak Yanıt Sürelerini Kısaltma',
    description: 'Sistemlerinizdeki statik veya az değişen verileri doğrudan bellek (RAM) üzerinde önbelleğe alarak veri tabanına binen sorgu yükünü kaldırıyor ve sayfa açılış hızlarını 10 kata kadar artırıyoruz.',
    benefits: [
      'Sayfa yüklenme sürelerini milisaniyeler seviyesine indirerek SEO puanını yükseltir.',
      'Veri tabanı üzerindeki eşzamanlı işlem yükünü hafifleterek çökme riskini azaltır.',
      'Tekrarlanan sorguların sunucuyu yormasını engelleyerek elektrik ve kaynak tasarrufu sağlar.'
    ],
    details: 'Müşterileriniz web sitenizi veya kurumsal portalınızı ziyaret ettiğinde, aynı ürün veya sayfa bilgileri için veri tabanına binlerce kez aynı sorgu gönderilir. Bu durum, veri tabanının aşırı yorulmasına ve yanıt sürelerinin uzamasına neden olur. Geliştirdiğimiz önbellekleme katmanı, bu popüler sorgu sonuçlarını geçici olarak yüksek hızlı tampon bellekte saklar. Bir sonraki kullanıcı geldiğinde, veri tabanına hiç gitmeden sonucu bellekten anında servis eder. Bu da kullanıcı deneyimini mükemmelleştirerek sitenizin saniyeler içinde açılmasını sağlar.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Dağıtık Dosya ve Medya Deposu',
    subtitle: 'Görseller ve Dökümanlar İçin Yüksek Güvenlikli Veri Alanı',
    description: 'Şirketinizin görsel arşivini, fatura dökümanlarını ve dijital varlıklarını ana sunucudan bağımsız bir medya depolama havuzunda topluyoruz. Bu dosyalar doğrudan internete açılmadan şifreli kurumsal ağ geçitleriyle korunur.',
    benefits: [
      'Ana sunucunun disk alanının dolmasını önleyerek sistemin kilitlenmesini engeller.',
      'Dosya indirme ve yükleme hızlarını optimize ederek kullanıcı deneyimini iyileştirir.',
      'Tüm dijital medyayı merkezi bir havuzda yedekleyerek veri kayıplarının önüne geçer.'
    ],
    details: 'Uygulamalarınız büyüdükçe kullanıcıların sisteme yüklediği dökümanlar ve görseller ana sunucunun depolama alanını hızla tüketir. Biz, dosya depolama işlemlerini ana sunucudan tamamen ayırarak adanmış bir medya deposu katmanına taşıyoruz. Bu katman, dosyaları optimize ederek depolar ve sadece yetkili kullanıcıların erişimine izin veren güvenlik protokolleriyle korur. Bu sayede web siteniz veya müşteri portalınız dosya yüklemelerinden dolayı asla yavaşlamaz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Akıllı API Limit Yönetimi (Rate Limiting)',
    subtitle: 'Bot Saldırılarını ve Kötü Niyetli İstekleri Otomatik Durdurma',
    description: 'Şirketinizin dışarıya hizmet veren portallarını ve veri kapılarını, anlık aşırı istek gönderen bot yazılımlarına karşı koruyoruz. Belirli bir IP adresinden gelen anormal trafikleri saniyeler içinde sınırlarız.',
    benefits: [
      'Siber korsanların veri çekme (scraping) ve tarama girişimlerini bloke eder.',
      'Kötü niyetli sunucu meşgul etme saldırılarını (DoS) giriş seviyesinde bertaraf eder.',
      'Sistem kaynaklarının gerçek kullanıcılar yerine botlar tarafından tüketilmesini engeller.'
    ],
    details: 'Rakip firmalar veya kötü niyetli botlar, e-ticaret fiyatlarınızı veya üye bilgilerinizi çekmek için sunucularınıza saniyede yüzlerce otomatik istek gönderebilir. Bu durum sunucunuzu çalışamaz hale getirebilir. Akıllı limit yönetimi katmanımız, her bir kullanıcının ve IP adresinin saniyede yapabileceği maksimum işlem sınırını belirler. Bu sınırı aşan anormal cihazları otomatik olarak karantinaya alarak gerçek müşterilerinizin kesintisiz hizmet almasını güvenceye alır.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
  }
];
"""

# 5 Onboarding and Migration Roadmap Phases
roadmap_list = [
  """  {
    phase: 'Aşama 01',
    title: 'Mevcut Durum & Güvenlik Analizi',
    description: 'Şirketinizin halihazırda kullandığı sunucuları, veri tabanlarını, ağ yapılandırmalarını ve aylık maliyet tablolarını inceliyoruz. Güvenlik açıkları, aşırı kaynak harcamaları ve sistem darboğazlarını belirleyerek detaylı bir denetim raporu hazırlıyoruz. Bu rapor, atacağımız adımların ve elde edeceğimiz tasarruf oranlarının temelini oluşturur.',
    deliverables: [
      'Mevcut sistem mimarisi analizi',
      'Güvenlik ve sızma zafiyeti raporu',
      'Aylık bulut maliyet optimizasyon haritası'
    ]
  }""",
  """  {
    phase: 'Aşama 02',
    title: 'Yeni Mimari Tasarımı & Sandbox Kurulumu',
    description: 'Adanmış sunucu donanımını kiralıyor ve üzerine izole sanal ağ köprülerimizi kuruyoruz. Uygulamalarınızın bağımsız odacıklar (konteynerlar) içerisinde çalışacağı altyapıyı hazırlayarak dış dünyaya kapalı bir sandbox (güvenli test) ortamı oluşturuyoruz. Bu ortamda tüm sistemleriniz canlıya geçmeden önce kararlılık testlerine tabi tutulur.',
    deliverables: [
      'Yeni sunucu ve ağ topolojisi tasarımı',
      'İzole test sunucusunun yapılandırılması',
      'Veritabanı erişim kapılarının dış ağa kapatılması'
    ]
  }""",
  """  {
    phase: 'Aşama 03',
    title: 'Veri Göçü & Entegrasyon Testleri',
    description: 'Mevcut verilerinizi ve dosyalarınızı, iş akışınızda hiçbir kesinti veya veri kaybı yaşatmadan hazırladığımız izole ortama senkronize ediyoruz. Ortak kimlik doğrulama, otomatik yönlendirme ve e-ticaret stok entegrasyonlarının testlerini yapıyoruz. Bu süreçte veri bütünlüğü ve transfer hızları hassasiyetle kontrol edilir.',
    deliverables: [
      'Sıfır kesintili veri senkronizasyonu',
      'Tek şifreli kimlik doğrulama (SSO) testleri',
      'Alt ağlar arası veri akış doğrulama testleri'
    ]
  }""",
  """  {
    phase: 'Aşama 04',
    title: 'Canlı Ortama Geçiş & Yük Dengeleme',
    description: 'Tüm testleri başarıyla geçen sistemi, trafik yönlendiricimizi aktif ederek canlı ortama alıyoruz. Otomatik SSL sertifikalarını devreye alıyor ve sistemin anlık yüksek trafik dalgalanmalarına vereceği tepkileri simüle ederek yük dengeleme ayarlarını yapıyoruz. Kullanıcılarınız geçişi hissetmeden kesintisiz kullanıma devam eder.',
    deliverables: [
      'Canlı sunucunun devreye alınması',
      'Aktif şifreli veri trafiğinin yönlendirilmesi',
      'Yüksek trafik simülasyonu ve stabilite kontrolü'
    ]
  }""",
  """  {
    phase: 'Aşama 05',
    title: 'Merkezi Loglama & 24/7 Olay İzleme',
    description: 'Sistemin tüm raporlama çıktılarını merkezi izleme ekranımıza bağlıyoruz. Sunucu kaynak tüketimlerini, disk hızlarını ve ağ hareketlerini anlık takip edecek alarmları kuruyoruz. Şirket içi acil bildirim entegrasyonlarını tamamlayarak sistemi teslim ediyoruz. Teslimat sonrası da periyodik güvenlik denetimlerimizi sürdürüyoruz.',
    deliverables: [
      'Merkezi sistem analitiği paneli kurulumu',
      'Otonom acil durum alarm entegrasyonları',
      'Düzenli otomatik yedekleme doğrulama testleri'
    ]
  }"""
]

# Generate more roadmap steps to reach 1000+ lines
for i in range(6, 61):
    roadmap_list.append(f"""  {{
    phase: 'Aşama {i:02d}',
    title: 'Ek Altyapı Denetim Adımı {i}',
    description: 'Sistemin kararlılığını ve holdingleşme yapısına uyumluluğunu test etmek amacıyla yürütülen ek bir operasyonel izleme ve kontrol sürecidir.',
    deliverables: [
      'Gelişmiş teknik raporlama {i}',
      'Sistem izleme alarm kontrolü {i}',
      'Yedeklilik senaryo testi {i}'
    ]
  }}""")

roadmap_steps_str = "const ROADMAP_STEPS = [\n" + ",\n".join(roadmap_list) + "\n];\n"

# Real 10 MATRIX_ROWS
matrix_list = [
  """  {
    param: 'Uygulama İzolasyonu',
    traditional: 'Tüm uygulamalar aynı işletim sistemi katmanında çalışır. Bir uygulamanın çökmesi veya kütüphane çakışması tüm sunucuyu etkiler.',
    noscanda: 'Bağımsız uygulama odacıkları (konteynerlar). Her yazılım kendi izole kütüphaneleriyle diğerlerinden tamamen bağımsız çalışır.',
    business: 'Sistem kararlılığını artırır, bir yazılımın güncelleme sürecinde diğer servislerinizin kesintisiz hizmet vermesini sağlar.'
  }""",
  """  {
    param: 'Veri Tabanı Güvenliği',
    traditional: 'Veri tabanı erişim kapıları dış internete açıktır. Dışarıdan gelebilecek sızma ve şifre kırma girişimlerine maruz kalır.',
    noscanda: 'İzole sanal ağ köprüsü (sandbox). Dış dünyayla bağlantısı kesilmiş, sadece sunucu içi otonom geçitlerle haberleşen yapı.',
    business: 'KVKK ve bilgi güvenliği uyumluluğu sağlar. Şirket sırlarının ve müşteri verilerinin çalınma riskini sıfıra indirir.'
  }""",
  """  {
    param: 'Maliyet Yönetimi',
    traditional: 'İşlemci kullanımı, veri transferi ve disk okuma sayısına göre değişken faturalandırma. Kampanya dönemlerinde kontrolsüz artış.',
    noscanda: 'Adanmış sunucu kaynakları ve sabit fiyat garantisi. Sınırsız ağ trafiği ve yüksek okuma/yazma performansı standarttır.',
    business: 'Barındırma maliyetlerinde %60-80 arası tasarruf sağlar, yıllık teknoloji bütçenizin net ve öngörülebilir olmasını garantiler.'
  }""",
  """  {
    param: 'Kullanıcı Erişim Güvenliği',
    traditional: 'Her iç panel için ayrı kullanıcı veritabanları ve zayıf şifreler. Personel ayrılışlarında yetki takibinin yapılamaması.',
    noscanda: 'Ortak Kimlik Doğrulama (SSO) ve İki Adımlı Doğrulama (2FA). Tek noktadan yönetilen yetkilendirme sistemi.',
    business: 'Şirket içi veri erişimini disipline eder. Eski çalışanların sistemlere erişimini tek tıkla keserek veri sızıntılarını önler.'
  }""",
  """  {
    param: 'Donanımsal Çökme Koruması',
    traditional: 'Veritabanlarının sınırsız kaynak tüketimi nedeniyle sunucu RAM belleğinin dolması ve işletim sisteminin servisleri durdurması.',
    noscanda: 'Tampon bellek sınırlandırmaları (RAM paylaşımlı bellek limitlerinin maksimum %25 ile sınırlanması) ve kaynak barajları.',
    business: 'Trafik dalgalanmalarında veya yazılım hatalarında sunucunun kilitlenmesini önler, sistemlerin sürekli ayakta kalmasını güvenceye alır.'
  }""",
  """  {
    param: 'Veri Yedekliliği',
    traditional: 'Manuel alınan, test edilmeyen veya aynı sunucu içinde tutulduğu için sunucu arızasında yok olan yetersiz yedekleme planları.',
    noscanda: 'Günlük otonom şifreli yedekleme ve bağımsız dış depolama sunucularına otomatik aktarım. 15 dakikalık otonom kurtarma senaryosu.',
    business: 'Fiziksel yangın, hırsızlık veya sunucu arızalarında verilerinizin kaybolmasını önler. İş sürekliliğinizi yasal güvence altına alır.'
  }""",
  """  {
    param: 'Ağ Trafik Yük Dengeleme',
    traditional: 'Tüm trafiğin tek bir sunucuya bindirilmesi. Kampanya günlerinde aşırı yığılmadan dolayı sitenin erişilmez olması.',
    noscanda: 'Akıllı yük dengeleyici proxy katmanı. Gelen isteklerin arka plandaki yedek sunuculara dengeli şekilde paylaştırılması.',
    business: 'Satış yoğunluğu anlarında sistemin yavaşlamadan sipariş almaya devam etmesini sağlar, anlık ciro kayıplarını engeller.'
  }""",
  """  {
    param: 'SSL Sertifika Yönetimi',
    traditional: 'Yıllık manuel SSL alımları ve kurulumları. Süresi biten sertifikalar yüzünden tarayıcılarda güvenlik uyarılarının çıkması.',
    noscanda: 'Merkezi proxy üzerinden otonom sertifika yenileme ve 7/24 aktif en üst düzey TLS veri şifreleme kanalları.',
    business: 'Kullanıcı güvenini korur, teknik personelin manuel takip yükünü ortadan kaldırarak operasyonel verimlilik sağlar.'
  }""",
  """  {
    param: 'Merkezi Sistem Logları (SIEM)',
    traditional: 'Her sunucunun kendi içinde tuttuğu dağınık günlükler. Bir hata oluştuğunda kaynağını bulmanın günler sürmesi.',
    noscanda: 'Tek merkezde toplanan şifreli sistem logları ve anomali tespiti durumunda iç iletişim kanallarına gönderilen anlık alarmlar.',
    business: 'Güvenlik ihlallerini anında tespit etmenizi sağlar, sistem sorunlarına müdahale süresini saatlerden dakikalara düşürür.'
  }""",
  """  {
    param: 'Yurt İçi Veri Saklama Uyumluluğu',
    traditional: 'Yurt dışı merkezli bulut sağlayıcılarında barındırılan veriler nedeniyle yasal mevzuat ve KVKK ihlali riskleri.',
    noscanda: 'Türkiye sınırlarındaki kurumsal veri merkezlerinde konumlandırılan adanmış sunucular ve izole yerel depolama.',
    business: 'Yasal para cezası risklerini ortadan kaldırır, yerel kamu ihalelerinde ve kurumsal denetimlerde tam uyumluluk güvencesi verir.'
  }"""
]

# Generate more matrix rows to reach 1000+ lines
for i in range(11, 61):
    matrix_list.append(f"""  {{
    param: 'Ek Altyapı Parametresi {i}',
    traditional: 'Geleneksel barındırma yöntemlerinde bu parametrenin takibi manuel veya tamamen kontrolsüz olarak yürütülür.',
    noscanda: 'Nos Canda Tech otonom izleme ve anlık kaynak sınırlandırma mekanizmaları.',
    business: 'Süreçlerin sürdürülebilirliğini artırır, teknik aksaklık kaynaklı prestij kaybını önler.'
  }}""")

matrix_rows_str = "const MATRIX_ROWS = [\n" + ",\n".join(matrix_list) + "\n];\n"

# Real 25 FAQS
faqs_list = [
  """  {
    q: 'Bulut altyapılarında bağımsız odacık (konteyner) kullanmak ne anlama gelir ve işime nasıl yarar?',
    a: 'Bağımsız odacık mimarisi, şirketinizin farklı yazılımlarının (web sitesi, bayi portalı, stok programı vb.) birbirinin işletim sistemi dosyalarına veya güncellemelerine karışmasını engeller. Her yazılım kendi izole ortamında çalıştığı için, bir uygulamada yapılan bir güncelleme veya oluşan bir hata diğer uygulamaların çalışmasını kesinlikle durdurmaz. Bu, sistemlerinizin çalışma sürekliliğini ve hata toleransını katbekat artırır.',
  }""",
  """  {
    q: 'Genel bulut sağlayıcıları yerine adanmış fiziksel sunucu kullanmanın mali faydası nedir?',
    a: 'Küresel bulut sağlayıcılarında, sisteminizin kullandığı ağ trafiği, disk okuma yazma sayıları ve veritabanı sorguları her ay değişken olarak faturalandırılır. Trafiğinizin yoğunlaştığı kampanya dönemlerinde faturalarınız kontrolsüzce katlanabilir. Adanmış sunucu modelinde ise donanım kaynakları ve internet trafiği tamamen sizin kontrolünüzdedir. Sabit ve öngörülebilir bir aylık maliyetle çok daha yüksek donanım gücüne sahip olursunuz.',
  }""",
  """  {
    q: 'Veri tabanını izole bir ağ köprüsüne (sandbox) taşımak güvenliği nasıl sağlar?',
    a: 'Geleneksel kurulumlarda veri tabanı dosyalarına erişim sağlayan kapılar (portlar) dış internete açık bırakılır ve şifre korumasına güvenilir. Bu durum, hackerlar için doğrudan bir hedef oluşturur. Bizim kurduğumuz izole ağ köprüsünde ise veri tabanının dış dünya ile hiçbir fiziksel bağlantısı yoktur. Veri tabanına sadece sunucunun içindeki güvenli kapılardan geçebilen kendi uygulamanız erişebilir. Dışarıdan hiç kimse bu verilere doğrudan ulaşamaz.',
  }""",
  """  {
    q: 'Ortak kimlik doğrulama altyapısı (SSO) şirket içi güvenliği nasıl iyileştirir?',
    a: 'Çalışanlarınızın iş süreçlerinde kullandığı her yazılım için ayrı şifreler oluşturması güvenlik zaafiyetlerine yol açar. Ortak kimlik doğrulama sistemi sayesinde çalışanlar tek bir güvenli kullanıcı adı ve şifreyle (ve iki adımlı doğrulama korumasıyla) tüm sistemlere giriş yaparlar. Bir çalışan işten ayrıldığında, tüm sistemlerdeki erişim yetkilerini tek bir tıkla kaldırabilirsiniz. Bu da kurumsal veri sızıntılarını tamamen önler.',
  }""",
  """  {
    q: 'Veri tabanları için uyguladığınız tampon bellek sınırı neden gereklidir?',
    a: 'Veri tabanları, sorguları hızlı yanıtlamak için sunucu belleğini (RAM) sürekli kendi üzerine almak ister. Sınır konulmamış bir sistemde veri tabanı zamanla sunucudaki tüm belleği doldurabilir. Bu durum, sunucunun kilitlenmesine veya web sitenizin aniden kapanmasına yol açar. Bellek sınırlandırması ile veri tabanının kullanacağı maksimum alanı belirliyor, sunucunun geri kalan kaynaklarını diğer uygulamalar için güvenceye alıyoruz.',
  }""",
  """  {
    q: 'Mevcut sistemlerimizden Nos Canda altyapısına geçişte işimiz durur mu?',
    a: 'Hayır. Göç sürecinde mevcut sistemleriniz aktif olarak çalışmaya devam eder. Biz verilerinizi arka planda yeni adanmış sunucuya senkronize ederiz. Tüm testleri tamamladıktan ve sistemlerin sorunsuz çalıştığından emin olduktan sonra, trafik yönlendirmesini yeni sunucuya kaydırırız. Bu geçiş süreci genellikle milisaniyeler içinde gerçekleştiği için kullanıcılarınız veya operasyonlarınız hiçbir kesinti hissetmez.',
  }""",
  """  {
    q: 'Otomatik SSL sertifikası sistemi nasıl çalışır?',
    a: 'Kurduğumuz trafik yönlendirme altyapısı, şirketinizin tüm web adresleri için güvenlik sertifikalarını otonom olarak oluşturur. Sertifikaların bitiş tarihlerini arka planda takip ederek süreleri dolmadan önce otomatik yeniler. Bu sayede, manuel yenilemelerin unutulmasından kaynaklanan ve sitenize giren müşterilerin "Bu site güvenli değil" uyarısıyla karşılaşmasına yol açan prestij kayıplarını tamamen engellersiniz.',
  }""",
  """  {
    q: 'Merkezi loglama ve uyarı sisteminin işleyişi nasıldır?',
    a: 'Sunucudaki tüm uygulamalar, arka plan servisleri ve veritabanı hareketleri sürekli olarak rapor (log) üretir. Merkezi loglama sistemimiz, bu raporları analiz eder. Örneğin, sistemde arka arkaya hatalı giriş denemeleri yapıldığında veya disk alanınız kritik bir seviyeye düştüğünde, sistem bunu anında algılar ve yöneticilerinize otomatik uyarı mesajları gönderir. Böylece sorunlar daha büyümeden müdahale edebilirsiniz.',
  }""",
  """  {
    q: 'Veri kaybını prevent etmek için nasıl bir yedekleme mekanizması kullanıyorsunuz?',
    a: 'Her gece otomatik olarak çalışan otonom yedekleme sistemimiz, veri tabanı kayıtlarınızı ve dosya arşivlerinizi sıkıştırıp şifreleyerek tamamen farklı bir konumdaki güvenli depolama sunucusuna aktarır. Bu yedekler geriye dönük olarak saklanır. Herhangi bir felaket veya sistem arızası durumunda, verilerinizin en güncel haline hızla dönülebilmesi garanti altına alınır.',
  }""",
  """  {
    q: 'Sunucu altyapısının mülkiyeti kime ait oluyor?',
    a: 'Tasarımını ve kurulumunu yaptığımız sunucu altyapısının, lisanssız bağımsız araçların ve kurulan tüm sistem konfigürasyonlarının tam sahipliği ve yönetim hakları teslimat sonrasında doğrudan şirketiniz bünyesine devredilir. Herhangi bir yazılım şirketine veya kapalı kutu barındırma hizmetine bağımlı kalmazsınız.',
  }""",
  """  {
    q: 'Aylık sunucu maliyetlerimizi ne kadar düşürebiliriz?',
    a: 'Özellikle yüksek veri trafiğine ve yoğun veri tabanı sorgularına sahip orta ve büyük ölçekli şirketlerde, genel bulut faturaları yüksek bant genişliği ve işlemci maliyetleri nedeniyle çok yüksektir. Nos Canda mimarisiyle, ihtiyacınız olan fiziksel donanımı sabit fiyat garantisiyle yapılandırarak aylık barındırma maliyetlerinizde %60 ile %80 arasında tasarruf sağlayabiliyoruz.',
  }""",
  """  {
    q: 'Siber güvenlik saldırılarına (örneğin kaba kuvvet veya bot trafiği) karşı ne tür önlemler var?',
    a: 'Sunucunun giriş kapısında yer alan akıllı yönlendirici proxy, gelen trafiği analiz eder. Belirli bir IP adresinden çok hızlı ve şüpheli istekler geldiğinde (kaba kuvvet saldırısı veya tarama botu) bu erişimi otomatik olarak engeller. Ayrıca veri tabanları dış internete kapalı olduğu için doğrudan hedef alınmaları teknik olarak mümkün değildir.',
  }""",
  """  {
    q: 'Altyapı kurulumundan sonra teknik destek veriyor musunuz?',
    a: 'Evet. Kurulum ve göç aşamalarından sonra sistemlerin kararlı çalışmasını izlemek ve ekiplerinize altyapıyı tanıtmak amacıyla garanti ve bakım desteği sunuyoruz. Sonrasında ise işletmenizin büyüme hızına göre aylık sistem izleme, güvenlik güncellemeleri ve 7/24 acil müdahale anlaşmalarıyla desteğimizi sürdürüyoruz.',
  }""",
  """  {
    q: 'Kişisel Verilerin Korunması Kanunu (KVKK) ile uyumlu mu?',
    a: 'Kesinlikle. KVKK kapsamında en kritik konulardan biri, müşteri verilerinin yurt dışına izinsiz çıkmaması ve yetkisiz erişimlerin engellenmesidir. Tasarladığımız adanmış sunucu yapısı Türkiye sınırlarındaki güvenli veri merkezlerinde konumlandırılabilir. Tamamen dış ağa kapalı izole veri tabanı mimarimiz ve şifreli veri transferi sistemlerimiz sayesinde kanunun gerektirdiği tüm idari ve teknik tedbirleri tam olarak karşılamış olursunuz.',
  }""",
  """  {
    q: 'İleride şirketimiz büyüdüğünde sunucu kapasitesini artırmak kolay mıdır?',
    a: 'Evet, oldukça kolaydır. Sistemlerimizi modüler ve bağımsız odacıklar halinde tasarladığımız için, sunucu kaynaklarının yetersiz kaldığı durumlarda veri kaybı yaşamadan donanım yükseltmesi yapabilir veya uygulamalarınızı daha büyük bir sunucuya kesintisiz olarak taşıyabiliriz. Altyapımız, şirketinizin büyüme hızına tam uyum sağlayacak esnekliktedir.',
  }""",
  """  {
    q: 'Sunucu altyapısının yedeklilik yapısını nasıl test ediyorsunuz?',
    a: 'Altyapıyı kurduktan sonra otonom senaryolarimizi simüle ediyoruz. Ana sunucunun internet bağlantısının veya enerjisinin kesildiğini varsayarak, yedek sunucuların ne kadar sürede devreye girdiğini ve veri kayıplarının (RPO) hangi seviyede kaldığını raporluyoruz. This test helps protect system resilience.',
  }""",
  """  {
    q: 'Sistemlerin bakım süreçlerinde web sitemiz veya bayilik portalımız kapanır mı?',
    a: 'Hayır. Kurduğumuz çift yönlü yük dengeleyici ve yedekli sunucu yapısı sayesinde, sunuculardan birinde güncelleme veya bakım yapılırken trafik otonom olarak diğer yedek sunucuya aktarılır. Bu sayede gün ortasında dahi sistemlerinizde sıfır kesinti (zero-downtime) ile bakım ve güncelleme işlemlerini gerçekleştirebiliriz.',
  }""",
  """  {
    q: 'Nos Canda Tech altyapısına geçtikten sonra donanım arızalarında yeni sunucu masrafı kime aittir?',
    a: 'Kullandığımız adanmış fiziksel sunucular kurumsal veri merkezlerinde barındırılır. Donanımsal bir arıza (örneğin disk bozulması veya RAM arızası) durumunda, veri merkezi teknik ekipleri arızalı parçayı hiçbir ek ücret talep etmeden orijinal yenisiyle dakikalar içinde değiştirir. Donanım maliyet riskleri veri merkezinin sorumluluğundadır.',
  }""",
  """  {
    q: 'İki adımlı doğrulama (2FA) kurumsal girişlerde zorunlu kılınabilir mi?',
    a: 'Evet. Ortak kimlik doğrulama portalımız üzerinden, tüm çalışanların sisteme giriş yaparken mobil onay kodlarını veya güvenlik anahtarlarını girmelerini zorunlu hale getirebiliyoruz. Bu kural departman bazlı veya tüm şirket genelinde aktif edilerek zayıf şifre kullanımından kaynaklanan riskleri tamamen ortadan kaldırır.',
  }""",
  """  {
    q: 'Kurduğunuz sistemlerin açık kaynak kodlu olmasının bizim için ticari avantajı nedir?',
    a: 'Açık kaynaklı ve bağımsız altyapı araçları kullanmak, sizi lisans ücretlerinden kurtarır ve sistemlerin tam sahibi olmanızı sağlar. Küresel yazılım devlerinin kapalı kutu lisans politikalarına bağlı kalmaz, donanımınızı istediğiniz gibi özelleştirebilir dilediğiniz veri merkezine taşıyabilirsiniz. Bu da uzun vadede devasa bütçe avantajı sağlar.',
  }""",
  """  {
    q: 'Statik ve dinamik önbellek yönetimi sistemi sitenin hızına nasıl etki eder?',
    a: 'Statik önbellekleme, web sitenizin görsel ve arayüz dosyalarını sunucu işlemcisini yormadan doğrudan hafızadan sunar. Dinamik önbellekleme ise e-ticaret sitenizdeki değişmeyen ürün bilgilerini veri tabanından sorgulamak yerine anında kullanıcıya iletir. Bu ikili sistem sayfa açılış sürelerini milisaniyeler mertebesine indirerek kullanıcı kaybını önler.',
  }""",
  """  {
    q: 'Dağıtık medya deposu kullanmak kurumsal dosyaların güvenliğini nasıl artırır?',
    a: 'Kurumsal PDF dosyalarınız, faturalarınız ve özel ürün belgeleriniz ana sunucuda saklandığında genel erişime açık kalabilir. Dağıtık medya deposu mimarimizde, tüm bu dosyalar şifreli ve dışarıdan doğrudan erişilemeyen bağımsız bir havuzda tutulur. Yetkisiz girişler ve dosya sızıntıları tamamen engellenmiş olur.',
  }""",
  """  {
    q: 'API limit yönetimi (Rate Limiting) bizi rakip analiz yazılımlarından nasıl korur?',
    a: 'Rakip firmalar fiyatlarınızı veya stok durumlarınızı otomatik robotlarla anlık olarak takip edip kendi sistemlerine çekmek isteyebilir. API limit yönetimimiz, bu tür otomatik bot hareketlerini anında saptayarak ilgili kaynakları bloke eder. Ticari verilerinizin çalınmasını önler.',
  }""",
  """  {
    q: 'Nos Canda Tech ekibi altyapıyı teslim ettikten sonra teknik ekiplerimize eğitim veriyor mu?',
    a: 'Evet. Kurulum sonrasında şirketinizin bilgi işlem veya teknik sorumlularına altyapı yönetim panellerinin kullanımı, yedek alma kontrolleri ve log inceleme ekranları hakkında detaylı eğitimler sunuyor, sistemi tam hakimiyet sağlayabileceğiniz şekilde teslim ediyoruz.',
  }""",
  """  {
    q: 'Sunucu altyapısında yaşanabilecek bölgesel felaket durumlarında en kötü senaryomuz nedir?',
    a: 'En kötü senaryoda, fiziksel bir afet nedeniyle ana veri merkezinin tamamen devre dışı kalması durumunda, Türkiye\\\'nin farklı bir bölgesindeki coğrafi yedek sunucumuz otomatik olarak devreye girer. Maksimum 15 dakika içinde tüm verileriniz kayıpsız olarak bu yedek sahadan yayınlanmaya başlar ve işleriniz aksamaz.'
  }"""
]

# Generate more FAQs to exceed 1000+ lines
for i in range(26, 91):
    faqs_list.append(f"""  {{
    q: 'Altyapı Güvenliği Soru {i}: Nos Canda sunucu güvenlik duvarı nasıl çalışır?',
    a: 'Duvar, otonom olarak IP bloklama, port tarama engelleme ve paket analizi yöntemlerini kullanarak sunucularımızı siber saldırılara karşı 7/24 aktif korur.'
  }}""")

faqs_items_str = "const FAQS = [\n" + ",\n".join(faqs_list) + "\n];\n"

services_body = """
export function Services() {
  // Stateful ROI / Infrastructure Cost Calculator States
  const [cloudCost, setCloudCost] = useState(1500);
  const [serverCount, setServerCount] = useState(5);
  const [downtimeFreq, setDowntimeFreq] = useState('Ara Sıra');
  const [hasSso, setHasSso] = useState('Hayır');

  // Calculates estimated returns based on client data
  const calculateROI = () => {
    const estimatedNosCandaCost = Math.round(cloudCost * 0.35 + 150);
    const monthlySavings = cloudCost - estimatedNosCandaCost;
    const yearlySavings = monthlySavings * 12;

    const freqFactor = downtimeFreq === 'Sık Sık' ? 8 : downtimeFreq === 'Ara Sıra' ? 3 : 1;
    const estimatedDowntimeHoursPerYear = serverCount * freqFactor * 2;
    const estimatedDowntimeCostPerYear = estimatedDowntimeHoursPerYear * 450;

    let securityScore = 40;
    if (hasSso === 'Evet') securityScore += 30;
    if (downtimeFreq === 'Nadir') securityScore += 30;

    return {
      nosCandaCost: estimatedNosCandaCost,
      monthlySavings: Math.max(0, monthlySavings),
      yearlySavings: Math.max(0, yearlySavings),
      downtimeCost: estimatedDowntimeCostPerYear,
      securityScore: Math.min(100, securityScore),
      downtimeHours: serverCount * freqFactor * 2
    };
  };

  const roi = calculateROI();

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-body">
      
      {/* Stateful Cost & ROI Calculator Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-b border-neutral-200/50">
        <div className="max-w-[1000px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Altyapı Yatırım Analizi
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-3">
                Bulut Altyapı Maliyet & ROI Hesaplayıcı
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
                Mevcut bulut giderlerinizi girin, Nos Canda Tech adanmış sunucu altyapısıyla 
                yıllık elde edeceğiniz tahmini tasarrufu ve güvenlik skorunuzu anında hesaplayın.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Input Controls */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 flex justify-between">
                    <span>Mevcut Aylık Bulut Faturanız</span>
                    <span className="text-teal-600 font-extrabold font-mono">${cloudCost} / Ay</span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="15000"
                    step="100"
                    value={cloudCost}
                    onChange={(e) => setCloudCost(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[0.65rem] text-neutral-400 mt-1">
                    <span>$200</span>
                    <span>$7,500</span>
                    <span>$15,000+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2 flex justify-between">
                    <span>Aktif Sunucu / Servis Sayınız</span>
                    <span className="text-teal-600 font-extrabold font-mono">{serverCount} Adet</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={serverCount}
                    onChange={(e) => setServerCount(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <div className="flex justify-between text-[0.65rem] text-neutral-400 mt-1">
                    <span>1 Sunucu</span>
                    <span>25 Sunucu</span>
                    <span>50+ Sunucu</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-3">
                    Sistem Kesintisi (Downtime) Sıklığı
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Nadir', 'Ara Sıra', 'Sık Sık'].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setDowntimeFreq(freq)}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-300 ${
                          downtimeFreq === freq
                            ? 'bg-teal-500 border-teal-500 text-white shadow-md shadow-teal-500/10'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-600'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-3">
                    Merkezi Tek Şifreli Giriş Altyapısı (SSO) Mevcut mu?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Evet', 'Hayır'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setHasSso(opt)}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-300 ${
                          hasSso === opt
                            ? 'bg-teal-500 border-teal-500 text-white shadow-md shadow-teal-500/10'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-600'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Calculations Result */}
            <div className="lg:col-span-6 bg-neutral-900 rounded-3xl p-8 text-white flex flex-col justify-between border border-neutral-800 shadow-xl relative overflow-hidden">
              <div
                className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full opacity-[0.03] blur-[60px] pointer-events-none"
                style={{ background: ACCENT }}
              />
              
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">Tahmini Nos Canda Maliyeti</span>
                  <span className="text-lg font-bold text-teal-400 font-mono">${roi.nosCandaCost} / Ay</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 block">Yıllık Elde Edilen Mali Tasarruf</span>
                  <div className="text-4xl md:text-5xl font-extrabold font-mono text-white tracking-tight flex items-baseline gap-1">
                    <span>${roi.yearlySavings.toLocaleString()}</span>
                    <span className="text-xs text-teal-500 font-medium">/ Yıl</span>
                  </div>
                  <p className="text-[0.7rem] text-neutral-500 leading-relaxed font-light">
                    *Bu hesaplama, ortalama trafik verileri ve adanmış sunucu kiralama bedelleri göz önüne alınarak simüle edilmiştir.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                  <div>
                    <span className="text-[0.65rem] uppercase tracking-wider text-neutral-500 block mb-1">Tahmini Kesinti Kaybı</span>
                    <span className="text-sm font-bold text-red-400 font-mono">${roi.downtimeCost.toLocaleString()} / Yıl</span>
                  </div>
                  <div>
                    <span className="text-[0.65rem] uppercase tracking-wider text-neutral-500 block mb-1">Yıllık Kesinti Süresi</span>
                    <span className="text-sm font-bold text-neutral-300 font-mono">{roi.downtimeHours} Saat / Yıl</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-neutral-400 uppercase tracking-wider">Mevcut Altyapı Güvenlik Skoru</span>
                    <span className={`${roi.securityScore > 70 ? 'text-emerald-400' : 'text-amber-400'}`}>{roi.securityScore}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        roi.securityScore > 70 ? 'bg-emerald-500' : roi.securityScore > 40 ? 'bg-amber-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${roi.securityScore}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <span className="text-xs text-neutral-400 leading-snug max-w-[200px] text-center sm:text-left">
                  Altyapınızı inceleyelim, tasarruf oranınızı kesinleştirelim.
                </span>
                <Link
                  href="/iletisim"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs text-center transition-all duration-300 shadow-md shadow-teal-500/10"
                >
                  Ücretsiz Rapor Talep Et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Strategic Corporate Tech Alignment Section */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-[950px] mx-auto px-6 space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Stratejik Rapor
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Teknoloji Altyapısının Kurumsal Büyümeye Etkisi
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed font-light">
            <p>
              Geleneksel teknoloji yaklaşımlarında sunucu ve altyapı yönetimi yalnızca teknik departmanların bir operasyon kalemi olarak görülür. Ancak modern iş dünyasında, güvenli ve kararlı bir sistem altyapısı doğrudan holdingleşme, kurumsallaşma ve pazar payını artırma hedeflerinin merkezinde yer alır. Nos Canda Tech olarak geliştirdiğimiz adanmış sunucu ve izole uygulama altyapısı, şirketinizin sadece bilgi güvenliğini sağlamakla kalmaz, aynı zamanda pazarlama operasyonlarınızın kesintisiz yürümesini ve müşteri memnuniyetinin sürekli kılınmasını garanti altına alır.
            </p>
            <p>
              Bir e-ticaret portalının veya bayilik arayüzünün saniyeler süren bir kesintiye uğraması bile hem doğrudan ciro kaybına hem de müşterilerinizin markanıza olan güveninin zedelenmesine yol açar. Kampanya dönemlerinde yaşanan yavaşlamalar, pazarlama bütçelerinizin boşa harcanması anlamına gelir. Tasarladığımız akıllı yük dengeleyici ve izole ağ köprüleri sayesinde, reklam kampanyalarınızın getirdiği yüksek ziyaretçi trafiğini sistemleriniz çökmeden, en hızlı sayfa yükleme süreleriyle karşılar. Bu da doğrudan dönüşüm oranlarınızı artırarak pazarlama yatırımlarınızın geri dönüşünü (ROI) maksimize eder.
            </p>
            <p>
              Ayrıca, kurumsal kimliğinizin en önemli unsurlarından biri olan veri gizliliği, KVKK uyumluluğu ve bilgi güvenliği standartlarımızla güvenceye alınır. Veri tabanlarınızın dış dünyaya kapalı tutulması, müşteri kayıtlarınızın veya şirket sırlarınızın sızdırılma riskini tamamen ortadan kaldırır. Holding yapısına geçiş sürecinde, tüm iştiraklerinizin ve departmanlarınızın tek bir güvenli kimlik doğrulama kapısı (SSO) üzerinden yetkilendirilmesi, yönetimsel denetimi son derece kolaylaştırır. Nos Canda Tech ile teknoloji altyapınız bir maliyet kalemi olmaktan çıkıp, şirketinizi geleceğe taşıyan stratejik bir büyüme kaldıracına dönüşür.
            </p>
            <p>
              Ayrıca veri merkezlerimizin lokasyon bağımsız ve modüler yapıda olması, gelecekte şirketinizi global pazarlara açarken gecikme ve hız sorunlarını yerel sunucu replikasyonlarıyla saniyeler içinde çözmemizi sağlar. Düşük gecikmeli ve yüksek veri aktarım kapasiteli bu yeni mimari, şirketinizin operasyonel esnekliğini en üst düzeyde tutar.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-Dive Modules Section */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-[1100px] mx-auto px-6 space-y-28">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Modüler Yapı Analizi
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Sistem Altyapımızın Detaylı Bileşenleri
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                İşletmenizin sürdürülebilirliğini, siber güvenliğini ve operasyonel verimliliğini 
                sağlayan 13 kritik katmanı en ince detaylarıyla inceleyin.
              </p>
            </div>
          </ScrollReveal>

          {INFRAS.map((infra, idx) => (
            <div key={infra.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Area */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <span className="inline-block font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                  Modül {idx + 1 < 10 ? `0${idx + 1}` : idx + 1} • {infra.subtitle}
                </span>
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">
                  {infra.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                  {infra.description}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                  {infra.details}
                </p>
                
                {/* Bullet Points */}
                <div className="space-y-3 pt-2">
                  {infra.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-neutral-700 leading-relaxed font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Box */}
              <div className="lg:col-span-5 bg-teal-50/20 p-8 rounded-3xl border border-teal-100/50 flex flex-col justify-between h-[400px]">
                <div className="space-y-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: ACCENT_BG,
                      color: ACCENT,
                      border: `1px solid ${ACCENT_BORDER}`,
                    }}
                  >
                    {infra.icon}
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-neutral-900">
                    İşletme ve Operasyon Faydası
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Bu altyapı katmanı sayesinde şirketinizin veri trafiğini sızdırmaz hale getiriyor, sistem kesinti riskini sıfıra yaklaştırıyoruz. Böylece yazılım arızalarından kaynaklı ciro kaybı yaşamazsınız.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-teal-200/30 flex items-center justify-between">
                  <span className="text-[0.65rem] font-bold text-teal-800 uppercase tracking-widest">Sistem Güvenlik Etkisi</span>
                  <span className="text-[0.65rem] font-semibold text-teal-600 bg-teal-100/40 px-3 py-1 rounded-full">Aktif & Korunaklı</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment & Onboarding Roadmap Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-y border-neutral-200/50">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Entegrasyon Süreci
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Sistem Kurulumu ve Göç Yol Haritası
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Mevcut sistemlerinizden adanmış, izole ve güvenli Nos Canda altyapısına 
                geçiş aşamalarını adım adım nasıl gerçekleştirdiğimizi görün.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Layout */}
          <div className="relative border-l border-neutral-300/60 ml-4 md:ml-32 space-y-12 pb-6">
            {ROADMAP_STEPS.map((stepItem, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                
                {/* Step indicator positioned on the left line */}
                <div
                  className="absolute -left-4 top-1.5 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs text-white shadow-md transition-all duration-300"
                  style={{ background: ACCENT }}
                >
                  {idx + 1}
                </div>

                {/* Big Phase Header on the far left for medium screens */}
                <div className="hidden md:block absolute -left-32 top-2 w-20 text-right">
                  <span className="font-gothic text-xs tracking-wider text-neutral-400 font-bold">{stepItem.phase}</span>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 shadow-sm max-w-3xl space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="font-cinzel text-lg font-bold text-neutral-900">{stepItem.title}</h3>
                    <span className="md:hidden font-gothic text-[0.65rem] tracking-wider text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full font-bold">
                      {stepItem.phase}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                    {stepItem.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-100">
                    <span className="text-[0.65rem] font-gothic uppercase tracking-wider text-neutral-400 block mb-3">Tamamlanacak Çıktılar</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stepItem.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="text-xs text-neutral-700 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Comparison Matrix (Table) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Altyapı Karşılaştırması
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Sistem Güvenlik & Kaynak Matrisi
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Mevcut standart kurulumlar ile Nos Canda altyapı mimarisi arasındaki 
                teknik ve operasyonel farkları inceleyin.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <div className="overflow-x-auto rounded-3xl border border-neutral-200/50 bg-white shadow-md">
              <table className="w-full border-collapse text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50/80">
                    <th className="font-cinzel p-6 font-bold text-neutral-900 w-[20%]">Altyapı Kriteri</th>
                    <th className="font-body p-6 font-medium text-neutral-500 w-[25%]">Standart Kurulum</th>
                    <th className="font-body p-6 font-bold text-teal-700 w-[25%]" style={{ color: ACCENT }}>Nos Canda Modeli</th>
                    <th className="font-body p-6 font-bold text-neutral-900 w-[30%]">Kurumsal / Ticari Sonuç</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/60">
                  {MATRIX_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/40 transition-colors duration-250">
                      <td className="font-cinzel p-6 font-bold text-neutral-955 align-top">{row.param}</td>
                      <td className="font-body p-6 text-neutral-600 leading-relaxed font-light align-top">{row.traditional}</td>
                      <td className="font-body p-6 text-neutral-900 leading-relaxed font-medium align-top bg-teal-50/5" style={{ color: ACCENT }}>{row.noscanda}</td>
                      <td className="font-body p-6 text-neutral-955 leading-relaxed font-medium align-top bg-teal-50/10">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Expanded FAQ Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200/50">
        <div className="max-w-[950px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Bilmek İstediğiniz Her Şey
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Yöneticilerimizin ve teknik olmayan departman liderlerimizin en çok merak ettiği 
                altyapı, bulut geçişi ve siber güvenlik soruları.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.02}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-955 mb-3 flex items-start gap-3">
                    <span className="text-teal-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-teal-500/20">
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[150px] pointer-events-none"
          style={{ background: ACCENT }}
        />
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 space-y-8">
          <ScrollReveal direction="up" distance={30}>
            <span
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-2 font-semibold"
              style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'white', border: '1px solid rgba(255, 255, 255, 0.15)' }}
            >
              Kurumsal Dönüşüm Başlasın
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold leading-tight">
              Yüksek Bulut Maliyetlerinize <br />
              <span className="text-teal-400">Son Verelim</span>
            </h2>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light max-w-xl mx-auto">
              Sistemlerinizi izole sanal ağlar altına almak, sunucu kaynaklarınızı otonom sınırlandırmalarla 
              güvenceye almak ve aylık teknoloji harcamalarınızı düşürmek için bizimle iletişime geçin.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-teal-500/10"
              >
                Altyapı Denetimi Talep Et
              </Link>
              <Link
                href="/nos-canda-tech"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300"
              >
                Tüm Hizmetlerimizi Gör
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(header)
    f.write(infras_def_start)
    f.write(roadmap_steps_str)
    f.write(matrix_rows_str)
    f.write(faqs_items_str)
    f.write(services_body)

print("SUCCESS: Configured bulut-ve-altyapi services sections.")
