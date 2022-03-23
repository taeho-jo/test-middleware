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

const PageTitle = ({ title }: PropsType) => {
  return (
    <FlexBox justify={'flex-start'} padding={'10px 0'}>
      <h1 css={mainTitleStyle}>{title}</h1>
    </FlexBox>
  );
};

export default PageTitle;

const mainTitleStyle = css`
  font-size: 30px;
  font-weight: 900;
  color: ${colors.green._500};
`;
