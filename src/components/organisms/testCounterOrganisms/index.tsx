import React, { useCallback } from 'react';
import PageTitle from '../../atoms/PageTitle';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from '../../../store/reducers/counterReducer';

const TestCounterOrganisms = () => {
  const dispatch = useDispatch();

  const value = useSelector<ReducerType, number>(state => state.counter.value);

  const plus = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  const minus = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);
  const plusFive = useCallback(
    (number: number) => {
      dispatch(incrementByAmount(number));
    },
    [dispatch],
  );
  const minusFive = useCallback(
    (number: number) => {
      dispatch(decrementByAmount(number));
    },
    [dispatch],
  );

  return (
    <>
      <PageTitle title={'RTK Counter Test Page'} />
      <div>
        <h1>Counter</h1>
        <button onClick={() => minusFive(5)}>---</button>
        <button onClick={() => minus()}>-</button>
        <span>{value}</span>
        <button onClick={() => plus()}>+</button>
        <button onClick={() => plusFive(5)}>+++</button>
      </div>
    </>
  );
};

export default TestCounterOrganisms;
