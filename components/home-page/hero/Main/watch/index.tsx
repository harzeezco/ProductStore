import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { watchProducts } from '@/lib/placeholders/home/hero-placeholder';

function WatchProducts() {
  return (
    <section className='flex h-full items-center'>
      <ul className='flex items-center justify-around px-7'>
        {watchProducts.map((product) => (
          <li>
            <Image
              src={`/png/home-assets/hero-assets/watch/${product.img}`}
              alt={product.name}
              width={130}
              height={180}
              className='w-[12rem]'
            />
            <div className='mt-3 flex flex-col pl-3'>
              <span className='text-xl font-medium'>{product.name}</span>
              <span className='text-base text-gray-600'>{product.description}</span>
              <div className='my-3 flex items-center justify-between'>
                <div className='flex gap-1.5'>
                  <span className='text-lg font-bold text-primary'>{`${product.discount}$`}</span>
                  <span className='text-base font-semibold text-gray-300 line-through'>{`${product.price}$`}</span>
                </div>
                <button
                  type='button'
                  className='mr-8 border-[1.5px] border-gray-100 p-1'
                >
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
    </section>
  );
}

export default WatchProducts;
