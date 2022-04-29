import React from 'react';
import { css } from '@emotion/react';
import { caption1_regular, heading5_medium } from '../../../styles/FontStyles';

interface PropsType {
  type?: 'submit' | 'button' | 'reset';
  text?: string;
  textStyle: any;
  onClick?: () => void;
}

const TextButton = ({ type = 'button', text = 'button', textStyle = heading5_medium, onClick }: PropsType) => {
  return (
    <button type={type} onClick={onClick} css={textButtonStyle}>
      <span css={[textStyle, { textDecoration: 'underline' }]}>{text}</span>
    </button>
  );
};

export default TextButton;

const textButtonStyle = css`
  border: none;
  background: none;
  cursor: pointer;
`;
