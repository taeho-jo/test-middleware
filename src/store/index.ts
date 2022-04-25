import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { applyMiddleware, createStore, compose } from 'redux';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import reducer from './reducers';
// import { persistReducer, persistStore } from 'redux-persist';

const migrations = {
  0: state => {
    // migration clear out device state
    return {
      ...state,
      token: '',
    };
  },
};

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel2,
  // whitelist: ,
  blacklist: ['counter', 'modal'],
  // stateReconciler: hardSet,
  // migrate: createMigrate(migrations, { debug: true }),
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

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
