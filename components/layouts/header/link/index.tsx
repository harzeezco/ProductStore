import Link from 'next/link';
import React from 'react';

function NavLink({ href, label }: { href: string; label?: string }) {
  return (
    <li className='underline-link relative transition-all hover:text-primary'>
      <Link href={href}>{label}</Link>
    </li>
  );
}

NavLink.defaultProps = {
  label: '',
};

export default NavLink;
