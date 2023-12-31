import React from 'react';
import NextImage from '@/client/components/elements/next-image';
import { homeProducts } from '@/client/pages/home/lib/placeholders';

function HomeProducts({
  setActive,
}: {
  setActive: (active: string) => void;
}) {
  return (
    <section className='grid grid-rows-2 gap-3 overflow-hidden bg-gray-150 sm:grid-cols-2'>
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
          <NextImage
            src={`/png/home-assets/hero-assets/${product.img}`}
            alt={product.name}
            width={240}
            height={240}
            className='transition-all hover:scale-110'
          />
          <p className='text-gradient font-poppins mt-4 text-xl font-medium'>
            {product.name}
          </p>
        </div>
      ))}
    </section>
  );
}

export default HomeProducts;
