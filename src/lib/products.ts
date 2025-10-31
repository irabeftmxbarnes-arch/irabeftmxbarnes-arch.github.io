import headphonesImg from "@/assets/products/headphones.jpg";
import smartwatchImg from "@/assets/products/smartwatch.jpg";
import backpackImg from "@/assets/products/backpack.jpg";
import coffeeMakerImg from "@/assets/products/coffee-maker.jpg";
import runningShoesImg from "@/assets/products/running-shoes.jpg";
import yogaMatImg from "@/assets/products/yoga-mat.jpg";
import deskLampImg from "@/assets/products/desk-lamp.jpg";
import bluetoothSpeakerImg from "@/assets/products/bluetooth-speaker.jpg";
import waterBottleImg from "@/assets/products/water-bottle.jpg";
import sunglassesImg from "@/assets/products/sunglasses.jpg";
import plantPotImg from "@/assets/products/plant-pot.jpg";
import phoneCaseImg from "@/assets/products/phone-case.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
  specifications: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    originalPrice: 99.99,
    category: "Electronics",
    image: headphonesImg,
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design perfect for music lovers and professionals.",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Comfortable over-ear design",
      "Built-in microphone",
      "Foldable and portable",
    ],
    specifications: {
      "Brand": "AudioPro",
      "Model": "AP-2000",
      "Color": "Black",
      "Weight": "250g",
      "Warranty": "2 years",
    },
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    originalPrice: 249.99,
    category: "Electronics",
    image: smartwatchImg,
    description: "Track your fitness goals and stay connected with this advanced smartwatch. Features heart rate monitoring, GPS tracking, and customizable watch faces with 7-day battery life.",
    rating: 4.7,
    reviews: 256,
    inStock: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "7-day battery life",
      "Water resistant (5ATM)",
      "Sleep tracking",
      "Multiple sport modes",
    ],
    specifications: {
      "Brand": "FitTech",
      "Model": "FT-300",
      "Display": "1.4 inch AMOLED",
      "Weight": "45g",
      "Warranty": "1 year",
    },
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    originalPrice: 69.99,
    category: "Fashion",
    image: backpackImg,
    description: "Stylish and functional laptop backpack with multiple compartments. Perfect for students and professionals. Water-resistant material protects your devices from rain.",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    features: [
      "Fits up to 15.6 inch laptop",
      "Water-resistant material",
      "Multiple compartments",
      "Padded shoulder straps",
      "USB charging port",
      "Anti-theft pocket",
    ],
    specifications: {
      "Brand": "UrbanCarry",
      "Material": "Polyester",
      "Color": "Dark Gray",
      "Capacity": "20L",
      "Warranty": "1 year",
    },
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    originalPrice: 119.99,
    category: "Home",
    image: coffeeMakerImg,
    description: "Brew the perfect cup every morning with this programmable coffee maker. Features automatic shut-off, 12-cup capacity, and reusable filter for eco-friendly brewing.",
    rating: 4.6,
    reviews: 174,
    inStock: true,
    features: [
      "12-cup capacity",
      "Programmable timer",
      "Automatic shut-off",
      "Reusable filter",
      "Keep warm function",
      "Anti-drip system",
    ],
    specifications: {
      "Brand": "BrewMaster",
      "Model": "BM-1200",
      "Power": "1000W",
      "Material": "Stainless Steel",
      "Warranty": "2 years",
    },
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 129.99,
    originalPrice: 159.99,
    category: "Sports",
    image: runningShoesImg,
    description: "Lightweight running shoes designed for maximum comfort and performance. Breathable mesh upper and responsive cushioning for your daily runs and training sessions.",
    rating: 4.8,
    reviews: 312,
    inStock: true,
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Lightweight design",
      "Durable rubber outsole",
      "Reflective details",
      "Wide toe box",
    ],
    specifications: {
      "Brand": "RunPro",
      "Type": "Road Running",
      "Weight": "280g per shoe",
      "Drop": "8mm",
      "Warranty": "6 months",
    },
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 34.99,
    originalPrice: 49.99,
    category: "Sports",
    image: yogaMatImg,
    description: "Premium non-slip yoga mat with extra cushioning for joint protection. Eco-friendly material and includes carrying strap for easy transportation to your studio or gym.",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    features: [
      "Non-slip surface",
      "6mm extra cushioning",
      "Eco-friendly material",
      "Easy to clean",
      "Includes carrying strap",
      "180cm x 60cm",
    ],
    specifications: {
      "Brand": "ZenFlow",
      "Material": "TPE",
      "Thickness": "6mm",
      "Color": "Purple",
      "Warranty": "1 year",
    },
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 45.99,
    originalPrice: 59.99,
    category: "Home",
    image: deskLampImg,
    description: "Modern LED desk lamp with adjustable brightness and color temperature. Perfect for studying, working, or reading with energy-efficient LED technology and USB charging port.",
    rating: 4.5,
    reviews: 98,
    inStock: true,
    features: [
      "Adjustable brightness (5 levels)",
      "3 color temperatures",
      "USB charging port",
      "Touch control",
      "Eye-caring LED",
      "Flexible arm",
    ],
    specifications: {
      "Brand": "LightUp",
      "Power": "12W LED",
      "Color": "White",
      "Height": "45cm",
      "Warranty": "1 year",
    },
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 59.99,
    originalPrice: 79.99,
    category: "Electronics",
    image: bluetoothSpeakerImg,
    description: "Portable Bluetooth speaker with 360-degree sound and deep bass. Waterproof design perfect for outdoor adventures with 24-hour battery life and built-in microphone.",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    features: [
      "360-degree sound",
      "24-hour battery life",
      "Waterproof (IPX7)",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Compact and portable",
    ],
    specifications: {
      "Brand": "SoundWave",
      "Model": "SW-360",
      "Power": "20W",
      "Weight": "450g",
      "Warranty": "1 year",
    },
  },
  {
    id: 9,
    name: "Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    category: "Sports",
    image: waterBottleImg,
    description: "Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof lid and wide mouth for easy filling and cleaning.",
    rating: 4.7,
    reviews: 287,
    inStock: true,
    features: [
      "Double-wall insulation",
      "24h cold / 12h hot",
      "Leak-proof lid",
      "BPA-free",
      "Wide mouth opening",
      "750ml capacity",
    ],
    specifications: {
      "Brand": "HydroFlex",
      "Material": "Stainless Steel",
      "Capacity": "750ml",
      "Color": "Blue",
      "Warranty": "Lifetime",
    },
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 89.99,
    originalPrice: 119.99,
    category: "Fashion",
    image: sunglassesImg,
    description: "Stylish polarized sunglasses with UV400 protection. Classic aviator design with lightweight frame and comes with protective case and cleaning cloth.",
    rating: 4.4,
    reviews: 145,
    inStock: true,
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Lightweight frame",
      "Anti-glare coating",
      "Includes case",
      "Scratch-resistant",
    ],
    specifications: {
      "Brand": "SunStyle",
      "Frame": "Metal Alloy",
      "Lens": "Polarized",
      "Color": "Black Gold",
      "Warranty": "1 year",
    },
  },
  {
    id: 11,
    name: "Plant Pot",
    price: 19.99,
    originalPrice: 29.99,
    category: "Home",
    image: plantPotImg,
    description: "Ceramic plant pot with drainage hole and bamboo saucer. Modern minimalist design perfect for indoor plants, succulents, and herbs. Adds natural beauty to any room.",
    rating: 4.3,
    reviews: 67,
    inStock: true,
    features: [
      "Drainage hole included",
      "Bamboo saucer",
      "Ceramic material",
      "Modern design",
      "Multiple sizes available",
      "Indoor use",
    ],
    specifications: {
      "Brand": "GreenHome",
      "Material": "Ceramic",
      "Size": "15cm diameter",
      "Color": "White",
      "Warranty": "6 months",
    },
  },
  {
    id: 12,
    name: "Phone Case",
    price: 29.99,
    originalPrice: 39.99,
    category: "Electronics",
    image: phoneCaseImg,
    description: "Protective phone case with military-grade drop protection. Slim design with raised edges to protect screen and camera. Compatible with wireless charging.",
    rating: 4.5,
    reviews: 189,
    inStock: true,
    features: [
      "Military-grade protection",
      "Slim design",
      "Raised edges",
      "Wireless charging compatible",
      "Easy grip texture",
      "Precise cutouts",
    ],
    specifications: {
      "Brand": "ShieldCase",
      "Material": "TPU + PC",
      "Color": "Clear Black",
      "Compatibility": "iPhone 13/14",
      "Warranty": "1 year",
    },
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category.toLowerCase() === 'all') return products;
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};
