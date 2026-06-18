'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#6366F1';
const ACCENT_BG = 'rgba(99, 102, 241, 0.06)';
const ACCENT_BORDER = 'rgba(99, 102, 241, 0.15)';

interface TechStackCategory {
  category: string;
  technologies: string[];
  description: string;
}

const TechCard = ({ category, technologies, description }: TechStackCategory) => {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-500 p-8">
      <span
        className="inline-block font-gothic text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1 rounded-full mb-4 font-semibold"
        style={{ background: ACCENT_BG, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
      >
        {category}
      </span>
      <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-5">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-[0.6rem] font-gothic tracking-wider uppercase px-3 py-1.5 rounded-lg border bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
            style={{ borderColor: ACCENT_BORDER }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
const TECH_STACKS = [
  {
    category: 'Teknoloji Kategorisi 1 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 1. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 1.1', 'Bileşen 1.2', 'Protokol 1.3']
  },
  {
    category: 'Teknoloji Kategorisi 2 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 2. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 2.1', 'Bileşen 2.2', 'Protokol 2.3']
  },
  {
    category: 'Teknoloji Kategorisi 3 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 3. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 3.1', 'Bileşen 3.2', 'Protokol 3.3']
  },
  {
    category: 'Teknoloji Kategorisi 4 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 4. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 4.1', 'Bileşen 4.2', 'Protokol 4.3']
  },
  {
    category: 'Teknoloji Kategorisi 5 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 5. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 5.1', 'Bileşen 5.2', 'Protokol 5.3']
  },
  {
    category: 'Teknoloji Kategorisi 6 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 6. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 6.1', 'Bileşen 6.2', 'Protokol 6.3']
  },
  {
    category: 'Teknoloji Kategorisi 7 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 7. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 7.1', 'Bileşen 7.2', 'Protokol 7.3']
  },
  {
    category: 'Teknoloji Kategorisi 8 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 8. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 8.1', 'Bileşen 8.2', 'Protokol 8.3']
  },
  {
    category: 'Teknoloji Kategorisi 9 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 9. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 9.1', 'Bileşen 9.2', 'Protokol 9.3']
  },
  {
    category: 'Teknoloji Kategorisi 10 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 10. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 10.1', 'Bileşen 10.2', 'Protokol 10.3']
  },
  {
    category: 'Teknoloji Kategorisi 11 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 11. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 11.1', 'Bileşen 11.2', 'Protokol 11.3']
  },
  {
    category: 'Teknoloji Kategorisi 12 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 12. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 12.1', 'Bileşen 12.2', 'Protokol 12.3']
  },
  {
    category: 'Teknoloji Kategorisi 13 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 13. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 13.1', 'Bileşen 13.2', 'Protokol 13.3']
  },
  {
    category: 'Teknoloji Kategorisi 14 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 14. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 14.1', 'Bileşen 14.2', 'Protokol 14.3']
  },
  {
    category: 'Teknoloji Kategorisi 15 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 15. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 15.1', 'Bileşen 15.2', 'Protokol 15.3']
  },
  {
    category: 'Teknoloji Kategorisi 16 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 16. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 16.1', 'Bileşen 16.2', 'Protokol 16.3']
  },
  {
    category: 'Teknoloji Kategorisi 17 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 17. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 17.1', 'Bileşen 17.2', 'Protokol 17.3']
  },
  {
    category: 'Teknoloji Kategorisi 18 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 18. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 18.1', 'Bileşen 18.2', 'Protokol 18.3']
  },
  {
    category: 'Teknoloji Kategorisi 19 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 19. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 19.1', 'Bileşen 19.2', 'Protokol 19.3']
  },
  {
    category: 'Teknoloji Kategorisi 20 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 20. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 20.1', 'Bileşen 20.2', 'Protokol 20.3']
  },
  {
    category: 'Teknoloji Kategorisi 21 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 21. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 21.1', 'Bileşen 21.2', 'Protokol 21.3']
  },
  {
    category: 'Teknoloji Kategorisi 22 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 22. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 22.1', 'Bileşen 22.2', 'Protokol 22.3']
  },
  {
    category: 'Teknoloji Kategorisi 23 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 23. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 23.1', 'Bileşen 23.2', 'Protokol 23.3']
  },
  {
    category: 'Teknoloji Kategorisi 24 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 24. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 24.1', 'Bileşen 24.2', 'Protokol 24.3']
  },
  {
    category: 'Teknoloji Kategorisi 25 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 25. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 25.1', 'Bileşen 25.2', 'Protokol 25.3']
  },
  {
    category: 'Teknoloji Kategorisi 26 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 26. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 26.1', 'Bileşen 26.2', 'Protokol 26.3']
  },
  {
    category: 'Teknoloji Kategorisi 27 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 27. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 27.1', 'Bileşen 27.2', 'Protokol 27.3']
  },
  {
    category: 'Teknoloji Kategorisi 28 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 28. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 28.1', 'Bileşen 28.2', 'Protokol 28.3']
  },
  {
    category: 'Teknoloji Kategorisi 29 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 29. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 29.1', 'Bileşen 29.2', 'Protokol 29.3']
  },
  {
    category: 'Teknoloji Kategorisi 30 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 30. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 30.1', 'Bileşen 30.2', 'Protokol 30.3']
  },
  {
    category: 'Teknoloji Kategorisi 31 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 31. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 31.1', 'Bileşen 31.2', 'Protokol 31.3']
  },
  {
    category: 'Teknoloji Kategorisi 32 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 32. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 32.1', 'Bileşen 32.2', 'Protokol 32.3']
  },
  {
    category: 'Teknoloji Kategorisi 33 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 33. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 33.1', 'Bileşen 33.2', 'Protokol 33.3']
  },
  {
    category: 'Teknoloji Kategorisi 34 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 34. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 34.1', 'Bileşen 34.2', 'Protokol 34.3']
  },
  {
    category: 'Teknoloji Kategorisi 35 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 35. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 35.1', 'Bileşen 35.2', 'Protokol 35.3']
  },
  {
    category: 'Teknoloji Kategorisi 36 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 36. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 36.1', 'Bileşen 36.2', 'Protokol 36.3']
  },
  {
    category: 'Teknoloji Kategorisi 37 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 37. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 37.1', 'Bileşen 37.2', 'Protokol 37.3']
  },
  {
    category: 'Teknoloji Kategorisi 38 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 38. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 38.1', 'Bileşen 38.2', 'Protokol 38.3']
  },
  {
    category: 'Teknoloji Kategorisi 39 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 39. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 39.1', 'Bileşen 39.2', 'Protokol 39.3']
  },
  {
    category: 'Teknoloji Kategorisi 40 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 40. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 40.1', 'Bileşen 40.2', 'Protokol 40.3']
  },
  {
    category: 'Teknoloji Kategorisi 41 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 41. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 41.1', 'Bileşen 41.2', 'Protokol 41.3']
  },
  {
    category: 'Teknoloji Kategorisi 42 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 42. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 42.1', 'Bileşen 42.2', 'Protokol 42.3']
  },
  {
    category: 'Teknoloji Kategorisi 43 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 43. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 43.1', 'Bileşen 43.2', 'Protokol 43.3']
  },
  {
    category: 'Teknoloji Kategorisi 44 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 44. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 44.1', 'Bileşen 44.2', 'Protokol 44.3']
  },
  {
    category: 'Teknoloji Kategorisi 45 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 45. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 45.1', 'Bileşen 45.2', 'Protokol 45.3']
  },
  {
    category: 'Teknoloji Kategorisi 46 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 46. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 46.1', 'Bileşen 46.2', 'Protokol 46.3']
  },
  {
    category: 'Teknoloji Kategorisi 47 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 47. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 47.1', 'Bileşen 47.2', 'Protokol 47.3']
  },
  {
    category: 'Teknoloji Kategorisi 48 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 48. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 48.1', 'Bileşen 48.2', 'Protokol 48.3']
  },
  {
    category: 'Teknoloji Kategorisi 49 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 49. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 49.1', 'Bileşen 49.2', 'Protokol 49.3']
  },
  {
    category: 'Teknoloji Kategorisi 50 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 50. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 50.1', 'Bileşen 50.2', 'Protokol 50.3']
  },
  {
    category: 'Teknoloji Kategorisi 51 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 51. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 51.1', 'Bileşen 51.2', 'Protokol 51.3']
  },
  {
    category: 'Teknoloji Kategorisi 52 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 52. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 52.1', 'Bileşen 52.2', 'Protokol 52.3']
  },
  {
    category: 'Teknoloji Kategorisi 53 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 53. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 53.1', 'Bileşen 53.2', 'Protokol 53.3']
  },
  {
    category: 'Teknoloji Kategorisi 54 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 54. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 54.1', 'Bileşen 54.2', 'Protokol 54.3']
  },
  {
    category: 'Teknoloji Kategorisi 55 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 55. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 55.1', 'Bileşen 55.2', 'Protokol 55.3']
  },
  {
    category: 'Teknoloji Kategorisi 56 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 56. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 56.1', 'Bileşen 56.2', 'Protokol 56.3']
  },
  {
    category: 'Teknoloji Kategorisi 57 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 57. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 57.1', 'Bileşen 57.2', 'Protokol 57.3']
  },
  {
    category: 'Teknoloji Kategorisi 58 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 58. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 58.1', 'Bileşen 58.2', 'Protokol 58.3']
  },
  {
    category: 'Teknoloji Kategorisi 59 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 59. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 59.1', 'Bileşen 59.2', 'Protokol 59.3']
  },
  {
    category: 'Teknoloji Kategorisi 60 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 60. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 60.1', 'Bileşen 60.2', 'Protokol 60.3']
  },
  {
    category: 'Teknoloji Kategorisi 61 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 61. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 61.1', 'Bileşen 61.2', 'Protokol 61.3']
  },
  {
    category: 'Teknoloji Kategorisi 62 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 62. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 62.1', 'Bileşen 62.2', 'Protokol 62.3']
  },
  {
    category: 'Teknoloji Kategorisi 63 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 63. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 63.1', 'Bileşen 63.2', 'Protokol 63.3']
  },
  {
    category: 'Teknoloji Kategorisi 64 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 64. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 64.1', 'Bileşen 64.2', 'Protokol 64.3']
  },
  {
    category: 'Teknoloji Kategorisi 65 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 65. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 65.1', 'Bileşen 65.2', 'Protokol 65.3']
  },
  {
    category: 'Teknoloji Kategorisi 66 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 66. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 66.1', 'Bileşen 66.2', 'Protokol 66.3']
  },
  {
    category: 'Teknoloji Kategorisi 67 (Bulut Dağıtımı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 67. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 67.1', 'Bileşen 67.2', 'Protokol 67.3']
  },
  {
    category: 'Teknoloji Kategorisi 68 (Ön Yüz Geliştirme)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 68. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 68.1', 'Bileşen 68.2', 'Protokol 68.3']
  },
  {
    category: 'Teknoloji Kategorisi 69 (Arka Yüz Altyapısı)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 69. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 69.1', 'Bileşen 69.2', 'Protokol 69.3']
  },
  {
    category: 'Teknoloji Kategorisi 70 (Veri Depolama)',
    description: 'Projelerinizin yüksek performans ve ölçeklenebilirlik standartlarına ulaşması için tasarlanan 70. kurumsal teknoloji bileşenimizdir.',
    technologies: ['Bileşen 70.1', 'Bileşen 70.2', 'Protokol 70.3']
  }
];
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Geliştirme Süreç Aşaması 1',
    desc: 'Agile proje planımız doğrultusunda projenizin 1. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '02',
    title: 'Geliştirme Süreç Aşaması 2',
    desc: 'Agile proje planımız doğrultusunda projenizin 2. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '03',
    title: 'Geliştirme Süreç Aşaması 3',
    desc: 'Agile proje planımız doğrultusunda projenizin 3. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '04',
    title: 'Geliştirme Süreç Aşaması 4',
    desc: 'Agile proje planımız doğrultusunda projenizin 4. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '05',
    title: 'Geliştirme Süreç Aşaması 5',
    desc: 'Agile proje planımız doğrultusunda projenizin 5. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '06',
    title: 'Geliştirme Süreç Aşaması 6',
    desc: 'Agile proje planımız doğrultusunda projenizin 6. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '07',
    title: 'Geliştirme Süreç Aşaması 7',
    desc: 'Agile proje planımız doğrultusunda projenizin 7. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '08',
    title: 'Geliştirme Süreç Aşaması 8',
    desc: 'Agile proje planımız doğrultusunda projenizin 8. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '09',
    title: 'Geliştirme Süreç Aşaması 9',
    desc: 'Agile proje planımız doğrultusunda projenizin 9. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '10',
    title: 'Geliştirme Süreç Aşaması 10',
    desc: 'Agile proje planımız doğrultusunda projenizin 10. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '11',
    title: 'Geliştirme Süreç Aşaması 11',
    desc: 'Agile proje planımız doğrultusunda projenizin 11. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '12',
    title: 'Geliştirme Süreç Aşaması 12',
    desc: 'Agile proje planımız doğrultusunda projenizin 12. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '13',
    title: 'Geliştirme Süreç Aşaması 13',
    desc: 'Agile proje planımız doğrultusunda projenizin 13. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '14',
    title: 'Geliştirme Süreç Aşaması 14',
    desc: 'Agile proje planımız doğrultusunda projenizin 14. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '15',
    title: 'Geliştirme Süreç Aşaması 15',
    desc: 'Agile proje planımız doğrultusunda projenizin 15. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '16',
    title: 'Geliştirme Süreç Aşaması 16',
    desc: 'Agile proje planımız doğrultusunda projenizin 16. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '17',
    title: 'Geliştirme Süreç Aşaması 17',
    desc: 'Agile proje planımız doğrultusunda projenizin 17. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '18',
    title: 'Geliştirme Süreç Aşaması 18',
    desc: 'Agile proje planımız doğrultusunda projenizin 18. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '19',
    title: 'Geliştirme Süreç Aşaması 19',
    desc: 'Agile proje planımız doğrultusunda projenizin 19. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '20',
    title: 'Geliştirme Süreç Aşaması 20',
    desc: 'Agile proje planımız doğrultusunda projenizin 20. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '21',
    title: 'Geliştirme Süreç Aşaması 21',
    desc: 'Agile proje planımız doğrultusunda projenizin 21. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '22',
    title: 'Geliştirme Süreç Aşaması 22',
    desc: 'Agile proje planımız doğrultusunda projenizin 22. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '23',
    title: 'Geliştirme Süreç Aşaması 23',
    desc: 'Agile proje planımız doğrultusunda projenizin 23. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '24',
    title: 'Geliştirme Süreç Aşaması 24',
    desc: 'Agile proje planımız doğrultusunda projenizin 24. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '25',
    title: 'Geliştirme Süreç Aşaması 25',
    desc: 'Agile proje planımız doğrultusunda projenizin 25. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '26',
    title: 'Geliştirme Süreç Aşaması 26',
    desc: 'Agile proje planımız doğrultusunda projenizin 26. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '27',
    title: 'Geliştirme Süreç Aşaması 27',
    desc: 'Agile proje planımız doğrultusunda projenizin 27. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '28',
    title: 'Geliştirme Süreç Aşaması 28',
    desc: 'Agile proje planımız doğrultusunda projenizin 28. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '29',
    title: 'Geliştirme Süreç Aşaması 29',
    desc: 'Agile proje planımız doğrultusunda projenizin 29. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '30',
    title: 'Geliştirme Süreç Aşaması 30',
    desc: 'Agile proje planımız doğrultusunda projenizin 30. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '31',
    title: 'Geliştirme Süreç Aşaması 31',
    desc: 'Agile proje planımız doğrultusunda projenizin 31. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '32',
    title: 'Geliştirme Süreç Aşaması 32',
    desc: 'Agile proje planımız doğrultusunda projenizin 32. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '33',
    title: 'Geliştirme Süreç Aşaması 33',
    desc: 'Agile proje planımız doğrultusunda projenizin 33. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '34',
    title: 'Geliştirme Süreç Aşaması 34',
    desc: 'Agile proje planımız doğrultusunda projenizin 34. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '35',
    title: 'Geliştirme Süreç Aşaması 35',
    desc: 'Agile proje planımız doğrultusunda projenizin 35. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '36',
    title: 'Geliştirme Süreç Aşaması 36',
    desc: 'Agile proje planımız doğrultusunda projenizin 36. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '37',
    title: 'Geliştirme Süreç Aşaması 37',
    desc: 'Agile proje planımız doğrultusunda projenizin 37. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '38',
    title: 'Geliştirme Süreç Aşaması 38',
    desc: 'Agile proje planımız doğrultusunda projenizin 38. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '39',
    title: 'Geliştirme Süreç Aşaması 39',
    desc: 'Agile proje planımız doğrultusunda projenizin 39. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '40',
    title: 'Geliştirme Süreç Aşaması 40',
    desc: 'Agile proje planımız doğrultusunda projenizin 40. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '41',
    title: 'Geliştirme Süreç Aşaması 41',
    desc: 'Agile proje planımız doğrultusunda projenizin 41. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '42',
    title: 'Geliştirme Süreç Aşaması 42',
    desc: 'Agile proje planımız doğrultusunda projenizin 42. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '43',
    title: 'Geliştirme Süreç Aşaması 43',
    desc: 'Agile proje planımız doğrultusunda projenizin 43. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '44',
    title: 'Geliştirme Süreç Aşaması 44',
    desc: 'Agile proje planımız doğrultusunda projenizin 44. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '45',
    title: 'Geliştirme Süreç Aşaması 45',
    desc: 'Agile proje planımız doğrultusunda projenizin 45. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '46',
    title: 'Geliştirme Süreç Aşaması 46',
    desc: 'Agile proje planımız doğrultusunda projenizin 46. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '47',
    title: 'Geliştirme Süreç Aşaması 47',
    desc: 'Agile proje planımız doğrultusunda projenizin 47. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '48',
    title: 'Geliştirme Süreç Aşaması 48',
    desc: 'Agile proje planımız doğrultusunda projenizin 48. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '49',
    title: 'Geliştirme Süreç Aşaması 49',
    desc: 'Agile proje planımız doğrultusunda projenizin 49. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '50',
    title: 'Geliştirme Süreç Aşaması 50',
    desc: 'Agile proje planımız doğrultusunda projenizin 50. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '51',
    title: 'Geliştirme Süreç Aşaması 51',
    desc: 'Agile proje planımız doğrultusunda projenizin 51. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '52',
    title: 'Geliştirme Süreç Aşaması 52',
    desc: 'Agile proje planımız doğrultusunda projenizin 52. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '53',
    title: 'Geliştirme Süreç Aşaması 53',
    desc: 'Agile proje planımız doğrultusunda projenizin 53. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '54',
    title: 'Geliştirme Süreç Aşaması 54',
    desc: 'Agile proje planımız doğrultusunda projenizin 54. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '55',
    title: 'Geliştirme Süreç Aşaması 55',
    desc: 'Agile proje planımız doğrultusunda projenizin 55. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '56',
    title: 'Geliştirme Süreç Aşaması 56',
    desc: 'Agile proje planımız doğrultusunda projenizin 56. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '57',
    title: 'Geliştirme Süreç Aşaması 57',
    desc: 'Agile proje planımız doğrultusunda projenizin 57. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '58',
    title: 'Geliştirme Süreç Aşaması 58',
    desc: 'Agile proje planımız doğrultusunda projenizin 58. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '59',
    title: 'Geliştirme Süreç Aşaması 59',
    desc: 'Agile proje planımız doğrultusunda projenizin 59. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  },
  {
    step: '60',
    title: 'Geliştirme Süreç Aşaması 60',
    desc: 'Agile proje planımız doğrultusunda projenizin 60. adımında, modüler entegrasyonlar, kod kalitesi denetimleri ve performans analizleri yapılır.'
  }
];
const FAQS = [
  {
    q: 'Web Geliştirme Soru 1: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 2: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 3: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 4: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 5: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 6: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 7: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 8: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 9: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 10: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 11: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 12: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 13: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 14: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 15: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 16: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 17: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 18: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 19: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 20: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 21: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 22: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 23: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 24: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 25: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 26: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 27: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 28: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 29: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 30: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 31: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 32: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 33: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 34: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 35: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 36: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 37: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 38: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 39: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 40: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 41: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 42: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 43: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 44: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 45: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 46: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 47: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 48: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 49: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 50: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 51: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 52: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 53: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 54: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 55: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 56: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 57: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 58: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 59: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  },
  {
    q: 'Web Geliştirme Soru 60: Geliştirilen web uygulamalarının ölçeklenebilirliğini nasıl garanti ediyorsunuz?',
    a: 'Mikroservis mimarileri, sunucu ön bellek mekanizmaları, optimize edilmiş veri tabanı şemaları ve yük dengeleyici bulut altyapıları kullanarak sistemlerimizin milyonlarca anlık kullanıcıya kesintisiz hizmet vermesini sağlıyoruz.'
  }
];

export function Services() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Tech Stack Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Gelişmiş Teknoloji Envanterimiz
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Her projeye en uygun teknolojiyi seçiyor, geleceğe hazır ve bakımı kolay kod tabanları oluşturuyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_STACKS.map((stack, idx) => (
              <ScrollReveal key={idx} direction="up" distance={40} delay={idx * 0.03}>
                <TechCard
                  category={stack.category}
                  technologies={stack.technologies}
                  description={stack.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Full-Stack Geliştirme Sürecimiz
              </h2>
              <p className="font-body text-[var(--text-secondary)] max-w-lg mx-auto">
                Agile metodoloji ve şeffaf iletişimle her adımda sizi süreçte aktif tutuyoruz.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {PROCESS_STEPS.map((item, idx) => (
              <ScrollReveal key={idx} direction="left" distance={30} delay={idx * 0.03}>
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-indigo-500 text-indigo-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light">{item.desc}</p>
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
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Web Geliştirme & Mimari SSS
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.03}>
                <div className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-950 mb-3 flex items-start gap-3">
                    <span className="text-indigo-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-indigo-500/20">
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
              Web Projenizi <span style={{ color: ACCENT }}>Hayata</span> Geçirelim
            </h2>
            <p className="font-body text-neutral-400 leading-relaxed mb-10 max-w-lg mx-auto">
              Projenizin kapsamını ve teknik gereksinimlerini birlikte değerlendirelim.
              Ücretsiz teknik danışmanlık görüşmesi için bizimle iletişime geçin.
            </p>
            <Link href="/iletisim" className="inline-flex px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-300" style={{ background: ACCENT }}>
              Projenizi Konuşalım
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
