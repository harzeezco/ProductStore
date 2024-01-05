import React from 'react';
import Hero from '@/client/pages/home/sections/hero';
import FlashSalesProducts from '@/client/pages/home/sections/flash-sales-products';
import About from '@/client/pages/home/sections/about';
import BestSellingProducts from '@/client/pages/home/sections/best-selling-products';

function Home() {
  return (
    <main>
      <Hero />
      <FlashSalesProducts />
      <About />
      <BestSellingProducts />
    </main>
  );
}

export default Home;
