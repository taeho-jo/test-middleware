import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import withTokenAuth from '../../../hoc/withTokenAuth';
import { CreateResearchStepFour, CreateResearchStepOne, CreateResearchStepThree, CreateResearchStepTwo } from '../../../components/template/Research';
import { css } from '@emotion/react';
import { ResearchFooter, ResearchGuide, ResearchHeader } from '../../../components/molecules/Research';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResearchBasicInfo, fetchResearchDetail, resetCreateResearchData, setStep } from '../../../store/reducers/researchCreateReducer';
import { ReducerType } from '../../../store/reducers';
import { FormProvider } from 'react-hook-form';

import defaultImage from '/public/assets/png/researchGuide/guide_research_inactive.png';
import researchNameImage from '/public/assets/png/researchGuide/guide_research_name.png';
import uiImage from '/public/assets/png/researchGuide/guide_research_type_ui.png';
import fgdImage from '/public/assets/png/researchGuide/guide_research_type_fgd.png';
import uxImage from '/public/assets/png/researchGuide/guide_research_type_ux.png';
import hypoImage from '/public/assets/png/researchGuide/guide_research_type_hypo.png';
import shortSurveyImage from '/public/assets/png/researchGuide/guide_research_type_short_survey.png';
import teamImage from '/public/assets/png/researchGuide/guide_research_team.png';
import productImage from '/public/assets/png/researchGuide/guide_research_product.png';
import CreateResearchStepFive from '../../../components/template/Research/CreateResearchStepFive';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

const StepOneGuide = {
  inactive: {
    image: defaultImage,
    title: null,
    guideContent: `리서치 생성에 필요한 정보를 입력해주세요.\n각 입력란을 클릭하면 작성 가이드가 표시됩니다.`,
  },
  researchName: {
    image: researchNameImage,
    title: '리서치 명',
    guideContent: `리서치의 이름입니다.\n리서치 목록에 표시됩니다.\n이번 리서치의 특징 혹은 목표에 따라 자유롭게 입력해주세요.`,
  },
  ui: {
    image: uiImage,
    title: '리서치 방법 - UI 진단',
    guideContent: `목표 세그먼트의 응답자들에\n고객사에서 원하는 유저 시나리오대로 실제 서비스를 경험하게 합니다.\n패널은 기능별 불편사항에 대해 주관식으로 응답하며,\n해당 내용은 Diby의 자연어 분석 AI를 통해 분석되어\n어떤 사용성 요소에 대해 개선해야하는지 파악할 수 있습니다.`,
  },
  fgd: {
    image: fgdImage,
    title: '리서치 방법 - FGD',
    guideContent: `목표 세그먼트의 응답자를 대상으로 채팅으로 \n그룹 인터뷰를 진행하여 새로운 아이디어와 문제를 발굴합니다. \n구체적인 세그먼트 기준을 수립할 수 있는 상황일 때 \n진행하시는 것이 가장 효과적입니다. `,
  },
  ux: {
    image: uxImage,
    title: '리서치 방법 - UX 포지션 분석',
    guideContent: `기획의도와 실제 서비스를 사용하는 고객의 인식을 비교하여 \n현재 서비스의 현황을 파악합니다. \n원하는 UX 전략을 수행하기 위해 \n서비스내의 어떤 UX 요소를 보완해야하는지 알 수 있습니다.\n\n* DAU 10K 이상인 서비스에서만 사용가능한 방법입니다. `,
  },
  hypo: {
    image: hypoImage,
    title: '리서치 방법 - 가설 검증',
    guideContent: `Diby의 가설 평가 알고리즘을 통해 보유하신 가설을 검토/수정합니다.\n이후 목표 세그먼트의 응답자를 대상으로 해당 가설을 검증합니다. \n가설 검증을 위해 가장 적합한 질문을 Diby가 생성해드립니다.`,
  },
  shortSurvey: {
    image: shortSurveyImage,
    title: '리서치 방법 - 짧은 설문',
    guideContent: `2~3개의 짧은 질문을 통해 3시간이라는 짧은 시간 내에 \n특정 주제에 대한 응답자의 선호도를 파악할 수 있습니다.\n주로 디자인 / 광고 시안 및 UX Writing 선정 등에 활용합니다. `,
  },
  team: {
    image: teamImage,
    title: '팀',
    guideContent: `어떤 팀에서 수행하실 리서치인가요? \n리서치 설계 현황과 리포트를 팀의 대시보드에서 확인할 수 있습니다. \n다른 멤버를 초대하여 해당 팀에서 \n진행중인 모든 리서치를 함께 조회할 수 있습니다.`,
  },
  product: {
    image: productImage,
    title: '프로덕트',
    guideContent: `리서치의 대상 프로덕트를 선택해주세요. \n하나의 서비스를 다양한 플랫폼에서 서비스한다면 \n플랫폼별로 프로덕트를 별도로 지정해야합니다.\n서비스 내 분리된 도메인을 가진 프로덕트를 별도 지정해도 됩니다.`,
  },
};

interface PropsType {
  params: string;
}

const ResearchCreate = () => {
  const dispatch = useDispatch();
  const CREATE_STEP = useSelector<ReducerType, string>(state => state.researchCreate.step);
  const BASIC_INFO = useSelector<ReducerType, any>(state => state.researchCreate.researchBasicInfo);
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
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
          return (step = 'step1');
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
        default:
          return (step = 'step1');
      }
    }
  };
  const handleMoveNextStep = () => {
    const step = calcWhichStep('next');
    if (pageId === 'create') {
      if (CREATE_STEP === 'step1') {
        dispatch(fetchResearchBasicInfo({ params: BASIC_INFO, step: step, callback: router }));
      }
    } else {
      console.log(BASIC_INFO);
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
  const calcGuideImageWidth = () => {
    switch (guideStatus) {
      case 'inactive':
        return 330;
      case 'ui':
        return 140;
      case 'fgd':
        return 172;
      case 'ux':
        return 162;
      case 'hypo':
        return 178;
      case 'shortSurvey':
        return 184;
      default:
        return 330;
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetCreateResearchData());
    };
  }, []);

  useEffect(() => {
    if (pageId !== 'create') {
      const params = {
        teamSeq: selectTeamSeq,
        researchSeq: pageId,
      };
      dispatch(fetchResearchDetail({ params: params }));
    }
  }, [pageId]);

  return (
    <div css={mainContainer}>
      {/*<FormProvider {...methods}>*/}
      <div css={container}>
        <div css={leftContainer}>
          <ResearchHeader title={'리서치 생성'} />

          {CREATE_STEP === 'step1' && (
            <CreateResearchStepOne
              detailInfo={pageId !== 'create' ? DETAIL_INFO : null}
              setGuideStatus={setGuideStatus}
              getResearchMethod={getResearchMethod}
            />
          )}
          {CREATE_STEP === 'step2' && <CreateResearchStepTwo />}
          {CREATE_STEP === 'step3' && <CreateResearchStepThree />}
          {CREATE_STEP === 'step4' && <CreateResearchStepFour />}
          {CREATE_STEP === 'step5' && <CreateResearchStepFive />}
        </div>
        <div css={rightContainer}>
          <ResearchHeader isStepBar={false} title={'생성 가이드'} />
          <ResearchGuide width={calcGuideImageWidth()} contents={StepOneGuide} guideStatus={guideStatus} />
        </div>
      </div>
      <ResearchFooter handleMoveNextStep={handleMoveNextStep} handleMovePrevStep={handleMovePrevStep} />
      {/*</FormProvider>*/}
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
