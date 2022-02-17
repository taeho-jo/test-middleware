import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/layouts/Layout';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
