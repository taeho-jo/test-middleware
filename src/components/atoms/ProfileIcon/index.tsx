import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../FlexBox';
import { body2_bold } from '../../../styles/FontStyles';

interface PropsType {
  width?: string;
  margin?: string;
}
const ProfileIcon = ({ width = '32px', margin = '0' }: PropsType) => {
  return (
    <div css={profileBoxStyle(width, margin)}>
      <FlexBox height={'100%'} justify={'center'} align={'center'}>
        <span css={body2_bold}>A</span>
      </FlexBox>
    </div>
  );
};
export default ProfileIcon;

const profileBoxStyle = (width, margin) => css`
  width: ${width};
  height: ${width};
  margin: ${margin};
  border-radius: 50%;
  color: ${colors.white};
  background-color: ${colors.green._500};
`;
