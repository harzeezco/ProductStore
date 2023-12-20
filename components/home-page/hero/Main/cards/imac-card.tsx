import { iMacProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React from 'react';

function ImacCard({ active }: { active: string }) {
  return (
    <>
      {' '}
      {iMacProducts[active].map((product) => (
        <div
          className='grid place-items-center bg-gray-50 p-6'
          style={{ gridColumn: product.gridCol, gridRow: product.gridRow }}
        >
          <Image
            src={`/png/home-assets/hero-assets/imac/${product.img}`}
            alt={product.alt}
            width={240}
            height={270}
            className='max-h-[320px] md:object-contain'
          />
        </div>
      ))}
    </>
  );
}

export default ImacCard;
