import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withTokenAuth from '../../../../hoc/withTokenAuth';
import {
  CreateResearchStepFour,
  CreateResearchStepOne,
  CreateResearchStepThree,
  CreateResearchStepTwo,
} from '../../../../components/template/Research';
import { css } from '@emotion/react';
import {
  ResearchFooter,
  ResearchGuideStepOne,
  ResearchHeader,
  ResearchGuideStepTwo,
  ResearchGuideStepThree,
  ResearchGuideStepFour,
  ResearchGuideStepFive,
} from '../../../../components/molecules/Research';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchResearchBasicInfo,
  fetchResearchDetail,
  fetchResearchModifyInfo,
  resetCreateResearchData,
  setStep,
  updateResearchBasicInfo,
} from '../../../../store/reducers/researchCreateReducer';
import CreateResearchStepFive from '../../../../components/template/Research/CreateResearchStepFive';
import { ReducerType } from '../../../../store/reducers';
import { useForm } from 'react-hook-form';
import { showToast } from '../../../../store/reducers/toastReducer';
import { resetRecommendationResult } from '../../../../store/reducers/researchRecommendationReducer';
import { Cookies } from 'react-cookie';
import { setRedirectPath, showDialog } from '../../../../store/reducers/commonReducer';
import { getTeamList, updateSelectTeamList, updateTeamSeq } from '../../../../store/reducers/teamReducer';
import { colors } from '../../../../styles/Common.styles';
import { setUserInfo } from '../../../../store/reducers/userReducer';

