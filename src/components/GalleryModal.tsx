import React from 'react';
import { X } from 'lucide-react';
import { BotanicalDivider } from './BrandLogo';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const galleryImages = [
    { src: '/images/story-interior.png', title: 'Cozy Dining & Neon Sign', desc: 'Good Food Great Moods corner with warm wooden furniture' },
    { src: '/images/hero-food.png', title: 'Signature Platter', desc: 'Gourmet burger, seasoned fries & layered iced coffee' },
    { src: '/images/dish-burger.png', title: 'Artisanal Veg Burger', desc: 'Fresh crisp vegetables and house-crafted sauce' },
    { src: '/images/dish-pizza.png', title: 'Wood-Style Margherita Pizza', desc: 'Melted mozzarella, fresh basil and tomato sauce' },
    { src: '/images/dish-pasta.png', title: 'Creamy Alfredo Pasta', desc: 'Tossed in rich garlic parmesan cream' },
    { src: '/images/dish-coffee.png', title: 'Signature Cold Coffee', desc: 'Rich espresso blend crowned with chocolate whipped cream' },
    { src: '/images/cat-sides.png', title: 'Crispy Peri Peri Fries', desc: 'Freshly cut, golden fries with custom seasoning' },
    { src: '/images/cat-shakes.png', title: 'Gourmet Shakes & Coolers', desc: 'Decadent chocolate & mocha dessert beverages' }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="The Amor Panem Photo Gallery"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      <div className="relative bg-[#faf6ee] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#e5ddce] z-10 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#253628] text-[#f8f5ee] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#d1ba86]">
              Visual Moments
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">The Amor Panem Gallery</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close gallery modal"
            className="p-2 rounded-full hover:bg-white/20 text-[#f8f5ee] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden border border-[#e6dece] bg-white shadow-xs"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-3">
                  <h3 className="font-serif font-bold text-sm text-[#1e2d21]">{img.title}</h3>
                  <p className="text-[11px] text-[#69756b] mt-0.5">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <BotanicalDivider className="justify-center" />
            <p className="font-script text-2xl text-[#253628] mt-2">
              Good Food, Great Moods ♡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
