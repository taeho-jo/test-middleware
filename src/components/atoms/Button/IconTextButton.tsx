import React from 'react';
import Icon from '../Icon';
import { heading5_regular } from '../../../styles/FontStyles';
import { IconType } from '../../../common/types/commonTypes';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  // status?: 'normal' | 'disabled';
  type?: 'submit' | 'button' | 'reset';
  text?: string;
  whiteSpace?: string;
  textStyle?: any;
  fontSize?: string;
  name: IconType;
  iconPosition?: 'left' | 'right';
  roundBorder?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

const IconTextButton = ({
  // status = 'disabled',
  textStyle = heading5_regular,
  whiteSpace,
  text = 'Button',
  fontSize = '14px',
  type = 'button',
  name,
  iconPosition = 'right',
  roundBorder = true,
  onClick,
  disabled = false,
  ...props
}: PropsType) => {
  return (
    <button
      disabled={disabled ? disabled : props.disabledbtn === 'true' ? true : false}
      type={type}
      onClick={onClick}
      css={iconTextButtonStyle(roundBorder, iconPosition, whiteSpace)}
      {...props}
    >
      {iconPosition === 'left' ? <Icon name={disabled ? `${name}_DISABLED` : name} size={24} iconColor={props.iconColor} /> : null}
      <span
        css={[
          textStyle === 'custom'
            ? { fontSize: fontSize ? fontSize : '14px', fontWeight: '400', height: 'auto' }
            : noBorderTextStyle(roundBorder, disabled),
          { margin: iconPosition === 'right' ? '0 8px 0 0' : '0 0 0 8px', color: props.disabledbtn === 'true' ? colors.grey._99 : colors.grey._3c },
          textStyle,
        ]}
      >
        {text}
      </span>
      {iconPosition === 'right' ? <Icon name={disabled ? `${name}_DISABLED` : name} size={24} iconColor={props.iconColor} /> : null}
    </button>
  );
};

export default IconTextButton;

const iconTextButtonStyle = (roundBorder, iconPosition, whiteSpace) => css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  white-space: ${whiteSpace ? whiteSpace : 'nowrap'};
  cursor: pointer;
  padding: ${iconPosition === 'right' ? '0 8px 0 16px' : '0 16px 0 8px'};
  ${roundBorder
    ? `
    border: 1px solid ${colors.grey._3c};
    border-radius: 36px;
    background: ${colors.white};
  `
    : `
    border: none;
    background: none;
  `}
  &:hover {
    ${roundBorder
      ? `
      background: ${colors.grey._ec};
    `
      : ``}
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.grey._99}
      ${roundBorder
        ? `
      background: ${colors.grey._f7};
      border: 1px solid ${colors.grey._cc};
    `
        : ``};
  }
`;

const noBorderTextStyle = (roundBorder, disabled) => css`
  ${!roundBorder
    ? `
    &:hover {
      font-weight: 700;
    }
  `
    : ``}
  ${disabled
    ? `
    color: ${colors.grey._cc};
    
    &:hover {
      font-weight: 500;
    }
    
  `
    : ``}
`;
