import React from 'react';
import { TOP_PICKS, MenuItem } from '../data/menu';
import { BotanicalDivider } from './BrandLogo';
import { Plus, ArrowRight, Check } from 'lucide-react';

interface TopPicksProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenFullMenu: () => void;
  showNumericPrice?: boolean;
}

export const TopPicks: React.FC<TopPicksProps> = ({
  onAddToCart,
  onOpenFullMenu,
  showNumericPrice = false
}) => {
  const [justAddedId, setJustAddedId] = React.useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section
      id="menu"
      aria-label="Featured Menu - Our Top Picks"
      className="py-12 sm:py-16 lg:py-20 bg-[#faf6ee] border-b border-[#eee7db]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8e6e3c]">
              Featured Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1e231f] mt-1 tracking-tight">
              Our Top Picks
            </h2>
            {/* Botanical sprig decorative divider line */}
            <BotanicalDivider className="mt-2" />
          </div>

          {/* View Full Menu Link */}
          <button
            onClick={onOpenFullMenu}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#253628] hover:text-[#172419] tracking-wide transition-colors cursor-pointer py-1"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {TOP_PICKS.map((item) => {
            const isAdded = justAddedId === item.id;
            return (
              <article
                key={item.id}
                className="group bg-[#f5efe4] rounded-2xl overflow-hidden border border-[#e8dfcf] flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product Photo */}
                <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-[#e4dcce]">
                  <picture>
                    <source srcSet={item.webpImage} type="image/webp" />
                    <img
                      src={item.image}
                      alt={`${item.name} served at The Amor Panem Kapashera`}
                      width={174}
                      height={146}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#1f2620] leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-[#645e52] text-xs sm:text-xs leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Add to WhatsApp Order Button */}
                  <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#ece3d4]/70">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1c241d] tracking-tight">
                      {showNumericPrice ? `₹${item.priceNumeric}` : item.priceMock}
                    </span>

                    <button
                      onClick={() => handleAdd(item)}
                      aria-label={`Add ${item.name} to WhatsApp order`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm ${
                        isAdded
                          ? 'bg-[#3b7a57] text-white scale-110'
                          : 'bg-[#253628] hover:bg-[#1a271c] text-white active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
