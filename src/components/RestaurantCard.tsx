import React from 'react';
import { Star, Clock, DollarSign } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  minOrder: string;
  description: string;
  onSelect: () => void;
}

export function RestaurantCard({ 
  name, 
  image, 
  rating, 
  cuisine, 
  deliveryTime, 
  minOrder,
  description,
  onSelect 
}: RestaurantCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {rating >= 4.5 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-medium">
            Popular
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold dark:text-white">{name}</h3>
          <div className="flex items-center bg-green-50 dark:bg-green-900 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium dark:text-green-100">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{cuisine}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>Min. {minOrder}</span>
          </div>
        </div>
      </div>
    </div>
  );
}