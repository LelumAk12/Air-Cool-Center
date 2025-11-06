import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import '../../styles/components/Footer.css';
export const Footer: React.FC = () => {
  return <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Account</h3>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <MailIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
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
                <a href="#" className="footer-link">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Order status
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Repairs & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Product Supply & Sales
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Installation Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Extra Services
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal Stuff</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy & Policy
                </a>
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