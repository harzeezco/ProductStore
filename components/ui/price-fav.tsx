import Image from 'next/image';
import React from 'react';

function PriceFav({ discount, price }) {
  return (
    <div className='my-3 flex items-center justify-between'>
      <div className='flex gap-1.5'>
        <span className='text-lg font-semibold text-primary'>{`${discount}$`}</span>
        <span className='text-base font-medium text-gray-300 line-through'>{`${price}$`}</span>
      </div>
      <button type='button' className='border-[1.5px] border-gray-100 p-1'>
        <Image
          src='/svg/favorite-icon.svg'
          alt='favorite'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default PriceFav;
