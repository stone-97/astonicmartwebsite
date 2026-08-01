export interface ProductVariation {
  size?: string;
  color?: string;
  model?: string;
  inlet?: string;
  capacity?: string;
  price: number;
  inStock: boolean;
  teeth?: string;
  power?: string;
  description?: string;
  quantity?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  parentCategory?: string;
  childCategory?: string;
  discountPrice?: number;  

  images: string[];
  group?: string;
  videos?: string[]; 
 
  // 👇 For simple products (clothes, shoes)
  sizes?: (number | string)[];
  colors?: string[];

  // 👇 For complex products (ladders, machines, etc.)
  variations?: ProductVariation[];

  // 👇 Keep this (good for generators, pumps, etc.)
  powerOptions?: {
    power: string;
    inStock: boolean;
  }[];

  description: string;
  specification: string;
  features: string;
  accessories?: string;
 capacity?: string;
  jumiaLink?: string;
  kongaLink?: string;
  inlet?: string;
  model?: string;
  flowRate?: string;
  pressure?: string;
  power?: string;

  // 👇 Pricing extras
  oldPrice?: number;   // for discounts
  inStock?: boolean;

  // 👇 UI control
  showSimilar?: boolean;
}   