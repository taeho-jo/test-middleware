import React from 'react';
// Components
import FlexBox from '../FlexBox';
// Styles
import { heading1_bold } from '../../../styles/FontStyles';

// Types
interface PropsType {
  title: string;
}

const PageTitle = ({ title }: PropsType) => {
  return (
    <FlexBox justify={'flex-start'} padding={'21px 32px'}>
      <span css={[heading1_bold, { display: 'inline-block' }]}>{title}</span>
    </FlexBox>
  );
};

export default PageTitle;
