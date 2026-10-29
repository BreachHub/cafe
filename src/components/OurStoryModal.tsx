import React from 'react';
import { X } from 'lucide-react';
import { BotanicalDivider } from './BrandLogo';

interface OurStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMenu: () => void;
}

export const OurStoryModal: React.FC<OurStoryModalProps> = ({
  isOpen,
  onClose,
  onOpenMenu
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="About The Amor Panem Bakery & Café"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      <div className="relative bg-[#faf6ee] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#e5ddce] z-10 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#253628] text-[#f8f5ee] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#d1ba86]">
              Our Heritage &amp; Craft
            </span>
            <h2 className="font-serif text-2xl font-bold">More Than Just a Café</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close story dialog"
            className="p-2 rounded-full hover:bg-white/20 text-[#f8f5ee] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-[#465448] leading-relaxed">
          <div className="rounded-xl overflow-hidden mb-4 border border-[#e5dcce]">
            <img
              src="/images/story-interior.png"
              alt="Inside The Amor Panem café in Kapashera"
              className="w-full h-56 object-cover"
            />
          </div>

          <p>
            <strong className="text-[#1e2d21]">The Amor Panem</strong> was founded with a genuine passion for honest baking and community connection in Kapashera, New Delhi. The name reflects our reverence for the art of bread and good food (<em>Amor</em> for love, <em>Panem</em> for bread).
          </p>

          <p>
            Every morning starts early in our kitchen: rolling out artisanal doughs, brewing freshly ground roasts, blending fresh sauces, and preparing gourmet patties. We believe that good food shouldn’t be rushed—it should bring warmth, comfort, and good moods to every guest who walks through our doors.
          </p>

          <div className="p-4 bg-[#f3ecdf] rounded-xl border border-[#e0d6c4] space-y-2">
            <h3 className="font-serif text-base font-bold text-[#1e2d21]">Our Promise to You</h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-[#526054]">
              <li>Pure, unadulterated ingredients in every preparation</li>
              <li>Freshly baked daily breads, crusts, and pastries</li>
              <li>Cozy, welcoming neighborhood environment in Kapashera</li>
              <li>Prompt, courteous WhatsApp ordering &amp; pickup</li>
            </ul>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onOpenMenu();
              }}
              className="py-2.5 px-6 rounded-full bg-[#253628] text-white font-semibold text-xs hover:bg-[#1a281c] transition-colors cursor-pointer"
            >
              Explore Our Menu
            </button>
            <span className="font-script text-2xl text-[#253628]">
              Good Food Great Moods ♡
            </span>
          </div>

          <div className="text-center pt-2">
            <BotanicalDivider className="justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
};
