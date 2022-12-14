import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { fontStyle } from '@mui/system';
import { heading4_bold } from '../../../styles/FontStyles';
import ClipLoader from 'react-spinners/ClipLoader';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  designBgColor?: string;
  text?: string;
  textColor?: string;
  type?: 'submit' | 'button' | 'reset';
  status?: 'normal' | 'disabled';
  theme?: 'light' | 'dark';
  style?: any;
  onClick?: () => void;
  [key: string]: any;
}

const BasicButton = ({
  isLoading = false,
  style,
  designBgColor,
  text,
  textColor,
  type = 'button',
  status = 'normal',
  theme = 'light',
  onClick,
  disabled = false,
  ...props
}: PropsType) => {
  const buttonTextStyle = heading4_bold;
  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      disabled={disabled}
      css={[buttonStyle(status, theme, isLoading, designBgColor), { ...style }, { background: designBgColor ? designBgColor : '' }]}
    >
      {isLoading ? (
        <span css={[buttonTextStyle, textStyle]}>
          <ClipLoader size={10} color={'white'} />
        </span>
      ) : (
        <span css={[buttonTextStyle, textStyle, { color: textColor }]}>{text ? text : 'button'}</span>
      )}
    </button>
  );
};

export default BasicButton;

const buttonStyle = (status, theme, isLoading, designBgColor) => css`
  width: 100%;
  padding: 16px 56px;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  cursor: ${status === 'disabled' || isLoading ? 'not-allowed' : 'pointer'};
  ${theme === 'light'
    ? `
    ${
      status === 'normal'
        ? `
      background: ${colors.cyan._500};
      &:hover {
        background: ${designBgColor === colors.red ? '#de3a42' : colors.cyan._700};
      }
      &:disabled {
        background: ${colors.cyan._300};
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
      &:disabled {
        background: ${colors.grey._99};;
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
  white-space: nowrap;
`;
