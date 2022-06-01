import React from 'react';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../FlexBox';
import { caption1_regular, heading5_bold, heading5_regular } from '../../../styles/FontStyles';
import Icon from '../Icon';
import { css } from '@emotion/react';

interface PropsType {
  title: string;
  content: string;
  btnText?: string;
  showBtn?: boolean;
  style?: any;
}

const SettingCard = ({ title, content, btnText, showBtn = false, style }: PropsType) => {
  console.log(style);
  return (
    <FlexBox
      justify={showBtn ? 'space-around' : 'flex-start'}
      align={'center'}
      style={{ padding: '14px 8px 8px 16px', borderBottom: `1px solid ${colors.grey._cc}`, ...style }}
    >
      <FlexBox style={{ flex: 1 }} justify={'flex-start'} direction={'column'} align={'flex-start'}>
        <span css={[heading5_regular, { marginBottom: '10px', color: colors.grey._99 }]}>{title}</span>
        <span css={[heading5_bold]}>{content}</span>
      </FlexBox>
      {showBtn ? (
        <FlexBox style={{ flex: 1 }} justify={'flex-end'} align={'center'}>
          <span css={caption1_regular}>{btnText}</span>
          <Icon name={'CHEVRON_RIGHT_THIN'} />
        </FlexBox>
      ) : null}
    </FlexBox>
  );
};

export default SettingCard;
