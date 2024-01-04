'use client';

import React from 'react';
import ProductCard from '@/client/components/elements/product-card';
import { Skeleton } from '@/client/components/elements/skeleton';
import useFlashSales from '../../api/useFlashSales';
import { IProduct } from '../../types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/client/components/elements/carousel';

function Products() {
  const { isLoading, data } = useFlashSales();

  if (isLoading) {
    return (
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-[80%] md:w-[90%] mx-auto mt-10'
      >
        <CarouselContent className='flex gap-4'>
          {Array.from({ length: 8 }).map((_, index) => (
            <div className='flex flex-col'>
              <Skeleton className='h-[250px] w-[300px]' />
              <div className='space-y-2'>
                <Skeleton className='h-4 w-[250px]' />
                <Skeleton className='h-4 w-[200px]' />
              </div>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }

    if (
      !Array.isArray(data) ||
      data.length === 0 ||
      !Array.isArray(data[0]?.items)
    ) {
      throw new Error('Invalid data format');
    }

  const items = data[0].items;

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-[80%] md:w-[90%] mx-auto mt-10'
    >
      <CarouselContent>
        {items.map((product: IProduct) => (
          <CarouselItem
            key={product.id}
            className='basis-3/4 md:basis-1/2 lg:basis-1/4'
          >
            <ProductCard key={product.id} {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Products;
