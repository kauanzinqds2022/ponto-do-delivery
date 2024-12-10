import React from 'react';
import { DeliveryStats } from './DeliveryStats';
import { DeliveryHistory } from './DeliveryHistory';

export function DeliveryProfile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-8 dark:text-white">Delivery Partner Dashboard</h1>
      <DeliveryStats />
      <div className="mt-8">
        <DeliveryHistory />
      </div>
    </div>
  );
}