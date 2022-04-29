import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { fontStyle } from '@mui/system';
import { heading4_bold } from '../../../styles/FontStyles';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  designBgColor?: string;
  text?: string;
  type?: 'submit' | 'button' | 'reset';
  status?: 'normal' | 'disabled';
  theme?: 'light' | 'dark';
  onClick?: () => void;
}

const BasicButton = ({ designBgColor, text, type = 'button', status = 'normal', theme = 'light', onClick }: PropsType) => {
  const buttonTextStyle = heading4_bold;
  return (
    <button onClick={onClick} type={type} css={[buttonStyle(status, theme), { background: designBgColor ? designBgColor : '' }]}>
      <span css={[buttonTextStyle, textStyle]}>{text ? text : 'button'}</span>
    </button>
  );
};

export default BasicButton;

const buttonStyle = (status, theme) => css`
  width: 100%;
  padding: 16px 56px;
  border-radius: 8px;
  border: none;
  cursor: ${status === 'disabled' ? 'not-allowed' : 'pointer'};
  ${theme === 'light'
    ? `
    ${
      status === 'normal'
        ? `
      background: ${colors.cyan._500};
      &:hover {
        background: ${colors.cyan._700};
      }
    `
        : `
          background: ${colors.cyan._300};
        `
    };
  `
    : `
    ${
      status === 'normal'
        ? `
      background: ${colors.grey._3c};
      &:hover {
        background: ${colors.grey._2c};
      }
    `
        : `
        background: ${colors.grey._cc};
        `
    }
  `}
`;
const textStyle = css`
  color: white;
`;
