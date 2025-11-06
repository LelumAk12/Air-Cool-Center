import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/common/ProductCard';
import { Product, Category } from '../types';
import { GridIcon, ListIcon } from 'lucide-react';
import '../styles/pages/HomePage.css';
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
const products: Product[] = [{
  id: '1',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  originalPrice: 350000.0,
  image: '/AC1.jpg'
}, {
  id: '2',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: '/AC2.jpg'
}, {
  id: '3',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: '/AC3.jpg'
}, {
  id: '4',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: '/AC4.jpg'
}];
export const HomePage: React.FC = () => {
  return <div className="home-page">
      <Header />
      <div className="hero-section" style={{
      backgroundImage: `url('/banner.jpg')`
    }} />
      <div className="main-content">
        <aside className="categories-sidebar">
          <h2 className="categories-title">All Categories</h2>
          <ul className="category-list">
            {categories.map(category => <li key={category.id} className="category-item">
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </li>)}
          </ul>
        </aside>
        <section className="products-section">
          <div className="products-header">
            <div className="view-toggle">
              <button className="view-button" aria-label="Grid view">
                <GridIcon size={20} />
              </button>
              <button className="view-button" aria-label="List view">
                <ListIcon size={20} />
              </button>
            </div>
            <span className="text-sm text-gray-600">Default sorting</span>
          </div>
          <div className="products-grid">
            {[...products, ...products, ...products].map((product, index) => <ProductCard key={`${product.id}-${index}`} product={product} />)}
          </div>
          <div className="see-more-container">
            <button className="see-more-button">See More...</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>;
};