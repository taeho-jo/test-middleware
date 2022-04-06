import React from 'react';
import { Solution4 } from '../../../../diby-client-landing/pages/Solution';
// import Seo from '../../../common/layouts/Seo';
import { GetServerSideProps } from 'next';
// import Head from 'next/head';

const Customer = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      {/*<Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />*/}
      <Solution4 />
    </>
  );
};

export default Customer;
// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {
//       title: 'Diby | 퍼소나 테스트',
//       description: '시장조사, 핵심 고객 정의',
//       ogTitle: '퍼소나 테스트, Diby',
//       ogDescription: '시장조사, 핵심 고객 정의',
//       url: 'https://dev.diby.io/usecases/customer',
//     },
//   };
// };
