import React, { ReactElement, ReactNode } from 'react';
// Redux
import { persistedReducer, wrapper } from '../store';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from '../common/layouts/Layout';
import AppAnimation from '../common/layouts/AppAnimation';
// Libraries
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
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
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            // refetchOnMount: false,
            refetchOnReconnect: false,
          },
        },
      }),
  );
  // const queryClient = new QueryClient();

  return (
    <PersistGate persistor={persistor} loading={<div>loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyles />
          <Layout>
            {/*<AppAnimation>*/}
            <Component {...pageProps} />
            {/*</AppAnimation>*/}
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </QueryClientProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
