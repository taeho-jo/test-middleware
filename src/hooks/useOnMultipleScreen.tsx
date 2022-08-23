import React, { useEffect, useRef } from 'react';
import { updateIndexClick, updateIndexId } from '../store/reducers/reportReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../store/reducers';

const useOnMultipleScreen = option => {
  const dispatch = useDispatch();
  const ref = useRef([]);
  const childrenRef = useRef([]);
  const showingSectionId = useSelector<ReducerType, any>(state => state.report?.indexId);
  const indexClick = useSelector<ReducerType, boolean>(state => state.report.indexClick);

  const callbackFunction = entries => {
    const [entry] = entries;

    if (entry.isIntersecting && !indexClick) {
      dispatch(updateIndexId(entry.target.id));
    }
    if (entry.isIntersecting && indexClick) {
      dispatch(updateIndexClick(false));
    }
  };

  const callbackFunction2 = entries => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting === false && !indexClick) {
        entries[i].target.style.overflowY = 'hidden';
      } else if (entries[i].isIntersecting && !indexClick) {
        entries[i].target.style.overflowY = 'overlay';
        entries[i].target.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else if (entries[i].isIntersecting && indexClick) {
        dispatch(updateIndexClick(false));
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
        dispatch(updateIndexClick(false));
        observer.unobserve(currentTarget);
      }
    };
  }, [ref, option]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => callbackFunction2(entries), option);

    let childrenTarget;
    for (let i = 0; i <= childrenRef.current.length; i++) {
      childrenTarget = childrenRef.current[i];

      if (childrenTarget) {
        observer.observe(childrenTarget);
      }
    }

    return () => {
      if (childrenTarget) {
        dispatch(updateIndexClick(false));
        observer.unobserve(childrenTarget);
      }
    };
  }, [option]);

  return [ref, childrenRef];
};

export default useOnMultipleScreen;
