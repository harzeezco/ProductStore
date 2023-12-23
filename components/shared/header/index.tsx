import React from 'react';
import Image from 'next/image';
import useUser from '@/authentication/useUser';
import Logo from '../logo';
import GlobalSearch from '../global-search';
import Nav from './nav';
import Hamburger from '../hamburger';
import SideDrawer from '../side-drawer';

function Header() {
  const { user } = useUser();
  const userName = user?.user_metadata.name;

  return (
    <header className='container-max-w flex items-center justify-between py-6'>
      <div className='flex items-center gap-10'>
        <Logo
          srcForTextLogo='/png/shared-assets/logo-text.png'
          hasTextLogo={false}
        />
        <Nav />
      </div>
      <div className='flex items-center gap-10'>
        <GlobalSearch width='w-[300px]' className='max-md:hidden' />
        <div className='flex items-center gap-5'>
          <Image
            src='/svg/favorite-icon.svg'
            alt='favorite'
            width={30}
            height={30}
          />
          <Image src='/svg/cart-icon.svg' alt='cart' width={34} height={34} />
          <Hamburger />

          {userName && <h1>{userName}</h1>}
        </div>
      </div>
      <SideDrawer />
    </header>
  );
}

export default Header;
