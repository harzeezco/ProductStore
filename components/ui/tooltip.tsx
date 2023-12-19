import cn from '@/lib/utils';
import React from 'react';

function Tooltip({
  btnText,
  btnClasses,
  tooltipText,
  tooltipClasses,
  style,
  onClick,
}) {
  return (
    <button
      type='button'
      className='group relative inline-flex items-center justify-center rounded-lg p-0.5 text-sm font-medium text-gray-900 transition-all hover:text-white focus:outline-none focus:ring-4 focus:ring-primary'
      onClick={onClick}
    >
      <span
        className={cn(
          'relative rounded-full bg-white transition-[1s] duration-75 ease-in dark:bg-gray-900',
          btnClasses,
        )}
        style={style}
      >
        {btnText}
      </span>
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
    </button>
  );
}

export default Tooltip;
