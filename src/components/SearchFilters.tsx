import React from 'react';
import { X, DollarSign, Clock, Star } from 'lucide-react';

interface SearchFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchFilters({ isOpen, onClose }: SearchFiltersProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold dark:text-white">Filters</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="h-6 w-6 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3 dark:text-white">Price Range</h3>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((price) => (
                <button
                  key={price}
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
                >
                  {Array(price).fill('$').map((_, i) => (
                    <DollarSign key={i} className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  ))}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 dark:text-white">Delivery Time</h3>
            <div className="space-y-2">
              {['15-30 min', '30-45 min', '45-60 min'].map((time) => (
                <button
                  key={time}
                  className="flex items-center w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
                >
                  <Clock className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
                  <span className="dark:text-white">{time}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 dark:text-white">Rating</h3>
            <div className="space-y-2">
              {[4, 3].map((rating) => (
                <button
                  key={rating}
                  className="flex items-center w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
                >
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="dark:text-white">{rating}+ Stars</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t dark:border-gray-700">
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}