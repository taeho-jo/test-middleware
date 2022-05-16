import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  // blacklist: ['counter', 'modal'],
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
