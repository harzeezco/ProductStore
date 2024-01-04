import React from 'react';
import FeaturedTitle from '@/client/components/elements/featured-title';
import Container from '@/client/components/elements/container';
import Products from './products';
import CountdownTimer from '../../components/elements/countdown-timer';

function FlashSalesProducts() {
  return (
    <Container as='section' className=''>
      <FeaturedTitle title='Today’s' />

      <div className='flex max-sm:flex-col md:items-center gap-x-14 gap-y-4'>
        <h1 className='h1-semibold'>Flash Sales</h1>

        <CountdownTimer />
      </div>

      <Products />
    </Container>
  );
}

export default FlashSalesProducts;
