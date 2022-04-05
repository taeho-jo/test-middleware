import React from 'react';
import FeatureComponent from '../../../diby-client-landing/pages/Feature';
import Head from 'next/head';

const Feature = () => {
  return (
    <>
      <Head>
        <title>Diby | 솔루션소개</title>
        <meta name="description" content="UX/CX 리서치에서 단순반복 작업을 80% 단축하세요." />

        <meta property="og:title" content="솔루션소개, Diby" />
        <meta property="og:description" content="UX/CX 리서치에서 단순반복 작업을 80% 단축하세요." />
        <meta property="og:site_name" content="솔루션소개, Diby" />
        <meta property="og:url" content="https://diby.io/feature" />
      </Head>
      <FeatureComponent />
    </>
  );
};

export default Feature;
