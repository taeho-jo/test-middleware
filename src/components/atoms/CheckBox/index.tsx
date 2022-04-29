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
    <div css={{ ...style }}>
      <FlexBox justify={'flex-start'} align={'center'}>
        <input id={inputName} type={'checkbox'} {...register(inputName, registerOptions)} />
        <label htmlFor={inputName} css={[caption1_regular, labelTextStyle(vaildation)]} dangerouslySetInnerHTML={{ __html: label }} />
      </FlexBox>
    </div>
  );
};

export default CheckBox;

const labelTextStyle = vaildation => css`
  color: ${vaildation ? 'black' : 'red'};
`;

// { color: errors[inputName] ? 'red' : 'black' }
