import Button from '@/components/ui/button';
import { iMacProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React, { useState } from 'react';

function IMacProducts() {
  const [active, setActive] = useState('yellow');

  return (
    <section className='h-full bg-white'>
      <div className='grid grid-cols-2 grid-rows-2'>
        {iMacProducts[active].map((product) => (
          <div
            style={{ gridColumn: product.gridCol, gridRow: product.gridRow }}
          >
            <Image
              src={`/png/home-assets/hero-assets/imac/${product.img}`}
              alt={product.alt}
              width={240}
              height={370}
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
