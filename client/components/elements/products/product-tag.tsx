import React from 'react';
import { cn } from '@/client/lib/utils';
import NextImage from '../next-image';

function ProductTag({
  discount,
  price,
  className = '',
}: {
  discount: number;
  price: number;
  className: string;
}) {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
    >
      <div className='flex gap-1.5'>
        <span className='text-lg font-semibold text-primary'>{`$${discount}`}</span>
        <span className='text-base font-medium text-gray-300 line-through'>{`$${price}`}</span>
      </div>
      <button
        type='button'
        className='border-[1.5px] border-gray-100 p-1'
      >
        <NextImage
          src='/svg/favorite-icon.svg'
          alt='favorite'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default ProductTag;
