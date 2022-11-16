import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AXIOS_GET, AXIOS_PATCH, AXIOS_POST } from '../../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePasswordType, LoginInputType, ResetPasswordType, SignupInputType } from './types';
import { showToast } from '../../store/reducers/toastReducer';
import { isShow } from '../../store/reducers/modalReducer';
import { setToken, updateIsRefreshTokenStatus } from '../../store/reducers/authReducer';
import { useRouter } from 'next/router';
import { ReducerType } from '../../store/reducers';
import { updateCommonCode } from '../../store/reducers/commonReducer';
import { updateQueryStatus } from '../../store/reducers/useQueryControlReducer';

export const useGoogleLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // dispatch(setSetting(false));
  router.push('/admin/team');
};

// 회원가입 API
// export const useSignupApi = () => {
//   const dispatch = useDispatch();
//
//   const handleSignup = async (sendObject: SignupInputType) => {
//     return await AXIOS_POST('/register', sendObject);
//   };
//
//   return useMutation(handleSignup, {
//     onError: (error: any) => {
//       const { data, status } = error.response;
//       dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
//     },
//     onSuccess: async res => {
//       localStorage.setItem('accessToken', res.data.token);
//       dispatch(setToken(res.data.token));
//       dispatch(showToast({ message: res.message, isShow: true, status: 'success', duration: 5000 }));
//       dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
//     },
//   });
// };

// 로그인 API
export const fetchLoginApi = async sendObject => {
  return await AXIOS_POST('/login', sendObject);
};

// 회원가입 API
export const fetchSignupApi = async sendObject => {
  return await AXIOS_POST('/register', sendObject);
};

// 이메일 확인 API
export const fetchEmailConfirmApi = async (token?: string) => {
  return await AXIOS_POST('/user/confirm', {}, token);
};

// 인증 이메일 재전송 API
export const fetchEmailResendApi = async sendObject => {
  return await AXIOS_POST('/resend', sendObject);
};

// 비밀번호 재설정 확인 메일 API
export const fetchResetPasswordEmailApi = async sendObject => {
  return await AXIOS_POST('/reset', sendObject);
};

// 비밀번호 재설정 API
export const fetchChangePasswordApi = async sendObject => {
  return await AXIOS_PATCH('/user/password', sendObject);
};

// 토큰 refresh API
export const fetchRefreshToken = async () => {
  return await AXIOS_GET('/refresh');
};

// 공통 code API
export const fetchCommonCodeApi = async () => {
  return await AXIOS_GET('/admin/code');
};
