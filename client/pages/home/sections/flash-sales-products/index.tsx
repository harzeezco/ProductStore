import React from 'react';
import FeaturedTitle from '@/client/components/elements/featured-title';
import Container from '@/client/components/elements/container';
import CountdownTimer from '../../components/elements/countdown-timer';
import Products from './products';

function FlashSalesProducts() {
  return (
    <Container as='section' className=''>
      <div className='lg:ml-14'>
        <FeaturedTitle title='Today’s' />

        <div className='flex max-sm:flex-col md:items-center gap-x-14 gap-y-4'>
          <h1 className='h1-semibold'>Flash Sales</h1>

          <CountdownTimer />
        </div>
      </div>

      <Products />
    </Container>
  );
}

export default FlashSalesProducts;
