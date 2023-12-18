import Button from '@/components/ui/button';
import { iPhoneProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React from 'react';

function IPhoneProducts() {
  return (
    <div className='h-full py-7'>
      <ul className='flex items-center justify-around px-7'>
        {iPhoneProducts.map((product) => (
          <li>
            <Image
              src={`/png/home-assets/hero-assets/${product.img}`}
              alt={product.name}
              width={130}
              height={180}
              className='w-[12rem]'
            />
            <div className='mt-2 flex flex-col pl-3'>
              <span className='text-xl font-medium'>{product.name}</span>
              <span className='text-base'>{product.description}</span>
              <div className='mb-3 flex items-center justify-between'>
                <span className='text-lg font-bold text-primary'>{`${product.price}$`}</span>
                <button type='button' className='border-[1.5px] border-gray-100 p-1'>
                  <Image
                    src='/svg/favorite-icon.svg'
                    alt='favorite'
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <Button variant='primary'>Buy Now</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IPhoneProducts;
