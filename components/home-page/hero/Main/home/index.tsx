import React from 'react';
import { homeProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';

function HomeProducts({ setActive }: { setActive: (active: string) => void }) {
  return (
    <div className='grid grid-cols-[50%_50%] grid-rows-2 gap-3 overflow-hidden bg-gray-150'>
      {homeProducts.map((product) => (
        <div
          key={product.name}
          className='grid cursor-pointer place-items-center bg-white py-4'
          onClick={() => setActive(product.name)}
          onKeyDown={() => setActive(product.name)}
          title={product.name}
          role='button'
          tabIndex={-1}
        >
          <Image
            src={`/png/home-assets/hero-assets/${product.img}`}
            alt={product.name}
            width={240}
            height={240}
          />
          <p className='text-gradient mt-4 font-poppins text-xl font-medium'>
            {product.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HomeProducts;
