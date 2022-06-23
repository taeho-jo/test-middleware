import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// Reducers
import counter from './counterReducer';
import auth from './authReducer';
import user from './userReducer';
import toast from './toastReducer';
import modal from './modalReducer';
import team from './teamReducer';
import common from './commonReducer';
import queryStatus from './useQueryControlReducer';
import report from './reportReducer';

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
    user,
    toast,
    modal,
    team,
    common,
    queryStatus,
    report,
  })(state, action);
};

export type ReducerType = ReturnType<typeof reducer>;

export default reducer;
