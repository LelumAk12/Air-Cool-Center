import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFoundPage.css';
export const NotFoundPage: React.FC = () => {
  return <div className="not-found-page">
      <Header />

      <div className="not-found-container">
        <h1 className="not-found-title">404 Not Found</h1>
        <p className="not-found-message">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/" className="back-home-button">
          Back to home page
        </Link>
      </div>

      <Footer />
    </div>;
};