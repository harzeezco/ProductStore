import React from 'react';
import { iPhoneProducts } from '@/lib/placeholders/home/hero-placeholder';
import Card from '../card';

function IPhoneProducts() {
  return (
    <section className='h-full py-7'>
      <ul className='flex items-center justify-around px-7'>
        {iPhoneProducts.map((product) => (
          <Card key={product.name} {...product} />
        ))}
      </ul>
    </section>
  );
}

export default IPhoneProducts;
