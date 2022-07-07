import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { body2_bold } from '../../../styles/FontStyles';

import icon1_inActive from '../../../../public/assets/images/admin/team/uitest_inactive.png';
import icon2_inActive from '../../../../public/assets/images/admin/team/scenario_inactive.png';
import icon3_inActive from '../../../../public/assets/images/admin/team/uxposition_inactive.png';
import icon4_inActive from '../../../../public/assets/images/admin/team/customer_inactive.png';
import icon1 from '../../../../public/assets/images/admin/team/uitest_hover.png';
import icon2 from '../../../../public/assets/images/admin/team/scenario_hover.png';
import icon3 from '../../../../public/assets/images/admin/team/uxposition_hover.png';
import icon4 from '../../../../public/assets/images/admin/team/customer_hover.png';
import ResearchModuleButton from '../../atoms/ResearchModuleButton';
import { isShow } from '../../../store/reducers/modalReducer';
import ResearchList from '../ResearchList';
import { ReducerType } from '../../../store/reducers';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { fetchTeamListApi, fetchTeamReportListApi } from '../../../api/teamApi';
import { updateSelectTeamList, updateTeamInfo, updateTeamSeq } from '../../../store/reducers/teamReducer';
import { fetchRefreshToken } from '../../../api/authApi';
import { updateProjectName } from '../../../store/reducers/reportReducer';

const ResearchType = [
  {
    title: '어떤 리서치를 해야할 지 모르겠어요.',
    link: 'https://form.typeform.com/to/lmyqEfEb',
    backgroundColor: `${colors.grey._3c}`,
    color: `${colors.white}`,
    hoverImage: null,
    image: null,
  },
  {
    title: 'UI 진단',
    link: 'https://dbdlab.notion.site/UI-5a3e44a7bcb2439097e311fd62ad5e5d',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon1,
    image: icon1_inActive,
    modalType: 'uiResearchModule',
  },
  {
    title: '시나리오 검증',
    link: 'https://dbdlab.notion.site/e431cc58286c4b1b9113f45f1ce88f57',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon3,
    image: icon3_inActive,
    modalType: 'scenarioResearchModule',
  },
  {
    title: 'UX 포지션 분석',
    link: 'https://dbdlab.notion.site/UX-205652e102c3439b9bcb44a7383f5bb3',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon2,
    image: icon2_inActive,
    modalType: 'uxResearchModule',
  },
  {
    title: '잠재 고객 검증',
    link: 'https://dbdlab.notion.site/34d243dc532d462b84468a710a63c3e8',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon4,
    image: icon4_inActive,
    modalType: 'customerResearchModule',
  },
];

const TeamDashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  // const selectTeamSeq = localStorage.getItem('teamSeq');

  // ============ React Query ============ //
  const { data: teamListData, isLoading } = useQuery(['fetchTeamList'], fetchTeamListApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        queryClient.invalidateQueries(['fetchTeamList']);
      }
      if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      }
    },
  });
  const { data: teamReportList, refetch } = useQuery(['fetchTeamReportList', selectTeamSeq], () => fetchTeamReportListApi(selectTeamSeq), {
    enabled: !!teamListData,
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        refetch();
      }
      if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      }
    },
    select: data => {
      console.log(data, 'DATA DATA');
      return data.data;
    },
  });
  // ============ React Query ============ //

  const showResearchModuleModal = useCallback(modalType => {
    dispatch(isShow({ isShow: true, type: modalType }));
  }, []);

  const handleMoveDetail = useCallback((id, name) => {
    dispatch(updateProjectName(name));
    router.push(`/admin/report/${id}`);
  }, []);

  useEffect(() => {
    if (teamListData?.code === '200') {
      const count = teamListData?.data?.count;
      const list = teamListData?.data?.list;
      if (count === 0) {
        dispatch(
          updateTeamInfo([
            {
              teamSeq: null,
              teamNm: `${userInfo?.userName}`,
              teamMember: [userInfo?.userName.slice(0, 1)],
              createDt: null,
            },
          ]),
        );
        dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));
      } else {
        dispatch(updateTeamInfo(list));
        if (selectTeamList === null) {
          dispatch(updateSelectTeamList(list[0]));
        }
        if (selectTeamSeq === null) {
          dispatch(updateTeamSeq(list[0]?.teamSeq));
        }

        localStorage.setItem('teamSeq', list[0]?.teamSeq);
        localStorage.setItem('selectTeamList', JSON.stringify(list[0]));
      }
    }
  }, [teamListData, selectTeamList, selectTeamSeq]);

  return (
    <>
      <div css={teamMainContainer}>
        <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={researchKinds}>
          <span css={[body2_bold, titleStyle]}>테스트 종류</span>
          <FlexBox justify={'flex-start'} align={'flex-start'}>
            {ResearchType.map((item, index) => {
              return (
                <ResearchModuleButton
                  onClick={index === 0 ? () => window.open(item.link) : showResearchModuleModal}
                  key={index}
                  title={item.title}
                  link={item.link}
                  backgroundColor={item.backgroundColor}
                  color={item.color}
                  image={item.image}
                  hoverImage={item.hoverImage}
                  modalType={item.modalType}
                  index={index}
                />
              );
            })}
          </FlexBox>
        </FlexBox>
        <FlexBox style={{ padding: '24px 32px 32px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
          <span css={[body2_bold, titleStyle]}>모든 리서치</span>
          <ResearchList handleMoveDetail={handleMoveDetail} listData={teamReportList} />
        </FlexBox>
      </div>
    </>
  );
};

export default TeamDashboard;

const teamMainContainer = css`
  //height: calc(100vh - 95px);
`;

const researchKinds = css`
  background-color: ${colors.grey._ec};
  padding: 25px 31px 33px 31px;
  margin-right: 16px;
`;
const titleStyle = css`
  margin-bottom: 24px;
  display: block;
`;
