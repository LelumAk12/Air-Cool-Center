import React from 'react';
import { SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
              <div className="text-white font-bold text-xs">
                <div>KANDY</div>
                <div>AIR</div>
              </div>
            </div>
            <div className="text-blue-500 font-bold">
              <div className="text-sm">COOL CENTRE</div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="absolute right-0 top-0 h-full px-3 bg-blue-500 text-white rounded-r hover:bg-blue-600">
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-500">
              <UserIcon className="w-5 h-5" />
              <span className="text-xs">Sign In</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-500">
              <HeartIcon className="w-5 h-5" />
              <span className="text-xs">Favorite</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-blue-500">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="text-xs">My Cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>;
}