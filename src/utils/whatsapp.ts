import { MenuItem } from '../data/menu';

export const BUSINESS_CONFIG = {
  name: 'The Amor Panem',
  tagline: 'Freshly made, served with love',
  subtitle: 'CAFÉ • BAKERY • GOOD FOOD',
  phoneDisplay: '+91 70424 73307',
  phoneTel: '+917042473307',
  whatsappRaw: '917042473307',
  email: 'hello@theamorpanem.com',
  address: {
    area: 'Kapashera',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110037',
    country: 'India',
    displayShort: 'Kapashera, Delhi',
    fullDisplay: 'Kapashera, New Delhi, Delhi 110037, India'
  },
  hours: '10:00 AM – 11:00 PM (Daily)',
  googleMapsUrl: 'https://maps.google.com/?q=Kapashera,+New+Delhi,+Delhi+110037'
};

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

/**
 * Calculates the total numerical amount of items in the cart
 */
export function calculateOrderTotal(cart: CartItem[]): number {
  return cart.reduce((sum, entry) => sum + (entry.item.priceNumeric * entry.quantity), 0);
}

/**
 * Formats a numeric price into INR currency format
 */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Generates an encoded WhatsApp chat URL with structured order breakdown
 */
export function generateWhatsAppOrderUrl(
  cart: CartItem[],
  options?: {
    customerName?: string;
    deliveryType?: 'dine-in' | 'takeaway' | 'delivery';
    notes?: string;
  }
): string {
  if (cart.length === 0) {
    const defaultMsg = encodeURIComponent(
      `Hello The Amor Panem! 👋 I would like to place an order from your café in Kapashera.`
    );
    return `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${defaultMsg}`;
  }

  const lines: string[] = [
    `*☕ New Order — The Amor Panem (Kapashera)*`,
    `----------------------------------------`
  ];

  if (options?.customerName) {
    lines.push(`👤 *Customer:* ${options.customerName}`);
  }
  if (options?.deliveryType) {
    lines.push(`📍 *Order Type:* ${options.deliveryType.toUpperCase()}`);
  }

  lines.push(``);
  lines.push(`*Order Items:*`);

  cart.forEach((entry, idx) => {
    lines.push(`${idx + 1}. *${entry.item.name}* × ${entry.quantity} (₹${entry.item.priceNumeric * entry.quantity})`);
  });

  const total = calculateOrderTotal(cart);
  lines.push(``);
  lines.push(`*Estimated Total:* ₹${total}`);

  if (options?.notes) {
    lines.push(``);
    lines.push(`📝 *Special Instructions:* ${options.notes}`);
  }

  lines.push(``);
  lines.push(`Please confirm availability and preparation time. Thank you! ✨`);

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encoded}`;
}

/**
 * Generates a clean direct chat link
 */
export function generateDirectWhatsAppChatUrl(customMessage?: string): string {
  const msg = customMessage || `Hello The Amor Panem! 👋 I am browsing your menu and would like to order or ask a question.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(msg)}`;
}
