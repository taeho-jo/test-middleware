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

          <title>Diby</title>
          <meta name="description" content="CX 리서치 솔루션, Diby" />
          <link rel="icon" href="/favicon.png" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Diby" />
          <meta property="og:url" content="https://diby.io" />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:description" content="CX 리서치 솔루션, Diby" />
          <meta property="og:site_name" content="Diby" />
          <meta property="og:locale" content="ko_KR" />
          {/*다음의 태그는 필수는 아니지만, 포함하는 것을 추천함*/}
          {/*<meta property="og:image:width" content="1200">*/}
          {/*  <meta property="og:image:height" content="630">*/}
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
