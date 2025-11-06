import React from 'react';
import { ShieldCheckIcon, TruckIcon, HeadphonesIcon } from 'lucide-react';
const benefits = [{
  icon: ShieldCheckIcon,
  title: 'Insurance Protection',
  description: 'Every order comes with damage/loss coverage for peace of mind.'
}, {
  icon: TruckIcon,
  title: 'Same-Day Delivery & Delivery',
  description: 'Get your products delivered or repaired on the same day—no waiting, no delays.'
}, {
  icon: HeadphonesIcon,
  title: '24/7 Customer Support',
  description: 'Our customer support is 24/7.'
}];
export function BenefitsSection() {
  return <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Benefits for your expediency
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
}