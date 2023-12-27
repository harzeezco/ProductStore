import React from 'react';
import cn from '@/lib/utils';
import Tooltip from './tooltip';

function ColorPalette({
  colors,
  setActiveColor,
  className = '',
  tooltip = {},
}: {
  colors: { name: string; hexColor: string }[];
  setActiveColor: (id: any) => void;
  className: string;
  tooltip?: {};
}) {
  return (
    <div className={cn('flex gap-2', className)}>
      {colors.map(({ name, hexColor }, idx) => (
        <Tooltip
          background={hexColor}
          tooltipText={name}
          {...tooltip}
        >
          <button
            type='button'
            aria-label='color'
            onClick={() => setActiveColor(idx)}
            className='rounded-full p-3 transition-[1s] duration-75 ease-in'
            style={{ backgroundColor: hexColor }}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default ColorPalette;
