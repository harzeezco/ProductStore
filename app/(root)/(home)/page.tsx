import React from 'react';
import Hero from '@/client/pages/home/sections/hero';
import FlashSalesProducts from '@/client/pages/home/sections/flash-sales-products';
import About from '@/client/pages/home/sections/about';

function Home() {
  return (
    <main>
      <Hero />
      <FlashSalesProducts />
      <About />
    </main>
  );
}

export default Home;
