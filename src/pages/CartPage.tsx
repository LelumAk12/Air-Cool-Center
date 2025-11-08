import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { XIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/pages/CartPage.css';
export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity
  } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCheckout = () => {
    navigate('/checkout');
  };
  if (cartItems.length === 0) {
    return <div className="cart-page">
        <Header />
        <div className="cart-container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <Link to="/" className="return-button">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>;
  }
  return <div className="cart-page">
      <Header />

      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => <tr key={item.id}>
                <td>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    <XIcon size={18} />
                  </button>
                </td>
                <td>
                  <div className="cart-product-info">
                    <img src={item.image} alt={item.name} className="cart-product-image" />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>Rs.{item.price.toLocaleString()}</td>
                <td>
                  <div className="quantity-control">
                    <input type="number" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value) || 1)} min="1" className="quantity-input" />
                  </div>
                </td>
                <td>Rs.{(item.price * item.quantity).toLocaleString()}</td>
              </tr>)}
          </tbody>
        </table>

        <div className="cart-actions">
          <Link to="/" className="return-button">
            Return To Shop
          </Link>
          <button className="update-button">Update Cart</button>
        </div>

        <div className="cart-total-section-full">
          <div className="cart-total-box-full">
            <h3>Cart Total</h3>
            <div className="total-row">
              <span>Subtotal:</span>
              <span>Rs.{subtotal.toLocaleString()}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row total-final">
              <span>Total:</span>
              <span>Rs.{subtotal.toLocaleString()}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};