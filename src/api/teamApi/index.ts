import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { UpdateUserInfoType } from '../userApi/types';
import { AXIOS_GET, AXIOS_PATCH } from '../../hooks/useAxios';
import { useMutation, useQuery } from 'react-query';
import { setSetting, setUserInfo } from '../../store/reducers/userReducer';
import { isShow } from '../../store/reducers/modalReducer';

export const useGetUserInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['getTeamList'], () => AXIOS_GET('/team'), {
    cacheTime: 0,
    onSuccess: data => {
      console.log(data);
    },
  });
};
