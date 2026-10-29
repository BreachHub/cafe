import React from 'react';
import { BrandLogo, WheatSprigIcon } from './BrandLogo';
import { BUSINESS_CONFIG } from '../utils/whatsapp';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
  openContactModal: () => void;
  openMenuModal: () => void;
  openGalleryModal: () => void;
  openStoryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  openContactModal,
  openMenuModal,
  openGalleryModal,
  openStoryModal
}) => {
  return (
    <footer className="bg-[#f8f5ee] border-t border-[#ece4d4] text-[#222f25]" aria-label="Site Footer">
      
      {/* Upper Footer (Cream Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Logo (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-xs sm:text-sm text-[#5d6b5f] leading-relaxed max-w-sm mt-3">
              An artisanal bakery and cozy café in Kapashera, New Delhi. Dedicated to handcrafted pastries, wholesome bakes, comforting gourmet meals, and specialty coffee.
            </p>
            <div className="pt-2 text-xs text-[#78887b]">
              <span>Opening Hours: </span>
              <strong className="text-[#253628] font-semibold">{BUSINESS_CONFIG.hours}</strong>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1e2d21]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#48564a]">
              <li>
                <button
                  onClick={() => onNavClick('home')}
                  className="hover:text-[#18261b] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={openMenuModal}
                  className="hover:text-[#18261b] transition-colors cursor-pointer text-left"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={openStoryModal}
                  className="hover:text-[#18261b] transition-colors cursor-pointer text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={openGalleryModal}
                  className="hover:text-[#18261b] transition-colors cursor-pointer text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={openContactModal}
                  className="hover:text-[#18261b] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1e2d21]">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#48564a]">
              {/* Location */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#18261b] hover:underline transition-colors"
                >
                  {BUSINESS_CONFIG.address.displayShort}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#253628] flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="hover:text-[#18261b] hover:underline transition-colors font-medium"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </li>

              {/* Order on WhatsApp */}
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#253628] flex-shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                    'Hello The Amor Panem! 👋 I would like to place an order or ask a question.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#18261b] hover:underline transition-colors font-medium text-[#1e2d21]"
                >
                  Order on WhatsApp
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#253628] flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_CONFIG.email}`}
                  className="hover:text-[#18261b] hover:underline transition-colors break-all"
                >
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1e2d21]">
              Follow Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Amor Panem on Instagram"
                className="w-8 h-8 rounded-full border border-[#cfc6b6] flex items-center justify-center text-[#253628] hover:bg-[#253628] hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Amor Panem on Facebook"
                className="w-8 h-8 rounded-full border border-[#cfc6b6] flex items-center justify-center text-[#253628] hover:bg-[#253628] hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with The Amor Panem on WhatsApp"
                className="w-8 h-8 rounded-full border border-[#cfc6b6] flex items-center justify-center text-[#253628] hover:bg-[#253628] hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Botanical sprig line */}
            <div className="flex items-center gap-2 pt-1 text-[#56705c]">
              <div className="h-[1px] w-12 bg-[#56705c]/30" />
              <WheatSprigIcon className="w-3.5 h-3.5 text-[#56705c]" />
              <div className="h-[1px] w-12 bg-[#56705c]/30" />
            </div>

            {/* Handwritten Signature Script */}
            <div className="pt-1">
              <p className="font-script text-2xl text-[#283c2e] leading-tight select-none">
                Good Food <br />
                <span className="ml-3">Great Moods ♡</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar (Deep Forest Green) */}
      <div className="w-full bg-[#213324] text-[#cfd9d0] py-3.5 px-4 sm:px-6 lg:px-10 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>© 2025 The Amor Panem. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[#e1ece2]">
            <WheatSprigIcon className="w-3 h-3 text-[#d1ba86]" />
            <span>Kapashera, Delhi</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
