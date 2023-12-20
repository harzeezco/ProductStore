import React from 'react';
import { watchProducts } from '@/lib/placeholders/home/hero-placeholder';
import WatchIphoneCard from '../cards/watch-iphone';

function WatchProducts() {
  return (
    <section className='flex h-full items-center py-7'>
      <ul className='grid place-items-center gap-9 px-7 sm:grid-cols-2 lg:grid-cols-3'>
        {watchProducts.map((product) => (
          <WatchIphoneCard
            key={product.name}
            {...product}
            imgSrc='/png/home-assets/hero-assets/watch/'
          />
        ))}
      </ul>
    </section>
  );
}

export default WatchProducts;
