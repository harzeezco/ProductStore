import React from 'react';
import { watchProducts } from '@/lib/placeholders/home/hero-placeholder';
import Card from '../card';

function WatchProducts() {
  return (
    <section className='flex h-full items-center'>
      <ul className='flex items-center justify-around px-7'>
        {watchProducts.map((product) => (
          <Card
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
