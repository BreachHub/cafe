import React, { useState } from 'react';
import { CartItem, BUSINESS_CONFIG, calculateOrderTotal, formatINR, generateWhatsAppOrderUrl } from '../utils/whatsapp';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';

interface WhatsAppCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onClearCart: () => void;
}

export const WhatsAppCartDrawer: React.FC<WhatsAppCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryType, setDeliveryType] = useState<'takeaway' | 'dine-in' | 'delivery'>('takeaway');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const total = calculateOrderTotal(cart);
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleSendOrder = () => {
    const url = generateWhatsAppOrderUrl(cart, {
      customerName: customerName.trim() || undefined,
      deliveryType,
      notes: notes.trim() || undefined
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Your WhatsApp Order Cart"
      className="fixed inset-0 z-50 overflow-hidden flex justify-end animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div className="relative w-full max-w-md bg-[#faf6ee] text-[#1e2d21] shadow-2xl flex flex-col h-full z-10 border-l border-[#ece2d0]">
        
        {/* Header */}
        <div className="p-5 bg-[#253628] text-[#f8f5ee] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#4ade80]" />
            <div>
              <h2 className="font-serif text-lg font-bold">Your WhatsApp Order</h2>
              <p className="text-[11px] text-[#cfdad1]">
                Orders go directly to {BUSINESS_CONFIG.phoneDisplay}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close order drawer"
            className="p-1.5 rounded-full hover:bg-white/20 text-[#f8f5ee] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#eee5d3] text-[#78887b] mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1e2d21]">Your cart is empty</h3>
              <p className="text-xs text-[#6e7b70] max-w-xs mx-auto">
                Explore our menu and add your favorite burgers, pizzas, pastas, or coffee.
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[#667568] uppercase tracking-wider">
                  <span>Selected Items ({totalItems})</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#c84630] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                {cart.map((entry) => (
                  <div
                    key={entry.item.id}
                    className="p-3 bg-white rounded-xl border border-[#e8dfcf] flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={entry.item.image}
                        alt={entry.item.name}
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0 border border-[#eee]"
                      />
                      <div className="min-w-0">
                        <h4 className="font-medium text-sm text-[#1e2d21] truncate">
                          {entry.item.name}
                        </h4>
                        <span className="text-xs text-[#707c72] font-semibold">
                          ₹{entry.item.priceNumeric} each
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-[#f4eee2] px-2 py-1 rounded-lg border border-[#e5dcce]">
                      <button
                        onClick={() => onUpdateQuantity(entry.item.id, entry.quantity - 1)}
                        aria-label={`Decrease ${entry.item.name} quantity`}
                        className="w-5 h-5 rounded flex items-center justify-center text-[#253628] hover:bg-[#e4dcce]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#1e2d21] w-4 text-center">
                        {entry.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(entry.item.id, entry.quantity + 1)}
                        aria-label={`Increase ${entry.item.name} quantity`}
                        className="w-5 h-5 rounded flex items-center justify-center text-[#253628] hover:bg-[#e4dcce]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="space-y-4 pt-2 border-t border-[#ece2d0]">
                {/* Order Type */}
                <div>
                  <label className="block text-xs font-semibold text-[#1e2d21] mb-1.5 uppercase tracking-wide">
                    Order Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['takeaway', 'dine-in', 'delivery'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setDeliveryType(type)}
                        className={`py-2 text-xs font-semibold rounded-lg capitalize border cursor-pointer transition-all ${
                          deliveryType === type
                            ? 'bg-[#253628] text-white border-[#253628]'
                            : 'bg-white text-[#48564a] border-[#e2d8c6] hover:bg-[#f2ecdf]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Name */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold text-[#1e2d21] mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 bg-white border border-[#e2d8c6] rounded-lg text-sm text-[#1e2d21] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#253628]"
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <label htmlFor="order-notes" className="block text-xs font-semibold text-[#1e2d21] mb-1">
                    Special Notes / Cooking Instructions (Optional)
                  </label>
                  <textarea
                    id="order-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Extra spicy, no onions, or table #4..."
                    className="w-full px-3 py-2 bg-white border border-[#e2d8c6] rounded-lg text-sm text-[#1e2d21] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#253628] resize-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer / Send Button */}
        {cart.length > 0 && (
          <div className="p-5 bg-white border-t border-[#ece2d0] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#657367]">Estimated Total</span>
              <span className="font-serif text-xl font-bold text-[#1e2d21]">
                {formatINR(total)}
              </span>
            </div>

            <button
              onClick={handleSendOrder}
              className="w-full py-3.5 px-4 bg-[#253628] hover:bg-[#1a281c] text-[#f8f5ee] rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#253628]"
            >
              <Send className="w-4 h-4 text-[#4ade80]" />
              <span>Send Order to WhatsApp (+91 70424 73307)</span>
            </button>
            <p className="text-[11px] text-center text-[#738275]">
              Opens official WhatsApp chat with your order details pre-filled.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
