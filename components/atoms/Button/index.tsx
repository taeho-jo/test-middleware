import React, { ButtonHTMLAttributes } from 'react';
// Components
import ClipLoader from 'react-spinners/ClipLoader';
// Styles
import { css } from '@emotion/react';
import { commonStyles } from '../../../styles/Common.styles';
const { colors } = commonStyles;
// Types
interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: 'primary' | 'secondary' | 'gray' | 'black' | 'danger';
  loading?: boolean;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  border?: 'none' | 'outline' | 'text';
}

const ButtonSizeStyle = {
  sm: { width: '60px', padding: '8px 0' },
  md: { width: '80px', padding: '8px 0' },
  lg: { width: '100px', padding: '8px 0' },
};

const Button = ({
  children = 'Button',
  size = 'sm',
  bgColor = 'primary',
  loading = false,
  active = true,
  type = 'button',
  border = 'none',
}: PropsType) => {
  return loading ? (
    <button type={type} css={test(size, bgColor, active, border)}>
      <ClipLoader
        color={border === 'none' ? colors.wh_1 : colors[bgColor]}
        loading={loading}
        size={16}
      />
    </button>
  ) : (
    <button css={test(size, bgColor, active, border)}>{children}</button>
  );
};

export default Button;

const test = (size, bgColor, active, border) => css`
  width: ${ButtonSizeStyle[size].width};
  padding: ${ButtonSizeStyle[size].padding};
  background: ${active && border === 'none'
    ? colors[bgColor]
    : active && (border === 'outline' || border === 'text')
    ? '#fff'
    : colors.gray};
  border: ${border === 'none' || border === 'text'
    ? 'none'
    : `2px solid ${colors[bgColor]}`};
  border-radius: 8px;
  color: ${border === 'none' ? colors.wh_1 : colors[bgColor]};
  cursor: ${active ? 'pointer' : 'not-allowed'};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  ${active ? `&:hover { background: ${colors[`hover_${bgColor}`]};}` : ''}
`;
