import React from 'react';
import { Solution1 } from '../../../../diby-client-landing/pages/Solution';
import { GetServerSideProps } from 'next';
import Seo from '../../../common/layouts/Seo';
// import Head from 'next/head';

const Ui = ({ title, description, ogTitle, ogDescription, url }) => {
  return (
    <>
      <Seo title={title} description={description} ogTitle={ogTitle} ogDescription={ogDescription} url={url} />
      <Solution1 />
    </>
  );
};

export default Ui;
export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      title: 'Diby | UI 진단 테스트',
      description: '사용성 테스트 (usabiltiy test)로 서비스내 문제점 파악',
      ogTitle: 'UI 진단 테스트, Diby',
      ogDescription: '사용성 테스트 (usabiltiy test)로 서비스내 문제점 파악',
      url: 'https://dev.diby.io/usecases/ui',
    },
  };
};
