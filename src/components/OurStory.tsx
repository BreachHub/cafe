import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OurStoryProps {
  onLearnMore: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onLearnMore }) => {
  return (
    <section
      id="our-story"
      aria-label="About The Amor Panem Bakery & Café"
      className="relative overflow-hidden bg-[#213324] text-[#f7f5ed] py-14 sm:py-20 lg:py-24 border-b border-[#18261b]"
    >
      {/* Decorative Botanical Branch Watermark in the background right */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 sm:opacity-25 w-72 sm:w-96 h-auto translate-x-12 translate-y-8">
        <svg
          viewBox="0 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#52795a]"
        >
          <path
            d="M180 390C120 300 80 180 120 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M125 50C100 40 70 50 60 70C75 80 110 75 125 50Z" fill="currentColor" />
          <path d="M135 110C165 95 195 110 200 135C180 145 145 135 135 110Z" fill="currentColor" />
          <path d="M110 150C75 140 45 155 35 180C55 195 95 180 110 150Z" fill="currentColor" />
          <path d="M120 210C155 195 190 215 195 240C170 255 135 240 120 210Z" fill="currentColor" />
          <path d="M95 260C60 250 30 270 25 295C50 310 85 290 95 260Z" fill="currentColor" />
          <path d="M115 320C145 305 180 325 185 350C160 365 125 350 115 320Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Cafe Interior Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <picture>
                <source srcSet="/images/story-interior.webp" type="image/webp" />
                <img
                  src="/images/story-interior.png"
                  alt="Cozy interior ambiance of The Amor Panem cafe and bakery in Kapashera with warm lighting and Good Food Great Moods neon wall sign"
                  width={416}
                  height={190}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-103"
                />
              </picture>
              
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-2xl" />
            </div>
          </div>

          {/* Right Column: Story Copy & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag with square accent */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#95a898] inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#b3c7b6]">
                Our Story
              </span>
            </div>

            {/* Main H2 Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#faf8f2] leading-tight tracking-tight">
              More Than Just a Café
            </h2>

            {/* Paragraph Text */}
            <p className="text-[#cbd8cd] text-base sm:text-lg leading-relaxed">
              The Amor Panem is a cozy little cafe and bakery, born out of a simple belief — that good food brings people together. We serve freshly made meals, artisanal bakes and comforting drinks, all crafted with love and the finest ingredients.
            </p>

            {/* Outlined Pill Button */}
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="group inline-flex items-center gap-2 bg-transparent hover:bg-[#2b422f] text-[#f8f6f0] border border-[#cbd8cd]/70 hover:border-[#f8f6f0] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm font-semibold tracking-wide transition-all active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
