import Button from '@/components/ui/button';
import Tooltip from '@/components/ui/tooltip';
import { iMacProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React, { useState } from 'react';

const Colors = [
  {
    type: 'green',
    color: '#10505b',
  },
  {
    type: 'yellow',
    color: '#d48207',
  },
  {
    type: 'orange',
    color: '#e36942',
  },
  {
    type: 'pink',
    color: '#b72c31',
  },
  {
    type: 'purple',
    color: '#353a71',
  },
  {
    type: 'silver',
    color: '#c7c8ca',
  },
];

function IMacProducts() {
  const [active, setActive] = useState('yellow');

  return (
    <section className='relative h-full bg-white'>
      <Button className='absolute left-0 top-0' onClick={() => {}}>
        Buy Now
      </Button>
      <div className='absolute left-4 top-1/2 -translate-y-1/2'>
        <div className='flex flex-col gap-2'>
          {Colors.map(({ color, type }) => (
            <Tooltip
              tooltipText={type}
              style={{ background: color }}
              btnClasses='rounded-full p-3'
              onClick={() => setActive(type)}
            />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-2 grid-rows-2 gap-3'>
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
              className='max-h-[320px] object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default IMacProducts;
// .map((product) => (
//           <Image
//             src={`/png/home-assets/hero-assets/imac/${product}`}
//             alt={product}
//             width={240}
//             height={370}
//           />
//         ))
