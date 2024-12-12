import {useEffect, useState} from 'react';

export const useDebounce = (initialValue: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [initialValue, delay]);

  return debouncedValue;
};
