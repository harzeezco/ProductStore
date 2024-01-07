import React from 'react';
import {
  ExploreProducts,
  Hero,
  FlashSalesProducts,
  About,
  BestSellingProducts,
  Category
} from '@/client/pages/home/sections';

function Home() {
  return (
    <main>
      <Hero />
      <FlashSalesProducts />
      <About />
      <BestSellingProducts />
      <Category />
      <ExploreProducts />
    </main>
  );
}

export default Home;
