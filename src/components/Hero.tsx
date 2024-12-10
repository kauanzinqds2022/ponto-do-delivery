import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-orange-500 to-red-600">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Delicious Food,
            <br />
            Delivered Fast
          </h1>
          <p className="text-xl mb-8">
            Order from your favorite restaurants and get your food delivered right to your doorstep.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}