import { useMutation } from 'react-query';
import { AXIOS_POST } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/reducers/authReducer';
import { useRouter } from 'next/router';
import { LoginInputType, SignupInputType } from './types';
import { showToast } from '../../store/reducers/toastReducer';

export const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (sendObject: LoginInputType) => {
    return await AXIOS_POST('/user/login', sendObject);
  };

  return useMutation(handleLogin, {
    onError: error => console.log(error),
    onSuccess: data => {
      console.log(data, 'DATA, !');
      const { body, header } = data;
      if (header.status !== 201) {
        dispatch(showToast({ message: header.message, isShow: true, status: 'warning', duration: 5000 }));
      } else {
        dispatch(showToast({ message: header.message, isShow: true, status: 'success', duration: 5000 }));
      }
    },
  });
};

export const useSignup = () => {
  const dispatch = useDispatch();

  const handleSignup = async (sendObject: SignupInputType) => {
    return await AXIOS_POST('/user/register', sendObject);
  };

  return useMutation(handleSignup, {
    onError: error => console.log(error),
    onSuccess: data => {
      console.log(data, 'DATA, !');
      const { body, header } = data;
      if (header.status !== 201) {
        dispatch(showToast({ message: header.message, isShow: true, status: 'warning', duration: 5000 }));
      } else {
        dispatch(showToast({ message: header.message, isShow: true, status: 'success', duration: 5000 }));
      }
    },
  });
};
