import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ComponentProps } from 'react';

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
