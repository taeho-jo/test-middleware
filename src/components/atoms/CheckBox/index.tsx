import React from 'react';
import FlexBox from '../FlexBox';
import { caption1_regular } from '../../../styles/FontStyles';
import { css } from '@emotion/react';

interface PropsType {
  inputName: string;
  label: string;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  style?: any;
  errors?: object;
  checked?: boolean;
  handleChangeCheckBox?: () => void;
  registerOptions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const CheckBox = ({ inputName, label, register, style, registerOptions, errors, checked, handleChangeCheckBox, ...props }: PropsType) => {
  const vaildation = errors ? (errors[inputName] ? false : true) : true;

  return (
    <div css={[checkBoxContainerStyle, { ...style }]}>
      <input onClick={handleChangeCheckBox} id={inputName} checked={checked} type={'checkbox'} {...props} {...register(inputName, registerOptions)} />
      <label htmlFor={inputName} css={[caption1_regular, labelTextStyle(vaildation)]} dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
};

export default CheckBox;

const checkBoxContainerStyle = css`
  display: flex;
`;

const labelTextStyle = vaildation => css`
  white-space: nowrap;
  ${!vaildation &&
  css`
    color: red;
    label > a {
      color: red;
    }
  `}
`;
