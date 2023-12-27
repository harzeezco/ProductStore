import React, { ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  tooltipText?: string;
  style?: {};
};

function Tooltip({
  children,
  tooltipText,
  style,
}: TooltipProps) {
  return (
    <div
      className='group relative inline-flex items-center justify-center rounded-lg p-0.5 text-sm font-medium text-gray-900 transition-all hover:text-white focus:outline-none focus:ring-4 focus:ring-primary'
    >
      {children}
      <div className='hidden group-hover:block'>
        <div className='group absolute left-full top-1/2 z-50 flex -translate-y-1/2 items-center rounded-sm text-center text-sm text-white transition-all before:-top-2'>
          <span
            className='ml-2 h-6 w-4 -rotate-90'
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              ...style,
            }}
          />
          <div className='rounded-sm px-2 py-1' style={{ ...style }}>
            <p className='whitespace-nowrap'>{tooltipText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
