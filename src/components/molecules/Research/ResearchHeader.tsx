import React from 'react';
import { body3_bold, heading1_bold } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import Icon from '../../atoms/Icon';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

interface PropsType {
  isStepBar?: boolean;
  title: string;
}

const STEP_ARR = [
  {
    label: '1. 기본 정보',
    value: 'step1',
  },
  {
    label: '2. 응답자 조건',
    value: 'step2',
  },
  {
    label: '3. 리서치 목표',
    value: 'step3',
  },
  {
    label: '4. 상세 설계',
    value: 'step4',
  },
  {
    label: '5. 예상 견적 확인',
    value: 'step5',
  },
];

const ResearchHeader = ({ isStepBar = true, title }: PropsType) => {
  const STEP = useSelector<ReducerType, string>(state => state.researchCreate.step);
  return (
    <FlexBox justify={isStepBar ? 'space-between' : 'flex-start'} align={'center'} height={'38px'}>
      {/*{!isStepBar && <Icon name={'ALERT_NORMAL'} />}*/}
      <span css={[heading1_bold, { marginLeft: isStepBar ? 0 : '8px' }]}>{title}</span>
      {isStepBar && (
        <div css={stepBox}>
          {STEP_ARR.map((item, index) => {
            return (
              <div key={index} css={[body3_bold, stepTextBox]}>
                <span css={stepText(STEP, item.value)}>{item.label}</span>

                {index !== STEP_ARR.length - 1 && (
                  <div css={stepBarBox}>
                    <span css={stepBar(3.5)} />
                    <span css={stepBar(5)} />
                    <span css={stepBar(3.5)} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </FlexBox>
  );
};

export default ResearchHeader;

const stepBox = css`
  background: ${colors.grey._fa};
  border-radius: 20px;
  padding: 10px 24px;
  display: flex;
`;
const stepTextBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const stepText = (step, text) => css`
  color: ${step === text ? colors.grey._3c : colors.grey._cc};
`;
const stepBarBox = css`
  display: flex;
  margin: 0 10px;
`;
const stepBar = (width: number) => css`
  display: inline-block;
  width: ${width}px;
  height: 2px;
  background: #dcdcdc;
  margin-right: 1px;
`;
