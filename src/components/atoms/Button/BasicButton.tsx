import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { fontStyle } from '@mui/system';
import { heading4_bold } from '../../../styles/FontStyles';
import ClipLoader from 'react-spinners/ClipLoader';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  designBgColor?: string;
  text?: string;
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
  type = 'button',
  status = 'normal',
  theme = 'light',
  onClick,
  ...props
}: PropsType) => {
  const buttonTextStyle = heading4_bold;
  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      disabled={isLoading}
      css={[buttonStyle(status, theme, isLoading), { ...style }, { background: designBgColor ? designBgColor : '' }]}
    >
      {isLoading ? (
        <span css={[buttonTextStyle, textStyle]}>
          <ClipLoader size={10} color={'white'} />
        </span>
      ) : (
        <span css={[buttonTextStyle, textStyle]}>{text ? text : 'button'}</span>
      )}
    </button>
  );
};

export default BasicButton;

const buttonStyle = (status, theme, isLoading) => css`
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
