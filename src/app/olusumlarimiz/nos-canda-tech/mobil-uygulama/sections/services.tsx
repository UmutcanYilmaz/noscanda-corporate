'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/core/ScrollReveal';

const ACCENT = '#F59E0B';
const ACCENT_BG = 'rgba(245, 158, 11, 0.06)';
const ACCENT_BORDER = 'rgba(245, 158, 11, 0.15)';

interface MobilePlatform {
  title: string;
  description: string;
  tags: string[];
}

const PlatformCard = ({ title, description, tags }: MobilePlatform) => {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200/50 shadow-sm hover:shadow-lg transition-all duration-500 p-8 h-full flex flex-col">
      <h3 className="font-cinzel text-lg font-bold text-[var(--text-primary)] mb-3">
        {title}
      </h3>
      <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed font-light mb-5 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.6rem] font-gothic tracking-wider uppercase px-3 py-1.5 rounded-lg border bg-[var(--bg-secondary)]"
            style={{ borderColor: ACCENT_BORDER, color: ACCENT }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
const PLATFORMS = [
  {
    title: 'Mobil Platform Modülü 1 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 1. platform kütüphanemizdir.',
    tags: ['Modül 1', 'SDK 1', 'API 1']
  },
  {
    title: 'Mobil Platform Modülü 2 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 2. platform kütüphanemizdir.',
    tags: ['Modül 2', 'SDK 2', 'API 2']
  },
  {
    title: 'Mobil Platform Modülü 3 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 3. platform kütüphanemizdir.',
    tags: ['Modül 3', 'SDK 3', 'API 3']
  },
  {
    title: 'Mobil Platform Modülü 4 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 4. platform kütüphanemizdir.',
    tags: ['Modül 4', 'SDK 4', 'API 4']
  },
  {
    title: 'Mobil Platform Modülü 5 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 5. platform kütüphanemizdir.',
    tags: ['Modül 5', 'SDK 5', 'API 5']
  },
  {
    title: 'Mobil Platform Modülü 6 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 6. platform kütüphanemizdir.',
    tags: ['Modül 6', 'SDK 6', 'API 6']
  },
  {
    title: 'Mobil Platform Modülü 7 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 7. platform kütüphanemizdir.',
    tags: ['Modül 7', 'SDK 7', 'API 7']
  },
  {
    title: 'Mobil Platform Modülü 8 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 8. platform kütüphanemizdir.',
    tags: ['Modül 8', 'SDK 8', 'API 8']
  },
  {
    title: 'Mobil Platform Modülü 9 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 9. platform kütüphanemizdir.',
    tags: ['Modül 9', 'SDK 9', 'API 9']
  },
  {
    title: 'Mobil Platform Modülü 10 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 10. platform kütüphanemizdir.',
    tags: ['Modül 10', 'SDK 10', 'API 10']
  },
  {
    title: 'Mobil Platform Modülü 11 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 11. platform kütüphanemizdir.',
    tags: ['Modül 11', 'SDK 11', 'API 11']
  },
  {
    title: 'Mobil Platform Modülü 12 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 12. platform kütüphanemizdir.',
    tags: ['Modül 12', 'SDK 12', 'API 12']
  },
  {
    title: 'Mobil Platform Modülü 13 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 13. platform kütüphanemizdir.',
    tags: ['Modül 13', 'SDK 13', 'API 13']
  },
  {
    title: 'Mobil Platform Modülü 14 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 14. platform kütüphanemizdir.',
    tags: ['Modül 14', 'SDK 14', 'API 14']
  },
  {
    title: 'Mobil Platform Modülü 15 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 15. platform kütüphanemizdir.',
    tags: ['Modül 15', 'SDK 15', 'API 15']
  },
  {
    title: 'Mobil Platform Modülü 16 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 16. platform kütüphanemizdir.',
    tags: ['Modül 16', 'SDK 16', 'API 16']
  },
  {
    title: 'Mobil Platform Modülü 17 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 17. platform kütüphanemizdir.',
    tags: ['Modül 17', 'SDK 17', 'API 17']
  },
  {
    title: 'Mobil Platform Modülü 18 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 18. platform kütüphanemizdir.',
    tags: ['Modül 18', 'SDK 18', 'API 18']
  },
  {
    title: 'Mobil Platform Modülü 19 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 19. platform kütüphanemizdir.',
    tags: ['Modül 19', 'SDK 19', 'API 19']
  },
  {
    title: 'Mobil Platform Modülü 20 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 20. platform kütüphanemizdir.',
    tags: ['Modül 20', 'SDK 20', 'API 20']
  },
  {
    title: 'Mobil Platform Modülü 21 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 21. platform kütüphanemizdir.',
    tags: ['Modül 21', 'SDK 21', 'API 21']
  },
  {
    title: 'Mobil Platform Modülü 22 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 22. platform kütüphanemizdir.',
    tags: ['Modül 22', 'SDK 22', 'API 22']
  },
  {
    title: 'Mobil Platform Modülü 23 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 23. platform kütüphanemizdir.',
    tags: ['Modül 23', 'SDK 23', 'API 23']
  },
  {
    title: 'Mobil Platform Modülü 24 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 24. platform kütüphanemizdir.',
    tags: ['Modül 24', 'SDK 24', 'API 24']
  },
  {
    title: 'Mobil Platform Modülü 25 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 25. platform kütüphanemizdir.',
    tags: ['Modül 25', 'SDK 25', 'API 25']
  },
  {
    title: 'Mobil Platform Modülü 26 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 26. platform kütüphanemizdir.',
    tags: ['Modül 26', 'SDK 26', 'API 26']
  },
  {
    title: 'Mobil Platform Modülü 27 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 27. platform kütüphanemizdir.',
    tags: ['Modül 27', 'SDK 27', 'API 27']
  },
  {
    title: 'Mobil Platform Modülü 28 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 28. platform kütüphanemizdir.',
    tags: ['Modül 28', 'SDK 28', 'API 28']
  },
  {
    title: 'Mobil Platform Modülü 29 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 29. platform kütüphanemizdir.',
    tags: ['Modül 29', 'SDK 29', 'API 29']
  },
  {
    title: 'Mobil Platform Modülü 30 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 30. platform kütüphanemizdir.',
    tags: ['Modül 30', 'SDK 30', 'API 30']
  },
  {
    title: 'Mobil Platform Modülü 31 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 31. platform kütüphanemizdir.',
    tags: ['Modül 31', 'SDK 31', 'API 31']
  },
  {
    title: 'Mobil Platform Modülü 32 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 32. platform kütüphanemizdir.',
    tags: ['Modül 32', 'SDK 32', 'API 32']
  },
  {
    title: 'Mobil Platform Modülü 33 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 33. platform kütüphanemizdir.',
    tags: ['Modül 33', 'SDK 33', 'API 33']
  },
  {
    title: 'Mobil Platform Modülü 34 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 34. platform kütüphanemizdir.',
    tags: ['Modül 34', 'SDK 34', 'API 34']
  },
  {
    title: 'Mobil Platform Modülü 35 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 35. platform kütüphanemizdir.',
    tags: ['Modül 35', 'SDK 35', 'API 35']
  },
  {
    title: 'Mobil Platform Modülü 36 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 36. platform kütüphanemizdir.',
    tags: ['Modül 36', 'SDK 36', 'API 36']
  },
  {
    title: 'Mobil Platform Modülü 37 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 37. platform kütüphanemizdir.',
    tags: ['Modül 37', 'SDK 37', 'API 37']
  },
  {
    title: 'Mobil Platform Modülü 38 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 38. platform kütüphanemizdir.',
    tags: ['Modül 38', 'SDK 38', 'API 38']
  },
  {
    title: 'Mobil Platform Modülü 39 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 39. platform kütüphanemizdir.',
    tags: ['Modül 39', 'SDK 39', 'API 39']
  },
  {
    title: 'Mobil Platform Modülü 40 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 40. platform kütüphanemizdir.',
    tags: ['Modül 40', 'SDK 40', 'API 40']
  },
  {
    title: 'Mobil Platform Modülü 41 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 41. platform kütüphanemizdir.',
    tags: ['Modül 41', 'SDK 41', 'API 41']
  },
  {
    title: 'Mobil Platform Modülü 42 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 42. platform kütüphanemizdir.',
    tags: ['Modül 42', 'SDK 42', 'API 42']
  },
  {
    title: 'Mobil Platform Modülü 43 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 43. platform kütüphanemizdir.',
    tags: ['Modül 43', 'SDK 43', 'API 43']
  },
  {
    title: 'Mobil Platform Modülü 44 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 44. platform kütüphanemizdir.',
    tags: ['Modül 44', 'SDK 44', 'API 44']
  },
  {
    title: 'Mobil Platform Modülü 45 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 45. platform kütüphanemizdir.',
    tags: ['Modül 45', 'SDK 45', 'API 45']
  },
  {
    title: 'Mobil Platform Modülü 46 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 46. platform kütüphanemizdir.',
    tags: ['Modül 46', 'SDK 46', 'API 46']
  },
  {
    title: 'Mobil Platform Modülü 47 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 47. platform kütüphanemizdir.',
    tags: ['Modül 47', 'SDK 47', 'API 47']
  },
  {
    title: 'Mobil Platform Modülü 48 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 48. platform kütüphanemizdir.',
    tags: ['Modül 48', 'SDK 48', 'API 48']
  },
  {
    title: 'Mobil Platform Modülü 49 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 49. platform kütüphanemizdir.',
    tags: ['Modül 49', 'SDK 49', 'API 49']
  },
  {
    title: 'Mobil Platform Modülü 50 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 50. platform kütüphanemizdir.',
    tags: ['Modül 50', 'SDK 50', 'API 50']
  },
  {
    title: 'Mobil Platform Modülü 51 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 51. platform kütüphanemizdir.',
    tags: ['Modül 51', 'SDK 51', 'API 51']
  },
  {
    title: 'Mobil Platform Modülü 52 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 52. platform kütüphanemizdir.',
    tags: ['Modül 52', 'SDK 52', 'API 52']
  },
  {
    title: 'Mobil Platform Modülü 53 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 53. platform kütüphanemizdir.',
    tags: ['Modül 53', 'SDK 53', 'API 53']
  },
  {
    title: 'Mobil Platform Modülü 54 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 54. platform kütüphanemizdir.',
    tags: ['Modül 54', 'SDK 54', 'API 54']
  },
  {
    title: 'Mobil Platform Modülü 55 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 55. platform kütüphanemizdir.',
    tags: ['Modül 55', 'SDK 55', 'API 55']
  },
  {
    title: 'Mobil Platform Modülü 56 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 56. platform kütüphanemizdir.',
    tags: ['Modül 56', 'SDK 56', 'API 56']
  },
  {
    title: 'Mobil Platform Modülü 57 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 57. platform kütüphanemizdir.',
    tags: ['Modül 57', 'SDK 57', 'API 57']
  },
  {
    title: 'Mobil Platform Modülü 58 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 58. platform kütüphanemizdir.',
    tags: ['Modül 58', 'SDK 58', 'API 58']
  },
  {
    title: 'Mobil Platform Modülü 59 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 59. platform kütüphanemizdir.',
    tags: ['Modül 59', 'SDK 59', 'API 59']
  },
  {
    title: 'Mobil Platform Modülü 60 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 60. platform kütüphanemizdir.',
    tags: ['Modül 60', 'SDK 60', 'API 60']
  },
  {
    title: 'Mobil Platform Modülü 61 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 61. platform kütüphanemizdir.',
    tags: ['Modül 61', 'SDK 61', 'API 61']
  },
  {
    title: 'Mobil Platform Modülü 62 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 62. platform kütüphanemizdir.',
    tags: ['Modül 62', 'SDK 62', 'API 62']
  },
  {
    title: 'Mobil Platform Modülü 63 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 63. platform kütüphanemizdir.',
    tags: ['Modül 63', 'SDK 63', 'API 63']
  },
  {
    title: 'Mobil Platform Modülü 64 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 64. platform kütüphanemizdir.',
    tags: ['Modül 64', 'SDK 64', 'API 64']
  },
  {
    title: 'Mobil Platform Modülü 65 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 65. platform kütüphanemizdir.',
    tags: ['Modül 65', 'SDK 65', 'API 65']
  },
  {
    title: 'Mobil Platform Modülü 66 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 66. platform kütüphanemizdir.',
    tags: ['Modül 66', 'SDK 66', 'API 66']
  },
  {
    title: 'Mobil Platform Modülü 67 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 67. platform kütüphanemizdir.',
    tags: ['Modül 67', 'SDK 67', 'API 67']
  },
  {
    title: 'Mobil Platform Modülü 68 (React Native / Cross-Platform)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 68. platform kütüphanemizdir.',
    tags: ['Modül 68', 'SDK 68', 'API 68']
  },
  {
    title: 'Mobil Platform Modülü 69 (iOS Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 69. platform kütüphanemizdir.',
    tags: ['Modül 69', 'SDK 69', 'API 69']
  },
  {
    title: 'Mobil Platform Modülü 70 (Android Native)',
    description: 'Mobil uygulamanızın cihaz yeteneklerini en verimli şekilde kullanmasını sağlayan, optimize edilmiş 70. platform kütüphanemizdir.',
    tags: ['Modül 70', 'SDK 70', 'API 70']
  }
];
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Mobil Geliştirme Fazı 1',
    desc: 'Uygulama geliştirme döngümüzün 1. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '02',
    title: 'Mobil Geliştirme Fazı 2',
    desc: 'Uygulama geliştirme döngümüzün 2. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '03',
    title: 'Mobil Geliştirme Fazı 3',
    desc: 'Uygulama geliştirme döngümüzün 3. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '04',
    title: 'Mobil Geliştirme Fazı 4',
    desc: 'Uygulama geliştirme döngümüzün 4. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '05',
    title: 'Mobil Geliştirme Fazı 5',
    desc: 'Uygulama geliştirme döngümüzün 5. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '06',
    title: 'Mobil Geliştirme Fazı 6',
    desc: 'Uygulama geliştirme döngümüzün 6. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '07',
    title: 'Mobil Geliştirme Fazı 7',
    desc: 'Uygulama geliştirme döngümüzün 7. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '08',
    title: 'Mobil Geliştirme Fazı 8',
    desc: 'Uygulama geliştirme döngümüzün 8. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '09',
    title: 'Mobil Geliştirme Fazı 9',
    desc: 'Uygulama geliştirme döngümüzün 9. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '10',
    title: 'Mobil Geliştirme Fazı 10',
    desc: 'Uygulama geliştirme döngümüzün 10. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '11',
    title: 'Mobil Geliştirme Fazı 11',
    desc: 'Uygulama geliştirme döngümüzün 11. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '12',
    title: 'Mobil Geliştirme Fazı 12',
    desc: 'Uygulama geliştirme döngümüzün 12. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '13',
    title: 'Mobil Geliştirme Fazı 13',
    desc: 'Uygulama geliştirme döngümüzün 13. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '14',
    title: 'Mobil Geliştirme Fazı 14',
    desc: 'Uygulama geliştirme döngümüzün 14. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '15',
    title: 'Mobil Geliştirme Fazı 15',
    desc: 'Uygulama geliştirme döngümüzün 15. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '16',
    title: 'Mobil Geliştirme Fazı 16',
    desc: 'Uygulama geliştirme döngümüzün 16. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '17',
    title: 'Mobil Geliştirme Fazı 17',
    desc: 'Uygulama geliştirme döngümüzün 17. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '18',
    title: 'Mobil Geliştirme Fazı 18',
    desc: 'Uygulama geliştirme döngümüzün 18. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '19',
    title: 'Mobil Geliştirme Fazı 19',
    desc: 'Uygulama geliştirme döngümüzün 19. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '20',
    title: 'Mobil Geliştirme Fazı 20',
    desc: 'Uygulama geliştirme döngümüzün 20. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '21',
    title: 'Mobil Geliştirme Fazı 21',
    desc: 'Uygulama geliştirme döngümüzün 21. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '22',
    title: 'Mobil Geliştirme Fazı 22',
    desc: 'Uygulama geliştirme döngümüzün 22. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '23',
    title: 'Mobil Geliştirme Fazı 23',
    desc: 'Uygulama geliştirme döngümüzün 23. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '24',
    title: 'Mobil Geliştirme Fazı 24',
    desc: 'Uygulama geliştirme döngümüzün 24. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '25',
    title: 'Mobil Geliştirme Fazı 25',
    desc: 'Uygulama geliştirme döngümüzün 25. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '26',
    title: 'Mobil Geliştirme Fazı 26',
    desc: 'Uygulama geliştirme döngümüzün 26. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '27',
    title: 'Mobil Geliştirme Fazı 27',
    desc: 'Uygulama geliştirme döngümüzün 27. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '28',
    title: 'Mobil Geliştirme Fazı 28',
    desc: 'Uygulama geliştirme döngümüzün 28. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '29',
    title: 'Mobil Geliştirme Fazı 29',
    desc: 'Uygulama geliştirme döngümüzün 29. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '30',
    title: 'Mobil Geliştirme Fazı 30',
    desc: 'Uygulama geliştirme döngümüzün 30. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '31',
    title: 'Mobil Geliştirme Fazı 31',
    desc: 'Uygulama geliştirme döngümüzün 31. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '32',
    title: 'Mobil Geliştirme Fazı 32',
    desc: 'Uygulama geliştirme döngümüzün 32. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '33',
    title: 'Mobil Geliştirme Fazı 33',
    desc: 'Uygulama geliştirme döngümüzün 33. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '34',
    title: 'Mobil Geliştirme Fazı 34',
    desc: 'Uygulama geliştirme döngümüzün 34. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '35',
    title: 'Mobil Geliştirme Fazı 35',
    desc: 'Uygulama geliştirme döngümüzün 35. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '36',
    title: 'Mobil Geliştirme Fazı 36',
    desc: 'Uygulama geliştirme döngümüzün 36. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '37',
    title: 'Mobil Geliştirme Fazı 37',
    desc: 'Uygulama geliştirme döngümüzün 37. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '38',
    title: 'Mobil Geliştirme Fazı 38',
    desc: 'Uygulama geliştirme döngümüzün 38. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '39',
    title: 'Mobil Geliştirme Fazı 39',
    desc: 'Uygulama geliştirme döngümüzün 39. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '40',
    title: 'Mobil Geliştirme Fazı 40',
    desc: 'Uygulama geliştirme döngümüzün 40. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '41',
    title: 'Mobil Geliştirme Fazı 41',
    desc: 'Uygulama geliştirme döngümüzün 41. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '42',
    title: 'Mobil Geliştirme Fazı 42',
    desc: 'Uygulama geliştirme döngümüzün 42. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '43',
    title: 'Mobil Geliştirme Fazı 43',
    desc: 'Uygulama geliştirme döngümüzün 43. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '44',
    title: 'Mobil Geliştirme Fazı 44',
    desc: 'Uygulama geliştirme döngümüzün 44. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '45',
    title: 'Mobil Geliştirme Fazı 45',
    desc: 'Uygulama geliştirme döngümüzün 45. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '46',
    title: 'Mobil Geliştirme Fazı 46',
    desc: 'Uygulama geliştirme döngümüzün 46. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '47',
    title: 'Mobil Geliştirme Fazı 47',
    desc: 'Uygulama geliştirme döngümüzün 47. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '48',
    title: 'Mobil Geliştirme Fazı 48',
    desc: 'Uygulama geliştirme döngümüzün 48. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '49',
    title: 'Mobil Geliştirme Fazı 49',
    desc: 'Uygulama geliştirme döngümüzün 49. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '50',
    title: 'Mobil Geliştirme Fazı 50',
    desc: 'Uygulama geliştirme döngümüzün 50. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '51',
    title: 'Mobil Geliştirme Fazı 51',
    desc: 'Uygulama geliştirme döngümüzün 51. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '52',
    title: 'Mobil Geliştirme Fazı 52',
    desc: 'Uygulama geliştirme döngümüzün 52. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '53',
    title: 'Mobil Geliştirme Fazı 53',
    desc: 'Uygulama geliştirme döngümüzün 53. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '54',
    title: 'Mobil Geliştirme Fazı 54',
    desc: 'Uygulama geliştirme döngümüzün 54. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '55',
    title: 'Mobil Geliştirme Fazı 55',
    desc: 'Uygulama geliştirme döngümüzün 55. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '56',
    title: 'Mobil Geliştirme Fazı 56',
    desc: 'Uygulama geliştirme döngümüzün 56. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '57',
    title: 'Mobil Geliştirme Fazı 57',
    desc: 'Uygulama geliştirme döngümüzün 57. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '58',
    title: 'Mobil Geliştirme Fazı 58',
    desc: 'Uygulama geliştirme döngümüzün 58. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '59',
    title: 'Mobil Geliştirme Fazı 59',
    desc: 'Uygulama geliştirme döngümüzün 59. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  },
  {
    step: '60',
    title: 'Mobil Geliştirme Fazı 60',
    desc: 'Uygulama geliştirme döngümüzün 60. aşamasında, ekran geçiş animasyonları, yerel depolama optimizasyonları ve test yayını süreçleri tamamlanır.'
  }
];
const FAQS = [
  {
    q: 'Mobil Uygulama Soru 1: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 2: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 3: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 4: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 5: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 6: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 7: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 8: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 9: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 10: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 11: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 12: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 13: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 14: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 15: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 16: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 17: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 18: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 19: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 20: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 21: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 22: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 23: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 24: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 25: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 26: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 27: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 28: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 29: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 30: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 31: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 32: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 33: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 34: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 35: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 36: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 37: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 38: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 39: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 40: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 41: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 42: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 43: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 44: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 45: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 46: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 47: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 48: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 49: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 50: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 51: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 52: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 53: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 54: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 55: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 56: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 57: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 58: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 59: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  },
  {
    q: 'Mobil Uygulama Soru 60: Geliştirilen uygulamanın App Store ve Google Play onay süreçlerini nasıl yönetiyorsunuz?',
    a: 'Uygulamaları market kurallarına (ASO standartları) tam uyumlu şekilde hazırlıyor, gerekli sertifikasyon ve güvenlik denetimlerini gerçekleştiriyor ve onay sürecini ekibimiz üzerinden uçtan uca takip ederek yayına alıyoruz.'
  }
];

export function Services() {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Platform Cards */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal direction="up" distance={30}>
            <div className="text-center mb-14">
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Desteklenen Mobil Platformlar ve Teknolojiler
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLATFORMS.map((platform, idx) => (
              <ScrollReveal key={idx} direction="up" distance={40} delay={idx * 0.03}>
                <PlatformCard
                  title={platform.title}
                  description={platform.description}
                  tags={platform.tags}
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
                Mobil Geliştirme Sürecimiz
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {PROCESS_STEPS.map((item, idx) => (
              <ScrollReveal key={idx} direction="left" distance={30} delay={idx * 0.03}>
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border-2 border-amber-500 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
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
              <span className="font-gothic text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 font-semibold">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="font-cinzel text-3xl md:text-4xl font-bold mt-4 mb-4">
                Mobil Geliştirme & Market Yayın SSS
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 0.03}>
                <div className="bg-neutral-50/50 rounded-2xl p-6 border border-neutral-200/40 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-cinzel text-base font-bold text-neutral-950 mb-3 flex items-start gap-3">
                    <span className="text-amber-600 font-mono">S{idx + 1}.</span>
                    {faq.q}
                  </h3>
                  <div className="font-body text-xs text-[var(--text-secondary)] leading-relaxed font-light pl-6 border-l border-amber-500/20">
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
              Mobil Fikrinizi <span style={{ color: ACCENT }}>Gerçeğe</span> Dönüştürelim
            </h2>
            <p className="font-body text-neutral-400 leading-relaxed mb-10 max-w-lg mx-auto">
              Uygulamanızın konseptini, hedef platformunu ve lansman takvimini konuşmak için iletişime geçin.
            </p>
            <Link href="/iletisim" className="inline-flex px-8 py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition-all duration-300" style={{ background: ACCENT }}>
              Uygulama Fikrinizi Paylaşın
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
