import React from 'react';
import { HeaderNavLinks } from '@/client/lib/placeholders';
import NextLink from '@/client/components/elements/next-link';

function Nav() {
  return (
    <nav className='max-lg:hidden'>
      <ul className='flex items-center gap-9'>
        {HeaderNavLinks.map((navlink) => (
          <li key={navlink.href}>
            <NextLink {...navlink}>{navlink.label}</NextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
