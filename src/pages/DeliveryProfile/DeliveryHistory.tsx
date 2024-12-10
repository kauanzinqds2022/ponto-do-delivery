import React from 'react';
import { Package, MapPin } from 'lucide-react';

interface DeliveryRecord {
  id: string;
  date: string;
  restaurant: string;
  customer: string;
  amount: string;
  status: 'completed' | 'cancelled';
}

const deliveryHistory: DeliveryRecord[] = [
  {
    id: '1',
    date: '2024-03-15 14:30',
    restaurant: 'Pizza Paradise',
    customer: 'John Doe',
    amount: 'R$ 3,00',
    status: 'completed'
  },
  {
    id: '2',
    date: '2024-03-15 13:15',
    restaurant: 'Burger House',
    customer: 'Jane Smith',
    amount: 'R$ 3,00',
    status: 'completed'
  },
  {
    id: '3',
    date: '2024-03-15 12:00',
    restaurant: 'Sushi Master',
    customer: 'Mike Johnson',
    amount: 'R$ 3,00',
    status: 'cancelled'
  }
];

export function DeliveryHistory() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold dark:text-white">Recent Deliveries</h2>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {deliveryHistory.map((delivery) => (
          <div key={delivery.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <Package className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium dark:text-white">{delivery.restaurant}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Delivered to {delivery.customer}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium dark:text-white">{delivery.amount}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{delivery.date}</p>
              </div>
            </div>
            <div className="mt-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                delivery.status === 'completed' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}