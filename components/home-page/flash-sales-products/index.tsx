import React from 'react';
import FeaturedTitle from '@/components/elements/featured-title';
import Container from '@/components/elements/container';

function FlashSalesProducts() {
  return (
    <Container as='section' className=''>
      <FeaturedTitle title='Today’s' />
      <div className='flex items-center gap-14'>
        <h1 className='h1-semibold'>Flash Sales</h1>
        {/* <CountdownTimer /> */}
      </div>
    </Container>
  );
}

export default FlashSalesProducts;
