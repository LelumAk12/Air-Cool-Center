import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon } from 'lucide-react';
import '../../styles/components/Header.css';
export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };
  return <header className="header">
      <div className="header-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="logo-section">
            <img src="/Logo.png" alt="Kandy Air Cool Centre" className="logo-image" />
          </Link>
          <nav>
            <ul className="nav-menu">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/sale" className="nav-link">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSearch()} />
              <button className="search-button" onClick={handleSearch} aria-label="Search">
                <SearchIcon size={18} />
              </button>
            </div>
            <button className="icon-button" aria-label="Sign In">
              <UserIcon size={20} />
              <span className="text-xs">Sign In</span>
            </button>
            <button className="icon-button" aria-label="Favorite">
              <HeartIcon size={20} />
              <span className="text-xs">Favorite</span>
            </button>
            <button className="icon-button" aria-label="My Cart">
              <ShoppingCartIcon size={20} />
              <span className="text-xs">My Cart</span>
            </button>
            <div className="sale-badge">Sale! 50% Off</div>
          </div>
        </div>
      </div>
    </header>;
};