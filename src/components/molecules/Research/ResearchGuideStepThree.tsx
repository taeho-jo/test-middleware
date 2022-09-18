import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import { body2_medium, heading2_bold } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';
import decisionImage from '/public/assets/png/researchGuide/guide_decision.png';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

const CONTENTS = {
  decision: {
    image: decisionImage,
    title: '유저 리서치를 통해 하고 싶은 의사결정',
    guideContent: `좋은 리서치는 비즈니스 의사결정에 활용할 수 있는 결과를 \n제공하는 리서치입니다.\n그러려면 먼저 어떤 의사결정을 해야하는지에 대해 알아야합니다.\nDiby는 고객의 의사결정 사항에 맞춰서 질문을 추천, 검토하고 \n리포트 결과를 분석합니다. \n단순한 궁금증을 해소하는, 혹은 구체적이지 않은 리서치 목표는 \n적합하지 않습니다.`,
  },
};

const ResearchGuideStepThree = () => {
  return (
    <FlexBox direction={'column'} width={'100%'} height={'500px'} style={selectContainer}>
      <div css={topContainer}>
        <Image width={404} src={CONTENTS?.decision?.image} alt={'aa'} />
      </div>
      <div css={bottomContainer}>
        {CONTENTS?.decision?.title && <span css={[heading2_bold, { marginBottom: '16px' }]}>{CONTENTS?.decision?.title}</span>}
        <span css={[body2_medium, { whiteSpace: 'pre-line' }]}>{CONTENTS?.decision?.guideContent}</span>
      </div>
    </FlexBox>
  );
};
export default ResearchGuideStepThree;

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
