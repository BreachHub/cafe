import React, { useState } from 'react';
import { BrandLogo, WheatSprigIcon } from './BrandLogo';
import { BUSINESS_CONFIG } from '../utils/whatsapp';
import { ShoppingBag, Menu as MenuIcon, X, Phone } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openContactModal: () => void;
  openMenuModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openContactModal,
  openMenuModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'menu', label: 'Menu', href: '#menu', onClick: openMenuModal },
    { id: 'our-story', label: 'Our Story', href: '#our-story' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'contact', label: 'Contact', href: '#contact', onClick: openContactModal }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setActiveTab(link.id);
    setMobileMenuOpen(false);
    if (link.onClick) {
      link.onClick();
    } else {
      const el = document.getElementById(link.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fbf8f2]/95 backdrop-blur-md border-b border-[#ece6d9] transition-all">
      {/* 1. Top Announcement Bar */}
      <aside aria-label="Announcement" className="w-full bg-[#243527] text-[#ece4d6] py-1.5 px-4 text-xs font-medium tracking-wide flex items-center justify-center gap-2">
        <WheatSprigIcon className="w-3.5 h-3.5 text-[#d1ba86]" />
        <span>{BUSINESS_CONFIG.tagline}</span>
        <WheatSprigIcon className="w-3.5 h-3.5 text-[#d1ba86] transform scale-x-[-1]" />
      </aside>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => setActiveTab('home')}
          className="focus:outline-none focus:ring-2 focus:ring-[#283a2b] rounded-lg p-1"
          aria-label="The Amor Panem Home"
        >
          <BrandLogo variant="header" />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`relative py-2 text-sm tracking-wide font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#1e2d21] font-semibold'
                    : 'text-[#4a584d] hover:text-[#1e2d21]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#243527] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: WhatsApp Button + Cart Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Cart Drawer Trigger if items in cart */}
          {cartCount > 0 && (
            <button
              onClick={openCart}
              aria-label={`View WhatsApp Order Cart with ${cartCount} items`}
              className="relative p-2.5 rounded-full bg-[#e8e2d4] text-[#243527] hover:bg-[#ded6c4] transition-all cursor-pointer flex items-center justify-center focus:ring-2 focus:ring-[#243527]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c84630] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            </button>
          )}

          {/* Primary "Order on WhatsApp" Pill Button */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
              'Hello The Amor Panem! 👋 I would like to place an order from your café in Kapashera.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp: +91 70424 73307"
            className="flex items-center gap-2 bg-[#253628] hover:bg-[#1a281c] text-[#f8f5ee] px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#253628]"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-4 h-4 fill-current text-[#4ade80]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.054 1.341 1.761 1.016.806 1.487.897 1.713 1.002.226.106.357.088.49-.059.133-.146.57-.665.722-.894.152-.229.303-.191.509-.115.206.076 1.314.62 1.54.733.226.113.376.17.43.265.054.095.054.551-.09 1.156z" />
            </svg>
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden text-xs font-semibold">WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#243527] hover:bg-[#ece6d9] rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf8f2] border-b border-[#e6decf] px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`text-left py-2 px-3 rounded-md text-base font-medium ${
                  activeTab === link.id
                    ? 'bg-[#253628] text-white font-semibold'
                    : 'text-[#2a3c2e] hover:bg-[#efe9dc]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#e2d9c7] flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneTel}`}
              className="flex items-center gap-2 text-sm text-[#253628] font-medium py-1.5 px-3 rounded hover:bg-[#efe9dc]"
            >
              <Phone className="w-4 h-4 text-[#253628]" />
              <span>Call Us: {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <div className="text-xs text-[#627064] px-3">
              📍 {BUSINESS_CONFIG.address.fullDisplay}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
