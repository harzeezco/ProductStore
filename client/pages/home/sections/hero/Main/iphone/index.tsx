import React from 'react';
import WatchIphoneCard from '@/client/pages/home/components/elements/cards/watch-iphone-card';
import { iPhoneProducts } from '@/client/pages/home/lib/placeholders';

function IPhoneProducts() {
  return (
    <section className='h-full py-7'>
      <ul className='grid place-items-center gap-9 px-7 sm:grid-cols-2 lg:grid-cols-3'>
        {iPhoneProducts.map((product) => (
          <WatchIphoneCard key={product.name} {...product} />
        ))}
      </ul>
    </section>
  );
}

export default IPhoneProducts;
