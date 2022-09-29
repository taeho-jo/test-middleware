import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { body2_medium, heading2_bold } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';
import uiImage2 from '/public/assets/png/researchGuide/guide_panel_ui.png';
import fgdImage2 from '/public/assets/png/researchGuide/guide_panel_fgd.png';
import uxImage2 from '/public/assets/png/researchGuide/guide_panel_ux.png';
import hypoImage2 from '/public/assets/png/researchGuide/guide_panel_hypo.png';
import shortSurveyImage2 from '/public/assets/png/researchGuide/guide_panel_short_survey.png';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

const CONTENTS = {
  ui: {
    image: uiImage2,
    title: '응답자 조건',
    guideContent: `일반적으로 어떤 사람이 리서치 대상인 프로덕트를 사용하나요? \n사용성 테스트는 사용성을 확인하기 때문에 \n대부분의 사람이 무리 없이 사용할 수 있는 것을 목표로 해야합니다.\n간단한 인구통계학적 요소로 응답자 조건을 입력해주세요.\n\n*조건에 따라 응답자 보상비용이 상승하여 견적이 추가될 수 있습니다.`,
  },
  fgd: {
    image: fgdImage2,
    title: '응답자 조건',
    guideContent: `Focus Group Discussion 의 경우 \n응답 집단에 대한 매우 구체적인 조건 명세가 필요합니다.\nDiby에서는 사전 스크리닝 질문을 통해 목표 응답자를 선별합니다.\n응답자 조건은 이후 Diby의 리서치 매니저와 논의하면서 \n수정할 수 있습니다.\n\n*조건에 따라 응답자 보상비용이 상승하여 견적이 추가될 수 있습니다.`,
  },
  ux: {
    image: uxImage2,
    title: '응답자 조건',
    guideContent: `현재 리서치 대상 프로덕트의 실 사용자를 대상으로 \n진행하는 리서치입니다.\n응답자 조건은 서비스 실사용자로 단순하게 규정하셔도 무방하며 \n구체적인 응답 세그먼트 분류를 위한 기준은\n이후 리서치 설계 단계에서 리서치 매니져와 협의를 통해 \n정의하게됩니다.`,
  },
  hypo: {
    image: hypoImage2,
    title: '응답자 조건',
    guideContent: `가설 검증은 다수의 응답자에게 응답을 받고, \n응답자를 다양한 기준으로 분류해서 결과를 확인합니다. \n응답자 조건은 최대한 단순하게, \n응답자를 분류하는 기준은 다양하게 지정하는 것이 좋습니다. \n응답자 분류 기준은 이후 입력하시는 가설에 따라 정해지므로, \n조건은 원하시는 기준의 공통적인 요소만을 입력해주세요.`,
  },
  shortSurvey: {
    image: shortSurveyImage2,
    title: '응답자 조건',
    guideContent: `짧은 설문에서는 성별과 연령대, 기기정도의 \n기준을 적용하시는 것이 바람직합니다.`,
  },
};

const ResearchGuideStepTwo = () => {
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
  const BASIC_INFO = useSelector<ReducerType, any>(state => state.researchCreate.researchBasicInfo);

  const getResearchMethod = () => {
    if (BASIC_INFO?.researchType === 'UI_DIAGNOSIS' || DETAIL_INFO?.researchType === 'UI_DIAGNOSIS') {
      return 'ui';
    }
    if (BASIC_INFO?.researchType === 'FGD' || DETAIL_INFO?.researchType === 'FGD') {
      return 'fgd';
    }
    if (BASIC_INFO?.researchType === 'UX_POSITION_ANALYSIS' || DETAIL_INFO?.researchType === 'UX_POSITION_ANALYSIS') {
      return 'ux';
    }
    if (BASIC_INFO?.researchType === 'HYPOTHESIS_VERIFICATION' || DETAIL_INFO?.researchType === 'HYPOTHESIS_VERIFICATION') {
      return 'hypo';
    }
    if (BASIC_INFO?.researchType === 'SHORT_SURVEY' || DETAIL_INFO?.researchType === 'SHORT_SURVEY') {
      return 'shortSurvey';
    }
  };

  return (
    <FlexBox direction={'column'} width={'100%'} height={'500px'} style={selectContainer}>
      <div css={topContainer}>
        <Image width={383} src={CONTENTS?.[getResearchMethod()]?.image} alt={'aa'} />
      </div>
      <div css={bottomContainer}>
        {CONTENTS?.[getResearchMethod()]?.title && (
          <span css={[heading2_bold, { marginBottom: '16px' }]}>{CONTENTS?.[getResearchMethod()]?.title}</span>
        )}
        <span css={[body2_medium, { whiteSpace: 'pre-line' }]}>{CONTENTS?.[getResearchMethod()]?.guideContent}</span>
      </div>
    </FlexBox>
  );
};
export default ResearchGuideStepTwo;

const topContainer = css`
  height: 250px;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  background: #68a0f4;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const bottomContainer = css`
  height: 250px;
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin-top: 25px;
  //padding: 56px;
`;
