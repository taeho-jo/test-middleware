import React, { useEffect, useRef } from 'react';

const useOnMultipleScreen = option => {
  const ref = useRef([]);
  const childrenRef = useRef([]);

  const callbackFunction = entries => {
    const [entry] = entries;
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
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

    let currentTarget;
    for (let i = 0; i < ref.current.length; i++) {
      currentTarget = ref.current[i];

      console.log(currentTarget, 'CURRENT TARGET');
      if (currentTarget) {
        observer.observe(currentTarget);
      }
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [ref, childrenRef]);

  return [ref];
};

export default useOnMultipleScreen;
