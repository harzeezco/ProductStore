import React from 'react';
import { useRouter } from 'next/navigation';
import { HeaderNavLinks } from '@/lib/placeholders/shared-placeholder';
import Button from '@/components/ui/button';
import useUser from '@/authentication/useUser';
import Logo from '../logo';
import NavLink from '../header/link';
import GlobalSearch from '../global-search';

function SideDrawer() {
  const router = useRouter();
  const { isAuthenticated } = useUser();

  return (
    <div
      className='min-h-screen rounded-tl-[2rem] bg-gray-100 p-7'
      style={{ border: '0.1rem solid #c0c0c0' }}
    >
      <Logo srcForTextLogo='/png/shared/logo-text.png' hasTextLogo />

      <nav className='mb-7 mt-10' style={{ borderTop: '0.1rem solid #c0c0c0' }}>
        <ul className='mt-5 flex flex-col items-start gap-9'>
          {HeaderNavLinks.map((navlink) => (
            <NavLink key={navlink.href} {...navlink} />
          ))}
        </ul>
      </nav>

      {!isAuthenticated && (
        <Button
          className='w-full rounded-md'
          onClick={() => router.push('/auth/log-in')}
          variant='primary'
        >
          Log In
        </Button>
      )}

      <GlobalSearch
        width=''
        placeholder='Search for product...'
        className='mt-10 rounded-3xl bg-gray-200 pl-3'
      />
    </div>
  );
}

export default SideDrawer;
