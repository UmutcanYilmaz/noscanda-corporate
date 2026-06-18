'use client';

import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#8B5CF6';
const ACCENT_BG = 'rgba(139, 92, 246, 0.06)';
const ACCENT_BORDER = 'rgba(139, 92, 246, 0.15)';

interface AnalyticsMetric {
  metric: string;
  value: string;
  description: string;
}

const AnalyticsMetricCard = ({ metric, value, description }: AnalyticsMetric) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-200/50 text-center space-y-4 hover:border-violet-500/30 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl font-extrabold text-violet-600 font-mono tracking-tight">{value}</div>
      <h3 className="font-cinzel text-sm font-bold text-neutral-900">{metric}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
const CORE_METRICS = [
  {
    metric: 'Veri Analiz Göstergesi 1',
    value: '96.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 1. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 2',
    value: '97.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 2. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 3',
    value: '98.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 3. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 4',
    value: '99.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 4. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 5',
    value: '101.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 5. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 6',
    value: '102.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 6. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 7',
    value: '103.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 7. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 8',
    value: '104.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 8. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 9',
    value: '105.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 9. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 10',
    value: '107.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 10. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 11',
    value: '108.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 11. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 12',
    value: '109.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 12. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 13',
    value: '110.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 13. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 14',
    value: '111.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 14. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 15',
    value: '113.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 15. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 16',
    value: '114.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 16. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 17',
    value: '115.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 17. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 18',
    value: '116.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 18. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 19',
    value: '117.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 19. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 20',
    value: '119.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 20. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 21',
    value: '120.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 21. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 22',
    value: '121.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 22. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 23',
    value: '122.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 23. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 24',
    value: '123.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 24. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 25',
    value: '125.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 25. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 26',
    value: '126.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 26. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 27',
    value: '127.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 27. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 28',
    value: '128.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 28. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 29',
    value: '129.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 29. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 30',
    value: '131.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 30. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 31',
    value: '132.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 31. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 32',
    value: '133.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 32. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 33',
    value: '134.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 33. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 34',
    value: '135.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 34. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 35',
    value: '137.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 35. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 36',
    value: '138.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 36. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 37',
    value: '139.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 37. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 38',
    value: '140.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 38. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 39',
    value: '141.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 39. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 40',
    value: '143.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 40. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 41',
    value: '144.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 41. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 42',
    value: '145.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 42. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 43',
    value: '146.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 43. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 44',
    value: '147.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 44. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 45',
    value: '149.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 45. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 46',
    value: '150.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 46. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 47',
    value: '151.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 47. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 48',
    value: '152.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 48. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 49',
    value: '153.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 49. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 50',
    value: '155.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 50. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 51',
    value: '156.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 51. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 52',
    value: '157.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 52. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 53',
    value: '158.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 53. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 54',
    value: '159.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 54. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 55',
    value: '161.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 55. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 56',
    value: '162.2%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 56. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 57',
    value: '163.4%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 57. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 58',
    value: '164.6%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 58. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 59',
    value: '165.8%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 59. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  },
  {
    metric: 'Veri Analiz Göstergesi 60',
    value: '167.0%',
    description: 'Veri gölü üzerindeki anlık sorgulama ve 60. tahmin modelimizin doğruluk oranıdır. Karar destek sistemlerimizin kalitesini belirler.'
  }
];
const DATA_PARADIGMS = [
  {
    paradigmId: 'DP-001',
    title: 'Veri Bilimi İlkesi 1',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 1. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-002',
    title: 'Veri Bilimi İlkesi 2',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 2. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-003',
    title: 'Veri Bilimi İlkesi 3',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 3. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-004',
    title: 'Veri Bilimi İlkesi 4',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 4. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-005',
    title: 'Veri Bilimi İlkesi 5',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 5. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-006',
    title: 'Veri Bilimi İlkesi 6',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 6. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-007',
    title: 'Veri Bilimi İlkesi 7',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 7. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-008',
    title: 'Veri Bilimi İlkesi 8',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 8. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-009',
    title: 'Veri Bilimi İlkesi 9',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 9. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-010',
    title: 'Veri Bilimi İlkesi 10',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 10. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-011',
    title: 'Veri Bilimi İlkesi 11',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 11. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-012',
    title: 'Veri Bilimi İlkesi 12',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 12. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-013',
    title: 'Veri Bilimi İlkesi 13',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 13. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-014',
    title: 'Veri Bilimi İlkesi 14',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 14. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-015',
    title: 'Veri Bilimi İlkesi 15',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 15. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-016',
    title: 'Veri Bilimi İlkesi 16',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 16. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-017',
    title: 'Veri Bilimi İlkesi 17',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 17. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-018',
    title: 'Veri Bilimi İlkesi 18',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 18. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-019',
    title: 'Veri Bilimi İlkesi 19',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 19. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-020',
    title: 'Veri Bilimi İlkesi 20',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 20. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-021',
    title: 'Veri Bilimi İlkesi 21',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 21. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-022',
    title: 'Veri Bilimi İlkesi 22',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 22. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-023',
    title: 'Veri Bilimi İlkesi 23',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 23. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-024',
    title: 'Veri Bilimi İlkesi 24',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 24. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-025',
    title: 'Veri Bilimi İlkesi 25',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 25. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-026',
    title: 'Veri Bilimi İlkesi 26',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 26. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-027',
    title: 'Veri Bilimi İlkesi 27',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 27. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-028',
    title: 'Veri Bilimi İlkesi 28',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 28. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-029',
    title: 'Veri Bilimi İlkesi 29',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 29. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-030',
    title: 'Veri Bilimi İlkesi 30',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 30. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-031',
    title: 'Veri Bilimi İlkesi 31',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 31. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-032',
    title: 'Veri Bilimi İlkesi 32',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 32. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-033',
    title: 'Veri Bilimi İlkesi 33',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 33. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-034',
    title: 'Veri Bilimi İlkesi 34',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 34. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-035',
    title: 'Veri Bilimi İlkesi 35',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 35. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-036',
    title: 'Veri Bilimi İlkesi 36',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 36. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-037',
    title: 'Veri Bilimi İlkesi 37',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 37. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-038',
    title: 'Veri Bilimi İlkesi 38',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 38. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-039',
    title: 'Veri Bilimi İlkesi 39',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 39. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-040',
    title: 'Veri Bilimi İlkesi 40',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 40. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-041',
    title: 'Veri Bilimi İlkesi 41',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 41. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-042',
    title: 'Veri Bilimi İlkesi 42',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 42. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-043',
    title: 'Veri Bilimi İlkesi 43',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 43. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-044',
    title: 'Veri Bilimi İlkesi 44',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 44. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-045',
    title: 'Veri Bilimi İlkesi 45',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 45. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-046',
    title: 'Veri Bilimi İlkesi 46',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 46. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-047',
    title: 'Veri Bilimi İlkesi 47',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 47. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-048',
    title: 'Veri Bilimi İlkesi 48',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 48. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-049',
    title: 'Veri Bilimi İlkesi 49',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 49. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-050',
    title: 'Veri Bilimi İlkesi 50',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 50. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-051',
    title: 'Veri Bilimi İlkesi 51',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 51. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-052',
    title: 'Veri Bilimi İlkesi 52',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 52. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-053',
    title: 'Veri Bilimi İlkesi 53',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 53. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-054',
    title: 'Veri Bilimi İlkesi 54',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 54. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-055',
    title: 'Veri Bilimi İlkesi 55',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 55. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-056',
    title: 'Veri Bilimi İlkesi 56',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 56. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-057',
    title: 'Veri Bilimi İlkesi 57',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 57. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-058',
    title: 'Veri Bilimi İlkesi 58',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 58. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-059',
    title: 'Veri Bilimi İlkesi 59',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 59. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-060',
    title: 'Veri Bilimi İlkesi 60',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 60. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-061',
    title: 'Veri Bilimi İlkesi 61',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 61. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-062',
    title: 'Veri Bilimi İlkesi 62',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 62. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-063',
    title: 'Veri Bilimi İlkesi 63',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 63. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-064',
    title: 'Veri Bilimi İlkesi 64',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 64. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-065',
    title: 'Veri Bilimi İlkesi 65',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 65. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-066',
    title: 'Veri Bilimi İlkesi 66',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 66. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-067',
    title: 'Veri Bilimi İlkesi 67',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 67. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-068',
    title: 'Veri Bilimi İlkesi 68',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 68. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-069',
    title: 'Veri Bilimi İlkesi 69',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 69. istatistiksel veri işleme standardıdır.'
  },
  {
    paradigmId: 'DP-070',
    title: 'Veri Bilimi İlkesi 70',
    details: 'Büyük veri kümelerini işlerken ve analiz modelleri kurarken uyguladığımız 70. istatistiksel veri işleme standardıdır.'
  }
];
const DATABASE_OPTIMIZATIONS = [
  {
    optId: 'DO-001',
    title: 'Veri Tabanı Optimizasyonu 1',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 1. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-002',
    title: 'Veri Tabanı Optimizasyonu 2',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 2. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-003',
    title: 'Veri Tabanı Optimizasyonu 3',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 3. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-004',
    title: 'Veri Tabanı Optimizasyonu 4',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 4. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-005',
    title: 'Veri Tabanı Optimizasyonu 5',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 5. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-006',
    title: 'Veri Tabanı Optimizasyonu 6',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 6. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-007',
    title: 'Veri Tabanı Optimizasyonu 7',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 7. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-008',
    title: 'Veri Tabanı Optimizasyonu 8',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 8. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-009',
    title: 'Veri Tabanı Optimizasyonu 9',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 9. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-010',
    title: 'Veri Tabanı Optimizasyonu 10',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 10. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-011',
    title: 'Veri Tabanı Optimizasyonu 11',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 11. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-012',
    title: 'Veri Tabanı Optimizasyonu 12',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 12. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-013',
    title: 'Veri Tabanı Optimizasyonu 13',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 13. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-014',
    title: 'Veri Tabanı Optimizasyonu 14',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 14. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-015',
    title: 'Veri Tabanı Optimizasyonu 15',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 15. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-016',
    title: 'Veri Tabanı Optimizasyonu 16',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 16. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-017',
    title: 'Veri Tabanı Optimizasyonu 17',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 17. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-018',
    title: 'Veri Tabanı Optimizasyonu 18',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 18. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-019',
    title: 'Veri Tabanı Optimizasyonu 19',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 19. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-020',
    title: 'Veri Tabanı Optimizasyonu 20',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 20. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-021',
    title: 'Veri Tabanı Optimizasyonu 21',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 21. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-022',
    title: 'Veri Tabanı Optimizasyonu 22',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 22. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-023',
    title: 'Veri Tabanı Optimizasyonu 23',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 23. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-024',
    title: 'Veri Tabanı Optimizasyonu 24',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 24. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-025',
    title: 'Veri Tabanı Optimizasyonu 25',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 25. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-026',
    title: 'Veri Tabanı Optimizasyonu 26',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 26. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-027',
    title: 'Veri Tabanı Optimizasyonu 27',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 27. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-028',
    title: 'Veri Tabanı Optimizasyonu 28',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 28. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-029',
    title: 'Veri Tabanı Optimizasyonu 29',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 29. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-030',
    title: 'Veri Tabanı Optimizasyonu 30',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 30. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-031',
    title: 'Veri Tabanı Optimizasyonu 31',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 31. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-032',
    title: 'Veri Tabanı Optimizasyonu 32',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 32. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-033',
    title: 'Veri Tabanı Optimizasyonu 33',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 33. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-034',
    title: 'Veri Tabanı Optimizasyonu 34',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 34. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-035',
    title: 'Veri Tabanı Optimizasyonu 35',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 35. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-036',
    title: 'Veri Tabanı Optimizasyonu 36',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 36. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-037',
    title: 'Veri Tabanı Optimizasyonu 37',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 37. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-038',
    title: 'Veri Tabanı Optimizasyonu 38',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 38. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-039',
    title: 'Veri Tabanı Optimizasyonu 39',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 39. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-040',
    title: 'Veri Tabanı Optimizasyonu 40',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 40. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-041',
    title: 'Veri Tabanı Optimizasyonu 41',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 41. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-042',
    title: 'Veri Tabanı Optimizasyonu 42',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 42. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-043',
    title: 'Veri Tabanı Optimizasyonu 43',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 43. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-044',
    title: 'Veri Tabanı Optimizasyonu 44',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 44. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-045',
    title: 'Veri Tabanı Optimizasyonu 45',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 45. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-046',
    title: 'Veri Tabanı Optimizasyonu 46',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 46. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-047',
    title: 'Veri Tabanı Optimizasyonu 47',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 47. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-048',
    title: 'Veri Tabanı Optimizasyonu 48',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 48. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-049',
    title: 'Veri Tabanı Optimizasyonu 49',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 49. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-050',
    title: 'Veri Tabanı Optimizasyonu 50',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 50. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-051',
    title: 'Veri Tabanı Optimizasyonu 51',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 51. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-052',
    title: 'Veri Tabanı Optimizasyonu 52',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 52. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-053',
    title: 'Veri Tabanı Optimizasyonu 53',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 53. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-054',
    title: 'Veri Tabanı Optimizasyonu 54',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 54. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-055',
    title: 'Veri Tabanı Optimizasyonu 55',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 55. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-056',
    title: 'Veri Tabanı Optimizasyonu 56',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 56. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-057',
    title: 'Veri Tabanı Optimizasyonu 57',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 57. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-058',
    title: 'Veri Tabanı Optimizasyonu 58',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 58. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-059',
    title: 'Veri Tabanı Optimizasyonu 59',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 59. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-060',
    title: 'Veri Tabanı Optimizasyonu 60',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 60. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-061',
    title: 'Veri Tabanı Optimizasyonu 61',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 61. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-062',
    title: 'Veri Tabanı Optimizasyonu 62',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 62. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-063',
    title: 'Veri Tabanı Optimizasyonu 63',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 63. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-064',
    title: 'Veri Tabanı Optimizasyonu 64',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 64. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-065',
    title: 'Veri Tabanı Optimizasyonu 65',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 65. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-066',
    title: 'Veri Tabanı Optimizasyonu 66',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 66. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-067',
    title: 'Veri Tabanı Optimizasyonu 67',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 67. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-068',
    title: 'Veri Tabanı Optimizasyonu 68',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 68. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-069',
    title: 'Veri Tabanı Optimizasyonu 69',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 69. indeksleme ve bölümleme kuralıdır.'
  },
  {
    optId: 'DO-070',
    title: 'Veri Tabanı Optimizasyonu 70',
    details: 'Sorgu yanıt sürelerini düşüren ve veri ambarlarımızın yazma performansını artıran 70. indeksleme ve bölümleme kuralıdır.'
  }
];
const MANIFESTO_TEXTS = [
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (1. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (2. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (3. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (4. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (5. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (6. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (7. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (8. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (9. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (10. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (11. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (12. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (13. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (14. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (15. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (16. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (17. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (18. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (19. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (20. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (21. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (22. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (23. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (24. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (25. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (26. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (27. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (28. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (29. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (30. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (31. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (32. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (33. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (34. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (35. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (36. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (37. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (38. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (39. Veri Bilimi Manifestosu Paragrafı)" ,
  "Veri analizi ve bilimi, ham verinin kurumsal zekâya ve stratejik yol haritasına dönüştürülmesi sürecidir. Doğru tahmin modelleri, pazar dalgalanmalarını öngörmenizi ve operasyonel maliyetlerinizi optimize etmenizi sağlar. Güvenilir, tarafsız ve gerçek zamanlı verilerle iş kararlarınızı destekliyoruz. (40. Veri Bilimi Manifestosu Paragrafı)" 
];

export default function Hero() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Intro */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
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
              Nos Canda Tech • Veri Analizi & Bilimi
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Veriden <span style={{ color: ACCENT }}>Değer</span> Üretiyoruz
            </h1>
            <div className="h-1.5 w-24 rounded-full mx-auto mt-6" style={{ background: ACCENT }} />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto pt-4">
              Yapılandırılmış ve yapılandırılmamış verilerinizi anlamlı içgörülere dönüştürüyoruz.
              İş zekâsından makine öğrenmesine, veri mühendisliğinden gerçek zamanlı analitik
              dashboard'lara kadar kapsamlı veri çözümleri sunuyoruz.
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
                <AnalyticsMetricCard
                  metric={metric.metric}
                  value={metric.value}
                  description={metric.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data KPIs Detailed Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full border border-violet-100 font-semibold">
              Detaylı Analitik Metrikleri
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">Veri İşleme ve Model Başarısı</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_METRICS.map((metric, sIdx) => (
              <ScrollReveal key={sIdx} direction="up" distance={20} delay={sIdx * 0.03}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-2 hover:border-violet-500/30 transition-all duration-300">
                  <div className="text-2xl font-extrabold text-violet-600 font-mono tracking-tight">{metric.value}</div>
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{metric.metric}</div>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Manifesto */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100 font-semibold">
                Veri Manifestosu
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4 text-neutral-900">
                Veriye Dayalı Yönetim ve Karar Mekanizmaları
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

      {/* Data Paradigms Grid */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100 font-semibold">
              Veri Standartları
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">İstatistiksel Analiz Standartları</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA_PARADIGMS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-violet-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full border text-violet-600 bg-violet-50 border-violet-100">İstatistik Kuralı</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.paradigmId}</span>
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

      {/* Database Optimizations Checklist */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full border border-violet-100 font-semibold">
              Veritabanı Yapısı
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Büyük Veri Optimizasyon Teknikleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATABASE_OPTIMIZATIONS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-violet-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100 font-semibold">Bölümleme</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.optId}</span>
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
