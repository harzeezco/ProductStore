import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import useUser from '@/authentication/useUser';
import User from '@/components/elements/user';
import Button from '@/components/elements/button';
import { useRouter } from 'next/navigation';
import Logo from '@/components/elements/logo';
import GlobalSearch from '@/components/shared/global-search';
import Hamburger from '@/components/elements/hamburger';
import SideDrawer from '../../elements/drawer';
import Nav from './nav';

function Header() {
  const { isAuthenticated } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className='container-max-w flex items-center justify-between py-6'>
      <div className='flex items-center  gap-10'>
        <Logo
          srcForTextLogo='/png/shared-assets/logo-text.png'
          hasTextLogo={false}
        />
        <Nav />
      </div>

      <div className='fixed inset-y-0 left-0 z-50 min-h-screen lg:hidden'>
        <Transition
          show={isOpen}
          enter='transition ease-in-out duration-500 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <SideDrawer />
        </Transition>
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
          <Image
            src='/svg/cart-icon.svg'
            alt='cart'
            width={34}
            height={34}
          />

          {isAuthenticated ? (
            <User />
          ) : (
            <Button
              className='max-lg:hidden'
              onClick={() => router.push('/auth/log-in')}
              variant='primary'
            >
              Log In
            </Button>
          )}

          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
