import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/common/ProductCard';
import { TruckIcon, ShieldCheckIcon, WrenchIcon, HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { Product } from '../types';
import '../styles/pages/ProductDetailPage.css';
const productImages = ['AC1.jpg', 'AC2.jpg', 'AC3.jpg', 'AC4.jpg'];
const similarProducts: Product[] = [{
  id: '1',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: 'AC1.jpg'
}, {
  id: '2',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: 'AC2.jpg'
}, {
  id: '3',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: 'AC3.jpg'
}, {
  id: '4',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  image: 'AC4.jpg'
}];
export const ProductDetailPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [selectedColor, setSelectedColor] = useState('black');
  const [activeTab, setActiveTab] = useState('specification');
  return <div className="product-detail-page">
      <Header />
      <div className="product-detail-container">
        <div className="product-main">
          <div className="product-gallery">
            <div className="thumbnail-list-vertical">
              {productImages.map((image, index) => <div key={index} className={`thumbnail ${selectedImage === index ? 'active' : ''}`} onClick={() => setSelectedImage(index)}>
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>)}
            </div>
            <div className="main-image-container">
              <img src={productImages[selectedImage]} alt="Product" className="main-image" />
            </div>
          </div>

          <div className="product-details-new">
            <div className="product-header">
              <h1>
                Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi)
                (SMGAR50F24D1J)
              </h1>
              <button className="wishlist-icon" aria-label="Add to wishlist">
                <HeartIcon size={24} />
              </button>
            </div>

            <div className="product-rating">
              <div className="stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star half">★</span>
              </div>
              <span className="review-count">(150 Reviews)</span>
              <span className="stock-badge">In Stock</span>
            </div>

            <p className="product-description-text">
              Experience powerful and energy-efficient cooling with Samsung's
              24000 BTU inverter air conditioner. Equipped with Wi-Fi control,
              fast cooling mode, and smart inverter technology, it ensures
              comfort, quiet operation, and lower electricity bills—all from
              your phone.
            </p>

            <div className="color-selection">
              <label>Colours:</label>
              <div className="color-options">
                <div className={`color-circle ${selectedColor === 'black' ? 'active' : ''}`} style={{
                background: '#000'
              }} onClick={() => setSelectedColor('black')} />
                <div className={`color-circle ${selectedColor === 'white' ? 'active' : ''}`} style={{
                background: '#fff',
                border: '2px solid #e5e5e5'
              }} onClick={() => setSelectedColor('white')} />
              </div>
            </div>

            <div className="price-section-new">
              <span className="current-price-large">Rs.334,990.00</span>
              <span className="original-price-strike">Rs.390,990.00</span>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector-new">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  −
                </button>
                <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="qty-input" />
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>

              <button className="buy-now-btn-new">Buy Now</button>
              <button className="cart-icon-btn">
                <ShoppingCartIcon size={20} />
              </button>
            </div>

            <div className="delivery-info-boxes">
              <div className="info-box">
                <TruckIcon size={24} className="info-icon" />
                <div className="info-text">
                  <strong>Free Delivery</strong>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="info-box">
                <ShieldCheckIcon size={24} className="info-icon" />
                <div className="info-text">
                  <strong>Return Delivery</strong>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
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