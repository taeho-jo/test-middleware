import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateIndexId } from '../store/reducers/reportReducer';

const useOnScreen = option => {
  const dispatch = useDispatch();
  const ref = useRef();
  const childrenRef = useRef();

  const callbackFunction = (entries, childrenRef) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dispatch(updateIndexId(entry.target.id));
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
