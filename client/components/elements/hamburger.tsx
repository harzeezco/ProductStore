'use client';

import React from 'react';
import { cn } from '@/client/lib/utils';

function Hamburger({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button
      type='button'
      className='relative h-16 w-16 cursor-pointer lg:hidden'
      onClick={() => setIsOpen(!isOpen)}
      aria-label='Toggle Menu'
      data-menu-toggle-btn
    >
      <div
        className={cn(
          'relative z-20 w-full burger',
          isOpen ? 'burgerActive' : '',
        )}
      />
    </button>
  );
}

export default Hamburger;
