import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ShoppingCartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/WishlistPage.css';
const wishlistProducts = [{
  id: '1',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  originalPrice: 350000.0,
  image: 'AC1.jpg'
}, {
  id: '2',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  originalPrice: 350000.0,
  image: 'AC2.jpg'
}, {
  id: '3',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  originalPrice: 350000.0,
  image: 'AC3.jpg'
}, {
  id: '4',
  name: 'Samsung Air Conditioner - 24000 BTU Inverter AC - (Wi-Fi) (SMGAR60F240U)',
  category: 'Deals',
  price: 334990.0,
  originalPrice: 350000.0,
  image: 'AC4.jpg'
}];
const recommendedProducts = [...wishlistProducts];
export const WishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
    alert('Product added to cart!');
  };
  const handleMoveAllToCart = () => {
    console.log('Moving all items to cart');
    alert('All items moved to cart!');
    navigate('/cart');
  };
  const handleBuyNow = (productId: string) => {
    console.log('Buy now:', productId);
    navigate('/checkout');
  };
  return <div className="wishlist-page">
      <Header />

      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1>Wishlist</h1>
          <button className="move-all-button" onClick={handleMoveAllToCart}>
            <ShoppingCartIcon size={18} />
            Move all to Cart
          </button>
        </div>

        <div className="wishlist-grid">
          {wishlistProducts.map(product => <div key={product.id} className="wishlist-product-card">
              <div className="wishlist-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="wishlist-product-info">
                <p className="wishlist-product-category">{product.category}</p>
                <h3 className="wishlist-product-name">{product.name}</h3>
                <div className="wishlist-product-pricing">
                  <span className="wishlist-price">
                    Rs.{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && <span className="wishlist-original-price">
                      Rs.{product.originalPrice.toLocaleString()}
                    </span>}
                </div>
                <button className="wishlist-add-to-cart" onClick={() => handleAddToCart(product.id)}>
                  <ShoppingCartIcon size={18} />
                  Add to Cart
                </button>
              </div>
            </div>)}
        </div>

        <div className="recommendations-section">
          <div className="recommendations-header">
            <h2>Just for you</h2>
            <button className="see-all-link" onClick={() => navigate('/')}>
              See All
            </button>
          </div>

          <div className="recommendations-grid">
            {recommendedProducts.map(product => <div key={`rec-${product.id}`} className="recommendation-card">
                <div className="recommendation-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="recommendation-info">
                  <p className="recommendation-category">{product.category}</p>
                  <h3 className="recommendation-name">{product.name}</h3>
                  <div className="recommendation-pricing">
                    <span className="recommendation-price">
                      Rs.{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && <span className="recommendation-original-price">
                        Rs.{product.originalPrice.toLocaleString()}
                      </span>}
                  </div>
                  <div className="recommendation-actions">
                    <button className="buy-now-btn" onClick={() => handleBuyNow(product.id)}>
                      Buy Now
                    </button>
                    <button className="add-cart-icon" onClick={() => handleAddToCart(product.id)}>
                      <ShoppingCartIcon size={18} />
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};