import React from 'react';
import Tooltip from '@/components/elements/tooltip';

function MacBookColors({
  colors,
  setColor,
}: {
  colors: { name: string; hexColor: string }[];
  setColor: (idx: number) => void;
}) {
  return (
    <>
      {colors.map(({ name, hexColor }, idx) => (
        <Tooltip
          background={hexColor}
          tooltipText={name}
          position='top'
          pointer='top'
        >
          <button
            type='button'
            aria-label={`${name} color`}
            className='rounded-full p-3'
            style={{ background: hexColor }}
            onClick={() => setColor(idx)}
          />
        </Tooltip>
      ))}
    </>
  );
}

export default MacBookColors;
