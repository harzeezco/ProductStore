import React from 'react';

function MacBookColors({ colors, setColor }) {
  return (
    <>
      {' '}
      {colors.map((colorType, idx) => (
        <div>
          <button
            type='button'
            aria-label='presentation'
            className='rounded-full p-3'
            style={{ background: colorType.color }}
            onClick={() => setColor(idx)}
          />
        </div>
      ))}
    </>
  );
}

export default MacBookColors;
