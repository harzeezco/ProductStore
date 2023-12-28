import React from 'react';
import { cn } from '@/lib/utils';

type MacbookTabProps = {
  id: number;
  radius: string;
  active: number;
  onClick: (id: number) => void;
  type: string;
};

function MacbookTab({
  id,
  radius,
  active,
  onClick,
  type,
}: MacbookTabProps) {
  return (
    <div
      key={id}
      className={cn(
        `cursor-pointer border-[1.5px] border-solid px-5 py-3 transition-all hover:bg-slate-300 ${radius}`,
        active === id ? 'bg-slate-300' : '',
      )}
      onClick={() => onClick(id)}
      onKeyDown={() => onClick(id)}
      role='button'
      tabIndex={-1}
    >
      <span className='font-medium'>{type}</span>
    </div>
  );
}

export default MacbookTab;
