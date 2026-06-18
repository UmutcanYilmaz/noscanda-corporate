'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#10B981';
const ACCENT_BG = 'rgba(16, 185, 129, 0.06)';
const ACCENT_BORDER = 'rgba(16, 185, 129, 0.15)';

interface SecurityService {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: SecurityService) => {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-500 p-8">
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
  );
};
const SERVICES = [
  {
    title: 'Siber Güvenlik Modülü 1 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 1. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 2 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 2. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 3 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 3. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 4 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 4. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 5 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 5. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 6 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 6. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 7 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 7. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 8 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 8. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 9 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 9. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 10 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 10. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 11 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 11. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 12 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 12. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 13 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 13. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 14 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 14. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 15 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 15. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 16 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 16. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 17 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 17. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 18 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 18. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 19 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 19. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 20 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 20. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 21 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 21. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 22 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 22. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 23 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 23. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 24 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 24. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 25 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 25. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 26 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 26. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 27 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 27. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 28 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 28. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 29 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 29. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 30 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 30. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 31 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 31. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 32 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 32. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 33 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 33. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 34 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 34. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 35 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 35. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 36 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 36. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 37 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 37. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 38 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 38. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 39 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 39. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 40 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 40. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 41 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 41. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 42 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 42. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 43 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 43. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 44 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 44. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 45 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 45. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 46 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 46. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 47 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 47. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 48 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 48. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 49 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 49. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 50 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 50. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 51 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 51. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 52 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 52. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 53 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 53. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 54 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 54. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 55 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 55. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 56 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 56. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 57 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 57. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 58 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 58. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 59 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 59. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 60 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 60. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 61 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 61. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 62 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 62. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 63 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 63. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 64 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 64. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 65 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 65. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 66 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 66. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 67 (Mevzuat Uyumluluğu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 67. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 68 (Penetrasyon Analizi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 68. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 69 (Ağ Segmentasyonu)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 69. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" /></svg>
  },
  {
    title: 'Siber Güvenlik Modülü 70 (SIEM/SOC Denetimi)',
    description: 'Şirketinizin dijital varlıklarını siber saldırılara ve yetkisiz erişim teşebbüslerine karşı korumak için tasarlanan 70. teknik modülümüzdür. Sistemlerin 24/7 güvenliğini sağlar.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178" /></svg>
  }
];
const APPROACH_STEPS = [
  {
    step: '01',
    title: 'Güvenlik Yaklaşım Adımı 1',
    desc: 'Kurumsal siber güvenlik döngümüzün 1. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '02',
    title: 'Güvenlik Yaklaşım Adımı 2',
    desc: 'Kurumsal siber güvenlik döngümüzün 2. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '03',
    title: 'Güvenlik Yaklaşım Adımı 3',
    desc: 'Kurumsal siber güvenlik döngümüzün 3. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '04',
    title: 'Güvenlik Yaklaşım Adımı 4',
    desc: 'Kurumsal siber güvenlik döngümüzün 4. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '05',
    title: 'Güvenlik Yaklaşım Adımı 5',
    desc: 'Kurumsal siber güvenlik döngümüzün 5. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '06',
    title: 'Güvenlik Yaklaşım Adımı 6',
    desc: 'Kurumsal siber güvenlik döngümüzün 6. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '07',
    title: 'Güvenlik Yaklaşım Adımı 7',
    desc: 'Kurumsal siber güvenlik döngümüzün 7. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '08',
    title: 'Güvenlik Yaklaşım Adımı 8',
    desc: 'Kurumsal siber güvenlik döngümüzün 8. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '09',
    title: 'Güvenlik Yaklaşım Adımı 9',
    desc: 'Kurumsal siber güvenlik döngümüzün 9. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '10',
    title: 'Güvenlik Yaklaşım Adımı 10',
    desc: 'Kurumsal siber güvenlik döngümüzün 10. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '11',
    title: 'Güvenlik Yaklaşım Adımı 11',
    desc: 'Kurumsal siber güvenlik döngümüzün 11. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '12',
    title: 'Güvenlik Yaklaşım Adımı 12',
    desc: 'Kurumsal siber güvenlik döngümüzün 12. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '13',
    title: 'Güvenlik Yaklaşım Adımı 13',
    desc: 'Kurumsal siber güvenlik döngümüzün 13. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '14',
    title: 'Güvenlik Yaklaşım Adımı 14',
    desc: 'Kurumsal siber güvenlik döngümüzün 14. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '15',
    title: 'Güvenlik Yaklaşım Adımı 15',
    desc: 'Kurumsal siber güvenlik döngümüzün 15. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '16',
    title: 'Güvenlik Yaklaşım Adımı 16',
    desc: 'Kurumsal siber güvenlik döngümüzün 16. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '17',
    title: 'Güvenlik Yaklaşım Adımı 17',
    desc: 'Kurumsal siber güvenlik döngümüzün 17. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '18',
    title: 'Güvenlik Yaklaşım Adımı 18',
    desc: 'Kurumsal siber güvenlik döngümüzün 18. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '19',
    title: 'Güvenlik Yaklaşım Adımı 19',
    desc: 'Kurumsal siber güvenlik döngümüzün 19. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '20',
    title: 'Güvenlik Yaklaşım Adımı 20',
    desc: 'Kurumsal siber güvenlik döngümüzün 20. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '21',
    title: 'Güvenlik Yaklaşım Adımı 21',
    desc: 'Kurumsal siber güvenlik döngümüzün 21. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '22',
    title: 'Güvenlik Yaklaşım Adımı 22',
    desc: 'Kurumsal siber güvenlik döngümüzün 22. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '23',
    title: 'Güvenlik Yaklaşım Adımı 23',
    desc: 'Kurumsal siber güvenlik döngümüzün 23. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '24',
    title: 'Güvenlik Yaklaşım Adımı 24',
    desc: 'Kurumsal siber güvenlik döngümüzün 24. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '25',
    title: 'Güvenlik Yaklaşım Adımı 25',
    desc: 'Kurumsal siber güvenlik döngümüzün 25. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '26',
    title: 'Güvenlik Yaklaşım Adımı 26',
    desc: 'Kurumsal siber güvenlik döngümüzün 26. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '27',
    title: 'Güvenlik Yaklaşım Adımı 27',
    desc: 'Kurumsal siber güvenlik döngümüzün 27. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '28',
    title: 'Güvenlik Yaklaşım Adımı 28',
    desc: 'Kurumsal siber güvenlik döngümüzün 28. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '29',
    title: 'Güvenlik Yaklaşım Adımı 29',
    desc: 'Kurumsal siber güvenlik döngümüzün 29. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '30',
    title: 'Güvenlik Yaklaşım Adımı 30',
    desc: 'Kurumsal siber güvenlik döngümüzün 30. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '31',
    title: 'Güvenlik Yaklaşım Adımı 31',
    desc: 'Kurumsal siber güvenlik döngümüzün 31. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '32',
    title: 'Güvenlik Yaklaşım Adımı 32',
    desc: 'Kurumsal siber güvenlik döngümüzün 32. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '33',
    title: 'Güvenlik Yaklaşım Adımı 33',
    desc: 'Kurumsal siber güvenlik döngümüzün 33. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '34',
    title: 'Güvenlik Yaklaşım Adımı 34',
    desc: 'Kurumsal siber güvenlik döngümüzün 34. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '35',
    title: 'Güvenlik Yaklaşım Adımı 35',
    desc: 'Kurumsal siber güvenlik döngümüzün 35. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '36',
    title: 'Güvenlik Yaklaşım Adımı 36',
    desc: 'Kurumsal siber güvenlik döngümüzün 36. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '37',
    title: 'Güvenlik Yaklaşım Adımı 37',
    desc: 'Kurumsal siber güvenlik döngümüzün 37. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '38',
    title: 'Güvenlik Yaklaşım Adımı 38',
    desc: 'Kurumsal siber güvenlik döngümüzün 38. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '39',
    title: 'Güvenlik Yaklaşım Adımı 39',
    desc: 'Kurumsal siber güvenlik döngümüzün 39. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '40',
    title: 'Güvenlik Yaklaşım Adımı 40',
    desc: 'Kurumsal siber güvenlik döngümüzün 40. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '41',
    title: 'Güvenlik Yaklaşım Adımı 41',
    desc: 'Kurumsal siber güvenlik döngümüzün 41. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '42',
    title: 'Güvenlik Yaklaşım Adımı 42',
    desc: 'Kurumsal siber güvenlik döngümüzün 42. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '43',
    title: 'Güvenlik Yaklaşım Adımı 43',
    desc: 'Kurumsal siber güvenlik döngümüzün 43. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '44',
    title: 'Güvenlik Yaklaşım Adımı 44',
    desc: 'Kurumsal siber güvenlik döngümüzün 44. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '45',
    title: 'Güvenlik Yaklaşım Adımı 45',
    desc: 'Kurumsal siber güvenlik döngümüzün 45. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '46',
    title: 'Güvenlik Yaklaşım Adımı 46',
    desc: 'Kurumsal siber güvenlik döngümüzün 46. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '47',
    title: 'Güvenlik Yaklaşım Adımı 47',
    desc: 'Kurumsal siber güvenlik döngümüzün 47. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '48',
    title: 'Güvenlik Yaklaşım Adımı 48',
    desc: 'Kurumsal siber güvenlik döngümüzün 48. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '49',
    title: 'Güvenlik Yaklaşım Adımı 49',
    desc: 'Kurumsal siber güvenlik döngümüzün 49. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '50',
    title: 'Güvenlik Yaklaşım Adımı 50',
    desc: 'Kurumsal siber güvenlik döngümüzün 50. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '51',
    title: 'Güvenlik Yaklaşım Adımı 51',
    desc: 'Kurumsal siber güvenlik döngümüzün 51. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '52',
    title: 'Güvenlik Yaklaşım Adımı 52',
    desc: 'Kurumsal siber güvenlik döngümüzün 52. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '53',
    title: 'Güvenlik Yaklaşım Adımı 53',
    desc: 'Kurumsal siber güvenlik döngümüzün 53. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '54',
    title: 'Güvenlik Yaklaşım Adımı 54',
    desc: 'Kurumsal siber güvenlik döngümüzün 54. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '55',
    title: 'Güvenlik Yaklaşım Adımı 55',
    desc: 'Kurumsal siber güvenlik döngümüzün 55. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '56',
    title: 'Güvenlik Yaklaşım Adımı 56',
    desc: 'Kurumsal siber güvenlik döngümüzün 56. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '57',
    title: 'Güvenlik Yaklaşım Adımı 57',
    desc: 'Kurumsal siber güvenlik döngümüzün 57. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '58',
    title: 'Güvenlik Yaklaşım Adımı 58',
    desc: 'Kurumsal siber güvenlik döngümüzün 58. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '59',
    title: 'Güvenlik Yaklaşım Adımı 59',
    desc: 'Kurumsal siber güvenlik döngümüzün 59. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  },
  {
    step: '60',
    title: 'Güvenlik Yaklaşım Adımı 60',
    desc: 'Kurumsal siber güvenlik döngümüzün 60. aşamasında, sistemlerin kararlılığını test ediyor, bulguları raporluyor ve proaktif koruma duvarlarını anlık güncelliyoruz.'
  }
];
const FAQS = [
  {
    q: 'Güvenlik Sistemi Soru 1: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 2: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 3: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 4: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 5: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 6: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 7: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 8: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 9: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 10: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 11: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 12: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 13: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 14: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 15: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 16: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 17: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 18: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 19: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 20: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 21: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 22: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 23: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 24: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 25: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 26: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 27: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 28: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 29: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 30: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 31: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 32: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 33: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 34: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 35: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 36: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 37: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 38: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 39: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 40: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 41: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 42: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 43: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 44: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 45: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 46: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 47: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 48: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 49: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 50: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 51: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 52: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 53: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 54: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 55: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 56: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 57: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 58: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 59: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
  },
  {
    q: 'Güvenlik Sistemi Soru 60: Şirket verilerimizi olası siber saldırılara karşı nasıl güvence altına alıyorsunuz?',
    a: 'Verilerinizi dış ağlara kapalı izole sanal ağlar (sandbox) altında topluyor, tüm iç bağlantıları iki adımlı kimlik doğrulamalarla (2FA) sınırlandırıyor ve 24/7 çalışan SIEM sistemlerimizle şüpheli hareketleri anında engelleyerek kurumsal güvenliğinizi en üst düzeyde tutuyoruz.'
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

      {/* Approach Steps */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Siber Güvenlik Yaklaşımımız ve Metodolojimiz
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Çok aşamalı güvenlik metodolojimizle organizasyonunuzu kapsamlı ve sürdürülebilir şekilde koruyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {APPROACH_STEPS.map((item, idx) => (
              <ScrollReveal key={idx} direction="left" distance={30} delay={idx * 0.03}>
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-500 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-200/50">
        <div className="max-w-[950px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Siber Güvenlik Rehberi & SSS
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.03}>
                <div className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-950 mb-3 flex items-start gap-3">
                    <span className="text-emerald-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-emerald-500/20">
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
              Güvenlik Danışmanlığı İçin <span style={{ color: ACCENT }}>İletişime</span> Geçin
            </h2>
            <p className="font-body text-neutral-400 leading-relaxed mb-10 max-w-lg mx-auto">
              Ücretsiz güvenlik ön değerlendirmesi için bizimle iletişime geçin.
              Organizasyonunuzun risk profilini birlikte belirleyelim.
            </p>
            <Link href="/iletisim" className="inline-flex px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-300" style={{ background: ACCENT }}>
              Ücretsiz Değerlendirme Talep Edin
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
