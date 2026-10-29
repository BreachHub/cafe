/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { TopPicks } from './components/TopPicks';
import { OurStory } from './components/OurStory';
import { LocalSEOAndFAQs } from './components/LocalSEOAndFAQs';
import { Footer } from './components/Footer';
import { WhatsAppCartDrawer } from './components/WhatsAppCartDrawer';
import { FullMenuModal } from './components/FullMenuModal';
import { GalleryModal } from './components/GalleryModal';
import { ContactModal } from './components/ContactModal';
import { OurStoryModal } from './components/OurStoryModal';
import { MenuItem, CategoryInfo } from './data/menu';
import { CartItem, BUSINESS_CONFIG } from './utils/whatsapp';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState<boolean>(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState<boolean>(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart((prev) => prev.filter((entry) => entry.item.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((entry) =>
          entry.item.id === itemId ? { ...entry, quantity: newQuantity } : entry
        )
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCategoryClick = (category: CategoryInfo) => {
    setSelectedCategoryFilter(category.id);
    setIsMenuModalOpen(true);
  };

  const totalCartItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee] text-[#222f25] font-sans selection:bg-[#253628] selection:text-[#f8f5ee]">
      
      {/* 1. Header & Announcement Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartItems}
        openCart={() => setIsCartOpen(true)}
        openContactModal={() => setIsContactModalOpen(true)}
        openMenuModal={() => {
          setSelectedCategoryFilter('all');
          setIsMenuModalOpen(true);
        }}
      />

      {/* Main Semantic Content Area */}
      <main className="flex-1" id="main-content">
        
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) {
              menuEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              setIsMenuModalOpen(true);
            }
          }}
          onOpenWhatsApp={() => {
            // opens default chat or order link
          }}
        />

        {/* 3. 5 Category Cards */}
        <Categories onSelectCategory={handleCategoryClick} />

        {/* 4. Featured Menu - Our Top Picks */}
        <TopPicks
          onAddToCart={handleAddToCart}
          onOpenFullMenu={() => {
            setSelectedCategoryFilter('all');
            setIsMenuModalOpen(true);
          }}
        />

        {/* 5. More Than Just a Café - Our Story */}
        <OurStory onLearnMore={() => setIsStoryModalOpen(true)} />

        {/* 6. Kapashera Local SEO Guide & FAQs */}
        <LocalSEOAndFAQs />

      </main>

      {/* 7. Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          const el = document.getElementById(tab);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        openContactModal={() => setIsContactModalOpen(true)}
        openMenuModal={() => {
          setSelectedCategoryFilter('all');
          setIsMenuModalOpen(true);
        }}
        openGalleryModal={() => setIsGalleryModalOpen(true)}
        openStoryModal={() => setIsStoryModalOpen(true)}
      />

      {/* Slide-over WhatsApp Order Drawer */}
      <WhatsAppCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Full Menu Modal */}
      <FullMenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        onAddToCart={handleAddToCart}
        initialCategory={selectedCategoryFilter}
      />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Our Story Modal */}
      <OurStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onOpenMenu={() => {
          setSelectedCategoryFilter('all');
          setIsMenuModalOpen(true);
        }}
      />

      {/* Floating Sticky WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30">
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
            'Hello The Amor Panem! 👋 I would like to order delicious food and coffee from your Kapashera café.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp (+91 70424 73307)"
          className="flex items-center gap-2.5 bg-[#253628] hover:bg-[#1a281c] text-[#f8f5ee] px-4 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95 border border-[#3e5643]"
        >
          <svg
            className="w-5 h-5 fill-current text-[#4ade80]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.45 1.054 1.341 1.761 1.016.806 1.487.897 1.713 1.002.226.106.357.088.49-.059.133-.146.57-.665.722-.894.152-.229.303-.191.509-.115.206.076 1.314.62 1.54.733.226.113.376.17.43.265.054.095.054.551-.09 1.156z" />
          </svg>
          <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp Order</span>
        </a>
      </aside>

    </div>
  );
}
