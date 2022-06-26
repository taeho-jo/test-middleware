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
import { fetchCommonCodeApi, fetchEmailConfirmApi, fetchRefreshToken } from '../../api/authApi';
import { fetchUserInfoApi } from '../../api/userApi';
import { setUserInfo, UserInfoType } from '../../store/reducers/userReducer';
import { isShow } from '../../store/reducers/modalReducer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ReportLayout from './ReportLayout';
import { updateCommonCode } from '../../store/reducers/commonReducer';
import { showToast } from '../../store/reducers/toastReducer';
import { updateFilterFail, updateFilterFlied, updateFilterValues } from '../../store/reducers/reportReducer';

// Types
interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const resetToken = sessionStorage.getItem('accessToken');
  const emailConfirm = useSelector<ReducerType, boolean>(state => state.user.emailConfirm);
  // const userInfoSettingValue = useSelector<ReducerType, boolean>(state => state.user.setting);
  const isRefreshToken = useSelector<ReducerType, boolean>(state => state.auth.isRefreshToken);
  const userInfo = useSelector<ReducerType, UserInfoType>(state => state.user.userInfo);
  const teamListQuery = useSelector<ReducerType, boolean>(state => state.queryStatus.teamListQuery);
  const userInfoQuery = useSelector<ReducerType, boolean>(state => state.userInfoQuery);
  const getRefreshToken = useSelector<ReducerType, boolean>(state => state.queryStatus.tokenRefresh);

  const [showGradient, setShowGradient] = useState<boolean>(true);

  const router = useRouter();

  const canvasRef = useRef(null);

  // ============ React Query ============ //
  const { data: commonCode } = useQuery(['fetchCommonCode'], fetchCommonCodeApi);

  const { data: usersInfo, refetch } = useQuery(['fetchUserInfo', 'layout'], () => fetchUserInfoApi(token), {
    enabled: !!token,
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        refetch();
      } else if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      }
    },
    onSuccess: data => {
      dispatch(setUserInfo(data.data));
      if (data.data.emailVerifiedYn === 'N') {
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data.data.emailVerifiedYn === 'Y') {
        return;
        // router.push('/admin/team');
      }
    },
  });

  const { mutate } = useMutation(['fetchEmailConfirm'], fetchEmailConfirmApi, {
    onError: e => console.log('error:::', e),
    onSuccess: data => {
      dispatch(isShow({ isShow: false, type: '' }));
      refetch();
    },
  });

  useEffect(() => {
    if (router?.pathname !== '/admin/report/[id]') {
      dispatch(updateFilterFlied(null));
      dispatch(updateFilterValues(null));
      dispatch(updateFilterFail(null));
    } else {
      return;
    }
  }, [router]);

  // const { data: refreshTokenData, refetch: refreshTokenRefecthData } = useQuery(['fetchRefreshToken'], fetchRefreshToken, {
  //   enabled: false,
  //   onSuccess: data => {
  //     console.log(data?.data, 'DA');
  //     // localStorage.setItem('accessToken', data?.data.token);
  //     dispatch(updateQueryStatus({ name: 'tokenRefresh', status: false }));
  //     // queryClient.invalidateQueries();
  //   },
  // });
  // ============ React Query ============ //

  useEffect(() => {
    if (commonCode) {
      dispatch(updateCommonCode(commonCode.data));
      localStorage.setItem('commonCode', JSON.stringify(commonCode.data));
    }
  }, [commonCode]);

  useEffect(() => {
    if (Object.keys(router.query).length !== 0) {
      dispatch(isShow({ isShow: false, type: '' }));
      const query = router?.query;
      const { token, userId, type, teamseq } = query;

      if (token && !userId && type === 'google') {
        localStorage.setItem('accessToken', `${token}`);
        // dispatch(setSetting(true));
      }
      if (token && !userId && !type) {
        localStorage.setItem('accessToken', `${token}`);
        mutate();
      }
      if (token && userId && !type) {
        sessionStorage.setItem('accessToken', `${token}`);
        sessionStorage.setItem('userId', `${userId}`);
        router.push('/admin/reset-password');
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
          <div css={mainContainer}>
            <main css={contentsContainer}>
              <ReportLayout>{children}</ReportLayout>
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
        <AlertToast position={'top-center'} />
        <CommonModal />
      </>
    );
  }
  if (token && userInfo?.emailVerifiedYn === 'Y') {
    return (
      <>
        {separateDomain()}
        <AlertToast position={'top-center'} />
        <CommonModal />
      </>
    );
  }
  if (!token || userInfo?.emailVerifiedYn !== 'Y') {
    return (
      <>
        {router.pathname === '/admin/report/[id]' ? (
          <div css={mainContainer}>
            <main css={contentsContainer}>
              <ReportLayout>{children}</ReportLayout>
            </main>
          </div>
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
            <AlertToast position={'top-center'} />
            <CommonModal />
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
