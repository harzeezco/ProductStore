'use client';

import Image from 'next/image';
import React, { ComponentProps, useState } from 'react';
import { cn } from '@/lib/utils';

// ref: hackernoon.com/creating-effective-and-optimized-nextjs-reusable-components

function NextImage(props: ComponentProps<typeof Image>) {
  const [isLoading, setIsLoading] = useState(true);
  const { src, className } = props;

  return (
    <Image
      priority
      {...props}
      src={src}
      className={cn(
        'duration-700 ease-in-out',
        isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0',
        className,
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
}

export default NextImage;
