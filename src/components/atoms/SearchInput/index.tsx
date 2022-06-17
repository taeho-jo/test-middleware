import React, { InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import Icon from '../Icon';
import FlexBox from '../FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_regular } from '../../../styles/FontStyles';

interface PropsType {
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errorMsg?: string;
  errors?: object;
  placeholder?: string;
  width?: string;
  label: string;
  disabled?: boolean;
  style?: any;
  onClick?: () => void;
  registerOptions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const SearchInput = ({
  register,
  errorMsg,
  errors,
  placeholder = 'search for..',
  width = '100%',
  label,
  disabled = false,
  registerOptions,
  style,
  ...props
}: PropsType) => {
  return (
    <FlexBox style={{ position: 'relative', ...style }}>
      <Icon width={'0px'} height={'0px'} iconColor={disabled ? colors.grey._cc : ''} style={searchInputIcon} name={'ACTION_SEARCH'} size={24} />
      <input
        disabled={disabled}
        css={[heading5_regular, searchInputBox(width)]}
        type="text"
        placeholder={placeholder}
        autoComplete={'off'}
        id={label}
        name={label}
        {...props}
        {...register(label, registerOptions)}
      />
    </FlexBox>
  );
};

export default SearchInput;

const searchInputIcon = css`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

const searchInputBox = width => css`
  width: ${width};
  background: ${colors.grey._f7};
  border-radius: 36px;
  border: none;
  height: 32px;
  padding-left: 48px;
  outline: none;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.grey._99};
  }
  :hover {
    background: ${colors.grey._ec};
  }
  :disabled {
    background: ${colors.grey._f7};
    ::placeholder {
      color: ${colors.grey._cc};
    }
  }
`;
