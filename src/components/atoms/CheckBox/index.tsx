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
  registerOptions?: {
    [key: string]: any;
  };
}

const CheckBox = ({ inputName, label, register, style, registerOptions, errors }: PropsType) => {
  const vaildation = errors ? (errors[inputName] ? false : true) : true;

  return (
    <div css={[checkBoxContainerStyle, { ...style }]}>
      <input id={inputName} type={'checkbox'} {...register(inputName, registerOptions)} />
      <label htmlFor={inputName} css={[caption1_regular, labelTextStyle(vaildation)]} dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
};

export default CheckBox;

const checkBoxContainerStyle = css`
  display: flex;
`;

const labelTextStyle = vaildation => css`
  ${!vaildation &&
  css`
    color: red;
    label > a {
      color: red;
    }
  `}
`;
