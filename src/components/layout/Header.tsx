import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';
import '../../styles/components/Header.css';
export const Header: React.FC = () => {
  const navigate = useNavigate();
  const {
    cartCount
  } = useCart();
  const {
    searchQuery,
    setSearchQuery
  } = useSearch();
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate('/');
    }
  };
  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return <header className="header">
      {/* Top row: Logo, Search, Actions */}
      <div className="header-top">
        <div className="header-container">
          <div className="header-top-content">
            <Link to="/" className="logo-section">
              <img src="/Logo.png" alt="Kandy Air Cool Centre" className="logo-image" />
            </Link>

            <div className="search-container">
              <input type="text" placeholder="Search products..." className="search-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyPress={handleSearchKeyPress} />
              <button className="search-button" onClick={handleSearch} aria-label="Search">
                <SearchIcon size={18} />
              </button>
            </div>

            <div className="header-actions">
              <Link to="/login" className="icon-button" aria-label="Sign In">
                <UserIcon size={20} />
                <span className="text-xs">Sign In</span>
              </Link>

              <Link to="/wishlist" className="icon-button" aria-label="Favorite">
                <HeartIcon size={20} />
                <span className="text-xs">Favorite</span>
              </Link>

              <Link to="/cart" className="icon-button cart-icon-with-badge" aria-label="My Cart">
                <ShoppingCartIcon size={20} />
                <span className="text-xs">My Cart</span>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: Navigation with light blue background */}
      <div className="header-nav">
        <div className="header-container">
          <div className="header-nav-content">
            <nav className="nav-wrapper">
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

            <div className="sale-badge">Sale! 50% Off</div>
          </div>
        </div>
      </div>
    </header>;
};