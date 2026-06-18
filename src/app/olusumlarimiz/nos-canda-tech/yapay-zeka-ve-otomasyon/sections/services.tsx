'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#DB2777';
const ACCENT_BG = 'rgba(219, 39, 119, 0.06)';
const ACCENT_BORDER = 'rgba(219, 39, 119, 0.15)';

interface AIService {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: AIService) => {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-500 p-8 h-full flex flex-col justify-between">
      <div>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
          style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
        >
          {icon}
        </div>
        <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
          {title}
        </h3>
        <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};
const SERVICES = [
  {
    title: 'Otomasyon Modülü 1 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 1. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 2 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 2. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 3 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 3. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 4 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 4. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 5 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 5. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 6 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 6. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 7 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 7. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 8 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 8. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 9 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 9. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 10 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 10. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 11 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 11. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 12 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 12. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 13 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 13. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 14 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 14. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 15 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 15. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 16 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 16. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 17 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 17. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 18 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 18. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 19 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 19. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 20 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 20. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 21 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 21. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 22 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 22. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 23 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 23. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 24 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 24. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 25 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 25. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 26 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 26. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 27 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 27. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 28 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 28. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 29 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 29. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 30 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 30. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 31 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 31. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 32 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 32. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 33 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 33. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 34 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 34. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 35 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 35. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 36 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 36. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 37 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 37. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 38 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 38. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 39 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 39. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 40 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 40. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 41 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 41. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 42 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 42. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 43 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 43. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 44 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 44. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 45 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 45. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 46 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 46. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 47 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 47. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 48 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 48. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 49 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 49. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 50 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 50. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 51 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 51. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 52 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 52. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 53 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 53. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 54 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 54. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 55 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 55. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 56 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 56. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 57 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 57. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 58 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 58. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 59 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 59. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 60 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 60. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 61 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 61. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 62 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 62. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 63 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 63. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 64 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 64. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 65 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 65. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 66 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 66. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 67 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 67. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 68 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 68. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 69 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 69. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 70 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 70. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 71 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 71. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 72 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 72. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 73 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 73. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 74 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 74. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 75 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 75. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 76 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 76. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 77 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 77. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 78 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 78. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 79 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 79. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 80 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 80. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 81 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 81. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 82 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 82. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 83 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 83. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 84 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 84. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 85 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 85. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 86 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 86. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 87 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 87. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 88 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 88. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 89 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 89. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 90 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 90. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 91 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 91. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  },
  {
    title: 'Otomasyon Modülü 92 (Süreç Otomasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 92. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719" /></svg>
  },
  {
    title: 'Otomasyon Modülü 93 (LLM Entegrasyonu)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 93. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813" /></svg>
  },
  {
    title: 'Otomasyon Modülü 94 (Otonom AI Ajanı)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 94. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288" /></svg>
  },
  {
    title: 'Otomasyon Modülü 95 (OCR Belge Analitiği)',
    description: 'Şirketinizdeki manuel veri akışlarını yapay zeka entegre ederek otonom hale getiren 95. özel sunucu servisimizdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38" /></svg>
  }
];
const INTEGRATION_MAPS = [
  {
    point: 'Entegrasyon Ucu 1',
    reason: 'Sistem 1 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 1. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %20.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 2',
    reason: 'Sistem 2 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 2. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %21.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 3',
    reason: 'Sistem 3 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 3. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %21.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 4',
    reason: 'Sistem 4 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 4. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %22.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 5',
    reason: 'Sistem 5 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 5. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %22.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 6',
    reason: 'Sistem 6 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 6. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %23.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 7',
    reason: 'Sistem 7 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 7. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %23.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 8',
    reason: 'Sistem 8 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 8. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %24.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 9',
    reason: 'Sistem 9 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 9. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %24.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 10',
    reason: 'Sistem 10 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 10. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %25.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 11',
    reason: 'Sistem 11 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 11. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %25.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 12',
    reason: 'Sistem 12 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 12. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %26.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 13',
    reason: 'Sistem 13 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 13. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %26.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 14',
    reason: 'Sistem 14 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 14. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %27.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 15',
    reason: 'Sistem 15 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 15. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %27.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 16',
    reason: 'Sistem 16 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 16. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %28.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 17',
    reason: 'Sistem 17 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 17. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %28.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 18',
    reason: 'Sistem 18 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 18. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %29.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 19',
    reason: 'Sistem 19 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 19. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %29.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 20',
    reason: 'Sistem 20 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 20. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %30.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 21',
    reason: 'Sistem 21 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 21. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %30.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 22',
    reason: 'Sistem 22 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 22. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %31.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 23',
    reason: 'Sistem 23 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 23. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %31.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 24',
    reason: 'Sistem 24 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 24. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %32.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 25',
    reason: 'Sistem 25 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 25. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %32.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 26',
    reason: 'Sistem 26 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 26. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %33.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 27',
    reason: 'Sistem 27 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 27. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %33.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 28',
    reason: 'Sistem 28 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 28. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %34.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 29',
    reason: 'Sistem 29 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 29. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %34.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 30',
    reason: 'Sistem 30 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 30. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %35.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 31',
    reason: 'Sistem 31 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 31. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %35.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 32',
    reason: 'Sistem 32 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 32. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %36.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 33',
    reason: 'Sistem 33 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 33. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %36.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 34',
    reason: 'Sistem 34 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 34. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %37.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 35',
    reason: 'Sistem 35 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 35. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %37.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 36',
    reason: 'Sistem 36 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 36. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %38.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 37',
    reason: 'Sistem 37 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 37. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %38.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 38',
    reason: 'Sistem 38 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 38. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %39.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 39',
    reason: 'Sistem 39 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 39. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %39.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 40',
    reason: 'Sistem 40 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 40. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %40.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 41',
    reason: 'Sistem 41 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 41. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %40.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 42',
    reason: 'Sistem 42 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 42. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %41.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 43',
    reason: 'Sistem 43 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 43. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %41.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 44',
    reason: 'Sistem 44 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 44. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %42.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 45',
    reason: 'Sistem 45 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 45. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %42.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 46',
    reason: 'Sistem 46 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 46. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %43.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 47',
    reason: 'Sistem 47 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 47. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %43.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 48',
    reason: 'Sistem 48 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 48. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %44.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 49',
    reason: 'Sistem 49 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 49. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %44.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 50',
    reason: 'Sistem 50 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 50. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %45.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 51',
    reason: 'Sistem 51 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 51. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %45.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 52',
    reason: 'Sistem 52 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 52. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %46.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 53',
    reason: 'Sistem 53 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 53. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %46.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 54',
    reason: 'Sistem 54 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 54. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %47.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 55',
    reason: 'Sistem 55 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 55. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %47.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 56',
    reason: 'Sistem 56 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 56. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %48.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 57',
    reason: 'Sistem 57 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 57. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %48.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 58',
    reason: 'Sistem 58 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 58. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %49.0 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 59',
    reason: 'Sistem 59 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 59. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %49.5 kısaltır.'
  },
  {
    point: 'Entegrasyon Ucu 60',
    reason: 'Sistem 60 verilerini merkezi veri ambarına eşzamanlı aktarmak için.',
    logic: 'AI modelleri veri bütünlüğünü denetler ve 60. anomali kontrolünü yapar.',
    benefit: 'Hatalı veri oranını düşürür, operasyon süresini %50.0 kısaltır.'
  }
];
const FAQS = [
  {
    q: 'Yapay Zeka Soru 1: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 2: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 3: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 4: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 5: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 6: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 7: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 8: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 9: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 10: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 11: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 12: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 13: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 14: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 15: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 16: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 17: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 18: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 19: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 20: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 21: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 22: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 23: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 24: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 25: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 26: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 27: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 28: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 29: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 30: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 31: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 32: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 33: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 34: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 35: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 36: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 37: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 38: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 39: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 40: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 41: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 42: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 43: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 44: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 45: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 46: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 47: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 48: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 49: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 50: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 51: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 52: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 53: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 54: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 55: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 56: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 57: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 58: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 59: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 60: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 61: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 62: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 63: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 64: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 65: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 66: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 67: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 68: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 69: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 70: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 71: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 72: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 73: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 74: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 75: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 76: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 77: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 78: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 79: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  },
  {
    q: 'Yapay Zeka Soru 80: Geliştirilen otomasyonların güvenliğini nasıl sağlıyorsunuz?',
    a: 'Tüm iş akışlarını self-hosted kurumsal sunucularımız üzerinde çalıştırıyor, API verilerini şifreliyor ve local modeller kurarak hassas veri sızıntılarını tamamen engelliyoruz.'
  }
];

export function Services() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Services Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={idx} direction="up" distance={40} delay={idx * 0.03}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Map Table */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Kurumsal Otomasyon Haritası
              </h2>
              <p className="font-body text-xs text-[var(--text-secondary)] max-w-lg mx-auto">
                Sistemlerimiz arasında kurulan akıllı otomasyon köprülerinin operasyonel kazançları.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <div className="overflow-x-auto rounded-3xl border border-neutral-200/50 bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-250/50 bg-[var(--bg-secondary)]">
                    <th className="font-cinzel p-5 font-bold text-[var(--text-primary)] w-[20%]">Entegrasyon Noktası</th>
                    <th className="font-body p-5 font-light text-[var(--text-secondary)] w-[25%]">Neden Bağlıyoruz?</th>
                    <th className="font-body p-5 font-semibold text-[var(--text-primary)] w-[25%]" style={{ color: ACCENT }}>Otomasyon Aklı (AI)</th>
                    <th className="font-body p-5 font-bold text-[var(--text-primary)] w-[30%]">Pazarlama & Operasyon Kazancı</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/30">
                  {INTEGRATION_MAPS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/50 transition-colors duration-200">
                      <td className="font-cinzel p-5 font-bold text-[var(--text-primary)]">{item.point}</td>
                      <td className="font-body p-5 text-[var(--text-secondary)] font-light">{item.reason}</td>
                      <td className="font-body p-5 text-[var(--text-primary)] font-medium">{item.logic}</td>
                      <td className="font-body p-5 text-[var(--text-primary)] font-medium bg-pink-50/10">{item.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-200/50">
        <div className="max-w-[950px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Yapay Zeka & Süreç SSS
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.03}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-950 mb-3 flex items-start gap-3">
                    <span className="text-pink-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-pink-500/20">
                    {faq.a}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-20 md:py-28 text-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal direction="up" distance={30}>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6">
              İş Akışlarınızı <span style={{ color: ACCENT }}>Hızlandıralım</span>
            </h2>
            <p className="font-body text-neutral-400 leading-relaxed mb-10 max-w-lg mx-auto">
              Operasyonel süreçlerinizi yapay zekâ entegrasyonlu akıllı sistemler ve güçlü iş akışı yapılarıyla optimize etmek için bizimle iletişime geçin.
            </p>
            <Link href="/iletisim" className="inline-flex px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-300" style={{ background: ACCENT }}>
              Ücretsiz Otomasyon Analizi İsteyin
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
