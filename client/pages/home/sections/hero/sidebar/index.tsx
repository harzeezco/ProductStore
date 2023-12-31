import React from 'react';
import NextImage from '@/client/components/elements/next-image';
import { SideLinks } from '../../../lib/placeholders';
import Bars from './bars';

function Sidebar({
  active,
  setActive,
}: {
  active: string;
  setActive: (active: string) => void;
}) {
  return (
    <aside className='sticky inset-y-0 left-0 grid h-[79.5vh] place-items-center bg-gray-100'>
      <NextImage
        src='/png/home-assets/hero-assets/sale-shape.png'
        alt='get up to 50% off now'
        width={120}
        height={120}
        className='abs-img mt-4 max-md:hidden'
      />

      <nav>
        <ul className='grid h-full'>
          {SideLinks.map((bars) => (
            <Bars
              key={bars.label}
              {...bars}
              setActive={setActive}
              active={active}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
