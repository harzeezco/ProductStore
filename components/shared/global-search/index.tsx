import Image from 'next/image';
import React from 'react';
import { Input } from '@/components/ui/input';
import cn from '@/lib/utils';

function GlobalSearch({
  placeholder = '',
  width,
}: {
  placeholder?: string;
  width: string;
}) {
  return (
    <div className={cn('relative rounded-sm bg-gray-100', width)}>
      <Input
        placeholder={placeholder}
        className='border-none pl-3 outline-none'
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

GlobalSearch.defaultProps = {
  placeholder: 'What are you looking for?',
};

export default GlobalSearch;
