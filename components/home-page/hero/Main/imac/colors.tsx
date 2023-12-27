import React from 'react';
import Tooltip from '../../../../ui/tooltip';

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
          <button
            type='button'
            aria-label='color'
            onClick={() => setActive(type)}
            className='relative rounded-full p-3 transition-[1s] duration-75 ease-in'
            style={{ backgroundColor: color }}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default Colors;
