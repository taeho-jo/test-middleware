import { useMutation, useQuery } from 'react-query';
import { AXIOS_GET, AXIOS_PATCH } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { setSetting, setUserInfo } from '../../store/reducers/userReducer';
import { useRouter } from 'next/router';
import { isShow } from '../../store/reducers/modalReducer';
import { UpdateUserInfoType } from './types';

// 사용자 정보 API
export const useGetUserInfo = userInfoSettingValue => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['getUserInfo'], () => AXIOS_GET('/user/info/'), {
    cacheTime: 0,
    // staleTime: 10000,
    enabled: userInfoSettingValue,
    onError: e => {
      console.log(123);
    },
    onSuccess: data => {
      dispatch(setUserInfo(data.data));
      if (data.data.emailVerifiedYn === 'N') {
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data.data.emailVerifiedYn === 'Y') {
        dispatch(setSetting(false));
        router.push('/admin/team');
      }
    },
  });
};

// 사용자 정보 업데이트 API
export const useUpdateUserInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleUpdate = async (sendObject: UpdateUserInfoType) => {
    console.log(sendObject, '!');
    return await AXIOS_PATCH('/user/update/', sendObject);
  };

  return useMutation(handleUpdate, {
    onError: e => console.log(e),
    onSuccess: data => {
      console.log(data.data);
      console.log(data);
      dispatch(setUserInfo(data.data));
      router.push('/admin/team');
    },
  });
};
