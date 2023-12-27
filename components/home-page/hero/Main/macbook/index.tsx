'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/elements/button';
import PricingFavorite from '@/components/elements/product-tag';

import { MacBookProduct } from '@/lib/placeholders/home/hero-placeholder';
import ColorPalette from '@/components/elements/color-palette';
import MacbookTab from './macbook-tab';

const tabs = [
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
  const [activeTab, setActiveTab] = useState(1);
  const [activeColor, setActiveColor] = useState(0);

  function handleClick(id: number) {
    setActiveTab(id);
    setActiveColor(id);
  }

  function handleActiveColor(id: number) {
    setActiveColor(id);
  }

  return (
    <section className='h-full py-7'>
      <div className='flex justify-center'>
        {tabs.map((items) => (
          <MacbookTab
            key={items.id}
            active={activeTab}
            {...items}
            onClick={handleClick}
          />
        ))}
      </div>

      <div className='mt-4 flex justify-center'>
        {MacBookProduct.filter(
          (product) => product.id === activeTab,
        ).map(
          ({
            img,
            name,
            id,
            discount,
            colors,
            price,
            description,
          }) => (
            <div
              key={id}
              className='flex flex-col items-center max-md:px-6'
            >
              <Image
                src={`/png/home-assets/hero-assets/${img[activeColor]}`}
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
                  <ColorPalette
                    colors={colors}
                    setActiveColor={handleActiveColor}
                    className='flex-row'
                    tooltip={{ position: 'top', pointer: 'top' }}
                  />
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
