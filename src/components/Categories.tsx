import React from 'react';
import { CATEGORIES, CategoryInfo } from '../data/menu';

interface CategoriesProps {
  onSelectCategory: (category: CategoryInfo) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section
      aria-label="Browse Menu by Categories"
      className="py-10 sm:py-14 bg-[#faf6ee] border-b border-[#eee7db]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Responsive Grid: 5 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group relative h-48 sm:h-52 lg:h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#253628] cursor-pointer text-left border border-[#000000]/10 bg-[#171512]"
              aria-label={`Explore ${cat.name} menu category`}
            >
              {/* Authentic Category Card Graphic */}
              <picture className="absolute inset-0 w-full h-full">
                <source srcSet={cat.webpImage} type="image/webp" />
                <img
                  src={cat.image}
                  alt={`${cat.name} Category at The Amor Panem Kapashera`}
                  width={174}
                  height={194}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </picture>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/30 rounded-2xl transition-all pointer-events-none" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
