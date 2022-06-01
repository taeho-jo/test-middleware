import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AXIOS_GET, AXIOS_POST } from '../../hooks/useAxios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { isShow } from '../../store/reducers/modalReducer';
import { updateTeamInfo } from '../../store/reducers/teamReducer';
import { ReducerType } from '../../store/reducers';
import { showToast } from '../../store/reducers/toastReducer';

// 팀 리스트 API
export const useGetTeamList = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  return useQuery(['getTeamList'], () => AXIOS_GET('/team/'), {
    cacheTime: 0,
    onSuccess: data => {
      const response = data.data;
      if (response.count === 0) {
        dispatch(
          updateTeamInfo([{ teamSeq: null, teamRoleType: null, teamName: `${userInfo.userName}`, memberList: [userInfo.userName.slice(0, 1)] }]),
        );
        dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));
      } else {
        const newTeamArr = response.list.reduce(
          (acc, cur) =>
            acc.concat({
              teamSeq: cur.teamSeq,
              teamName: cur.teamNm,
              teamRoleType: cur.teamRoleType,
              memberList: cur.teamMember,
            }),
          [],
        );
        dispatch(updateTeamInfo(newTeamArr));
      }
    },
  });
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
      console.log(data);
      dispatch(showToast({ message: '팀 생성이 완료되었습니다.', isShow: true, status: '', duration: 5000 }));
      queryClient.invalidateQueries(['getTeamList']);
      dispatch(isShow({ isShow: true, type: 'inviteTeamMember' }));
    },
  });
};

// 팀원 초대 API
export const useInviteTeamMemberEmailApi = () => {
  const dispatch = useDispatch();
  const handleInviteTeam = async sendObject => {
    return await AXIOS_POST('/team/member/invite', sendObject);
  };

  return useMutation(handleInviteTeam, {
    onError: e => {
      console.log(e);
      dispatch(showToast({ message: '팀원 초대에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
    },
  });
};
