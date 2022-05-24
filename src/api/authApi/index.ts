import { useMutation, useQueryClient } from 'react-query';
import { AXIOS_PATCH, AXIOS_POST } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { ChangePasswordType, LoginInputType, ResetPasswordType, SignupInputType } from './types';
import { showToast } from '../../store/reducers/toastReducer';
import { isShow } from '../../store/reducers/modalReducer';
import { setToken } from '../../store/reducers/authReducer';
import { useRouter } from 'next/router';
import { setEmailConfirm, setSetting } from '../../store/reducers/userReducer';

export const useGoogleLogin = () => {
  // const router = useRouter();
  // console.log(router.query, 'QUERY');
};

// 로그인 API
export const useLoginApi = () => {
  const dispatch = useDispatch();

  const handleLogin = async (sendObject: LoginInputType) => {
    return await AXIOS_POST('/login', sendObject);
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
    },
  });
};

// 회원가입 API
export const useSignupApi = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handleSignup = async (sendObject: SignupInputType) => {
    return await AXIOS_POST('/register', sendObject);
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
    },
  });
};

// 이메일 확인 API
export const useConfirmEmailApi = () => {
  const dispatch = useDispatch();

  const handleConfirmEmail = async () => {
    return await AXIOS_POST('/auth/confirm', {});
  };

  return useMutation(handleConfirmEmail, {
    onError: e => console.log('useConfirmEmailApi::: ', e),
    onSuccess: data => {
      console.log('useConfirmEmailApi::: ', data);
      dispatch(setSetting(true));
    },
  });
};

// 비밀번호 재설정 API
export const useChangePasswordApi = () => {
  const handleChangePassword = async (sendObject: ChangePasswordType) => {
    console.log(sendObject);
    return await AXIOS_PATCH('/user/password', sendObject);
  };

  return useMutation(handleChangePassword, {
    onError: e => console.log(e),
    onSuccess: data => console.log(data),
  });
};

// 비밀번호 재설정 이메일 전송 API
export const useResetPassword = () => {
  const dispatch = useDispatch();

  const handleResetPassword = async (sendObject: ResetPasswordType) => {
    return await AXIOS_POST('/reset', sendObject);
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
    return await AXIOS_POST('/resend', sendObject);
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
