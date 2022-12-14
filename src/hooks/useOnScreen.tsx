import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIndexClick, updateIndexId } from '../store/reducers/reportReducer';
import { ReducerType } from '../store/reducers';
import { css } from '@emotion/react';

const useOnScreen = option => {
  const dispatch = useDispatch();
  const ref = useRef();
  const childrenRef = useRef();
  const indexClick = useSelector<ReducerType, boolean>(state => state.report.indexClick);

  const callbackFunction = (entries, childrenRef) => {
    const [entry] = entries;

    if (entry.intersectionRatio === 1) {
      if (childrenRef.current) {
        childrenRef.current.style.overflowY = 'overlay';
      }
    } else {
      if (childrenRef.current) {
        entry.target.style.overflowY = 'hidden';
        childrenRef.current.style.overflowY = 'hidden';
      }
    }

    if (entry.isIntersecting && !indexClick) {
      dispatch(updateIndexId(entry.target.id));

      childrenRef?.current?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => callbackFunction(entries, childrenRef), option);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        dispatch(updateIndexClick(false));
        observer.unobserve(ref.current);
      }
    };
  }, [ref, childrenRef, option]);

  return [ref, childrenRef];
};

export default useOnScreen;
