import React from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch } from 'react-redux';
import { resetToken } from '../store/reducers/authReducer';
// Components
import withAuth from '../hoc/withAuth';
import Section1 from '../../diby-client-landing/pages/Home/Section1';
import Section2 from '../../diby-client-landing/pages/Home/Section2';
import Section3 from '../../diby-client-landing/pages/Home/Section3';
import Section4 from '../../diby-client-landing/pages/Home/Section4';
import CustomFooter from '../../diby-client-landing/pages/Home/CustomFooter';
// Libraries
import { css } from '@emotion/react';
import { caption1_bold } from '../styles/FontStyles';
import Seo from '../common/layouts/Seo';

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
    <>
      <Seo />
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <CustomFooter />
      </div>
    </>
  );
};

export default withAuth(Home);
const blockSpan = [
  caption1_bold,
  css`
    display: block;
  `,
];
