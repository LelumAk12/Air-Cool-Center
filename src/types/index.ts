export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description?: string;
  specifications?: Record<string, string>;
}
export interface Category {
  id: string;
  name: string;
  count: number;
}
export interface Service {
  title: string;
  description: string;
  items: string[];
}
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  text: string;
}