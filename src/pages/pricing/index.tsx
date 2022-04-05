import React from 'react';
import PricingComponent from '../../../diby-client-landing/pages/Pricing';
import Head from 'next/head';

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Diby | 가격안내</title>
        {/*<meta name="description" content="시장조사, 핵심 고객 정의" />*/}

        <meta property="og:title" content="가격 안내, Diby" />
        {/*<meta property="og:description" content="시장조사, 핵심 고객 정의" />*/}
        <meta property="og:url" content="https://diby.io/pricing" />
        <meta property="og:site_name" content="가격 안내, Diby" />
      </Head>
      <PricingComponent />
    </>
  );
};

export default Pricing;
