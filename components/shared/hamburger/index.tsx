'use client';

import React, { useState } from 'react';
import cn from '@/lib/utils';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      type='button'
      className='relative h-16 w-16 cursor-pointer lg:hidden'
      onClick={() => setIsOpen(!isOpen)}
      aria-label='menu'
    >
      <div
        className={
          cn('relative z-20 w-full burger', isOpen ? 'burgerActive' : '')
        }
      />
    </button>
  );
}

export default Hamburger;
