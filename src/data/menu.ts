export interface MenuItem {
  id: string;
  name: string;
  category: 'burgers' | 'pizza' | 'pasta' | 'sides' | 'shakes-coffee' | 'bakery';
  description: string;
  priceMock: string;
  priceNumeric: number;
  image: string;
  webpImage: string;
  badge?: string;
  isTopPick?: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  image: string;
  webpImage: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: 'burger',
    image: '/images/cat-burger.png',
    webpImage: '/images/cat-burger.webp',
    description: 'Juicy artisanal burgers on toasted brioche buns'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: 'pizza',
    image: '/images/cat-pizza.png',
    webpImage: '/images/cat-pizza.webp',
    description: 'Crisp crust, fresh San Marzano style sauce & mozzarella'
  },
  {
    id: 'pasta',
    name: 'Pasta',
    icon: 'pasta',
    image: '/images/cat-pasta.png',
    webpImage: '/images/cat-pasta.webp',
    description: 'Handcrafted pasta tossed in velvety made-to-order sauces'
  },
  {
    id: 'sides',
    name: 'Sides',
    icon: 'fries',
    image: '/images/cat-sides.png',
    webpImage: '/images/cat-sides.webp',
    description: 'Golden seasoned fries, dips, and savory cafe sides'
  },
  {
    id: 'shakes-coffee',
    name: 'Shakes & Coffee',
    icon: 'cup',
    image: '/images/cat-shakes.png',
    webpImage: '/images/cat-shakes.webp',
    description: 'Specialty cold brews, iced lattes & gourmet shakes'
  }
];

export const TOP_PICKS: MenuItem[] = [
  {
    id: 'classic-veg-burger',
    name: 'Classic Veg Burger',
    category: 'burgers',
    description: 'Crispy patty, fresh veggies, special sauce',
    priceMock: '₹XX',
    priceNumeric: 179,
    image: '/images/dish-burger.png',
    webpImage: '/images/dish-burger.webp',
    isTopPick: true
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    category: 'pizza',
    description: 'Fresh tomato, mozzarella, basil',
    priceMock: '₹XX',
    priceNumeric: 299,
    image: '/images/dish-pizza.png',
    webpImage: '/images/dish-pizza.webp',
    isTopPick: true
  },
  {
    id: 'creamy-alfredo-pasta',
    name: 'Creamy Alfredo Pasta',
    category: 'pasta',
    description: 'Rich, cheesy, and flavorful',
    priceMock: '₹XX',
    priceNumeric: 249,
    image: '/images/dish-pasta.png',
    webpImage: '/images/dish-pasta.webp',
    isTopPick: true
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri Peri Fries',
    category: 'sides',
    description: 'Crispy fries with a spicy kick',
    priceMock: '₹XX',
    priceNumeric: 149,
    image: '/images/dish-fries.png',
    webpImage: '/images/dish-fries.webp',
    isTopPick: true
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    category: 'shakes-coffee',
    description: 'Smooth, rich, refreshing',
    priceMock: '₹XX',
    priceNumeric: 169,
    image: '/images/dish-coffee.png',
    webpImage: '/images/dish-coffee.webp',
    isTopPick: true
  }
];

export const EXTENDED_MENU: MenuItem[] = [
  ...TOP_PICKS,
  {
    id: 'smash-cheese-burger',
    name: 'Double Cheese Burger',
    category: 'burgers',
    description: 'Double melted cheddar, caramelized onions, house relish',
    priceMock: '₹XX',
    priceNumeric: 229,
    image: '/images/cat-burger.png',
    webpImage: '/images/cat-burger.webp'
  },
  {
    id: 'farmhouse-pizza',
    name: 'Farmhouse Special Pizza',
    category: 'pizza',
    description: 'Bell peppers, red onion, sweet corn, black olives & herb oil',
    priceMock: '₹XX',
    priceNumeric: 349,
    image: '/images/cat-pizza.png',
    webpImage: '/images/cat-pizza.webp'
  },
  {
    id: 'arrabbiata-pasta',
    name: 'Spicy Arrabbiata Pasta',
    category: 'pasta',
    description: 'Crushed garlic, spicy chili flakes, slow-cooked plum tomato sauce',
    priceMock: '₹XX',
    priceNumeric: 239,
    image: '/images/cat-pasta.png',
    webpImage: '/images/cat-pasta.webp'
  },
  {
    id: 'loaded-cheese-fries',
    name: 'Cheesy Garlic Fries',
    category: 'sides',
    description: 'Crisp fries smothered with warm cheese blend and herb butter',
    priceMock: '₹XX',
    priceNumeric: 189,
    image: '/images/cat-sides.png',
    webpImage: '/images/cat-sides.webp'
  },
  {
    id: 'hazelnut-frappe',
    name: 'Belgian Chocolate Shake',
    category: 'shakes-coffee',
    description: 'Creamy milk chocolate, dark cocoa drizzle, whipped crown',
    priceMock: '₹XX',
    priceNumeric: 219,
    image: '/images/cat-shakes.png',
    webpImage: '/images/cat-shakes.webp'
  }
];
