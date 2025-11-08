import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/common/ProductCard';
import { Product } from '../types';
import { GridIcon, ListIcon } from 'lucide-react';
import '../styles/pages/SalePage.css';
const saleProducts: Product[] = [{
  id: '1',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 280000.0,
  originalPrice: 350000.0,
  image: 'AC1.jpg'
}, {
  id: '2',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 267992.0,
  originalPrice: 334990.0,
  image: 'AC2.jpg'
}, {
  id: '3',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 267992.0,
  originalPrice: 334990.0,
  image: 'AC3.jpg'
}, {
  id: '4',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 267992.0,
  originalPrice: 334990.0,
  image: 'AC4.jpg'
}];
const categories = [{
  name: 'Category 1',
  count: 9
}, {
  name: 'Category 2',
  count: 33
}, {
  name: 'Category 3',
  count: 48
}, {
  name: 'Category 4',
  count: 5
}, {
  name: 'Category 5',
  count: 88
}];
export const SalePage: React.FC = () => {
  const [sortBy, setSortBy] = useState('default');
  const allProducts = [...saleProducts, ...saleProducts, ...saleProducts];
  return <div className="sale-page">
      <Header />

      <div className="flash-sales-hero-new">
        <div className="flash-sales-content">
          <h1>Flash Sales</h1>
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-label">Days</div>
              <div className="countdown-value">03</div>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <div className="countdown-label">Hours</div>
              <div className="countdown-value">23</div>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <div className="countdown-label">Minutes</div>
              <div className="countdown-value">19</div>
            </div>
            <span className="countdown-separator">:</span>
            <div className="countdown-item">
              <div className="countdown-label">Seconds</div>
              <div className="countdown-value">56</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sale-content">
        <aside className="sale-sidebar">
          <div className="price-range-section">
            <h3>Price Range</h3>
            <button className="see-more-btn">See more</button>
          </div>

          <div className="categories-section">
            <h3>All Categories</h3>
            <ul className="category-list">
              {categories.map((category, index) => <li key={index} className="category-item">
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </li>)}
            </ul>
          </div>
        </aside>

        <section className="sale-products-section">
          <div className="products-header">
            <div className="view-toggle">
              <button className="view-button active" aria-label="Grid view">
                <GridIcon size={20} />
              </button>
              <button className="view-button" aria-label="List view">
                <ListIcon size={20} />
              </button>
            </div>
            <select className="sorting-dropdown" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="default">Default sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="products-grid">
            {allProducts.map((product, index) => <div key={`${product.id}-${index}`} className="sale-product-wrapper">
                <div className="sale-badge-overlay">Sale 20%</div>
                <ProductCard product={product} />
              </div>)}
          </div>

          <div className="see-more-container">
            <button className="see-more-button">See More...</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>;
};