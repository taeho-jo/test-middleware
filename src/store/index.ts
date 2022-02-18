import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import reducer from './reducers';

const makeStore: MakeStore<any> = context =>
  configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

export const wrapper = createWrapper<any>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
