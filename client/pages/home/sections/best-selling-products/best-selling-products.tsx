import React from 'react';
import Container from '@/client/components/elements/container';
import FeaturedTitle from '@/client/components/elements/featured-title';
import Products from './products';
import Button from '@/client/components/elements/button';

export function BestSellingProducts() {
  return (
    <Container as='section'>
      <div className='lg:mx-14'>
        <FeaturedTitle title='This Month' />

        <div className='flex justify-between'>
          <h1 className='h1-semibold'>Best Selling Products</h1>

          <Button>See More</Button>
        </div>
      </div>

      <Products />
    </Container>
  );
}
