import React from 'react';
// Styles
import { css } from '@emotion/react';
import { commonStyles } from '../../../styles/Common.styles';

// Types
interface PropsType {
  text: string;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  cursor?: string;
  onClick?: () => void;
}
const ShortText = ({
  text,
  color = commonStyles.colors.b_1,
  fontSize = '16px',
  fontWeight = 'normal',
  cursor = 'default',
  onClick,
}: PropsType) => {
  return (
    <span
      onClick={onClick}
      css={textStyle(color, fontSize, fontWeight, cursor)}
    >
      {text}
    </span>
  );
};

export default ShortText;

const textStyle = (color, fontSize, fontWeight, cursor) => css`
  color: ${color};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  cursor: ${cursor};
`;
