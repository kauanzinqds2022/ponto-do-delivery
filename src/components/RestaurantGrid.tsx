import React, { useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { RestaurantMenu } from './RestaurantMenu';

const restaurants = [
  {
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    cuisine: "Italian • Pizza • Pasta",
    deliveryTime: "25-35 min",
    minOrder: "$15",
    description: "Authentic Italian pizzas with fresh ingredients and homemade sauce"
  },
  {
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    cuisine: "American • Burgers • Fast Food",
    deliveryTime: "20-30 min",
    minOrder: "$10",
    description: "Gourmet burgers made with premium Angus beef"
  },
  {
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    cuisine: "Japanese • Sushi • Asian",
    deliveryTime: "30-45 min",
    minOrder: "$20",
    description: "Premium sushi and sashimi prepared by expert chefs"
  },
  {
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    cuisine: "Mexican • Tacos • Burritos",
    deliveryTime: "25-40 min",
    minOrder: "$12",
    description: "Authentic Mexican street food with homemade tortillas"
  }
];

export function RestaurantGrid() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">Popular Restaurants</h2>
          <button className="text-orange-500 hover:text-orange-600 font-medium">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard 
              key={restaurant.name} 
              {...restaurant} 
              onSelect={() => setSelectedRestaurant(restaurant.name)}
            />
          ))}
        </div>
      </div>

      <RestaurantMenu
        restaurant={selectedRestaurant || ''}
        isOpen={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />
    </>
  );
}