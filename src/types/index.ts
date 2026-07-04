export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  industries: string[];
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  image: string;
  span?: "tall" | "wide" | "normal";
}

export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface ProductCategoryGroup {
  category: string;
  products: { name: string; slug: string }[];
}
