import React from 'react';
import { LayoutGridIcon, ListIcon } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
interface ProductGridProps {
  products: Product[];
}
export function ProductGrid({
  products
}: ProductGridProps) {
  return <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
            <LayoutGridIcon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <ListIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Default sorting</span>
          <select className="px-3 py-1 border border-gray-300 rounded text-sm">
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>

      <div className="text-center mt-8">
        <button className="text-gray-600 hover:text-blue-500 font-medium">
          See More...
        </button>
      </div>
    </div>;
}