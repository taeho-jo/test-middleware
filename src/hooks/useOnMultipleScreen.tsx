import React, { useEffect, useRef } from 'react';
import { updateIndexId } from '../store/reducers/reportReducer';
import { useDispatch } from 'react-redux';

const useOnMultipleScreen = option => {
  const dispatch = useDispatch();
  const ref = useRef([]);
  const childrenRef = useRef([]);

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dispatch(updateIndexId(entry.target.id));
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

      if (currentTarget) {
        observer.observe(currentTarget);
      }
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [ref, childrenRef, option]);

  return [ref, childrenRef];
};

export default useOnMultipleScreen;
