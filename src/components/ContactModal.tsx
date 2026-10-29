import React from 'react';
import { BUSINESS_CONFIG } from '../utils/whatsapp';
import { CAFE_LOCATION, getGoogleMapsEmbedUrl, getDirectionsUrl, getLiveCafeStatus } from '../utils/location';
import { X, MapPin, Phone, MessageCircle, Mail, Clock, Navigation, Compass } from 'lucide-react';
import { BotanicalDivider } from './BrandLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const cafeStatus = getLiveCafeStatus();

  const handleDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          window.open(getDirectionsUrl({ lat: pos.coords.latitude, lng: pos.coords.longitude }), '_blank');
        },
        () => {
          window.open(getDirectionsUrl(), '_blank');
        }
      );
    } else {
      window.open(getDirectionsUrl(), '_blank');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact & Live Location - The Amor Panem"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        aria-hidden="true"
      />

      <div className="relative bg-[#faf6ee] rounded-2xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#e5ddce] z-10 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#253628] text-[#f8f5ee] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#d1ba86]">
                {cafeStatus.statusText}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold mt-0.5">Real Live Location &amp; Contact</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact dialog"
            className="p-2 rounded-full hover:bg-white/20 text-[#f8f5ee] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Live Map Embed */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#e0d6c4] shadow-xs">
            <iframe
              title="The Amor Panem Real Live Location"
              src={getGoogleMapsEmbedUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full block"
            />
          </div>

          <div className="space-y-3 bg-white p-4 rounded-xl border border-[#e5dcce] text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1e2d21]">Address &amp; Landmarks</strong>
                <span className="text-[#59665b]">{CAFE_LOCATION.addressLine}</span>
                <span className="block text-[11px] text-[#78887b] mt-0.5">{CAFE_LOCATION.landmarks}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1e2d21]">Phone Helpline</strong>
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneTel}`}
                  className="text-[#253628] font-semibold hover:underline"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1e2d21]">WhatsApp Order Line</strong>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#253628] font-semibold hover:underline"
                >
                  +91 70424 73307
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1e2d21]">Café Timings</strong>
                <span className="text-[#59665b]">{BUSINESS_CONFIG.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={handleDirections}
              className="flex items-center justify-center gap-1.5 bg-[#253628] hover:bg-[#1a281c] text-white py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#4ade80]" />
              <span>Get Live Directions</span>
            </button>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                'Hello The Amor Panem! 👋 I would like to place an order or ask for directions.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#f1ebde] text-[#253628] border border-[#253628] py-3 rounded-xl text-xs font-semibold tracking-wide transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#4ade80]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="text-center pt-1">
            <BotanicalDivider className="justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
};
