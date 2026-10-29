import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../utils/whatsapp';
import { CAFE_LOCATION, getLiveCafeStatus, getDirectionsUrl, getGoogleMapsEmbedUrl, CafeStatus } from '../utils/location';
import { MapPin, Clock, Phone, ChevronDown, ChevronUp, Navigation, MessageCircle, ExternalLink, Compass } from 'lucide-react';
import { BotanicalDivider } from './BrandLogo';

export const LocalSEOAndFAQs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cafeStatus, setCafeStatus] = useState<CafeStatus>(getLiveCafeStatus());
  const [isLocating, setIsLocating] = useState<boolean>(false);

  // Update live status every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCafeStatus(getLiveCafeStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleGetLiveDirections = () => {
    if (!navigator.geolocation) {
      window.open(getDirectionsUrl(), '_blank');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        const { latitude, longitude } = position.coords;
        window.open(getDirectionsUrl({ lat: latitude, lng: longitude }), '_blank');
      },
      (error) => {
        console.warn('Geolocation error or dismissed:', error);
        setIsLocating(false);
        // Fallback to general directions to Kapashera
        window.open(getDirectionsUrl(), '_blank');
      },
      { timeout: 7000 }
    );
  };

  const faqs = [
    {
      q: 'Where is The Amor Panem café and bakery located in Kapashera?',
      a: `The Amor Panem is located on Main Road in Kapashera, New Delhi (PIN: 110037). We are conveniently situated near the Kapashera-Gurgaon border, Samalka, Aerocity, and Mahipalpur, making our café an accessible hub for casual dining, fresh bakery pickups, and relaxed coffee meetups.`
    },
    {
      q: 'How do I place a quick order on WhatsApp?',
      a: `You can order directly by tapping any of the "Order on WhatsApp" buttons on our website or by messaging +91 70424 73307. Simply choose your items from our menu, and our kitchen team will confirm preparation time and coordinate prompt takeaway or dine-in service.`
    },
    {
      q: 'What freshly baked and savory items does The Amor Panem serve?',
      a: `Our kitchen specializes in freshly baked artisanal treats, gourmet burgers (such as our Classic Veg Burger), thin-crust Italian style pizzas (like our classic Margherita), creamy Alfredo and Arrabbiata pastas, seasoned Peri Peri fries, and handcrafted iced coffees and thick shakes.`
    },
    {
      q: 'Do you offer takeaway and dine-in in Kapashera and Samalka?',
      a: `Yes! We welcome guests for a cozy dine-in experience in our warm, plant-filled café ambiance with ambient music and free Wi-Fi. We also cater to quick takeaways and local WhatsApp orders for residents and offices across Kapashera and Samalka.`
    },
    {
      q: 'What are your operating hours and payment options?',
      a: `The Amor Panem is open 7 days a week from 10:00 AM to 11:00 PM. We accept UPI (Google Pay, PhonePe, Paytm), cash, cards, and instant digital payments for WhatsApp orders.`
    }
  ];

  return (
    <section
      id="contact"
      aria-label="Real Live Location, Contact and FAQs"
      className="py-12 sm:py-16 lg:py-20 bg-[#f7f2e7] border-b border-[#e9e1d0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8e6e3c]">
              Real Live Location &amp; Guide
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1e231f] tracking-tight">
            Visit The Amor Panem in Kapashera
          </h2>
          <div className="flex justify-center">
            <BotanicalDivider className="mt-2" />
          </div>
          <p className="text-[#5f584e] text-sm sm:text-base mt-2">
            Find our exact coordinates, live operating status, and interactive map below.
          </p>
        </div>

        {/* 2-Column Layout: Real Live Map & Location Card + Accordion FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Live Location, Interactive Map & Details (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#faf6ee] rounded-2xl border border-[#e5dcce] shadow-sm overflow-hidden flex flex-col">
            
            {/* Live Location Header Bar */}
            <div className="p-5 sm:p-6 bg-[#253628] text-[#f8f5ee] flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#d1ba86]">
                  Live Location &bull; Kapashera, New Delhi
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                  The Amor Panem Café &amp; Bakery
                </h3>
              </div>

              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#374c3b] text-[#86efac] border border-[#4e6a53]">
                <span className={`w-2 h-2 rounded-full ${cafeStatus.isOpen ? 'bg-[#4ade80] animate-pulse' : 'bg-gray-400'}`} />
                <span>{cafeStatus.statusText}</span>
              </div>
            </div>

            {/* Real Interactive Google Maps Embed */}
            <div className="relative w-full h-72 sm:h-80 bg-[#e5dcce]">
              <iframe
                title="The Amor Panem Real Live Location in Kapashera New Delhi"
                src={getGoogleMapsEmbedUrl()}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full block"
              />
              
              {/* Floating Quick Action Overlay on Map */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs py-1.5 px-3 rounded-lg shadow-md border border-[#ddd] text-[11px] font-semibold text-[#253628] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>28.5286° N, 77.0863° E</span>
              </div>
            </div>

            {/* Location Details & Live Action Buttons */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#38463a]">
                
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1e2d21]">Address</strong>
                    <span>{CAFE_LOCATION.addressLine}</span>
                    <span className="block text-[11px] text-[#717e73] mt-0.5">
                      {CAFE_LOCATION.landmarks}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1e2d21]">Working Hours</strong>
                    <span>{BUSINESS_CONFIG.hours}</span>
                    <span className="block text-[11px] text-[#717e73] mt-0.5">
                      Open Monday to Sunday
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1e2d21]">Call Helpline</strong>
                    <a href={`tel:${BUSINESS_CONFIG.phoneTel}`} className="hover:underline font-medium text-[#253628]">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#253628] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1e2d21]">WhatsApp Ordering</strong>
                    <a href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-[#253628]">
                      +91 70424 73307
                    </a>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Live GPS Directions + WhatsApp Chat */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleGetLiveDirections}
                  disabled={isLocating}
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-[#253628] hover:bg-[#1a281c] text-[#f8f5ee] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-75"
                >
                  <Compass className={`w-4 h-4 text-[#4ade80] ${isLocating ? 'animate-spin' : ''}`} />
                  <span>{isLocating ? 'Detecting Your Location...' : 'Get Live Directions from Here'}</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CAFE_LOCATION.addressLine)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white hover:bg-[#efe8db] text-[#253628] border border-[#253628] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: FAQs Accordion (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8e6e3c]">
                Frequently Asked Questions
              </h3>
              <span className="text-[11px] text-[#717e73]">Local Information</span>
            </div>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#faf6ee] rounded-xl border border-[#e5dcce] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-[#1f2620] hover:text-[#253628] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#253628] flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#5d675e] leading-relaxed border-t border-[#ece3d4]/70">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Transport Distance Guide for Visitors */}
            <div className="mt-4 p-4 rounded-xl bg-[#f0eae0] border border-[#ded5c5] text-xs text-[#526055] space-y-1.5">
              <strong className="block text-[#1e2d21] font-semibold">Transit &amp; Accessibility:</strong>
              <div className="flex justify-between">
                <span>&bull; Aerocity / IGI Airport T3</span>
                <span className="font-medium text-[#253628]">~10 mins</span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Samalka &amp; Old Delhi Gurgaon Rd</span>
                <span className="font-medium text-[#253628]">~3 mins</span>
              </div>
              <div className="flex justify-between">
                <span>&bull; Cyber Hub / Gurgaon Border</span>
                <span className="font-medium text-[#253628]">~12 mins</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
