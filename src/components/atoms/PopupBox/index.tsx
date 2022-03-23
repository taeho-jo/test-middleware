import React from 'react';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  width?: string;
  height?: string;
  radius?: string;
  padding?: string;
  children: React.ReactNode;
}

const PopupBox = ({ width = 'auto', height = 'auto', radius = '16px', padding = '0', children }: PropsType) => {
  return <div css={popupBoxStyle(width, height, radius, padding)}>{children}</div>;
};

export default PopupBox;

const popupBoxStyle = (width, height, radius, padding) => css`
  width: ${width};
  height: ${height};
  border: none;
  border-radius: ${radius};
  padding: ${padding};
  //position: absolute;
  //left: 50%;
  //transform: translate(-50%);
  background: ${colors.white};
  position: relative;
`;
