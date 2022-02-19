import React, { ReactElement, ReactNode } from 'react';
// Libraries
import { wrapper } from '../store';
// Components
import Layout from '../components/layouts/Layout';
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
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <>
      <GlobalStyles />
      {/*<Layout>*/}
      {getLayout(<Component {...pageProps} />)}
      {/*</Layout>*/}
    </>
  );
}

export default wrapper.withRedux(MyApp);
