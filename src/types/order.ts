export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  available: boolean;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivering'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  customerId: string;
  restaurantId: string;
  deliveryPartnerId?: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  deliveryFee: number;
  createdAt: Date;
  estimatedDeliveryTime?: Date;
  deliveredAt?: Date;
  address: string;
  paymentMethod: string;
}