import cn from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

function Bars({
  label,
  icon,
  setActive,
  active,
}: {
  label: string;
  icon: string;
  active: string;
  setActive: (active: string) => void;
}) {
  return (
    <li
      key={label}
      className={cn(
        'flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-3 hover:bg-slate-50',
        active === label ? 'bg-slate-50' : '',
      )}
      style={{ marginBlock: '.3rem' }}
      onClick={() => setActive(label)}
      onKeyDown={() => setActive(label)}
      tabIndex={-1}
    >
      <Image src={`/svg/${icon}`} alt={label} width={24} height={24} />
      <p className='grow justify-self-start text-gray-500'>{label}</p>
      <Image
        src='/svg/folder.svg'
        alt='folder'
        width={24}
        height={24}
        className='ml-8'
      />
    </li>
  );
}

export default Bars;
