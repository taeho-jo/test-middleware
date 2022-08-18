import React, { useEffect, useRef } from 'react';
import { updateIndexId } from '../store/reducers/reportReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../store/reducers';

const useOnMultipleScreen = option => {
  const dispatch = useDispatch();
  const ref = useRef([]);
  const childrenRef = useRef([]);
  const showingSectionId = useSelector<ReducerType, any>(state => state.report?.indexId);

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      dispatch(updateIndexId(entry.target.id));

      for (let i = 0; i < childrenRef.current.length; i++) {
        childrenRef?.current[i]?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  };

  const callbackFunction2 = entries => {
    const [entry] = entries;

    entry.target.style.overflowY = 'hidden';

    if (entry.isIntersecting) {
      const id = entry.target.id;
      const a = document.getElementById(id);
      if (id) {
        a.style.overflowY = 'scroll';
      } else {
        entry.target.style.overflowY = 'hidden';
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

  useEffect(() => {
    const observer = new IntersectionObserver(entries => callbackFunction2(entries), option);
    let currentTarget;
    let childrenTarget;
    for (let i = 0; i < childrenRef.current.length; i++) {
      childrenRef.current[i].style.overflowY = 'hidden';
      childrenTarget = childrenRef.current[i];

      if (childrenTarget) {
        observer.observe(childrenTarget);
      }
    }

    return () => {
      if (childrenTarget) {
        observer.unobserve(childrenTarget);
      }
    };
  }, [childrenRef, option]);

  return [ref, childrenRef];
};

export default useOnMultipleScreen;
