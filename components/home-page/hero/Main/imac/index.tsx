import Button from '@/components/ui/button';
import { iMacProducts } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React, { useState } from 'react';

function IMacProducts() {
  const [active, setActive] = useState('yellow');

  return (
    <section className='h-full py-7'>
      {iMacProducts[active].map((product) => (
        <Image
          src={`/png/home-assets/hero-assets/imac/${product.img}`}
          alt={product.alt}
          width={240}
          height={370}
        />
      ))}
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
