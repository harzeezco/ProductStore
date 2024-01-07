'use client'

import Container from '@/client/components/elements/container';
import FeaturedTitle from '@/client/components/elements/featured-title';
import ProductCard from '@/client/components/elements/products/product-card';
import React from 'react';
import { IProduct } from '../../types';
import useFetch from '@/client/hooks/useFetch';
import { Skeleton } from '@/client/components/elements/skeleton';
import Button from '@/client/components/elements/button';

const length = 8;

export function ExploreProducts() {
  const { data, isError, isLoading } = useFetch(
    `https://dummyjson.com/products?limit=${length}`,
  );

   if (isLoading) {
      <section aria-describedby='loading' className='mt-10'>
          {Array.from({ length: length }).map((_, index) => (
          <div className='flex flex-col gap-2' key={index}>
            <Skeleton className='h-[250px] w-[300px]' />
            <div className='space-y-2'>
              <Skeleton className='h-8 w-[250px]' />
              <Skeleton className='h-8 w-[200px]' />
            </div>
          </div>
        ))}
      </section>
   }
  

  return (
    <Container as='section'>
      <FeaturedTitle title='Our Products' />

      <h1 className='h1-semibold'>Explore Our Products</h1>

      <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 mx-auto my-10'>
        {data?.products
          .slice()
          .reverse()
          .map((product: IProduct) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>

      <div className='flex justify-center'>
        <Button>See All Products</Button>
      </div>
    </Container>
  );
}
