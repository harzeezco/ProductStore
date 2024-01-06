'use client';

import { cn } from '@/client/lib/utils';
import { useActive } from '../../../providers/hero-context.provider';
import Image from 'next/image';
import React from 'react';

function Bars({ label, icon }: { label: string; icon: string }) {
  const { active, setActive } = useActive();

  return (
    <li>
      <button
        type='button'
        key={label}
        aria-label={`${label} bar`}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-3 hover:bg-slate-50',
          active === label ? 'bg-slate-50' : '',
        )}
        style={{ marginBlock: '.3rem' }}
        onClick={() => setActive(label)}
      >
        <Image
          src={`/svg/${icon}`}
          alt={label}
          width={24}
          height={24}
        />

        <p className='grow justify-self-start text-gray-500 max-md:hidden'>
          {label}
        </p>

        <Image
          src={
            active === label
              ? '/svg/folder-open.svg'
              : '/svg/folder.svg'
          }
          alt='folder'
          width={24}
          height={24}
          className='ml-8 max-md:hidden'
        />
      </button>
    </li>
  );
}

export default Bars;
