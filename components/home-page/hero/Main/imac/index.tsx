import Button from '@/components/ui/button';
import { iMacProducts } from '@/lib/placeholders/home/hero-placeholder';
import cn from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

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

function IMacProducts() {
  const [active, setActive] = useState(1);
  const [color, setColor] = useState(0);

  function handleClick(id: number) {
    setActive(id);
    setColor(id);
  }

  return (
    <section className='h-full py-7'>
      <div className='flex justify-center'>
        {chips.map((chip) => (
          <div
            className={cn(
              `cursor-pointer border-[1.5px] border-solid px-5 py-3 transition-all hover:bg-slate-300 ${chip.radius}`,
              active === chip.id ? 'bg-slate-300' : '',
            )}
            onClick={() => handleClick(chip.id)}
            onKeyDown={() => handleClick(chip.id)}
            role='button'
            tabIndex={-1}
          >
            <span className='font-medium'>{chip.type}</span>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center'>
        {iMacProducts
          .filter((product) => product.id === active)
          .map((product) => (
            <div key={product.id} className='flex items-center gap-10'>
              <Image
                src={`/png/home-assets/hero-assets/${product.img[color]}`}
                alt=''
                width={240}
                height={370}
              />
              <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold'>{product.name}</h1>
                <div className='flex gap-1.5'>
                  <span className='text-lg font-bold text-primary'>{`${product.discount}$`}</span>
                  <span className='text-base font-semibold text-gray-300 line-through'>{`${product.price}$`}</span>
                </div>
                <div className='flex w-fit items-center gap-2'>
                  <span className='text-xl'>Colors:</span>
                  {product.colors.map((colorType, idx) => (
                    <div>
                      <button
                        type='button'
                        aria-label='presentation'
                        className='rounded-full p-3'
                        style={{ background: colorType.color }}
                        onClick={() => setColor(idx)}
                      />
                    </div>
                  ))}
                </div>
                <ul className='my-4 flex flex-col'>
                  {product.description.map((description) => (
                    <li>✔ {description}</li>
                  ))}
                </ul>
                <Button variant='primary'>Buy Now</Button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default IMacProducts;
