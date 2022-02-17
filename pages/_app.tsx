import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import Layout from '../components/layouts/Layout';

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

export default MyApp;
