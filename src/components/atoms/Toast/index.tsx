import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_bold } from '../../../styles/FontStyles';

interface PropsType {
  text: string;
  num: number;
}
const Toast = ({ text, num }: PropsType) => {
  return (
    <div css={alertBox(24 * (num + 1) * 2 + 10)}>
      <span css={[body3_bold, alertTextStyle]}>{text}</span>
    </div>
  );
};

export default Toast;

const alertBox = top => css`
  background-color: ${colors.cyan._500};
  border-radius: 8px;
  padding: 15px;
  position: absolute;
  top: ${top}px;
  left: 50%;
  transform: translateX(-50%);
`;
const alertTextStyle = css`
  color: ${colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
