import React from 'react';
import { Service } from '../../types';
const services: Service[] = [{
  title: 'Repairs & Maintenance',
  description: '',
  items: ['Air conditioner repair & maintenance', 'Refrigerator troubleshooting & repairs', 'CCTV system installation & maintenance', 'Air curtain installation & servicing', 'Electrical appliance diagnosis and repair']
}, {
  title: 'Product Supply & Sales',
  description: '',
  items: ["Brand new AC's, fans, and cooling equipment.",, 'CCTV cameras and accessories', 'Refrigerators & freezers', 'Replacement & critical components', 'Spare parts & installation tools']
}, {
  title: 'Installation Services',
  description: '',
  items: ['Professional AC installation (split/ window/ cassette)', 'CCTV setup with mobile access', 'Air curtain and ventilation system setup', 'Electrical equipment setup and testing']
}, {
  title: 'Extra Services',
  description: '',
  items: ['Emergency repair and troubleshooting', 'Damage/loss insurance for equipment', 'Extended warranty with AC interest free plan', 'Post-installation support and warranty']
}];
export function ServicesSection() {
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">OUR SERVISES</h2>

        <div className="grid grid-cols-4 gap-6">
          {services.map((service, index) => <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-4 text-center">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => <li key={idx} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </div>;
}