import React from 'react';
import { Category } from '../../types';
interface CategorySidebarProps {
  categories: Category[];
}
export function CategorySidebar({
  categories
}: CategorySidebarProps) {
  return <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="font-bold text-lg mb-4">All Categories</h2>
      <ul className="space-y-2">
        {categories.map(category => <li key={category.id}>
            <button className="w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-50 transition-colors text-left">
              <span className="text-gray-700">{category.name}</span>
              <span className="text-gray-500 text-sm">{category.count}</span>
            </button>
          </li>)}
      </ul>
    </div>;
}