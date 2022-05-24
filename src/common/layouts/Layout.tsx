import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/reducers';
// Components
import AppBar from '../../../diby-client-landing/components/AppBar';
import CommonModal from '../../components/organisms/CommonModal';
import CommonHeader from '../../components/molecules/CommonHeader';
import AdminLayout from './AdminLayout';
import AlertToast from '../../components/organisms/AlertToast';
import FlexBox from '../../components/atoms/FlexBox';
// Styles
import { css } from '@emotion/react';
import AOS from 'aos';
import { setGradient } from '../../../diby-client-landing/lib/stripe-gradient';
// API
import { useConfirmEmailApi } from '../../api/authApi';
import { useGetUserInfo } from '../../api/userApi';
import { setEmailConfirm } from '../../store/reducers/userReducer';

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const resetToken = localStorage.getItem('resetToken');
  const emailConfirm = useSelector<ReducerType, boolean>(state => state.user.emailConfirm);
  const userInfoSettingValue = useSelector<ReducerType, boolean>(state => state.user.setting);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  const [showGradient, setShowGradient] = useState<boolean>(true);

  const router = useRouter();

  const canvasRef = useRef(null);
  const { isLoading, data, isError, error, refetch } = useGetUserInfo(userInfoSettingValue);
  const confirmEmail = useConfirmEmailApi();

  useEffect(() => {
    if (router.query.token) {
      console.log('몇 번 실행????');
      const query = router?.query;
      localStorage.setItem('accessToken', `${query.token}`);
      // dispatch(setEmailConfirm(true));
      confirmEmail.mutate();
    }
  }, [router.query]);

  // useEffect(() => {
  //   if (emailConfirm) {
  //     confirmEmail.mutate();
  //   }
  // }, [emailConfirm]);

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
    console.log('userInfo::::::::::::::', userInfo, '::::::::::::::userInfo');
  }, [userInfo]);

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
      case '/admin/member':
      case '/admin/setting':
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

  if (token && userInfo.emailVerifiedYn === 'Y') {
    return (
      <>
        {separateDomain()}
        <AlertToast position={'top-center'} />
        <CommonModal />
      </>
    );
  }
  if (!token || userInfo.emailVerifiedYn !== 'Y') {
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
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  height: 792px;
  --gradient-color-1: #3c3c46;
  --gradient-color-2: #3d2f4d;
  --gradient-color-3: #2d2d3f;
  --gradient-color-4: #1f3c3f;
  transform: skewY(-9deg);
  transform-origin: top left;
  border-image: linear-gradient(93.75deg, a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);
  display: ${showGradient ? 'unset' : 'none'};
`;

const gradientDiv = css`
  width: 100%;
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
  border-image: linear-gradient(93.75deg, #a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);
  border-image-slice: 1;
  transform: skewY(-9deg);
  transform-origin: top left;
`;
