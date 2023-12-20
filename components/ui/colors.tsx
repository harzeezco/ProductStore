import React from 'react';
import Tooltip from './tooltip';

function Colors({
  colors,
  setActive,
}: {
  colors: { type: string; color: string }[];
  setActive: (type: string) => void;
}) {
  return (
    <div className='flex flex-col gap-2'>
      {colors.map(({ color, type }) => (
        <Tooltip style={{ backgroundColor: color }} tooltipText={type}>
          <span
            role='button'
            aria-label='presentation'
            onClick={() => setActive(type)}
            onKeyDown={() => setActive(type)}
            tabIndex={-1}
            className='relative rounded-full p-3 transition-[1s] duration-75 ease-in'
            style={{ backgroundColor: color }}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default Colors;
