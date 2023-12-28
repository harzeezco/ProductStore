import { cn } from '@/lib/utils';
import React from 'react';

function FeaturedTitle({
  title = '',
  className = '',
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-3 mb-5', className)}>
      <div className='h-8 w-4 rounded-sm bg-primary' />
      <p className='font-semibold text-primary'>{title}</p>
    </div>
  );
}

export default FeaturedTitle;
