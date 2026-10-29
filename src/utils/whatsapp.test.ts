import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateOrderTotal, formatINR, generateWhatsAppOrderUrl, BUSINESS_CONFIG, CartItem } from './whatsapp';
import { TOP_PICKS } from '../data/menu';

test('business phone config contains verified WhatsApp number', () => {
  assert.equal(BUSINESS_CONFIG.whatsappRaw, '917042473307');
  assert.equal(BUSINESS_CONFIG.phoneDisplay, '+91 70424 73307');
});

test('calculateOrderTotal computes sum of cart items correctly', () => {
  const dummyCart: CartItem[] = [
    { item: TOP_PICKS[0], quantity: 2 }, // 179 * 2 = 358
    { item: TOP_PICKS[1], quantity: 1 }  // 299 * 1 = 299
  ];
  const total = calculateOrderTotal(dummyCart);
  assert.equal(total, 657);
});

test('formatINR formats currency symbol correctly', () => {
  assert.equal(formatINR(500), '₹500');
});

test('generateWhatsAppOrderUrl creates valid wa.me URL targeting 917042473307', () => {
  const dummyCart: CartItem[] = [
    { item: TOP_PICKS[0], quantity: 1 }
  ];
  const url = generateWhatsAppOrderUrl(dummyCart, {
    customerName: 'Aarav',
    deliveryType: 'takeaway'
  });

  assert.ok(url.startsWith('https://wa.me/917042473307?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Classic Veg Burger'));
  assert.ok(decoded.includes('Aarav'));
  assert.ok(decoded.includes('TAKEAWAY'));
});
