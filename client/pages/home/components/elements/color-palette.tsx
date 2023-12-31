import React from 'react';
import { cn } from '@/client/lib/utils';
import Tooltip from '../../../../components/elements/tooltip';

function ColorPalette({
  colors,
  className = '',
  tooltip = {},
  setActiveColor,
  setActiveMacColor,
}: {
  colors: { name: string; hexColor: string }[];
  setActiveColor?: (name: string) => void;
  setActiveMacColor?: (id: number) => void;
  className: string;
  tooltip?: {};
}) {
  function handleClick(name: string, idx: number) {
    if (setActiveColor) {
      setActiveColor!(name);
    }

    if (setActiveMacColor) {
      setActiveMacColor!(idx);
    }
  }

  return (
    <div className={cn('flex gap-2', className)}>
      {colors.map(({ name, hexColor }, idx) => (
        <Tooltip
          key={name}
          background={hexColor}
          tooltipText={name}
          {...tooltip}
        >
          <button
            type='button'
            aria-label={`${name} color`}
            onClick={() => handleClick(name, idx)}
            className='rounded-full p-3 transition-[1s] duration-75 ease-in'
            style={{ backgroundColor: hexColor }}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default ColorPalette;
