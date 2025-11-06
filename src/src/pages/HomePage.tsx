import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { CategorySidebar } from '../components/products/CategorySidebar';
import { ProductGrid } from '../components/products/ProductGrid';
import { Category, Product } from '../types';
const categories: Category[] = [{
  id: '1',
  name: 'Category 1',
  count: 10
}, {
  id: '2',
  name: 'Category 2',
  count: 33
}, {
  id: '3',
  name: 'Category 3',
  count: 8
}, {
  id: '4',
  name: 'Category 4',
  count: 45
}, {
  id: '5',
  name: 'Category 5',
  count: 2
}, {
  id: '6',
  name: 'Category 6',
  count: 88
}];
const products: Product[] = Array.from({
  length: 12
}, (_, i) => ({
  id: `product-${i + 1}`,
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240J1)',
  category: 'Deals',
  price: 334990.0,
  originalPrice: 369000.0,
  image: i % 4 === 0 ? 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop' : i % 4 === 1 ? 'https://images.unsplash.com/photo-1631545806609-47c7c0b9c7c5?w=400&h=300&fit=crop' : i % 4 === 2 ? 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop' : 'https://images.unsplash.com/photo-1631545806609-47c7c0b9c7c5?w=400&h=300&fit=crop'
}));
export function HomePage() {
  return <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Features Bar */}
      <div className="bg-white border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">📦</span>
              </div>
              <span className="text-sm text-gray-700">
                Free Cost express delivery with tracking
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">🛡️</span>
              </div>
              <span className="text-sm text-gray-700">
                Equipment loss & damage insurance included
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">💳</span>
              </div>
              <span className="text-sm text-gray-700">
                Installment plans with zero overpayments
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-[250px_1fr] gap-8">
          <CategorySidebar categories={categories} />
          <ProductGrid products={products} />
        </div>
      </div>

      <NewsletterSection />
    </div>;
}