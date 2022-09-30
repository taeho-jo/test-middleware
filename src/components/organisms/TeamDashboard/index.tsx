import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { body1_medium, body2_bold, body3_medium, heading1_bold, heading2_bold } from '../../../styles/FontStyles';
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
import { getTeamList, updateSelectTeamList, updateTeamInfo, updateTeamSeq } from '../../../store/reducers/teamReducer';
import { updateProjectName } from '../../../store/reducers/reportReducer';
import { clearLocalStorage, debounceFunction } from '../../../common/util/commonFunc';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { useForm, Controller } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Icon from '../../atoms/Icon';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { fetchResearchList } from '../../../store/reducers/researchCreateReducer';
import { getRefreshToken } from '../../../store/reducers/authReducer';
import CheckBox from '../../atoms/CheckBox';

const ResearchType = [
  {
    title: '1분만에 리서치 종류 추천받기',
    link: 'https://form.typeform.com/to/lmyqEfEb',
    backgroundColor: `${colors.grey._3c}`,
    color: `${colors.white}`,
    hoverImage: null,
    image: null,
  },
  {
    title: '사용성 테스트',
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
    modalType: 'shortSurveyResearchModule',
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

  // filter redux
  const RESEARCH_TYPE = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);
  const RESEARCH_STATUS = useSelector<ReducerType, any>(state => state.common.commonCode.StatusType);

  const contValue = useSelector<ReducerType, number>(state => state.counter.value);

  const [selected, setSelected] = useState({
    allResearch: '',
  });

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleSearchResearchList(data);
  const onError = errors => console.log('fail', errors);

  // 리서치 필터 모달 상태
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterType, setFilterType] = useState({
    type: false,
    status: false,
  });
  const [searchText, setSearchText] = useState('');
  const [filterTypeArr, setFilterTypeArr] = useState([]);
  const [filterStatusArr, setFilterStatusArr] = useState([]);
  const handleShowFilterModal = status => {
    setShowFilterModal(status);
  };

  const handleChangeFilterTypeCheckBox = useCallback(
    value => {
      if (filterTypeArr.length === 0) {
        setFilterTypeArr([...filterTypeArr, value]);
      }
      if (filterTypeArr.includes(value)) {
        const newTypeArr = filterTypeArr.filter(el => el !== value);
        setFilterTypeArr(newTypeArr);
      } else {
        setFilterTypeArr([...filterTypeArr, value]);
      }
    },
    [filterTypeArr],
  );
  const handleChangeFilterStatusCheckBox = useCallback(
    value => {
      if (filterStatusArr.length === 0) {
        setFilterStatusArr([...filterStatusArr, value]);
      }
      if (filterStatusArr.includes(value)) {
        const newStatusArr = filterStatusArr.filter(el => el !== value);
        setFilterStatusArr(newStatusArr);
      } else {
        setFilterStatusArr([...filterStatusArr, value]);
      }
    },
    [filterStatusArr],
  );

  // 필터 초기화
  const resetFilter = () => {
    filterStatusArr.forEach(el => setValue(el, false));
    filterTypeArr.forEach(el => setValue(el, false));
    setFilterTypeArr([]);
    setFilterStatusArr([]);
  };

  const getResearchList = (teamSeq, researchNm: any = '', researchType = '', statusType = '') => {
    const params = {
      teamSeq: teamSeq,
      searchText: researchNm,
      researchType: researchType,
      statusType: statusType,
    };
    dispatch(fetchResearchList({ params: params }));
  };

  // 리서치 목록 검색
  const handleSearchResearchList = data => {
    setSearchText(data.researchNm);
    getResearchList(
      selectTeamSeq,
      data.researchNm,
      filterTypeArr.length > 0 ? filterTypeArr.join() : '',
      filterStatusArr.length > 0 ? filterStatusArr.join() : '',
    );
  };
  const debounceSearch = value => {
    getResearchList(
      selectTeamSeq,
      value,
      filterTypeArr.length > 0 ? filterTypeArr.join() : '',
      filterStatusArr.length > 0 ? filterStatusArr.join() : '',
    );
  };
  // 리서치 목록 필터 검색
  useEffect(() => {
    if (selectTeamSeq) {
      getResearchList(
        selectTeamSeq,
        searchText,
        filterTypeArr.length > 0 ? filterTypeArr.join() : '',
        filterStatusArr.length > 0 ? filterStatusArr.join() : '',
      );
    }
  }, [filterStatusArr, filterTypeArr, selectTeamSeq]);
  // 팀목록 조회
  useEffect(() => {
    const sendObject = {
      teamNm: `${userInfo?.userName}`,
      teamMember: [userInfo?.userName.slice(0, 1)],
      selectTeamList,
      teamSeq: selectTeamSeq,
    };
    dispatch(getTeamList(sendObject));
  }, []);

  const showResearchModuleModal = useCallback(modalType => {
    dispatch(isShow({ isShow: true, type: modalType }));
  }, []);

  const handleMoveDetail = useCallback((e: any, id: string, name: string) => {
    e.stopPropagation();
    // dispatch(updateProjectName(name));
    console.log(id);
    // router.push(`/admin/report/${id}`);
  }, []);

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
            <span css={[body2_bold, titleStyle, { marginBottom: 0, marginRight: '16px' }]}>우리 팀의 리서치 목록</span>
            <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ width: '249px', boxSizing: 'border-box', position: 'relative' }}>
              <Input
                title={''}
                register={register}
                label={'researchNm'}
                errors={errors}
                errorMsg={'필수 항목입니다.'}
                placeholder={'우리 팀의 리서치 검색하기'}
                registerOptions={{
                  onChange: debounceFunction(e => debounceSearch(e.target.value), 1000),
                }}
                style={{
                  border: `1px solid #DCDCDC`,
                }}
              />
              <button
                css={css`
                  border: none;
                  background: none;
                  position: absolute;
                  top: 50%;
                  right: 8px;
                  transform: translateY(-50%);
                `}
                type={'submit'}
              >
                <Icon name={'ACTION_SEARCH'} />
              </button>
            </Form>

            <div
              css={css`
                position: relative;
              `}
            >
              <IconTextButton
                name={'ACTION_FILTER'}
                iconPosition={'left'}
                text={`필터(${filterTypeArr.length + filterStatusArr.length})`}
                onClick={() => handleShowFilterModal(true)}
                css={filterBtnStyle}
              />
              {showFilterModal && (
                <div css={filterModalStyle}>
                  <FlexBox align={'center'} justify={'space-between'} style={{ boxSizing: 'border-box' }}>
                    {(filterType.type || filterType.status) && (
                      <Icon
                        name={'NAVIGATION_ARROW_LEFT'}
                        size={24}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setFilterType({ type: false, status: false })}
                      />
                    )}

                    <span css={[heading2_bold]}>{filterType.type ? '리서치 종류' : filterType.status ? '리서치 상태' : '필터'}</span>
                    {!filterType.type && !filterType.status && (
                      <Icon onClick={() => handleShowFilterModal(false)} name={'NAVIGATION_CLOSE_LG'} size={24} style={{ cursor: 'pointer' }} />
                    )}
                  </FlexBox>

                  <div>
                    {!filterType.type && !filterType.status && (
                      <FlexBox
                        align={'center'}
                        justify={'space-between'}
                        style={css`
                          margin-top: 26px;
                          cursor: pointer;
                        `}
                        onClick={() => setFilterType({ ...filterType, type: true })}
                      >
                        <span css={[body1_medium]}>리서치 종류</span>
                        <span css={[body1_medium, { color: '#cccccc' }]}>{filterTypeArr.length} 필터</span>
                      </FlexBox>
                    )}

                    {filterType.type && !filterType.status && (
                      <div
                        className={'scrollType1'}
                        css={css`
                          margin-top: 20px;
                          height: 200px;
                          overflow-y: scroll;
                        `}
                      >
                        {RESEARCH_TYPE?.map(el => {
                          return (
                            <div
                              key={el.value}
                              css={css`
                                padding: 8px;
                                width: 100%;
                              `}
                            >
                              <CheckBox
                                handleChangeCheckBox={() => handleChangeFilterTypeCheckBox(el.value)}
                                checked={filterTypeArr.find(el => el.value)}
                                inputName={el.value}
                                label={el.displayName}
                                register={register}
                                errors={errors}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div>
                    {!filterType.type && !filterType.status && (
                      <FlexBox
                        align={'center'}
                        justify={'space-between'}
                        style={css`
                          margin-top: 20px;
                          cursor: pointer;
                        `}
                        onClick={() => setFilterType({ ...filterType, status: true })}
                      >
                        <span css={[body1_medium]}>리서치 상태</span>
                        <span css={[body1_medium, { color: '#cccccc' }]}>{filterStatusArr.length} 필터</span>
                      </FlexBox>
                    )}

                    {filterType.status && (
                      <div
                        className={'scrollType1'}
                        css={css`
                          margin-top: 20px;
                          height: 200px;
                          overflow-y: scroll;
                        `}
                      >
                        {RESEARCH_STATUS?.map(el => {
                          return (
                            <div
                              key={el.value}
                              css={css`
                                padding: 8px;
                                width: 100%;
                              `}
                            >
                              <CheckBox
                                handleChangeCheckBox={() => handleChangeFilterStatusCheckBox(el.value)}
                                checked={filterStatusArr.find(el => el.value)}
                                inputName={el.value}
                                label={el.displayName}
                                register={register}
                                errors={errors}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {!filterType.type && !filterType.status && (
                    <FlexBox
                      align={'center'}
                      justify={'space-between'}
                      style={css`
                        margin-top: 27px;
                      `}
                      onClick={resetFilter}
                    >
                      <span css={[body3_medium, { cursor: 'pointer', textDecoration: 'underline' }]}>초기화</span>
                    </FlexBox>
                  )}
                </div>
              )}
            </div>
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
const filterModalStyle = css`
  width: 320px;
  //height: 230px;
  position: absolute;
  background: white;
  z-index: 100;
  top: 0;
  right: -330px;
  border: 2px solid #3c3c46;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 10px 16px;
`;
const filterBtnStyle = css`
  width: 107px;
  height: 40px;
  border: 1px solid #3c3c46;
  border-radius: 8px;
  margin-left: 16px;
`;
