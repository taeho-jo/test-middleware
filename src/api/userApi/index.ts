import { useQuery } from 'react-query';
import { AXIOS_GET, AXIOS_PATCH } from '../../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { UpdateUserInfoType } from './types';

// 사용자 정보 API
export const fetchUserInfoApi = async (token?: string) => {
  return await AXIOS_GET('/user/info/', token);
};

// 초대 사용자 정보 API
export const fetchInviteUserInfoApi = async (seq, token) => {
  return await AXIOS_GET(`/user/info/team/${seq}/`, token);
};

// 사용자 정보 업데이트 API
export const fetchUserInfoUpdateApi = async (sendObject: UpdateUserInfoType) => {
  return await AXIOS_PATCH('/user/update/', sendObject);
};

// 팀 초대 사용자 정보 API
export const useGetInviteTeamUserInfo = (seq, isSend) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['getInviteTeamUserInfo'], () => AXIOS_GET(`/user/info/team/${seq}/`), {
    cacheTime: 0,
    // staleTime: 10000,
    enabled: isSend,
    onError: e => {
      console.log(e);
    },
    onSuccess: data => {
      router.push('/admin/team');
      console.log(data, '성공했음???');
    },
  });
};
