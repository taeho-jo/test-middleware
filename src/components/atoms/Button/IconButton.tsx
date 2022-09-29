import React from 'react';
import Icon from '../Icon';
import { IconType } from '../../../common/types/commonTypes';
import { css } from '@emotion/react';

interface PropsType {
  type?: 'submit' | 'button' | 'reset';
  name: IconType;
  size?: number;
  style?: any;
  onClick?: () => void;
  [key: string]: any;
}

const IconButton = ({ type = 'button', name, size = 24, onClick, style, ...props }: PropsType) => {
  return (
    <button type={type} css={iconButtonStyle} {...props}>
      <Icon onClick={onClick} name={name} size={size} style={style} />
    </button>
  );
};

export default IconButton;

const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;
