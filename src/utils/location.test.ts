import test from 'node:test';
import assert from 'node:assert/strict';
import { getLiveCafeStatus, getGoogleMapsEmbedUrl, getDirectionsUrl, CAFE_LOCATION } from './location';

test('CAFE_LOCATION has accurate Kapashera coordinates', () => {
  assert.equal(CAFE_LOCATION.lat, 28.5286);
  assert.equal(CAFE_LOCATION.lng, 77.0863);
  assert.equal(CAFE_LOCATION.pincode, '110037');
});

test('getLiveCafeStatus returns open status during daytime (e.g. 14:00 IST)', () => {
  // 14:00 IST = 08:30 UTC
  const testDate = new Date('2026-10-29T08:30:00Z');
  const status = getLiveCafeStatus(testDate);
  assert.equal(status.isOpen, true);
  assert.ok(status.statusText.includes('Open Now'));
});

test('getLiveCafeStatus returns closed status at night (e.g. 03:00 IST)', () => {
  // 03:00 IST = 21:30 UTC (previous day)
  const testDate = new Date('2026-10-28T21:30:00Z');
  const status = getLiveCafeStatus(testDate);
  assert.equal(status.isOpen, false);
  assert.ok(status.statusText.includes('Closed Now'));
});

test('getDirectionsUrl generates valid Google Maps driving directions', () => {
  const url = getDirectionsUrl({ lat: 28.5562, lng: 77.0999 }); // e.g. from Aerocity
  assert.ok(url.includes('destination=28.5286,77.0863'));
  assert.ok(url.includes('origin=28.5562,77.0999'));
});

test('getGoogleMapsEmbedUrl formats encoded query', () => {
  const embed = getGoogleMapsEmbedUrl();
  assert.ok(embed.startsWith('https://maps.google.com/maps?q='));
  assert.ok(embed.includes('Kapashera'));
  assert.ok(embed.includes('output=embed'));
});
