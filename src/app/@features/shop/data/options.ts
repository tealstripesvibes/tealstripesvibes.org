import { IShoppingCartItem } from "@features/shop/components/Snipcart";

interface IShopItem {
  features?: string[];
}

export const options = [
  {
    image: "https://spwashi.com/images/default.webp",
    id: "2024-03-character-seed-simple",
    url: "https://shop.spwashi.com/products/2024/03/character-seed/simple.json",
    price: 20.0,
    name: "Character Seed",
    maxQuantity: null,
    quantity: 1,
    features: ["Name", "Quest"],
  },
  {
    image: "https://spwashi.com/images/default.webp",
    id: "simple-hello",
    url: "https://shop.spwashi.com/products/simple-hello/classic.json",
    price: 13.0,
    name: "Getting Started",
    features: ["Domain Setup", "Basic Site Audit"],
  },
  {
    image: "https://spwashi.com/images/default.webp",
    id: "2024-03-hosting-static-standard",
    url: "https://shop.spwashi.com/products/2024/03/hosting/static/standard.json",
    price: 5.0,
    name: "Static Hosting",
    features: ["Static Website Hosting"],
  },
  {
    image: "https://spwashi.com/images/default.webp",
    id: "2024-03-hosting-dynamic-standard",
    url: "https://shop.spwashi.com/products/2024/03/hosting/dynamic/standard.json",
    price: 169.0,
    name: "Dynamic Hosting",
    features: ["Dynamic Website Hosting"],
  },
  {
    image: "https://spwashi.com/images/default.webp",
    id: "2024-03-hosting-responsive-standard",
    url: "https://shop.spwashi.com/products/2024/03/hosting/responsive/standard.json",
    price: 91.0,
    name: "Responsive Hosting",
    features: ["Responsive Website Hosting"],
  },
] as (IShoppingCartItem & IShopItem)[];
