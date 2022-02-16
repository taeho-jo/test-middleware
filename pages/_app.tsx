import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <div>asdfasdfasdf</div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
