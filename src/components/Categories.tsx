import React from 'react';
import { Pizza, Coffee, Sandwich, IceCream, Salad, Soup } from 'lucide-react';

const categories = [
  { name: 'Pizza', icon: Pizza },
  { name: 'Coffee', icon: Coffee },
  { name: 'Sandwiches', icon: Sandwich },
  { name: 'Desserts', icon: IceCream },
  { name: 'Salads', icon: Salad },
  { name: 'Soups', icon: Soup },
];

export function Categories() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="h-8 w-8 text-orange-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}