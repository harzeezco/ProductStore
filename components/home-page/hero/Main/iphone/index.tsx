import React from 'react';
import { iPhoneProducts } from '@/lib/placeholders/home/hero-placeholder';
import Card from '../card';

function IPhoneProducts() {
  return (
    <section className='h-full py-7'>
      <ul className='grid place-items-center sm:grid-cols-2 lg:grid-cols-3 px-7 gap-9'>
        {iPhoneProducts.map((product) => (
          <Card key={product.name} {...product} />
        ))}
      </ul>
    </section>
  );
}

export default IPhoneProducts;