const ResearchCreate = props => {
  const dispatch = useDispatch();
  const CREATE_STEP = useSelector<ReducerType, string>(state => state.researchCreate.step);
  const BASIC_INFO = useSelector<ReducerType, any>(state => state.researchCreate.researchBasicInfo);
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
  const MODIFY_INFO = useSelector<ReducerType, any>(state => state.researchCreate.researchModifyInfo);
  const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  const teamList = useSelector<ReducerType, any>(state => state.team.teamList);

  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);

  // 추천 결과
  const recommendationResult = useSelector<ReducerType, any>(state => state.researchRecommendation.recommendationResult);

  const router = useRouter();
  const cookies = new Cookies();
  const pageId = router.query.id;

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({});

  const [firstView, setFirstView] = useState(false);

  const [guideStatus, setGuideStatus] = useState('inactive');
  const [agendaType, setAgendaType] = useState('');

  const [myRole, setMyRole] = useState<string | null>(null);

  useEffect(() => {
    if (userInfo && !selectTeamList) {
      dispatch(getTeamList(null));
    } else if (userInfo && selectTeamList) {
      const memberArr = selectTeamList?.teamMember;
      const myRole = memberArr?.filter(el => el.userId === userInfo.userId)?.[0]?.teamRoleType;
      setMyRole(myRole);
    }
  }, [userInfo, selectTeamList, dispatch]);

  useEffect(() => {
    if (props.data) {
      dispatch(setUserInfo(JSON.parse(props.data)));
    }
  }, [props?.data, dispatch]);

  const getResearchMethod = value => {
    if (value === 'UI_DIAGNOSIS') {
      setGuideStatus('ui');
    }
    if (value === 'FGD') {
      setGuideStatus('fgd');
    }
    if (value === 'UX_POSITION_ANALYSIS') {
      setGuideStatus('ux');
    }
    if (value === 'HYPOTHESIS_VERIFICATION') {
      setGuideStatus('hypo');
    }
    if (value === 'SHORT_SURVEY') {
      setGuideStatus('shortSurvey');
    }
    if (value === 'team') {
      setGuideStatus('team');
    }
    if (value === 'product') {
      setGuideStatus('product');
    }
  };
  const calcWhichStep = type => {
    let step;
    if (type === 'next') {
      switch (CREATE_STEP) {
        case 'step1':
          return (step = 'step2');
        case 'step2':
          return (step = 'step3');
        case 'step3':
          return (step = 'step4');
        case 'step4':
          return (step = 'step5');
        default:
          return (step = 'step5');
      }
    }
    if (type === 'prev') {
      switch (CREATE_STEP) {
        case 'step2':
          return (step = 'step1');
        case 'step3':
          return (step = 'step2');
        case 'step4':
          return (step = 'step3');
        case 'step5':
          return (step = 'step4');
        default:
          return (step = 'step1');
      }
    }
  };

  // 다음 버튼
  const handleMoveNextStep = () => {
    const step = calcWhichStep('next');
    if (pageId === 'create') {
      if (CREATE_STEP === 'step1') {
        const seq = cookies.get('recommendResultSeq');
        const researchName = getValues().researchName;
        const sendObject = {
          ...BASIC_INFO,
          researchNm: researchName,
          recommendationResult: seq ? seq : null,
        };
        const { researchNm, researchType, teamSeq, productSeq } = sendObject;
        if (researchNm === '' || researchType === '' || !teamSeq || !productSeq) {
          dispatch(showToast({ message: '모든 기본 정보를 입력해주신 뒤 다음 버튼을 눌러주세요.', isShow: true, status: 'warning', duration: 5000 }));
        } else {
          dispatch(setStep(step));
          dispatch(updateResearchBasicInfo({ name: 'researchNm', value: researchName }));
          dispatch(fetchResearchBasicInfo({ params: sendObject, step: step, callback: router }));
          dispatch(resetRecommendationResult());
          const changeTeam = teamList.filter(el => parseInt(el.teamSeq) === parseInt(teamSeq));
          dispatch(updateSelectTeamList(changeTeam[0]));
          dispatch(updateTeamSeq(teamSeq));
          // 쿠키 비우기
          cookies.remove('recommendResultSeq', { path: '/' });
          cookies.remove('recommendResearchType', { path: '/' });
        }
      }
    } else {
      const data = getValues();
      if (CREATE_STEP === 'step1') {
        const sendObject = {
          ...DETAIL_INFO,
          ...MODIFY_INFO,
          researchNm: data.researchName ? data.researchName : DETAIL_INFO.researchNm,
        };
        dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
      }
      if (CREATE_STEP === 'step2') {
        const sendObject = {
          ...DETAIL_INFO,
          respondentInfo: data.respondentInfo,
        };
        const checkFieldArr = data.respondentInfo.map(el => el.respondent);
        if (checkFieldArr?.some(el => !el || el === '')) {
          dispatch(showToast({ message: '응답자 조건을 모두 입력 후 다음 버튼을 눌러주세요.', isShow: true, status: 'warning', duration: 5000 }));
        } else {
          dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
        }
      }
      if (CREATE_STEP === 'step3') {
        const sendObject = {
          ...DETAIL_INFO,
          goalInfo: data.goalInfo,
        };
        const checkFieldArr = data.goalInfo.map(el => el.goal);
        if (checkFieldArr.some(el => !el || el === '')) {
          dispatch(showToast({ message: '리서치 목표를 모두 입력 후 다음 버튼을 눌러주세요.', isShow: true, status: 'warning', duration: 5000 }));
        } else {
          dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
        }
      }
      if (CREATE_STEP === 'step4') {
        if (DETAIL_INFO.researchType === 'FGD') {
          const sendObject = {
            ...DETAIL_INFO,
            detailDesignInfo: [{ agenda: data.agenda, agendaType: agendaType }],
          };

          if (agendaType === '') {
            dispatch(showToast({ message: 'FGD 아젠다 정보를 선택해주세요.', isShow: true, status: 'warning', duration: 5000 }));
          } else if (agendaType === 'ETC') {
            if (data.agenda === '' || !data.agenda) {
              dispatch(showToast({ message: 'FGD 아젠다 정보를 선택해주세요.', isShow: true, status: 'warning', duration: 5000 }));
            } else {
              dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
            }
          } else {
            dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
          }
        } else {
          const sendObject = {
            ...DETAIL_INFO,
            detailDesignInfo: data.detailDesignInfo,
          };
          const checkFieldArr = data.detailDesignInfo?.map(el => el.mission || (el.hypothesisReason && el.hypothesis));
          if (checkFieldArr?.some(el => !el || el === '')) {
            dispatch(
              showToast({
                message:
                  DETAIL_INFO.researchType === 'UI_DIAGNOSIS'
                    ? '미션 정보를 모두 입력 후 다음 버튼을 눌러주세요.'
                    : '가설과 배경을 모두 입력 후 다음 버튼을 눌러주세요.',
                isShow: true,
                status: 'warning',
                duration: 5000,
              }),
            );
          } else {
            dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
          }
        }
      }
      if (CREATE_STEP === 'step5') {
        const sendObject = {
          ...DETAIL_INFO,
          additionalInfo: [{ additional: data.additional }],
          statusType: 'RESEARCH_REQUEST_DESIGN_COMPLETE',
        };
        if (DETAIL_INFO?.statusType === 'RESEARCH_INFO_ENTERING') {
          // dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'last' }));
          dispatch(
            showDialog({
              show: true,
              title: `입력하신 정보를 바탕으로\n 리서치 설계를 받아보시겠습니까?`,
              content: `리서치 설계 과정은 모두 무료로 진행됩니다.`,
              okButton: '받아보기',
              cancelButton: '취소하기',
              okButtonColor: colors.cyan._500,
              okFunction: () => dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'last', callback: router })),
            }),
          );
        } else {
          dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'change', callback: router }));
        }
      }
    }
  };
  // 이전 버튼
  const handleMovePrevStep = () => {
    const step = calcWhichStep('prev');
    dispatch(setStep(step));
  };

  // 응답자 디바운스 함수
  const respondentDebounceSave = value => {
    const data = getValues();

    let sendObject;
    if (CREATE_STEP === 'step2') {
      sendObject = {
        ...DETAIL_INFO,
        respondentInfo: data.respondentInfo,
      };
    }
    if (CREATE_STEP === 'step3') {
      sendObject = {
        ...DETAIL_INFO,
        goalInfo: data.goalInfo,
      };
    }
    if (CREATE_STEP === 'step4') {
      sendObject = {
        ...DETAIL_INFO,
        detailDesignInfo: data.detailDesignInfo,
      };
    }
    dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'debounce' }));
    // const checkFieldArr = data.panelInfo.map(el => el.panel);
  };

  // 초기화
  useEffect(() => {
    return () => {
      dispatch(resetCreateResearchData());
    };
  }, []);

  // 상세 데이터 가져오기
  useEffect(() => {
    if (pageId !== 'create' && selectTeamSeq) {
      const params = {
        teamSeq: selectTeamSeq,
        researchSeq: pageId,
      };
      dispatch(fetchResearchDetail({ params: params, callback: () => router.push('/admin/team') }));
    }
  }, [pageId, selectTeamSeq, CREATE_STEP]);

  // 수정 불가능 상태
  useEffect(() => {
    if (DETAIL_INFO) {
      if (
        DETAIL_INFO?.statusType === 'RESEARCH_START_REQUEST_COMPLETE' ||
        DETAIL_INFO?.statusType === 'RESPONSE_RECRUITING' ||
        DETAIL_INFO?.statusType === 'RESEARCH_ANALYZING' ||
        DETAIL_INFO?.statusType === 'RESEARCH_COMPLETED'
      ) {
        dispatch(showToast({ message: '리서치를 수정할 수 없습니다.', isShow: true, status: 'warning', duration: 5000 }));
        router.push('/admin/team');
      }
    }
  }, [DETAIL_INFO]);

  useEffect(() => {
    if (DETAIL_INFO?.statusType === 'RESEARCH_INFO_ENTERING' && !firstView) {
      const { respondentInfo, goalInfo, detailDesignInfo, additionalInfo, createId } = DETAIL_INFO;

      if (myRole === '관리자' || (myRole === '멤버' && createId == userInfo?.userId)) {
        setFirstView(true);
        if (respondentInfo && !goalInfo && !detailDesignInfo && !additionalInfo) {
          dispatch(setStep('step2'));
        }
        if (respondentInfo && goalInfo && !detailDesignInfo && !additionalInfo) {
          dispatch(setStep('step3'));
        }
        if (respondentInfo && goalInfo && detailDesignInfo && !additionalInfo) {
          dispatch(setStep('step4'));
        }
        if (respondentInfo && goalInfo && !detailDesignInfo && additionalInfo) {
          dispatch(setStep('step5'));
        }
      } else {
        router.push('/admin/team');
        dispatch(showToast({ message: '해당 리서치에 권한이 없습니다.', isShow: true, status: 'warning', duration: 5000 }));
      }
    }
  }, [DETAIL_INFO, firstView, myRole]);

  useEffect(() => {
    dispatch(setRedirectPath(null));
  }, []);

  return (
    <div css={mainContainer}>
      <div css={container}>
        <div css={leftContainer}>
          <ResearchHeader title={'리서치 설계'} />
          {CREATE_STEP === 'step1' && (
            <CreateResearchStepOne
              register={register}
              handleSubmit={handleSubmit}
              reset={reset}
              errors={errors}
              detailInfo={pageId !== 'create' ? DETAIL_INFO : null}
              setGuideStatus={setGuideStatus}
              getResearchMethod={getResearchMethod}
            />
          )}
          {CREATE_STEP === 'step2' && (
            <CreateResearchStepTwo
              control={control}
              handleSubmit={handleSubmit}
              reset={reset}
              setValue={setValue}
              register={register}
              errors={errors}
              detailInfo={pageId !== 'create' ? DETAIL_INFO : null}
              respondentDebounceSave={respondentDebounceSave}
            />
          )}
          {CREATE_STEP === 'step3' && (
            <CreateResearchStepThree
              control={control}
              handleSubmit={handleSubmit}
              reset={reset}
              setValue={setValue}
              errors={errors}
              register={register}
              detailInfo={pageId !== 'create' ? DETAIL_INFO : null}
              respondentDebounceSave={respondentDebounceSave}
            />
          )}
          {CREATE_STEP === 'step4' && (
            <CreateResearchStepFour
              control={control}
              handleSubmit={handleSubmit}
              reset={reset}
              errors={errors}
              register={register}
              setValue={setValue}
              setAgendaType={setAgendaType}
              detailInfo={pageId !== 'create' ? DETAIL_INFO : null}
              respondentDebounceSave={respondentDebounceSave}
            />
          )}
          {(CREATE_STEP === 'step5' || CREATE_STEP === 'last' || CREATE_STEP === 'change') && (
            <CreateResearchStepFive register={register} detailInfo={pageId !== 'create' ? DETAIL_INFO : null} />
          )}
          {/*</form>*/}
        </div>
        <div css={rightContainer}>
          <ResearchHeader isStepBar={false} title={'리서치 설계 가이드'} />
          {CREATE_STEP === 'step1' && <ResearchGuideStepOne guideStatus={guideStatus} />}
          {CREATE_STEP === 'step2' && <ResearchGuideStepTwo />}
          {CREATE_STEP === 'step3' && <ResearchGuideStepThree />}
          {CREATE_STEP === 'step4' && <ResearchGuideStepFour />}
          {(CREATE_STEP === 'step5' || CREATE_STEP === 'last' || CREATE_STEP === 'change') && <ResearchGuideStepFive />}
        </div>
      </div>
      <ResearchFooter handleMoveNextStep={handleMoveNextStep} handleMovePrevStep={handleMovePrevStep} />
    </div>
  );
};

export default ResearchCreate;

export async function getServerSideProps({ req, res }) {
  const { cookies } = req;
  if (cookies.userInfo) {
    console.log(cookies.userInfo);
    return {
      props: {
        data: cookies?.userInfo,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}

const mainContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
  height: calc(100vh - 72px);
  min-width: 1440px;
`;

const container = css`
  background: white;
  width: 1262px;
  max-width: 1262px;
  min-width: 1262px;
  //height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const leftContainer = css`
  width: 730px;
  //height: 500px;
  //background: mediumpurple;
`;
const rightContainer = css`
  width: 500px;
  //height: 500px;
`;
