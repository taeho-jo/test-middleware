import React from 'react';
import { Solution3 } from '../../../../diby-client-landing/pages/Solution';
import Head from 'next/head';

const Scenario = () => {
  return (
    <>
      <Head>
        <title>Diby | 시나리오 테스트</title>
        <meta name="description" content="UX UI 가설 수립 및 검증" />

        <meta property="og:title" content="시나리오 테스트, Diby" />
        <meta property="og:description" content="UX UI 가설 수립 및 검증" />
        <meta property="og:site_name" content="시나리오 테스트, Diby" />
        <meta property="og:url" content="https://diby.io/usecases/scenario" />
      </Head>
      <Solution3 />
    </>
  );
};

export default Scenario;
