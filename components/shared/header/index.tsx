import React from 'react';
import Image from 'next/image';
import Logo from '../logo';
import GlobalSearch from '../global-search';
import Nav from './nav';

function Header() {
  return (
    <header className='flex items-center justify-between py-6'>
      <div className='flex items-center gap-10'>
        <Logo srcForTextLogo='/png/shared/logo-text.png' />
        <Nav />
      </div>
      <div className='flex items-center gap-10'>
        <GlobalSearch width='w-[300px]' />
        <div className='flex items-center gap-5'>
          <Image
            src='/svg/favorite-icon.svg'
            alt='favorite'
            width={30}
            height={30}
          />
          <Image src='/svg/cart-icon.svg' alt='cart' width={34} height={34} />
        </div>
      </div>
    </header>
  );
}

export default Header;
