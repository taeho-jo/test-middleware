import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Components
import AppBar from '../../../diby-client-landing/components/AppBar';
// Styles
import { css } from '@emotion/react';
import AOS from 'aos';
import { setGradient } from '../../../diby-client-landing/lib/stripe-gradient';
// import BackGroundImg2 from '../../assets/background_img2.png';
import CommonModal from '../../components/organisms/CommonModal';
import CommonHeader from '../../components/molecules/CommonHeader';
import AdminLayout from './AdminLayout';
import AlertToast from '../../components/organisms/AlertToast';
import FlexBox from '../../components/atoms/FlexBox';
import { useGoogleLogin } from '../../api/authApi';
import { setToken } from '../../store/reducers/authReducer';

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const dispatch = useDispatch();
  // const token = useSelector((state: any) => state.auth.token);
  const token = localStorage.getItem('accessToken');

  const [showGradient, setShowGradient] = useState<boolean>(true);

  const router = useRouter();

  const canvasRef = useRef(null);

  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     if (token) {
  //       router.replace('/admin/team');
  //     } else {
  //       router.replace('/');
  //     }
  //   }
  // }, [router.pathname, token]);

  useEffect(() => {
    if (router?.query) {
      if (router.query?.token) {
        localStorage.setItem('accessToken', `${router.query.token}`);
        dispatch(setToken(`${router.query.token}`));
        router.push('/admin/team');
      }
    }
  }, [router.query]);

  // <------------- LandingPage css 및 animation 을 위한 useEffect -------------> //
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  useEffect(() => {
    if ((router.pathname === '/' || router.pathname === '/index') && canvasRef.current) {
      setGradient(canvasRef.current);
    }
  }, [token, router.pathname]);
  useEffect(() => {
    if (router.pathname === '/' || router.pathname === '/index') {
      setShowGradient(true);
    } else {
      setShowGradient(false);
    }
  }, [router.pathname]);
  // <------------- LandingPage css 및 animation 을 위한 useEffect -------------> //

  const separateDomain = useCallback(() => {
    switch (router.pathname) {
      case '/admin/reset-password':
      case '/admin/reset-password-success':
      case '/admin/re-login':
        return (
          <div css={mainContainer}>
            <main css={contentsContainer}>
              <CommonHeader />
              <FlexBox height={'calc(100vh - 48px)'} justify={'center'} align={'center'}>
                {children}
              </FlexBox>
            </main>
          </div>
        );
      case '/admin/team':
      case '/admin/main':
        return (
          <div css={mainContainer}>
            <main css={contentsContainer}>
              <CommonHeader />
              <AdminLayout>{children}</AdminLayout>
            </main>
          </div>
        );
      case '/':
      case '/index':
      case '/usecases/ui':
      case '/usecases/ux':
      case '/usecases/scenario':
      case '/usecases/customer':
      case '/feature':
      case '/tri':
      case '/pricing':
        return (
          <>
            <div css={mainContainer}>
              <main css={contentsContainer}>
                <canvas css={gradientCanvas(showGradient)} id="gradient-canvas" ref={canvasRef}></canvas>
                {showGradient ? (
                  <>
                    <div css={gradientDiv}></div>
                    <AppBar dark={showGradient} />
                  </>
                ) : null}
                <div>{children}</div>
              </main>
            </div>
            <AlertToast position={'top-center'} />
            <CommonModal />
          </>
        );
      default:
        return (
          <div css={mainContainer}>
            <main css={contentsContainer}>
              <CommonHeader />
              <AdminLayout>{children}</AdminLayout>
            </main>
          </div>
        );
    }
  }, [router.pathname, token, showGradient]);

  // ===================================== 살릴 부분 ===================================== //
  if (token) {
    return (
      <>
        {separateDomain()}
        <AlertToast position={'top-center'} />
        <CommonModal />
      </>
    );
  }
  if (!token) {
    return (
      <>
        <div css={mainContainer}>
          <main css={contentsContainer}>
            <canvas css={gradientCanvas(showGradient)} id="gradient-canvas" ref={canvasRef}></canvas>
            {showGradient ? (
              <>
                <div css={gradientDiv}></div>
                <AppBar dark={showGradient} />
              </>
            ) : null}
            <div>{children}</div>
          </main>
        </div>
        <AlertToast position={'top-center'} />
        <CommonModal />
      </>
    );
  }
  // ===================================== 살릴 부분 ===================================== //

  // return (
  //   <>
  //     {token ? (
  //       separateDomain()
  //     ) : (
  //       <div css={mainContainer}>
  //         <main css={contentsContainer}>
  //           <canvas css={gradientCanvas(showGradient)} id="gradient-canvas" ref={canvasRef}></canvas>
  //           {showGradient ? (
  //             <>
  //               <div css={gradientDiv}></div>
  //               <AppBar dark={showGradient} />
  //             </>
  //           ) : null}
  //           <div>{children}</div>
  //         </main>
  //       </div>
  //     )}
  //
  //     <AlertToast position={'top-center'} />
  //     <CommonModal />
  //   </>
  // );
};

export default Layout;

const mainContainer = css`
  position: relative;
  width: 100%;
`;
const contentsContainer = css`
  width: 100%;
  min-height: 100vh;
  transition: 0.6s ease;
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
