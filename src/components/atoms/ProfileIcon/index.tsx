import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../FlexBox';
import { body2_bold } from '../../../styles/FontStyles';

interface PropsType {
  size?: string;
  margin?: string;
  name?: string;
  backgroundColor?: string;
  color?: string;
  fontStyle?: any;
}
const ProfileIcon = ({
  fontStyle,
  size = '32px',
  margin = '0',
  name = 'A',
  backgroundColor = colors.green._500,
  color = colors.white,
}: PropsType) => {
  return (
    <div css={profileBoxStyle(size, margin, backgroundColor, color)}>
      <FlexBox height={'100%'} justify={'center'} align={'center'}>
        <span css={fontStyle ? [fontStyle, { color: 'white' }] : [body2_bold, { color: 'white' }]}>{name}</span>
      </FlexBox>
    </div>
  );
};
export default ProfileIcon;

const profileBoxStyle = (size, margin, backgroundColor, color) => css`
  width: ${size};
  height: ${size};
  margin: ${margin};
  border-radius: 50%;
  color: ${color};
  background-color: ${backgroundColor};
`;
