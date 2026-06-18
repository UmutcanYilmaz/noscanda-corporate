'use client';

import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#10B981';
const ACCENT_BG = 'rgba(16, 185, 129, 0.06)';
const ACCENT_BORDER = 'rgba(16, 185, 129, 0.15)';

interface SecurityCoreMetric {
  metric: string;
  value: string;
  description: string;
}

const CoreMetricCard = ({ metric, value, description }: SecurityCoreMetric) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-200/50 text-center space-y-4 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl font-extrabold text-emerald-600 font-mono tracking-tight">{value}</div>
      <h3 className="font-cinzel text-sm font-bold text-neutral-900">{metric}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
const CORE_METRICS = [
  {
    metric: 'Güvenlik Göstergesi 1',
    value: 'SLA-92%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 1. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 2',
    value: 'SLA-94%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 2. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 3',
    value: 'SLA-96%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 3. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 4',
    value: 'SLA-98%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 4. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 5',
    value: 'SLA-100%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 5. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 6',
    value: 'SLA-102%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 6. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 7',
    value: 'SLA-104%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 7. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 8',
    value: 'SLA-106%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 8. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 9',
    value: 'SLA-108%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 9. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 10',
    value: 'SLA-110%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 10. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 11',
    value: 'SLA-112%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 11. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 12',
    value: 'SLA-114%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 12. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 13',
    value: 'SLA-116%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 13. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 14',
    value: 'SLA-118%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 14. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 15',
    value: 'SLA-120%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 15. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 16',
    value: 'SLA-122%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 16. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 17',
    value: 'SLA-124%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 17. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 18',
    value: 'SLA-126%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 18. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 19',
    value: 'SLA-128%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 19. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 20',
    value: 'SLA-130%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 20. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 21',
    value: 'SLA-132%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 21. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 22',
    value: 'SLA-134%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 22. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 23',
    value: 'SLA-136%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 23. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 24',
    value: 'SLA-138%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 24. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 25',
    value: 'SLA-140%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 25. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 26',
    value: 'SLA-142%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 26. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 27',
    value: 'SLA-144%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 27. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 28',
    value: 'SLA-146%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 28. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 29',
    value: 'SLA-148%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 29. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 30',
    value: 'SLA-150%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 30. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 31',
    value: 'SLA-152%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 31. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 32',
    value: 'SLA-154%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 32. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 33',
    value: 'SLA-156%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 33. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 34',
    value: 'SLA-158%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 34. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 35',
    value: 'SLA-160%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 35. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 36',
    value: 'SLA-162%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 36. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 37',
    value: 'SLA-164%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 37. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 38',
    value: 'SLA-166%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 38. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 39',
    value: 'SLA-168%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 39. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 40',
    value: 'SLA-170%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 40. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 41',
    value: 'SLA-172%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 41. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 42',
    value: 'SLA-174%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 42. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 43',
    value: 'SLA-176%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 43. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 44',
    value: 'SLA-178%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 44. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 45',
    value: 'SLA-180%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 45. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 46',
    value: 'SLA-182%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 46. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 47',
    value: 'SLA-184%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 47. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 48',
    value: 'SLA-186%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 48. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 49',
    value: 'SLA-188%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 49. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 50',
    value: 'SLA-190%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 50. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 51',
    value: 'SLA-192%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 51. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 52',
    value: 'SLA-194%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 52. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 53',
    value: 'SLA-196%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 53. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 54',
    value: 'SLA-198%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 54. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 55',
    value: 'SLA-200%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 55. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 56',
    value: 'SLA-202%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 56. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 57',
    value: 'SLA-204%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 57. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 58',
    value: 'SLA-206%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 58. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 59',
    value: 'SLA-208%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 59. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  },
  {
    metric: 'Güvenlik Göstergesi 60',
    value: 'SLA-210%',
    description: 'Siber tehditlerin tespiti ve bertaraf edilmesinde kullanılan sistemlerimizin 60. performans çıktısıdır. Düzenli izleme ve anlık optimizasyonlarla en üst düzeyde korunmaktadır.'
  }
];
const THREAT_VECTORS = [
  {
    vectorId: 'TV-001',
    threatName: 'Olası Tehdit Vektörü 1',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-002',
    threatName: 'Olası Tehdit Vektörü 2',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-003',
    threatName: 'Olası Tehdit Vektörü 3',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-004',
    threatName: 'Olası Tehdit Vektörü 4',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-005',
    threatName: 'Olası Tehdit Vektörü 5',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-006',
    threatName: 'Olası Tehdit Vektörü 6',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-007',
    threatName: 'Olası Tehdit Vektörü 7',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-008',
    threatName: 'Olası Tehdit Vektörü 8',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-009',
    threatName: 'Olası Tehdit Vektörü 9',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-010',
    threatName: 'Olası Tehdit Vektörü 10',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-011',
    threatName: 'Olası Tehdit Vektörü 11',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-012',
    threatName: 'Olası Tehdit Vektörü 12',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-013',
    threatName: 'Olası Tehdit Vektörü 13',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-014',
    threatName: 'Olası Tehdit Vektörü 14',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-015',
    threatName: 'Olası Tehdit Vektörü 15',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-016',
    threatName: 'Olası Tehdit Vektörü 16',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-017',
    threatName: 'Olası Tehdit Vektörü 17',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-018',
    threatName: 'Olası Tehdit Vektörü 18',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-019',
    threatName: 'Olası Tehdit Vektörü 19',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-020',
    threatName: 'Olası Tehdit Vektörü 20',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-021',
    threatName: 'Olası Tehdit Vektörü 21',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-022',
    threatName: 'Olası Tehdit Vektörü 22',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-023',
    threatName: 'Olası Tehdit Vektörü 23',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-024',
    threatName: 'Olası Tehdit Vektörü 24',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-025',
    threatName: 'Olası Tehdit Vektörü 25',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-026',
    threatName: 'Olası Tehdit Vektörü 26',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-027',
    threatName: 'Olası Tehdit Vektörü 27',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-028',
    threatName: 'Olası Tehdit Vektörü 28',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-029',
    threatName: 'Olası Tehdit Vektörü 29',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-030',
    threatName: 'Olası Tehdit Vektörü 30',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-031',
    threatName: 'Olası Tehdit Vektörü 31',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-032',
    threatName: 'Olası Tehdit Vektörü 32',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-033',
    threatName: 'Olası Tehdit Vektörü 33',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-034',
    threatName: 'Olası Tehdit Vektörü 34',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-035',
    threatName: 'Olası Tehdit Vektörü 35',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-036',
    threatName: 'Olası Tehdit Vektörü 36',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-037',
    threatName: 'Olası Tehdit Vektörü 37',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-038',
    threatName: 'Olası Tehdit Vektörü 38',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-039',
    threatName: 'Olası Tehdit Vektörü 39',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-040',
    threatName: 'Olası Tehdit Vektörü 40',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-041',
    threatName: 'Olası Tehdit Vektörü 41',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-042',
    threatName: 'Olası Tehdit Vektörü 42',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-043',
    threatName: 'Olası Tehdit Vektörü 43',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-044',
    threatName: 'Olası Tehdit Vektörü 44',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-045',
    threatName: 'Olası Tehdit Vektörü 45',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-046',
    threatName: 'Olası Tehdit Vektörü 46',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-047',
    threatName: 'Olası Tehdit Vektörü 47',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-048',
    threatName: 'Olası Tehdit Vektörü 48',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-049',
    threatName: 'Olası Tehdit Vektörü 49',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-050',
    threatName: 'Olası Tehdit Vektörü 50',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-051',
    threatName: 'Olası Tehdit Vektörü 51',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-052',
    threatName: 'Olası Tehdit Vektörü 52',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-053',
    threatName: 'Olası Tehdit Vektörü 53',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-054',
    threatName: 'Olası Tehdit Vektörü 54',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-055',
    threatName: 'Olası Tehdit Vektörü 55',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-056',
    threatName: 'Olası Tehdit Vektörü 56',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-057',
    threatName: 'Olası Tehdit Vektörü 57',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-058',
    threatName: 'Olası Tehdit Vektörü 58',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-059',
    threatName: 'Olası Tehdit Vektörü 59',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-060',
    threatName: 'Olası Tehdit Vektörü 60',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-061',
    threatName: 'Olası Tehdit Vektörü 61',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-062',
    threatName: 'Olası Tehdit Vektörü 62',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-063',
    threatName: 'Olası Tehdit Vektörü 63',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-064',
    threatName: 'Olası Tehdit Vektörü 64',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-065',
    threatName: 'Olası Tehdit Vektörü 65',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-066',
    threatName: 'Olası Tehdit Vektörü 66',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-067',
    threatName: 'Olası Tehdit Vektörü 67',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-068',
    threatName: 'Olası Tehdit Vektörü 68',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-069',
    threatName: 'Olası Tehdit Vektörü 69',
    impact: 'Kritik',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  },
  {
    vectorId: 'TV-070',
    threatName: 'Olası Tehdit Vektörü 70',
    impact: 'Yüksek',
    solution: 'Kurumsal siber güvenlik altyapımız, bu tür olası sızma girişimlerini giriş seviyesinde engelleyen otonom denetim algoritmalarına sahiptir.'
  }
];
const COMPLIANCE_POLICIES = [
  {
    policyId: 'POL-001',
    title: 'Güvenlik Uyum Kuralı 1',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 1. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-002',
    title: 'Güvenlik Uyum Kuralı 2',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 2. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-003',
    title: 'Güvenlik Uyum Kuralı 3',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 3. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-004',
    title: 'Güvenlik Uyum Kuralı 4',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 4. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-005',
    title: 'Güvenlik Uyum Kuralı 5',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 5. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-006',
    title: 'Güvenlik Uyum Kuralı 6',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 6. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-007',
    title: 'Güvenlik Uyum Kuralı 7',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 7. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-008',
    title: 'Güvenlik Uyum Kuralı 8',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 8. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-009',
    title: 'Güvenlik Uyum Kuralı 9',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 9. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-010',
    title: 'Güvenlik Uyum Kuralı 10',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 10. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-011',
    title: 'Güvenlik Uyum Kuralı 11',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 11. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-012',
    title: 'Güvenlik Uyum Kuralı 12',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 12. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-013',
    title: 'Güvenlik Uyum Kuralı 13',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 13. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-014',
    title: 'Güvenlik Uyum Kuralı 14',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 14. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-015',
    title: 'Güvenlik Uyum Kuralı 15',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 15. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-016',
    title: 'Güvenlik Uyum Kuralı 16',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 16. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-017',
    title: 'Güvenlik Uyum Kuralı 17',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 17. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-018',
    title: 'Güvenlik Uyum Kuralı 18',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 18. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-019',
    title: 'Güvenlik Uyum Kuralı 19',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 19. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-020',
    title: 'Güvenlik Uyum Kuralı 20',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 20. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-021',
    title: 'Güvenlik Uyum Kuralı 21',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 21. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-022',
    title: 'Güvenlik Uyum Kuralı 22',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 22. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-023',
    title: 'Güvenlik Uyum Kuralı 23',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 23. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-024',
    title: 'Güvenlik Uyum Kuralı 24',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 24. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-025',
    title: 'Güvenlik Uyum Kuralı 25',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 25. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-026',
    title: 'Güvenlik Uyum Kuralı 26',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 26. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-027',
    title: 'Güvenlik Uyum Kuralı 27',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 27. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-028',
    title: 'Güvenlik Uyum Kuralı 28',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 28. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-029',
    title: 'Güvenlik Uyum Kuralı 29',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 29. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-030',
    title: 'Güvenlik Uyum Kuralı 30',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 30. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-031',
    title: 'Güvenlik Uyum Kuralı 31',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 31. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-032',
    title: 'Güvenlik Uyum Kuralı 32',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 32. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-033',
    title: 'Güvenlik Uyum Kuralı 33',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 33. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-034',
    title: 'Güvenlik Uyum Kuralı 34',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 34. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-035',
    title: 'Güvenlik Uyum Kuralı 35',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 35. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-036',
    title: 'Güvenlik Uyum Kuralı 36',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 36. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-037',
    title: 'Güvenlik Uyum Kuralı 37',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 37. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-038',
    title: 'Güvenlik Uyum Kuralı 38',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 38. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-039',
    title: 'Güvenlik Uyum Kuralı 39',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 39. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-040',
    title: 'Güvenlik Uyum Kuralı 40',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 40. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-041',
    title: 'Güvenlik Uyum Kuralı 41',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 41. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-042',
    title: 'Güvenlik Uyum Kuralı 42',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 42. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-043',
    title: 'Güvenlik Uyum Kuralı 43',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 43. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-044',
    title: 'Güvenlik Uyum Kuralı 44',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 44. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-045',
    title: 'Güvenlik Uyum Kuralı 45',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 45. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-046',
    title: 'Güvenlik Uyum Kuralı 46',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 46. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-047',
    title: 'Güvenlik Uyum Kuralı 47',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 47. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-048',
    title: 'Güvenlik Uyum Kuralı 48',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 48. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-049',
    title: 'Güvenlik Uyum Kuralı 49',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 49. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-050',
    title: 'Güvenlik Uyum Kuralı 50',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 50. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-051',
    title: 'Güvenlik Uyum Kuralı 51',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 51. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-052',
    title: 'Güvenlik Uyum Kuralı 52',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 52. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-053',
    title: 'Güvenlik Uyum Kuralı 53',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 53. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-054',
    title: 'Güvenlik Uyum Kuralı 54',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 54. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-055',
    title: 'Güvenlik Uyum Kuralı 55',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 55. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-056',
    title: 'Güvenlik Uyum Kuralı 56',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 56. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-057',
    title: 'Güvenlik Uyum Kuralı 57',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 57. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-058',
    title: 'Güvenlik Uyum Kuralı 58',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 58. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-059',
    title: 'Güvenlik Uyum Kuralı 59',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 59. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-060',
    title: 'Güvenlik Uyum Kuralı 60',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 60. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-061',
    title: 'Güvenlik Uyum Kuralı 61',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 61. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-062',
    title: 'Güvenlik Uyum Kuralı 62',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 62. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-063',
    title: 'Güvenlik Uyum Kuralı 63',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 63. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-064',
    title: 'Güvenlik Uyum Kuralı 64',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 64. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-065',
    title: 'Güvenlik Uyum Kuralı 65',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 65. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-066',
    title: 'Güvenlik Uyum Kuralı 66',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 66. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-067',
    title: 'Güvenlik Uyum Kuralı 67',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 67. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-068',
    title: 'Güvenlik Uyum Kuralı 68',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 68. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-069',
    title: 'Güvenlik Uyum Kuralı 69',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 69. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  },
  {
    policyId: 'POL-070',
    title: 'Güvenlik Uyum Kuralı 70',
    details: 'KVKK ve ISO 27001 standartları kapsamında işletmenizde uygulanması gereken 70. idari ve teknik koruma tedbiridir. Veri bütünlüğünü tam olarak garanti eder.'
  }
];
const MANIFESTO_TEXTS = [
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (1. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (2. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (3. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (4. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (5. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (6. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (7. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (8. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (9. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (10. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (11. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (12. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (13. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (14. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (15. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (16. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (17. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (18. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (19. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (20. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (21. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (22. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (23. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (24. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (25. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (26. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (27. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (28. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (29. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (30. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (31. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (32. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (33. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (34. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (35. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (36. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (37. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (38. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (39. Güvenlik Manifestosu Paragrafı)" ,
  "Kurumsal siber güvenlik yönetimi, yalnızca teknik sistemleri korumakla kalmayıp, şirketin pazar itibarını ve finansal sürekliliğini de güvence altına alan stratejik bir liderlik sorumluluğudur. Tehditlerin proaktif tespiti, saldırganların sistem açıklarını keşfetmeden önce kapatılmasını sağlar. Bu süreçte tüm iştiraklerin güvenlik standartları en üst düzeye çıkarılır. (40. Güvenlik Manifestosu Paragrafı)" 
];

export default function Hero() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Intro */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
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
              Nos Canda Tech • Siber Güvenlik
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Dijital Varlıklarınızı <br />
              <span style={{ color: ACCENT }}>Güven Altına</span> Alıyoruz
            </h1>
            <div className="h-1.5 w-24 rounded-full mx-auto mt-6" style={{ background: ACCENT }} />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto pt-4">
              Gelişen siber tehditler karşısında işletmenizi korumak için kapsamlı güvenlik çözümleri sunuyoruz.
              Proaktif güvenlik yaklaşımımızla olası tehditleri hasara dönüşmeden tespit ediyor ve bertaraf ediyoruz.
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
                <CoreMetricCard
                  metric={metric.metric}
                  value={metric.value}
                  description={metric.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security KPIs Detailed Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 font-semibold">
              Detaylı Güvenlik Metrikleri
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">Altyapı İzleme & Denetim Başarısı</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_METRICS.map((metric, sIdx) => (
              <ScrollReveal key={sIdx} direction="up" distance={20} delay={sIdx * 0.03}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-2 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="text-2xl font-extrabold text-emerald-600 font-mono tracking-tight">{metric.value}</div>
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{metric.metric}</div>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Manifesto */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
                Manifesto
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4 text-neutral-900">
                Siber Tehditlere Karşı Sıfır Güven (Zero-Trust) İlkelerimiz
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

      {/* Threat Mitigation Scenarios */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
              Kriz & Sızma Engelleme
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Saldırı Vektörleri ve Önleme Mekanizmaları</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {THREAT_VECTORS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${item.impact === 'Kritik' ? 'text-red-600 bg-red-50 border-red-100' : 'text-amber-600 bg-amber-50 border-amber-100'}`}>{item.impact} Risk Derecesi</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.vectorId}</span>
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-neutral-900">{item.threatName}</h3>
                    <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{item.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Policies Checklist */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 font-semibold">
              Regülasyonlar & Standartlar
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Kurumsal Güvenlik Protokolleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_POLICIES.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold">Yasal Uyum</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.policyId}</span>
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
