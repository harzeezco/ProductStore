import Button from '@/components/ui/button';
import Colors from '@/components/ui/colors';
import React, { useState } from 'react';
import ImacCard from '../cards/imac-card';

const Color = [
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
        <Colors colors={Color} setActive={setActive} />
      </div>
      <div className='grid h-full grid-cols-2 grid-rows-2 gap-3'>
        <ImacCard active={active} />
      </div>
    </section>
  );
}

export default IMacProducts;
