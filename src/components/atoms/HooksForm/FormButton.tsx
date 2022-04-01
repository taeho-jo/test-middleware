import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  name: string;
  size: string;
  active: boolean;
  bgColor: string;
  hoverColor: string;
}

const ButtonSizeStyle = {
  sm: {
    width: '68px',
  },
  md: {
    width: '100px',
  },
  lg: {
    width: '150px',
  },
};

const FormButton = ({ name, size, active, bgColor, hoverColor }: PropsType) => {
  return (
    <input
      css={buttonStyle(size, active, bgColor, hoverColor)}
      type="submit"
      value={name}
    />
  );
};

export default FormButton;

const buttonStyle = (size, active, bgColor, hoverColor) => css`
  width: ${ButtonSizeStyle[size].width};
  height: 35px;
  background: ${active ? bgColor : colors.grey._3c};
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  cursor: ${active ? 'pointer' : 'not-allowed'};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  ${active
    ? `
    &:hover {
    background: ${hoverColor};
  }
  `
    : ''}
`;
