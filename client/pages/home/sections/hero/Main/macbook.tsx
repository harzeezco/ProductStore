import React, { useState } from 'react';
import Button from '@/client/components/elements/button';
import ProductTag from '@/client/components/elements/products/product-tag';
import NextImage from '@/client/components/elements/next-image';

import ColorPalette from '@/client/pages/home/components/elements/color-palette';
import { MacBookProduct } from '@/client/pages/home/lib/placeholders';
import { cn } from '@/client/lib/utils';

type MacbookTabProps = {
  id: number;
  radius: string;
  active: number;
  onClick: (id: number) => void;
  type: string;
};

function MacbookTab({
  id,
  radius,
  active,
  onClick,
  type,
}: MacbookTabProps) {
  return (
    <div
      key={id}
      className={cn(
        `cursor-pointer border-[1.5px] border-solid px-5 py-3 transition-all hover:bg-slate-300 ${radius}`,
        active === id ? 'bg-slate-300' : '',
      )}
      onClick={() => onClick(id)}
      onKeyDown={() => onClick(id)}
      role='button'
      tabIndex={-1}
    >
      <span className='font-medium'>{type}</span>
    </div>
  );
}

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
              <NextImage
                src={`/png/home-assets/hero-assets/${img[activeColor]}`}
                alt=''
                width={240}
                height={370}
              />
              <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <ProductTag
                  discount={discount}
                  price={price}
                  className='mb-2 mt-1'
                />
                <div className='flex w-fit items-center gap-2'>
                  <span className='font-medium'>Colors:</span>
                  <ColorPalette
                    colors={colors}
                    className='flex-row'
                    tooltip={{ position: 'top', pointer: 'top' }}
                    setActiveMacColor={setActiveColor}
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
