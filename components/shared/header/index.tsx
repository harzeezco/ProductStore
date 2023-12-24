import React from 'react';
import Image from 'next/image';
import useUser from '@/authentication/useUser';
import User from '@/components/ui/user';
import Logo from '../logo';
import GlobalSearch from '../global-search';
import Nav from './nav';
import Hamburger from '../hamburger';
import SideDrawer from '../side-drawer';
import Logout from '../log-out';

function Header() {
  const { user, isAuthenticated } = useUser();
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

          {isAuthenticated && <User />}
        </div>
      </div>
      <SideDrawer />
    </header>
  );
}

export default Header;
