import React from 'react';
interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}
export function Navigation({
  currentPage,
  onNavigate
}: NavigationProps) {
  const navItems = [{
    name: 'Home',
    page: 'home'
  }, {
    name: 'Services',
    page: 'services'
  }, {
    name: 'Sale',
    page: 'sale'
  }, {
    name: 'About Us',
    page: 'about'
  }, {
    name: 'Contact Us',
    page: 'contact'
  }];
  return <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 py-4">
            {navItems.map(item => <button key={item.page} onClick={() => onNavigate(item.page)} className={`font-medium transition-colors ${currentPage === item.page ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'}`}>
                {item.name}
              </button>)}
          </div>
          <button className="bg-gray-900 text-white px-6 py-2 rounded font-medium hover:bg-gray-800">
            Sale! 50% Off
          </button>
        </div>
      </div>
    </nav>;
}