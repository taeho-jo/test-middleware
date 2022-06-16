import { useMutation, useQuery } from 'react-query';
import { AXIOS_GET, AXIOS_PATCH } from '../../hooks/useAxios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../store/reducers/userReducer';
import { useRouter } from 'next/router';
import { isShow } from '../../store/reducers/modalReducer';
import { UpdateUserInfoType } from './types';
import { updateQueryStatus } from '../../store/reducers/useQueryControlReducer';
import { ReducerType } from '../../store/reducers';

// 사용자 정보 API
export const useGetUserInfo = (status?: boolean) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const userInfoQuery = useSelector<ReducerType, boolean>(state => state.userInfoQuery);
  return useQuery(['getUserInfo'], () => AXIOS_GET('/user/info/'), {
    cacheTime: 0,
    // staleTime: 10000,
    enabled: status === false ? false : true,
    onError: e => {
      console.log(e);
    },
    onSuccess: data => {
      dispatch(setUserInfo(data.data));
      if (data.data.emailVerifiedYn === 'N') {
        console.log('NNNNNNNNNN');
        dispatch(setUserInfo(data.data));
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data.data.emailVerifiedYn === 'Y') {
        console.log('YYYYYYYYY');
        // dispatch(updateQueryStatus({ name: 'userInfoQuery', status: false }));
        // dispatch(updateQueryStatus({ name: 'teamListQuery', status: true }));
        router.push('/admin/team');
      }
    },
  });
};
export const useRefetchGetUserInfoApi = queryClient => {
  return queryClient.fetchQuery(['getUserInfo']);
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
