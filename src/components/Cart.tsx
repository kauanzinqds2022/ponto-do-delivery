import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, dispatch } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={`${item.restaurantName}-${item.itemName}`} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.itemName}</p>
                    <p className="text-sm text-gray-500">{item.restaurantName}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          restaurantName: item.restaurantName,
                          itemName: item.itemName,
                          quantity: Math.max(0, item.quantity - 1)
                        }
                      })}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: {
                          restaurantName: item.restaurantName,
                          itemName: item.itemName,
                          quantity: item.quantity + 1
                        }
                      })}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => dispatch({
                        type: 'REMOVE_ITEM',
                        payload: {
                          restaurantName: item.restaurantName,
                          itemName: item.itemName
                        }
                      })}
                      className="p-1 hover:bg-red-100 rounded text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${state.total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-50"
            disabled={state.items.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}