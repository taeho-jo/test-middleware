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
import Head from 'next/head';

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
      <Head>
        <title>Diby | 일잘하는 당신을 위한 CX 리서치 솔루션</title>
        <meta
          name="description"
          content="유저테스트로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 UX 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요."
        />

        <meta property="og:title" content="Diby | 일잘하는 당신을 위한 CX 리서치 솔루션" />
        <meta
          property="og:description"
          content="유저테스트로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 UX 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요."
        />
        <meta property="og:url" content="https://diby.io/" />
        <meta property="og:site_name" content="Diby | 일잘하는 당신을 위한 CX 리서치 솔루션" />
      </Head>

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
