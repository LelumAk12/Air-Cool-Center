import React from 'react';
import { Button } from '../ui/Button';
export function HeroSection() {
  return <div className="bg-gradient-to-br from-blue-100 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <img src="/banner.jpg" alt="Air conditioning technician" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>;
}