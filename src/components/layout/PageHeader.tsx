import Image from 'next/image';

interface PageHeaderProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  image: string;
}

/**
 * Premium PageHeader component displaying a responsive grid with
 * a luxury marble background, transparent watermark logo on the foreground,
 * and featured image card on the right.
 */
export function PageHeader({ badge, title, description, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)] py-16 md:py-20 mt-[72px] bg-[var(--bg-secondary)]">
      
      {/* Luxury Marble Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-45 mix-blend-multiply">
        <Image
          src="/images/placeholders/hero-background.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Gentle Ivory/Ivory Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-transparent to-white/40 pointer-events-none" />

      {/* Ambient Floating Orbs */}
      <div className="floating-orb floating-orb-gold w-[300px] h-[300px] -top-[100px] -left-[100px]" />
      <div className="floating-orb floating-orb-warm w-[200px] h-[200px] bottom-[10%] right-[10%]" />

      {/* Transparent Nos Canda Monogram Logo on Foreground/Center */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden w-full">
        <Image
          src="/logolar/logolar-1024x1024/nos-canda-logo-bw.png"
          alt=""
          width={400}
          height={400}
          className="w-[180px] md:w-[280px] h-auto opacity-[0.03] select-none pointer-events-none"
          aria-hidden="true"
          priority
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Side: Title & Description */}
        <div className="md:col-span-7 text-left">
          <span className="badge-corporate inline-block mb-4">{badge}</span>
          <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-wide leading-tight">
            {title}
          </h1>
          <p className="font-body text-sm md:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        
        {/* Right Side: Featured Image */}
        <div className="md:col-span-5 relative w-full aspect-[16/10] md:h-[260px] rounded-2xl overflow-hidden border border-[var(--border-strong)] shadow-[0_15px_35px_rgba(28,25,23,0.1)] bg-[var(--bg-elevated)] magnetic-hover">
          <Image
            src={image}
            alt={typeof title === 'string' ? title : 'Öne Çıkan Görsel'}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 400px"
          />
          {/* Decorative Ambient Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
