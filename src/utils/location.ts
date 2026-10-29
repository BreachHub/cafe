export const CAFE_LOCATION = {
  name: 'The Amor Panem',
  area: 'Kapashera',
  city: 'New Delhi',
  state: 'Delhi',
  pincode: '110037',
  country: 'India',
  lat: 28.5286,
  lng: 77.0863,
  addressLine: 'Main Road, Kapashera, New Delhi, Delhi 110037',
  landmarks: 'Near Samalka & Delhi-Gurgaon (NH48) Border, 10 mins from Aerocity',
  openHour: 10,  // 10:00 AM
  closeHour: 23  // 11:00 PM
};

export interface CafeStatus {
  isOpen: boolean;
  statusText: string;
  badgeClass: string;
}

/**
 * Calculates live opening status in Indian Standard Time (IST / UTC+5:30)
 */
export function getLiveCafeStatus(targetDate?: Date): CafeStatus {
  const date = targetDate || new Date();
  
  // Calculate IST hours & minutes
  // IST is UTC + 5 hours 30 minutes
  const utcMillis = date.getTime() + (date.getTimezoneOffset() * 60000);
  const istMillis = utcMillis + (5.5 * 3600000);
  const istDate = new Date(istMillis);

  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const timeInMinutes = (hours * 60) + minutes;

  const openMinutes = CAFE_LOCATION.openHour * 60; // 600 (10:00 AM)
  const closeMinutes = CAFE_LOCATION.closeHour * 60; // 1380 (11:00 PM)

  if (timeInMinutes >= openMinutes && timeInMinutes < closeMinutes) {
    if (closeMinutes - timeInMinutes <= 60) {
      return {
        isOpen: true,
        statusText: 'Open Now • Closing Soon (at 11:00 PM)',
        badgeClass: 'bg-amber-100 text-amber-800 border-amber-300'
      };
    }
    return {
      isOpen: true,
      statusText: 'Open Now • Closes at 11:00 PM',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now • Opens at 10:00 AM',
      badgeClass: 'bg-stone-100 text-stone-700 border-stone-300'
    };
  }
}

/**
 * Builds Google Maps Embed URL for Kapashera, New Delhi
 */
export function getGoogleMapsEmbedUrl(): string {
  const query = encodeURIComponent('The Amor Panem, Kapashera, New Delhi, Delhi 110037');
  return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}

/**
 * Generates turn-by-turn navigation URL to the cafe
 */
export function getDirectionsUrl(userCoords?: { lat: number; lng: number }): string {
  if (userCoords) {
    return `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${CAFE_LOCATION.lat},${CAFE_LOCATION.lng}&travelmode=driving`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${CAFE_LOCATION.lat},${CAFE_LOCATION.lng}&travelmode=driving`;
}
