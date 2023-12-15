import React from 'react';
import { HeaderNavLinks } from '@/lib/placeholders/shared-placeholder';
import Logo from '../logo';
import NavLink from '../header/link';
import GlobalSearch from '../global-search';

function SideDrawer() {
  return (
    <div
      className='fixed inset-y-0 -left-full min-h-full rounded-tl-[2rem] bg-gray-100 p-7'
      style={{ border: '0.1rem solid #c0c0c0' }}
    >
      <Logo srcForTextLogo='/png/shared/logo-text.png' hasTextLogo />

      <nav className='mb-7 mt-10' style={{ borderTop: '0.1rem solid #c0c0c0' }}>
        <ul className='mt-5 flex flex-col items-center gap-9'>
          {HeaderNavLinks.map((navlink) => (
            <NavLink key={navlink.href} {...navlink} />
          ))}
        </ul>
      </nav>

      <GlobalSearch
        width=''
        placeholder='Search for product...'
        className='rounded-3xl bg-gray-200 pl-3'
      />
    </div>
  );
}

export default SideDrawer;
