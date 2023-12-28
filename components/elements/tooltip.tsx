import cn from '@/lib/utils';
import React, { ReactNode } from 'react';

const positions = {
  top: '-top-full -translate-y-1/2 -left-1/2 -translate-x-2 flex-col',
  bottom: '',
  right: '',
  left: '-translate-y-1/2 left-full top-1/2',
};

const pointers = {
  top: 'order-2 -rotate-180',
  bottom: '',
  right: '',
  left: '-rotate-90 ml-1',
};

type TooltipTypes = {
  children: ReactNode;
  tooltipText?: string;
  className?: string;
  background?: string;
  position?: keyof typeof positions;
  pointer?: keyof typeof pointers;
};

function Tooltip({
  children,
  tooltipText,
  background = '',
  className = '',
  position = 'left',
  pointer = 'left',
}: TooltipTypes) {
  return (
    <div
      className={cn(
        'group relative inline-flex items-center justify-center rounded-lg p-0.5 text-sm font-medium transition-all hover:text-white focus:outline-none focus:ring-4 focus:ring-primary w-fit',
        className,
      )}
    >
      {children}
      <div className='hidden group-hover:block'>
        <div
          className={cn(
            'group absolute z-50 flex items-center rounded-sm text-center text-sm text-white transition-all',
            positions[position],
          )}
        >
          <span
            className={cn('h-5 w-4', pointers[pointer])}
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background,
            }}
          />
          <div
            className='rounded-sm px-2 py-1'
            style={{ background }}
          >
            <p className='whitespace-nowrap'>{tooltipText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
