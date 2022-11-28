import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import { createHmac } from 'crypto';
import ChannelService from '../util/channelTalk';
import AOS from 'aos';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../store/reducers';
import { getUserInfo, UserInfoType } from '../../store/reducers/userReducer';
import { getCommonCode } from '../../store/reducers/commonReducer';
import { updateFilterFail, updateFilterFlied, updateFilterValues } from '../../store/reducers/reportReducer';
import { isShow } from '../../store/reducers/modalReducer';
// Components
import AppBar from '../../../diby-client-landing/components/AppBar';
import AdminLayout from './AdminLayout';
import ReportLayout from './ReportLayout';
import FlexBox from '../../components/atoms/FlexBox';
import Tooltip from '../../components/atoms/Tooltip';
import Dialog from '../../components/molecules/Dialog';
import CommonHeader from '../../components/molecules/CommonHeader';
import ResearchRecommendationModal from '../../components/molecules/ResearchRecommendationModal';
import CommonModal from '../../components/organisms/CommonModal';
import AuthToast from '../../components/organisms/AuthToast';
import LowResolution from '../../components/template/LowResolution';
// Styles
import { css } from '@emotion/react';
import { setGradient } from '../../../diby-client-landing/lib/stripe-gradient';
import { confirmEmailAction } from '../../store/reducers/authReducer';

// Cookies
const cookies = new Cookies();
const expires = new Date();
expires.setDate(expires.getDate() + 9);

// 상수
const ADMIN_ROUTE = [
  '/admin/team',
  '/admin/member',
  '/admin/setting',
  '/admin/setting/detail',
  '/admin/profile/update',
  '/admin/profile/credit',
  '/admin/report/share',
];
const RESEARCH_ROUTE = [
  '/admin/research/[id]',
  '/admin/research/[id]/detail',
  '/admin/research/recommendation',
  '/admin/research/recommendation/result',
];
const AUTH_ROUTE = ['/admin/reset-password', '/admin/reset-password-success', '/admin/re-login', '/admin/profile', '/admin/welcome'];
const LANDING_ROUTE = ['/', '/main', '/usecases/ui', '/usecases/ux', '/usecases/scenario', '/usecases/customer', '/feature', '/tri', '/pricing'];

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout2 = ({ children }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { teamSeq, type, token: queryToken } = router.query;
  // const token = localStorage.getItem('accessToken');
  const resetToken = sessionStorage.getItem('accessToken');

  const userInfo = useSelector<ReducerType, UserInfoType>(state => state.user.userInfo);

  // 공통 코드 API 호출
  useEffect(() => {
    dispatch(getCommonCode());
  }, [dispatch]);

  // 이메일 인증이 안된 로그인 계정일 경우 인증 모달 노출
  useEffect(() => {
    const accessToken = cookies.get('accessToken');
    const emailVerifiedYn = cookies.get('emailVerifiedYn');
    if (accessToken && emailVerifiedYn === 'N') {
      dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
    }
  }, [cookies]);

  useEffect(() => {
    if (router?.pathname !== '/' && router?.pathname !== '/admin/report/[id]') {
      dispatch(updateFilterFlied(null));
      dispatch(updateFilterValues(null));
      dispatch(updateFilterFail(null));
      //TODO: 사이드바에서 클릭 이동 시 모달 뜨는 부분 예외 처리
      if (Object.keys(router.query)[0] !== 'create') {
        dispatch(isShow({ isShow: false, type: '' }));
      }
    }
  }, [router.pathname, router.query, dispatch]);

  // <------------- 채널톡 -------------> //
  useEffect(() => {
    const channelTalk = new ChannelService();

    const name = userInfo.userName;
    const email = userInfo?.userId;
    const pluginKey = process.env.NEXT_PUBLIC_CHANNEL_IO_KEY;
    const secretKey = process.env.NEXT_PUBLIC_CHANNEL_IO_SECRET_KEY;
    channelTalk.boot({
      pluginKey,
    });

    if (userInfo && email !== '') {
      const memberId = createHmac('sha256', Buffer.from(secretKey, 'hex')).update(email).digest('hex');
      channelTalk.boot({
        pluginKey,
        memberId,
        profile: {
          name,
          email,
        },
      });
    } else {
      channelTalk.shutdown();
      channelTalk.boot({
        pluginKey,
      });
    }
    return () => {
      channelTalk.shutdown();
    };
  }, [userInfo]);
  // <------------- 채널톡 -------------> //

  // <------------- LandingPage css 및 animation 을 위한 useEffect -------------> //
  // 랜딩 페이지 그라데이션 state
  const [showGradient, setShowGradient] = useState<boolean>(true);
  const canvasRef = useRef(null);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);
  useEffect(() => {
    if ((router.pathname === '/' || router.pathname === '/main') && canvasRef.current) {
      setGradient(canvasRef.current);
      setShowGradient(true);
    } else {
      setShowGradient(false);
    }
  }, [router.pathname]);
  // <------------- LandingPage css 및 animation 을 위한 useEffect -------------> //

  // 기존에 localStorage에 토큰이 있다면 삭제
  useEffect(() => {
    const localAccessToken = localStorage.getItem('accessToken');
    if (localAccessToken) {
      localStorage.removeItem('accessToken');
    }
  }, []);

  return (
    <>
      <div css={mainContainer}>
        <main css={contentsContainer}>
          {/* ------------------- 대시보드, 팀원, 설정 페이지 ------------------- */}
          {ADMIN_ROUTE.includes(router?.pathname) && (
            <>
              <CommonHeader />
              <AdminLayout>{children}</AdminLayout>
            </>
          )}

          {/* ------------------- diby 웹 리포트 페이지 ------------------- */}
          {router.pathname === '/admin/report/[id]' && <ReportLayout>{children}</ReportLayout>}

          {/* ------------------- 리서치 설계 및 추천 페이지 ------------------- */}
          {RESEARCH_ROUTE?.includes(router?.pathname) && (
            <>
              <CommonHeader researchHeader={true} />
              {children}
            </>
          )}

          {/* ------------------- 비밀번호 변경 및 프로필 입력, 초대 페이지 ------------------- */}
          {AUTH_ROUTE.includes(router?.pathname) && (
            <>
              <CommonHeader />
              <FlexBox height={'calc(100vh - 48px)'} justify={'center'} align={'center'}>
                {children}
              </FlexBox>
            </>
          )}
          {/* ------------------- 비밀번호 변경 및 프로필 입력, 초대 페이지 ------------------- */}

          {/* ------------------- 랜딩페이지 ------------------- */}
          {LANDING_ROUTE.includes(router?.pathname) && (
            <>
              <canvas css={gradientCanvas(showGradient)} id="gradient-canvas" ref={canvasRef}></canvas>
              {showGradient ? (
                <>
                  <div css={gradientDiv}></div>
                  <AppBar dark={showGradient} />
                </>
              ) : null}
              <div>{children}</div>
            </>
          )}
          {/* ------------------- 랜딩페이지 ------------------- */}
        </main>
      </div>
      {process.env.NODE_ENV === 'production' && <LowResolution />}
      <AuthToast position={'top-center'} />
      <CommonModal />
      <Tooltip />
      <Dialog />
      <ResearchRecommendationModal />
    </>
  );
};

export default Layout2;

const mainContainer = css`
  position: relative;
  width: 100%;
`;
const contentsContainer = css`
  width: 100%;
  //min-height: 100vh;
  transition: 0.6s ease;
  overflow: auto;
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
