import React from 'react';
import FeatureComponent from '../../../diby-client-landing/pages/Feature';
import { GetServerSideProps } from 'next';
import Seo from '../../common/layouts/Seo';
// import Head from 'next/head';

const Feature = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      <Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />
      <FeatureComponent />
    </>
  );
};

export default Feature;

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      title: 'Diby | 솔루션소개',
      description: 'UX/CX 리서치에서 단순반복 작업을 80% 단축하세요.',
      ogTitle: '솔루션소개, Diby',
      ogDescription: 'UX/CX 리서치에서 단순반복 작업을 80% 단축하세요.',
      url: 'https://dev.diby.io/feature',
    },
  };
};
