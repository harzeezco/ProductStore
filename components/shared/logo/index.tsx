import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from '@/lib/utils';

function Logo({
  srcForSymbolLogo = '',
  srcForTextLogo = '',
  hasTextLogo = true,
}: {
  srcForSymbolLogo?: string;
  srcForTextLogo: string;
  hasTextLogo?: boolean;
}) {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <Image src={srcForSymbolLogo} alt='logo symbol' width={44} height={44} />
      <Image
        src={srcForTextLogo}
        alt='logo text'
        width={144}
        height={34}
        className={cn(hasTextLogo ? 'sm:block' : 'max-sm:hidden')}
      />
    </Link>
  );
}

Logo.defaultProps = {
  srcForSymbolLogo: '/png/shared/logo-symbol.png',
  hasTextLogo: true,
};

export default Logo;
