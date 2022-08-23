import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<any>, callback: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    };

    window.addEventListener('mousedown', listener);

    return () => window.removeEventListener('mousedown', listener);
    // eslint-disable-next-line
  }, []);
};

export default useOutsideClick;
