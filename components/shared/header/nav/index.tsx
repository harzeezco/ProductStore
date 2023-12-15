import React from 'react';
import { HeaderNavLinks } from '@/lib/lib';
import NavLink from '../link';

function Nav() {
  return (
    <nav>
      <ul className='flex items-center gap-9'>
        {HeaderNavLinks.map((navlink) => (
          <NavLink key={navlink.href} {...navlink} />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
