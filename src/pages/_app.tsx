import React, { ReactElement, ReactNode } from 'react';
// Redux
import { persistedReducer, wrapper } from '../store';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from '../common/layouts/Layout';
import AppAnimation from '../common/layouts/AppAnimation';
// Styles
import GlobalStyles from '../styles/GlobalStyles';
// Types
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <PersistGate persistor={persistor} loading={<div>loading...</div>}>
      <GlobalStyles />
      <Layout>
        <AppAnimation>
          <Component {...pageProps} />
        </AppAnimation>
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
