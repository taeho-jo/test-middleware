import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// Reducers
import counter from './counterReducer';
import auth from './authReducer';
import toast from './toastReducer';
import modal from './modalReducer';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
    auth,
    toast,
    modal,
  })(state, action);
};

export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
