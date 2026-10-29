import React, { useState } from 'react';
import { EXTENDED_MENU, MenuItem, CATEGORIES } from '../data/menu';
import { X, Plus, Check } from 'lucide-react';
import { BotanicalDivider } from './BrandLogo';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  initialCategory?: string | null;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  initialCategory = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [addedIds, setAddedIds] = useState<{ [key: string]: boolean }>({});

  if (!isOpen) return null;

  const filteredItems = selectedCategory === 'all'
    ? EXTENDED_MENU
    : EXTENDED_MENU.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full Café Menu"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-[#faf6ee] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#e5ddce] z-10 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-[#253628] text-[#f8f5ee] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#d1ba86]">
              The Amor Panem Kapashera
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Complete Café &amp; Bakery Menu</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu modal"
            className="p-2 rounded-full hover:bg-white/20 text-[#f8f5ee] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills Filter */}
        <div className="p-4 bg-[#f3eddf] border-b border-[#e2d8c5] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#253628] text-white'
                : 'bg-white text-[#38463a] hover:bg-[#e7dfcf]'
            }`}
          >
            All Items ({EXTENDED_MENU.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#253628] text-white'
                  : 'bg-white text-[#38463a] hover:bg-[#e7dfcf]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item) => {
              const isAdded = !!addedIds[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-3.5 border border-[#e8dfcf] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0 bg-[#f0eae0]"
                    />
                    <div className="min-w-0">
                      <h3 className="font-serif font-bold text-sm text-[#1e2d21] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[#6b776d] mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#f0e9dc] flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#1e2d21]">
                      ₹{item.priceNumeric}
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${
                        isAdded
                          ? 'bg-[#3b7a57] text-white'
                          : 'bg-[#253628] hover:bg-[#1a281c] text-white'
                      }`}
                    >
                      {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isAdded ? 'Added' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <BotanicalDivider className="justify-center" />
            <p className="text-xs text-[#738275] mt-2">
              All dishes are prepared fresh upon order with pure ingredients.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
