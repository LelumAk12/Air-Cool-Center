import React from 'react';
import { CategorySidebar } from '../components/products/CategorySidebar';
import { ProductGrid } from '../components/products/ProductGrid';
import { Product, Category } from '../types';
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
  originalPrice: i % 2 === 0 ? 350000.0 : undefined,
  image: i % 4 === 0 ? "/Screenshot_2025-11-06_092627.png" : i % 4 === 1 ? "/Screenshot_2025-11-06_093219.png" : i % 4 === 2 ? "/Screenshot_2025-11-06_093612.png" : "/Screenshot_2025-11-06_093640.png"
}));
export function ProductsPage() {
  return <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img src="/Screenshot_2025-11-06_092627.png" alt="Air conditioning technician" className="w-full h-auto" />
            </div>
            <div className="space-y-6">
              <h1 className="text-6xl font-bold">
                <span className="text-gray-900">Kandy</span>
                <br />
                <span className="text-blue-400">Air Cool Centre</span>
              </h1>
              <p className="text-gray-700 text-lg">
                Providing all types of air conditioning installation and repair,
                Refrigerator repair, CCTV installation, Air curtain
                installation, all electrical equipment repair and brand new
                items supply (AC units, CCTV, Air curtains & Refrigerators).
              </p>
              <div className="bg-blue-400 text-white px-8 py-3 rounded-full inline-block text-lg font-medium">
                CONTACT - 071 608 4522 / 078 633 7873
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-[250px_1fr] gap-8">
          <CategorySidebar categories={categories} />
          <ProductGrid products={products} />
        </div>
      </div>
    </div>;
}