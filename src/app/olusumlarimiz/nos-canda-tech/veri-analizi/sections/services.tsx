'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#8B5CF6';
const ACCENT_BG = 'rgba(139, 92, 246, 0.06)';
const ACCENT_BORDER = 'rgba(139, 92, 246, 0.15)';

interface DataService {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: DataService) => {
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
    title: 'Veri Çözümü Modülü 1 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 1. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 2 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 2. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 3 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 3. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 4 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 4. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 5 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 5. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 6 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 6. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 7 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 7. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 8 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 8. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 9 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 9. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 10 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 10. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 11 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 11. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 12 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 12. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 13 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 13. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 14 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 14. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 15 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 15. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 16 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 16. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 17 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 17. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 18 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 18. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 19 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 19. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 20 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 20. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 21 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 21. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 22 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 22. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 23 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 23. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 24 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 24. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 25 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 25. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 26 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 26. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 27 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 27. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 28 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 28. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 29 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 29. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 30 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 30. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 31 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 31. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 32 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 32. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 33 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 33. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 34 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 34. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 35 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 35. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 36 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 36. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 37 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 37. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 38 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 38. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 39 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 39. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 40 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 40. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 41 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 41. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 42 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 42. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 43 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 43. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 44 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 44. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 45 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 45. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 46 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 46. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 47 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 47. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 48 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 48. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 49 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 49. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 50 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 50. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 51 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 51. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 52 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 52. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 53 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 53. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 54 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 54. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 55 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 55. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 56 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 56. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 57 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 57. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 58 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 58. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 59 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 59. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 60 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 60. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 61 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 61. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 62 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 62. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 63 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 63. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 64 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 64. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 65 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 65. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 66 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 66. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 67 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 67. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 68 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 68. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 69 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 69. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 70 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 70. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 71 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 71. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 72 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 72. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 73 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 73. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 74 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 74. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 75 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 75. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 76 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 76. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 77 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 77. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 78 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 78. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 79 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 79. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 80 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 80. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 81 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 81. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 82 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 82. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 83 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 83. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 84 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 84. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 85 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 85. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 86 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 86. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 87 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 87. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 88 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 88. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 89 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 89. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 90 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 90. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 91 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 91. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 92 (İş Zekası (BI))',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 92. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 93 (Makine Öğrenmesi)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 93. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 94 (Veri Mühendisliği)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 94. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" /></svg>
  },
  {
    title: 'Veri Çözümü Modülü 95 (KPI Raporlama)',
    description: 'İşletmenizin büyük veri altyapısı üzerinde çalışan, 95. performanslı veri analitiği ve raporlama modülümüzdir.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9" /></svg>
  }
];
const CAPABILITIES = [
  "Veri Yetkinliği 1" ,
  "Veri Yetkinliği 2" ,
  "Veri Yetkinliği 3" ,
  "Veri Yetkinliği 4" ,
  "Veri Yetkinliği 5" ,
  "Veri Yetkinliği 6" ,
  "Veri Yetkinliği 7" ,
  "Veri Yetkinliği 8" ,
  "Veri Yetkinliği 9" ,
  "Veri Yetkinliği 10" ,
  "Veri Yetkinliği 11" ,
  "Veri Yetkinliği 12" ,
  "Veri Yetkinliği 13" ,
  "Veri Yetkinliği 14" ,
  "Veri Yetkinliği 15" ,
  "Veri Yetkinliği 16" ,
  "Veri Yetkinliği 17" ,
  "Veri Yetkinliği 18" ,
  "Veri Yetkinliği 19" ,
  "Veri Yetkinliği 20" ,
  "Veri Yetkinliği 21" ,
  "Veri Yetkinliği 22" ,
  "Veri Yetkinliği 23" ,
  "Veri Yetkinliği 24" ,
  "Veri Yetkinliği 25" ,
  "Veri Yetkinliği 26" ,
  "Veri Yetkinliği 27" ,
  "Veri Yetkinliği 28" ,
  "Veri Yetkinliği 29" ,
  "Veri Yetkinliği 30" ,
  "Veri Yetkinliği 31" ,
  "Veri Yetkinliği 32" ,
  "Veri Yetkinliği 33" ,
  "Veri Yetkinliği 34" ,
  "Veri Yetkinliği 35" ,
  "Veri Yetkinliği 36" ,
  "Veri Yetkinliği 37" ,
  "Veri Yetkinliği 38" ,
  "Veri Yetkinliği 39" ,
  "Veri Yetkinliği 40" ,
  "Veri Yetkinliği 41" ,
  "Veri Yetkinliği 42" ,
  "Veri Yetkinliği 43" ,
  "Veri Yetkinliği 44" ,
  "Veri Yetkinliği 45" ,
  "Veri Yetkinliği 46" ,
  "Veri Yetkinliği 47" ,
  "Veri Yetkinliği 48" ,
  "Veri Yetkinliği 49" ,
  "Veri Yetkinliği 50" ,
  "Veri Yetkinliği 51" ,
  "Veri Yetkinliği 52" ,
  "Veri Yetkinliği 53" ,
  "Veri Yetkinliği 54" ,
  "Veri Yetkinliği 55" ,
  "Veri Yetkinliği 56" ,
  "Veri Yetkinliği 57" ,
  "Veri Yetkinliği 58" ,
  "Veri Yetkinliği 59" ,
  "Veri Yetkinliği 60" ,
  "Veri Yetkinliği 61" ,
  "Veri Yetkinliği 62" ,
  "Veri Yetkinliği 63" ,
  "Veri Yetkinliği 64" ,
  "Veri Yetkinliği 65" ,
  "Veri Yetkinliği 66" ,
  "Veri Yetkinliği 67" ,
  "Veri Yetkinliği 68" ,
  "Veri Yetkinliği 69" ,
  "Veri Yetkinliği 70" ,
  "Veri Yetkinliği 71" ,
  "Veri Yetkinliği 72" ,
  "Veri Yetkinliği 73" ,
  "Veri Yetkinliği 74" ,
  "Veri Yetkinliği 75" ,
  "Veri Yetkinliği 76" ,
  "Veri Yetkinliği 77" ,
  "Veri Yetkinliği 78" ,
  "Veri Yetkinliği 79" ,
  "Veri Yetkinliği 80" ,
  "Veri Yetkinliği 81" ,
  "Veri Yetkinliği 82" ,
  "Veri Yetkinliği 83" ,
  "Veri Yetkinliği 84" ,
  "Veri Yetkinliği 85" 
];
const FAQS = [
  {
    q: 'Veri Analizi Soru 1: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 2: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 3: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 4: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 5: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 6: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 7: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 8: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 9: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 10: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 11: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 12: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 13: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 14: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 15: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 16: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 17: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 18: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 19: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 20: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 21: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 22: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 23: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 24: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 25: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 26: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 27: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 28: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 29: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 30: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 31: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 32: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 33: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 34: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 35: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 36: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 37: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 38: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 39: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 40: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 41: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 42: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 43: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 44: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 45: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 46: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 47: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 48: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 49: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 50: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 51: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 52: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 53: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 54: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 55: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 56: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 57: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 58: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 59: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 60: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 61: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 62: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 63: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 64: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 65: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 66: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 67: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 68: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 69: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 70: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 71: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 72: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 73: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 74: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 75: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 76: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 77: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 78: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 79: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 80: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 81: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 82: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 83: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 84: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  },
  {
    q: 'Veri Analizi Soru 85: Şirket verilerimizi raporlarken veri güvenliğini nasıl sağlıyoruz?',
    a: 'Veri analiz sistemlerimizde rol bazlı yetkilendirmeler, anonimleştirme algoritmaları ve tamamen şifrelenmiş veri aktarım kanalları (SSL/TLS) kullanarak hassas kurumsal verilerinizi dış yetkisiz erişimlere karşı koruyoruz.'
  }
];

export function Services() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Services Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Veri Hizmet Modüllerimiz
              </h2>
            </div>
          </ScrollReveal>

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

      {/* Capabilities */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Teknoloji Yetkinliklerimiz
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Endüstri standardı araçlar ve açık kaynak ekosistemiyle kurumsal düzeyde veri çözümleri sunuyoruz.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {CAPABILITIES.map((cap, idx) => (
                <span
                  key={idx}
                  className="text-[0.7rem] font-gothic tracking-wider uppercase px-5 py-2.5 rounded-full border bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ borderColor: ACCENT_BORDER, color: ACCENT }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-200/50">
        <div className="max-w-[950px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Veri Analizi & BI SSS
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.03}>
                <div className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-950 mb-3 flex items-start gap-3">
                    <span className="text-violet-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-violet-500/20">
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
              Verilerinizin <span style={{ color: ACCENT }}>Potansiyelini</span> Keşfedin
            </h2>
            <p className="font-body text-neutral-400 leading-relaxed mb-10 max-w-lg mx-auto">
              Veri stratejinizi ve analitik ihtiyaçlarınızı birlikte değerlendirelim.
              İlk keşif toplantısı ücretsizdir.
            </p>
            <Link href="/iletisim" className="inline-flex px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-300" style={{ background: ACCENT }}>
              Veri Stratejinizi Konuşalım
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
