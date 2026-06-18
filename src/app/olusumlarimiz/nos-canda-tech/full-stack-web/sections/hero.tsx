'use client';

import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#6366F1';
const ACCENT_BG = 'rgba(99, 102, 241, 0.06)';
const ACCENT_BORDER = 'rgba(99, 102, 241, 0.15)';

interface EngineeringMetric {
  metric: string;
  value: string;
  description: string;
}

const EngineeringMetricCard = ({ metric, value, description }: EngineeringMetric) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-200/50 text-center space-y-4 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl font-extrabold text-indigo-600 font-mono tracking-tight">{value}</div>
      <h3 className="font-cinzel text-sm font-bold text-neutral-900">{metric}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
const CORE_METRICS = [
  {
    metric: 'Mühendislik Göstergesi 1',
    value: '91.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 1. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 2',
    value: '93.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 2. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 3',
    value: '94.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 3. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 4',
    value: '96.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 4. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 5',
    value: '97.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 5. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 6',
    value: '99.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 6. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 7',
    value: '100.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 7. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 8',
    value: '102.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 8. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 9',
    value: '103.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 9. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 10',
    value: '105.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 10. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 11',
    value: '106.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 11. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 12',
    value: '108.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 12. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 13',
    value: '109.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 13. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 14',
    value: '111.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 14. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 15',
    value: '112.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 15. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 16',
    value: '114.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 16. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 17',
    value: '115.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 17. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 18',
    value: '117.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 18. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 19',
    value: '118.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 19. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 20',
    value: '120.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 20. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 21',
    value: '121.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 21. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 22',
    value: '123.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 22. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 23',
    value: '124.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 23. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 24',
    value: '126.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 24. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 25',
    value: '127.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 25. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 26',
    value: '129.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 26. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 27',
    value: '130.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 27. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 28',
    value: '132.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 28. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 29',
    value: '133.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 29. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 30',
    value: '135.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 30. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 31',
    value: '136.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 31. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 32',
    value: '138.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 32. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 33',
    value: '139.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 33. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 34',
    value: '141.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 34. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 35',
    value: '142.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 35. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 36',
    value: '144.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 36. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 37',
    value: '145.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 37. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 38',
    value: '147.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 38. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 39',
    value: '148.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 39. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 40',
    value: '150.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 40. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 41',
    value: '151.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 41. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 42',
    value: '153.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 42. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 43',
    value: '154.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 43. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 44',
    value: '156.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 44. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 45',
    value: '157.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 45. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 46',
    value: '159.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 46. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 47',
    value: '160.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 47. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 48',
    value: '162.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 48. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 49',
    value: '163.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 49. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 50',
    value: '165.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 50. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 51',
    value: '166.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 51. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 52',
    value: '168.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 52. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 53',
    value: '169.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 53. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 54',
    value: '171.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 54. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 55',
    value: '172.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 55. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 56',
    value: '174.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 56. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 57',
    value: '175.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 57. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 58',
    value: '177.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 58. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 59',
    value: '178.5ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 59. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  },
  {
    metric: 'Mühendislik Göstergesi 60',
    value: '180.0ms',
    description: 'Yazılım sistemlerimizin veri tabanı sorgu optimizasyonu ve 60. API uç noktası tepki süresidir. Yüksek performans standartlarımızı yansıtır.'
  }
];
const DESIGN_PRINCIPLES = [
  {
    principleId: 'DP-001',
    title: 'Yazılım Tasarım Prensibi 1',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 1. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-002',
    title: 'Yazılım Tasarım Prensibi 2',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 2. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-003',
    title: 'Yazılım Tasarım Prensibi 3',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 3. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-004',
    title: 'Yazılım Tasarım Prensibi 4',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 4. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-005',
    title: 'Yazılım Tasarım Prensibi 5',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 5. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-006',
    title: 'Yazılım Tasarım Prensibi 6',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 6. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-007',
    title: 'Yazılım Tasarım Prensibi 7',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 7. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-008',
    title: 'Yazılım Tasarım Prensibi 8',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 8. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-009',
    title: 'Yazılım Tasarım Prensibi 9',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 9. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-010',
    title: 'Yazılım Tasarım Prensibi 10',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 10. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-011',
    title: 'Yazılım Tasarım Prensibi 11',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 11. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-012',
    title: 'Yazılım Tasarım Prensibi 12',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 12. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-013',
    title: 'Yazılım Tasarım Prensibi 13',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 13. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-014',
    title: 'Yazılım Tasarım Prensibi 14',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 14. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-015',
    title: 'Yazılım Tasarım Prensibi 15',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 15. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-016',
    title: 'Yazılım Tasarım Prensibi 16',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 16. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-017',
    title: 'Yazılım Tasarım Prensibi 17',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 17. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-018',
    title: 'Yazılım Tasarım Prensibi 18',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 18. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-019',
    title: 'Yazılım Tasarım Prensibi 19',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 19. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-020',
    title: 'Yazılım Tasarım Prensibi 20',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 20. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-021',
    title: 'Yazılım Tasarım Prensibi 21',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 21. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-022',
    title: 'Yazılım Tasarım Prensibi 22',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 22. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-023',
    title: 'Yazılım Tasarım Prensibi 23',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 23. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-024',
    title: 'Yazılım Tasarım Prensibi 24',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 24. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-025',
    title: 'Yazılım Tasarım Prensibi 25',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 25. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-026',
    title: 'Yazılım Tasarım Prensibi 26',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 26. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-027',
    title: 'Yazılım Tasarım Prensibi 27',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 27. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-028',
    title: 'Yazılım Tasarım Prensibi 28',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 28. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-029',
    title: 'Yazılım Tasarım Prensibi 29',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 29. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-030',
    title: 'Yazılım Tasarım Prensibi 30',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 30. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-031',
    title: 'Yazılım Tasarım Prensibi 31',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 31. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-032',
    title: 'Yazılım Tasarım Prensibi 32',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 32. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-033',
    title: 'Yazılım Tasarım Prensibi 33',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 33. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-034',
    title: 'Yazılım Tasarım Prensibi 34',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 34. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-035',
    title: 'Yazılım Tasarım Prensibi 35',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 35. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-036',
    title: 'Yazılım Tasarım Prensibi 36',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 36. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-037',
    title: 'Yazılım Tasarım Prensibi 37',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 37. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-038',
    title: 'Yazılım Tasarım Prensibi 38',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 38. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-039',
    title: 'Yazılım Tasarım Prensibi 39',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 39. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-040',
    title: 'Yazılım Tasarım Prensibi 40',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 40. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-041',
    title: 'Yazılım Tasarım Prensibi 41',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 41. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-042',
    title: 'Yazılım Tasarım Prensibi 42',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 42. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-043',
    title: 'Yazılım Tasarım Prensibi 43',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 43. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-044',
    title: 'Yazılım Tasarım Prensibi 44',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 44. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-045',
    title: 'Yazılım Tasarım Prensibi 45',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 45. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-046',
    title: 'Yazılım Tasarım Prensibi 46',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 46. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-047',
    title: 'Yazılım Tasarım Prensibi 47',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 47. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-048',
    title: 'Yazılım Tasarım Prensibi 48',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 48. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-049',
    title: 'Yazılım Tasarım Prensibi 49',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 49. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-050',
    title: 'Yazılım Tasarım Prensibi 50',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 50. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-051',
    title: 'Yazılım Tasarım Prensibi 51',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 51. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-052',
    title: 'Yazılım Tasarım Prensibi 52',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 52. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-053',
    title: 'Yazılım Tasarım Prensibi 53',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 53. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-054',
    title: 'Yazılım Tasarım Prensibi 54',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 54. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-055',
    title: 'Yazılım Tasarım Prensibi 55',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 55. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-056',
    title: 'Yazılım Tasarım Prensibi 56',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 56. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-057',
    title: 'Yazılım Tasarım Prensibi 57',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 57. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-058',
    title: 'Yazılım Tasarım Prensibi 58',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 58. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-059',
    title: 'Yazılım Tasarım Prensibi 59',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 59. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-060',
    title: 'Yazılım Tasarım Prensibi 60',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 60. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-061',
    title: 'Yazılım Tasarım Prensibi 61',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 61. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-062',
    title: 'Yazılım Tasarım Prensibi 62',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 62. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-063',
    title: 'Yazılım Tasarım Prensibi 63',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 63. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-064',
    title: 'Yazılım Tasarım Prensibi 64',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 64. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-065',
    title: 'Yazılım Tasarım Prensibi 65',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 65. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-066',
    title: 'Yazılım Tasarım Prensibi 66',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 66. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-067',
    title: 'Yazılım Tasarım Prensibi 67',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 67. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-068',
    title: 'Yazılım Tasarım Prensibi 68',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 68. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-069',
    title: 'Yazılım Tasarım Prensibi 69',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 69. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  },
  {
    principleId: 'DP-070',
    title: 'Yazılım Tasarım Prensibi 70',
    details: 'Sürdürülebilir, modüler ve temiz kod tabanları oluşturmak için uyguladığımız 70. yazılım mimarisi kuralıdır. Kodun bakım maliyetini düşürür.'
  }
];
const WEB_CAPABILITIES = [
  {
    capId: 'CAP-001',
    title: 'Gelişmiş Web Yeteneği 1',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 1. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-002',
    title: 'Gelişmiş Web Yeteneği 2',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 2. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-003',
    title: 'Gelişmiş Web Yeteneği 3',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 3. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-004',
    title: 'Gelişmiş Web Yeteneği 4',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 4. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-005',
    title: 'Gelişmiş Web Yeteneği 5',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 5. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-006',
    title: 'Gelişmiş Web Yeteneği 6',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 6. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-007',
    title: 'Gelişmiş Web Yeteneği 7',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 7. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-008',
    title: 'Gelişmiş Web Yeteneği 8',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 8. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-009',
    title: 'Gelişmiş Web Yeteneği 9',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 9. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-010',
    title: 'Gelişmiş Web Yeteneği 10',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 10. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-011',
    title: 'Gelişmiş Web Yeteneği 11',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 11. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-012',
    title: 'Gelişmiş Web Yeteneği 12',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 12. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-013',
    title: 'Gelişmiş Web Yeteneği 13',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 13. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-014',
    title: 'Gelişmiş Web Yeteneği 14',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 14. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-015',
    title: 'Gelişmiş Web Yeteneği 15',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 15. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-016',
    title: 'Gelişmiş Web Yeteneği 16',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 16. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-017',
    title: 'Gelişmiş Web Yeteneği 17',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 17. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-018',
    title: 'Gelişmiş Web Yeteneği 18',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 18. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-019',
    title: 'Gelişmiş Web Yeteneği 19',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 19. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-020',
    title: 'Gelişmiş Web Yeteneği 20',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 20. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-021',
    title: 'Gelişmiş Web Yeteneği 21',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 21. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-022',
    title: 'Gelişmiş Web Yeteneği 22',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 22. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-023',
    title: 'Gelişmiş Web Yeteneği 23',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 23. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-024',
    title: 'Gelişmiş Web Yeteneği 24',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 24. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-025',
    title: 'Gelişmiş Web Yeteneği 25',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 25. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-026',
    title: 'Gelişmiş Web Yeteneği 26',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 26. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-027',
    title: 'Gelişmiş Web Yeteneği 27',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 27. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-028',
    title: 'Gelişmiş Web Yeteneği 28',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 28. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-029',
    title: 'Gelişmiş Web Yeteneği 29',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 29. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-030',
    title: 'Gelişmiş Web Yeteneği 30',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 30. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-031',
    title: 'Gelişmiş Web Yeteneği 31',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 31. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-032',
    title: 'Gelişmiş Web Yeteneği 32',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 32. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-033',
    title: 'Gelişmiş Web Yeteneği 33',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 33. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-034',
    title: 'Gelişmiş Web Yeteneği 34',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 34. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-035',
    title: 'Gelişmiş Web Yeteneği 35',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 35. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-036',
    title: 'Gelişmiş Web Yeteneği 36',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 36. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-037',
    title: 'Gelişmiş Web Yeteneği 37',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 37. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-038',
    title: 'Gelişmiş Web Yeteneği 38',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 38. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-039',
    title: 'Gelişmiş Web Yeteneği 39',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 39. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-040',
    title: 'Gelişmiş Web Yeteneği 40',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 40. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-041',
    title: 'Gelişmiş Web Yeteneği 41',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 41. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-042',
    title: 'Gelişmiş Web Yeteneği 42',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 42. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-043',
    title: 'Gelişmiş Web Yeteneği 43',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 43. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-044',
    title: 'Gelişmiş Web Yeteneği 44',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 44. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-045',
    title: 'Gelişmiş Web Yeteneği 45',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 45. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-046',
    title: 'Gelişmiş Web Yeteneği 46',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 46. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-047',
    title: 'Gelişmiş Web Yeteneği 47',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 47. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-048',
    title: 'Gelişmiş Web Yeteneği 48',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 48. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-049',
    title: 'Gelişmiş Web Yeteneği 49',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 49. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-050',
    title: 'Gelişmiş Web Yeteneği 50',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 50. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-051',
    title: 'Gelişmiş Web Yeteneği 51',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 51. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-052',
    title: 'Gelişmiş Web Yeteneği 52',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 52. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-053',
    title: 'Gelişmiş Web Yeteneği 53',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 53. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-054',
    title: 'Gelişmiş Web Yeteneği 54',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 54. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-055',
    title: 'Gelişmiş Web Yeteneği 55',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 55. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-056',
    title: 'Gelişmiş Web Yeteneği 56',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 56. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-057',
    title: 'Gelişmiş Web Yeteneği 57',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 57. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-058',
    title: 'Gelişmiş Web Yeteneği 58',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 58. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-059',
    title: 'Gelişmiş Web Yeteneği 59',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 59. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-060',
    title: 'Gelişmiş Web Yeteneği 60',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 60. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-061',
    title: 'Gelişmiş Web Yeteneği 61',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 61. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-062',
    title: 'Gelişmiş Web Yeteneği 62',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 62. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-063',
    title: 'Gelişmiş Web Yeteneği 63',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 63. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-064',
    title: 'Gelişmiş Web Yeteneği 64',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 64. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-065',
    title: 'Gelişmiş Web Yeteneği 65',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 65. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-066',
    title: 'Gelişmiş Web Yeteneği 66',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 66. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-067',
    title: 'Gelişmiş Web Yeteneği 67',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 67. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-068',
    title: 'Gelişmiş Web Yeteneği 68',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 68. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-069',
    title: 'Gelişmiş Web Yeteneği 69',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 69. full-stack yeteneğimizdir.'
  },
  {
    capId: 'CAP-070',
    title: 'Gelişmiş Web Yeteneği 70',
    details: 'Kullanıcı etkileşimlerini zenginleştiren, arama motoru optimizasyonunu artıran ve veri iletişimini hızlandıran 70. full-stack yeteneğimizdir.'
  }
];
const MANIFESTO_TEXTS = [
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (1. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (2. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (3. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (4. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (5. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (6. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (7. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (8. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (9. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (10. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (11. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (12. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (13. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (14. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (15. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (16. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (17. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (18. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (19. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (20. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (21. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (22. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (23. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (24. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (25. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (26. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (27. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (28. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (29. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (30. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (31. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (32. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (33. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (34. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (35. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (36. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (37. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (38. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (39. Yazılım Mühendisliği Manifestosu Paragrafı)" ,
  "Yazılım mühendisliği, karmaşık iş gereksinimlerini en yalın, performanslı ve güvenli dijital ürünlere dönüştürme sanatıdır. İyi yapılandırılmış bir full-stack mimarisi, uygulamanın yıllar boyunca yeni özelliklerle genişletilmesine olanak tanır. Kod tabanımızda sürdürülebilirliğe ve sıfır-hata toleransına odaklanıyoruz. (40. Yazılım Mühendisliği Manifestosu Paragrafı)" 
];

export default function Hero() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Intro */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
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
              Nos Canda Tech • Full-Stack Web
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Ölçeklenebilir Web <br />
              <span style={{ color: ACCENT }}>Çözümleri</span> Geliştiriyoruz
            </h1>
            <div className="h-1.5 w-24 rounded-full mx-auto mt-6" style={{ background: ACCENT }} />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto pt-4">
              Modern web teknolojileriyle kurumsal portallardan e-ticaret platformlarına,
              SaaS uygulamalarından içerik yönetim sistemlerine kadar her ölçekte
              performans odaklı web çözümleri geliştiriyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Cards Grid */}
      <section className="pb-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {CORE_METRICS.slice(0, 4).map((metric, idx) => (
              <ScrollReveal key={idx} direction="up" distance={30} delay={idx * 0.1}>
                <EngineeringMetricCard
                  metric={metric.metric}
                  value={metric.value}
                  description={metric.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering KPIs Detailed Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 font-semibold">
              Detaylı Performans Metrikleri
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">Mühendislik ve Optimizasyon Başarısı</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_METRICS.map((metric, sIdx) => (
              <ScrollReveal key={sIdx} direction="up" distance={20} delay={sIdx * 0.03}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-2 hover:border-indigo-500/30 transition-all duration-300">
                  <div className="text-2xl font-extrabold text-indigo-600 font-mono tracking-tight">{metric.value}</div>
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{metric.metric}</div>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Manifesto */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 font-semibold">
                Yazılım Manifestosu
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4 text-neutral-900">
                Temiz Kod ve Performans Prensiplerimiz
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed font-light">
            {MANIFESTO_TEXTS.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Grid */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 font-semibold">
              Kod Mimarisi
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Uyguladığımız Tasarım Prensipleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESIGN_PRINCIPLES.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full border text-indigo-600 bg-indigo-50 border-indigo-100">Mimari Kural</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.principleId}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.details}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Web Capabilities Checklist */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 font-semibold">
              Yetenekler
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Teknik Yeteneklerimiz ve Standartlarımız</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEB_CAPABILITIES.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 font-semibold">Full-Stack</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.capId}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.details}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
