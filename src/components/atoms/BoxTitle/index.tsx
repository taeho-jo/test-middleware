import React from 'react';
// Components
import FlexBox from '../FlexBox';
// Styles
import { css } from '@emotion/react';
import { colors, commonStyles } from '../../../styles/Common.styles';
// Types
interface PropsType {
  title: string;
}

const BoxTitle = ({ title }: PropsType) => {
  return (
    <FlexBox justify={'flex-start'} padding={'10px 0'}>
      <h3 css={mainTitleStyle}>{title}</h3>
    </FlexBox>
  );
};

export default BoxTitle;

const mainTitleStyle = css`
  font-size: 20px;
  color: ${colors.green._500};
`;
