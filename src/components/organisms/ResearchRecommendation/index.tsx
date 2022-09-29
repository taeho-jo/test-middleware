import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { heading1_bold, heading2_medium, heading3_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import Button from '../../atoms/Button';
import Image from 'next/image';
import reportNavigationTop from '/public/assets/png/reportNavigationTop.png';
import reportNavigationBottom from '/public/assets/png/reportNavigationBotton.png';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { calcWhichStep } from '../../../common/util/commonFunc';
import { updateRecommendationStep } from '../../../store/reducers/researchCreateReducer';
import RecommendationStep from '../../molecules/Research/Recommendation/RecommendationStep';
import BasicButton from '../../atoms/Button/BasicButton';
import { getRecommendationDataAction } from '../../../store/reducers/researchRecommendationReducer';
import { RecommendationQuestionListType } from '../../../api/researchApi/types';

const ResearchRecommendation = () => {
  const dispatch = useDispatch();
  const recommendationStep = useSelector<ReducerType, string>(state => state.researchCreate.recommendationStep);
  const recommendationQuestion = useSelector<ReducerType, RecommendationQuestionListType[]>(state => state.researchRecommendation.recommendationData);

  const [step, setStep] = useState(0);
  const [nextStep, setNextStep] = useState('');
  const [prevStep, setPrevStep] = useState('');
  const [selectQuestion, setSelectQuestion] = useState<{ questionSeq: number; question: string; optionsSeq: string[]; options: string[] }[]>([]);
  // useEffect(() => {
  //   console.log(selectQuestion, 'selectQuestion');
  // }, [selectQuestion]);
  useEffect(() => {
    dispatch(getRecommendationDataAction());
  }, []);

  const handleChangeQuestionInfo = () => {
    switch (recommendationStep) {
      case 'step1':
        return recommendationQuestion[0];
      case 'step2':
        return recommendationQuestion[1];
      case 'step3':
        return recommendationQuestion[2];
      case 'step4':
        return recommendationQuestion[3];
      case 'step5':
        return recommendationQuestion[4];
      default:
        return recommendationQuestion[0];
    }
  };

  useEffect(() => {
    if (recommendationStep === 'step1') {
      setStep(0);
    }
    if (recommendationStep === 'step2') {
      setStep(25);
    }
    if (recommendationStep === 'step3') {
      setStep(50);
    }
    if (recommendationStep === 'step4') {
      setStep(75);
    }
    if (recommendationStep === 'step5') {
      setStep(100);
    }
  }, [recommendationStep]);

  const handleMoveNextStep = () => {
    // const nextStep = calcWhichStep('next', recommendationStep);
    if (step !== 100 && nextStep !== '') {
      // setStep(step + 25);
      setPrevStep(recommendationStep);
      dispatch(updateRecommendationStep(nextStep));
      // setPrevStep(nextStep);
      // setPrevStep()
    }
  };
  const handleMovePrevStep = () => {
    // const prevStep = calcWhichStep('prev', recommendationStep);
    if (step !== 0 && prevStep !== '') {
      // setStep(step - 25);
      dispatch(updateRecommendationStep(prevStep));
    }
  };

  return (
    <div css={mainContainer}>
      <div css={container}>
        <div css={stepProgressBarStyle}>
          <div css={stepInnerProgressBarStyle(step)} />
        </div>
        <FlexBox
          direction={'column'}
          style={css`
            margin-top: 24px;
          `}
        >
          {/* ------------ 헤더 ------------ */}
          <FlexBox align={'flex-start'} style={{ boxSizing: 'border-box', padding: '24px 40px 24px 56px', marginBottom: '32px' }}>
            <FlexBox justify={'flex-start'} align={'center'}>
              <span css={[heading1_bold, { cursor: 'default', whiteSpace: 'pre-wrap' }]}>리서치 추천</span>
            </FlexBox>

            <Icon onClick={() => console.log('XXX')} name={'NAVIGATION_CLOSE_LG'} size={24} style={{ cursor: 'pointer' }} />
          </FlexBox>
          {/* ------------ 헤더 ------------ */}

          {/* ------------ 문항 ------------ */}
          <RecommendationStep
            questionInfo={handleChangeQuestionInfo()}
            selectQuestion={selectQuestion}
            setSelectQuestion={setSelectQuestion}
            setNextStep={setNextStep}
          />
          {/* ------------ 문항 ------------ */}

          {/* ------------ 푸터 ------------ */}
          <FlexBox
            justify={'flex-start'}
            style={css`
              margin-left: 150px;
              //background: ;
            `}
          >
            <button onClick={handleMovePrevStep} css={prevButtonStyle}>
              <Icon name={'NAVIGATION_ARROW_LEFT'} />
              이전
            </button>
            {recommendationStep !== 'step5' && (
              <button onClick={() => handleMoveNextStep()} css={nextButtonStyle}>
                다음
                <Icon name={'NAVIGATION_ARROW_RIGHT_WHITE'} />
              </button>
            )}
            {recommendationStep === 'step5' && <Button btnText={'추천 받기'} btnTextColor={'white'} disabled={true} />}
          </FlexBox>
          {/* ------------ 푸터 ------------ */}
        </FlexBox>
      </div>
    </div>
  );
};

export default ResearchRecommendation;

const mainContainer = css`
  margin-top: 72px;
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const container = css`
  position: relative;
  width: 900px;
  min-width: 900px;
  max-width: 900px;
  height: calc(100vh - 72px);
`;
const stepProgressBarStyle = css`
  width: 100%;
  height: 10px;
  background: #dcdcdc;
  border-radius: 5px;
`;
const stepInnerProgressBarStyle = (step: number) => css`
  width: ${step}%;
  height: 10px;
  background: ${colors.grey._3c};
  border-radius: 5px;
  transition: width 1s;
`;

const questionItem = css`
  border: 1px solid #cccccc;
  border-radius: 56px;
  padding: 12px 32px;
  margin-bottom: 16px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: ${colors.grey._3c};
    color: white;
  }
`;

const prevButtonStyle = [
  heading3_bold,
  css`
    display: flex;
    border: 1px solid ${colors.grey._3c};
    background: ${colors.white};
    color: ${colors.grey._3c};
    justify-content: space-between;
    align-items: center;
    padding: 9px 16px;
    border-radius: 8px;
    margin-right: 12px;
  `,
];
const nextButtonStyle = [
  heading3_bold,
  css`
    display: flex;
    border: none;
    background: ${colors.grey._3c};
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 10px 17px;
    border-radius: 8px;
    &:disabled {
      background: ${colors.grey._99};
    }
  `,
];
