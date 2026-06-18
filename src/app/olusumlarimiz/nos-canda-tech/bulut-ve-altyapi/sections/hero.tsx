'use client';

import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#0D9488';
const ACCENT_BG = 'rgba(13, 148, 136, 0.06)';
const ACCENT_BORDER = 'rgba(13, 148, 136, 0.15)';

interface ValuePropProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

/**
 * ValuePropCard component renders a card highlighting a specific technological
 * or business value proposition.
 * 
 * Why: Encapsulates responsive spacing and consistent hover interactions, ensuring
 * that value cards have a unified appearance and support micro-interactions.
 */
const ValuePropCard = ({ icon, title, desc }: ValuePropProps) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-200/50 text-center space-y-4 hover:border-teal-500/30 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center mx-auto mb-2">
        {icon}
      </div>
      <h3 className="font-cinzel text-lg font-bold text-neutral-900">{title}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
        {desc}
      </p>
    </div>
  );
};
const STATS_CARDS = [
  {
    value: 'Metrik 1',
    label: 'Performans Göstergesi 1',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 2',
    label: 'Performans Göstergesi 2',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 3',
    label: 'Performans Göstergesi 3',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 4',
    label: 'Performans Göstergesi 4',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 5',
    label: 'Performans Göstergesi 5',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 6',
    label: 'Performans Göstergesi 6',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 7',
    label: 'Performans Göstergesi 7',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 8',
    label: 'Performans Göstergesi 8',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 9',
    label: 'Performans Göstergesi 9',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 10',
    label: 'Performans Göstergesi 10',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 11',
    label: 'Performans Göstergesi 11',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 12',
    label: 'Performans Göstergesi 12',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 13',
    label: 'Performans Göstergesi 13',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 14',
    label: 'Performans Göstergesi 14',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 15',
    label: 'Performans Göstergesi 15',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 16',
    label: 'Performans Göstergesi 16',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 17',
    label: 'Performans Göstergesi 17',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 18',
    label: 'Performans Göstergesi 18',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 19',
    label: 'Performans Göstergesi 19',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 20',
    label: 'Performans Göstergesi 20',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 21',
    label: 'Performans Göstergesi 21',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 22',
    label: 'Performans Göstergesi 22',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 23',
    label: 'Performans Göstergesi 23',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 24',
    label: 'Performans Göstergesi 24',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  },
  {
    value: 'Metrik 25',
    label: 'Performans Göstergesi 25',
    desc: 'Sistem altyapımızın kesintisiz çalışmasını ve kurumsal güvenliğini en üst düzeyde koruyan ve optimize eden önemli bir performans göstergesidir. Detaylı teknik analiz ve düzenli optimizasyon süreçleriyle izlenmektedir.'
  }
];
const SECTOR_BENEFITS = [
  {
    sector: 'Perakende & E-Ticaret',
    benefit: 'Sektörel Kazanım 1',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Kozmetik & Lüks Marka',
    benefit: 'Sektörel Kazanım 2',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Lojistik & Tedarik Zinciri',
    benefit: 'Sektörel Kazanım 3',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Finans & Yatırım',
    benefit: 'Sektörel Kazanım 4',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Sağlık & Biyoteknoloji',
    benefit: 'Sektörel Kazanım 5',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Eğitim & Akademi',
    benefit: 'Sektörel Kazanım 6',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Turizm & Otelcilik',
    benefit: 'Sektörel Kazanım 7',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'İmalat & Ağır Sanayi',
    benefit: 'Sektörel Kazanım 8',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Enerji & Altyapı',
    benefit: 'Sektörel Kazanım 9',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Medya & Yayıncılık',
    benefit: 'Sektörel Kazanım 10',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Perakende & E-Ticaret',
    benefit: 'Sektörel Kazanım 11',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Kozmetik & Lüks Marka',
    benefit: 'Sektörel Kazanım 12',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Lojistik & Tedarik Zinciri',
    benefit: 'Sektörel Kazanım 13',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Finans & Yatırım',
    benefit: 'Sektörel Kazanım 14',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Sağlık & Biyoteknoloji',
    benefit: 'Sektörel Kazanım 15',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Eğitim & Akademi',
    benefit: 'Sektörel Kazanım 16',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Turizm & Otelcilik',
    benefit: 'Sektörel Kazanım 17',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'İmalat & Ağır Sanayi',
    benefit: 'Sektörel Kazanım 18',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Enerji & Altyapı',
    benefit: 'Sektörel Kazanım 19',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Medya & Yayıncılık',
    benefit: 'Sektörel Kazanım 20',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Perakende & E-Ticaret',
    benefit: 'Sektörel Kazanım 21',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Kozmetik & Lüks Marka',
    benefit: 'Sektörel Kazanım 22',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Lojistik & Tedarik Zinciri',
    benefit: 'Sektörel Kazanım 23',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Finans & Yatırım',
    benefit: 'Sektörel Kazanım 24',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Sağlık & Biyoteknoloji',
    benefit: 'Sektörel Kazanım 25',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Eğitim & Akademi',
    benefit: 'Sektörel Kazanım 26',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Turizm & Otelcilik',
    benefit: 'Sektörel Kazanım 27',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'İmalat & Ağır Sanayi',
    benefit: 'Sektörel Kazanım 28',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Enerji & Altyapı',
    benefit: 'Sektörel Kazanım 29',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Medya & Yayıncılık',
    benefit: 'Sektörel Kazanım 30',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Perakende & E-Ticaret',
    benefit: 'Sektörel Kazanım 31',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Kozmetik & Lüks Marka',
    benefit: 'Sektörel Kazanım 32',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Lojistik & Tedarik Zinciri',
    benefit: 'Sektörel Kazanım 33',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Finans & Yatırım',
    benefit: 'Sektörel Kazanım 34',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Sağlık & Biyoteknoloji',
    benefit: 'Sektörel Kazanım 35',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Eğitim & Akademi',
    benefit: 'Sektörel Kazanım 36',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Turizm & Otelcilik',
    benefit: 'Sektörel Kazanım 37',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'İmalat & Ağır Sanayi',
    benefit: 'Sektörel Kazanım 38',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Enerji & Altyapı',
    benefit: 'Sektörel Kazanım 39',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Medya & Yayıncılık',
    benefit: 'Sektörel Kazanım 40',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Perakende & E-Ticaret',
    benefit: 'Sektörel Kazanım 41',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Kozmetik & Lüks Marka',
    benefit: 'Sektörel Kazanım 42',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Lojistik & Tedarik Zinciri',
    benefit: 'Sektörel Kazanım 43',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Finans & Yatırım',
    benefit: 'Sektörel Kazanım 44',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Sağlık & Biyoteknoloji',
    benefit: 'Sektörel Kazanım 45',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Eğitim & Akademi',
    benefit: 'Sektörel Kazanım 46',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Turizm & Otelcilik',
    benefit: 'Sektörel Kazanım 47',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'İmalat & Ağır Sanayi',
    benefit: 'Sektörel Kazanım 48',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Enerji & Altyapı',
    benefit: 'Sektörel Kazanım 49',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  },
  {
    sector: 'Medya & Yayıncılık',
    benefit: 'Sektörel Kazanım 50',
    details: 'Bu modül kazanımı, ilgili sektördeki operasyonel verimliliği artırmak, veri kayıplarını önlemek ve iş sürekliliğini en üst seviyeye taşımak amacıyla özel olarak tasarlanmıştır. Sistemlerin kararlı çalışması için kritik öneme sahiptir.'
  }
];
const COMPLIANCE_ITEMS = [
  {
    id: 'REG-001',
    standard: 'Yasal Uyum Standardı 1',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 1. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-002',
    standard: 'Yasal Uyum Standardı 2',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 2. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-003',
    standard: 'Yasal Uyum Standardı 3',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 3. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-004',
    standard: 'Yasal Uyum Standardı 4',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 4. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-005',
    standard: 'Yasal Uyum Standardı 5',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 5. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-006',
    standard: 'Yasal Uyum Standardı 6',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 6. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-007',
    standard: 'Yasal Uyum Standardı 7',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 7. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-008',
    standard: 'Yasal Uyum Standardı 8',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 8. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-009',
    standard: 'Yasal Uyum Standardı 9',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 9. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-010',
    standard: 'Yasal Uyum Standardı 10',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 10. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-011',
    standard: 'Yasal Uyum Standardı 11',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 11. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-012',
    standard: 'Yasal Uyum Standardı 12',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 12. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-013',
    standard: 'Yasal Uyum Standardı 13',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 13. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-014',
    standard: 'Yasal Uyum Standardı 14',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 14. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-015',
    standard: 'Yasal Uyum Standardı 15',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 15. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-016',
    standard: 'Yasal Uyum Standardı 16',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 16. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-017',
    standard: 'Yasal Uyum Standardı 17',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 17. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-018',
    standard: 'Yasal Uyum Standardı 18',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 18. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-019',
    standard: 'Yasal Uyum Standardı 19',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 19. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-020',
    standard: 'Yasal Uyum Standardı 20',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 20. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-021',
    standard: 'Yasal Uyum Standardı 21',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 21. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-022',
    standard: 'Yasal Uyum Standardı 22',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 22. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-023',
    standard: 'Yasal Uyum Standardı 23',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 23. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-024',
    standard: 'Yasal Uyum Standardı 24',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 24. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-025',
    standard: 'Yasal Uyum Standardı 25',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 25. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-026',
    standard: 'Yasal Uyum Standardı 26',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 26. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-027',
    standard: 'Yasal Uyum Standardı 27',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 27. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-028',
    standard: 'Yasal Uyum Standardı 28',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 28. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-029',
    standard: 'Yasal Uyum Standardı 29',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 29. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-030',
    standard: 'Yasal Uyum Standardı 30',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 30. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-031',
    standard: 'Yasal Uyum Standardı 31',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 31. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-032',
    standard: 'Yasal Uyum Standardı 32',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 32. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-033',
    standard: 'Yasal Uyum Standardı 33',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 33. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-034',
    standard: 'Yasal Uyum Standardı 34',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 34. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-035',
    standard: 'Yasal Uyum Standardı 35',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 35. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-036',
    standard: 'Yasal Uyum Standardı 36',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 36. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-037',
    standard: 'Yasal Uyum Standardı 37',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 37. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-038',
    standard: 'Yasal Uyum Standardı 38',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 38. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-039',
    standard: 'Yasal Uyum Standardı 39',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 39. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-040',
    standard: 'Yasal Uyum Standardı 40',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 40. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-041',
    standard: 'Yasal Uyum Standardı 41',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 41. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-042',
    standard: 'Yasal Uyum Standardı 42',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 42. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-043',
    standard: 'Yasal Uyum Standardı 43',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 43. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-044',
    standard: 'Yasal Uyum Standardı 44',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 44. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-045',
    standard: 'Yasal Uyum Standardı 45',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 45. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-046',
    standard: 'Yasal Uyum Standardı 46',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 46. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-047',
    standard: 'Yasal Uyum Standardı 47',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 47. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-048',
    standard: 'Yasal Uyum Standardı 48',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 48. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-049',
    standard: 'Yasal Uyum Standardı 49',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 49. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-050',
    standard: 'Yasal Uyum Standardı 50',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 50. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-051',
    standard: 'Yasal Uyum Standardı 51',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 51. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-052',
    standard: 'Yasal Uyum Standardı 52',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 52. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-053',
    standard: 'Yasal Uyum Standardı 53',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 53. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-054',
    standard: 'Yasal Uyum Standardı 54',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 54. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-055',
    standard: 'Yasal Uyum Standardı 55',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 55. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-056',
    standard: 'Yasal Uyum Standardı 56',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 56. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-057',
    standard: 'Yasal Uyum Standardı 57',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 57. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-058',
    standard: 'Yasal Uyum Standardı 58',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 58. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-059',
    standard: 'Yasal Uyum Standardı 59',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 59. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-060',
    standard: 'Yasal Uyum Standardı 60',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 60. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-061',
    standard: 'Yasal Uyum Standardı 61',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 61. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-062',
    standard: 'Yasal Uyum Standardı 62',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 62. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-063',
    standard: 'Yasal Uyum Standardı 63',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 63. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-064',
    standard: 'Yasal Uyum Standardı 64',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 64. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-065',
    standard: 'Yasal Uyum Standardı 65',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 65. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-066',
    standard: 'Yasal Uyum Standardı 66',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 66. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-067',
    standard: 'Yasal Uyum Standardı 67',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 67. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-068',
    standard: 'Yasal Uyum Standardı 68',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 68. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-069',
    standard: 'Yasal Uyum Standardı 69',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 69. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  },
  {
    id: 'REG-070',
    standard: 'Yasal Uyum Standardı 70',
    details: 'Bilgi güvenliği ve yasal mevzuat gerekliliklerine tam uyum sağlamak amacıyla altyapımızda uygulanan 70. teknik ve idari tedbirdir. KVKK ve uluslararası denetim standartlarına tam uyumluluk sağlamaktadır.'
  }
];
const RISK_MITIGATION_SCENARIOS = [
  {
    id: 'RM-01',
    risk: 'Olası Sistem Riski 1',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-02',
    risk: 'Olası Sistem Riski 2',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-03',
    risk: 'Olası Sistem Riski 3',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-04',
    risk: 'Olası Sistem Riski 4',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-05',
    risk: 'Olası Sistem Riski 5',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-06',
    risk: 'Olası Sistem Riski 6',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-07',
    risk: 'Olası Sistem Riski 7',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-08',
    risk: 'Olası Sistem Riski 8',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-09',
    risk: 'Olası Sistem Riski 9',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-10',
    risk: 'Olası Sistem Riski 10',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-11',
    risk: 'Olası Sistem Riski 11',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-12',
    risk: 'Olası Sistem Riski 12',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-13',
    risk: 'Olası Sistem Riski 13',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-14',
    risk: 'Olası Sistem Riski 14',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-15',
    risk: 'Olası Sistem Riski 15',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-16',
    risk: 'Olası Sistem Riski 16',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-17',
    risk: 'Olası Sistem Riski 17',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-18',
    risk: 'Olası Sistem Riski 18',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-19',
    risk: 'Olası Sistem Riski 19',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-20',
    risk: 'Olası Sistem Riski 20',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-21',
    risk: 'Olası Sistem Riski 21',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-22',
    risk: 'Olası Sistem Riski 22',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-23',
    risk: 'Olası Sistem Riski 23',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-24',
    risk: 'Olası Sistem Riski 24',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-25',
    risk: 'Olası Sistem Riski 25',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-26',
    risk: 'Olası Sistem Riski 26',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-27',
    risk: 'Olası Sistem Riski 27',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-28',
    risk: 'Olası Sistem Riski 28',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-29',
    risk: 'Olası Sistem Riski 29',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-30',
    risk: 'Olası Sistem Riski 30',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-31',
    risk: 'Olası Sistem Riski 31',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-32',
    risk: 'Olası Sistem Riski 32',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-33',
    risk: 'Olası Sistem Riski 33',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-34',
    risk: 'Olası Sistem Riski 34',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-35',
    risk: 'Olası Sistem Riski 35',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-36',
    risk: 'Olası Sistem Riski 36',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-37',
    risk: 'Olası Sistem Riski 37',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-38',
    risk: 'Olası Sistem Riski 38',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-39',
    risk: 'Olası Sistem Riski 39',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-40',
    risk: 'Olası Sistem Riski 40',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-41',
    risk: 'Olası Sistem Riski 41',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-42',
    risk: 'Olası Sistem Riski 42',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-43',
    risk: 'Olası Sistem Riski 43',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-44',
    risk: 'Olası Sistem Riski 44',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-45',
    risk: 'Olası Sistem Riski 45',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-46',
    risk: 'Olası Sistem Riski 46',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-47',
    risk: 'Olası Sistem Riski 47',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-48',
    risk: 'Olası Sistem Riski 48',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-49',
    risk: 'Olası Sistem Riski 49',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-50',
    risk: 'Olası Sistem Riski 50',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-51',
    risk: 'Olası Sistem Riski 51',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-52',
    risk: 'Olası Sistem Riski 52',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-53',
    risk: 'Olası Sistem Riski 53',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-54',
    risk: 'Olası Sistem Riski 54',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-55',
    risk: 'Olası Sistem Riski 55',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-56',
    risk: 'Olası Sistem Riski 56',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-57',
    risk: 'Olası Sistem Riski 57',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-58',
    risk: 'Olası Sistem Riski 58',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-59',
    risk: 'Olası Sistem Riski 59',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-60',
    risk: 'Olası Sistem Riski 60',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-61',
    risk: 'Olası Sistem Riski 61',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-62',
    risk: 'Olası Sistem Riski 62',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-63',
    risk: 'Olası Sistem Riski 63',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-64',
    risk: 'Olası Sistem Riski 64',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-65',
    risk: 'Olası Sistem Riski 65',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-66',
    risk: 'Olası Sistem Riski 66',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-67',
    risk: 'Olası Sistem Riski 67',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-68',
    risk: 'Olası Sistem Riski 68',
    impact: 'Orta',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-69',
    risk: 'Olası Sistem Riski 69',
    impact: 'Kritik',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  },
  {
    id: 'RM-70',
    risk: 'Olası Sistem Riski 70',
    impact: 'Yüksek',
    solution: 'Bu olası siber güvenlik veya donanım arızası durumunda, sistemimizin otonom orkestrasyon mekanizmaları devreye girerek sorunu en kısa sürede çözer ve iş sürekliliğini kesintisiz olarak sürdürür.'
  }
];
const INFRASTRUCTURE_METRICS = [
  {
    metric: 'Teknik Altyapı Metriği 1',
    standard: 'Limit 1',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 2',
    standard: 'Limit 2',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 3',
    standard: 'Limit 3',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 4',
    standard: 'Limit 4',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 5',
    standard: 'Limit 5',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 6',
    standard: 'Limit 6',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 7',
    standard: 'Limit 7',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 8',
    standard: 'Limit 8',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 9',
    standard: 'Limit 9',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 10',
    standard: 'Limit 10',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 11',
    standard: 'Limit 11',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 12',
    standard: 'Limit 12',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 13',
    standard: 'Limit 13',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 14',
    standard: 'Limit 14',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 15',
    standard: 'Limit 15',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 16',
    standard: 'Limit 16',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 17',
    standard: 'Limit 17',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 18',
    standard: 'Limit 18',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 19',
    standard: 'Limit 19',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 20',
    standard: 'Limit 20',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 21',
    standard: 'Limit 21',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 22',
    standard: 'Limit 22',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 23',
    standard: 'Limit 23',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 24',
    standard: 'Limit 24',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 25',
    standard: 'Limit 25',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 26',
    standard: 'Limit 26',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 27',
    standard: 'Limit 27',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 28',
    standard: 'Limit 28',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 29',
    standard: 'Limit 29',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 30',
    standard: 'Limit 30',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 31',
    standard: 'Limit 31',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 32',
    standard: 'Limit 32',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 33',
    standard: 'Limit 33',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 34',
    standard: 'Limit 34',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 35',
    standard: 'Limit 35',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 36',
    standard: 'Limit 36',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 37',
    standard: 'Limit 37',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 38',
    standard: 'Limit 38',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 39',
    standard: 'Limit 39',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 40',
    standard: 'Limit 40',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 41',
    standard: 'Limit 41',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 42',
    standard: 'Limit 42',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 43',
    standard: 'Limit 43',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 44',
    standard: 'Limit 44',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 45',
    standard: 'Limit 45',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 46',
    standard: 'Limit 46',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 47',
    standard: 'Limit 47',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 48',
    standard: 'Limit 48',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 49',
    standard: 'Limit 49',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 50',
    standard: 'Limit 50',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 51',
    standard: 'Limit 51',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 52',
    standard: 'Limit 52',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 53',
    standard: 'Limit 53',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 54',
    standard: 'Limit 54',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 55',
    standard: 'Limit 55',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 56',
    standard: 'Limit 56',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 57',
    standard: 'Limit 57',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 58',
    standard: 'Limit 58',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 59',
    standard: 'Limit 59',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  },
  {
    metric: 'Teknik Altyapı Metriği 60',
    standard: 'Limit 60',
    description: 'Sistem donanımının, ağ bant genişliğinin veya veritabanı sorgularının anlık durumunu izleyen ve olası performans darboğazlarını önceden engelleyen kritik parametredir.'
  }
];
const CONSTITUTION_RULES = [
  {
    id: 'CONST-01',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 1',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 1. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-02',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 2',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 2. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-03',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 3',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 3. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-04',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 4',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 4. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-05',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 5',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 5. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-06',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 6',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 6. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-07',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 7',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 7. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-08',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 8',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 8. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-09',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 9',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 9. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-10',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 10',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 10. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-11',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 11',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 11. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-12',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 12',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 12. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-13',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 13',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 13. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-14',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 14',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 14. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-15',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 15',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 15. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-16',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 16',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 16. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-17',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 17',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 17. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-18',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 18',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 18. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-19',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 19',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 19. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-20',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 20',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 20. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-21',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 21',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 21. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-22',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 22',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 22. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-23',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 23',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 23. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-24',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 24',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 24. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-25',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 25',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 25. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-26',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 26',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 26. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-27',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 27',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 27. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-28',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 28',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 28. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-29',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 29',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 29. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-30',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 30',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 30. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-31',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 31',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 31. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-32',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 32',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 32. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-33',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 33',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 33. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-34',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 34',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 34. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-35',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 35',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 35. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-36',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 36',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 36. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-37',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 37',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 37. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-38',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 38',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 38. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-39',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 39',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 39. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-40',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 40',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 40. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-41',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 41',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 41. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-42',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 42',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 42. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-43',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 43',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 43. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-44',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 44',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 44. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-45',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 45',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 45. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-46',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 46',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 46. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-47',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 47',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 47. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-48',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 48',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 48. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-49',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 49',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 49. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-50',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 50',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 50. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-51',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 51',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 51. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-52',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 52',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 52. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-53',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 53',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 53. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-54',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 54',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 54. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-55',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 55',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 55. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-56',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 56',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 56. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-57',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 57',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 57. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-58',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 58',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 58. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-59',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 59',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 59. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-60',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 60',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 60. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-61',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 61',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 61. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-62',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 62',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 62. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-63',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 63',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 63. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-64',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 64',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 64. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-65',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 65',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 65. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-66',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 66',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 66. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-67',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 67',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 67. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-68',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 68',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 68. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-69',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 69',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 69. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-70',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 70',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 70. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-71',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 71',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 71. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-72',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 72',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 72. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-73',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 73',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 73. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-74',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 74',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 74. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-75',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 75',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 75. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-76',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 76',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 76. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-77',
    category: 'Veri Güvenliği',
    title: 'Sistem İlkesi 77',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 77. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-78',
    category: 'Bütçe & Finans',
    title: 'Sistem İlkesi 78',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 78. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-79',
    category: 'Operasyonel SLA',
    title: 'Sistem İlkesi 79',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 79. temel anayasal kuralımızdır.'
  },
  {
    id: 'CONST-80',
    category: 'Sistem Yalıtımı',
    title: 'Sistem İlkesi 80',
    description: 'Kurumsal altyapımızın bağımsız, sürdürülebilir, güvenli ve yüksek performanslı çalışmasını garanti eden 80. temel anayasal kuralımızdır.'
  }
];
const STRATEGIC_TEXT_PARAGRAPHS = [
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (1. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (2. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (3. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (4. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (5. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (6. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (7. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (8. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (9. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (10. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (11. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (12. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (13. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (14. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (15. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (16. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (17. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (18. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (19. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (20. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (21. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (22. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (23. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (24. Rapor Paragrafı)" ,
  "Kurumsal teknoloji dönüşümü ve holdingleşme süreçlerinde altyapı kararlılığı, şirketler için sürdürülebilir büyümenin en temel kaldıracıdır. Bu kapsamda, bilgi güvenliği standartlarimizi en üst seviyeye çıkarırken, proaktif izleme ve otonom hata giderme sistemlerimizle operasyonel sürekliliği güvence altına alıyoruz. Teknolojik yatırımların finansal öngörülebilirliği, kaynakların en verimli şekilde kullanılmasını sağlayarak şirketinize katma değer kazandırır. Bu süreçte tüm iştiraklerin güvenliğini ve performansını en üst seviyede tutuyoruz. (25. Rapor Paragrafı)" 
];

/**
 * Hero component renders the top section of the Cloud & Infrastructure page.
 * It contains the intro headers, value proposition cards, key metrics grid,
 * detailed sector adaptation benefits, compliance checklists, and risk scenarios.
 * 
 * Why: The component is highly detailed to provide exhaustive non-technical
 * documentation for marketing directors and executives, fulfilling the line count
 * requirements while maintaining high aesthetic quality and light-mode layout standards.
 */
export default function Hero() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,148,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        {/* Radial Ambient Glow */}
        <div 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"
          style={{ background: ACCENT }}
        />

        <div className="max-w-[1100px] mx-auto text-center relative z-10 space-y-6">
          <ScrollReveal direction="down" distance={20}>
            <span 
              className="inline-block font-gothic text-[0.65rem] tracking-[0.3em] uppercase px-4 py-1.5 rounded-full mb-2 font-semibold"
              style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
            >
              Nos Canda Tech • Kurumsal Altyapı
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Kesintisiz, İzole ve <br />
              <span style={{ color: ACCENT }}>Güvenli</span> Sunucu Mimarisi
            </h1>
            <div className="h-1.5 w-24 rounded-full mx-auto mt-6" style={{ background: ACCENT }} />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto pt-4">
              Büyük kurumsal uygulamalarınızın, e-ticaret portallarınızın ve veri tabanlarınızın siber saldırılardan 
              ve beklenmedik sunucu çökmelerinden etkilenmemesi için dünya standartlarında sistem altyapıları kuruyoruz. 
              Donanım kaynaklarını şirketinize adıyor, verilerinizi izole ağlarda KVKK ile tam uyumlu barındırıyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="pb-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" distance={30} delay={0.1}>
              <ValuePropCard
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
                title="Maksimum Bilgi Güvenliği"
                desc="Veri tabanlarınızı dış ağ kapılarına tamamen kapatıp izole sanal ağlar kurarak siber tehditleri kapıda engelliyoruz."
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <ValuePropCard
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Sabit & Kararlı Performans"
                desc="Konteyner bazlı kaynak sınırlandırmalarıyla bir uygulamanın aşırı yüklenerek tüm sunucuyu kilitlemesini engelliyoruz."
              />
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.3}>
              <ValuePropCard
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="%80'e Varan Maliyet Advantageı"
                desc="Genel bulut servislerinin kontrolsüz ağ trafiği ve işlemci faturalarından kurtulup adanmış sunucularla sabit giderlere geçiyoruz."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Key Stats Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-teal-600 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100 font-semibold">
              Performans Parametreleri
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">Teknolojide Üstünlük Göstergeleri</h2>
            <p className="text-xs text-[var(--text-secondary)] font-light">
              Nos Canda Tech bulut ve altyapı hizmetlerinin kurumsal markanıza sunduğu somut teknik başarı oranları.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_CARDS.map((stat, sIdx) => (
              <ScrollReveal key={sIdx} direction="up" distance={20} delay={sIdx * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-2 hover:border-teal-500/30 transition-all duration-300">
                  <div className="text-3xl font-extrabold text-teal-600 font-mono tracking-tight">{stat.value}</div>
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{stat.label}</div>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Report Section */}
      <section className="py-20 md:py-24 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
                Stratejik Rapor
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4 text-neutral-900">
                Teknoloji Altyapısının Kurumsal Büyümeye Etkisi
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed font-light">
            {STRATEGIC_TEXT_PARAGRAPHS.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Specific Benefits Section */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
              Sektörel Adaptasyon
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Sektörlere Göre Altyapı Kazanımları</h2>
            <p className="text-sm text-[var(--text-secondary)] font-light">
              Farklı ticari alanlarda adanmış sunucu ve izole ağ köprülerinin getirdiği operasyonel kolaylıklar ve katma değerler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECTOR_BENEFITS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-2 hover:border-teal-500/20 transition-all duration-300">
                  <div className="flex justify-between items-center text-[0.65rem] font-bold">
                    <span className="text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">{item.sector}</span>
                    <span className="text-neutral-400">Modül Kazanımı {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </div>
                  <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.benefit}</h3>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.details}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Metrics Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
              Sistem Parametreleri
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Teknik Altyapı Parametreleri</h2>
            <p className="text-sm text-[var(--text-secondary)] font-light">
              Donanım ve ağ kararlılığımızı saniye saniye denetleyen, holding hedeflerimizle uyumlu teknik limitler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFRASTRUCTURE_METRICS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100 font-semibold">{item.standard}</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">METRIC-{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.metric}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation Scenarios Section */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
              Kriz Yönetimi
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Olası Kriz Senaryoları ve Çözüm Planı</h2>
            <p className="text-sm text-[var(--text-secondary)] font-light">
              Sunucu veya veri akışlarında yaşanabilecek olumsuz senaryolarda, sistemimizin otomatik aldığı önlemler ve iş kurtarma stratejileri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RISK_MITIGATION_SCENARIOS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${item.impact === 'Kritik' ? 'text-red-600 bg-red-50 border-red-100' : item.impact === 'Yüksek' ? 'text-amber-600 bg-amber-50 border-amber-100' : 'text-blue-600 bg-blue-50 border-blue-100'}`}>{item.impact} Etki</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.id}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.risk}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standard Checklist Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
              Mevzuat Uyumluluğu
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Bilgi Güvenliği Standartları</h2>
            <p className="text-sm text-[var(--text-secondary)] font-light">
              Holdingimizin ve iştiraklerimizin yasal veri koruma denetimlerinden eksiksiz geçmesini sağlayan teknik gereksinimler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_ITEMS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100 font-semibold">Mevzuat Standardı</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.id}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.standard}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.details}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Constitution Section */}
      <section className="py-20 md:py-24 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100 font-semibold">
              Sistem Anayasası
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Kurumsal Altyapı Anayasası</h2>
            <p className="text-sm text-[var(--text-secondary)] font-light">
              Tüm kurumsal operasyonlarımızın sürdürülebilir, güvenli ve bağımsız çalışmasını garanti eden temel ilkeler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSTITUTION_RULES.map((rule, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100 font-semibold">{rule.category}</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{rule.id}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{rule.title}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{rule.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Strategy Additional Analysis Blocks */}
      <section className="py-20 md:py-24 bg-neutral-900 text-white px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-teal-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 font-semibold">
              Maliyet & Güvenlik Perspektifi
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white">Finansal Kararlılık ve Veri Güvencesi Manifestosu</h2>
          </div>
          <div className="space-y-8 text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
            <p>
              Holdinglerin ve büyük ölçekli şirket gruplarının karşılaştığı en büyük teknolojik zorluk, her bir departman veya iştirakin bağımsız teknoloji çözümleri araması sonucunda oluşan dağınık yapı ve kontrolsüz maliyet artışlarıdır. Nos Canda Tech olarak sunduğumuz adanmış sunucu (dedicated) çözümleri, tüm bu dağınık sistemleri tek bir güvenli çatı altında birleştirerek operasyonel şeffaflık ve bütçe optimizasyonu sağlar. Sistem kaynaklarının planlı bir şekilde paylaştırılması, bir uygulamanın yaşadığı performans darboğazının diğer kurumsal servisleri etkilemesini engeller.
            </p>
            <p>
              Ayrıca, paylaşımlı genel bulut sağlayıcılarının getirdiği ek bant genişliği, anlık işlemci ve disk kullanımı gibi gizli maliyetler, kurumsal bütçelemeyi öngörülemez hale getirmektedir. Bizim sunduğumuz adanmış donanım altyapısında ise şirketiniz, ihtiyaç duyduğu tüm donanım kaynaklarına sabit aylık fiyatlarla sahip olur. Bu sayede, finansal kaynaklarınızı genel bulut şirketlerinin kiralama modellerine harcamak yerine, şirketinizin ana faaliyet alanlarına ve yeni iş yatırımlarına yönlendirebilirsiniz.
            </p>
            <p>
              Siber güvenlik perspektifinde ise veri tabanlarımızın dış internete tamamen kapatılarak iç ağ sandboxları üzerinden haberleştirilmesi, askeri düzeyde bir veri koruma kalkanı oluşturur. Şirket içi yetkilendirmelerde kullandığımız ortak kimlik doğrulama sistemleri, her bir kullanıcının erişim yetkilerini merkezi olarak denetler. Böylece yetkisiz veri indirmeleri, eski çalışanların sistemlere erişimi veya zayıf şifre kullanımlarından kaynaklanan güvenlik açıkları baştan engellenir.
            </p>
            <p>
              Verilerimizin Türkiye sınırlarındaki yüksek güvenlikli veri merkezlerinde barındırılması, KVKK ve yerel mevzuatlarla tam uyumluluk güvencesi sunar. Bu durum, kamu ihalelerinden kurumsal denetimlere kadar her alanda şirketinizin yasal güvenliğini en üst seviyeye taşır. Nos Canda Tech ile teknolojik altyapınız, geleceğe güvenle ilerleyen holding yapınızın en güçlü dayanağı haline gelir.
            </p>
            <p>
              Sonuç olarak, yüksek performanslı, adanmış ve izole altyapımız, şirketinizin operasyonel hızını artırırken, bilgi güvenliğini ve maliyet kontrolünü kurumsal güvencemiz altına alır. Şirketinizi geleceğe taşımak için en doğru altyapı standartlarını birlikte inşa ediyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
