import React, { useMemo, useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/common/ProductCard';
import { Product, Category } from '../types';
import { useSearch } from '../context/SearchContext';
import { GridIcon, ListIcon } from 'lucide-react';
import '../styles/pages/HomePage.css';
const categories: Category[] = [{
  id: 'all',
  name: 'All Categories',
  count: 96
}, {
  id: '1',
  name: 'Category 1',
  count: 45
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
  count: 12
}, {
  id: '5',
  name: 'Category 5',
  count: 18
}];
const allProducts: Product[] = [{
  id: '1',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Category 1',
  price: 334990.0,
  originalPrice: 350000.0,
  image: '/AC1.jpg'
}, {
  id: '2',
  name: 'LG Dual Inverter Air Conditioner - 18000 BTU with Smart ThinQ',
  category: 'Category 1',
  price: 289990.0,
  originalPrice: 310000.0,
  image: '/AC2.jpg'
}, {
  id: '3',
  name: 'Daikin Split AC - 12000 BTU Energy Efficient Cooling System',
  category: 'Category 1',
  price: 245990.0,
  image: '/AC3.jpg'
}, {
  id: '4',
  name: 'Mitsubishi Electric AC - 18000 BTU with Plasma Quad Filter',
  category: 'Category 1',
  price: 298990.0,
  image: '/AC4.jpg'
}, {
  id: '5',
  name: 'Samsung Side-by-Side Refrigerator - 700L with Twin Cooling Plus',
  category: 'Category 2',
  price: 425990.0,
  originalPrice: 450000.0,
  image: '/AC1.jpg'
}, {
  id: '6',
  name: 'LG InstaView Door-in-Door Refrigerator - 600L Smart Cooling',
  category: 'Category 2',
  price: 389990.0,
  image: '/AC2.jpg'
}, {
  id: '7',
  name: 'Panasonic Air Curtain - 1.2m Commercial Grade with Remote',
  category: 'Category 3',
  price: 125990.0,
  image: '/AC3.jpg'
}, {
  id: '8',
  name: 'Hikvision 8CH CCTV System - 4K Ultra HD with Night Vision',
  category: 'Category 4',
  price: 185990.0,
  originalPrice: 210000.0,
  image: '/AC4.jpg'
}, {
  id: '9',
  name: 'Panasonic Window AC - 12000 BTU Energy Star Rated',
  category: 'Category 1',
  price: 189990.0,
  image: '/AC1.jpg'
}, {
  id: '10',
  name: 'Whirlpool French Door Refrigerator - 550L with Ice Maker',
  category: 'Category 2',
  price: 359990.0,
  image: '/AC2.jpg'
}, {
  id: '11',
  name: 'Carrier Inverter AC - 18000 BTU with Turbo Cooling',
  category: 'Category 1',
  price: 275990.0,
  originalPrice: 295000.0,
  image: '/AC3.jpg'
}, {
  id: '12',
  name: 'Dahua 16CH CCTV System - 1080p HD with Mobile App',
  category: 'Category 4',
  price: 225990.0,
  image: '/AC4.jpg'
}];
export const HomePage: React.FC = () => {
  const [sortBy, setSortBy] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayCount, setDisplayCount] = useState(8);
  const {
    searchQuery
  } = useSearch();
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === categories.find(c => c.id === selectedCategory)?.name);
    }
    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    // Sort products
    let sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);
  const displayedProducts = filteredAndSortedProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredAndSortedProducts.length;
  const handleSeeMore = () => {
    setDisplayCount(prev => prev + 8);
  };
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setDisplayCount(8);
  };
  return <div className="home-page">
      <Header />
      <div className="hero-section" style={{
      backgroundImage: `url(/banner.jpg)`,
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
              <button className={`view-button ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} aria-label="Grid view">
                <GridIcon size={20} />
              </button>
              <button className={`view-button ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} aria-label="List view">
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

          <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
            {displayedProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>

          {displayedProducts.length === 0 && <div className="no-products">
              <p>No products found matching your search.</p>
            </div>}

          {hasMore && <div className="see-more-container">
              <button className="see-more-button" onClick={handleSeeMore}>
                See More...
              </button>
            </div>}
        </section>
      </div>
      <Footer />
    </div>;
};