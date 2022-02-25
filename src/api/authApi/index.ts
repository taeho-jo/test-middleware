import { useMutation } from 'react-query';
import { AXIOS_POST } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/reducers/authReducer';
import { useRouter } from 'next/router';
import { LoginInputType } from './types';

export const useLogin = (sendObject: LoginInputType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    return AXIOS_POST('/auth/login', sendObject);
  };

  return useMutation(handleLogin, {
    onSuccess: data => {
      dispatch(setToken(data.token));
      router.push('/');
    },
  });
};
