export interface MenuItem {
  id: string;
  name: string;
  price: number;
  desc: string;
  category: "Roti Bakar" | "Terang Bulan" | "Combos" | "Drinks";
  image: string;
  badges?: string[];
  options?: {
    sizes?: { name: string; price: number }[];
    addOns?: { name: string; price: number }[];
    toppings?: { name: string; price: number; freeLimit?: number }[];
  };
}

export interface CartItem {
  id: string;
  name: string;
  basePrice: number;
  quantity: number;
  selectedSize?: string;
  selectedAddOns?: string[];
  selectedToppings?: string[];
  totalPrice: number;
}

export const menuData: MenuItem[] = [
  // Roti Bakar
  {
    id: "rb-classic",
    name: "Classic Butter Sugar",
    price: 18000,
    desc: "Crisp toast, butter, sugar.",
    category: "Roti Bakar",
    image: "/images/roti-bakar-classic.webp",
    badges: ["Bestseller"],
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Cheese", price: 4000 },
        { name: "Extra Chocolate", price: 4000 },
        { name: "Extra Topping", price: 5000 },
      ],
      toppings: [
        { name: "Chocolate", price: 3000, freeLimit: 2 },
        { name: "Cheese", price: 3000, freeLimit: 2 },
        { name: "Peanut", price: 3000, freeLimit: 2 },
        { name: "Sesame", price: 3000, freeLimit: 2 },
        { name: "Condensed Milk", price: 3000, freeLimit: 2 },
        { name: "Banana", price: 3000, freeLimit: 2 },
      ],
    },
  },
  {
    id: "rb-choco-cheese",
    name: "Choco Cheese",
    price: 24000,
    desc: "Thick chocolate + grated cheese.",
    category: "Roti Bakar",
    image: "/images/roti-bakar-choco-cheese.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Cheese", price: 4000 },
        { name: "Extra Chocolate", price: 4000 },
        { name: "Extra Topping", price: 5000 },
      ],
    },
  },
  {
    id: "rb-keju-susu",
    name: "Keju Susu",
    price: 24000,
    desc: "Condensed milk & cheese.",
    category: "Roti Bakar",
    image: "/images/roti-bakar-classic.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Cheese", price: 4000 },
        { name: "Extra Chocolate", price: 4000 },
      ],
    },
  },
  {
    id: "rb-ovomaltine",
    name: "Ovomaltine Crunch",
    price: 30000,
    desc: "Malty chocolate spread, crunch.",
    category: "Roti Bakar",
    image: "/images/roti-bakar-ovomaltine.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Chocolate", price: 4000 },
        { name: "Extra Topping", price: 5000 },
      ],
    },
  },
  {
    id: "rb-nutella-banana",
    name: "Nutella Banana",
    price: 32000,
    desc: "Nutella, sliced banana.",
    category: "Roti Bakar",
    image: "/images/roti-bakar-classic.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Chocolate", price: 4000 },
        { name: "Extra Topping", price: 5000 },
      ],
    },
  },
  {
    id: "rb-tiramisu",
    name: "Tiramisu Cream",
    price: 26000,
    desc: "Coffee-cocoa cream, light dust.",
    category: "Roti Bakar",
    image: "/images/roti-bakar-classic.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
    },
  },

  // Terang Bulan
  {
    id: "tb-classic",
    name: "Classic Choco Sprinkles",
    price: 28000,
    desc: "Fluffy, buttery, choco meises.",
    category: "Terang Bulan",
    image: "/images/terang-bulan-classic.webp",
    badges: ["Signature"],
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Cheese", price: 4000 },
        { name: "Extra Chocolate", price: 4000 },
        { name: "Split Flavor", price: 3000 },
      ],
      toppings: [
        { name: "Chocolate", price: 3000, freeLimit: 2 },
        { name: "Cheese", price: 3000, freeLimit: 2 },
        { name: "Peanut", price: 3000, freeLimit: 2 },
        { name: "Sesame", price: 3000, freeLimit: 2 },
        { name: "Condensed Milk", price: 3000, freeLimit: 2 },
      ],
    },
  },
  {
    id: "tb-keju-coklat",
    name: "Keju Coklat",
    price: 32000,
    desc: "Cheese + chocolate overload.",
    category: "Terang Bulan",
    image: "/images/terang-bulan-keju-coklat.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Cheese", price: 4000 },
        { name: "Extra Chocolate", price: 4000 },
        { name: "Split Flavor", price: 3000 },
      ],
    },
  },
  {
    id: "tb-kacang-wijen",
    name: "Kacang Wijen",
    price: 28000,
    desc: "Roasted peanut & sesame.",
    category: "Terang Bulan",
    image: "/images/terang-bulan-classic.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [{ name: "Split Flavor", price: 3000 }],
    },
  },
  {
    id: "tb-pandan",
    name: "Pandan Keju Susu",
    price: 30000,
    desc: "Pandan batter, cheese & milk.",
    category: "Terang Bulan",
    image: "/images/terang-bulan-classic.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Cheese", price: 4000 },
        { name: "Split Flavor", price: 3000 },
      ],
    },
  },
  {
    id: "tb-nutella",
    name: "Nutella Almond",
    price: 36000,
    desc: "Nutella, toasted almond.",
    category: "Terang Bulan",
    image: "/images/terang-bulan-nutella.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Chocolate", price: 4000 },
        { name: "Split Flavor", price: 3000 },
      ],
    },
  },
  {
    id: "tb-milo",
    name: "Milo Dinosaur",
    price: 34000,
    desc: "Milo powder + extra drizzle.",
    category: "Terang Bulan",
    image: "/images/terang-bulan-classic.webp",
    options: {
      sizes: [
        { name: "Regular", price: 0 },
        { name: "Jumbo", price: 8000 },
      ],
      addOns: [
        { name: "Extra Topping", price: 5000 },
        { name: "Split Flavor", price: 3000 },
      ],
    },
  },

  // Combos
  {
    id: "combo-midnight",
    name: "Midnight Duo",
    price: 32000,
    desc: "Roti Bakar Choco Cheese + Iced Tea.",
    category: "Combos",
    image: "/images/combos.webp",
    badges: ["Value"],
  },
  {
    id: "combo-sweet",
    name: "Sweet Night Set",
    price: 38000,
    desc: "Terang Bulan Keju Coklat + Iced Lime Tea.",
    category: "Combos",
    image: "/images/combos.webp",
  },
  {
    id: "combo-family",
    name: "Family Box",
    price: 95000,
    desc: "2 Roti Bakar + 1 Terang Bulan + 3 Drinks.",
    category: "Combos",
    image: "/images/combos.webp",
    badges: ["Share"],
  },
  {
    id: "combo-student",
    name: "Student Deal",
    price: 25000,
    desc: "Roti Bakar Butter Sugar + Iced Tea.",
    category: "Combos",
    image: "/images/combos.webp",
  },

  // Drinks
  {
    id: "drink-lime-tea",
    name: "Iced Lime Tea",
    price: 12000,
    desc: "Tart & refreshing.",
    category: "Drinks",
    image: "/images/iced-tea.webp",
  },
  {
    id: "drink-teh-tarik",
    name: "Teh Tarik",
    price: 16000,
    desc: "Pulled milk tea.",
    category: "Drinks",
    image: "/images/iced-tea.webp",
  },
  {
    id: "drink-kopi-susu",
    name: "Es Kopi Susu",
    price: 22000,
    desc: "Sweet iced coffee.",
    category: "Drinks",
    image: "/images/kopi-susu.webp",
  },
  {
    id: "drink-water",
    name: "Mineral Water",
    price: 8000,
    desc: "Still water.",
    category: "Drinks",
    image: "/images/iced-tea.webp",
  },
];

export const categories = ["All", "Roti Bakar", "Terang Bulan", "Combos", "Drinks"] as const;

export const testimonials = [
  {
    id: 1,
    name: "Budi S.",
    rating: 5,
    text: "Best roti bakar in Kuta! The choco cheese is amazing.",
    location: "Denpasar",
  },
  {
    id: 2,
    name: "Sarah L.",
    rating: 5,
    text: "Late night craving satisfied. Always fresh and warm!",
    location: "Seminyak",
  },
  {
    id: 3,
    name: "Made K.",
    rating: 5,
    text: "Family box is perfect for sharing. Great value!",
    location: "Kuta",
  },
  {
    id: 4,
    name: "Lisa M.",
    rating: 5,
    text: "Terang bulan keju coklat is my favorite. So fluffy!",
    location: "Canggu",
  },
  {
    id: 5,
    name: "Wayan A.",
    rating: 5,
    text: "Quick service, halal ingredients. Highly recommended!",
    location: "Sanur",
  },
];
