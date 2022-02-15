import React from 'react';
// Styles
import { css } from '@emotion/react';
import FlexBox from '../FlexBox';

interface PropsType {
  radioList: { name: string; value: string }[];
  register: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
}

const FormRadio = ({ radioList, register }: PropsType) => {
  return (
    <FlexBox justify={'flex-start'} padding={'10px 0'}>
      {radioList.map((el, index) => {
        return (
          <div css={fragmentStyle} key={index}>
            <label css={labelStyle} htmlFor={`field-${el.value}`}>
              <input
                css={inputStyle}
                {...register(el.name)}
                type="radio"
                name={el.name}
                value={el.value}
                id={`field-${el.value}`}
              />
              <span css={textStyle}>{el.value}</span>
            </label>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default FormRadio;

const fragmentStyle = css`
  margin-bottom: 10px;
  display: inline-block;
`;
const labelStyle = css`
  //width: 100%;
  //flex: 1;
`;
const inputStyle = css`
  margin-left: 15px;
`;
const textStyle = css`
  display: inline-block;
  margin-left: 5px;
`;
