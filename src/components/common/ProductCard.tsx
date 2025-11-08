import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import '../../styles/components/ProductCard.css';
interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const navigate = useNavigate();
  const {
    addToCart
  } = useCart();
  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    navigate('/checkout');
  };
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert('Product added to cart!');
  };
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };
  return <div className="product-card" onClick={handleCardClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-pricing">
          {product.originalPrice && <span className="product-original-price">
              Rs.{product.originalPrice.toLocaleString()}
            </span>}
          <span className="product-price">
            Rs.{product.price.toLocaleString()}
          </span>
        </div>
        <div className="product-actions" onClick={e => e.stopPropagation()}>
          <button className="buy-button" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="cart-button" onClick={handleAddToCart}>
            <ShoppingCartIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
};