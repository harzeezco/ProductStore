import React from 'react';
import { HeaderNavLinks } from '@/lib/placeholders/shared-placeholder';
import NavLink from '../link';

function Nav() {
  return (
    <nav className='max-lg:hidden'>
      <ul className='flex items-center gap-9'>
        {HeaderNavLinks.map((navlink) => (
          <NavLink key={navlink.href} {...navlink} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
