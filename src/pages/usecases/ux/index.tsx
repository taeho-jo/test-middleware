import React from 'react';
// import Head from 'next/head';
import { Solution2 } from '../../../../diby-client-landing/pages/Solution';
import { GetServerSideProps } from 'next';
// import Seo from '../../../common/layouts/Seo';

const Ux = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      {/*<Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />*/}
      <Solution2 />
    </>
  );
};

export default Ux;
//
// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {
//       title: 'Diby | UX 포지션 테스트',
//       description: '실사용자 대상 UX 평가 및 전략 수립',
//       ogTitle: 'UX 포지션 테스트, Diby',
//       ogDescription: '실사용자 대상 UX 평가 및 전략 수립',
//       url: 'https://dev.diby.io/usecases/ux',
//     },
//   };
// };
