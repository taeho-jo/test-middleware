// _document.js
import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />

          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="expires" content="0" />
          <meta httpEquiv="pragma" content="no-cache" />

          <link rel="icon" href="/favicon.png" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-diby.png" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image:width" content="2420" />
          <meta property="og:image:height" content="1210" />
          <meta property="author" content="DBDLAB" />
        </Head>

        <body>
          <Main />
          <div id="toast-root"></div>
          {/*Below we add the modal wrapper*/}
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
