import React from 'react';
import { css } from '@emotion/react';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

interface PropsType {
  handleMoveNextStep: () => void;
  handleMovePrevStep: () => void;
}
const ResearchFooter = ({ handleMoveNextStep, handleMovePrevStep }: PropsType) => {
  const CREATE_STEP = useSelector<ReducerType, string>(state => state.researchCreate.step);
  return (
    <div css={container}>
      <div css={btnContainer}>
        <IconTextButton
          onClick={handleMovePrevStep}
          name={'CHEVRON_LEFT_THIN'}
          iconPosition={'left'}
          text={'이전'}
          disabledbtn={CREATE_STEP === 'step1' ? 'true' : 'false'}
        />
        <IconTextButton onClick={handleMoveNextStep} name={'CHEVRON_RIGHT_THIN'} text={'다음'} />
      </div>
    </div>
  );
};

export default ResearchFooter;

const container = css`
  width: 100%;
  max-width: 1262px;
  min-width: 1262px;
`;
const btnContainer = css`
  width: 730px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
