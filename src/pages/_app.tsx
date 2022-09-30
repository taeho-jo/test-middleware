import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Redux
import { persistedReducer, wrapper } from '../store';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from '../common/layouts/Layout';
import Seo from '../common/layouts/Seo';
// Libraries
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// Styles
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../diby-client-landing/Theme';
import '../../diby-client-landing/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Types
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

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

  return (
    <>
      <Seo path={router.pathname} />
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Layout>
                {/*<AppAnimation>*/}
                <Component {...pageProps} />
                {/*</AppAnimation>*/}
              </Layout>
              {/*<Script type="text/javascript" src="/lib/beusableHeatmap.js" />*/}
            </ThemeProvider>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
        </QueryClientProvider>
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
