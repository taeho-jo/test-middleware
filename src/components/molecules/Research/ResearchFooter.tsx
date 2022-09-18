import React from 'react';
import { css } from '@emotion/react';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/Common.styles';

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
        {CREATE_STEP !== 'step5' && <IconTextButton onClick={handleMoveNextStep} name={'CHEVRON_RIGHT_THIN'} text={'다음'} />}
      </div>

      {CREATE_STEP === 'step5' && (
        <Button
          onClick={handleMoveNextStep}
          btnText={'하루안에 무료로 리서치 설계받기'}
          backgroundColor={colors.grey._3c}
          btnTextColor={'white'}
          style={{ width: '498px', marginTop: '16px' }}
        />
      )}
    </div>
  );
};

export default ResearchFooter;

const container = css`
  width: 100%;
  max-width: 1262px;
  min-width: 1262px;
  display: flex;
  justify-content: space-between;
`;
const btnContainer = css`
  width: 730px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
