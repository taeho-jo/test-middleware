import React from 'react';
import { Solution3 } from '../../../../diby-client-landing/pages/Solution';
import { GetServerSideProps } from 'next';
import Seo from '../../../common/layouts/Seo';
// import Head from 'next/head';

const Scenario = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      <Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />
      <Solution3 />
    </>
  );
};

export default Scenario;
export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      title: 'Diby | 시나리오 테스트',
      description: 'UX UI 가설 수립 및 검증',
      ogTitle: '시나리오 테스트, Diby',
      ogDescription: 'UX UI 가설 수립 및 검증',
      url: 'https://dev.diby.io/usecases/usecases/scenario',
    },
  };
};
