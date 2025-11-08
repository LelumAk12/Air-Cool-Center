import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/common/ProductCard';
import { Product, Category } from '../types';
import { GridIcon, ListIcon } from 'lucide-react';
import '../styles/pages/HomePage.css';
const categories: Category[] = [{
  id: 'all',
  name: 'All Categories',
  count: 96
}, {
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
  category: 'Category 1',
  price: 334990.0,
  originalPrice: 350000.0,
  image: '/AC1.jpg'
}, {
  id: '2',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Category 2',
  price: 334990.0,
  image: '/AC2.jpg'
}, {
  id: '3',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Category 1',
  price: 334990.0,
  image: '/AC3.jpg'
}, {
  id: '4',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Category 3',
  price: 334990.0,
  image: '/AC4.jpg'
}];
export const HomePage: React.FC = () => {
  const [sortBy, setSortBy] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allProducts = [...products, ...products, ...products];
  const filteredProducts = selectedCategory === 'all' ? allProducts : allProducts.filter(p => p.category === categories.find(c => c.id === selectedCategory)?.name);
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    let sorted = [...filteredProducts];
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted = filteredProducts;
    }
    setSortedProducts(sorted);
  };
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const filtered = categoryId === 'all' ? allProducts : allProducts.filter(p => p.category === categories.find(c => c.id === categoryId)?.name);
    setSortedProducts(filtered);
  };
  return <div className="home-page">
      <Header />
      <div className="hero-section" style={{
      backgroundImage: `url(/banner.jpg)`
    }} />
      <div className="main-content">
        <aside className="categories-sidebar">
          <h2 className="categories-title">All Categories</h2>
          <ul className="category-list">
            {categories.map(category => <li key={category.id} className={`category-item ${selectedCategory === category.id ? 'active' : ''}`} onClick={() => handleCategoryClick(category.id)}>
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
            <select className="sorting-dropdown" value={sortBy} onChange={handleSortChange}>
              <option value="default">Default sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="products-grid">
            {sortedProducts.map((product, index) => <ProductCard key={`${product.id}-${index}`} product={product} />)}
          </div>

          <div className="see-more-container">
            <button className="see-more-button">See More...</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>;
};