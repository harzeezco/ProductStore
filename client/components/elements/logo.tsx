import React from 'react';
import Link from 'next/link';
import { cn } from '@/client/lib/utils';
import NextImage from './next-image';

function Logo({
  srcForSymbolLogo = '/png/shared-assets/logo-symbol.png',
  srcForTextLogo = '',
  hasTextLogo = true,
}: {
  srcForSymbolLogo?: string;
  srcForTextLogo: string;
  hasTextLogo?: boolean;
}) {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <NextImage
        src={srcForSymbolLogo}
        alt='logo symbol'
        width={44}
        height={44}
      />
      <NextImage
        src={srcForTextLogo}
        alt='logo text'
        width={144}
        height={34}
        className={cn(hasTextLogo ? 'sm:block' : 'max-sm:hidden')}
      />
    </Link>
  );
}

export default Logo;
