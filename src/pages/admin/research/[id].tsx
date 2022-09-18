import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import withTokenAuth from '../../../hoc/withTokenAuth';
import { CreateResearchStepFour, CreateResearchStepOne, CreateResearchStepThree, CreateResearchStepTwo } from '../../../components/template/Research';
import { css } from '@emotion/react';
import {
  ResearchFooter,
  ResearchGuideStepOne,
  ResearchHeader,
  ResearchGuideStepTwo,
  ResearchGuideStepThree,
  ResearchGuideStepFour,
  ResearchGuideStepFive,
} from '../../../components/molecules/Research';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchResearchBasicInfo,
  fetchResearchDetail,
  fetchResearchModifyInfo,
  resetCreateResearchData,
  setStep,
  updateResearchBasicInfo,
} from '../../../store/reducers/researchCreateReducer';
import CreateResearchStepFive from '../../../components/template/Research/CreateResearchStepFive';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';

const ResearchCreate = () => {
  const dispatch = useDispatch();
  const CREATE_STEP = useSelector<ReducerType, string>(state => state.researchCreate.step);
  const BASIC_INFO = useSelector<ReducerType, any>(state => state.researchCreate.researchBasicInfo);
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
  const MODIFY_INFO = useSelector<ReducerType, any>(state => state.researchCreate.researchModifyInfo);
  const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);

  const router = useRouter();
  const pageId = router.query.id;

  const [guideStatus, setGuideStatus] = useState('inactive');

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
  const handleMoveNextStep = () => {
    const step = calcWhichStep('next');
    if (pageId === 'create') {
      if (CREATE_STEP === 'step1') {
        const researchName = getValues().researchName;
        const sendObject = {
          ...BASIC_INFO,
          researchNm: researchName,
        };
        dispatch(updateResearchBasicInfo({ name: 'researchNm', value: researchName }));
        dispatch(fetchResearchBasicInfo({ params: sendObject, step: step, callback: router }));
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
          panelInfo: data.panelInfo,
        };
        dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
      }
      if (CREATE_STEP === 'step3') {
        const sendObject = {
          ...DETAIL_INFO,
          decisionInfo: data.decisionInfo,
        };
        dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
      }
      if (CREATE_STEP === 'step4') {
        if (DETAIL_INFO.researchType === 'FGD') {
          const sendObject = {
            ...DETAIL_INFO,
            detailInfo: [{ agenda: data.agenda }],
          };
          dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
        } else {
          const sendObject = {
            ...DETAIL_INFO,
            detailInfo: data.detailInfo,
          };
          dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: step }));
        }
      }
      if (CREATE_STEP === 'step5') {
        const sendObject = {
          ...DETAIL_INFO,
          additionalInfo: [{ additional: data.additional }],
        };
        dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'last' }));
      }
    }
  };
  const handleMovePrevStep = () => {
    const step = calcWhichStep('prev');
    dispatch(setStep(step));
  };
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

  useEffect(() => {
    return () => {
      dispatch(resetCreateResearchData());
    };
  }, []);

  useEffect(() => {
    if (pageId !== 'create' && selectTeamSeq) {
      const params = {
        teamSeq: selectTeamSeq,
        researchSeq: pageId,
      };
      dispatch(fetchResearchDetail({ params: params }));
    }
  }, [pageId, selectTeamSeq, CREATE_STEP]);
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

  return (
    <div css={mainContainer}>
      <div css={container}>
        <div css={leftContainer}>
          <ResearchHeader title={'리서치 생성'} />
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
          {CREATE_STEP === 'step2' && <CreateResearchStepTwo register={register} detailInfo={pageId !== 'create' ? DETAIL_INFO : null} />}
          {CREATE_STEP === 'step3' && <CreateResearchStepThree register={register} detailInfo={pageId !== 'create' ? DETAIL_INFO : null} />}
          {CREATE_STEP === 'step4' && (
            <CreateResearchStepFour register={register} setValue={setValue} detailInfo={pageId !== 'create' ? DETAIL_INFO : null} />
          )}
          {CREATE_STEP === 'step5' && <CreateResearchStepFive register={register} detailInfo={pageId !== 'create' ? DETAIL_INFO : null} />}
          {/*</form>*/}
        </div>
        <div css={rightContainer}>
          <ResearchHeader isStepBar={false} title={'생성 가이드'} />
          {CREATE_STEP === 'step1' && <ResearchGuideStepOne guideStatus={guideStatus} />}
          {CREATE_STEP === 'step2' && <ResearchGuideStepTwo />}
          {CREATE_STEP === 'step3' && <ResearchGuideStepThree />}
          {CREATE_STEP === 'step4' && <ResearchGuideStepFour />}
          {CREATE_STEP === 'step5' && <ResearchGuideStepFive />}
        </div>
      </div>
      <ResearchFooter handleMoveNextStep={handleMoveNextStep} handleMovePrevStep={handleMovePrevStep} />
    </div>
  );
};

export default withTokenAuth(ResearchCreate, false);

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
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
