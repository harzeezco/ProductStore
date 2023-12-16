import React from 'react';
import { homeProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';

function Main() {
  return (
    <main className=''>
      <div className='grid grid-cols-[50%_50%] grid-rows-2 gap-3 overflow-hidden bg-[#f8f8f8]'>
        {homeProducts.map((product) => (
          <div className='grid place-items-center bg-white py-4'>
            <Image
              src={`/png/home-assets/hero-assets/${product.img}`}
              alt={product.name}
              width={240}
              height={240}
            />
            <p className='mt-4 font-poppins text-xl font-medium'>
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
