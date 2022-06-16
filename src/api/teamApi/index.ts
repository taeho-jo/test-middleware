import { useDispatch, useSelector } from 'react-redux';
import { AXIOS_GET, AXIOS_PATCH, AXIOS_POST } from '../../hooks/useAxios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { isShow } from '../../store/reducers/modalReducer';
import { updateSelectTeamList, updateTeamInfo } from '../../store/reducers/teamReducer';
import { ReducerType } from '../../store/reducers';
import { showToast } from '../../store/reducers/toastReducer';
import { updateIsRefreshTokenStatus } from '../../store/reducers/authReducer';
import { updateQueryStatus } from '../../store/reducers/useQueryControlReducer';
import { ProductList } from '../productsApi/types';

export const getTeamList = () => {
  return () => AXIOS_GET('/team/');
};

// 팀 리스트 API
export const useGetTeamList = (status = true) => {
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  return useQuery(['getTeamList'], () => AXIOS_GET('/team/'), {
    cacheTime: 0,
    enabled: status,
    onError: (error: any) => {
      const errorData: any = error.response.data;
      const { code, message } = errorData;
      if (code === 'E0008') {
        dispatch(updateIsRefreshTokenStatus(true));
      }
    },
    onSuccess: data => {
      const response = data.data;
      if (response.count === 0) {
        dispatch(
          updateTeamInfo([
            {
              teamSeq: null,
              teamRoleType: null,
              teamNm: `${userInfo.userName}`,
              teamMember: [userInfo.userName.slice(0, 1)],
              createDt: null,
            },
          ]),
        );
        dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));
      } else {
        const selectTeam = localStorage.getItem('selectTeamList');
        // if (!selectTeam) {
        const saveItem = { ...response.list[0] };
        dispatch(updateTeamInfo(response.list));
        dispatch(updateSelectTeamList(response.list[0]));
        localStorage.setItem('teamSeq', response.list[0].teamSeq);
        localStorage.setItem('selectTeamList', JSON.stringify(saveItem));
        dispatch(updateQueryStatus({ name: 'teamListQuery', status: false }));
      }
    },
  });
};
export const useReFetchTeamList = queryClient => {
  return queryClient.fetchQuery(['getTeamList'], () => AXIOS_GET('/team/'));
};

// 팀 생성 API
export const useCreateTeamApi = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handleCreateTeam = async sendObject => {
    return await AXIOS_POST('/team/', sendObject);
  };

  return useMutation(handleCreateTeam, {
    onError: e => {
      console.log(e);
      dispatch(showToast({ message: '팀 생성에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
    },
    onSuccess: data => {
      console.log(data.data, '++++++++++++++++++++++++++');
      dispatch(showToast({ message: '팀 생성이 완료되었습니다.', isShow: true, status: '', duration: 5000 }));
      localStorage.setItem('selectTeamList', JSON.stringify(data.data));
      dispatch(updateQueryStatus({ name: 'teamListQuery', status: true }));
      dispatch(isShow({ isShow: true, type: 'inviteTeamMember' }));
      // queryClient.invalidateQueries(['getTeamList']);
    },
  });
};

// 팀 수정 API
export const useUpdateTeamInfoApi = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const teamSeq = localStorage.getItem('teamSeq');

  const handleUpdateTeamInfo = async sendObject => {
    return await AXIOS_PATCH(`/team/${teamSeq}/`, sendObject);
  };

  return useMutation(handleUpdateTeamInfo, {
    onError: e => {
      console.log(e);
    },
    onSuccess: data => {
      dispatch(showToast({ message: '팀 명이 수정되었습니다.', isShow: true, status: '', duration: 5000 }));
      dispatch(updateQueryStatus({ name: 'teamListQuery', status: true }));
      dispatch(isShow({ isShow: false, type: '' }));
      // queryClient.invalidateQueries(['getTeamList']);
    },
  });
};

// 팀원 리스트 API
export const useTeamMemberListApi = test => {
  // console.log(JSON.parse(teamSeq2)[0].teamSeq, '~~~~~~~~~~~~');
  const selectTeamList = localStorage.getItem('selectTeamList');
  const teamSeq = JSON.parse(selectTeamList)?.teamSeq;
  return useQuery(['getTeamMemberList'], () => AXIOS_GET(`/team/${teamSeq}/member/`), {
    cacheTime: 0,
    enabled: test,
    onSuccess: data => {
      console.log(data, 'DATA');
    },
  });
};

// 프로덕트 조회 API
export const useGetProductsListApi = (status = true) => {
  const selectTeamList = localStorage.getItem('selectTeamList');
  const teamSeq = JSON.parse(selectTeamList).teamSeq;
  return useQuery(['getProductsList'], () => AXIOS_GET(`/team/${teamSeq}/product/`), {
    cacheTime: 0,
    enabled: status,
    onError: e => console.log(e),
    onSuccess: data => {
      console.log(data, 'PRODUCT DATA');
    },
  });
};
// 프로덕트 선택 조회 API
export const useReFetchProductsListApi = async (queryClient, id) => {
  return await queryClient.fetchQuery(['getProductsList'], () => AXIOS_GET(`/team/${id}/product/`));
};

// 프로덕트 생성 API
export const useCreateProductApi = () => {
  const selectTeamList = localStorage.getItem('selectTeamList');
  const teamSeq = JSON.parse(selectTeamList).teamSeq;
  const handleCreateProduct = async sendObject => {
    return await AXIOS_POST(`/team/${teamSeq}/product/`, sendObject);
  };

  return useMutation(handleCreateProduct, {
    onError: e => console.log(e),
    onSuccess: data => {
      console.log(data);
    },
  });
};

// 프로덕트 수정 API
export const useUpdateProductApi = productSeq => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const selectTeamList = localStorage.getItem('selectTeamList');
  const teamSeq = JSON.parse(selectTeamList).teamSeq;

  const handleUpdateProduct = async sendObject => {
    return await AXIOS_PATCH(`/team/${teamSeq}/product/${productSeq}/`, sendObject);
  };
  return useMutation(handleUpdateProduct, {
    onError: e => console.log(e),
    onSuccess: data => {
      dispatch(isShow({ isShow: false, type: '' }));
      dispatch(showToast({ message: '프로덕트 정보가 수정되었습니다.', isShow: true, status: '', duration: 5000 }));
      queryClient.invalidateQueries(['getProductsList']);
      console.log(data);
    },
  });
};

// 팀원 초대 API
export const useInviteTeamMemberEmailApi = () => {
  const dispatch = useDispatch();
  const handleInviteTeam = async sendObject => {
    return await AXIOS_POST('/team/member/invite/', sendObject);
  };

  return useMutation(handleInviteTeam, {
    onError: (e: any) => {
      console.log(e);
      dispatch(showToast({ message: '팀원 초대에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
      // if (e.response.data.code === 'E0008') {
      //   const { data } = useRefreshTokenApi(true);
      //   console.log(data);
      // }
    },
  });
};
