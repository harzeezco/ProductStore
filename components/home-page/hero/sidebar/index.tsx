import React from 'react';
import { SideLinks } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import Bars from './bars';

function Sidebar() {
  return (
    <aside className='grid place-items-center bg-gray-100'>
      <Image
        src='/png/home-assets/hero-assets/sale-shape.png'
        alt='get up to 50% off now'
        width={120}
        height={120}
        className='abs-img mt-4'
      />
      <nav>

    <aside className='sticky inset-y-0 left-0 h-[79.5vh] bg-gray-100'>
      <nav className='mt-10'>
        <ul className='grid h-full'>
          {SideLinks.map((bars) => (
            <Bars key={bars.label} {...bars} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
