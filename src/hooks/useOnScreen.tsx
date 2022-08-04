import React, { useEffect, useRef } from 'react';

const useOnScreen = option => {
  const ref = useRef();
  const childrenRef = useRef();

  const callbackFunction = (entries, childrenRef) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log(entry, 'ENTRY');
      console.log(entry.target.id, 'TARGET ID');
      childrenRef?.current?.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => callbackFunction(entries, childrenRef), option);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, childrenRef, option]);

  return [ref, childrenRef];
};

export default useOnScreen;
