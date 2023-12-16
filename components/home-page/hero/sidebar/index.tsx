import { SideLinks } from '@/lib/placeholders/home/hero-placeholder';
import Image from 'next/image';
import React from 'react';

function Sidebar() {
  return (
    <aside className='sticky inset-y-0 left-0 h-[79.5vh] bg-gray-100'>
      <nav className='mt-10'>
        <ul className='grid h-full'>
          {SideLinks.map((links) => (
            <li
              key={links.label}
              className='flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 hover:bg-slate-50'
              style={{ marginBlock: '.3rem' }}
            >
              <Image
                src={`/svg/${links.icon}`}
                alt={links.label}
                width={24}
                height={24}
              />
              <p className='grow justify-self-start text-gray-500'>
                {links.label}
              </p>
              <Image
                src='/svg/folder.svg'
                alt='folder'
                width={24}
                height={24}
                className='ml-8'
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
