import React, { useEffect, useRef } from 'react';

const useOnMultipleScreen = option => {
  const ref = useRef([]);
  const childrenRef = useRef([]);

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log(entry, 'ENTRY');
      console.log(entry.target.id, 'ID');
      for (let i = 0; i < childrenRef.current.length; i++) {
        childrenRef?.current[i]?.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => callbackFunction(entries), option);
    // const observer2 = new IntersectionObserver(entries => callbackFunction2(entries), option);
    console.log('이거 안찍힘???????????????');
    let currentTarget; // let currentTarget2;
    console.log('asdasd', ref);

    for (let i = 0; i < ref.current.length; i++) {
      currentTarget = ref.current[i];

      if (currentTarget) {
        observer.observe(currentTarget);
      }
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [ref, childrenRef, option]);

  return [ref, childrenRef];
};

export default useOnMultipleScreen;
