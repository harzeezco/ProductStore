'use client';

import React, { useState } from 'react';
import Button from '@/client/components/elements/button';
import ColorPalette from '@/client/pages/home/components/elements/color-palette';
import ImacCard from '@/client/pages/home/components/elements/cards/imac-card';

const colors: { name: string; hexColor: string }[] = [
  {
    name: 'green',
    hexColor: '#10505b',
  },
  {
    name: 'yellow',
    hexColor: '#d48207',
  },
  {
    name: 'orange',
    hexColor: '#e36942',
  },
  {
    name: 'pink',
    hexColor: '#b72c31',
  },
  {
    name: 'purple',
    hexColor: '#353a71',
  },
  {
    name: 'silver',
    hexColor: '#c7c8ca',
  },
];

function IMacProducts() {
  const [activeColor, setActiveColor] = useState('yellow');

  return (
    <section className='relative h-full bg-white'>
      <Button className='absolute left-0 top-0' onClick={() => {}}>
        Buy Now
      </Button>
      <div className='absolute left-4 top-1/2 -translate-y-1/2'>
        <ColorPalette
          colors={colors}
          className='flex-col'
          setActiveColor={setActiveColor}
        />
      </div>
      <div className='grid h-full grid-cols-2 grid-rows-2 gap-3'>
        <ImacCard active={activeColor} />
      </div>
    </section>
  );
}

export default IMacProducts;
