'use client';

import { useEffect } from 'react';
import moment from 'moment';
import useLocalStorage from '../../../../hooks/useLocalStorage';

function useCountDown(countDownKey = 'flashSaleCountdown') {
  const [countDown, setCountDown] = useLocalStorage(
    countDownKey,
    moment.duration(3, 'days'),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevDuration: string) => {
        const newDuration = moment.duration(prevDuration);
        newDuration.subtract(1, 'second');
        return newDuration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setCountDown]);

  useEffect(() => {
    if (countDown.asSeconds() <= 0) {
      setCountDown(() => moment.duration(3, 'days'));
    }
  }, [countDown, setCountDown]);

  if (!countDown) {
    throw new Error('Count down cannot be found');
  }

  return { countDown };
}

export default useCountDown;
