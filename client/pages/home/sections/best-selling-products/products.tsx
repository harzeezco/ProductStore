'use client';

import React, { useEffect } from 'react';
import ProductCard from '@/client/components/elements/products/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/elements/carousel';
import Loading from '@/client/components/elements/products/loading';
import { IProduct } from '../../types';
import { useAsync } from '@/client/hooks/useAsync';
import { client } from '@/client/lib/utils';

function Products() {
  const { isLoading, data, run } = useAsync();

  useEffect(() => {
    run(client('http://localhost:3000/products/best-selling'));
  }, [run]);

  if (isLoading) {
    return <Loading />;
  }

  // if (
  //   !Array.isArray(data) ||
  //   data.length === 0 ||
  //   !Array.isArray(data)
  // ) {
  //   throw new Error('Invalid data format');
  // }

  // const items = data[0].items;

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-[80%] md:w-[90%] mx-auto mt-10'
    >
      <CarouselContent>
        {data?.map((product: IProduct) => (
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
