import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
  description: string;
}

interface RestaurantMenuProps {
  restaurant: string;
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_MENU: MenuItem[] = [
  {
    name: "Margherita Pizza",
    price: 12.99,
    description: "Fresh tomatoes, mozzarella, basil"
  },
  {
    name: "Pepperoni Pizza",
    price: 14.99,
    description: "Pepperoni, mozzarella, tomato sauce"
  },
  {
    name: "Garden Salad",
    price: 8.99,
    description: "Mixed greens, tomatoes, cucumbers, carrots"
  },
  {
    name: "Garlic Bread",
    price: 4.99,
    description: "Toasted bread with garlic butter"
  }
];

export function RestaurantMenu({ restaurant, isOpen, onClose }: RestaurantMenuProps) {
  const { dispatch } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-2xl">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{restaurant}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {SAMPLE_MENU.map((item) => (
                <div key={item.name} className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-sm font-medium mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: 'ADD_ITEM',
                        payload: {
                          restaurantName: restaurant,
                          itemName: item.name,
                          price: item.price,
                          quantity: 1
                        }
                      });
                    }}
                    className="ml-4 p-2 text-orange-500 hover:bg-orange-50 rounded-full"
                  >
                    <Plus className="h-6 w-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}