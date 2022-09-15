import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { body2_bold } from '../../../styles/FontStyles';

import icon1_inActive from '../../../../public/assets/images/admin/team/uitest_inactive.png';
import icon2_inActive from '../../../../public/assets/images/admin/team/scenario_inactive.png';
import icon3_inActive from '../../../../public/assets/images/admin/team/uxposition_inactive.png';
import icon4_inActive from '../../../../public/assets/png/abtest_inactive.png';
import icon5_inActive from '../../../../public/assets/png/fgd_inactive.png';
import icon1 from '../../../../public/assets/images/admin/team/uitest_hover.png';
import icon2 from '../../../../public/assets/images/admin/team/scenario_hover.png';
import icon3 from '../../../../public/assets/images/admin/team/uxposition_hover.png';
import icon4 from '../../../../public/assets/png/abtest_hover.png';
import icon5 from '../../../../public/assets/png/fgd_hover.png';
import ResearchModuleButton from '../../atoms/ResearchModuleButton';
import { isShow } from '../../../store/reducers/modalReducer';
import ResearchList from '../ResearchList';
import { ReducerType } from '../../../store/reducers';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { fetchTeamListApi, fetchTeamReportListApi } from '../../../api/teamApi';
import { getProductList, updateSelectTeamList, updateTeamInfo, updateTeamSeq } from '../../../store/reducers/teamReducer';
import { fetchRefreshToken } from '../../../api/authApi';
import { updateProjectName } from '../../../store/reducers/reportReducer';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import { increment } from '../../../store/reducers/counterReducer';
import Select from '../../atoms/Select';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';
import IconButton from '../../atoms/Button/IconButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { fetchGetResearchListApi } from '../../../api/researchApi';
import { fetchResearchList } from '../../../store/reducers/researchCreateReducer';
import { getRefreshToken } from '../../../store/reducers/authReducer';

const ResearchType = [
  {
    title: '어떤 리서치를 해야할까요?',
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
    title: 'FGD',
    link: 'https://dbdlab.notion.site/34d243dc532d462b84468a710a63c3e8',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon5,
    image: icon5_inActive,
    modalType: 'customerResearchModule',
  },
  {
    title: '가설 검증',
    link: 'https://dbdlab.notion.site/e431cc58286c4b1b9113f45f1ce88f57',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon2,
    image: icon2_inActive,
    modalType: 'scenarioResearchModule',
  },
  {
    title: 'UX 포지션 분석',
    link: 'https://dbdlab.notion.site/UX-205652e102c3439b9bcb44a7383f5bb3',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon3,
    image: icon3_inActive,
    modalType: 'uxResearchModule',
  },
  {
    title: '짧은 설문',
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
  const teamResearchList = useSelector<ReducerType, any>(state => state.researchCreate.researchList);

  const contValue = useSelector<ReducerType, number>(state => state.counter.value);

  const [selected, setSelected] = useState({
    allResearch: '',
  });

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  // ============ React Query ============ //
  const { data: teamListData, isLoading } = useQuery(['fetchTeamList'], fetchTeamListApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      // if (errorData.code === 'E0008') {
      //   queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
      //   queryClient.invalidateQueries(['fetchTeamList']);
      // }
      if (errorData.code === 'E0007') {
        clearLocalStorage();
        router.push('/');
      }
    },
  });
  const { data: teamReportList, refetch } = useQuery(['fetchTeamReportList', selectTeamSeq], () => fetchTeamReportListApi(selectTeamSeq), {
    enabled: !!teamListData,
    onError: (e: any) => {
      const errorData = e.response.data;
      // if (errorData.code === 'E0008') {
      //   queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
      //   refetch();
      // }
      if (errorData.code === 'E0007') {
        clearLocalStorage();
        router.push('/');
      }
    },
    select: data => {
      return data.data;
    },
  });
  // ============ React Query ============ //
  useEffect(() => {
    if (selectTeamSeq) {
      const params = {
        teamSeq: selectTeamSeq,
        researchNm: '',
        researchType: '',
        statusType: '',
      };
      dispatch(fetchResearchList({ params: params }));
    }
  }, [selectTeamSeq]);

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

  const testApi = () => {
    dispatch(getRefreshToken());
  };

  return (
    <>
      <div css={teamMainContainer}>
        <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={researchKinds}>
          <span css={[body2_bold, titleStyle]}>리서치 종류</span>
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
          <FlexBox direction={'row'} justify={'flex-start'} align={'center'} style={{ marginBottom: '32px' }}>
            <span css={[body2_bold, titleStyle, { width: '73px', marginBottom: 0, marginRight: '16px' }]}>모든 리서치</span>
            <button onClick={testApi}>asdfasdf</button>
            <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ width: '249px', boxSizing: 'border-box', position: 'relative' }}>
              <Input
                title={''}
                register={register}
                label={'userId'}
                errors={errors}
                errorMsg={'필수 항목입니다.'}
                placeholder={'검색어를 입력해주세요'}
                style={{
                  border: `1px solid #DCDCDC`,
                }}
              />
              <div
                css={css`
                  position: absolute;
                  top: 50%;
                  right: 8px;
                  transform: translateY(-50%);
                `}
              >
                <Icon name={'ACTION_SEARCH'} />
              </div>
            </Form>

            <IconTextButton
              name={'ACTION_FILTER'}
              iconPosition={'left'}
              text={`필터(1)`}
              css={css`
                width: 107px;
                height: 40px;
                border: 1px solid #3c3c46;
                border-radius: 8px;
                margin-left: 16px;
              `}
            />
          </FlexBox>

          <ResearchList handleMoveDetail={handleMoveDetail} listData={teamResearchList} />
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
