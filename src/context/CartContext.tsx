import React, { createContext, useContext, useReducer } from 'react';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { restaurantName: string; itemName: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { restaurantName: string; itemName: string; quantity: number } };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.restaurantName === action.payload.restaurantName && 
                item.itemName === action.payload.itemName
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.restaurantName === action.payload.restaurantName && 
            item.itemName === action.payload.itemName
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price
      };
    }
    case 'REMOVE_ITEM': {
      const item = state.items.find(
        item => item.restaurantName === action.payload.restaurantName && 
                item.itemName === action.payload.itemName
      );
      return {
        ...state,
        items: state.items.filter(
          item => !(item.restaurantName === action.payload.restaurantName && 
                   item.itemName === action.payload.itemName)
        ),
        total: state.total - (item ? item.price * item.quantity : 0)
      };
    }
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(
        item => item.restaurantName === action.payload.restaurantName && 
                item.itemName === action.payload.itemName
      );
      if (!item) return state;

      const quantityDiff = action.payload.quantity - item.quantity;
      return {
        ...state,
        items: state.items.map(item =>
          item.restaurantName === action.payload.restaurantName && 
          item.itemName === action.payload.itemName
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff)
      };
    }
    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}