// _document.js
import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
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

          {/*hotjar*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3059969,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          />

          {/*ga*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WR7GKCP');`,
            }}
          />

          {/* <!-- Channel Plugin Scripts --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function() {
          var w = window;
          if (w.ChannelIO) {
          return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
        }
          var ch = function() {
          ch.c(arguments);
        };
          ch.q = [];
          ch.c = function(args) {
          ch.q.push(args);
        };
          w.ChannelIO = ch;
          function l() {
          if (w.ChannelIOInitialized) {
          return;
        }
          w.ChannelIOInitialized = true;
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
          s.charset = 'UTF-8';
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        }
          if (document.readyState === 'complete') {
          l();
        } else if (window.attachEvent) {
          window.attachEvent('onload', l);
        } else {
          window.addEventListener('DOMContentLoaded', l, false);
          window.addEventListener('load', l, false);
        }
        })();
          ChannelIO('boot', {
          "pluginKey": "8d0981ea-89d1-435f-884f-2b659cd1f065"
        });`,
            }}
          />
          {/* <!-- Channel Plugin Scripts --> */}
        </Head>

        <body>
          <Main />
          <div id="toast-root" />
          <div id="modal-root" />
          <div id="tooltip-root" />
          <div id="dialog-root" />
          {/*Below we add the modal wrapper*/}
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
