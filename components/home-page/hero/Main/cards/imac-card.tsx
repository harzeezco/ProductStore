import React from 'react';
import NextImage from '@/components/elements/next-image';
import { iMacProducts } from '@/lib/placeholders/home/hero-placeholder';

function ImacCard({ active }: { active: string }) {
  return (
    <>
      {' '}
      {iMacProducts[active].map((product) => (
        <div
          className='grid place-items-center bg-gray-50 p-6'
          style={{
            gridColumn: product.gridCol,
            gridRow: product.gridRow,
          }}
        >
          <NextImage
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
