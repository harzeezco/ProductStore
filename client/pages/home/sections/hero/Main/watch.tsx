import React from 'react';
import WatchIphoneCard from '@/client/pages/home/components/elements/cards/watch-iphone-card';
import { watchProducts } from '@/client/pages/home/lib/placeholders';

function WatchProducts() {
  return (
    <section className='flex h-full items-center py-7'>
      <ul className='grid place-items-center gap-9 px-7 sm:grid-cols-2 lg:grid-cols-3'>
        {watchProducts.map((product) => (
          <WatchIphoneCard
            key={product.name}
            {...product}
            imgPath='/png/home-assets/hero-assets/watch/'
          />
        ))}
      </ul>
    </section>
  );
}

export default WatchProducts;
