import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { RestaurantGrid } from '../components/RestaurantGrid';
import { DailyDeals } from '../components/DailyDeals';

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <DailyDeals />
      <RestaurantGrid />
    </>
  );
}