import { configureStore } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  blacklist: ['counter'],
};

export const persistedReducer = persistReducer(persistConfig, reducer);

const makeStore: MakeStore<any> = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger),
  });

  const persistor = persistStore(store);
  return { ...persistor, ...store };
};

export const wrapper = createWrapper<any>(makeStore, {});
