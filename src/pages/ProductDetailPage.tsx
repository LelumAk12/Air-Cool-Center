import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/common/ProductCard';
import { TruckIcon, ShieldCheckIcon, WrenchIcon, HeartIcon } from 'lucide-react';
import { Product } from '../types';
import '../styles/pages/ProductDetailPage.css';
const productImages = ['/AC1.jpg', '/AC2.jpg', '/AC3.jpg', '/AC4.jpg'];
const similarProducts: Product[] = [{
  id: '1',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
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
export const ProductDetailPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specification');
  return <div className="product-detail-page">
      <Header />
      <div className="product-detail-container">
        <div className="product-main">
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={productImages[selectedImage]} alt="Product" className="main-image" />
            </div>
            <div className="thumbnail-list">
              {productImages.map((image, index) => <div key={index} className={`thumbnail ${selectedImage === index ? 'active' : ''}`} onClick={() => setSelectedImage(index)}>
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>)}
            </div>
          </div>
          <div className="product-details">
            <div className="flex items-start justify-between">
              <h1>
                Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi)
                (SMGAR60F240U)
              </h1>
              <button className="p-2" aria-label="Add to favorites">
                <HeartIcon size={24} />
              </button>
            </div>
            <p className="product-description">
              Samsung's flagship wall-mount allroute series, with reversible
              heat pump for efficient climate control. Available in outdoor,
              indoor models for all-season comfort. Features Wi-Fi connectivity,
              allowing remote control via smartphone app for ultimate
              convenience.
            </p>
            <div>
              <p className="text-sm font-semibold mb-2">Colours:</p>
              <div className="color-selector">
                <div className="color-option active" style={{
                background: '#000'
              }} />
                <div className="color-option" style={{
                background: '#fff',
                border: '2px solid #e5e5e5'
              }} />
              </div>
            </div>
            <div className="price-section">
              <span className="current-price">Rs. 334,990.00</span>
            </div>
            <div className="quantity-selector">
              <button className="quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <div className="action-buttons">
              <button className="add-to-cart-button">Add to Cart</button>
              <button className="buy-now-button">Buy Now</button>
            </div>
            <div className="product-features">
              <div className="feature-row">
                <TruckIcon size={20} />
                <span>Free Delivery</span>
              </div>
              <div className="feature-row">
                <ShieldCheckIcon size={20} />
                <span>Return & Delivery within 30 days</span>
              </div>
              <div className="feature-row">
                <WrenchIcon size={20} />
                <span>12 month warranty</span>
              </div>
            </div>
          </div>
        </div>
        <div className="specifications-section">
          <div className="tabs">
            <button className={`tab ${activeTab === 'specification' ? 'active' : ''}`} onClick={() => setActiveTab('specification')}>
              Specification
            </button>
            <button className={`tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>
              Details
            </button>
          </div>
          {activeTab === 'specification' && <div className="specifications-grid">
              <div className="spec-item">
                <span className="spec-label">Power Supply</span>
                <span className="spec-value">220~240 V, 50/60Hz</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Noise</span>
                <span className="spec-value">
                  ~42~46 dB(A) Indoor, ~49 dB(A) Outdoor
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Airflow Up to</span>
                <span className="spec-value">~17m/min</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Refrigerant</span>
                <span className="spec-value">R-410A, ~1.4 kg</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Operating Range</span>
                <span className="spec-value">18°C to 40°C</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Piping Max Length</span>
                <span className="spec-value">30 m (up to 15 m elevation)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Dimensions (Indoor)</span>
                <span className="spec-value">
                  ~1,115 x 290 x 375 mm, ~11~13 kg weight
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Warranty</span>
                <span className="spec-value">1 year</span>
              </div>
            </div>}
        </div>
        <div className="similar-products-section">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
        <div className="features-section">
          <div className="feature-item">
            <TruckIcon className="feature-icon" size={32} />
            <span className="feature-text">
              Free! Cost express-delivery with tracking
            </span>
          </div>
          <div className="feature-item">
            <ShieldCheckIcon className="feature-icon" size={32} />
            <span className="feature-text">
              Equipment loss & damage insurance included
            </span>
          </div>
          <div className="feature-item">
            <WrenchIcon className="feature-icon" size={32} />
            <span className="feature-text">
              Installment plans with zero overpayments
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};