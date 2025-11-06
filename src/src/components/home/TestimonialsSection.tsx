import React from 'react';
export function TestimonialsSection() {
  return <div className="py-16 bg-white">
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
    </div>;
}