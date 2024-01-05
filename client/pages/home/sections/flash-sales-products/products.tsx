'use client';

import React from 'react';
import ProductCard from '@/client/components/elements/products/product-card';
import useFlashSales from '../../api/useFlashSales';
import { IProduct } from '../../types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/elements/carousel';
import Loading from '@/client/components/elements/products/loading';

function Products() {
  const { isLoading, data } = useFlashSales();

  if (isLoading) {
    return (
     <Loading />
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
