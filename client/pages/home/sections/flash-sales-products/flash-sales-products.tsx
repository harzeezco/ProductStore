import React from 'react';
import FeaturedTitle from '@/client/components/elements/featured-title';
import Container from '@/client/components/elements/container';
import StopTimer from '../../components/elements/stop-timer';
import Products from './products';

export function FlashSalesProducts() {
  return (
    <Container as='section' className=''>
      <div className='lg:ml-14'>
        <FeaturedTitle title='Today’s' />

        <div className='flex max-sm:flex-col md:items-center gap-x-14 gap-y-4'>
          <h1 className='h1-semibold'>Flash Sales</h1>

          <StopTimer />
        </div>
      </div>

      <Products />
    </Container>
  );
}
