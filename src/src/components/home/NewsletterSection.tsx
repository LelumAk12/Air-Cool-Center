import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
export function NewsletterSection() {
  return <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <img src="/Screenshot_2025-11-06_093219.png" alt="Air coolers" className="w-full h-auto" />
          </div>

          <div className="text-white">
            <h2 className="text-4xl font-bold mb-2">
              Join Our <span className="font-bold">Newsletter</span>
            </h2>
            <p className="text-blue-100 mb-6">
              Receive exclusive deals, discounts and many offers.
            </p>

            <div className="flex gap-3">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white" />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}