import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo({
  srcForSymbolLogo = '',
  srcForTextLogo = '',
}: {
  srcForSymbolLogo?: string;
  srcForTextLogo: string;
}) {
  return (
    <Link href='/' className='flex items-center gap-3'>
      <Image src={srcForSymbolLogo} alt='logo symbol' width={44} height={44} />
      <Image src={srcForTextLogo} alt='logo text' width={144} height={34} />
    </Link>
  );
}

Logo.defaultProps = {
  srcForSymbolLogo: '/png/shared/logo-symbol.png',
};

export default Logo;
