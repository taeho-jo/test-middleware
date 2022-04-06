import React from 'react';
import TRIComponent from '../../../diby-client-landing/pages/TRI';
import { GetServerSideProps } from 'next';
// import Seo from '../../common/layouts/Seo';
// import Head from 'next/head';

const Tri = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      {/*<Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />*/}
      <TRIComponent />
    </>
  );
};

export default Tri;
// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {
//       title: 'Diby | 설계하기',
//       description: '1분안에 간략한 비용과 소요시간 확인하기',
//       ogTitle: '설계하기, Diby',
//       ogDescription: '1분안에 간략한 비용과 소요시간 확인하기',
//       url: 'https://dev.diby.io/tri',
//     },
//   };
// };
