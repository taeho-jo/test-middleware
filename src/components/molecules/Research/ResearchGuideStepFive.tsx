import React from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';

const ResearchGuideStepFive = () => {
  return (
    <FlexBox
      direction={'column'}
      width={'100%'}
      height={'500px'}
      style={[selectContainer, { border: '1px solid #dcdcdc', background: colors.grey._fa }]}
    >
      <div css={[topContainer, { background: colors.grey._fa }]} />
      <div css={bottomContainer} />
    </FlexBox>
  );
};
export default ResearchGuideStepFive;

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
