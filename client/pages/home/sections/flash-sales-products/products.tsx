'use client';

import React, { useState } from 'react';
import useFlashSales from '../../api/useFlashSales';
import ProductCard from '@/client/components/elements/product-card';
import { Skeleton } from '@/client/components/elements/skeleton';

function Products() {
  const { isLoading, data } = useFlashSales();
  const [loading] = useState(true);
  console.log(data);

  if (loading) {
    return (
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div className='grid gap-3'>
            <Skeleton className='h-[250px] w-[300px]' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[250px]' />
              <Skeleton className='h-4 w-[200px]' />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-14'>
      {data[0]?.items?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
