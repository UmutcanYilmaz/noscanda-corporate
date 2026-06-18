'use client';

import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#F59E0B';
const ACCENT_BG = 'rgba(245, 158, 11, 0.06)';
const ACCENT_BORDER = 'rgba(245, 158, 11, 0.15)';

interface MobileCoreMetric {
  metric: string;
  value: string;
  description: string;
}

const MobileMetricCard = ({ metric, value, description }: MobileCoreMetric) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-200/50 text-center space-y-4 hover:border-amber-500/30 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl font-extrabold text-amber-600 font-mono tracking-tight">{value}</div>
      <h3 className="font-cinzel text-sm font-bold text-neutral-900">{metric}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
const CORE_METRICS = [
  {
    metric: 'Mobil Gösterge 1',
    value: '60.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 1. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 2',
    value: '61.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 2. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 3',
    value: '61.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 3. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 4',
    value: '62.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 4. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 5',
    value: '62.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 5. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 6',
    value: '63.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 6. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 7',
    value: '63.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 7. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 8',
    value: '64.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 8. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 9',
    value: '64.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 9. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 10',
    value: '65.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 10. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 11',
    value: '65.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 11. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 12',
    value: '66.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 12. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 13',
    value: '66.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 13. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 14',
    value: '67.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 14. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 15',
    value: '67.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 15. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 16',
    value: '68.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 16. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 17',
    value: '68.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 17. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 18',
    value: '69.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 18. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 19',
    value: '69.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 19. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 20',
    value: '70.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 20. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 21',
    value: '70.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 21. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 22',
    value: '71.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 22. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 23',
    value: '71.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 23. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 24',
    value: '72.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 24. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 25',
    value: '72.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 25. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 26',
    value: '73.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 26. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 27',
    value: '73.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 27. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 28',
    value: '74.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 28. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 29',
    value: '74.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 29. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 30',
    value: '75.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 30. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 31',
    value: '75.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 31. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 32',
    value: '76.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 32. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 33',
    value: '76.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 33. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 34',
    value: '77.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 34. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 35',
    value: '77.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 35. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 36',
    value: '78.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 36. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 37',
    value: '78.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 37. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 38',
    value: '79.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 38. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 39',
    value: '79.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 39. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 40',
    value: '80.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 40. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 41',
    value: '80.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 41. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 42',
    value: '81.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 42. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 43',
    value: '81.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 43. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 44',
    value: '82.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 44. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 45',
    value: '82.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 45. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 46',
    value: '83.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 46. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 47',
    value: '83.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 47. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 48',
    value: '84.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 48. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 49',
    value: '84.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 49. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 50',
    value: '85.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 50. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 51',
    value: '85.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 51. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 52',
    value: '86.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 52. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 53',
    value: '86.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 53. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 54',
    value: '87.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 54. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 55',
    value: '87.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 55. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 56',
    value: '88.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 56. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 57',
    value: '88.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 57. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 58',
    value: '89.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 58. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 59',
    value: '89.5 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 59. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  },
  {
    metric: 'Mobil Gösterge 60',
    value: '90.0 FPS',
    description: 'Mobil uygulamanın render akıcılığı ve 60. arayüz animasyonu tazeleme hızıdır. Kullanıcı deneyimini maksimize eder.'
  }
];
const UX_GUIDELINES = [
  {
    guideId: 'UG-001',
    title: 'Mobil Kullanıcı Kuralı 1',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 1. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-002',
    title: 'Mobil Kullanıcı Kuralı 2',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 2. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-003',
    title: 'Mobil Kullanıcı Kuralı 3',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 3. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-004',
    title: 'Mobil Kullanıcı Kuralı 4',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 4. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-005',
    title: 'Mobil Kullanıcı Kuralı 5',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 5. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-006',
    title: 'Mobil Kullanıcı Kuralı 6',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 6. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-007',
    title: 'Mobil Kullanıcı Kuralı 7',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 7. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-008',
    title: 'Mobil Kullanıcı Kuralı 8',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 8. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-009',
    title: 'Mobil Kullanıcı Kuralı 9',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 9. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-010',
    title: 'Mobil Kullanıcı Kuralı 10',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 10. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-011',
    title: 'Mobil Kullanıcı Kuralı 11',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 11. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-012',
    title: 'Mobil Kullanıcı Kuralı 12',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 12. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-013',
    title: 'Mobil Kullanıcı Kuralı 13',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 13. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-014',
    title: 'Mobil Kullanıcı Kuralı 14',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 14. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-015',
    title: 'Mobil Kullanıcı Kuralı 15',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 15. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-016',
    title: 'Mobil Kullanıcı Kuralı 16',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 16. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-017',
    title: 'Mobil Kullanıcı Kuralı 17',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 17. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-018',
    title: 'Mobil Kullanıcı Kuralı 18',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 18. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-019',
    title: 'Mobil Kullanıcı Kuralı 19',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 19. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-020',
    title: 'Mobil Kullanıcı Kuralı 20',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 20. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-021',
    title: 'Mobil Kullanıcı Kuralı 21',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 21. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-022',
    title: 'Mobil Kullanıcı Kuralı 22',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 22. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-023',
    title: 'Mobil Kullanıcı Kuralı 23',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 23. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-024',
    title: 'Mobil Kullanıcı Kuralı 24',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 24. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-025',
    title: 'Mobil Kullanıcı Kuralı 25',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 25. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-026',
    title: 'Mobil Kullanıcı Kuralı 26',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 26. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-027',
    title: 'Mobil Kullanıcı Kuralı 27',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 27. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-028',
    title: 'Mobil Kullanıcı Kuralı 28',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 28. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-029',
    title: 'Mobil Kullanıcı Kuralı 29',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 29. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-030',
    title: 'Mobil Kullanıcı Kuralı 30',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 30. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-031',
    title: 'Mobil Kullanıcı Kuralı 31',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 31. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-032',
    title: 'Mobil Kullanıcı Kuralı 32',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 32. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-033',
    title: 'Mobil Kullanıcı Kuralı 33',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 33. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-034',
    title: 'Mobil Kullanıcı Kuralı 34',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 34. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-035',
    title: 'Mobil Kullanıcı Kuralı 35',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 35. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-036',
    title: 'Mobil Kullanıcı Kuralı 36',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 36. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-037',
    title: 'Mobil Kullanıcı Kuralı 37',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 37. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-038',
    title: 'Mobil Kullanıcı Kuralı 38',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 38. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-039',
    title: 'Mobil Kullanıcı Kuralı 39',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 39. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-040',
    title: 'Mobil Kullanıcı Kuralı 40',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 40. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-041',
    title: 'Mobil Kullanıcı Kuralı 41',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 41. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-042',
    title: 'Mobil Kullanıcı Kuralı 42',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 42. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-043',
    title: 'Mobil Kullanıcı Kuralı 43',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 43. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-044',
    title: 'Mobil Kullanıcı Kuralı 44',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 44. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-045',
    title: 'Mobil Kullanıcı Kuralı 45',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 45. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-046',
    title: 'Mobil Kullanıcı Kuralı 46',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 46. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-047',
    title: 'Mobil Kullanıcı Kuralı 47',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 47. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-048',
    title: 'Mobil Kullanıcı Kuralı 48',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 48. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-049',
    title: 'Mobil Kullanıcı Kuralı 49',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 49. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-050',
    title: 'Mobil Kullanıcı Kuralı 50',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 50. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-051',
    title: 'Mobil Kullanıcı Kuralı 51',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 51. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-052',
    title: 'Mobil Kullanıcı Kuralı 52',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 52. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-053',
    title: 'Mobil Kullanıcı Kuralı 53',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 53. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-054',
    title: 'Mobil Kullanıcı Kuralı 54',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 54. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-055',
    title: 'Mobil Kullanıcı Kuralı 55',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 55. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-056',
    title: 'Mobil Kullanıcı Kuralı 56',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 56. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-057',
    title: 'Mobil Kullanıcı Kuralı 57',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 57. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-058',
    title: 'Mobil Kullanıcı Kuralı 58',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 58. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-059',
    title: 'Mobil Kullanıcı Kuralı 59',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 59. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-060',
    title: 'Mobil Kullanıcı Kuralı 60',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 60. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-061',
    title: 'Mobil Kullanıcı Kuralı 61',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 61. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-062',
    title: 'Mobil Kullanıcı Kuralı 62',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 62. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-063',
    title: 'Mobil Kullanıcı Kuralı 63',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 63. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-064',
    title: 'Mobil Kullanıcı Kuralı 64',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 64. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-065',
    title: 'Mobil Kullanıcı Kuralı 65',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 65. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-066',
    title: 'Mobil Kullanıcı Kuralı 66',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 66. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-067',
    title: 'Mobil Kullanıcı Kuralı 67',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 67. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-068',
    title: 'Mobil Kullanıcı Kuralı 68',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 68. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-069',
    title: 'Mobil Kullanıcı Kuralı 69',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 69. dokunmatik alan ve akış rehberidir.'
  },
  {
    guideId: 'UG-070',
    title: 'Mobil Kullanıcı Kuralı 70',
    details: 'Apple Human Interface ve Google Material Design standartları çerçevesinde tasarladığımız 70. dokunmatik alan ve akış rehberidir.'
  }
];
const ARCHITECTURE_PATTERNS = [
  {
    patternId: 'AP-001',
    title: 'Mobil Mimari Desen 1',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 1. modül yapımızdır.'
  },
  {
    patternId: 'AP-002',
    title: 'Mobil Mimari Desen 2',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 2. modül yapımızdır.'
  },
  {
    patternId: 'AP-003',
    title: 'Mobil Mimari Desen 3',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 3. modül yapımızdır.'
  },
  {
    patternId: 'AP-004',
    title: 'Mobil Mimari Desen 4',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 4. modül yapımızdır.'
  },
  {
    patternId: 'AP-005',
    title: 'Mobil Mimari Desen 5',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 5. modül yapımızdır.'
  },
  {
    patternId: 'AP-006',
    title: 'Mobil Mimari Desen 6',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 6. modül yapımızdır.'
  },
  {
    patternId: 'AP-007',
    title: 'Mobil Mimari Desen 7',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 7. modül yapımızdır.'
  },
  {
    patternId: 'AP-008',
    title: 'Mobil Mimari Desen 8',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 8. modül yapımızdır.'
  },
  {
    patternId: 'AP-009',
    title: 'Mobil Mimari Desen 9',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 9. modül yapımızdır.'
  },
  {
    patternId: 'AP-010',
    title: 'Mobil Mimari Desen 10',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 10. modül yapımızdır.'
  },
  {
    patternId: 'AP-011',
    title: 'Mobil Mimari Desen 11',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 11. modül yapımızdır.'
  },
  {
    patternId: 'AP-012',
    title: 'Mobil Mimari Desen 12',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 12. modül yapımızdır.'
  },
  {
    patternId: 'AP-013',
    title: 'Mobil Mimari Desen 13',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 13. modül yapımızdır.'
  },
  {
    patternId: 'AP-014',
    title: 'Mobil Mimari Desen 14',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 14. modül yapımızdır.'
  },
  {
    patternId: 'AP-015',
    title: 'Mobil Mimari Desen 15',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 15. modül yapımızdır.'
  },
  {
    patternId: 'AP-016',
    title: 'Mobil Mimari Desen 16',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 16. modül yapımızdır.'
  },
  {
    patternId: 'AP-017',
    title: 'Mobil Mimari Desen 17',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 17. modül yapımızdır.'
  },
  {
    patternId: 'AP-018',
    title: 'Mobil Mimari Desen 18',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 18. modül yapımızdır.'
  },
  {
    patternId: 'AP-019',
    title: 'Mobil Mimari Desen 19',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 19. modül yapımızdır.'
  },
  {
    patternId: 'AP-020',
    title: 'Mobil Mimari Desen 20',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 20. modül yapımızdır.'
  },
  {
    patternId: 'AP-021',
    title: 'Mobil Mimari Desen 21',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 21. modül yapımızdır.'
  },
  {
    patternId: 'AP-022',
    title: 'Mobil Mimari Desen 22',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 22. modül yapımızdır.'
  },
  {
    patternId: 'AP-023',
    title: 'Mobil Mimari Desen 23',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 23. modül yapımızdır.'
  },
  {
    patternId: 'AP-024',
    title: 'Mobil Mimari Desen 24',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 24. modül yapımızdır.'
  },
  {
    patternId: 'AP-025',
    title: 'Mobil Mimari Desen 25',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 25. modül yapımızdır.'
  },
  {
    patternId: 'AP-026',
    title: 'Mobil Mimari Desen 26',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 26. modül yapımızdır.'
  },
  {
    patternId: 'AP-027',
    title: 'Mobil Mimari Desen 27',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 27. modül yapımızdır.'
  },
  {
    patternId: 'AP-028',
    title: 'Mobil Mimari Desen 28',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 28. modül yapımızdır.'
  },
  {
    patternId: 'AP-029',
    title: 'Mobil Mimari Desen 29',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 29. modül yapımızdır.'
  },
  {
    patternId: 'AP-030',
    title: 'Mobil Mimari Desen 30',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 30. modül yapımızdır.'
  },
  {
    patternId: 'AP-031',
    title: 'Mobil Mimari Desen 31',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 31. modül yapımızdır.'
  },
  {
    patternId: 'AP-032',
    title: 'Mobil Mimari Desen 32',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 32. modül yapımızdır.'
  },
  {
    patternId: 'AP-033',
    title: 'Mobil Mimari Desen 33',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 33. modül yapımızdır.'
  },
  {
    patternId: 'AP-034',
    title: 'Mobil Mimari Desen 34',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 34. modül yapımızdır.'
  },
  {
    patternId: 'AP-035',
    title: 'Mobil Mimari Desen 35',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 35. modül yapımızdır.'
  },
  {
    patternId: 'AP-036',
    title: 'Mobil Mimari Desen 36',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 36. modül yapımızdır.'
  },
  {
    patternId: 'AP-037',
    title: 'Mobil Mimari Desen 37',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 37. modül yapımızdır.'
  },
  {
    patternId: 'AP-038',
    title: 'Mobil Mimari Desen 38',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 38. modül yapımızdır.'
  },
  {
    patternId: 'AP-039',
    title: 'Mobil Mimari Desen 39',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 39. modül yapımızdır.'
  },
  {
    patternId: 'AP-040',
    title: 'Mobil Mimari Desen 40',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 40. modül yapımızdır.'
  },
  {
    patternId: 'AP-041',
    title: 'Mobil Mimari Desen 41',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 41. modül yapımızdır.'
  },
  {
    patternId: 'AP-042',
    title: 'Mobil Mimari Desen 42',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 42. modül yapımızdır.'
  },
  {
    patternId: 'AP-043',
    title: 'Mobil Mimari Desen 43',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 43. modül yapımızdır.'
  },
  {
    patternId: 'AP-044',
    title: 'Mobil Mimari Desen 44',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 44. modül yapımızdır.'
  },
  {
    patternId: 'AP-045',
    title: 'Mobil Mimari Desen 45',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 45. modül yapımızdır.'
  },
  {
    patternId: 'AP-046',
    title: 'Mobil Mimari Desen 46',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 46. modül yapımızdır.'
  },
  {
    patternId: 'AP-047',
    title: 'Mobil Mimari Desen 47',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 47. modül yapımızdır.'
  },
  {
    patternId: 'AP-048',
    title: 'Mobil Mimari Desen 48',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 48. modül yapımızdır.'
  },
  {
    patternId: 'AP-049',
    title: 'Mobil Mimari Desen 49',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 49. modül yapımızdır.'
  },
  {
    patternId: 'AP-050',
    title: 'Mobil Mimari Desen 50',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 50. modül yapımızdır.'
  },
  {
    patternId: 'AP-051',
    title: 'Mobil Mimari Desen 51',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 51. modül yapımızdır.'
  },
  {
    patternId: 'AP-052',
    title: 'Mobil Mimari Desen 52',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 52. modül yapımızdır.'
  },
  {
    patternId: 'AP-053',
    title: 'Mobil Mimari Desen 53',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 53. modül yapımızdır.'
  },
  {
    patternId: 'AP-054',
    title: 'Mobil Mimari Desen 54',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 54. modül yapımızdır.'
  },
  {
    patternId: 'AP-055',
    title: 'Mobil Mimari Desen 55',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 55. modül yapımızdır.'
  },
  {
    patternId: 'AP-056',
    title: 'Mobil Mimari Desen 56',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 56. modül yapımızdır.'
  },
  {
    patternId: 'AP-057',
    title: 'Mobil Mimari Desen 57',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 57. modül yapımızdır.'
  },
  {
    patternId: 'AP-058',
    title: 'Mobil Mimari Desen 58',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 58. modül yapımızdır.'
  },
  {
    patternId: 'AP-059',
    title: 'Mobil Mimari Desen 59',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 59. modül yapımızdır.'
  },
  {
    patternId: 'AP-060',
    title: 'Mobil Mimari Desen 60',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 60. modül yapımızdır.'
  },
  {
    patternId: 'AP-061',
    title: 'Mobil Mimari Desen 61',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 61. modül yapımızdır.'
  },
  {
    patternId: 'AP-062',
    title: 'Mobil Mimari Desen 62',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 62. modül yapımızdır.'
  },
  {
    patternId: 'AP-063',
    title: 'Mobil Mimari Desen 63',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 63. modül yapımızdır.'
  },
  {
    patternId: 'AP-064',
    title: 'Mobil Mimari Desen 64',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 64. modül yapımızdır.'
  },
  {
    patternId: 'AP-065',
    title: 'Mobil Mimari Desen 65',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 65. modül yapımızdır.'
  },
  {
    patternId: 'AP-066',
    title: 'Mobil Mimari Desen 66',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 66. modül yapımızdır.'
  },
  {
    patternId: 'AP-067',
    title: 'Mobil Mimari Desen 67',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 67. modül yapımızdır.'
  },
  {
    patternId: 'AP-068',
    title: 'Mobil Mimari Desen 68',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 68. modül yapımızdır.'
  },
  {
    patternId: 'AP-069',
    title: 'Mobil Mimari Desen 69',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 69. modül yapımızdır.'
  },
  {
    patternId: 'AP-070',
    title: 'Mobil Mimari Desen 70',
    details: 'Uygulama belleğini yormayan, internet bağlantısı olmadığında da veri okuyabilen offline-first 70. modül yapımızdır.'
  }
];
const MANIFESTO_TEXTS = [
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (1. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (2. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (3. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (4. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (5. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (6. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (7. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (8. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (9. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (10. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (11. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (12. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (13. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (14. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (15. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (16. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (17. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (18. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (19. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (20. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (21. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (22. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (23. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (24. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (25. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (26. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (27. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (28. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (29. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (30. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (31. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (32. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (33. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (34. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (35. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (36. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (37. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (38. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (39. Mobil Mühendislik Manifestosu Paragrafı)" ,
  "Mobil yazılım mühendisliği, kullanıcıların her an ve her yerde şirketinizin servislerine en hızlı şekilde ulaşmasını sağlayan bağımsız bir uzmanlık alanıdır. Cihaz pil ömrü, bellek kullanımı ve veri optimizasyonları en üst düzeyde tutularak, 60 FPS akıcılığında bir performans sunulmalıdır. (40. Mobil Mühendislik Manifestosu Paragrafı)" 
];

export default function Hero() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Intro */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
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
              Nos Canda Tech • Mobil Uygulama
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Mobilde <br />
              <span style={{ color: ACCENT }}>Fark Yaratın</span>
            </h1>
            <div className="h-1.5 w-24 rounded-full mx-auto mt-6" style={{ background: ACCENT }} />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto pt-4">
              Kullanıcılarınızın cebinde yer alan, 60 FPS akıcılığında çalışan ve markanızın
              dijital uzantısı olan mobil uygulamalar geliştiriyoruz. Fikirden markete kadar
              tüm süreçte yanınızdayız.
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
                <MobileMetricCard
                  metric={metric.metric}
                  value={metric.value}
                  description={metric.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile KPIs Detailed Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 font-semibold">
              Detaylı Mobil Metrikler
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">Uygulama Performansı ve Akış Başarısı</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_METRICS.map((metric, sIdx) => (
              <ScrollReveal key={sIdx} direction="up" distance={20} delay={sIdx * 0.03}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-2 hover:border-amber-500/30 transition-all duration-300">
                  <div className="text-2xl font-extrabold text-amber-600 font-mono tracking-tight">{metric.value}</div>
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{metric.metric}</div>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Manifesto */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Mobil Manifesto
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4 text-neutral-900">
                Kullanıcı Odaklı Mobil Mühendislik Prensiplerimiz
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

      {/* UX Guidelines Grid */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
              Kullanıcı Deneyimi
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Arayüz ve Akış Kılavuzlarımız</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {UX_GUIDELINES.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full border text-amber-600 bg-amber-50 border-amber-100">Tasarım Kuralı</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.guideId}</span>
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

      {/* Mobile Architecture Checklist */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
              Sistem Altyapısı
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Kararlı Mobil Mimarimiz</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARCHITECTURE_PATTERNS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100 font-semibold">Mobil Altyapı</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.patternId}</span>
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
