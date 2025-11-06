import React, { useState } from 'react';
import { Header } from './src/components/layout/Header';
import { Navigation } from './src/components/layout/Navigation';
import { Footer } from './src/components/layout/Footer';
import { HomePage } from './src/pages/HomePage';
import { ServicesPage } from './src/pages/ServicesPage';
export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };
  return <div className="min-h-screen bg-white">
      <Header />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>;
}