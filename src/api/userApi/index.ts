import { useQuery } from 'react-query';
import { AXIOS_GET } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { setSetting, setUserInfo } from '../../store/reducers/userReducer';
import { useRouter } from 'next/router';
import { isShow } from '../../store/reducers/modalReducer';

export const useGetUserInfo = userInfoSettingValue => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['getUserInfo'], () => AXIOS_GET('/user/info'), {
    cacheTime: 0,
    // staleTime: 10000,
    enabled: userInfoSettingValue,
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
