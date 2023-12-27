import React from 'react';
import Tooltip from '../../../../elements/tooltip';

function ImacColors({
  colors,
  setActive,
}: {
  colors: { name: string; hexColor: string }[];
  setActive: (type: string) => void;
}) {
  return (
    <div className='flex flex-col gap-2'>
      {colors.map(({ name, hexColor }) => (
        <Tooltip background={hexColor} tooltipText={name}>
          <button
            type='button'
            aria-label='color'
            onClick={() => setActive(name)}
            className='rounded-full p-3 transition-[1s] duration-75 ease-in'
            style={{ backgroundColor: hexColor }}
          />
        </Tooltip>
      ))}
    </div>
  );
}

export default ImacColors;
