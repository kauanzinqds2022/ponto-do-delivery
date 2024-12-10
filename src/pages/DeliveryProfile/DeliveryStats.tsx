import React from 'react';
import { TrendingUp, Clock, DollarSign, Package } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold mt-1 dark:text-white">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-500">{trend}</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function DeliveryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Total Earnings"
        value="R$ 1,234"
        icon={<DollarSign className="h-6 w-6 text-orange-500" />}
        trend="+12% from last week"
      />
      <StatsCard
        title="Deliveries Completed"
        value="156"
        icon={<Package className="h-6 w-6 text-orange-500" />}
      />
      <StatsCard
        title="Average Delivery Time"
        value="28 min"
        icon={<Clock className="h-6 w-6 text-orange-500" />}
      />
      <StatsCard
        title="Today's Earnings"
        value="R$ 45"
        icon={<DollarSign className="h-6 w-6 text-orange-500" />}
      />
    </div>
  );
}