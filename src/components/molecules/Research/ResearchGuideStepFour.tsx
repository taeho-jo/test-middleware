import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { body2_medium, heading2_bold } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';
import decisionImage from '/public/assets/png/researchGuide/guide_decision.png';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import uiImage from '/public/assets/png/researchGuide/guide_detail_ui.png';
import fgdImage from '/public/assets/png/researchGuide/guide_detail_fgd.png';
import hypoImage from '/public/assets/png/researchGuide/guilde_detail_hypo.png';
import { background } from '@storybook/theming';
import { colors } from '../../../styles/Common.styles';

const CONTENTS = {
  goal: {
    image: decisionImage,
    title: '유저 리서치를 통해 하고 싶은 의사결정',
    guideContent: `좋은 리서치는 비즈니스 의사결정에 활용할 수 있는 결과를 \n제공하는 리서치입니다.\n그러려면 먼저 어떤 의사결정을 해야하는지에 대해 알아야합니다.\nDiby는 고객의 의사결정 사항에 맞춰서 질문을 추천, 검토하고 \n리포트 결과를 분석합니다. \n단순한 궁금증을 해소하는, 혹은 구체적이지 않은 리서치 목표는 \n적합하지 않습니다.`,
  },
  ui: {
    image: uiImage,
    title: '미션',
    guideContent: `적어주신 미션에 따라 \nDiby 응답자가 애플리케이션/웹사이트를 경험합니다. \n준비하신 유저 시나리오와 동일하게 입력해주세요. `,
  },
  fgd: {
    image: fgdImage,
    title: '아젠다 (토론 주제)',
    guideContent: `FGD는 1시간 내외의 그룹 채팅 형식으로 진행됩니다.\n이 때 토론자들이 다뤄야 할 아젠다(토론 주제)를 선택해주세요.\n아젠다에 따른 구체적인 질문들은 리서치 설계를 받으실 때\nDiby 매니저가 추천 및 설계해드립니다. `,
  },
  hypo: {
    image: hypoImage,
    title: '가설',
    guideContent: `프로덕트가 해결하고자 하는 문제와 관련된 구체적이고 \n방향성이 확실한 가설을 입력해주세요.\n단순 사용자의 반응이나 고객의 상황을 전반적으로 파악하기 위한 \n가설은 적절하지 않습니다. \n구체적인 상황을 가정한 후,\n해당 상황이 실제 시장과 고객에게 적용되는지를 확인해보세요.`,
  },
  hypoReason: {
    image: hypoImage,
    title: '가설을 수립한 배경/이유',
    guideContent: `위 가설을 세우신 이유와 배경에 대해 적어주세요. \n가설이 좋은 가설인지 그렇지 않은 가설인지를 분류할 때, \nDiby의 가설 평가 AI와 Diby 매니저가 참고합니다.`,
  },
};

const ResearchGuideStepFour = () => {
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);

  const getResearchMethod = () => {
    if (DETAIL_INFO?.researchType === 'UI_DIAGNOSIS') {
      return 'ui';
    }
    if (DETAIL_INFO?.researchType === 'FGD') {
      return 'fgd';
    }
    if (DETAIL_INFO?.researchType === 'UX_POSITION_ANALYSIS') {
      return 'ux';
    }
    if (DETAIL_INFO?.researchType === 'HYPOTHESIS_VERIFICATION') {
      return 'hypo';
    }
    if (DETAIL_INFO?.researchType === 'SHORT_SURVEY') {
      return 'shortSurvey';
    }
  };

  return (
    <>
      {getResearchMethod() === 'ux' || getResearchMethod() === 'shortSurvey' ? (
        <FlexBox
          direction={'column'}
          width={'100%'}
          height={'500px'}
          style={[selectContainer, { border: '1px solid #dcdcdc', background: colors.grey._fa }]}
        >
          <div css={[topContainer, { background: colors.grey._fa }]} />
          <div css={bottomContainer} />
        </FlexBox>
      ) : (
        <FlexBox direction={'column'} width={'100%'} height={'500px'} style={selectContainer}>
          <div css={topContainer}>
            <Image width={296} height={211} src={CONTENTS?.[getResearchMethod()]?.image} alt={'aa'} />
          </div>
          <div css={bottomContainer}>
            {CONTENTS?.[getResearchMethod()]?.title && (
              <span css={[heading2_bold, { marginBottom: '16px' }]}>{CONTENTS?.[getResearchMethod()]?.title}</span>
            )}
            <span css={[body2_medium, { whiteSpace: 'pre-line' }]}>{CONTENTS?.[getResearchMethod()]?.guideContent}</span>
          </div>
        </FlexBox>
      )}
    </>
  );
};
export default ResearchGuideStepFour;

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
