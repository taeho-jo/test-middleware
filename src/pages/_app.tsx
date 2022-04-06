import React, { ReactElement, ReactNode } from 'react';
// Redux
import { persistedReducer, wrapper } from '../store';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// Components
import Layout from '../common/layouts/Layout';
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
// import Seo from '../common/layouts/Seo';
import { useRouter } from 'next/router';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
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
    <PersistGate persistor={persistor} loading={<div></div>}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {/*<Seo path={router.pathname} />*/}
            <Layout>
              {/*<AppAnimation>*/}
              <Component {...pageProps} />
              {/*</AppAnimation>*/}
            </Layout>
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </QueryClientProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
