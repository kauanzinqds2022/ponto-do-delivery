export type UserRole = 'customer' | 'restaurant' | 'delivery';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  address?: string;
}

export interface DeliveryPartner extends User {
  role: 'delivery';
  document: string;
  vehicleType: 'bicycle' | 'motorcycle' | 'car';
  deliveriesCompleted: number;
  rating: number;
  earnings: number;
}

export interface Restaurant extends User {
  role: 'restaurant';
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  minOrder: number;
  isOpen: boolean;
  description: string;
  coverImage: string;
}

export interface Customer extends User {
  role: 'customer';
  orders: number;
  points: number;
  favorites: string[];
}