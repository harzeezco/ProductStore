import Image from 'next/image';
import React from 'react';

function Bars({ label, icon }: { label: string; icon: string }) {
  return (
    <li
      key={label}
      className='flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-3 hover:bg-slate-50'
      style={{ marginBlock: '.3rem' }}
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
