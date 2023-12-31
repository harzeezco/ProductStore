import { useEffect, useState } from 'react';
import moment from 'moment';

function useLocalStorage(key: string, defaultValue: any) {
  const [storage, setStorage] = useState(() => {
    const getStorage = window.localStorage.getItem(key);
    if (getStorage) {
      try {
        const parsedValue = JSON.parse(getStorage);
        const isValidDuration = moment.isDuration(parsedValue);
        return isValidDuration ? parsedValue : defaultValue;
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function'
      ? defaultValue()
      : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [storage, key]);

  return [storage, setStorage];
}

export default useLocalStorage;
