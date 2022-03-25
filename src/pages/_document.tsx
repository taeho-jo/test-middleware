// _document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>C17AN's Devlog</title>
          <meta charSet="utf-8"></meta>
          <body>
            <Main />
            <NextScript />
            <div id="toast-root"></div>
            {/*Below we add the modal wrapper*/}
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
