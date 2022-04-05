import React from 'react';
import Head from 'next/head';
import { Solution2 } from '../../../../diby-client-landing/pages/Solution';

const Ux = () => {
  return (
    <>
      <Head>
        <title>Diby | UX 포지션 테스트</title>
        <meta name="description" content="실사용자 대상 UX 평가 및 전략 수립" />

        <meta property="og:title" content="UX 포지션 테스트, Diby" />
        <meta property="og:description" content="실사용자 대상 UX 평가 및 전략 수립" />
        <meta property="og:site_name" content="UX 포지션 테스트, Diby" />
      </Head>
      <Solution2 />
    </>
  );
};

export default Ux;
