import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// Reducers
import counter from './counterReducer';
import auth from './authReducer';
import toast from './toastReducer';
import modal from './modalReducer';
import team from './teamReducer';
import modal2 from './modalReducer2';

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
    team,
    modal2,
  })(state, action);
};

export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
