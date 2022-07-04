import React from 'react';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  width?: string;
  height?: string;
  radius?: string;
  padding?: string;
  style?: any;
  children: React.ReactNode;
}

const PopupBox = ({ width = 'auto', height = 'auto', radius = '16px', padding = '0', style, children }: PropsType) => {
  return <div css={[popupBoxStyle(width, height, radius, padding), style]}>{children}</div>;
};

export default PopupBox;

const popupBoxStyle = (width, height, radius, padding) => css`
  width: ${width};
  height: ${height};
  border: none;
  border-radius: ${radius};
  padding: ${padding};
  background: ${colors.white};
  position: relative;
  box-sizing: border-box;
  @media (max-width: 390px) {
    width: 100%;
  }
`;
