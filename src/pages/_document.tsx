// _document.js
import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // console.log(initialProps, 'asdfasdfasdfasdf');
    // console.log(ctx.req.url);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          <meta name="google-site-verification" content="VOhtSYTyB99y881SKWMXBlOpPgmSFRKA7-8W7AlzlrY" />
          <meta name="naver-site-verification" content="4cb24b7cbfcbd02dd6230263b6358c44b114b844" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-667012930" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'AW-667012930');
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.addEventListener('load', function(event) {
      if (window.location.href == 'https://diby.io/tri') {
        gtag('event', 'conversion', {
          'send_to': 'AW-667012930/UzsQCN24pbgDEMKeh74C'
        });
      }
      if (window.location.href == 'https://diby.io/pricing') {
        gtag('event', 'conversion', {
          'send_to': 'AW-667012930/RJrHCOC4pbgDEMKeh74C'
        });
      }
    });
            `,
            }}
          />
        </Head>

        <body>
          <Main />
          <div id="toast-root"></div>
          <div id="modal-root"></div>
          {/*Below we add the modal wrapper*/}
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
