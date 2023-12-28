import React from 'react';
import FeaturedTitle from '@/components/elements/featured-title';
import CountdownTimer from '@/components/elements/countdown-timer';

function FlashSalesProducts() {
  return (
    <section className='container-max-w'>
      <FeaturedTitle title='Today’s' />
      <div className='flex items-center gap-10'>
        <h1 className='h1-semibold'>Flash Sales</h1>
        <CountdownTimer />
      </div>
    </section>
  );
}

export default FlashSalesProducts;
