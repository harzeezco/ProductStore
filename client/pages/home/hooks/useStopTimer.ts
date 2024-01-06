'use client';

import { useEffect, useState } from 'react';
import moment, { Duration } from 'moment';

interface UseCountDownResult {
  countDown: Duration;
}

function useStopTimer() {
  const storedCountDownString = localStorage.getItem('countDown');
  const initialCountDown = storedCountDownString
    ? moment.duration(JSON.parse(storedCountDownString))
    : moment.duration(3, 'days');

  const [countDown, setCountDown] = useState(initialCountDown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prevDuration: Duration) => {
        const newDuration = moment.duration(prevDuration);
        newDuration.subtract(1, 'second');
        return newDuration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setCountDown]);

  useEffect(() => {
    localStorage.setItem('countDown', JSON.stringify(countDown));
  }, [countDown]);

  useEffect(() => {
    if (countDown.asSeconds() <= 0) {
      setCountDown(moment.duration(3, 'days'));
    }
  }, [countDown, setCountDown]);

  if (!countDown) {
    throw new Error('Countdown cannot be found');
  }

  return { countDown } as UseCountDownResult;
}

export default useStopTimer;
