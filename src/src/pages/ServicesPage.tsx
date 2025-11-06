import React from 'react';
import { Button } from '../components/ui/Button';
export function ServicesPage() {
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">
                Your Trusted
                <br />
                Cooling Partner
              </h1>
              <Button variant="secondary" size="lg">
                Shop Now
              </Button>
            </div>
            <div className="text-white text-right">
              <h2 className="text-4xl font-bold mb-2">Air Cool Center</h2>
              <p className="text-xl">Your Trusted Cooling Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border-y border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">📦</span>
              </div>
              <span className="text-sm text-gray-700">
                Free Cost express delivery with tracking
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">🛡️</span>
              </div>
              <span className="text-sm text-gray-700">
                Equipment loss & damage insurance included
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">💳</span>
              </div>
              <span className="text-sm text-gray-700">
                Installment plans with zero overpayments
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">OUR SERVISES</h2>

          <div className="grid grid-cols-4 gap-6">
            {/* Service Cards */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-center">
                Repairs & Maintenance
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Air conditioner repair & maintenance</li>
                <li>• Refrigerator troubleshooting & repairs</li>
                <li>• CCTV system installation & maintenance</li>
                <li>• Air curtain installation & servicing</li>
                <li>• Electrical appliance diagnosis and repair</li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-center">
                Product Supply & Sales
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Brand new AC's, fans, and cooling equipment</li>
                <li>• CCTV cameras and accessories</li>
                <li>• Refrigerators & freezers</li>
                <li>• Replacement & critical components</li>
                <li>• Spare parts & installation tools</li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-center">
                Installation Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  • Professional AC installation (split/ window/ cassette)
                </li>
                <li>• CCTV setup with mobile access</li>
                <li>• Air curtain and ventilation system setup</li>
                <li>• Electrical equipment setup and testing</li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-center">
                Extra Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Emergency repair and troubleshooting</li>
                <li>• Damage/loss insurance for equipment</li>
                <li>• Extended warranty with AC interest free plan</li>
                <li>• Post-installation support and warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Benefits for your expediency
          </h2>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Insurance Protection</h3>
              <p className="text-gray-600">
                Every order comes with damage/loss coverage for peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="font-bold text-xl mb-3">
                Same-Day Delivery & Delivery
              </h3>
              <p className="text-gray-600">
                Get your products delivered or repaired on the same day—no
                waiting, no delays.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-3xl">🎧</span>
              </div>
              <h3 className="font-bold text-xl mb-3">24/7 Customer Support</h3>
              <p className="text-gray-600">Our customer support is 24/7.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2">Testimonials</h2>
          <p className="text-center text-gray-600 mb-12">
            Over 15,000 happy customers.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 relative">
            <div className="text-8xl text-gray-200 absolute top-4 left-4 font-serif">
              "
            </div>

            <div className="flex gap-6 items-start relative z-10">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" alt="Customer" className="w-24 h-24 rounded-lg object-cover" />

              <div className="flex-1">
                <p className="text-gray-700 text-lg mb-4 italic">
                  "Super fast service and the AC works like brand new! Highly
                  recommend Air Cool Center to anyone looking for honest,
                  professional help!"
                </p>
                <div>
                  <p className="font-bold">Dilani Fernando</p>
                  <p className="text-gray-600 text-sm">Kandy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="text-blue-500 hover:underline">
              See all reviews →
            </button>
            <div className="flex-1 h-1 bg-gray-200 rounded">
              <div className="h-full w-1/3 bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
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
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2.5 rounded text-gray-900" />
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}