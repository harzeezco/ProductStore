import React, { ComponentProps } from 'react';
import Link from 'next/link';
import { cn } from '@/client/lib/utils';

function NextLink(props: ComponentProps<typeof Link>) {
  const {
    href = '',
    children,
    className = '',
    ...otherProps
  } = props;

  return (
    <Link
      className={cn(
        'underline-link relative transition-all hover:text-primary',
        className,
      )}
      {...otherProps}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NextLink;
