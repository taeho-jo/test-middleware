import React from 'react';
import Icon from '../Icon';
import TextButton from './TextButton';
import { heading5_bold, heading5_medium } from '../../../styles/FontStyles';
import { IconType } from '../../../common/types/commonTypes';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  // status?: 'normal' | 'disabled';
  type?: 'submit' | 'button' | 'reset';
  text?: string;
  textStyle?: any;
  name: IconType;
  iconPosition?: 'left' | 'right';
  roundBorder?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

const IconTextButton = ({
  // status = 'disabled',
  textStyle = heading5_medium,
  text = 'Button',
  type = 'button',
  name,
  iconPosition = 'right',
  roundBorder = true,
  onClick,
  disabled = false,
  ...props
}: PropsType) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} css={iconTextButtonStyle(roundBorder, iconPosition, status)} {...props}>
      {iconPosition === 'left' ? <Icon name={disabled ? `${name}_DISABLED` : name} size={24} /> : null}
      <span
        css={[
          [textStyle, noBorderTextStyle(roundBorder, disabled)],
          { padding: '5px 0', margin: iconPosition === 'right' ? '0 8px 0 0' : '0 0 0 8px' },
        ]}
      >
        {text}
      </span>
      {iconPosition === 'right' ? <Icon name={disabled ? `${name}_DISABLED` : name} size={24} /> : null}
    </button>
  );
};

export default IconTextButton;

const iconTextButtonStyle = (roundBorder, iconPosition, status) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    ${roundBorder
      ? `
      background: ${colors.grey._f7};
      border: 1px solid ${colors.grey._cc};
    `
      : ``}
  }
`;

// ${roundBorder
//     ? `
//     border: 1px solid ${colors.grey._3c};
// border-radius: 36px;
// `
//     : `
// border: none;
// `};
//   ${roundBorder
//   ? `
//     ${
//     status === 'disabled'
//       ? `
//         border: 1px solid ${colors.grey._cc};
//         background: ${colors.grey._f7};`
//       : `
//       background: ${colors.white};
//       &:hover {
//         background: ${colors.grey._ec}
//       }
//     `
//   }
//   `
//   : `background: ${colors.white}`}

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
// ${roundBorder
//     ? `
//     ${
//       status === 'normal'
//         ? `
//       background: ${colors.white};
// &:hover {
//   background: ${colors.grey._ec};
// }
// `
//         : `
// background: ${colors.grey._cc};
// `
//     };
//   `
// : `
//     ${
//   status === 'normal'
//     ? `
//       &:hover {
//         font-weight: 700;
//       }
//     `
//     : `
//         font-weight: 700;
//         `
// }
//   `}
