import React, { useCallback, useEffect, useState } from 'react';
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
import uiBackground from '/public/assets/png/image_thumbnail_uitest.png';
import customerBackground from '/public/assets/png/image_thumbnail_customer.png';
import scenarioBackground from '/public/assets/png/image_thumbnail_scenario.png';
import uxBackground from '/public/assets/png/image_thumbnail_uxposition.png';
import ResearchModuleButton from '../../atoms/ResearchModuleButton';
import { isShow } from '../../../store/reducers/modalReducer';
import ResearchList from '../ResearchList';
import { ReducerType } from '../../../store/reducers';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { fetchTeamListApi, fetchTeamReportListApi } from '../../../api/teamApi';
import { updateQueryStatus } from '../../../store/reducers/useQueryControlReducer';
import { updateSelectTeamList, updateTeamInfo, updateTeamSeq } from '../../../store/reducers/teamReducer';
import { fetchRefreshToken } from '../../../api/authApi';

const ResearchType = [
  {
    title: '어떤 리서치를 해야할 지 모르겠어요.',
    link: 'https://naver.com',
    backgroundColor: `${colors.grey._3c}`,
    color: `${colors.white}`,
    hoverImage: null,
    image: null,
  },
  {
    title: 'UI 진단',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon1,
    image: icon1_inActive,
    modalType: 'uiResearchModule',
  },
  {
    title: '시나리오 검증',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon3,
    image: icon3_inActive,
    modalType: 'scenarioResearchModule',
  },
  {
    title: 'UX 포지션 분석',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon2,
    image: icon2_inActive,
    modalType: 'uxResearchModule',
  },
  {
    title: '잠재 고객 검증',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon4,
    image: icon4_inActive,
    modalType: 'customerResearchModule',
  },
];

const DummyListData = [
  { img: uiBackground.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: customerBackground.src, testTitle: '우쥬테스트 잠재 고객 조사', testType: '잠재 고객 조사', testDate: '2022. 03. 15' },
  { img: scenarioBackground.src, testTitle: '우쥬테스트 시나리오 검증', testType: '시나리오 검증', testDate: '2022. 03. 15' },
  { img: uxBackground.src, testTitle: '우쥬테스트 UX 포지션 분석', testType: 'UX 포지션 분석', testDate: '2022. 03. 15' },
];

const TeamDashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();
  const userInfoQuery = useSelector<ReducerType, boolean>(state => state.userInfoQuery);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  // const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  const selectTeamSeq = localStorage.getItem('teamSeq');

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
      return data.data;
    },
  });
  // ============ React Query ============ //

  const showResearchModuleModal = useCallback(modalType => {
    dispatch(isShow({ isShow: true, type: modalType }));
  }, []);

  const handleMoveDetail = useCallback(id => {
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
              teamRoleType: null,
              teamNm: `${userInfo.userName}`,
              teamMember: [userInfo.userName.slice(0, 1)],
              createDt: null,
            },
          ]),
        );
        dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));
      } else {
        dispatch(updateTeamInfo(list));
        if (selectTeamList !== null) {
          dispatch(updateSelectTeamList(list[0]));
        }
        if (selectTeamSeq !== null) {
          dispatch(updateTeamSeq(list[0]?.teamSeq));
        }

        localStorage.setItem('teamSeq', list[0]?.teamSeq);
        localStorage.setItem('selectTeamList', JSON.stringify(list[0]));
      }
    }
  }, [teamListData]);

  return (
    <>
      <div css={teamMainContainer}>
        <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={researchKinds}>
          <span css={[body2_bold, titleStyle]}>리서치 종류 (모듈)</span>
          <FlexBox justify={'flex-start'} align={'flex-start'}>
            {ResearchType.map((item, index) => {
              return (
                <ResearchModuleButton
                  onClick={showResearchModuleModal}
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
          {/*<div css={{ height: '620px', background: 'pink', overflow: 'scroll' }}>*/}
          <ResearchList handleMoveDetail={handleMoveDetail} listData={teamReportList} />
          {/*</div>*/}
        </FlexBox>
      </div>
    </>
  );
};

export default TeamDashboard;

const teamMainContainer = css`
  overflow: scroll;
  height: calc(100vh - 95px);
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
