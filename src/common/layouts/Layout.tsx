import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../store/reducers';
// Components
import Header from './Header';
import AuthToast from '../../components/organisms/AuthToast';
import AppBar from '../../../diby-client-landing/components/AppBar';
// Styles
import { css } from '@emotion/react';
import AOS from 'aos';
import { setGradient } from '../../../diby-client-landing/lib/stripe-gradient';
// import BackGroundImg2 from '../../assets/background_img2.png';
import BackGroundImg from '../../assets/background_img.png';
import Seo from './Seo';
import { NextSeo } from 'next-seo';

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const token = useSelector<ReducerType, string>(state => state.auth.token);
  const [showGradient, setShowGradient] = useState<boolean>(false);

  const router = useRouter();

  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      setGradient(canvasRef.current);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  useEffect(() => {
    if (
      router.pathname === '/' ||
      router.pathname === '/login' ||
      router.pathname === '/signup' ||
      router.pathname === '/signup/confirm' ||
      router.pathname === '/pwInquiry' ||
      router.pathname === '/pwInquiry/confirm' ||
      router.pathname === '/addInfo/1' ||
      router.pathname === '/addInfo/2' ||
      router.pathname === '/addInfo/3'
    ) {
      console.log('바뀐?');
      setShowGradient(true);
    } else {
      setShowGradient(false);
    }
  }, [router]);

  useEffect(() => {
    console.log(showGradient, 'SHOW');
  }, [showGradient]);

  return (
    <>
      {/*<Seo title={'가나다'} description={'ABC'} ogTitle={'마바사'} ogDescription={'우와우'} />*/}
      <NextSeo
        title="Diby | 일잘하는 당신을 위한 CX 리서치 솔루션"
        description="유저테스트로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 UX 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요."
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          title: 'Diby | 일잘하는 당신을 위한 CX 리서치 솔루션',
          description:
            '유저테스트로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 UX 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
        }}
      />
      <div css={mainContainer}>
        <main css={contentsContainer}>
          <canvas css={gradientCanvas(showGradient)} id="gradient-canvas" ref={canvasRef}></canvas>
          {showGradient ? (
            <>
              <div css={gradientDiv}></div>
              <AppBar dark />
            </>
          ) : null}

          <div css={backgroundStyle}>{children}</div>
        </main>
      </div>
      <AuthToast position={'top-center'} />
    </>
  );
};

export default Layout;

const mainContainer = css`
  position: relative;
  width: 100%;
  //height: calc(100vh - 68px);
  //height: 100vh;
  //overflow: hidden;
  //background-color: transparent;
`;
const contentsContainer = css`
  width: 100%;
  min-height: 100vh;
  // padding: 30px 30px 30px 100px;
  transition: 0.6s ease;
`;
const fullMainContainer = css`
  width: 100%;
  transition: 0.6s ease;
`;
const backgroundStyle = css`
  //background-color: rgba(0, 0, 0, 0.2);
  //height: 100vh;
  //overflow: hidden;
  //background-image: url(${BackGroundImg.src});
  //background-repeat: no-repeat;
`;

const gradientCanvas = showGradient => css`
  display: ${showGradient ? 'unset' : 'none'};
  width: 100%;
  /*height: 632px;*/
  position: absolute;
  top: 0;
  z-index: -1;
  height: 792px;
  /* Adjust the colors below to get a different gradient */
  /* You can use https://whatamesh.vercel.app/ to generate them */
  --gradient-color-1: #3c3c46;
  --gradient-color-2: #3d2f4d;
  --gradient-color-3: #2d2d3f;
  --gradient-color-4: #1f3c3f;
  transform: skewY(-9deg);
  transform-origin: top left;
  border-image: linear-gradient(93.75deg, a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);
`;

const gradientDiv = css`
  /*height: 640px;*/
  height: 800px;

  position: absolute;
  top: 0px;
  z-index: -1;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 10px solid;
  box-sizing: border-box;
  background: transparent;

  width: 100%;
  border-image: linear-gradient(93.75deg, #a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);
  border-image-slice: 1;

  transform: skewY(-9deg);
  transform-origin: top left;
`;
