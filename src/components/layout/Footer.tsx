import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import '../../styles/components/Footer.css';
export const Footer: React.FC = () => {
  return <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Account</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:info@kandyaircool.com" className="social-icon" aria-label="Email">
                <MailIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Address</p>
              <p className="text-sm">071 608 4522</p>
              <p className="text-sm">Janitha@yahoo, Kandy</p>
              <p className="text-sm">Sri Lanka</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>My Account</h3>
            <ul className="footer-links">
              <li>
                <Link to="/login" className="footer-link">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="footer-link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">
                  Order status
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/services" className="footer-link">
                  Repairs & Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Product Supply & Sales
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Extra Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal Stuff</h3>
            <ul className="footer-links">
              <li>
                <Link to="/terms" className="footer-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright ©2025 Pobobo. All Rights Reserved</p>
        </div>
      </div>
    </footer>;
};