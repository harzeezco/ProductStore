import Image from 'next/image';
import React from 'react';
import { cn } from '@/client/lib/utils';
import { Input } from '@/client/components/forms/input';

function GlobalSearch({
  placeholder = 'What are you looking for?',
  width = '',
  className = '',
}: {
  placeholder?: string;
  width: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative rounded-sm bg-gray-100',
        width,
        className,
      )}
    >
      <Input
        placeholder={placeholder}
        className='border-none pl-3 outline-none placeholder:text-gray-300'
      />
      <button type='button' className='absolute right-2 top-2'>
        <Image
          src='/svg/search-icon.svg'
          alt='Search icon'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default GlobalSearch;
