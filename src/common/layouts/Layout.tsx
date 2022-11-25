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
import AuthToast from '../../components/organisms/AuthToast';
import FlexBox from '../../components/atoms/FlexBox';
// Styles
import { css } from '@emotion/react';
import AOS from 'aos';
import { setGradient } from '../../../diby-client-landing/lib/stripe-gradient';
// API
import { fetchEmailConfirmApi } from '../../api/authApi';
import { fetchInviteUserInfoApi } from '../../api/userApi';
import { getUserInfo, setUserInfo, updateCancelWithdrawal, updateErrorMessage, UserInfoType } from '../../store/reducers/userReducer';
import { isShow } from '../../store/reducers/modalReducer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ReportLayout from './ReportLayout';
import { getCommonCode } from '../../store/reducers/commonReducer';
import { showToast } from '../../store/reducers/toastReducer';
import { updateFilterFail, updateFilterFlied, updateFilterValues } from '../../store/reducers/reportReducer';
import { clearLocalStorage } from '../util/commonFunc';
import { confirmEmailAction, setToken } from '../../store/reducers/authReducer';
import Tooltip from '../../components/atoms/Tooltip';
import Dialog from '../../components/molecules/Dialog';
import ResearchRecommendationModal from '../../components/molecules/ResearchRecommendationModal';
// import AlertToast from '../../components/organisms/AlertToast';
import ChannelService from '../util/channelTalk';
import { createHmac } from 'crypto';
import LowResolution from '../../components/template/LowResolution';

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { teamSeq, type } = router.query;
  const token = localStorage.getItem('accessToken');
  const resetToken = sessionStorage.getItem('accessToken');

  const userInfo = useSelector<ReducerType, UserInfoType>(state => state.user.userInfo);

  const [showGradient, setShowGradient] = useState<boolean>(true);

  const canvasRef = useRef(null);

  // ============ React Query ============ //
  // const { data: commonCode } = useQuery(['fetchCommonCode'], fetchCommonCodeApi);
  useEffect(() => {
    dispatch(getCommonCode());
  }, []);

  useEffect(() => {
    if (token) {
      // dispatch(getUserInfo());
    }
  }, [token]);

  const { mutate, data: confirmData } = useMutation(['fetchEmailConfirm'], fetchEmailConfirmApi, {
    onError: e => console.error('fetchEmailConfirm error::', e),
    onSuccess: data => {
      dispatch(isShow({ isShow: false, type: '' }));
      // dispatch(getUserInfo());
    },
  });

  useEffect(() => {
    const channelTalk = new ChannelService();

    channelTalk.boot({
      pluginKey: '8d0981ea-89d1-435f-884f-2b659cd1f065',
    });
    if (userInfo?.userId !== '') {
      const name = userInfo?.userName;
      const email = userInfo?.userId;
      const secretKey = process.env.NEXT_PUBLIC_CHANNEL_IO_SECRET_KEY;
      const memberId = createHmac('sha256', Buffer.from(secretKey, 'hex')).update(email).digest('hex');

      channelTalk.boot({
        pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
        memberId: memberId,
        profile: {
          name,
          email,
        },
      });
    } else {
      channelTalk.shutdown();

      channelTalk.boot({
        pluginKey: process.env.NEXT_PUBLIC_CHANNEL_IO_KEY,
      });
    }

    return () => {
      channelTalk.shutdown();
    };
  }, [userInfo]);

  const { data: usersInviteInfo, refetch: inviteRefetch } = useQuery(
    ['fetchInviteUserInfo', 'layout'],
    () => fetchInviteUserInfoApi(teamSeq, token),
    {
      enabled: !!confirmData,
      onError: (e: any) => {
        const errorData = e.response.data;
        // if (errorData.code === 'E0008') {
        // queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        // dispatch(getRefreshToken())
        // refetch();
        // }
        // else
        if (errorData.code === 'E0007') {
          clearLocalStorage();
          router.push('/');
        }
      },
      onSuccess: data => {
        dispatch(setUserInfo(data.data));
        if (data.data.emailVerifiedYn === 'N') {
          router.push('/');
          dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
        }
        if (data.data.emailVerifiedYn === 'Y') {
          router.push('/admin/team');
        }
      },
    },
  );

  useEffect(() => {
    if (router?.pathname !== '/' && router?.pathname !== '/admin/report/[id]') {
      dispatch(updateFilterFlied(null));
      dispatch(updateFilterValues(null));
      dispatch(updateFilterFail(null));
      //TODO: 사이드바에서 클릭 이동 시 모달 뜨는 부분 예외 처리
      if (Object.keys(router.query)[0] !== 'create') {
        dispatch(isShow({ isShow: false, type: '' }));
      }

      // if (isReturnPage) {
      //   dispatch(isShow({ isShow: true, type: 'signup' }));
      //   dispatch(updateReturnPage(false));
      // } else {
      //   dispatch(isShow({ isShow: false, type: '' }));
      // }
    } else {
      return;
    }
  }, [router]);

  // ============ React Query ============ //

  useEffect(() => {
    //TODO: 사이드바에서 클릭 이동 시 모달 뜨는 부분 예외 처리
    if (Object.keys(router.query)[0] === 'create') {
      return;
    }
    if (Object.keys(router.query).length !== 0) {
      dispatch(isShow({ isShow: false, type: '' }));
      const query = router?.query;
      const { token, userId, type, teamSeq, replace, result, requestView } = query;

      // 구글로그인 했거나, 초대받은사람이 로그인하거나
      if (token && !userId && type && !teamSeq && !result && !requestView) {
        localStorage.setItem('accessToken', `${token}`);
        dispatch(setToken(token));
        // dispatch(getUserInfo());
      }
      if (token && !userId && type && !teamSeq && !result && requestView) {
        localStorage.setItem('accessToken', `${token}`);
        dispatch(setToken(token));
        inviteRefetch();
      }
      // 이메일 인증
      if (token && !userId && !type && !teamSeq && !result && !requestView) {
        localStorage.setItem('accessToken', `${token}`);
        // dispatch(confirmEmailAction());
      }
      if (token && !userId && type && teamSeq && !result && !requestView) {
        localStorage.setItem('accessToken', `${token}`);
        inviteRefetch();
      }
      if (token && !userId && !type && teamSeq && !result && !requestView) {
        localStorage.setItem('accessToken', `${token}`);
        // mutate();
        // dispatch(confirmEmailAction());
        inviteRefetch();
      }
      if (token && userId && !type && !teamSeq && !result && !requestView) {
        sessionStorage.setItem('accessToken', `${token}`);
        sessionStorage.setItem('userId', `${userId}`);
        router.push('/admin/reset-password');
      }
      if (!token && !userId && type && !teamSeq && result && requestView) {
        dispatch(showToast({ message: result, isShow: true, status: 'warning', duration: 5000 }));
        if (requestView === 'login') {
          dispatch(isShow({ isShow: true, type: 'cancelWithdrawalModal' }));
          dispatch(updateCancelWithdrawal(true));
        }
        if (requestView === 'register') {
          dispatch(updateErrorMessage(result));
          dispatch(isShow({ isShow: true, type: 'withdrawalUserSignupModal' }));
          dispatch(updateCancelWithdrawal(true));
        }
      }
    }
  }, [router.query, token]);

  // <------------- LandingPage css 및 animation 을 위한 useEffect -------------> //
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);

  useEffect(() => {
    if ((router.pathname === '/' || router.pathname === '/main') && canvasRef.current) {
      setGradient(canvasRef.current);
    }
  }, [token, router.pathname, resetToken]);

  useEffect(() => {
    if (router.pathname === '/' || router.pathname === '/main') {
      setShowGradient(true);
    } else {
      setShowGradient(false);
    }
  }, [router.pathname, resetToken]);
  // <------------- LandingPage css 및 animation 을 위한 useEffect -------------> //

  const separateDomain = useCallback(() => {
    switch (router.pathname) {
      case '/admin/report/[id]':
        return (
          <>
            <div css={mainContainer}>
              <main css={contentsContainer}>
                <ReportLayout>{children}</ReportLayout>
              </main>
            </div>
          </>
        );
      case '/admin/research/[id]':
      case '/admin/research/[id]/detail':
      case '/admin/research/recommendation':
      case '/admin/research/recommendation/result':
        return (
          <div css={mainContainer}>
            <main css={contentsContainer}>
              <CommonHeader researchHeader={true} />
              {children}
            </main>
          </div>
        );
      case '/admin/reset-password':
      case '/admin/reset-password-success':
      case '/admin/re-login':
      case '/admin/profile':
      case '/admin/welcome':
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
      case '/main':
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

  if (resetToken) {
    return (
      <>
        <div css={mainContainer}>
          <main css={contentsContainer}>
            <CommonHeader />
            <FlexBox height={'calc(100vh - 48px)'} justify={'center'} align={'center'}>
              {children}
            </FlexBox>
          </main>
        </div>
        <AuthToast position={'top-center'} />
        <CommonModal />
        <Tooltip />
        <Dialog />
        <ResearchRecommendationModal />
      </>
    );
  }
  if (token && userInfo?.emailVerifiedYn === 'N') {
    return (
      <>
        {process.env.NODE_ENV === 'production' && <LowResolution />}
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
        <AuthToast position={'top-center'} />
        <CommonModal />
        <Tooltip />
        <Dialog />
        <ResearchRecommendationModal />
      </>
    );
  }
  if (token && userInfo?.emailVerifiedYn === 'Y') {
    return (
      <>
        {process.env.NODE_ENV === 'production' && <LowResolution />}
        {separateDomain()}
        <AuthToast position={'top-center'} />
        <CommonModal />
        <Tooltip />
        <Dialog />
        <ResearchRecommendationModal />
      </>
    );
  }
  if (!token || userInfo?.emailVerifiedYn !== 'Y') {
    return (
      <>
        {router.pathname === '/admin/report/[id]' ? (
          <>
            {process.env.NODE_ENV === 'production' && <LowResolution />}
            <div css={mainContainer}>
              <main css={contentsContainer}>
                <ReportLayout>{children}</ReportLayout>
              </main>
            </div>
            <AuthToast position={'top-center'} />
            <CommonModal />
            <Tooltip />
            <Dialog />
            <ResearchRecommendationModal />
          </>
        ) : router.pathname === '/admin/research/recommendation' || router.pathname === '/admin/research/recommendation/result' ? (
          <>
            {process.env.NODE_ENV === 'production' && <LowResolution />}
            <div css={mainContainer}>
              <main css={contentsContainer}>
                <CommonHeader researchHeader={true} />
                {children}
              </main>
            </div>
            <AuthToast position={'top-center'} />
            <CommonModal />
            <Tooltip />
            <Dialog />
            <ResearchRecommendationModal />
          </>
        ) : (
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
            <AuthToast position={'top-center'} />
            <CommonModal />
            <Tooltip />
            <Dialog />
            <ResearchRecommendationModal />
          </>
        )}
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
