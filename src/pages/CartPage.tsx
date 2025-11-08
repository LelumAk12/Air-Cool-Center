import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/pages/CartPage.css';
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([{
    id: '1',
    name: 'Samsung Air Conditioner',
    price: 650,
    quantity: 1
  }, {
    id: '2',
    name: 'Samsung Air Conditioner',
    price: 550,
    quantity: 2
  }]);
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCheckout = () => {
    navigate('/checkout');
  };
  return <div className="cart-page">
      <Header />

      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <div className="quantity-control">
                    <input type="number" value={item.quantity} onChange={e => updateQuantity(item.id, parseInt(e.target.value) || 1)} min="1" className="quantity-input" />
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>)}
          </tbody>
        </table>

        <div className="cart-actions">
          <Link to="/" className="return-button">
            Return To Shop
          </Link>
          <button className="update-button">Update Cart</button>
        </div>

        <div className="cart-total-section">
          <div className="cart-total-box">
            <h3>Cart Total</h3>
            <div className="total-row">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row total-final">
              <span>Total:</span>
              <span>${subtotal}</span>
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