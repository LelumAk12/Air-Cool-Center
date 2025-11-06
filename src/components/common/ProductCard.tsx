import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import { Product } from '../../types';
import '../../styles/components/ProductCard.css';
interface ProductCardProps {
  product: Product;
  onBuyNow?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onBuyNow,
  onAddToCart
}) => {
  return <div className="product-card">
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
        <div className="product-actions">
          <button className="buy-button" onClick={() => onBuyNow?.(product)}>
            Buy Now
          </button>
          <button className="cart-button" onClick={() => onAddToCart?.(product)}>
            <ShoppingCartIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
};