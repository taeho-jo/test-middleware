import { RefObject, useCallback, useEffect, useRef } from 'react';

type DOMRectProperty =
  | 'height'
  | 'width'
  | 'x'
  | 'y'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';

export const useGetElementProperty = <T extends HTMLElement>(
  elementRef: RefObject<T>,
) => {
  const getElementProperty = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect();

      if (clientRect) {
        return clientRect[targetProperty];
      }

      return 0;
    },
    [elementRef],
  );

  return {
    getElementProperty,
  };
};

export default useGetElementProperty;
