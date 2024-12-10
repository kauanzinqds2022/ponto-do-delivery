import React from 'react';
import { Timer } from 'lucide-react';

const deals = [
  {
    id: 1,
    title: "50% OFF Pizza Paradise",
    description: "Get half off on all large pizzas",
    expiresIn: "2h 30m",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Free Delivery Burger House",
    description: "No delivery fee on orders over $20",
    expiresIn: "5h 45m",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Sushi",
    description: "On selected rolls and sets",
    expiresIn: "1h 15m",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80"
  }
];

export function DailyDeals() {
  return (
    <div className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold dark:text-white">Today's Special Deals</h2>
          <button className="text-orange-500 hover:text-orange-600 font-medium">
            View All Deals
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Timer className="h-4 w-4" />
                  <span className="text-sm font-medium">{deal.expiresIn}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{deal.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{deal.description}</p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Claim Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}