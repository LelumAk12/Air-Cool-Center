import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/CheckoutPage.css';
export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phone: '',
    email: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [couponCode, setCouponCode] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order placed:', {
      ...formData,
      paymentMethod,
      couponCode
    });
    alert('Order placed successfully!');
    navigate('/');
  };
  const applyCoupon = () => {
    console.log('Applying coupon:', couponCode);
    alert('Coupon applied!');
  };
  return <div className="checkout-page">
      <Header />

      <div className="checkout-container">
        <div className="billing-section">
          <h1>Billing Details</h1>
          <form onSubmit={handleSubmit} className="billing-form">
            <input type="text" name="firstName" placeholder="First Name*" className="form-field" value={formData.firstName} onChange={handleChange} required />

            <input type="text" name="company" placeholder="Company Name" className="form-field" value={formData.company} onChange={handleChange} />

            <input type="text" name="streetAddress" placeholder="Street Address*" className="form-field" value={formData.streetAddress} onChange={handleChange} required />

            <input type="text" name="apartment" placeholder="Apartment, floor, etc. (optional)" className="form-field" value={formData.apartment} onChange={handleChange} />

            <input type="text" name="townCity" placeholder="Town/City*" className="form-field" value={formData.townCity} onChange={handleChange} required />

            <input type="tel" name="phone" placeholder="Phone Number*" className="form-field" value={formData.phone} onChange={handleChange} required />

            <input type="email" name="email" placeholder="Email Address*" className="form-field" value={formData.email} onChange={handleChange} required />

            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Save this information for faster check-out next time</span>
            </label>
          </form>
        </div>

        <div className="order-summary-section">
          <div className="order-items">
            <div className="order-item">
              <span>Samsung Air Conditioner</span>
              <span>$650</span>
            </div>
            <div className="order-item">
              <span>Samsung Air Conditioner</span>
              <span>$550</span>
            </div>
          </div>

          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>$1200</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row total-final">
              <span>Total:</span>
              <span>$1200</span>
            </div>
          </div>

          <div className="payment-methods">
            <label className="payment-option">
              <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={e => setPaymentMethod(e.target.value)} />
              <span>Bank</span>
            </label>

            <div className="payment-logos">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
            </div>

            <label className="payment-option">
              <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={e => setPaymentMethod(e.target.value)} />
              <span>Cash on delivery</span>
            </label>
          </div>

          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" className="coupon-input" value={couponCode} onChange={e => setCouponCode(e.target.value)} />
            <button type="button" className="apply-coupon-btn" onClick={applyCoupon}>
              Apply Coupon
            </button>
          </div>

          <button type="submit" className="place-order-btn" onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>

      <Footer />
    </div>;
};