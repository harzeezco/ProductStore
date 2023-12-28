'use client';

import useCountDown from '@/hooks/useCountDown';
import { countDownData } from '@/lib/utils';
import React from 'react';

function CountdownTimer() {
  const { countDown } = useCountDown();

  const getCountDown = countDownData(countDown);

  return (
    <ul className='flex gap-5'>
      {getCountDown.map(({ type, formatter, hasColon }) => (
        <li className='flex items-center gap-4' key={type}>
          <div className='flex flex-col items-center'>
            <small className='font-medium'>{type}</small>
            <p className='font-inter text-[32px] font-bold tracking-widest'>
              {formatter}
            </p>
          </div>
          {hasColon && (
            <span className='text-xl font-bold text-primary'>:</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CountdownTimer;
