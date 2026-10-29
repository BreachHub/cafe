import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../utils/whatsapp';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenWhatsApp }) => {
  return (
    <section
      id="home"
      aria-label="Welcome to The Amor Panem Café"
      className="relative overflow-hidden bg-[#faf6ee] pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16 border-b border-[#ece4d4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Copy, Actions */}
          <div className="lg:col-span-6 xl:col-span-6 z-10 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#8e6e3c]">
                Café Favourites
              </span>
            </div>

            {/* Main H1 Heading matching exact typography */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] leading-[1.08] text-[#1c241d] tracking-tight">
              A little comfort <br />
              in every bite.
            </h1>

            {/* Description Paragraph */}
            <p className="text-[#59554b] text-base sm:text-lg leading-relaxed max-w-lg">
              From freshly baked treats to hearty meals, The Amor Panem is your go-to spot for good food, great coffee and even better vibes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              {/* Primary Explore Menu Button */}
              <button
                onClick={onExploreMenu}
                className="group flex items-center gap-2 bg-[#253628] hover:bg-[#1a271c] text-[#fbf9f4] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#253628]"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary WhatsApp Button */}
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  'Hello The Amor Panem! 👋 I would like to order delicious food and coffee from your Kapashera café.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onOpenWhatsApp}
                className="flex items-center gap-2 bg-transparent hover:bg-[#eae2d3] text-[#253628] border border-[#253628] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#253628]"
              >
                {/* WhatsApp Outline Icon */}
                <svg
                  className="w-4 h-4 fill-current text-[#253628]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.054 1.341 1.761 1.016.806 1.487.897 1.713 1.002.226.106.357.088.49-.059.133-.146.57-.665.722-.894.152-.229.303-.191.509-.115.206.076 1.314.62 1.54.733.226.113.376.17.43.265.054.095.054.551-.09 1.156z" />
                </svg>
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Quick Local Trust Badges */}
            <div className="pt-2 flex items-center gap-6 text-xs text-[#6e685e]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3e6b47]" />
                Freshly Baked Daily
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3e6b47]" />
                Kapashera, New Delhi
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3e6b47]" />
                WhatsApp Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Hero Food Platter matching exact reference image */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <picture>
                <source srcSet="/images/hero-platter.webp" type="image/webp" />
                <img
                  src="/images/hero-platter.png"
                  alt="Artisanal burger, golden french fries, and cold coffee served at The Amor Panem Café in Kapashera"
                  width={580}
                  height={382}
                  fetchPriority="high"
                  className="w-full h-auto object-cover rounded-2xl block"
                />
              </picture>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
