import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { TruckIcon, ShieldCheckIcon, WrenchIcon, HeadphonesIcon, ArrowRightIcon } from 'lucide-react';
import { Service } from '../types';
import '../styles/pages/ServicesPage.css';
const services: Service[] = [{
  title: 'Repairs & Maintenance',
  description: '',
  items: ['Air Conditioner repair & maintenance', 'Refrigerator troubleshooting & repairs', 'Freezer repair & maintenance', 'Air curtain installation & servicing', 'Electrical appliance diagnosis and repair']
}, {
  title: 'Product Supply & Sales',
  description: '',
  items: ['Brand AC, New, used cooling equipment', 'CCTV cameras and accessories', 'Air curtains & air purifiers', 'Refrigerant & chillers', 'Spare parts & installation tools']
}, {
  title: 'Installation Services',
  description: '',
  items: ['AC installation (split/ window)', 'CCTV setup with mobile access', 'Refrigerator and ventilation system setup', 'Electrical equipment setup and testing']
}, {
  title: 'Extra Services',
  description: '',
  items: ['Emergency repair with 24/7 booking', 'Damage/loss insurance for equipment', 'Post-installation with the utmost warranty']
}];
export const ServicesPage: React.FC = () => {
  return <div className="services-page">
      <Header />
      <div className="services-hero">
        <div className="hero-card" style={{
        backgroundImage: `linear-gradient(rgba(0,123,255,0.7), rgba(0,123,255,0.7)), url(/BG1.jpg)`
      }}>
          <div className="hero-card-content">
            <h2>Your Trusted Cooling Partner</h2>
            <button className="hero-button">Shop Now</button>
          </div>
        </div>
        <div className="hero-card" style={{
        backgroundImage: `linear-gradient(rgba(0,123,255,0.7), rgba(0,123,255,0.7)), url(/BG2.jpg)`
      }}>
          <div className="hero-card-content">
            <h2>Air Cool Center</h2>
            <p>Your Trusted Cooling Partner</p>
          </div>
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
      <div className="services-content">
        <h2 className="section-title">OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>)}
        </div>
      </div>
      <div className="benefits-section">
        <h2 className="section-title">Benefits for your expediency</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">
              <ShieldCheckIcon size={32} />
            </div>
            <h3>Insurance Protection</h3>
            <p>
              Every order comes with damage/loss coverage for peace of mind.
            </p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <TruckIcon size={32} />
            </div>
            <h3>Same-Day Delivery & Delivery</h3>
            <p>
              Get your products delivered or repaired on the same day—no
              waiting, no delays.
            </p>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <HeadphonesIcon size={32} />
            </div>
            <h3>24/7 Customer Support</h3>
            <p>Our customer support is 24/7.</p>
          </div>
        </div>
      </div>
      <div className="testimonials-section">
        <h2 className="section-title">Testimonials</h2>
        <p className="testimonials-subtitle">Over 15,000 happy customers.</p>
        <div className="testimonial-card">
          <div className="testimonial-image-container">
            <div className="quote-marks">"</div>
            <img src="/Testi.jpg" alt="Customer" className="testimonial-image" />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-text">
              "Super fast service and the AC works like brand new! Highly
              recommend Air Cool Center to anyone looking for honest,
              professional help!"
            </p>
            <div>
              <p className="testimonial-author">Dilani Fernando</p>
              <p className="testimonial-location">Kandy</p>
            </div>
          </div>
        </div>
        <div className="testimonial-pagination">
          <div className="pagination-dot active" />
          <div className="pagination-dot" />
          <div className="pagination-dot" />
        </div>
        <div className="see-all-reviews">
          <a href="#" className="see-all-link">
            See all review <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
      <div className="newsletter-section">
        <div className="newsletter-image" style={{
        backgroundImage: `url(/newsletter.jpg)`
      }} />
        <div className="newsletter-content">
          <h2>Join Our Newsletter</h2>
          <p>Receive exclusive deals, discounts and many offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};