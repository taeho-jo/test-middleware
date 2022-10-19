import React from 'react';
import FlexBox from '../FlexBox';
import Icon from '../Icon';
import { heading3_bold } from '../../../styles/FontStyles';
interface PropsType {
  title?: string;
  onClick?: () => void;
  icon?: boolean;
}
const ToggleHeader = ({ title = 'title', onClick, icon = true }: PropsType) => {
  return (
    <FlexBox onClick={onClick} justify={'space-between'} align={'center'} style={{ marginBottom: '18px' }}>
      <span css={heading3_bold}>{title}</span>
      {icon && <Icon name={'CHEVRON_DOWN'} />}
    </FlexBox>
  );
};

export default ToggleHeader;
