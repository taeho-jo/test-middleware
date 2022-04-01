import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch } from 'react-redux';
import { resetToken } from '../store/reducers/authReducer';
// Components
import withAuth from '../hoc/withAuth';
import Head from 'next/head';
import Section1 from '../../diby-client-landing/pages/Home/Section1';
import Section2 from '../../diby-client-landing/pages/Home/Section2';
import Section3 from '../../diby-client-landing/pages/Home/Section3';
import Section4 from '../../diby-client-landing/pages/Home/Section4';
import CustomFooter from '../../diby-client-landing/pages/Home/CustomFooter';
// Libraries
import { css } from '@emotion/react';
import { caption1_bold } from '../styles/FontStyles';
import AOS from 'aos';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = async () => {
    try {
      dispatch(resetToken());
      await router.push('/login');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/*<Head>*/}
      {/*  <title>Diby123123</title>*/}
      {/*  <meta name="description" content="Generated by create next app" />*/}
      {/*  <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CustomFooter />
    </div>
  );
};

export default withAuth(Home);

const blockSpan = [
  caption1_bold,
  css`
    display: block;
  `,
];
