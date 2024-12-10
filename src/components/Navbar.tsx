import React, { useState } from 'react';
import { ShoppingBag, User, Search, Moon, Sun, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { Cart } from './Cart';
import { SearchFilters } from './SearchFilters';

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();
  const { theme, toggleTheme } = useTheme();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">FoodHub</span>
            </div>
            
            <div className="flex-1 max-w-xl px-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for restaurants or dishes..."
                  className="w-full pl-10 pr-12 py-2 rounded-full border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                />
                <button
                  onClick={() => setIsFiltersOpen(true)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Filter className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="h-6 w-6 text-gray-600" />
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <User className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Cart ({totalItems})</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchFilters isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </>
  );
}