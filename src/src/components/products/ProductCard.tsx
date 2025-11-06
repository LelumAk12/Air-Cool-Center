import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';
interface ProductCardProps {
  product: Product;
}
export function ProductCard({
  product
}: ProductCardProps) {
  return <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
      <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
      </div>

      <div className="space-y-2">
        <p className="text-xs text-gray-500">{product.category}</p>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          {product.originalPrice && <span className="text-sm text-gray-400 line-through">
              Rs.{product.originalPrice.toLocaleString()}
            </span>}
          <span className="text-base font-bold text-blue-500">
            Rs.{product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="primary" size="sm" className="flex-1">
            Buy Now
          </Button>
          <button className="p-2 border-2 border-gray-300 rounded hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <ShoppingCartIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>;
}