import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AXIOS_GET, AXIOS_PATCH, AXIOS_POST } from '../../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePasswordType, LoginInputType, ResetPasswordType, SignupInputType } from './types';
import { showToast } from '../../store/reducers/toastReducer';
import { isShow } from '../../store/reducers/modalReducer';
import { setToken, updateIsRefreshTokenStatus } from '../../store/reducers/authReducer';
import { useRouter } from 'next/router';
import { setEmailConfirm, setSetting } from '../../store/reducers/userReducer';
import { dispatch } from 'jest-circus/build/state';
import { ReducerType } from '../../store/reducers';
import { updateTeamInfo } from '../../store/reducers/teamReducer';

export const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  dispatch(setSetting(false));
  router.push('/admin/team');
};

// 로그인 API
export const useLoginApi = () => {
  const dispatch = useDispatch();

  const handleLogin = async (sendObject: LoginInputType) => {
    return await AXIOS_POST('/login/', sendObject);
  };

  return useMutation(handleLogin, {
    onError: (error: any) => {
      const { data, status } = error.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
    onSuccess: res => {
      console.log(res);
      localStorage.setItem('accessToken', res.data.token);

      dispatch(setToken(res.data.token));
      dispatch(showToast({ message: '로그인에 성공하였습니다.', isShow: true, status: 'success', duration: 5000 }));
      dispatch(isShow({ isShow: false, type: '' }));
      dispatch(setSetting(true));
      sessionStorage.clear();
    },
  });
};

// 회원가입 API
export const useSignupApi = refetch => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const isUserInfo = useSelector<ReducerType, boolean>(state => state.user.setting);

  const handleSignup = async (sendObject: SignupInputType) => {
    return await AXIOS_POST('/register/', sendObject);
  };

  return useMutation(handleSignup, {
    onError: (error: any) => {
      const { data, status } = error.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
    onSuccess: async res => {
      const { data, status } = res;
      localStorage.setItem('accessToken', res.data.token);
      dispatch(setToken(res.data.token));
      dispatch(showToast({ message: res.message, isShow: true, status: 'success', duration: 5000 }));
      dispatch(isShow({ isShow: true, type: 'confirmSignup' }));

      dispatch(setSetting(true));
      refetch('getUserInfo');
    },
  });
};

// 이메일 확인 API
export const useConfirmEmailApi = refetch => {
  const dispatch = useDispatch();

  const handleConfirmEmail = async () => {
    return await AXIOS_POST('/user/confirm/', {});
  };

  return useMutation(handleConfirmEmail, {
    onError: e => console.log('useConfirmEmailApi::: ', e),
    onSuccess: data => {
      console.log('useConfirmEmailApi::: ', data);
      dispatch(setSetting(true));
      dispatch(isShow({ isShow: false, type: '' }));
      refetch('getUserInfo');
    },
  });
};

// 비밀번호 재설정 API
export const useChangePasswordApi = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChangePassword = async (sendObject: ChangePasswordType) => {
    console.log(sendObject);
    return await AXIOS_PATCH('/user/password/', sendObject);
  };

  return useMutation(handleChangePassword, {
    onError: e => {
      console.log(e);
      dispatch(showToast({ message: '비밀번호 변경에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
    },
    onSuccess: data => {
      dispatch(showToast({ message: '비밀번호가 변경되었습니다!', isShow: true, status: 'success', duration: 5000 }));
      router.push('/admin/reset-password-success');
    },
  });
};

// 비밀번호 재설정 이메일 전송 API
export const useResetPassword = () => {
  const dispatch = useDispatch();

  const handleResetPassword = async (sendObject: ResetPasswordType) => {
    return await AXIOS_POST('/reset/', sendObject);
  };

  return useMutation(handleResetPassword, {
    onError: error => {
      console.log(error);
      // dispatch(showToast({ message: '비밀번호 재설정 메일 발송에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
      dispatch(isShow({ isShow: true, type: 'confirmResetPassword' }));
    },
    onSuccess: data => {
      console.log(data);
      dispatch(showToast({ message: '비밀번호 재설정 메일이 발송되었습니다.', isShow: true, status: '', duration: 5000 }));
      dispatch(isShow({ isShow: true, type: 'confirmResetPassword' }));
    },
  });
};

// 이메일 재전송 API
export const useResendEmail = () => {
  const dispatch = useDispatch();

  const handleResendEmail = async sendObject => {
    return await AXIOS_POST('/resend/', sendObject);
  };

  return useMutation(handleResendEmail, {
    onError: error => {
      console.log(error);
      dispatch(showToast({ message: '인증메일 재전송에 실패하였습니다.', isShow: true, status: 'waring', duration: 5000 }));
    },
    onSuccess: data => {
      console.log(data);
      dispatch(showToast({ message: '인증메일이 재전송 되었습니다.', isShow: true, status: 'sucess', duration: 5000 }));
    },
  });
};

// 토큰 refresh API
export const useRefreshTokenApi = isRefreshToken => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useQuery(['refreshToken'], () => AXIOS_GET('/refreshToken/'), {
    cacheTime: 0,
    enabled: isRefreshToken,
    onError: e => {
      dispatch(updateIsRefreshTokenStatus(false));
    },
    onSuccess: data => {
      dispatch(updateIsRefreshTokenStatus(false));
      const response = data.data;
      localStorage.setItem('accessToken', response.token);
      dispatch(setToken(response.token));
      queryClient.invalidateQueries();
    },
  });
};
