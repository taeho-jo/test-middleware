import React from 'react';
// Libraries
import { wrapper } from '../store';
// Components
import Layout from '../components/layouts/Layout';
// Styles
import GlobalStyles from '../styles/GlobalStyles';
// Types
import type { AppProps } from 'next/app';

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
