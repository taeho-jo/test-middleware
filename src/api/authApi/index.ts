import { useMutation } from 'react-query';
import { AXIOS_POST } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/reducers/authReducer';
import { useRouter } from 'next/router';
import { LoginInputType, SignupInputType } from './types';

export const useLogin = (sendObject: LoginInputType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    return AXIOS_POST('/user/login', sendObject);
  };

  return useMutation(handleLogin, {
    onSuccess: data => {
      dispatch(setToken(data.token));
      router.push('/');
    },
  });
};

export const useSignup = (sendObject: SignupInputType) => {
  const handleSignup = () => {
    return AXIOS_POST('/user/register', sendObject);
  };
  return useMutation(handleSignup, {
    onError: error => console.log(error),
    onSuccess: data => console.log(data, 'Success'),
  });
};
