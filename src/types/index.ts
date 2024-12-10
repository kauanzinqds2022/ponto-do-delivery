export interface Restaurant {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  minOrder: string;
}

export interface CartItem {
  restaurantName: string;
  itemName: string;
  price: number;
  quantity: number;
}

export interface Category {
  name: string;
  icon: React.ComponentType;
}