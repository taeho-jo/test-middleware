import React from 'react';
// Components
import Icon from '../Icon';
import ClipLoader from 'react-spinners/ClipLoader';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body2_bold, caption1_regular } from '../../../styles/FontStyles';
// Types
import { ColorsType, IconType } from '../../../common/types/commonTypes';

interface PropsType {
  buttonType?: 'basic' | 'action' | 'icon';
  backgroundColor?: ColorsType;
  full?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  btnText?: string;
  isLoading?: boolean;
  icon?: IconType;
  padding?: string;
  start?: string;
  size?: number;
  btnTextColor?: string;
  [key: string]: any;
}

const Button = ({
  buttonType = 'basic',
  type = 'button',
  backgroundColor = '#24e1d5',
  full = false,
  onClick,
  btnText = 'button',
  isLoading = false,
  icon,
  padding,
  start = '',
  size,
  btnTextColor,
  ...props
}: PropsType) => {
  return (
    <>
      {buttonType === 'basic' ? (
        <button type={type} onClick={onClick} css={buttonStyle(backgroundColor, full, padding)} {...props}>
          <div css={isLoading ? loadingStyle : ''}>
            <ClipLoader color={'white'} loading={isLoading} size={16} />
          </div>
          <span css={isLoading ? textStyle : [body2_bold, { color: btnTextColor }]}>{btnText}</span>
        </button>
      ) : buttonType === 'action' ? (
        <button type={type} onClick={onClick} css={actionButtonStyle(full, padding)}>
          {start === 'icon' ? (
            <>
              <Icon name={icon ? icon : 'NAVIGATION_CHEVRON_RIGHT'} size={size ? size : 24} />
              <span css={[caption1_regular, { marginLeft: '12px' }]}>{btnText}</span>
            </>
          ) : (
            <>
              <span css={caption1_regular}>{btnText}</span>
              <Icon name={icon ? icon : 'NAVIGATION_CHEVRON_RIGHT'} size={size ? size : 24} />
            </>
          )}
        </button>
      ) : (
        <button type={type} onClick={onClick} css={iconButtonStyle}>
          <Icon name={icon ? icon : 'NAVIGATION_CHEVRON_RIGHT'} size={size ? size : 24} />
          {/*<Icon name={'ACTION_CREATE'} size={20} />*/}
        </button>
      )}
    </>
  );
};

export default Button;

// basic button
const buttonStyle = (backgroundColor, full, padding) => css`
  padding: ${padding ? padding : '14px 53.5px'};
  background: ${backgroundColor ? backgroundColor : colors.cyan._500};
  border-radius: 12px;
  border: none;
  color: ${colors.white};
  width: ${full ? '100%' : 'auto'};
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
`;

// action button
const actionButtonStyle = (full, padding) => css`
  padding: ${padding ? padding : '5px 7px 5px 16px'};
  background: ${colors.white};
  border: 1px solid ${colors.grey._3c};
  border-radius: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: ${full ? '100%' : 'auto'};
  box-sizing: border-box;
}
`;

// icon button
const iconButtonStyle = css`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: 1px solid ${colors.grey._3c};
  background: ${colors.white};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

// loading style
const loadingStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //z-index: 10;
  padding: 14px 53.5px;
  box-sizing: border-box;
`;

const textStyle = [
  body2_bold,
  css`
    visibility: hidden;
  `,
];
