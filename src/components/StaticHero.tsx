import React from 'react';
import { BG_IMAGE_1 } from './SpotlightHero';

interface StaticHeroProps {
  titleLine1: string;
  titleLine2?: string;
  subtitle?: string;
  bgImage?: string;
}

export const StaticHero: React.FC<StaticHeroProps> = ({
  titleLine1,
  titleLine2,
  subtitle,
  bgImage = BG_IMAGE_1,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-black flex flex-col items-center justify-center text-center px-5 pt-36 sm:pt-44 pb-20 sm:pb-28">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-35 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pointer-events-none">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            {titleLine1}
          </span>
          {titleLine2 && (
            <span
              className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              {titleLine2}
            </span>
          )}
        </h1>

        {subtitle && (
          <p
            className="mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed hero-anim hero-fade"
            style={{ animationDelay: '0.6s' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
