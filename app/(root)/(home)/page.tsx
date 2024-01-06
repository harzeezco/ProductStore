import React from 'react';
import { Hero } from '@/client/pages/home/sections';
import { FlashSalesProducts } from '@/client/pages/home/sections';
import { About } from '@/client/pages/home/sections';
import { BestSellingProducts } from '@/client/pages/home/sections';
import { Category } from '@/client/pages/home/sections';

function Home() {
  return (
    <main>
      <Hero />
      <FlashSalesProducts />
      <About />
      <BestSellingProducts />
      <Category />
    </main>
  );
}

export default Home;
