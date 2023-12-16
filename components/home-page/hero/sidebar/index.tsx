import React from 'react';
import { SideLinks } from '@/lib/placeholders/home/hero-placeholder';
import Bars from './bars';

function Sidebar() {
  return (
    <aside className='grid place-items-center bg-gray-100'>
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
