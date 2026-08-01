export interface CategoryItem {
  name: string;
  link: string;
  number?: number;
}

export interface Category {
  id?: string;
  name: string;
  link?: string;
  number?: number;

  items?: CategoryItem[];   // ✅ FIXED
  children?: Category[];
}