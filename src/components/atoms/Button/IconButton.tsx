import React from 'react';
import Icon from '../Icon';
import { IconType } from '../../../common/types/commonTypes';
import { css } from '@emotion/react';

interface PropsType {
  type?: 'submit' | 'button' | 'reset';
  name: IconType;
  size?: number;
  onClick?: () => void;
}

const IconButton = ({ type = 'button', name, size = 24, onClick }: PropsType) => {
  return (
    <button type={type} css={iconButtonStyle}>
      <Icon onClick={onClick} name={name} size={size} />
    </button>
  );
};

export default IconButton;

const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;
