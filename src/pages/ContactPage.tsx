import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import '../styles/pages/ContactPage.css';
export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="contact-page">
      <Header />

      <div className="contact-container">
        <h1 className="contact-title">
          Have Something In Mind?
          <br />
          Lets Talk.
        </h1>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name *" className="form-input" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email *" className="form-input" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Your Phone *" className="form-input" value={formData.phone} onChange={handleChange} required />
            </div>

            <textarea name="message" placeholder="Your Message" className="form-textarea" rows={8} value={formData.message} onChange={handleChange} />

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          <div className="contact-image-container">
            <img src="/contactus.jpg" alt="Customer Service Representative" className="contact-image" />
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};