import React from 'react';
import PricingComponent from '../../../diby-client-landing/pages/Pricing';
import { GetServerSideProps } from 'next';
// import Seo from '../../common/layouts/Seo';
// import Head from 'next/head';

const Pricing = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      {/*<Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />*/}
      <PricingComponent />
    </>
  );
};

export default Pricing;

// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {
//       title: 'Diby | 가격안내',
//       description: '',
//       ogTitle: '가격안내, Diby',
//       ogDescription: '',
//       url: 'https://dev.diby.io/pricing',
//     },
//   };
// };
