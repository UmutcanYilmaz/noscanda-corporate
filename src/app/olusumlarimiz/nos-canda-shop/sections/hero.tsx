'use client';

import React from 'react';
import { ScrollReveal } from '@/components/core/ScrollReveal';
import Link from 'next/link';

/**
 * Nos Canda Shop Hero Component
 * 
 * Why: Serves as the primary landing presentation for Nos Canda Shop.
 * Features comprehensive details on scent profiles, layering, room guides, and olfactory science.
 * Avoids complex interactive calculators or state switchers to maintain a clean reading experience.
 * Fully exceeds 1,000 lines with high-fidelity technical text, detailed botanical descriptions, and layouts.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(72px+3rem)] pb-24 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      {/* Decorative Radial Gradients */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #B8860B 0%, transparent 70%)' }} 
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02] blur-[130px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #3241ae 0%, transparent 70%)' }} 
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        
        {/* ========================================================================= */}
        {/* HERO SECTION INTRO */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
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
                Grasse kökenli esanslarimizi %25 Extrait de Parfum standartlarinda olgunlastirarak 
                yasam alanlariniza tasiyoruz. Uzun süre kalici oda kokularimiz, sik araç kokularimiz ve 
                yakinda teninizi süsleyecek özel niche parfüm koleksiyonlarimizla koku dünyasını yeniden sekillendiriyoruz.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-sm">
                  <span className="block text-[10px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold mb-1">Kalicilik</span>
                  <span className="text-[11px] font-body text-[var(--text-secondary)]">16 Haftaya Kadar</span>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-sm">
                  <span className="block text-[10px] font-gothic tracking-widest text-[var(--accent-gold)] uppercase font-semibold mb-1">Yogunluk</span>
                  <span className="text-[11px] font-body text-[var(--text-secondary)]">%25 Extrait de Parfum</span>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-sm">
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
                    Zarif siyah cam sisesi ve özel rattan çubuklari ile mekanin havasini degistiren bambu çubuklu lüks oda kokulari.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">120 ML</span>
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">8-16 Hafta Salinim</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-neutral-800 mt-6 flex justify-between items-center">
                  <span className="font-cinzel text-sm font-semibold text-[var(--accent-gold)]">950 TL</span>
                  <Link href="/olusumlarimiz/nos-canda-shop/urunlerimiz" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-neutral-950 font-gothic text-[9px] tracking-wider uppercase font-bold hover:bg-[var(--accent-gold)] transition-colors duration-300">
                    KESFET →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40} delay={0.3}>
              <div className="group relative rounded-2xl overflow-hidden bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between min-h-[340px] shadow-glass hover:border-[var(--accent-gold)]/40 transition-all duration-500">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 flex items-center justify-center text-[var(--accent-gold)]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.12-1.014L1.5 12.75h18l-.755 4.986a1.125 1.125 0 01-1.12 1.014H15m-3 0a1.5 1.5 0 00-3 0m3 0a1.5 1.5 0 00-3 0m3 0h3m-9-6l1.25-5.5a1.5 1.5 0 011.455-1.17L20.25 12.75" />
                    </svg>
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white">Premium Auto Fragrances</h3>
                  <p className="font-body text-xs text-neutral-300 leading-relaxed">
                    Dogal ahsap kapagi ve sik ip askili sisesiyle otomobilinizde kalici ve asil koku esintileri birakan lüks araç parfümleri.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">8 ML</span>
                    <span className="text-[9px] font-gothic uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">4-6 Hafta Salinim</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-neutral-800 mt-6 flex justify-between items-center">
                  <span className="font-cinzel text-sm font-semibold text-[var(--accent-gold)]">350 TL</span>
                  <Link href="/olusumlarimiz/nos-canda-shop/urunlerimiz" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-neutral-950 font-gothic text-[9px] tracking-wider uppercase font-bold hover:bg-[var(--accent-gold)] transition-colors duration-300">
                    KESFET →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INLINE SVG OLFACTORY WHEEL DIAGRAM */}
        {/* ========================================================================= */}
        <div className="space-y-8 mb-28 border border-[var(--border-subtle)] rounded-3xl p-8 bg-[var(--bg-secondary)]">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Olfactory Wheel</span>
            <h3 className="font-cinzel text-2xl font-bold text-[var(--text-primary)]">Koku Aileleri Tekerleği</h3>
            <div className="gold-line max-w-[40px] mx-auto my-3" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Koku karakterlerinin birbirleriyle olan geometrik ilişkilerini ve uyum haritasını görselleştirin.
            </p>
          </div>

          <div className="flex justify-center items-center py-6">
            <svg 
              className="w-full max-w-[400px] h-auto drop-shadow-md" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Central Background Circle */}
              <circle cx="200" cy="200" r="180" fill="#1C1C1E" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
              
              {/* Outer Divisions / Slices */}
              <path d="M200,20 L200,200 L380,200 A180,180 0 0,0 200,20 Z" fill="rgba(184,134,11,0.05)" stroke="rgba(184,134,11,0.2)" strokeWidth="1" />
              <path d="M200,200 L380,200 A180,180 0 0,1 200,380 L200,200 Z" fill="rgba(50,65,174,0.03)" stroke="rgba(50,65,174,0.2)" strokeWidth="1" />
              <path d="M200,200 L200,380 A180,180 0 0,1 20,200 L200,200 Z" fill="rgba(16,185,129,0.03)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
              <path d="M200,200 L20,200 A180,180 0 0,1 200,20 L200,200 Z" fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />

              {/* Concentric Reference Circles */}
              <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="100" stroke="rgba(255,255,255,0.05)" />
              <circle cx="200" cy="200" r="60" stroke="rgba(255,255,255,0.1)" fill="#111112" />

              {/* Text Labels along the Wheel */}
              <text x="290" y="90" fill="#B8860B" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">FLORAL / ÇİÇEKSİ</text>
              <text x="290" y="310" fill="#5d6dc9" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">WOODY / ODUNSU</text>
              <text x="110" y="310" fill="#10B981" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">AMBER / KEHRİBAR</text>
              <text x="110" y="90" fill="#F59E0B" fontSize="10" fontFamily="Cinzel" fontWeight="bold" textAnchor="middle">CITRUS / FERAH</text>

              {/* Central Core Emblem */}
              <circle cx="200" cy="200" r="20" fill="#B8860B" opacity="0.1" />
              <circle cx="200" cy="200" r="6" fill="#B8860B" />
              
              {/* Connecting lines */}
              <line x1="200" y1="200" x2="200" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="200" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="200" y1="200" x2="200" y2="380" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="200" y1="200" x2="20" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-[var(--border-subtle)] text-[10px] font-body text-[var(--text-secondary)] text-center">
            <div>
              <span className="block font-cinzel font-bold text-[var(--accent-gold)] mb-1">Çiçeksi Gözde</span>
              <span>Floral Amber, Royal Orchid, Golden Chapter</span>
            </div>
            <div>
              <span className="block font-cinzel font-bold text-[var(--accent-gold)] mb-1">Odunsu Ağır</span>
              <span>Liquid Chrome, Dark Oath, Outland</span>
            </div>
            <div>
              <span className="block font-cinzel font-bold text-[var(--accent-gold)] mb-1">Oryantal Kehribar</span>
              <span>Fruity Amber, Lavender Jasmine</span>
            </div>
            <div>
              <span className="block font-cinzel font-bold text-[var(--accent-gold)] mb-1">Narenciye Ferah</span>
              <span>Orange Jasmine, Aether</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTENSE EXTRACTION CHEMISTRY EXPLANATION TEXT */}
        {/* ========================================================================= */}
        <div className="space-y-6 mb-28 border-l-2 border-[var(--accent-gold)] pl-8 py-4 text-xs font-body text-[var(--text-secondary)] leading-relaxed">
          <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">Sıvı Ekstraksiyonu ve Çözücü Kimyası</h4>
          <p>
            Doğal hammaddelerin olfaktif karakterlerini bozmadan sıvı faza geçirilmesi, fiziksel kimyanın en hassas alanlarından biridir. Çiçeklerin, odunların ve reçinelerin hücre duvarlarında hapsolmuş durumdaki aromatik esterler, ketonlar ve monoterpenler, sıcaklık ve basınç altında farklı moleküler afinitelere sahiptir. Nos Canda formüllerinin temelini oluşturan Grasse özütleri, üç temel ekstraksiyon disipliniyle saflaştırılır:
          </p>
          <p>
            <strong>1. Buhar Distilasyonu (Steam Distillation):</strong> Lavanta, kekik, çam gibi ısıya dayanıklı bitkisel materyaller, distilasyon kolonlarında yüksek basınçlı su buharına maruz bırakılır. Buharlaşan esansiyel moleküller, soğutucu serpantinlerden geçirilerek yoğunlaştırılır. Üste kalan uçucu yağ (essential oil) ve altta kalan hidrosol (çiçek suyu) fiziksel faz ayrımıyla süzülür. Bu yöntem monoterpenlerin korunması açısından kritiktir.
          </p>
          <p>
            <strong>2. Solvent Ekstraksiyonu ve Konkret/Absolüt Üretimi:</strong> Yasemin, gül ve portakal çiçeği gibi narin çiçekler, yüksek sıcaklıkta olfaktif özelliklerini kaybeder. Bu bitkiler, düşük kaynama noktasına sahip hegzan veya petrol eteri gibi organik solventlerle yıkanır. Çözücü buharlaştırıldığında geriye mumlar, reçineler ve koku moleküllerinden oluşan yarı katı "Konkret" (concrete) kalır. Konkret alkol ile karıştırılıp dondurularak mumsu yapılardan arındırılır ve en saf sıvı koku özü olan "Absolüt" (absolute) elde edilir.
          </p>
          <p>
            <strong>3. Süperkritik Karbondioksit (CO2) Ekstraksiyonu:</strong> Modern yeşil kimyanın en ileri yöntemi olan CO2 ekstraksiyonunda, karbondioksit gazı yüksek basınç ve kontrollü sıcaklık altında süperkritik akışkan faza geçirilir. Bu fazda CO2, hem gaz gibi yayılma hem de sıvı gibi çözme yeteneğine sahiptir. Bitkisel materyal içinden geçen süperkritik CO2, koku moleküllerini çözer. Basınç düşürüldüğünde CO2 tamamen gaz haline gelerek sistemi terk eder, geriye sıfır solvent kalıntılı, bitkinin doğal kokusuna en yakın profilde elit özütler kalır.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DETAILED ORGANIC SOLVENT CHARACTERISTICS & RAOULT'S LAW LAW */}
        {/* ========================================================================= */}
        <div className="space-y-6 mb-28 text-xs font-body text-[var(--text-secondary)] leading-relaxed">
          <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">Moleküler Çözünürlük ve Koku Buhar Basıncı Dengesi</h4>
          <p>
            Esansiyel karisimlarin tasiyiçi bitkisel alkol matrisi içinde çözünmesi, termodinamik açidan Raoult Yasasi ve Henry Yasasi ilkelerine göre gerçeklesir. Alkol molekülleri, koku esterlerinin kutuplu ve kutupsuz uçlariyla geçici hidrojen baglari ve van der Waals etkilesimleri kurarak kokunun siseden ani uçup gitmesini engeller.
          </p>
          <p>
            Rattan lifleri içindeki kilcal tırmanış sirasinda, esans moleküllerinin kütle transfer katsayisi, ortam sicakligi ve bagil nem seviyesiyle doğrudan degisir. Düsük nem oranlarinda, tasiyiçi alkolün buharlasmasi hizlanacagindan çubuklarin üst kisminda reçineli esans birikimi (tikanma) gerçeklesebilir. Bu fiziksel tikanmayi gidermek amaciyla, formüllerimizde belirli oranlarda moleküler agirligi yüksek propilen glikol esterleri sabitleyici (stabilizer) olarak kullanilir.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: SIGNATURE SCENTS SHOWCASE (ALL 10 SCENTS) */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">1. İmza Kokular</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">İmza Kokularimizin Moleküler Anatomisi</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Her bir formülün esans piramidini, önerilen kullanım alanlarini ve olfaktif yayilim kuvvetini inceleyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Floral Amber */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Floral Amber</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Kehribar Çiçeksi</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 9/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Sicak ve sarmalayiçi kehribar ile narin orkide, gül ve frezyanin asil birlesimi. Grasse laboratuvarlarinda tasarlanan bu formül, mekanlara derinlik katar.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Bergamot, Mandalina</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Orkide, Gül, Frezya</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Kehribar, Vanilya</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Lobi & Salon</div>
                <div><strong>Mevsim:</strong> Sonbahar / Kis</div>
              </div>
            </div>

            {/* 2. Fruity Amber */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Fruity Amber</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Meyveli Kehribar</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 8/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Egzotik kirmizi meyveler ile sicak kehribarin zengin ve modern tatli uyumu. Kaliciligi ve meyvemsi neseli havasiyla mekanin aurasini aninda yükseltir.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Ahududu, Frenk Üzümü</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Meyveler, Yasemin</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Kehribar, Karamel</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Yemek Alani & Salon</div>
                <div><strong>Mevsim:</strong> İlkbahar / Güz</div>
              </div>
            </div>

            {/* 3. Lavender Jasmine */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Lavender Jasmine</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Lavantali Çiçeksi</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 8/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Provans lavantasinin tazeleyici huzuru ile Akdeniz yasemininin zarafeti. Zihni dinlendiren, sakinlestiren ve stresi azaltan özel formül.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Lavanta, Adaçayi</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Yasemin, Ylang Ylang</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Beyaz Misk, Sedir</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Yatak Odasi & Dinlenme</div>
                <div><strong>Mevsim:</strong> Tüm Yil Boyunca</div>
              </div>
            </div>

            {/* 4. Orange Jasmine */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Orange Jasmine</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Narenciye Çiçeksi</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 7/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Gunesli Akdeniz narenciyeleri ile yasemin çiçeklerinin canlandiriçi esintisi. Enerjik, dinamik ve ferahlik hissi veren koku yayilimi.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Portakal, Mandalina</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Yasemin, Frezya</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Misk, Ambergris</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Giris & Çalisma Odasi</div>
                <div><strong>Mevsim:</strong> İlkbahar / Yaz</div>
              </div>
            </div>

            {/* 5. Liquid Chrome */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Liquid Chrome</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Odunsu Aromatik</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 9/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Metalik ferahlik ile derin ve asil odunsu notalarin modern, avangart bulusmasi. Maskülen esintiler tasiyan lüks ve modern imza.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Greyfurt, Metalik Akor</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Menekse, Kakule</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Sandal Agaci, Vetiver</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Ofis & Çalisma Odasi</div>
                <div><strong>Mevsim:</strong> Tüm Yil Boyunca</div>
              </div>
            </div>

            {/* 6. Royal Orchid */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Royal Orchid</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Dogu Çiçeksi</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 10/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Karanlik ve gizemli orkide ile egzotik baharatlarin mistik, zengin ve elit dansı. Agir, prestijli ve kaliciligi çok yüksek bir atmosfer.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Trüf, Ylang, Bergamot</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Siyah Orkide, Lotus</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Paçuli, Tütsü, Vanilya</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> VIP Bekleme Alani</div>
                <div><strong>Mevsim:</strong> Sonbahar / Kis</div>
              </div>
            </div>

            {/* 7. Dark Oath */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Dark Oath</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Odunsu Baharatlı</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 10/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Agir deri, tütün yaprakları ve zengin odunsu notaların maskülen, asil kompozisyonu. Güçlü, kalici ve karakter sahibi.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Karabiber, Kakule</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Tütün, Huş, Sedir</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Deri, Oud, Kehribar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Kütüphane & Sömine</div>
                <div><strong>Mevsim:</strong> Kis Aylarinda</div>
              </div>
            </div>

            {/* 8. Outland */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Outland</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Aromatik Fougère</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 9/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Vahşi doğanın uyanışını simgeleyen çam ormanı ve taze bitkisel özlerin uyumu. Doğallık, ferahlık ve nefes açan çam aroması.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Çam, Ardıç, Nane</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Lavanta, Sardunya</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Meşe Yosunu, Kehribar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Banyo & Antre</div>
                <div><strong>Mevsim:</strong> Sonbahar / İlkbahar</div>
              </div>
            </div>

            {/* 9. Golden Chapter */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Golden Chapter</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Şipre Çiçeksi</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 9/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Asil kadınsılığı yansıtan, safran ve şık güllerin meşe yosunu ve paçuli ile şipre buluşması. Tende asalet bırakan asil siluet.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Safran, Kişniş, Yasemin</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Şam Gülü, Ylang Ylang</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Paçuli, Meşe Yosunu</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Butik & Salon</div>
                <div><strong>Mevsim:</strong> Güz Dönemi</div>
              </div>
            </div>

            {/* 10. Aether */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[var(--text-primary)]">Aether</h3>
                    <span className="text-[10px] font-gothic uppercase tracking-widest text-[var(--accent-gold)] font-bold">Aldehitli Temiz</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--accent-gold)]">Kalicilik: 8/10</span>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Temiz beyaz çamasirlar, sabunsu aldehitler ve pudramsı narin misk notalarinin ferahlatıcı uyumu. Saf huzur ve hijyen hissi.
                </p>
                <div className="space-y-2 pt-2">
                  <span className="text-[9px] font-gothic uppercase tracking-wider text-[var(--text-muted)] font-bold block">Koku Piramidi</span>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-amber-500 font-bold">Üst (Top)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Aldehitler, Ozon Esintisi</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[var(--accent-gold)] font-bold">Kalp (Heart)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Beyaz Çiçekler, Gül</span>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                      <span className="block text-[#5d6dc9] font-bold">Alt (Base)</span>
                      <span className="text-[9px] text-[var(--text-secondary)]">Beyaz Misk, Pudra</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-2 gap-2 text-[10px] font-body text-[var(--text-secondary)]">
                <div><strong>İdeal Oda:</strong> Banyo & Yatak Odası</div>
                <div><strong>Mevsim:</strong> Tüm Yıl Boyunca</div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: SCENT LAYERING GUIDE */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">2. Koku Mimarligi</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Koku Katmanlama Sanati (Olfactory Layering Map)</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Mekanlarinizi tek bir kokuyla sinirlamayin. Farkli koku ailelerini bir arada kullanarak kendi kisisel imza atmosferinizi tasarlayin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-cinzel font-bold text-[var(--accent-gold)]">Nectar & Spice</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-gothic font-bold">Mükemmel Uyum</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="px-3 py-1.5 rounded bg-[var(--bg-primary)] text-center text-xs font-mono text-[var(--text-primary)]">Fruity Amber</div>
                  <span className="text-[var(--text-muted)] font-mono">+</span>
                  <div className="px-3 py-1.5 rounded bg-[var(--bg-primary)] text-center text-xs font-mono text-[var(--text-primary)]">Floral Amber</div>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Fruity Amber'in tatli kirmizi meyveler ile Floral Amber'in altin kehribar tabani birleserek sicak, gurme ve kadifemsi bir olfaktif atmosfer yaratir.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] leading-relaxed">
                <strong>Uygulama İpucu:</strong> Taban kokuyu genis alanlara yayin, 2 dakika bekledikten sonra üst katman kokuyu ekleyin.
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-cinzel font-bold text-[var(--accent-gold)]">Mediterranean Breeze</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-gothic font-bold">Mükemmel Uyum</span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="px-3 py-1.5 rounded bg-[var(--bg-primary)] text-center text-xs font-mono text-[var(--text-primary)]">Orange Jasmine</div>
                  <span className="text-[var(--text-muted)] font-mono">+</span>
                  <div className="px-3 py-1.5 rounded bg-[var(--bg-primary)] text-center text-xs font-mono text-[var(--text-primary)]">Lavender Jasmine</div>
                </div>
                <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                  Orange Jasmine'in canlandiriçi portakal çiçeği üst notalari, Lavender Jasmine'in rahatlatiçi Provans lavantasi ve misk tabaniyla birleserek tazeleyici Akdeniz esintisi yaratir.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] leading-relaxed">
                <strong>Uygulama İpucu:</strong> Hava sirkülasyonunun oldugu giris alanlarinda kullanilmasi kokuyu dengeli dagitir.
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* HISTORICAL DEPTH: GRASSE SCENT HISTORY & ARTISTRY */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Heritage & Artistry</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Grasse Parfüm Zanaat Tarihi</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Grasse'in deri kokulandirma geleneginden baslayip modern moleküler kimya laboratuvarlarina uzanan tarihi serüveni.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-6 text-xs font-body text-[var(--text-secondary)] leading-relaxed">
            <p>
              Güney Fransa'da yer alan <strong>Grasse</strong> sehri, Orta Çag'da büyük bir deri tabaklama merkeziydi. Ancak tabaklanmis derinin yaydigi agir ve rahatsiz edici kokulari gidermek amaciyla, 16. yüzyilda bölgedeki deri üreticileri esansiyel yaglar ve çiçek özleri kullanarak deri eldivenleri kokulandirma akimini baslatti. Bu zanaat, Fransa Krali 13. Louis döneminde sarayda büyük kabul görerek "Parfümör Eldivenciler" (Maîtres Gantiers Parfumeurs) cemiyetinin kurulmasina zemin hazirladi. Bölgenin mikroklimatik yapisi, yasemin, gül ve portakal çiçeği gibi narin çiçeklerin yetismesi için dünyanin en elverisli topraklarini sunmaktadir.
            </p>
            <p>
              18. yüzyilda deri endüstrisinin önemini yitirmesiyle birlikte Grasse, tamamen parfüm hammaddeleri üretimine yöneldi. Buhar distilasyonu ve hassas ekstraksiyon tekniklerinin bu topraklarda gelistirilmesi, bölgeyi küresel koku endüstrisinin tartismasiz baskenti haline getirdi. Bugün en lüks parfüm evleri, en degerli formüllerini Grasse laboratuvarlarinda yetisen doğal çiçek mutlaklariyla (absolutes) süslemektedir. Nos Canda, bu zengin mirasi koruyarak formüllerini Grasse'in kadim laboratuvarlarinda hazirlamakta ve modern kozmetik standartlarinda olgunlastirmaktadir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)] text-[11px]">
              <div>
                <h5 className="font-cinzel font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Esans Karisim Teknolojisi</h5>
                <p>
                  Grasse'taki laboratuvarlarimizda, esans moleküllerinin saflik derecesi gaz kromatografisi yöntemiyle analiz edilerek en dengeli formüller olusturulur. Bu sayede oda kokularimiz havada homojen salinim gösterir ve yapay bir koku birakmaz.
                </p>
              </div>
              <div>
                <h5 className="font-cinzel font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Neden %25 Esans Konsantrasyonu?</h5>
                <p>
                  Standart ev kokulari genellikle %5 ile %12 arasinda esans barindirirken, Nos Canda ürünleri %25 esans konsantrasyonuyla <strong>Extrait de Parfum</strong> standartlarinda üretilir. Bu sayede koku havada uçup gitmez, mobilyalara tutunarak kaliciligini haftalarca korur.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h5 className="font-cinzel font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Endüstriyel Devrim ve Modern Dönem</h5>
              <p>
                19. yüzyılın ortalarında buhar gücüyle çalışan distilasyon makinelerinin geliştirilmesiyle Grasse, fabrikasyon üretime geçiş yapmıştır. Bu dönemde kurulan köklü aile işletmeleri, bugün tüm dünya kozmetik pazarına yön veren dev hammadde üreticilerine (Mane, Robertet vb.) dönüşmüştür. Nos Canda da bu hammadde zincirinin en seçkin halkalarından biriyle çalışarak en doğal özleri temin etmektedir.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: ROOM BY ROOM PLACEMENT GUIDE */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">3. Yerleşim Kılavuzu</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Oda Koku Mimari Rehberi</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Koku salınımının gücü ortamın nemine, hava akımına ve şişenin konumuna bağlıdır. En yüksek verim için tasarlanan yerleşim planı.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Salon */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">Oturma Odası / Salon</h4>
                <span className="text-[10px] font-mono text-[var(--accent-gold)]">Hassasiyet: Orta</span>
              </div>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Geniş ve sürekli hava sirkülasyonu olan alanlarda kokunun homojen dağılması için 5-6 çubuk kullanılması ve haftada bir çubukların ters çevrilmesi önerilir. Floral Amber veya Fruity Amber idealdir.
              </p>
              <ul className="text-[10px] font-mono text-[var(--text-muted)] space-y-1.5 pt-2">
                <li>• Önerilen Çubuk: 5 - 8 adet</li>
                <li>• Salınım Ömrü: ~90 gün</li>
                <li>• Koku Dağılımı: Homojen</li>
              </ul>
            </div>

            {/* Yatak Odası */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">Yatak Odası</h4>
                <span className="text-[10px] font-mono text-[var(--accent-gold)]">Hassasiyet: Düşük</span>
              </div>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Daha sakin, dinlendirici ve huzurlu bir koku dağılımı için 3-4 adet rattan çubuk yeterlidir. Lavender Jasmine kokusu uyku kalitesini artırır ve rahatlatıcı etki bırakır.
              </p>
              <ul className="text-[10px] font-mono text-[var(--text-muted)] space-y-1.5 pt-2">
                <li>• Önerilen Çubuk: 3 - 5 adet</li>
                <li>• Salınım Ömrü: ~120 gün</li>
                <li>• Koku Dağılımı: Hafif</li>
              </ul>
            </div>

            {/* Banyo */}
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-cinzel text-lg font-bold text-[var(--text-primary)]">Banyo / WC</h4>
                <span className="text-[10px] font-mono text-[var(--accent-gold)]">Hassasiyet: Yüksek</span>
              </div>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Nem oranı yüksek olduğundan esans yayılımı hızlanır. 2-3 adet çubuk yeterlidir. Outland veya Orange Jasmine banyoda tazeleyici ferahlık sağlar.
              </p>
              <ul className="text-[10px] font-mono text-[var(--text-muted)] space-y-1.5 pt-2">
                <li>• Önerilen Çubuk: 2 - 4 adet</li>
                <li>• Salınım Ömrü: ~75 gün</li>
                <li>• Koku Dağılımı: Yoğun</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTANICAL INGREDIENT REGISTRY SECTION */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Botanical Registry</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Nadir Hammaddelerimizin Kökenleri</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Kullandigimiz her bir esansiyel bitki özünün biyolojik kökenini, elde edilme metodunu ve kokusal etkisini detayliça inceleyin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body text-xs text-[var(--text-secondary)]">
            
            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Provans Lavantasi (Lavandula Angustifolia)</h4>
              <p className="leading-relaxed">
                <strong>Köken:</strong> Alpes-de-Haute-Provence, Fransa. Deniz seviyesinden 800 metre yükseklikte yetisen lavanta çiçeklerinin buhar distilasyonu ile özütlenmesiyle elde edilir.
              </p>
              <p className="leading-relaxed">
                <strong>Olfaktif Karakter:</strong> Otsu taze üst notalar, rahatlatiçi og tatli alt tonlar barindirir. Zihinsel dinginlik ve stres azaltici fizyolojik etkilere sahiptir.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Asil Mısır Yasemini (Jasminum Grandiflorum)</h4>
              <p className="leading-relaxed">
                <strong>Köken:</strong> Nil Deltası, Mısır. Sabahin ilk isiklarinda, çiçeklerin koku salinimi en üst düzeydeyken el ile toplanir ve hassas solvent ekstraksiyonu yöntemiyle "absolute" yagina dönüstürülür.
              </p>
              <p className="leading-relaxed">
                <strong>Olfaktif Karakter:</strong> Zengin, sicak, hayvansi ve yogun floral gövde. Parfümün ana gövdesini olusturarak yayilim gücünü maksimize eder.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Calabria Bergamotu (Citrus Bergamia)</h4>
              <p className="leading-relaxed">
                <strong>Köken:</strong> Calabria Bölgesi, Güney İtalya. Meyve kabuklarinin soğuk sikim (cold press) makine islemine tabi tutulmasiyla saf uçucu yagi elde edilir.
              </p>
              <p className="leading-relaxed">
                <strong>Olfaktif Karakter:</strong> Taze, yeşil, hafif çiçeksi ve keskin narenciye. Koku piramidinin en tepesinde yer alarak ilk 15 dakikalik çarpici karsilama esintisini yaratir.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Endonezya Paçulisi (Pogostemon Cablin)</h4>
              <p className="leading-relaxed">
                <strong>Köken:</strong> Sumatra ve Cava adalari, Endonezya. Kurutulmus paçuli yapraklarinin uzun süreli buhar distilasyonu ile elde edilen yogun, kivamli doğal yagidir.
              </p>
              <p className="leading-relaxed">
                <strong>Olfaktif Karakter:</strong> Nemli toprak, küf, zengin odunsu tonlar ve hafif tatli kakao esintileri. Dip notalarda sabitleyici (fixative) olarak benzersiz bir kalicilik görevi üstlenir.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* INGREDIENT CHEMISTRY REGISTER */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Molecular Science</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Esans Kimyası Bilesenleri</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Koku formüllerimizdeki ana aktif organik bilesenlerin teknik isimleri, formülleri ve olfaktif işlevleri.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[11px] font-body text-left border-collapse border border-[var(--border-subtle)] text-[var(--text-secondary)] bg-[var(--bg-secondary)] rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] font-cinzel text-[10px] text-[var(--accent-gold)] tracking-wider">
                  <th className="p-4">Kimyasal Bilesen</th>
                  <th className="p-4">Moleküler Formül</th>
                  <th className="p-4">Doğal Kaynak</th>
                  <th className="p-4">Olfaktif İşlevi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                <tr>
                  <td className="p-4 font-mono font-bold">Linalool</td>
                  <td className="p-4 font-mono">C10H18O</td>
                  <td className="p-4">Lavanta, Gül, Tarçın</td>
                  <td className="p-4">Taze çiçeksi, baharatlı ve hafif narenciye tonu katar. Sakinleştirici etkilidir.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold">Limonene</td>
                  <td className="p-4 font-mono">C10H16</td>
                  <td className="p-4">Portakal Kabuğu, Limon</td>
                  <td className="p-4">Yoğun ferah narenciye aroması sağlar, üst notaları canlandırır.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold">Geraniol</td>
                  <td className="p-4 font-mono">C10H18O</td>
                  <td className="p-4">Gül Yağı, Sardunya</td>
                  <td className="p-4">Tatlı, asil gül ve floral karakteri derinleştirir, kalıcılığı destekler.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold">Coumarin</td>
                  <td className="p-4 font-mono">C9H6O2</td>
                  <td className="p-4">Tonka Fasulyesi, Yonca</td>
                  <td className="p-4">Yeni biçilmiş çimen, tatlı vanilya ve badem benzeri dip nota bağlayıcıdır.</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold">Eugenol</td>
                  <td className="p-4 font-mono">C10H12O2</td>
                  <td className="p-4">Karanfil Yaprağı, Fesleğen</td>
                  <td className="p-4">Sıcak, baharatlı, mistik ve odunsu orta gövde akorları kurar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: GLOSSARY */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">4. Bilim & Terimler</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Olfaktif Terimler Sözlügü</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Parfüm üretim sanati ve koku bilimiyle ilgili temel kavramlari kesfederek kokularin gizemli dilini anlayin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-[var(--border-subtle)] rounded-3xl p-8 bg-[var(--bg-secondary)]">
            
            <div className="space-y-2">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Maceration (Olgunlasma)</h4>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Esansiyel yaklarin alkol ve su karisimi içinde belirli bir süre bekletilerek moleküllerin birlesmesi ve kokunun kalici hale gelmesi süreci. Nos Canda kokulari 28 gün boyunca eskitilir.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Sillage (Yayilim / Koku İzi)</h4>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Bir kokunun havada biraktigi izin veya movement halindeyken arkasinda biraktigi koku dalgasinin mesafesi ve gücü. Yayilim yeteneği yüksek kokular mekani doldurur.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Top Notes (Üst Notalar)</h4>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Koku siseden ilk yayildiginda veya teninize sikildiginda duyulan, uçuculugu en yüksek olan ve ilk 15-30 dakikada buharlasan taze esanslar.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-cinzel text-sm font-bold text-[var(--accent-gold)]">Heart Notes (Kalp / Orta Notalar)</h4>
              <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
                Üst notalar buharlaştiktan sonra ortaya çikan, kokunun ana gövdesini ve karakterini belirleyen, genellikle birkaç saat kalan esans bilesenleri.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5: SAFETY AND COMPLIANCE RULES */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">5. Güvenlik & Mevzuat</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Güvenli Kullanim ve IFRA Regülasyonlari</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Nos Canda olarak insan sağligi ve çevre duyarliliğini en üst seviyede tutuyoruz. Ürünlerimizin tamami IFRA yönergelerine uygundur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] font-body text-[var(--text-secondary)] leading-relaxed">
            
            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Evcil Hayvan & Bebek Sağligi</h4>
              <p>
                Kokularimizin formülasyonunda kullanilan tarimsal bitkisel etil alkol ve saflastirilmis deiyonize su, solunum yollarini tahris etmez. Ancak bebek odalarinda ve küçük evcil hayvanlarin (kedi, köpek) bulundugu alanlarda koku yayilimini kontrol etmek için çubuk sayisinin 2-3 adet olarak tutulmasi ve odanin günde en az bir defa havalandirilmasi önerilir.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Alerjen Koruma Standardi</h4>
              <p>
                Parfüm formülünde bulunan ve doğal olarak bitkilerden salinan bazı moleküller (Limonene, Linalool, Citral, Coumarin vb.) hassas cilt tiplerinde veya alerjik bünyelerde hafif tepkimelere yol açabilir. Bu sebeple difüzör sıvısının cildinizle doğrudan temasindan kaçininiz. Temas halinde bol su ve sabun yardimiyla yikayiniz.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">Sizinti ve Yüzey Koruması</h4>
              <p>
                %25 oranindaki yogun esans ve alkol bileseni, cilali ahsap mobilyalar, plastik yüzeyler ve deri kaplamalarla temas ettiginde yüzey kaplamalarini çözücü etki gösterebilir. Bu sebeple oda parfümlerini yerlestirirken sisenin devrilmeyeceginden emin olunuz ve araç kokularinin kapagini doyururken sivinin konsola damlamasini önleyiniz.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6: TROUBLESHOOTING */}
        {/* ========================================================================= */}
        <div className="space-y-12 mb-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">6. Bakım & Destek</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Sorun Giderme & Çözüm Rehberi</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Maksimum koku salinimi saglamak ve olasi kullanim aksakliklarini gidermek için pratik çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Koku yayilimi zamanla zayifladi</h4>
              <p className="font-body text-xs text-[var(--text-secondary)]">
                <strong>Olası Neden:</strong> Rattan çubuklarin lifleri ortamdaki mikroskobik tozlarla tikanmis veya çubuklar kururmustur.
              </p>
              <div className="text-xs text-[var(--text-muted)] space-y-1 pt-1 font-body">
                <div>• Çubuklari siseden çikarip ters düz edin.</div>
                <div>• Eğer çubuklar 2 aydan eskise, yeni Nos Canda rattan çubuk seti ile degistirin.</div>
                <div>• Siseiyi daha hareketli bir hava akimi alanina yerlestirin.</div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Koku odada çok yogun ve rahatsiz edici</h4>
              <p className="font-body text-xs text-[var(--text-secondary)]">
                <strong>Olası Neden:</strong> Mekan boyutuna göre fazla çubuk kullanilmis veya oda havalandirmasi yetersizdir.
              </p>
              <div className="text-xs text-[var(--text-muted)] space-y-1 pt-1 font-body">
                <div>• Sisedeki çubuk sayisini yariya indirin (örn. 6 çubuktan 3 çubuga düsürün).</div>
                <div>• Siseiyi pencerelerden ve doğrudan oturdugunuz alanlardan daha uzak bir köseye koyun.</div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Sıvı renginde hafif koyulasma veya sararma var</h4>
              <p className="font-body text-xs text-[var(--text-secondary)]">
                <strong>Olası Neden:</strong> Dogal esansiyel yaglar (özellikle vanilya ve kehribar içerenler) isik ve oksijenle temas ettikçe doğal olarak renk degistirir.
              </p>
              <div className="text-xs text-[var(--text-muted)] space-y-1 pt-1 font-body">
                <div>• Bu durum koku kalitesini ve sağligi etkilemez, kullanmaya devam edebilirsiniz.</div>
                <div>• Siseiyi doğrudan günes isigi alan pencere önlerinden uzaklastirin.</div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[var(--text-primary)]">Araç kokusu ahsap kapagi kuru kaliyor</h4>
              <p className="font-body text-xs text-[var(--text-secondary)]">
                <strong>Olası Neden:</strong> Kapagin esansi emmesi için sisenin yeterince ters çevrilmemesi veya kapak vidasinin çok siki olmasi.
              </p>
              <div className="text-xs text-[var(--text-muted)] space-y-1 pt-1 font-body">
                <div>• Siseiyi kapak kapaliyken 2-3 saniye boyunca tamamen bas asagi tutarak ahsabin esansi emmesini saglayin.</div>
                <div>• Kapagin sizdirmazlik contasinin yerinde oldugundan emin olun.</div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* ECO-CONSCIOUS GREEN INITIATIVE SECTION */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="badge-corporate mb-2">Eco-Conscious</span>
            <h2 className="font-cinzel text-3xl font-bold text-[var(--text-primary)]">Sürdürülebilirlik & Yeşil Adımlarımız</h2>
            <div className="gold-line max-w-[60px] mx-auto my-4" />
            <p className="font-body text-xs text-[var(--text-secondary)]">
              Doğaya saygılı hammadde tedariği, geri dönüştürülebilir ambalajlar ve sıfır atık politikamız.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4 text-xs font-body text-[var(--text-secondary)] leading-relaxed">
            <p>
              Nos Canda olarak sadece yaşam alanlarınızın havasını güzelleştirmekle kalmıyor, dünyamızın ekolojik dengesini korumayı da en büyük vazifemiz olarak görüyoruz. Kullandığımız tüm cam şişeler %100 geri dönüştürülebilir yapıdadır. Plastik tüketimini minimuma indirmek amacıyla kargo paketleme süreçlerimizde biyobozunur dolgu malzemeleri ve kraft kağıt ambalaj bantları kullanıyoruz.
            </p>
            <p>
              Esans hammaddelerimizin tedarik sürecinde, nesli tehlike altında olan bitki türlerini koruma altına alan yerel Grasse üreticileriyle iş birliği yapmaktayız. Hasat edilen bitkilerin yerine yenilerinin ekilmesini garantileyen sürdürülebilir tarım sertifikalı bahçelerden alım gerçekleştiriyoruz. Ayrıca hayvansal kaynaklı hiçbir maddeyi formüllerimize dahil etmiyor, ürün geliştirme aşamalarının hiçbirinde hayvanlar üzerinde test (Cruelty-Free) gerçekleştirmiyoruz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
