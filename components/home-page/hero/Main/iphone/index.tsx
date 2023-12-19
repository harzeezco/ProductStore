import React from 'react';
import { iPhoneProducts } from '@/lib/placeholders/home/hero-placeholder';
import Card from '../card';

function IPhoneProducts() {
  return (
    <section className='h-full py-7'>
      <ul className='grid place-items-center gap-9 px-7 sm:grid-cols-2 lg:grid-cols-3'>
        {iPhoneProducts.map((product) => (
          <Card key={product.name} {...product} />
        ))}
      </ul>
    </section>
  );
}

export default IPhoneProducts;
