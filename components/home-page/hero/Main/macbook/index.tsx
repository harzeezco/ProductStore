import BoxChip from '@/components/ui/box-chip';
import Button from '@/components/ui/button';
import PricingFavorite from '@/components/ui/price-fav';

import { MacBookProduct } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React, { useState } from 'react';
import MacBookColors from './macbook-colors';

const chips = [
  {
    id: 1,
    type: 'With M2 chip',
    radius: 'rounded-l-2xl',
  },
  {
    id: 2,
    type: 'With M3 chip',
    radius: 'rounded-r-2xl',
  },
];

function MacBookProducts() {
  const [active, setActive] = useState(1);
  const [color, setColor] = useState(0);

  function handleClick(id: number) {
    setActive(id);
    setColor(id);
  }

  return (
    <section className='h-full py-7'>
      <div className='flex justify-center'>
        {chips.map((items) => (
          <BoxChip
            key={items.id}
            active={active}
            {...items}
            onClick={handleClick}
          />
        ))}
      </div>

      <div className='mt-4 flex justify-center'>
        {MacBookProduct.filter((product) => product.id === active).map(
          ({ img, name, id, discount, colors, price, description }) => (
            <div key={id} className='flex flex-col items-center max-md:px-6'>
              <Image
                src={`/png/home-assets/hero-assets/${img[color]}`}
                alt=''
                width={240}
                height={370}
              />
              <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <PricingFavorite
                  discount={discount}
                  price={price}
                  className='mb-2 mt-1'
                />
                <div className='flex w-fit items-center gap-2'>
                  <span className='font-medium'>Colors:</span>
                  <MacBookColors colors={colors} setColor={setColor} />
                </div>
                <ul className='my-4 flex flex-col'>
                  {description.map((list) => (
                    <li>✔ {list}</li>
                  ))}
                </ul>
                <Button onClick={() => {}}>Buy Now</Button>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default MacBookProducts;
