'use client';

import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#DB2777';
const ACCENT_BG = 'rgba(219, 39, 119, 0.06)';
const ACCENT_BORDER = 'rgba(219, 39, 119, 0.15)';

interface AutomationMetric {
  metric: string;
  value: string;
  description: string;
}

const AutomationMetricCard = ({ metric, value, description }: AutomationMetric) => {
  return (
    <div className="p-8 rounded-3xl bg-white border border-neutral-200/50 text-center space-y-4 hover:border-pink-500/30 hover:shadow-lg transition-all duration-300">
      <div className="text-3xl font-extrabold text-pink-600 font-mono tracking-tight">{value}</div>
      <h3 className="font-cinzel text-sm font-bold text-neutral-900">{metric}</h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};
const CORE_METRICS = [
  {
    metric: 'Otomasyon Göstergesi 1',
    value: 'x2.2',
    description: 'Yapay zeka asistanlarımızın ve 1. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 2',
    value: 'x2.4',
    description: 'Yapay zeka asistanlarımızın ve 2. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 3',
    value: 'x2.6',
    description: 'Yapay zeka asistanlarımızın ve 3. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 4',
    value: 'x2.8',
    description: 'Yapay zeka asistanlarımızın ve 4. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 5',
    value: 'x3.0',
    description: 'Yapay zeka asistanlarımızın ve 5. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 6',
    value: 'x3.2',
    description: 'Yapay zeka asistanlarımızın ve 6. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 7',
    value: 'x3.4',
    description: 'Yapay zeka asistanlarımızın ve 7. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 8',
    value: 'x3.6',
    description: 'Yapay zeka asistanlarımızın ve 8. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 9',
    value: 'x3.8',
    description: 'Yapay zeka asistanlarımızın ve 9. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 10',
    value: 'x4.0',
    description: 'Yapay zeka asistanlarımızın ve 10. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 11',
    value: 'x4.2',
    description: 'Yapay zeka asistanlarımızın ve 11. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 12',
    value: 'x4.4',
    description: 'Yapay zeka asistanlarımızın ve 12. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 13',
    value: 'x4.6',
    description: 'Yapay zeka asistanlarımızın ve 13. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 14',
    value: 'x4.8',
    description: 'Yapay zeka asistanlarımızın ve 14. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 15',
    value: 'x5.0',
    description: 'Yapay zeka asistanlarımızın ve 15. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 16',
    value: 'x5.2',
    description: 'Yapay zeka asistanlarımızın ve 16. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 17',
    value: 'x5.4',
    description: 'Yapay zeka asistanlarımızın ve 17. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 18',
    value: 'x5.6',
    description: 'Yapay zeka asistanlarımızın ve 18. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 19',
    value: 'x5.8',
    description: 'Yapay zeka asistanlarımızın ve 19. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 20',
    value: 'x6.0',
    description: 'Yapay zeka asistanlarımızın ve 20. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 21',
    value: 'x6.2',
    description: 'Yapay zeka asistanlarımızın ve 21. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 22',
    value: 'x6.4',
    description: 'Yapay zeka asistanlarımızın ve 22. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 23',
    value: 'x6.6',
    description: 'Yapay zeka asistanlarımızın ve 23. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 24',
    value: 'x6.8',
    description: 'Yapay zeka asistanlarımızın ve 24. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 25',
    value: 'x7.0',
    description: 'Yapay zeka asistanlarımızın ve 25. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 26',
    value: 'x7.2',
    description: 'Yapay zeka asistanlarımızın ve 26. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 27',
    value: 'x7.4',
    description: 'Yapay zeka asistanlarımızın ve 27. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 28',
    value: 'x7.6',
    description: 'Yapay zeka asistanlarımızın ve 28. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 29',
    value: 'x7.8',
    description: 'Yapay zeka asistanlarımızın ve 29. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 30',
    value: 'x8.0',
    description: 'Yapay zeka asistanlarımızın ve 30. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 31',
    value: 'x8.2',
    description: 'Yapay zeka asistanlarımızın ve 31. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 32',
    value: 'x8.4',
    description: 'Yapay zeka asistanlarımızın ve 32. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 33',
    value: 'x8.6',
    description: 'Yapay zeka asistanlarımızın ve 33. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 34',
    value: 'x8.8',
    description: 'Yapay zeka asistanlarımızın ve 34. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 35',
    value: 'x9.0',
    description: 'Yapay zeka asistanlarımızın ve 35. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 36',
    value: 'x9.2',
    description: 'Yapay zeka asistanlarımızın ve 36. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 37',
    value: 'x9.4',
    description: 'Yapay zeka asistanlarımızın ve 37. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 38',
    value: 'x9.6',
    description: 'Yapay zeka asistanlarımızın ve 38. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 39',
    value: 'x9.8',
    description: 'Yapay zeka asistanlarımızın ve 39. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 40',
    value: 'x10.0',
    description: 'Yapay zeka asistanlarımızın ve 40. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 41',
    value: 'x10.2',
    description: 'Yapay zeka asistanlarımızın ve 41. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 42',
    value: 'x10.4',
    description: 'Yapay zeka asistanlarımızın ve 42. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 43',
    value: 'x10.6',
    description: 'Yapay zeka asistanlarımızın ve 43. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 44',
    value: 'x10.8',
    description: 'Yapay zeka asistanlarımızın ve 44. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 45',
    value: 'x11.0',
    description: 'Yapay zeka asistanlarımızın ve 45. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 46',
    value: 'x11.2',
    description: 'Yapay zeka asistanlarımızın ve 46. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 47',
    value: 'x11.4',
    description: 'Yapay zeka asistanlarımızın ve 47. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 48',
    value: 'x11.6',
    description: 'Yapay zeka asistanlarımızın ve 48. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 49',
    value: 'x11.8',
    description: 'Yapay zeka asistanlarımızın ve 49. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 50',
    value: 'x12.0',
    description: 'Yapay zeka asistanlarımızın ve 50. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 51',
    value: 'x12.2',
    description: 'Yapay zeka asistanlarımızın ve 51. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 52',
    value: 'x12.4',
    description: 'Yapay zeka asistanlarımızın ve 52. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 53',
    value: 'x12.6',
    description: 'Yapay zeka asistanlarımızın ve 53. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 54',
    value: 'x12.8',
    description: 'Yapay zeka asistanlarımızın ve 54. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 55',
    value: 'x13.0',
    description: 'Yapay zeka asistanlarımızın ve 55. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 56',
    value: 'x13.2',
    description: 'Yapay zeka asistanlarımızın ve 56. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 57',
    value: 'x13.4',
    description: 'Yapay zeka asistanlarımızın ve 57. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 58',
    value: 'x13.6',
    description: 'Yapay zeka asistanlarımızın ve 58. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 59',
    value: 'x13.8',
    description: 'Yapay zeka asistanlarımızın ve 59. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  },
  {
    metric: 'Otomasyon Göstergesi 60',
    value: 'x14.0',
    description: 'Yapay zeka asistanlarımızın ve 60. otonom iş akışımızın operasyonel işlem hızı çarpanıdır. Verimliliği katlar.'
  }
];
const AI_PARADIGMS = [
  {
    paradigmId: 'AP-001',
    title: 'Yapay Zeka İlkesi 1',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 1. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-002',
    title: 'Yapay Zeka İlkesi 2',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 2. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-003',
    title: 'Yapay Zeka İlkesi 3',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 3. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-004',
    title: 'Yapay Zeka İlkesi 4',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 4. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-005',
    title: 'Yapay Zeka İlkesi 5',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 5. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-006',
    title: 'Yapay Zeka İlkesi 6',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 6. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-007',
    title: 'Yapay Zeka İlkesi 7',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 7. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-008',
    title: 'Yapay Zeka İlkesi 8',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 8. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-009',
    title: 'Yapay Zeka İlkesi 9',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 9. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-010',
    title: 'Yapay Zeka İlkesi 10',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 10. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-011',
    title: 'Yapay Zeka İlkesi 11',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 11. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-012',
    title: 'Yapay Zeka İlkesi 12',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 12. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-013',
    title: 'Yapay Zeka İlkesi 13',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 13. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-014',
    title: 'Yapay Zeka İlkesi 14',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 14. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-015',
    title: 'Yapay Zeka İlkesi 15',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 15. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-016',
    title: 'Yapay Zeka İlkesi 16',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 16. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-017',
    title: 'Yapay Zeka İlkesi 17',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 17. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-018',
    title: 'Yapay Zeka İlkesi 18',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 18. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-019',
    title: 'Yapay Zeka İlkesi 19',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 19. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-020',
    title: 'Yapay Zeka İlkesi 20',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 20. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-021',
    title: 'Yapay Zeka İlkesi 21',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 21. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-022',
    title: 'Yapay Zeka İlkesi 22',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 22. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-023',
    title: 'Yapay Zeka İlkesi 23',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 23. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-024',
    title: 'Yapay Zeka İlkesi 24',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 24. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-025',
    title: 'Yapay Zeka İlkesi 25',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 25. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-026',
    title: 'Yapay Zeka İlkesi 26',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 26. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-027',
    title: 'Yapay Zeka İlkesi 27',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 27. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-028',
    title: 'Yapay Zeka İlkesi 28',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 28. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-029',
    title: 'Yapay Zeka İlkesi 29',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 29. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-030',
    title: 'Yapay Zeka İlkesi 30',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 30. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-031',
    title: 'Yapay Zeka İlkesi 31',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 31. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-032',
    title: 'Yapay Zeka İlkesi 32',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 32. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-033',
    title: 'Yapay Zeka İlkesi 33',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 33. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-034',
    title: 'Yapay Zeka İlkesi 34',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 34. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-035',
    title: 'Yapay Zeka İlkesi 35',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 35. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-036',
    title: 'Yapay Zeka İlkesi 36',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 36. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-037',
    title: 'Yapay Zeka İlkesi 37',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 37. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-038',
    title: 'Yapay Zeka İlkesi 38',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 38. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-039',
    title: 'Yapay Zeka İlkesi 39',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 39. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-040',
    title: 'Yapay Zeka İlkesi 40',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 40. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-041',
    title: 'Yapay Zeka İlkesi 41',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 41. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-042',
    title: 'Yapay Zeka İlkesi 42',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 42. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-043',
    title: 'Yapay Zeka İlkesi 43',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 43. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-044',
    title: 'Yapay Zeka İlkesi 44',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 44. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-045',
    title: 'Yapay Zeka İlkesi 45',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 45. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-046',
    title: 'Yapay Zeka İlkesi 46',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 46. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-047',
    title: 'Yapay Zeka İlkesi 47',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 47. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-048',
    title: 'Yapay Zeka İlkesi 48',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 48. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-049',
    title: 'Yapay Zeka İlkesi 49',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 49. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-050',
    title: 'Yapay Zeka İlkesi 50',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 50. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-051',
    title: 'Yapay Zeka İlkesi 51',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 51. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-052',
    title: 'Yapay Zeka İlkesi 52',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 52. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-053',
    title: 'Yapay Zeka İlkesi 53',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 53. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-054',
    title: 'Yapay Zeka İlkesi 54',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 54. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-055',
    title: 'Yapay Zeka İlkesi 55',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 55. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-056',
    title: 'Yapay Zeka İlkesi 56',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 56. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-057',
    title: 'Yapay Zeka İlkesi 57',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 57. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-058',
    title: 'Yapay Zeka İlkesi 58',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 58. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-059',
    title: 'Yapay Zeka İlkesi 59',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 59. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-060',
    title: 'Yapay Zeka İlkesi 60',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 60. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-061',
    title: 'Yapay Zeka İlkesi 61',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 61. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-062',
    title: 'Yapay Zeka İlkesi 62',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 62. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-063',
    title: 'Yapay Zeka İlkesi 63',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 63. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-064',
    title: 'Yapay Zeka İlkesi 64',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 64. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-065',
    title: 'Yapay Zeka İlkesi 65',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 65. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-066',
    title: 'Yapay Zeka İlkesi 66',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 66. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-067',
    title: 'Yapay Zeka İlkesi 67',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 67. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-068',
    title: 'Yapay Zeka İlkesi 68',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 68. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-069',
    title: 'Yapay Zeka İlkesi 69',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 69. model parametresi ve veri denetim standardıdır.'
  },
  {
    paradigmId: 'AP-070',
    title: 'Yapay Zeka İlkesi 70',
    details: 'LLM modellerini ve otonom yazılım ajanlarını eğitirken temel aldığımız 70. model parametresi ve veri denetim standardıdır.'
  }
];
const AUTOMATION_CHECKPOINTS = [
  {
    checkpointId: 'CP-001',
    title: 'Otomasyon Kontrol Noktası 1',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 1. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-002',
    title: 'Otomasyon Kontrol Noktası 2',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 2. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-003',
    title: 'Otomasyon Kontrol Noktası 3',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 3. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-004',
    title: 'Otomasyon Kontrol Noktası 4',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 4. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-005',
    title: 'Otomasyon Kontrol Noktası 5',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 5. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-006',
    title: 'Otomasyon Kontrol Noktası 6',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 6. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-007',
    title: 'Otomasyon Kontrol Noktası 7',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 7. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-008',
    title: 'Otomasyon Kontrol Noktası 8',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 8. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-009',
    title: 'Otomasyon Kontrol Noktası 9',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 9. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-010',
    title: 'Otomasyon Kontrol Noktası 10',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 10. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-011',
    title: 'Otomasyon Kontrol Noktası 11',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 11. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-012',
    title: 'Otomasyon Kontrol Noktası 12',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 12. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-013',
    title: 'Otomasyon Kontrol Noktası 13',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 13. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-014',
    title: 'Otomasyon Kontrol Noktası 14',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 14. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-015',
    title: 'Otomasyon Kontrol Noktası 15',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 15. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-016',
    title: 'Otomasyon Kontrol Noktası 16',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 16. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-017',
    title: 'Otomasyon Kontrol Noktası 17',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 17. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-018',
    title: 'Otomasyon Kontrol Noktası 18',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 18. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-019',
    title: 'Otomasyon Kontrol Noktası 19',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 19. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-020',
    title: 'Otomasyon Kontrol Noktası 20',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 20. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-021',
    title: 'Otomasyon Kontrol Noktası 21',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 21. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-022',
    title: 'Otomasyon Kontrol Noktası 22',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 22. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-023',
    title: 'Otomasyon Kontrol Noktası 23',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 23. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-024',
    title: 'Otomasyon Kontrol Noktası 24',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 24. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-025',
    title: 'Otomasyon Kontrol Noktası 25',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 25. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-026',
    title: 'Otomasyon Kontrol Noktası 26',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 26. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-027',
    title: 'Otomasyon Kontrol Noktası 27',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 27. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-028',
    title: 'Otomasyon Kontrol Noktası 28',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 28. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-029',
    title: 'Otomasyon Kontrol Noktası 29',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 29. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-030',
    title: 'Otomasyon Kontrol Noktası 30',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 30. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-031',
    title: 'Otomasyon Kontrol Noktası 31',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 31. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-032',
    title: 'Otomasyon Kontrol Noktası 32',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 32. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-033',
    title: 'Otomasyon Kontrol Noktası 33',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 33. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-034',
    title: 'Otomasyon Kontrol Noktası 34',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 34. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-035',
    title: 'Otomasyon Kontrol Noktası 35',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 35. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-036',
    title: 'Otomasyon Kontrol Noktası 36',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 36. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-037',
    title: 'Otomasyon Kontrol Noktası 37',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 37. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-038',
    title: 'Otomasyon Kontrol Noktası 38',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 38. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-039',
    title: 'Otomasyon Kontrol Noktası 39',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 39. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-040',
    title: 'Otomasyon Kontrol Noktası 40',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 40. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-041',
    title: 'Otomasyon Kontrol Noktası 41',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 41. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-042',
    title: 'Otomasyon Kontrol Noktası 42',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 42. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-043',
    title: 'Otomasyon Kontrol Noktası 43',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 43. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-044',
    title: 'Otomasyon Kontrol Noktası 44',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 44. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-045',
    title: 'Otomasyon Kontrol Noktası 45',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 45. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-046',
    title: 'Otomasyon Kontrol Noktası 46',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 46. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-047',
    title: 'Otomasyon Kontrol Noktası 47',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 47. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-048',
    title: 'Otomasyon Kontrol Noktası 48',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 48. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-049',
    title: 'Otomasyon Kontrol Noktası 49',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 49. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-050',
    title: 'Otomasyon Kontrol Noktası 50',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 50. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-051',
    title: 'Otomasyon Kontrol Noktası 51',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 51. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-052',
    title: 'Otomasyon Kontrol Noktası 52',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 52. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-053',
    title: 'Otomasyon Kontrol Noktası 53',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 53. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-054',
    title: 'Otomasyon Kontrol Noktası 54',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 54. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-055',
    title: 'Otomasyon Kontrol Noktası 55',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 55. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-056',
    title: 'Otomasyon Kontrol Noktası 56',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 56. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-057',
    title: 'Otomasyon Kontrol Noktası 57',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 57. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-058',
    title: 'Otomasyon Kontrol Noktası 58',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 58. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-059',
    title: 'Otomasyon Kontrol Noktası 59',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 59. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-060',
    title: 'Otomasyon Kontrol Noktası 60',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 60. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-061',
    title: 'Otomasyon Kontrol Noktası 61',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 61. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-062',
    title: 'Otomasyon Kontrol Noktası 62',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 62. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-063',
    title: 'Otomasyon Kontrol Noktası 63',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 63. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-064',
    title: 'Otomasyon Kontrol Noktası 64',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 64. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-065',
    title: 'Otomasyon Kontrol Noktası 65',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 65. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-066',
    title: 'Otomasyon Kontrol Noktası 66',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 66. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-067',
    title: 'Otomasyon Kontrol Noktası 67',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 67. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-068',
    title: 'Otomasyon Kontrol Noktası 68',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 68. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-069',
    title: 'Otomasyon Kontrol Noktası 69',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 69. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  },
  {
    checkpointId: 'CP-070',
    title: 'Otomasyon Kontrol Noktası 70',
    details: 'Hata yakalama ve rate-limit engellemelerini kontrol eden 70. otonom sistem güvenliği ve rollback (işlem geri alma) mekanizmasıdır.'
  }
];
const MANIFESTO_TEXTS = [
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (1. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (2. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (3. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (4. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (5. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (6. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (7. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (8. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (9. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (10. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (11. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (12. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (13. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (14. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (15. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (16. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (17. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (18. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (19. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (20. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (21. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (22. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (23. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (24. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (25. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (26. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (27. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (28. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (29. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (30. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (31. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (32. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (33. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (34. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (35. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (36. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (37. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (38. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (39. Yapay Zeka Manifestosu Paragrafı)" ,
  "Yapay zekâ ve otonom iş süreçleri, şirketlerin operasyonel yüklerini sıfıra indirerek stratejik büyümeye odaklanmalarını sağlayan temel dönüşüm kaldıracıdır. Doğru kurgulanan entegrasyonlar, manuel veri aktarımı hatalarını tamamen ortadan kaldırır. Nos Canda Tech olarak, self-hosted güvenli altyapılarla kurumsal verinizi korurken süreçlerinizi akıllandırıyoruz. (40. Yapay Zeka Manifestosu Paragrafı)" 
];

const FLOW_STEPS = [
  { name: 'Tetikleyici (Trigger)', desc: 'E-Ticaret mağazanıza yeni bir sipariş düşer veya müşteri ilişkileri sistemine yeni bir bayi formu kaydedilir.' },
  { name: 'Veri Dönüştürme', desc: 'Gelen karmaşık veri (JSON), merkezi otomasyon altyapısının anlayabileceği temiz parametrelere dönüştürülür.' },
  { name: 'Yapay Zekâ Analizi', desc: 'Talep veya sipariş verisi AI modeline iletilerek sınıflandırma, özetleme veya risk değerlendirmesi yapılır.' },
  { name: 'Çoklu API Eşleme', desc: 'Merkezi otomasyon sistemi; kargo, fatura, SMS ve müşteri ilişkileri veri tabanlarına aynı anda paralel istekler göndererek veriyi günceller.' },
];

export default function Hero() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Intro */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(219,39,119,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(219,39,119,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
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
              Nos Canda Tech • AI & İş Otomasyonu
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.1}>
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              İşinizi Yapay Zekâ ile <br />
              <span style={{ color: ACCENT }}>Otomatize</span> Edin
            </h1>
            <div className="h-1.5 w-24 rounded-full mx-auto mt-6" style={{ background: ACCENT }} />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={30} delay={0.2}>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light max-w-3xl mx-auto pt-4">
              Merkezi entegrasyon akışları, özel yapay zekâ asistanları, akıllı belge analitiği ve
              güvenli işlem tabanlı e-ticaret süreç yapılarıyla işletmenizdeki tüm manuel süreçleri
              otomatikleştiriyor, zamandan ve maliyetten tasarruf sağlıyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Schematic Entegrasyon Akışı */}
      <section className="pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Otonom İş Akışı Şeması
              </h2>
              <p className="font-body text-xs text-[var(--text-secondary)] max-w-lg mx-auto">
                Bir olay tetiklendiğinde yapay zekânın karar verip diğer tüm servisleri otomatik olarak koordine etme döngüsü.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.1}>
            <div className="rounded-3xl border border-neutral-200/50 bg-white p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {FLOW_STEPS.map((item, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col p-6 rounded-2xl bg-[var(--bg-secondary)] border border-neutral-200/40">
                    <span className="text-[0.65rem] font-gothic tracking-wider text-neutral-400 mb-2">ADIM 0{idx + 1}</span>
                    <h3 className="font-cinzel text-sm font-bold text-[var(--text-primary)] mb-2" style={{ color: ACCENT }}>
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-purple-500/20 -translate-y-1/2 z-0 hidden md:block" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Cards Grid */}
      <section className="pb-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {CORE_METRICS.slice(0, 4).map((metric, idx) => (
              <ScrollReveal key={idx} direction="up" distance={30} delay={idx * 0.1}>
                <AutomationMetricCard
                  metric={metric.metric}
                  value={metric.value}
                  description={metric.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Automation KPIs Detailed Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.2em] uppercase text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full border border-pink-100 font-semibold">
              Detaylı Otomasyon Metrikleri
            </span>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-neutral-900">İşlem Hızı ve Kaynak Optimizasyonu</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_METRICS.map((metric, sIdx) => (
              <ScrollReveal key={sIdx} direction="up" distance={20} delay={sIdx * 0.03}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-sm space-y-2 hover:border-pink-500/30 transition-all duration-300">
                  <div className="text-2xl font-extrabold text-pink-600 font-mono tracking-tight">{metric.value}</div>
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{metric.metric}</div>
                  <p className="text-[0.7rem] text-[var(--text-secondary)] leading-relaxed font-light">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Manifesto */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[950px] mx-auto space-y-12">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-12">
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100 font-semibold">
                Otomasyon Manifestosu
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4 text-neutral-900">
                Otonom Sistemlerle Akıllı Gelecek
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

      {/* AI Paradigms Grid */}
      <section className="py-20 bg-white border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100 font-semibold">
              Yapay Zeka Tasarımı
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Bilişsel Model Standartlarımız</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AI_PARADIGMS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-neutral-50/60 p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-pink-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full border text-pink-600 bg-pink-50 border-pink-100">Bilişsel Model</span>
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

      {/* Automation Checkpoints Checklist */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100 px-6">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-100 font-semibold">
              Sistem Kararlılığı
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-neutral-900">Güvenli Otomasyon Kontrol Protokolleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_CHECKPOINTS.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20}>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/40 space-y-3 hover:border-pink-500/20 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100 font-semibold">Kontrol Noktası</span>
                      <span className="text-xs font-mono font-bold text-neutral-400">{item.checkpointId}</span>
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
